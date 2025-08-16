from flask import Flask, render_template, request, jsonify, send_file
import pandas as pd
import plotly.graph_objects as go
from plotly.subplots import make_subplots
from datetime import datetime
import numpy as np
import os
import io
import base64

app = Flask(__name__)

# Ensure the uploads directory exists
os.makedirs('uploads', exist_ok=True)

def load_data(file_path='complete_categorized_jobs.csv'):
    """Load the categorized job data"""
    try:
        df = pd.read_csv(file_path)
        print(f"📊 Loading job market data...")
        print(f"✅ Loaded {len(df)} jobs with {df['category'].nunique()} categories")
        return df
    except FileNotFoundError:
        print("❌ Error: complete_categorized_jobs.csv not found!")
        return None

def create_job_market_overview(df):
    """Create job market overview charts"""
    # Calculate key metrics
    total_jobs = len(df)
    unique_companies = df['company'].nunique()
    easy_apply_jobs = len(df[df['tags'].str.contains('Easy Apply', na=False)])
    
    # Top categories - use actual data
    category_counts = df['category'].value_counts().head(8)
    
    # Recent jobs (last 7 days)
    recent_jobs = len(df[df['days_ago'] <= 7])
    
    # Create separate charts for mobile responsiveness
    # Chart 1: Top Job Categories
    fig1 = go.Figure(data=[
        go.Bar(x=list(category_counts.index), y=[int(x) for x in category_counts.values], 
               marker_color='#007AFF')
    ])
    fig1.update_layout(
        title="Top Job Categories",
        height=300,
        plot_bgcolor='rgba(0,0,0,0)',
        paper_bgcolor='rgba(0,0,0,0)',
        font=dict(color='white', size=12),
        margin=dict(l=20, r=20, t=40, b=20)
    )
    fig1.update_xaxes(showgrid=False, zeroline=False, color='white')
    fig1.update_yaxes(showgrid=False, zeroline=False, color='white')
    
    # Chart 2: Category Distribution (Pie)
    fig2 = go.Figure(data=[
        go.Pie(labels=list(category_counts.index), values=[int(x) for x in category_counts.values], 
               hole=0.4, textinfo='label+percent')
    ])
    fig2.update_layout(
        title="Category Distribution",
        height=300,
        plot_bgcolor='rgba(0,0,0,0)',
        paper_bgcolor='rgba(0,0,0,0)',
        font=dict(color='white', size=12),
        margin=dict(l=20, r=20, t=40, b=20)
    )
    
    # Chart 3: Top Companies
    company_counts = df['company'].value_counts().head(8)
    fig3 = go.Figure(data=[
        go.Bar(x=list(company_counts.index), y=[int(x) for x in company_counts.values], 
               marker_color='#AF52DE')
    ])
    fig3.update_layout(
        title="Top Companies",
        height=300,
        plot_bgcolor='rgba(0,0,0,0)',
        paper_bgcolor='rgba(0,0,0,0)',
        font=dict(color='white', size=12),
        margin=dict(l=20, r=20, t=40, b=20)
    )
    fig3.update_xaxes(showgrid=False, zeroline=False, color='white')
    fig3.update_yaxes(showgrid=False, zeroline=False, color='white')
    
    # Create a combined figure for desktop (2x2 grid)
    fig = make_subplots(
        rows=2, cols=2,
        subplot_titles=('Top Job Categories', 'Category Distribution (Pie)', '', 'Top Companies'),
        specs=[[{"type": "bar"}, {"type": "pie"}], [{"type": "bar"}, {"type": "bar"}]],
        vertical_spacing=0.15,
        horizontal_spacing=0.1
    )
    
    # Bar chart for categories - use actual counts
    category_x = list(category_counts.index)
    category_y = [int(x) for x in category_counts.values]  # Convert to regular Python integers
    
    fig.add_trace(
        go.Bar(x=category_x, y=category_y, 
               marker_color='#007AFF', name="Categories", orientation='v'),
        row=1, col=1
    )
    
    # Pie chart for category distribution
    pie_labels = list(category_counts.index)
    pie_values = [int(x) for x in category_counts.values]  # Convert to regular Python integers
    
    fig.add_trace(
        go.Pie(labels=pie_labels, values=pie_values, 
               hole=0.4, name="Categories", textinfo='label+percent'),
        row=1, col=2
    )
    
    # Top companies - use actual data
    company_counts = df['company'].value_counts().head(8)
    company_x = list(company_counts.index)
    company_y = [int(x) for x in company_counts.values]  # Convert to regular Python integers
    
    fig.add_trace(
        go.Bar(x=company_x, y=company_y, 
               marker_color='#AF52DE', name="Companies", orientation='v'),
        row=2, col=2
    )
    
    # Update layout
    fig.update_layout(
        height=600,
        showlegend=False,
        plot_bgcolor='rgba(0,0,0,0)',
        paper_bgcolor='rgba(0,0,0,0)',
        font=dict(color='white', size=12),
        margin=dict(l=20, r=20, t=40, b=20)
    )
    
    # Update axes
    fig.update_xaxes(showgrid=False, zeroline=False, color='white')
    fig.update_yaxes(showgrid=False, zeroline=False, color='white')
    
    metrics = {
        'total_jobs': total_jobs,
        'unique_companies': unique_companies,
        'easy_apply_jobs': easy_apply_jobs,
        'recent_jobs': recent_jobs
    }
    
    return fig, fig1, fig2, fig3, metrics

