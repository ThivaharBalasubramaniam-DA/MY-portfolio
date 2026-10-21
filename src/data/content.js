/**
 * Organization: Orbytes Global Solutions
 * Owner: Logaraj S
 * Created at: 2026-10-21
 * Description: Governed by ManageMyOpz React coding standards. Centralized content data.
 */

const BASE_URL = import.meta.env.BASE_URL?.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL || '/'}/`;

export const portfolioContent = {
  personal: {
    name: "Thivahar Balasubramaniam",
    title: "Data Analyst | Software Engineer | Data Science Postgraduate",
    email: "thivaharbalasubramaniam@gmail.com",
    phone: "+91 9597143971",
    location: "Bangalore, India (Willing to relocate across India)",
    tagline: "I turn messy data into clear decisions and build the tools to act on them.",
    profileImage: `${BASE_URL}profile-transparent.png`,
    resumeUrl: `${BASE_URL}resume.pdf`,
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/thivahar-balasubramaniam15/",
      github: "https://github.com/Thivahar-Balasubramaniam",
      email: "mailto:thivaharbalasubramaniam@gmail.com",
      phone: "tel:+919597143971"
    },
    contactEndpoint: "https://api.web3forms.com/submit",
    web3formsKey: "YOUR_WEB3FORMS_ACCESS_KEY_HERE"
  },

  stats: [
    { label: "Predictive Precision", value: "0.917", prefix: "R² = ", description: "Hotel vs Airbnb Regression Model" },
    { label: "Workload Imbalance", value: "93%", prefix: "↓ ", description: "Reduced via ML Heuristic Balancing" },
    { label: "Sentiment Accuracy", value: "85%", prefix: "Top ", description: "Random Forest Classifier on Flipkart Data" },
    { label: "Revenue Dominance", value: "48%", prefix: "+", description: "Honolulu listing revenue premium vs Maui" }
  ],

  about: {
    heading: "Bridging Data Science & Scalable Software",
    paragraphs: [
      "I am a Data Analyst and Software Engineer who bridges the gap between rigorous statistical modeling and real-world software systems. Holding a B.Sc. in Computer Science and currently completing my M.Sc. in Data Science and Analytics at Jain University, Bangalore, I thrive on taking complex, unstructured datasets and translating them into predictive power and interactive user experiences.",
      "During my Data Science Internship at Inlighnx Global, I built end-to-end NLP pipelines for sentiment classification achieving 85% accuracy and architected an intelligent task prioritization engine that flattened team workload imbalances by 93%.",
      "Currently, as an Associate Software Engineer Intern at Orbytes, I am developing the 'Management Data' business directory module within the Management Ops platform. Built with a modern React front-end and a robust PostgreSQL back-end using Antigravity, I am now actively engineering a machine learning-based recommendation engine to surface hyper-relevant business listings to users."
    ],
    highlights: [
      { label: "Current Role", value: "Associate Software Engineer Intern @ Orbytes" },
      { label: "Specialization", value: "Data Analysis, ML Pipelines & Full-Stack React" },
      { label: "Education", value: "M.Sc. Data Science & Analytics (2024–2026)" },
      { label: "Languages", value: "English (Fluent), Tamil (Native)" }
    ]
  },

  experience: [
    {
      company: "Orbytes",
      role: "Associate Software Engineer Intern",
      period: "Present",
      location: "Bangalore, India",
      current: true,
      description: "Spearheading the engineering of the 'Management Data' module — an enterprise business directory application embedded inside the larger Management Ops platform.",
      achievements: [
        "Architected and implemented a high-performance, modular front-end in JavaScript and React, ensuring intuitive directory search, filtering, and rapid listing views.",
        "Engineered scalable data models and integrated the UI with a high-throughput PostgreSQL relational database.",
        "Utilized Antigravity as the core development and acceleration environment for efficient iterations and enterprise code quality standards.",
        "Work in Progress: Currently engineering a machine learning-driven recommendation engine for the directory, designed to personalize business listing discovery and bridge software engineering with applied data science."
      ],
      tags: ["React", "JavaScript", "PostgreSQL", "Antigravity", "Recommendation Engines", "System Design"]
    },
    {
      company: "Inlighnx Global Private Ltd",
      role: "Data Science Intern",
      period: "Jun 2024 – Jul 2024",
      location: "Remote",
      current: false,
      description: "Developed production-grade machine learning pipelines and predictive models across natural language processing and organizational workflow optimization.",
      achievements: [
        "Flipkart Reviews Sentiment Analysis: Preprocessed thousands of customer reviews via TF-IDF; benchmarked Logistic Regression, Naive Bayes, SVM, and Random Forest, achieving a peak 85% accuracy.",
        "Extracted high-impact insights on review-length patterns and sentiment distributions to drive product enhancement strategies for stakeholders.",
        "AI-Powered Task Management System: Developed an end-to-end multi-class ML pipeline categorizing tasks into 7 distinct domains via Linear SVM (81.5% accuracy) and estimated execution priority via XGBoost (63% accuracy).",
        "Engineered an automated heuristic workload-balancing algorithm that slashed organizational workload imbalance by 93% versus baseline."
      ],
      tags: ["Python", "TF-IDF", "Random Forest", "Linear SVM", "XGBoost", "Sentiment Analysis", "Scikit-Learn"]
    }
  ],

  skills: {
    categories: [
      {
        name: "Programming & Web Engineering",
        icon: "Code",
        skills: [
          { name: "JavaScript (ES6+)", level: 90 },
          { name: "React.js", level: 88 },
          { name: "Python", level: 92 },
          { name: "SQL (PostgreSQL)", level: 88 },
          { name: "HTML5 & Tailwind CSS", level: 90 },
          { name: "RESTful APIs", level: 85 }
        ]
      },
      {
        name: "Data Science & Machine Learning",
        icon: "Brain",
        skills: [
          { name: "scikit-learn & ML Pipelines", level: 90 },
          { name: "pandas & NumPy", level: 92 },
          { name: "TF-IDF & NLP Techniques", level: 86 },
          { name: "XGBoost & Random Forest", level: 88 },
          { name: "Regression & Statistical EDA", level: 92 },
          { name: "Recommendation Systems", level: 82 }
        ]
      },
      {
        name: "BI, Visualization & Tools",
        icon: "BarChart3",
        skills: [
          { name: "Tableau", level: 88 },
          { name: "Power BI", level: 84 },
          { name: "Microsoft Excel (Advanced)", level: 90 },
          { name: "Antigravity IDE & Tooling", level: 90 },
          { name: "Git & Version Control", level: 86 },
          { name: "Data Storytelling & Dashboards", level: 92 }
        ]
      }
    ]
  },

  projects: [
    {
      id: "management-data",
      title: "Management Data: Business Directory & ML Recommender",
      clientOrOrg: "Orbytes (Management Ops Module)",
      category: "Full-Stack Software & Machine Learning",
      highlight: "In Progress: ML Recommendation Engine Integration",
      description: "An enterprise-grade business directory application built within the Management Ops ecosystem. Facilitates rapid discovery, querying, and verification of business entities with PostgreSQL integration, paired with an intelligent recommendation engine to personalize discovery.",
      details: [
        "Front-End: Modular React application built with fast reactivity, faceted filtering, and accessible UI patterns.",
        "Back-End Connectivity: Optimized PostgreSQL schema handling normalized company records, metadata, and relations.",
        "Development Tooling: Engineered and iterated with Antigravity, complying with strict engineering standards.",
        "Machine Learning Extension (Active): Developing content-based and collaborative filtering models to recommend complementary suppliers and businesses."
      ],
      tags: ["React", "JavaScript", "PostgreSQL", "Antigravity", "ML Recommender", "Enterprise UI"],
      hasChart: false,
      liveUrl: "https://github.com/Thivahar-Balasubramaniam",
      githubUrl: "https://github.com/Thivahar-Balasubramaniam"
    },
    {
      id: "flipkart-sentiment",
      title: "Flipkart Customer Reviews Sentiment Analysis",
      clientOrOrg: "Inlighnx Global Private Ltd",
      category: "NLP & Predictive Modeling",
      highlight: "85% Peak Classification Accuracy (Random Forest)",
      description: "Comprehensive NLP study comparing four distinct machine learning classifiers on thousands of unstructured Flipkart e-commerce reviews, converting raw text into commercial strategic intelligence.",
      details: [
        "Text Preprocessing: Noise reduction, tokenization, lemmatization, and TF-IDF feature extraction.",
        "Model Benchmarking: Rigorous evaluation of Naive Bayes (78%), Logistic Regression (79.2%), Linear SVM (82.1%), and Random Forest (85.0%).",
        "Business Impact: Pinpointed key product dissatisfaction triggers and correlated positive reviews with specific seller fulfillment indicators."
      ],
      tags: ["Python", "TF-IDF", "Random Forest", "SVM", "NLP", "scikit-learn"],
      hasChart: true,
      chartType: "bar",
      chartTitle: "Model Accuracy Comparison Benchmark (%)",
      chartData: [
        { model: "Naive Bayes", accuracy: 78.0, color: "#52525b" },
        { model: "Logistic Reg.", accuracy: 79.2, color: "#71717a" },
        { model: "Linear SVM", accuracy: 82.1, color: "#a1a1aa" },
        { model: "Random Forest", accuracy: 85.0, color: "#e4e4e7" }
      ],
      liveUrl: "https://github.com/Thivahar-Balasubramaniam",
      githubUrl: "https://github.com/Thivahar-Balasubramaniam"
    },
    {
      id: "ai-task-management",
      title: "AI-Powered Task Management & Workload Balancer",
      clientOrOrg: "Infyntrek Systems / Inlighnx Global",
      category: "Machine Learning & Heuristic Optimization",
      highlight: "93% Reduction in Team Workload Imbalance",
      description: "An intelligent workforce workflow optimization system featuring a 7-domain automatic task classifier, priority regression engine, and heuristic load-leveling algorithm.",
      details: [
        "7-Class Domain Classifier: Linear SVM trained with TF-IDF features reaching 81.5% multi-class accuracy.",
        "Dynamic Priority Scoring: XGBoost regression model predicting turnaround urgency with 63% accuracy under noisy project constraints.",
        "Heuristic Balancing: Custom load distribution algorithm reallocating sprint backlog allocations, reducing team burnout metrics by 93%."
      ],
      tags: ["Python", "Linear SVM", "XGBoost", "TF-IDF", "Optimization", "Workflow Engine"],
      hasChart: true,
      chartType: "workload",
      chartTitle: "Workload Imbalance Variance Before vs. After ML Engine",
      chartData: [
        { metric: "Initial Manual Allocation", variance: 100, label: "100% Baseline" },
        { metric: "After ML Heuristic Engine", variance: 7, label: "7% (93% Improvement)" }
      ],
      liveUrl: "https://github.com/Thivahar-Balasubramaniam",
      githubUrl: "https://github.com/Thivahar-Balasubramaniam"
    },
    {
      id: "airbnb-hotel-impact",
      title: "Impact of Airbnb on the Traditional Hotel Industry",
      clientOrOrg: "Academic Econometric Research",
      category: "Statistical Modeling & Econometrics",
      highlight: "R² = 0.917 Strong Predictive Regression",
      description: "Large-scale quantitative empirical analysis measuring the disruptive impact of peer-to-peer lodging density on traditional commercial hotel occupancy across thousands of municipal records.",
      details: [
        "Feature Engineering: Created normalized metrics including Airbnb listings per 1,000 hotel rooms and seasonal ADR variance.",
        "Statistical Finding: Proven strong negative correlation (-0.94) between Airbnb expansion and hotel occupancy, with each 100 listings suppressing hotel room occupancy by ~11%.",
        "Strategic Takeaway: Uncovered that demand drives pricing while Airbnb captures market share via availability surge during peak events."
      ],
      tags: ["Python", "Econometrics", "Regression (R²=0.917)", "Pandas", "Statistical Analysis"],
      hasChart: true,
      chartType: "line",
      chartTitle: "Predicted Hotel Occupancy Impact vs. Airbnb Density",
      chartData: [
        { density: "0 listings", occupancy: 82.5 },
        { density: "100 listings", occupancy: 71.5 },
        { density: "200 listings", occupancy: 60.5 },
        { density: "300 listings", occupancy: 49.5 },
        { density: "400 listings", occupancy: 38.5 }
      ],
      liveUrl: "https://github.com/Thivahar-Balasubramaniam",
      githubUrl: "https://github.com/Thivahar-Balasubramaniam"
    },
    {
      id: "hawaii-airbnb-dashboard",
      title: "Hawaii Airbnb Market Analytics Dashboard",
      clientOrOrg: "Geospatial BI Project",
      category: "Business Intelligence & Geospatial Analytics",
      highlight: "Honolulu ₹18,181 Avg Revenue (+48% vs Maui)",
      description: "Interactive visual intelligence suite uncovering geospatial pricing trends, seasonal booking cadence, and revenue concentration across the Hawaiian Islands.",
      details: [
        "Key Market Finding: Honolulu emerged as the highest yield market at ₹18,181 average revenue per listing, outpacing Maui by 48%.",
        "BI Architecture: Built with parameter-driven dynamic KPI toggles, geo-spatial heatmaps, and customizable investor scenario projections.",
        "Deliverables: Designed for executive stakeholder reporting, investment feasibility assessments, and operational pricing decisions."
      ],
      tags: ["Tableau", "Geospatial EDA", "Market Analytics", "KPI Dashboards", "Data Storytelling"],
      hasChart: false,
      imagePreview: `${BASE_URL}hawaii-dashboard.png`,
      tableauPublicUrl: "https://public.tableau.com",
      liveUrl: "https://public.tableau.com",
      githubUrl: "https://github.com/Thivahar-Balasubramaniam"
    }
  ],

  education: [
    {
      degree: "M.Sc. in Data Science & Analytics",
      institution: "Jain University, Bangalore",
      period: "2024 – 2026",
      status: "In Progress (Postgraduate)",
      coursework: [
        "Machine Learning",
        "Natural Language Processing",
        "Probability & Statistics",
        "Data Analytics & Data Mining",
        "Data Structures & Algorithms",
        "DBMS & Big Data Technologies"
      ]
    },
    {
      degree: "B.Sc. in Computer Science",
      institution: "Sri Ramakrishna Mission Vidyalaya College of Arts and Science",
      period: "2020 – 2023",
      status: "Graduated",
      coursework: [
        "Database Management Systems",
        "Software Engineering",
        "Object-Oriented Programming",
        "Operating Systems",
        "Web Technologies",
        "Mathematics for Computing"
      ]
    }
  ],

  certifications: [
    {
      title: "Python Programming",
      issuer: "Coursera",
      badgeColor: "teal",
      type: "Course Certificate"
    },
    {
      title: "Foundations: Data, Data Everywhere",
      issuer: "Coursera (Google Data Analytics)",
      badgeColor: "blue",
      type: "Professional Foundation"
    },
    {
      title: "Probability Theory: Foundation for Data Science",
      issuer: "Coursera",
      badgeColor: "indigo",
      type: "Statistical Foundations"
    },
    {
      title: "Data Analytics with SAS",
      issuer: "Coursera",
      badgeColor: "cyan",
      type: "Enterprise Analytics"
    },
    {
      title: "Apache Spark: An Introduction in Detail",
      issuer: "Coursera",
      badgeColor: "amber",
      type: "Big Data & Distributed Computing"
    },
    {
      title: "Principal Component Analysis with NumPy",
      issuer: "Coursera",
      badgeColor: "emerald",
      type: "Dimensionality Reduction"
    },
    {
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte (Forage)",
      badgeColor: "teal",
      type: "Industry Practical Simulation"
    },
    {
      title: "Data Visualisation Job Simulation",
      issuer: "Tata (Forage)",
      badgeColor: "violet",
      type: "Executive Dashboard Simulation"
    }
  ]
};
