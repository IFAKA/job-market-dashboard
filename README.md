# Remote Job Market Analyzer - Argentina

This project provides comprehensive analysis tools for LinkedIn remote job postings in Argentina. It parses unstructured job data and generates insights, visualizations, and recommendations to help you understand the job market and make informed decisions.

## 📁 Files Overview

- `remote-trainee-jobs.txt` - Raw LinkedIn job data (input file)
- `complete_fix.py` - **COMPLETE** job title fix and categorization script
- `complete_categorized_jobs.csv` - **FINAL** accurately categorized job data (759 jobs)
- `create_dashboard.py` - **SHAREABLE** HTML dashboard generator
- `job_market_dashboard.html` - **COMPLETE** interactive dashboard for sharing

- `requirements.txt` - Python dependencies
- `README.md` - This documentation

## 🚀 Quick Start

### 1. Install Dependencies

```bash
pip install -r requirements.txt
```

### 2. Run Complete Fix and Categorization

```bash
python complete_fix.py
```

This will:
- **Fix duplicated job titles** (like "General AccountantGeneral Accountant" → "General Accountant")
- **Parse and structure** the job data properly
- **Apply accurate categorization** with precise exclusions
- Generate **complete categorized dataset** (759 jobs)

### 3. Create Shareable Dashboard

```bash
python create_dashboard.py
```

This will:
- Generate a **beautiful, interactive HTML dashboard**
- Include all key metrics and visualizations
- Provide **career recommendations** and **top opportunities**
- Create a **shareable file** perfect for decision-making

## 📊 Generated Outputs

### Complete Fix and Categorization (`complete_fix.py`) - **FINAL RESULTS**
- `complete_categorized_jobs.csv` - **FINAL** accurately categorized data (759 jobs)
- Fixed duplicated titles (General AccountantGeneral Accountant → General Accountant)
- Applied precise categorization with exclusions for unrelated jobs
- Improved categorization accuracy for better insights

### Shareable Dashboard (`create_dashboard.py`) - **PERFECT FOR SHARING**
- `job_market_dashboard.html` - **COMPLETE** interactive dashboard with:
  - 📊 Job market overview with key metrics
  - 🎯 Category analysis and career recommendations
  - 🔍 Technology insights and in-demand skills
  - ⭐ Top job opportunities ranked by score
  - 💡 Strategic recommendations for career planning

## 📈 Data Structure

The parsed data includes the following columns:

| Column | Description |
|--------|-------------|
| `company` | Company name |
| `title` | Job title |
| `location` | Job location |
| `salary` | Original salary text |
| `salary_min` | Minimum salary (USD/year) |
| `salary_max` | Maximum salary (USD/year) |
| `time_posted` | Original time posted text |
| `days_ago` | Days since posted |
| `tags` | Job features (Easy Apply, verification, etc.) |
| `category` | Job category (Software Engineer, Data Science, etc.) |
| `category_confidence` | Confidence score for categorization (0-100%) |
| `matched_keywords` | Keywords that matched for categorization |

## 🎯 Key Insights Provided

### Market Overview
- Total jobs analyzed
- Unique companies hiring
- Job categories distribution
- Geographic distribution

### Salary Analysis
- Average salary ranges by category
- Highest paying opportunities
- Salary distribution patterns
- Top paying companies

### Timing Insights
- Job posting age distribution
- Recent opportunities (last 7 days)
- Fresh postings (last 3 days)
- Optimal application timing

### Strategic Recommendations
- Most active companies to focus on
- High-demand job categories
- Easy apply opportunities
- High-paying positions
- High-confidence job categorizations
- Technology-focused opportunities

## 📊 Visualizations

### Static Charts (Matplotlib)
- Top companies by job postings
- Job categories distribution (pie chart)
- Salary distribution histograms
- Job posting age distribution
- Location breakdown
- Common job features

### Interactive Dashboard (Plotly)
- Interactive charts with hover information
- Zoom and pan capabilities
- Export functionality
- Responsive design

### Enhanced Dashboard
- Confidence level analysis
- Technology keyword frequency
- Category-specific company breakdowns
- Salary analysis by category

## 🔧 Customization

### Adding New Job Categories
Edit the `_categorize_job()` function in both scripts to add new categories:

```python
categories = {
    'Your Category': ['keyword1', 'keyword2', 'keyword3'],
    # ... existing categories
}
```

### Enhanced Categorization
The improved categorizer (`improved_categorizer.py`) includes:
- Technology-specific pattern matching
- Confidence scoring system
- Keyword extraction and analysis
- Multiple keyword types (primary, technologies, concepts, roles)

### Modifying Salary Parsing
Update the `_extract_salary_range()` function to handle different salary formats.

### Custom Visualizations
Add new charts by modifying the `create_visualizations()` function.

## 📋 Sample Analysis Output

```
🎯 REMOTE JOB MARKET INSIGHTS - ARGENTINA
================================================================================

📊 OVERVIEW:
   • Total jobs analyzed: 1,234
   • Unique companies: 156
   • Job categories: 10

💰 SALARY INSIGHTS:
   • Jobs with salary info: 456 (37.0%)
   • Average salary range: $45,000 - $65,000 USD/year
   • Median salary: $55,000 USD/year

⏰ TIMING INSIGHTS:
   • Average job age: 12.5 days
   • Recent jobs (≤7 days): 234
   • Fresh opportunities (≤3 days): 89

💡 STRATEGIC RECOMMENDATIONS:
   🎯 Focus on these active companies: Canonical, BairesDev, Sezzle
   ⚡ 234 jobs posted in the last week - apply quickly!
   💰 91 high-paying opportunities (top 20% salary range)
   ✅ 567 jobs with 'Easy Apply' - quick applications!

🔧 ENHANCED INSIGHTS:
   • Data Science: 47 jobs identified (vs 16 in basic analysis)
   • Technology keywords: React (3), Python (3), JavaScript (3)
   • High-confidence categorizations: 68 jobs with ≥70% accuracy
   • **89.0% categorization rate** (vs 7.8% originally)
   • **+81.2% improvement** in categorization accuracy
```

## 🤝 Contributing

Feel free to contribute by:
- Adding new analysis features
- Improving data parsing accuracy
- Enhancing visualizations
- Adding new export formats

## 📝 License

This project is open source and available under the MIT License.

## 🆘 Troubleshooting

### Common Issues

1. **Import Errors**: Make sure all dependencies are installed:
   ```bash
   pip install -r requirements.txt
   ```

2. **File Not Found**: Ensure `remote-trainee-jobs.txt` is in the same directory as the scripts.

3. **Memory Issues**: For large datasets, consider processing in chunks or using a more powerful machine.

4. **Visualization Issues**: If charts don't display, try running in a Jupyter notebook or check your matplotlib backend.

### Getting Help

If you encounter issues:
1. Check the console output for error messages
2. Verify your Python version (3.7+ recommended)
3. Ensure all dependencies are correctly installed
4. Check that the input file format matches the expected structure