def create_category_analysis(df):
    """Create detailed category analysis"""
    # Filter out 'Other' category for better analysis
    df_categorized = df[df['category'] != 'Other']
    
    # Calculate category statistics
    category_stats = df_categorized.groupby('category').agg({
        'title': 'count',
        'salary_min': 'mean',
        'salary_max': 'mean',
        'days_ago': lambda x: (x <= 7).sum(),
        'tags': lambda x: x.str.contains('Easy Apply').sum()
    }).rename(columns={
        'title': 'Job_Count',
        'salary_min': 'Avg_Salary',
        'salary_max': 'Avg_Max_Salary',
        'days_ago': 'Recent_Jobs',
        'tags': 'Easy_Apply_Count'
    })
    
    # Calculate median salary
    category_stats['Median_Salary'] = df_categorized.groupby('category')['salary_min'].median()
    
    # Create separate charts for mobile responsiveness
    # Chart 1: Jobs by Category
    fig1 = go.Figure(data=[
        go.Bar(x=list(category_stats.index), y=[int(x) for x in category_stats['Job_Count']], 
               marker_color='#007AFF')
    ])
    fig1.update_layout(
        title="Jobs by Category",
        height=300,
        plot_bgcolor='rgba(0,0,0,0)',
        paper_bgcolor='rgba(0,0,0,0)',
        font=dict(color='white', size=12),
        margin=dict(l=20, r=20, t=40, b=20)
    )
    fig1.update_xaxes(showgrid=False, zeroline=False, color='white')
    fig1.update_yaxes(showgrid=False, zeroline=False, color='white')
    
    # Chart 2: Avg vs Median Salary
    salary_data = category_stats[category_stats['Avg_Salary'] > 0]
    if len(salary_data) > 0:
        fig2 = go.Figure()
        fig2.add_trace(go.Bar(
            x=list(salary_data.index), 
            y=[int(x) for x in salary_data['Avg_Salary']], 
            name='Average Salary',
            marker_color='#34C759'
        ))
        fig2.add_trace(go.Bar(
            x=list(salary_data.index), 
            y=[int(x) for x in salary_data['Median_Salary']], 
            name='Median Salary',
            marker_color='#FF9500'
        ))
        fig2.update_layout(
            title="Avg vs Median Salary",
            height=300,
            plot_bgcolor='rgba(0,0,0,0)',
            paper_bgcolor='rgba(0,0,0,0)',
            font=dict(color='white', size=12),
            margin=dict(l=20, r=20, t=40, b=20),
            barmode='group'
        )
        fig2.update_xaxes(showgrid=False, zeroline=False, color='white')
        fig2.update_yaxes(showgrid=False, zeroline=False, color='white')
    else:
        # Create empty chart if no salary data
        fig2 = go.Figure()
        fig2.add_annotation(text="No salary data available", xref="paper", yref="paper", x=0.5, y=0.5, showarrow=False)
        fig2.update_layout(
            title="Avg vs Median Salary",
            height=300,
            plot_bgcolor='rgba(0,0,0,0)',
            paper_bgcolor='rgba(0,0,0,0)',
            font=dict(color='white', size=12),
            margin=dict(l=20, r=20, t=40, b=20)
        )
    
    # Chart 3: Recent Jobs (<=7 days)
    recent_data = category_stats[category_stats['Recent_Jobs'] > 0]
    if len(recent_data) > 0:
        fig3 = go.Figure(data=[
            go.Bar(x=list(recent_data.index), y=[int(x) for x in recent_data['Recent_Jobs']], 
                   marker_color='#FF9500')
        ])
        fig3.update_layout(
            title="Recent Jobs (≤7 days)",
            height=300,
            plot_bgcolor='rgba(0,0,0,0)',
            paper_bgcolor='rgba(0,0,0,0)',
            font=dict(color='white', size=12),
            margin=dict(l=20, r=20, t=40, b=20)
        )
        fig3.update_xaxes(showgrid=False, zeroline=False, color='white')
        fig3.update_yaxes(showgrid=False, zeroline=False, color='white')
    else:
        # Create empty chart if no recent data
        fig3 = go.Figure()
        fig3.add_annotation(text="No recent jobs data", xref="paper", yref="paper", x=0.5, y=0.5, showarrow=False)
        fig3.update_layout(
            title="Recent Jobs (≤7 days)",
            height=300,
            plot_bgcolor='rgba(0,0,0,0)',
            paper_bgcolor='rgba(0,0,0,0)',
            font=dict(color='white', size=12),
            margin=dict(l=20, r=20, t=40, b=20)
        )
    
    # Chart 4: Easy Apply Jobs
    easy_apply_data = category_stats[category_stats['Easy_Apply_Count'] > 0]
    if len(easy_apply_data) > 0:
        fig4 = go.Figure(data=[
            go.Bar(x=list(easy_apply_data.index), y=[int(x) for x in easy_apply_data['Easy_Apply_Count']], 
                   marker_color='#AF52DE')
        ])
        fig4.update_layout(
            title="Easy Apply Jobs",
            height=300,
            plot_bgcolor='rgba(0,0,0,0)',
            paper_bgcolor='rgba(0,0,0,0)',
            font=dict(color='white', size=12),
            margin=dict(l=20, r=20, t=40, b=20)
        )
        fig4.update_xaxes(showgrid=False, zeroline=False, color='white')
        fig4.update_yaxes(showgrid=False, zeroline=False, color='white')
    else:
        # Create empty chart if no easy apply data
        fig4 = go.Figure()
        fig4.add_annotation(text="No Easy Apply data", xref="paper", yref="paper", x=0.5, y=0.5, showarrow=False)
        fig4.update_layout(
            title="Easy Apply Jobs",
            height=300,
            plot_bgcolor='rgba(0,0,0,0)',
            paper_bgcolor='rgba(0,0,0,0)',
            font=dict(color='white', size=12),
            margin=dict(l=20, r=20, t=40, b=20)
        )
    
    # Create a combined figure for desktop (2x2 grid)
    fig = make_subplots(
        rows=2, cols=2,
        subplot_titles=('Jobs by Category', 'Avg vs Median Salary', 'Recent Jobs (<=7 days)', 'Easy Apply Jobs'),
        specs=[[{"type": "bar"}, {"type": "bar"}], [{"type": "bar"}, {"type": "bar"}]],
        vertical_spacing=0.15,
        horizontal_spacing=0.1
    )
    
    # Jobs per category - use actual counts
    job_count_x = list(category_stats.index)
    job_count_y = [int(x) for x in category_stats['Job_Count']]  # Convert to regular Python integers
    
    fig.add_trace(
        go.Bar(x=job_count_x, y=job_count_y, 
               marker_color='#007AFF', name="Job Count", orientation='v'),
        row=1, col=1
    )
    
    # Salary analysis - only for categories with salary data
    salary_data = category_stats[category_stats['Avg_Salary'] > 0]
    if len(salary_data) > 0:
        # Average salary
        salary_x = list(salary_data.index)
        avg_salary_y = [int(x) for x in salary_data['Avg_Salary']]  # Convert to regular Python integers
        median_salary_y = [int(x) for x in salary_data['Median_Salary']]  # Convert to regular Python integers
        
        fig.add_trace(
            go.Bar(x=salary_x, y=avg_salary_y, 
                   marker_color='#34C759', name="Avg Salary", orientation='v'),
            row=1, col=2
        )
        
        # Median salary (overlay on same chart)
        fig.add_trace(
            go.Bar(x=salary_x, y=median_salary_y, 
                   marker_color='#FF9500', name="Median Salary", orientation='v'),
            row=1, col=2
        )
    
    # Recent jobs by category - use actual recent data
    recent_by_category = df_categorized[df_categorized['days_ago'] <= 7]['category'].value_counts()
    if len(recent_by_category) > 0:
        recent_x = list(recent_by_category.index)
        recent_y = [int(x) for x in recent_by_category.values]  # Convert to regular Python integers
        
        fig.add_trace(
            go.Bar(x=recent_x, y=recent_y, 
                   marker_color='#FF9500', name="Recent Jobs", orientation='v'),
            row=2, col=1
        )
    
    # Easy apply by category - use actual data
    easy_apply_by_category = category_stats[category_stats['Easy_Apply_Count'] > 0]
    if len(easy_apply_by_category) > 0:
        easy_apply_x = list(easy_apply_by_category.index)
        easy_apply_y = [int(x) for x in easy_apply_by_category['Easy_Apply_Count']]  # Convert to regular Python integers
        
        fig.add_trace(
            go.Bar(x=easy_apply_x, y=easy_apply_y, 
                   marker_color='#AF52DE', name="Easy Apply", orientation='v'),
            row=2, col=2
        )
    
    # Update layout
    fig.update_layout(
        height=600,
        showlegend=False,
        plot_bgcolor='rgba(0,0,0,0)',
        paper_bgcolor='rgba(0,0,0,0)',
        font=dict(color='white', size=12),
        margin=dict(l=20, r=20, t=40, b=20)
    )
    
    # Update axes
    fig.update_xaxes(showgrid=False, zeroline=False, color='white')
    fig.update_yaxes(showgrid=False, zeroline=False, color='white')
    
    return fig, fig1, fig2, fig3, fig4, category_stats

