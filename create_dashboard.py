import pandas as pd
import plotly.graph_objects as go
from plotly.subplots import make_subplots
from datetime import datetime
import numpy as np

def load_data():
    """Load the categorized job data"""
    try:
        df = pd.read_csv('complete_categorized_jobs.csv')
        print(f"📊 Loading job market data...")
        print(f"✅ Loaded {len(df)} jobs with {df['category'].nunique()} categories")
        return df
    except FileNotFoundError:
        print("❌ Error: complete_categorized_jobs.csv not found!")
        print("💡 Please run 'python complete_fix.py' first to generate the data.")
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
    # Chart 1: Top Job Categories (Horizontal, sorted)
    fig1 = go.Figure(data=[
        go.Bar(y=list(category_counts.index), x=[int(x) for x in category_counts.values], 
               orientation='h', marker_color='#007AFF')
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
    
    # Chart 2: Category Distribution (Horizontal Bar)
    fig2 = go.Figure(data=[
        go.Bar(y=list(category_counts.index), x=[int(x) for x in category_counts.values], 
               orientation='h', marker_color='#007AFF')
    ])
    fig2.update_layout(
        title="Category Distribution",
        height=300,
        plot_bgcolor='rgba(0,0,0,0)',
        paper_bgcolor='rgba(0,0,0,0)',
        font=dict(color='white', size=12),
        margin=dict(l=20, r=20, t=40, b=20)
    )
    fig2.update_xaxes(showgrid=False, zeroline=False, color='white')
    fig2.update_yaxes(showgrid=False, zeroline=False, color='white')
    
    # Chart 3: Top Companies (Horizontal, sorted)
    company_counts = df['company'].value_counts().head(8)
    fig3 = go.Figure(data=[
        go.Bar(y=list(company_counts.index), x=[int(x) for x in company_counts.values], 
               orientation='h', marker_color='#AF52DE')
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
        subplot_titles=('', 'Category Distribution (Pie)', 'Top Job Categories', 'Top Companies'),
        specs=[[{"type": "scatter"}, {"type": "pie"}], [{"type": "bar"}, {"type": "bar"}]],
        vertical_spacing=0.15,
        horizontal_spacing=0.1
    )
    
    # Pie chart for category distribution (row 1, col 2) - centered and bigger
    pie_labels = list(category_counts.index)
    pie_values = [int(x) for x in category_counts.values]  # Convert to regular Python integers
    
    fig.add_trace(
        go.Pie(labels=pie_labels, values=pie_values, 
               hole=0.4, name="Categories", textinfo='label+percent'),
        row=1, col=2
    )
    
    # Center the pie chart by adjusting its domain
    fig.update_layout(
        annotations=[
            dict(
                text="Category Distribution (Pie)",
                x=0.775,
                y=1.0,
                xref="paper",
                yref="paper",
                showarrow=False,
                font=dict(size=16)
            )
        ]
    )
    
    # Make pie chart bigger by adjusting its domain
    fig.update_traces(
        domain=dict(x=[0.4, 1.0], y=[0.6, 1.0]),  # Expand pie chart domain
        row=1, col=2
    )
    
    # Bar chart for categories (row 2, col 1)
    category_x = list(category_counts.index)
    category_y = [int(x) for x in category_counts.values]  # Convert to regular Python integers
    
    fig.add_trace(
        go.Bar(x=category_x, y=category_y, 
               marker_color='#007AFF', name="Categories", orientation='v'),
        row=2, col=1
    )
    
    # Top companies - use actual data (row 2, col 2)
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
    # Chart 1: Jobs by Category (Horizontal, sorted)
    fig1 = go.Figure(data=[
        go.Bar(y=list(category_stats.index), x=[int(x) for x in category_stats['Job_Count']], 
               orientation='h', marker_color='#007AFF')
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
    
    # Chart 2: Avg vs Median Salary (Horizontal, sorted)
    salary_data = category_stats[category_stats['Avg_Salary'] > 0]
    if len(salary_data) > 0:
        fig2 = go.Figure()
        fig2.add_trace(go.Bar(
            y=list(salary_data.index), 
            x=[int(x) for x in salary_data['Avg_Salary']], 
            name='Average Salary',
            marker_color='#34C759',
            orientation='h'
        ))
        fig2.add_trace(go.Bar(
            y=list(salary_data.index), 
            x=[int(x) for x in salary_data['Median_Salary']], 
            name='Median Salary',
            marker_color='#FF9500',
            orientation='h'
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
    
    # Chart 3: Recent Jobs (<=7 days) (Horizontal, sorted)
    recent_data = category_stats[category_stats['Recent_Jobs'] > 0]
    if len(recent_data) > 0:
        fig3 = go.Figure(data=[
            go.Bar(y=list(recent_data.index), x=[int(x) for x in recent_data['Recent_Jobs']], 
                   orientation='h', marker_color='#FF9500')
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
    
    # Chart 4: Easy Apply Jobs (Horizontal, sorted)
    easy_apply_data = category_stats[category_stats['Easy_Apply_Count'] > 0]
    if len(easy_apply_data) > 0:
        fig4 = go.Figure(data=[
            go.Bar(y=list(easy_apply_data.index), x=[int(x) for x in easy_apply_data['Easy_Apply_Count']], 
                   orientation='h', marker_color='#AF52DE')
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
    
    # Create DataFrame and filter out zero counts, sort by count descending
    tech_df = pd.DataFrame(list(tech_counts.items()), columns=['Technology', 'Count'])
    tech_df = tech_df[tech_df['Count'] > 0].sort_values('Count', ascending=False)
    
    if len(tech_df) == 0:
        # Create empty chart if no data
        fig_mobile = go.Figure()
        fig_mobile.add_annotation(text="No technology data available", xref="paper", yref="paper", x=0.5, y=0.5, showarrow=False)
        fig_desktop = go.Figure()
        fig_desktop.add_annotation(text="No technology data available", xref="paper", yref="paper", x=0.5, y=0.5, showarrow=False)
    else:
        tech_x = list(tech_df['Technology'])
        tech_y = [int(x) for x in tech_df['Count']]  # Convert to regular Python integers
        
        # Mobile chart (horizontal)
        fig_mobile = go.Figure(data=[
            go.Bar(y=tech_x, x=tech_y, 
                   orientation='h', marker_color='#007AFF')
        ])
        
        # Desktop chart (vertical)
        fig_desktop = go.Figure(data=[
            go.Bar(x=tech_x, y=tech_y, 
                   marker_color='#007AFF')
        ])
    
    # Update mobile chart layout
    fig_mobile.update_layout(
        title="Most In-Demand Technologies",
        height=400,
        plot_bgcolor='rgba(0,0,0,0)',
        paper_bgcolor='rgba(0,0,0,0)',
        font=dict(color='white', size=12),
        margin=dict(l=20, r=20, t=40, b=20)
    )
    fig_mobile.update_xaxes(showgrid=False, zeroline=False, color='white')
    fig_mobile.update_yaxes(showgrid=False, zeroline=False, color='white')
    
    # Update desktop chart layout
    fig_desktop.update_layout(
        title="Most In-Demand Technologies",
        height=400,
        plot_bgcolor='rgba(0,0,0,0)',
        paper_bgcolor='rgba(0,0,0,0)',
        font=dict(color='white', size=12),
        margin=dict(l=20, r=20, t=40, b=20)
    )
    fig_desktop.update_xaxes(showgrid=False, zeroline=False, color='white')
    fig_desktop.update_yaxes(showgrid=False, zeroline=False, color='white')
    
    return fig_mobile, fig_desktop

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

def create_html_dashboard():
    """Create the complete HTML dashboard with compact design"""
    # Load data
    df = load_data()
    if df is None:
        return
    
    print("🎨 Creating visualizations...")
    
    # Create charts
    overview_fig, overview_fig1, overview_fig2, overview_fig3, overview_metrics = create_job_market_overview(df)
    category_fig, category_fig1, category_fig2, category_fig3, category_fig4, category_stats = create_category_analysis(df)
    tech_fig_mobile, tech_fig_desktop = create_technology_insights(df)
    opportunity_fig, top_opportunities = create_opportunity_ranking(df)
    
    # Generate compact HTML content
    html_content = f"""
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Remote Trainee Jobs - Argentina</title>
         <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
     <script>
         // Force responsive chart layout on mobile
         function makeChartsResponsive() {{
             const charts = document.querySelectorAll('.js-plotly-plot');
             charts.forEach(chart => {{
                 if (window.innerWidth <= 768) {{
                     // Force single column layout on mobile
                     const subplots = chart.querySelectorAll('.subplot');
                     subplots.forEach((subplot, index) => {{
                         subplot.style.width = '100%';
                         subplot.style.height = '300px';
                         subplot.style.marginBottom = index < subplots.length - 1 ? '2rem' : '0';
                         subplot.style.display = 'block';
                     }});
                     
                     // Override Plotly's grid layout
                     const plotlyContainer = chart.querySelector('.plotly');
                     if (plotlyContainer) {{
                         plotlyContainer.style.display = 'flex';
                         plotlyContainer.style.flexDirection = 'column';
                         plotlyContainer.style.width = '100%';
                     }}
                 }}
             }});
         }}
         
         // Run on load and resize
         window.addEventListener('load', makeChartsResponsive);
         window.addEventListener('resize', makeChartsResponsive);
         
         // Also run after a short delay to ensure Plotly has rendered
         setTimeout(makeChartsResponsive, 500);
     </script>
    <style>
        body {{
            font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
            margin: 0;
            padding: 0;
            background: linear-gradient(135deg, #000000 0%, #1C1C1E 50%, #2C2C2E 100%);
            color: #FFFFFF;
            font-size: 14px;
            line-height: 1.4;
        }}
        
        .container {{
            max-width: 1200px;
            margin: 0 auto;
            padding: 1rem;
        }}
        
        .header {{
            background: linear-gradient(135deg, #007AFF 0%, #5856D6 50%, #AF52DE 100%);
            color: white;
            padding: 1rem;
            text-align: center;
            border-radius: 12px;
            margin-bottom: 1rem;
        }}
        
        .header h1 {{
            margin: 0;
            font-size: 1.5rem;
            font-weight: 700;
        }}
        
        .metrics-grid {{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
            margin-bottom: 1rem;
        }}
        
        .metric-card {{
            background: rgba(255, 255, 255, 0.1);
            padding: 1rem;
            border-radius: 8px;
            text-align: center;
            backdrop-filter: blur(10px);
        }}
        
        .metric-value {{
            font-size: 1.5rem;
            font-weight: 700;
            color: #007AFF;
        }}
        
        .metric-label {{
            font-size: 0.875rem;
            opacity: 0.8;
        }}
        
                 .chart-container {{
             background: rgba(255, 255, 255, 0.05);
             border-radius: 12px;
             padding: 1rem;
             margin-bottom: 1rem;
             backdrop-filter: blur(10px);
         }}
         
         /* Mobile Charts (Single Column) */
         .mobile-charts {{
             display: block;
         }}
         
         .mobile-charts .js-plotly-plot {{
             margin-bottom: 2rem;
         }}
         
         .mobile-charts .js-plotly-plot:last-child {{
             margin-bottom: 0;
         }}
         
         /* Desktop Chart (2x2 Grid) */
         .desktop-chart {{
             display: none;
         }}
        
        .chart-title {{
            font-size: 1.125rem;
            font-weight: 600;
            margin-bottom: 1rem;
            color: #007AFF;
        }}
        
        .opportunities-table {{
            background: rgba(255, 255, 255, 0.05);
            border-radius: 12px;
            padding: 1rem;
            margin-bottom: 1rem;
            backdrop-filter: blur(10px);
        }}
        
        .opportunities-table h3 {{
            font-size: 1.125rem;
            font-weight: 600;
            margin-bottom: 1rem;
            color: #007AFF;
        }}
        
        .table-container {{
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            border-radius: 8px;
            margin: 0 -0.5rem;
            padding: 0 0.5rem;
        }}
        
        table {{
            width: 100%;
            min-width: 600px;
            border-collapse: collapse;
            font-size: 0.875rem;
            white-space: nowrap;
        }}
        
        th, td {{
            padding: 0.5rem;
            text-align: left;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }}
        
        th {{
            font-weight: 600;
            color: #007AFF;
            position: sticky;
            top: 0;
            background: rgba(0, 0, 0, 0.8);
            z-index: 10;
        }}
        
        .recommendations {{
            background: rgba(255, 255, 255, 0.05);
            border-radius: 12px;
            padding: 1rem;
            margin-bottom: 1rem;
            backdrop-filter: blur(10px);
        }}
        
        .recommendations h3 {{
            font-size: 1.125rem;
            font-weight: 600;
            margin-bottom: 1rem;
            color: #007AFF;
        }}
        
        .recommendations ul {{
            margin: 0;
            padding-left: 1.5rem;
        }}
        
        .recommendations li {{
            margin-bottom: 0.5rem;
        }}
        
        .footer {{
            text-align: center;
            padding: 1rem;
            opacity: 0.7;
            font-size: 0.875rem;
        }}
        
        .score-explanation {{
            background: rgba(0, 122, 255, 0.1);
            padding: 1rem;
            border-radius: 8px;
            margin-bottom: 1rem;
            border-left: 4px solid #007AFF;
        }}
        
        .score-explanation h4 {{
            margin: 0 0 0.5rem 0;
            color: #007AFF;
            font-size: 1rem;
        }}
        
        .score-explanation ul {{
            margin: 0;
            padding-left: 1.5rem;
            font-size: 0.875rem;
            line-height: 1.5;
        }}
        
        .score-explanation p {{
            margin: 0.5rem 0 0 0;
            font-size: 0.8rem;
            opacity: 0.8;
        }}
        
                 @media (max-width: 768px) {{
             .container {{
                 padding: 0.5rem;
             }}
             
             .metrics-grid {{
                 grid-template-columns: repeat(2, 1fr);
             }}
             
             .metric-card {{
                 padding: 0.75rem;
             }}
             
             .metric-value {{
                 font-size: 1.25rem;
             }}
             
             /* Show mobile charts, hide desktop chart */
             .mobile-charts {{
                 display: block;
             }}
             
             .desktop-chart {{
                 display: none;
             }}
             
             .score-explanation {{
                 padding: 0.75rem;
                 font-size: 0.8rem;
             }}
             
             .score-explanation h4 {{
                 font-size: 0.9rem;
             }}
             
             .score-explanation ul {{
                 font-size: 0.8rem;
                 padding-left: 1.25rem;
             }}
         }}
         
         @media (min-width: 769px) {{
             /* Show desktop chart, hide mobile charts */
             .mobile-charts {{
                 display: none;
             }}
             
             .desktop-chart {{
                 display: block;
             }}
         }}
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🚀 Remote Trainee Jobs - Argentina</h1>
            <p>Comprehensive job market analysis for remote opportunities</p>
        </div>
        
        <div class="metrics-grid">
            <div class="metric-card">
                <div class="metric-value">{overview_metrics['total_jobs']:,}</div>
                <div class="metric-label">Total Jobs</div>
            </div>
            <div class="metric-card">
                <div class="metric-value">{overview_metrics['unique_companies']:,}</div>
                <div class="metric-label">Companies</div>
            </div>
            <div class="metric-card">
                <div class="metric-value">{overview_metrics['easy_apply_jobs']:,}</div>
                <div class="metric-label">Easy Apply</div>
            </div>
            <div class="metric-card">
                <div class="metric-value">{overview_metrics['recent_jobs']:,}</div>
                <div class="metric-label">Recent (≤7 days)</div>
            </div>
        </div>
        
                 <div class="chart-container">
             <div class="chart-title">📊 Job Market Overview</div>
             
             <!-- Mobile Charts (Single Column) -->
             <div class="mobile-charts">
                 {overview_fig2.to_html(full_html=False, include_plotlyjs=False)}
                 {overview_fig1.to_html(full_html=False, include_plotlyjs=False)}
                 {overview_fig3.to_html(full_html=False, include_plotlyjs=False)}
             </div>
             
             <!-- Desktop Chart (2x2 Grid) -->
             <div class="desktop-chart">
                 {overview_fig.to_html(full_html=False, include_plotlyjs=False)}
             </div>
         </div>
        
                 <div class="chart-container">
             <div class="chart-title">🎯 Category Analysis</div>
             
             <!-- Mobile Charts (Single Column) -->
             <div class="mobile-charts">
                 {category_fig1.to_html(full_html=False, include_plotlyjs=False)}
                 {category_fig2.to_html(full_html=False, include_plotlyjs=False)}
                 {category_fig3.to_html(full_html=False, include_plotlyjs=False)}
                 {category_fig4.to_html(full_html=False, include_plotlyjs=False)}
             </div>
             
             <!-- Desktop Chart (2x2 Grid) -->
             <div class="desktop-chart">
                 {category_fig.to_html(full_html=False, include_plotlyjs=False)}
             </div>
         </div>
        
        <div class="chart-container">
            <div class="chart-title">💻 Technology Insights</div>
            
            <!-- Mobile Chart (Horizontal) -->
            <div class="mobile-charts">
                {tech_fig_mobile.to_html(full_html=False, include_plotlyjs=False)}
            </div>
            
            <!-- Desktop Chart (Vertical) -->
            <div class="desktop-chart">
                {tech_fig_desktop.to_html(full_html=False, include_plotlyjs=False)}
            </div>
        </div>
        
        <div class="chart-container">
            <div class="chart-title">⭐ Opportunity Ranking</div>
            {opportunity_fig.to_html(full_html=False, include_plotlyjs=False)}
        </div>
        
        <div class="opportunities-table">
            <h3>🏆 Best Opportunities (Ranked by Score)</h3>
            
            <div class="score-explanation">
                <h4>📊 How the Opportunity Score is Calculated:</h4>
                <ul>
                    <li><strong>Recency Bonus:</strong> Jobs posted ≤1 day ago (+20 points), 2-3 days (+15), 4-7 days (+10), 8-14 days (+5)</li>
                    <li><strong>Easy Apply Bonus:</strong> Jobs with "Easy Apply" feature (+15 points)</li>
                    <li><strong>Salary Bonus:</strong> Based on minimum salary, up to +20 points (salary/1000, capped at 20)</li>
                    <li><strong>Category Demand Bonus:</strong> Based on job count in category, up to +10 points (relative to highest category)</li>
                </ul>
                <p>💡 Higher scores indicate better opportunities based on recency, ease of application, salary, and market demand.</p>
            </div>
            
            <div class="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Company</th>
                            <th>Position</th>
                            <th>Category</th>
                            <th>Score</th>
                            <th>Days Ago</th>
                        </tr>
                    </thead>
                    <tbody>
"""
    
    # Add top opportunities to table
    for i, (_, row) in enumerate(top_opportunities.head(10).iterrows(), 1):
        html_content += f"""
                    <tr>
                        <td>{i}</td>
                        <td>{row['company']}</td>
                        <td>{row['title']}</td>
                        <td>{row['category']}</td>
                        <td>{row['opportunity_score']:.1f}</td>
                        <td>{row['days_ago']:.1f}</td>
                    </tr>
"""
    
    html_content += f"""
                </tbody>
            </table>
            </div>
        </div>
        
        <div class="recommendations">
            <h3>💡 Strategic Recommendations</h3>
            <ul>
"""
    
    # Add dynamic recommendations based on data
    top_categories = category_stats.head(4)
    for category, stats in top_categories.iterrows():
        if stats['Avg_Salary'] > 0:
            html_content += f"""
                <li><strong>Focus on {category}</strong> - {stats['Job_Count']} positions available (Avg: ${stats['Avg_Salary']:,.0f}/yr, Median: ${stats['Median_Salary']:,.0f}/yr)</li>
"""
        else:
            html_content += f"""
                <li><strong>Focus on {category}</strong> - {stats['Job_Count']} positions available</li>
"""
    
    html_content += f"""
                <li><strong>Prioritize Recent Jobs</strong> - {overview_metrics['recent_jobs']} jobs posted in the last 7 days</li>
                <li><strong>Use Easy Apply</strong> - {overview_metrics['easy_apply_jobs']} jobs with simplified application process</li>
            </ul>
        </div>
        
        <div class="footer">
            <p>📊 {overview_metrics['total_jobs']:,} remote trainee jobs analyzed - {datetime.now().strftime('%B %d, %Y')}</p>
        </div>
    </div>
</body>
</html>
"""
    
    # Save the HTML file
    with open('job_market_dashboard.html', 'w', encoding='utf-8') as f:
        f.write(html_content)
    
    print("✅ Dashboard created successfully!")
    print("📁 File saved as: job_market_dashboard.html")
    print("🌐 Open the file in any web browser to view the interactive dashboard")
    print("📱 Apple Watch UI/UX guidelines applied with mobile-first design")
    print("🎨 Features: SF Pro fonts, rounded corners, proper spacing, high contrast")
    
    return html_content

if __name__ == "__main__":
    create_html_dashboard()
