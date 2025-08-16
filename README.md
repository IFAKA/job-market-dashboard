# Job Market Dashboard

A modern React dashboard for analyzing remote job opportunities in Argentina, built with the latest web technologies and featuring Apple Watch-inspired design guidelines.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS, shadcn/ui
- **Beautiful Visualizations**: D3.js charts with Argentine color palette
- **Apple Watch Design**: Rounded corners, gradients, and smooth animations
- **Responsive Design**: Works perfectly on all devices
- **Real-time Data**: Live job market analysis
- **AI-Powered Insights**: Smart recommendations and categorization

## 🎨 Design System

### Argentine Color Palette
- **Primary Blue**: Argentine flag blue (#007AFF)
- **Secondary Red**: Argentine flag red (#FF0000)
- **Accent Colors**: Golden yellow, green, and purple

### Apple Watch Guidelines
- Rounded corners (border-radius: 24px)
- Smooth animations and transitions
- Gradient backgrounds
- Glowing effects
- Minimalist typography

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Charts**: D3.js
- **Icons**: Lucide React
- **Data Processing**: Custom utilities

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd job-market-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up the data**
   ```bash
   # Make sure you have the CSV file in the root directory
   # Run the Python categorization script if needed
   python categorize_jobs.py
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📊 Data Processing

### Python Script
The `categorize_jobs.py` script processes the raw job data:

```bash
python categorize_jobs.py
```

This script:
- Fixes duplicated job titles
- Extracts salary and time information
- Categorizes jobs using AI-powered algorithms
- Generates the `complete_categorized_jobs.csv` file

### Data Structure
The dashboard expects a CSV file with the following columns:
- `company`: Company name
- `title`: Job title
- `location`: Job location
- `salary`: Salary information
- `time_posted`: When the job was posted
- `tags`: Job tags (e.g., "Easy Apply")
- `salary_min`: Minimum salary (numeric)
- `salary_max`: Maximum salary (numeric)
- `days_ago`: Days since posted (numeric)
- `category`: Job category
- `category_confidence`: Confidence score for categorization
- `matched_keywords`: Keywords that matched the category

## 🎯 Dashboard Features

### 1. Metrics Overview
- Total jobs available
- Number of unique companies
- Easy Apply opportunities
- Recent job postings

### 2. Interactive Charts
- **Bar Charts**: Job categories, company distribution
- **Pie Charts**: Category distribution
- **Technology Insights**: Most in-demand technologies

### 3. Smart Recommendations
- AI-powered job recommendations
- Category-specific insights
- Salary and timing advice

### 4. Top Opportunities
- Ranked job opportunities
- Opportunity scoring system
- Company and category information

## 🎨 Customization

### Colors
Update the color palette in `src/app/globals.css`:

```css
:root {
  --primary: 210 100% 50%; /* Argentine Blue */
  --secondary: 0 100% 50%; /* Argentine Red */
  --chart-1: 210 100% 50%;
  --chart-2: 0 100% 50%;
  --chart-3: 45 100% 50%; /* Golden Yellow */
  --chart-4: 120 100% 40%; /* Green */
  --chart-5: 280 100% 60%; /* Purple */
}
```

### Components
All components are built with shadcn/ui and can be customized:
- `src/components/ui/` - Base UI components
- `src/components/charts/` - D3.js chart components
- `src/components/dashboard/` - Dashboard components

## 📱 Responsive Design

The dashboard is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔧 Development

### Project Structure
```
src/
├── app/                 # Next.js App Router
│   ├── api/            # API routes
│   ├── globals.css     # Global styles
│   └── page.tsx        # Main dashboard
├── components/         # React components
│   ├── charts/         # D3.js chart components
│   ├── dashboard/      # Dashboard components
│   └── ui/            # shadcn/ui components
├── lib/               # Utility functions
├── types/             # TypeScript types
└── utils.ts           # Utility functions
```

### Adding New Charts
1. Create a new component in `src/components/charts/`
2. Use D3.js for visualization
3. Follow the existing pattern with props for data and styling
4. Add to the main dashboard page

### Adding New Metrics
1. Update the data processing in `src/lib/data-utils.ts`
2. Add new metrics to the `JobMetrics` interface
3. Update the `MetricsGrid` component
4. Add new cards as needed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Argentine flag colors for inspiration
- Apple Watch design guidelines
- D3.js for powerful visualizations
- shadcn/ui for beautiful components
- Next.js team for the amazing framework

---

Built with ❤️ for the Argentine tech community