def create_technology_insights(df):
    """Create technology insights chart"""
    # Technology keywords to search for
    tech_keywords = {
        'React': ['react', 'reactjs', 'react.js'],
        'Python': ['python'],
        'JavaScript': ['javascript', 'js', 'node', 'nodejs'],
        'Java': ['java'],
        'PHP': ['php'],
        'Angular': ['angular'],
        'Vue': ['vue'],
        'TypeScript': ['typescript', 'ts'],
        'SQL': ['sql', 'mysql', 'postgresql'],
        'AWS': ['aws', 'amazon web services'],
        'Docker': ['docker'],
        'Kubernetes': ['kubernetes', 'k8s'],
        'DevOps': ['devops'],
        'Data Science': ['machine learning', 'ml', 'ai', 'tensorflow', 'pytorch'],
        'CSS/HTML': ['html', 'css', 'sass', 'scss', 'bootstrap']
    }
    
    # Count technology mentions
    tech_counts = {}
    for tech, keywords in tech_keywords.items():
        count = 0
        for keyword in keywords:
            count += df['title'].str.contains(keyword, case=False, na=False).sum()
        tech_counts[tech] = count
    
    # Create DataFrame and filter out zero counts
    tech_df = pd.DataFrame(list(tech_counts.items()), columns=['Technology', 'Count'])
    tech_df = tech_df[tech_df['Count'] > 0].sort_values('Count', ascending=True)
    
    if len(tech_df) == 0:
        # Create empty chart if no data
        fig = go.Figure()
        fig.add_annotation(text="No technology data available", xref="paper", yref="paper", x=0.5, y=0.5, showarrow=False)
    else:
        tech_x = list(tech_df['Technology'])
        tech_y = [int(x) for x in tech_df['Count']]  # Convert to regular Python integers
        
        fig = go.Figure(data=[
            go.Bar(x=tech_x, y=tech_y, 
                   marker_color='#007AFF')
        ])
    
    fig.update_layout(
        title="Most In-Demand Technologies",
        height=400,
        plot_bgcolor='rgba(0,0,0,0)',
        paper_bgcolor='rgba(0,0,0,0)',
        font=dict(color='white', size=12),
        margin=dict(l=20, r=20, t=40, b=20)
    )
    
    fig.update_xaxes(showgrid=False, zeroline=False, color='white')
    fig.update_yaxes(showgrid=False, zeroline=False, color='white')
    
    return fig

def create_opportunity_ranking(df):
    """Create opportunity ranking scatter plot"""
    # Calculate opportunity score
    df['opportunity_score'] = 0
    
    # Recency bonus (newer jobs get higher scores)
    df.loc[df['days_ago'] <= 1, 'opportunity_score'] += 20
    df.loc[(df['days_ago'] > 1) & (df['days_ago'] <= 3), 'opportunity_score'] += 15
    df.loc[(df['days_ago'] > 3) & (df['days_ago'] <= 7), 'opportunity_score'] += 10
    df.loc[(df['days_ago'] > 7) & (df['days_ago'] <= 14), 'opportunity_score'] += 5
    
    # Easy Apply bonus
    df.loc[df['tags'].str.contains('Easy Apply', na=False), 'opportunity_score'] += 15
    
    # Salary bonus (higher salaries get higher scores)
    df.loc[df['salary_min'] > 0, 'opportunity_score'] += (df['salary_min'] / 1000).clip(0, 20)
    
    # Category demand bonus (based on job count)
    category_counts = df['category'].value_counts()
    max_category_count = category_counts.max()
    df['opportunity_score'] += df['category'].map(category_counts) / max_category_count * 10
    
    # Sort by opportunity score
    df_sorted = df.sort_values('opportunity_score', ascending=False)
    
    # Create scatter plot
    scatter_x = [float(x) for x in df['days_ago']]  # Convert to regular Python floats
    scatter_y = [int(x) for x in df['opportunity_score']]  # Convert to regular Python integers
    scatter_colors = [int(x) for x in df['opportunity_score']]  # Convert to regular Python integers
    
    fig = go.Figure(data=go.Scatter(
        x=scatter_x,
        y=scatter_y,
        mode='markers',
        marker=dict(
            size=8,
            color=scatter_colors,
            colorscale='Viridis',
            showscale=True,
            colorbar=dict(title="Score", x=1.1)
        ),
        text=df['title'] + '<br>' + df['company'] + '<br>Score: ' + df['opportunity_score'].astype(str),
        hovertemplate='<b>%{text}</b><br>' +
                      'Days Ago: %{x}<br>' +
                      'Score: %{y}<br>' +
                      '<extra></extra>'
    ))
    
    fig.update_layout(
        title="Job Opportunities by Recency and Score",
        xaxis_title="Days Ago",
        yaxis_title="Opportunity Score",
        height=500,
        plot_bgcolor='rgba(0,0,0,0)',
        paper_bgcolor='rgba(0,0,0,0)',
        font=dict(color='white', size=12),
        margin=dict(l=20, r=20, t=40, b=20)
    )
    
    fig.update_xaxes(showgrid=False, zeroline=False, color='white')
    fig.update_yaxes(showgrid=False, zeroline=False, color='white')
    
    return fig, df_sorted

@app.route('/')
def index():
    """Main dashboard page"""
    # Load default data
    df = load_data()
    if df is None:
        return render_template('error.html', message="No data file found. Please upload a CSV file.")
    
    # Create charts
    overview_fig, overview_fig1, overview_fig2, overview_fig3, overview_metrics = create_job_market_overview(df)
    category_fig, category_fig1, category_fig2, category_fig3, category_fig4, category_stats = create_category_analysis(df)
    tech_fig = create_technology_insights(df)
    opportunity_fig, top_opportunities = create_opportunity_ranking(df)
    
    # Convert charts to JSON for JavaScript
    charts_data = {
        'overview': overview_fig.to_json(),
        'overview_mobile1': overview_fig1.to_json(),
        'overview_mobile2': overview_fig2.to_json(),
        'overview_mobile3': overview_fig3.to_json(),
        'category': category_fig.to_json(),
        'category_mobile1': category_fig1.to_json(),
        'category_mobile2': category_fig2.to_json(),
        'category_mobile3': category_fig3.to_json(),
        'category_mobile4': category_fig4.to_json(),
        'technology': tech_fig.to_json(),
        'opportunity': opportunity_fig.to_json()
    }
    
    # Prepare top opportunities data
    top_opportunities_data = []
    for i, (_, row) in enumerate(top_opportunities.head(10).iterrows(), 1):
        top_opportunities_data.append({
            'rank': i,
            'company': row['company'],
            'title': row['title'],
            'category': row['category'],
            'score': round(row['opportunity_score'], 1),
            'days_ago': round(row['days_ago'], 1)
        })
    
    # Prepare recommendations
    recommendations = []
    top_categories = category_stats.head(4)
    for category, stats in top_categories.iterrows():
        if stats['Avg_Salary'] > 0:
            recommendations.append(f"Focus on {category} - {stats['Job_Count']} positions available (Avg: ${stats['Avg_Salary']:,.0f}/yr, Median: ${stats['Median_Salary']:,.0f}/yr)")
        else:
            recommendations.append(f"Focus on {category} - {stats['Job_Count']} positions available")
    
    recommendations.append(f"Prioritize Recent Jobs - {overview_metrics['recent_jobs']} jobs posted in the last 7 days")
    recommendations.append(f"Use Easy Apply - {overview_metrics['easy_apply_jobs']} jobs with simplified application process")
    
    return render_template('dashboard.html', 
                         metrics=overview_metrics,
                         charts_data=charts_data,
                         top_opportunities=top_opportunities_data,
                         recommendations=recommendations)

@app.route('/upload', methods=['POST'])
def upload_file():
    """Handle file upload"""
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400
    
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No file selected'}), 400
    
    if file and file.filename.endswith('.csv'):
        # Save the uploaded file
        file_path = os.path.join('uploads', file.filename)
        file.save(file_path)
        
        # Process the uploaded data
        try:
            df = load_data(file_path)
            if df is not None:
                return jsonify({'success': True, 'message': f'Successfully processed {len(df)} jobs'})
            else:
                return jsonify({'error': 'Failed to process the uploaded file'}), 400
        except Exception as e:
            return jsonify({'error': f'Error processing file: {str(e)}'}), 400
    
    return jsonify({'error': 'Please upload a CSV file'}), 400

@app.route('/download-sample')
def download_sample():
    """Download sample data file"""
    try:
        return send_file('complete_categorized_jobs.csv', 
                        as_attachment=True, 
                        download_name='sample_job_data.csv')
    except FileNotFoundError:
        return jsonify({'error': 'Sample file not found'}), 404

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=int(os.environ.get('PORT', 5000)))
