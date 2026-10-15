export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  achievements: string[];
  technologies: string[];
  metrics?: { label: string; value: string }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'MERN Full Stack' | 'E-Commerce & Etsy' | 'Python & Automation' | 'Software Engineering';
  description: string;
  highlights: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  image?: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: 'Advanced' | 'Proficient' | 'Specialist';
    experience: string;
    focus: string;
  }[];
}

export interface CVProfile {
  name: string;
  title: string;
  subtitle: string;
  bio: string;
  contact: {
    phone: string;
    displayPhone: string;
    email: string;
    github: string;
    githubUsername: string;
    linkedin: string;
    linkedinUsername: string;
    location: string;
    whatsapp: string;
    avatar?: string;
  };
  metrics: {
    label: string;
    value: string;
    context: string;
  }[];
  skillCategories: SkillCategory[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  education: {
    degree: string;
    institution: string;
    period: string;
    highlights: string[];
  }[];
  etsyExpertise: {
    title: string;
    experience: string;
    overview: string;
    pillars: {
      title: string;
      description: string;
      metric: string;
    }[];
    tools: string[];
  };
}

export const cvData: CVProfile = {
  name: "Muhammad Hasnain",
  title: "Full Stack MERN Developer & Etsy E-Commerce Specialist",
  subtitle: "Engineering scalable web applications with React & Node.js, multi-language software architecture (Java, Python, JS), and driving marketplace growth through algorithmic Etsy SEO.",
  bio: "Results-driven Full Stack Engineer with deep expertise across the MERN stack (MongoDB, Express.js, React.js, Node.js) and 1+ year specialized experience scaling e-commerce storefronts on Etsy. Proven track record of developing responsive user interfaces, designing secure RESTful API architectures, and writing maintainable code in JavaScript, Python, and Java. Adept at bridging technical software craftsmanship with conversion-focused digital commerce strategy.",
  contact: {
    phone: "+92 312 6430166",
    displayPhone: "03126430166",
    email: "hasnainwasli17@gmail.com",
    github: "https://github.com/hasnain17576",
    githubUsername: "hasnain17576",
    linkedin: "https://www.linkedin.com/in/muhammad-hasnain-65023a314",
    linkedinUsername: "muhammad-hasnain-65023a314",
    location: "Pakistan · Available Worldwide (Remote / Hybrid)",
    whatsapp: "https://wa.me/923126430166",
    avatar: "/src/assets/images/hasnain_real_portrait_1792055072438.jpg",
  },
  metrics: [
    {
      value: "1+ Year",
      label: "Etsy Marketplace Specialist",
      context: "Listing SEO, tag engineering & conversion strategy"
    },
    {
      value: "100%",
      label: "Full Stack MERN Coverage",
      context: "Frontend React to backend Node & MongoDB architecture"
    },
    {
      value: "4 Languages",
      label: "Polyglot Programming",
      context: "JavaScript, TypeScript, Python, and Java"
    },
    {
      value: "<120ms",
      label: "Optimized API Latency",
      context: "Efficient MongoDB indexing and Express middleware"
    }
  ],
  skillCategories: [
    {
      category: "Frontend Development",
      description: "Component-driven client architecture, responsive styling, and modern state orchestration",
      skills: [
        { name: "React.js", level: "Advanced", experience: "2+ Years", focus: "Hooks, Virtual DOM, Component architecture" },
        { name: "Tailwind CSS", level: "Advanced", experience: "2+ Years", focus: "Utility-first responsive layouts, design systems" },
        { name: "JavaScript (ES6+)", level: "Advanced", experience: "3+ Years", focus: "Async/await, closures, modern syntax, DOM APIs" },
        { name: "HTML5 & Semantic Web", level: "Advanced", experience: "3+ Years", focus: "SEO-friendly accessibility, semantic tagging" },
        { name: "CSS3 & Modern Layouts", level: "Advanced", experience: "3+ Years", focus: "Flexbox, CSS Grid, media queries, print styles" },
        { name: "TypeScript", level: "Proficient", experience: "1+ Year", focus: "Static typing, interfaces, strict mode workflows" }
      ]
    },
    {
      category: "Backend & Database",
      description: "Robust server runtime, REST APIs, authentication security, and document database modeling",
      skills: [
        { name: "Node.js", level: "Advanced", experience: "2+ Years", focus: "Event loop, asynchronous I/O, server scripts" },
        { name: "Express.js", level: "Advanced", experience: "2+ Years", focus: "RESTful routing, custom middleware, error handling" },
        { name: "MongoDB", level: "Advanced", experience: "2+ Years", focus: "Document modeling, indexing, aggregation pipelines" },
        { name: "Mongoose ODM", level: "Advanced", experience: "2+ Years", focus: "Schema validation, population, query helpers" },
        { name: "RESTful API Design", level: "Advanced", experience: "2+ Years", focus: "Stateless architecture, pagination, rate-limiting" },
        { name: "JWT & Security Auth", level: "Proficient", experience: "2+ Years", focus: "JSON Web Tokens, bcrypt hashing, route guards" }
      ]
    },
    {
      category: "Core Programming & Scripts",
      description: "Multi-paradigm languages for systems programming, data extraction, and algorithms",
      skills: [
        { name: "JavaScript", level: "Advanced", experience: "3+ Years", focus: "Event-driven architecture, full-stack ecosystem" },
        { name: "Python", level: "Proficient", experience: "2+ Years", focus: "Data automation, web scraping, scripting pipelines" },
        { name: "Java", level: "Proficient", experience: "2+ Years", focus: "Object-oriented design, data structures, algorithms" }
      ]
    },
    {
      category: "Etsy E-Commerce Specialization",
      description: "1 year dedicated expertise optimizing and ranking high-converting Etsy store fronts",
      skills: [
        { name: "Etsy SEO & Tag Strategy", level: "Specialist", experience: "1 Year", focus: "13-tag saturation, long-tail search volume optimization" },
        { name: "Keyword & Competitor Research", level: "Specialist", experience: "1 Year", focus: "eRank, Marmalead, rank tracking, gap analysis" },
        { name: "Listing Optimization & Copy", level: "Specialist", experience: "1 Year", focus: "High-CTR titles, conversion copywriting, attribute matching" },
        { name: "Store Operations & Fulfillment", level: "Specialist", experience: "1 Year", focus: "Inventory syncing, digital download delivery, customer care" },
        { name: "Pricing Strategy & Margins", level: "Specialist", experience: "1 Year", focus: "Fee calculation, bundle pricing, seasonal promotions" }
      ]
    },
    {
      category: "Tools, Version Control & Deployment",
      description: "Production development workflow, collaboration, and modern continuous deployment",
      skills: [
        { name: "Git & GitHub", level: "Advanced", experience: "3+ Years", focus: "Branching, pull requests, version control" },
        { name: "Vercel Deployment", level: "Advanced", experience: "2+ Years", focus: "Edge deployment, environment variables, CI/CD" },
        { name: "Postman API Testing", level: "Advanced", experience: "2+ Years", focus: "Endpoint validation, automated testing collections" },
        { name: "VS Code & Terminal", level: "Advanced", experience: "3+ Years", focus: "Productive CLI workflows, linting, debugging" }
      ]
    }
  ],
  experience: [
    {
      id: "exp-mern",
      role: "Full Stack MERN Developer (Frontend & Backend)",
      organization: "Software Development & Client Engagements",
      period: "2023 — Present",
      location: "Remote / Hybrid",
      type: "Full-Time / Contract",
      summary: "Architecting and delivering full-lifecycle web applications utilizing the MERN stack (MongoDB, Express, React, Node.js). Leading both frontend UI engineering and backend server/database construction.",
      achievements: [
        "Engineered scalable single-page web applications using React.js with modular component architecture, custom hooks, and Tailwind CSS.",
        "Constructed robust RESTful API servers using Node.js and Express.js, featuring secure JWT-based authentication and role-based permissions.",
        "Modeled efficient MongoDB database schemas with Mongoose ODM, utilizing compound indexes to achieve sub-120ms average query latency.",
        "Implemented end-to-end frontend and backend validation, reducing erroneous payload processing and improving server fault tolerance.",
        "Integrated payment gateways, automated notifications, and cloud storage providers for media assets."
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "Tailwind CSS", "REST APIs", "JWT", "Git"],
      metrics: [
        { label: "Query Speed", value: "<120ms" },
        { label: "Lighthouse Score", value: "95+" }
      ]
    },
    {
      id: "exp-etsy",
      role: "Etsy E-Commerce Specialist & Store Growth Consultant",
      organization: "E-Commerce Merchant & Marketplace Operations",
      period: "2025 — 2026 (1 Year)",
      location: "Remote",
      type: "Specialist",
      summary: "Spearheaded end-to-end store strategy, algorithm-optimized listing management, and customer satisfaction workflows for active digital and physical products on Etsy.",
      achievements: [
        "Conducted deep keyword audits and competitor search query mapping to achieve 1st-page ranking on high-value buyer search phrases.",
        "Optimized product titles, 13 core tags, category attributes, and alt texts for maximum search visibility within Etsy's ranking algorithm.",
        "Increased organic store impressions by over +180% and improved listing conversion rate from 1.6% to 3.8% through targeted thumbnail A/B testing and persuasive copywriting.",
        "Monitored profit margins, fee structures, and promotional discounts to preserve high return on ad spend (ROAS).",
        "Managed client communication and order fulfillment, sustaining a 5-star customer review average across the store."
      ],
      technologies: ["Etsy Algorithm", "eRank Analytics", "Marmalead", "Etsy SEO", "Listing Optimization", "Competitor Research", "A/B Testing"],
      metrics: [
        { label: "Impression Growth", value: "+180%" },
        { label: "Conversion Rate", value: "3.8%" },
        { label: "Customer Rating", value: "5.0 ★" }
      ]
    },
    {
      id: "exp-software",
      role: "Software & Automation Developer (Python & Java)",
      organization: "Engineering Projects & Systems Development",
      period: "2023 — Present",
      location: "Independent / Academic",
      type: "Technical Practice",
      summary: "Designed and implemented algorithmic solutions, automated data scraping scripts, and object-oriented backend programs using Python and Java.",
      achievements: [
        "Authored Python web-scraping scripts using BeautifulSoup and Requests to track competing e-commerce product pricing and stock changes automatically.",
        "Developed Object-Oriented software components in Java applying SOLID design principles, inheritance, and clean data structure patterns.",
        "Automated batch image resizing, CSV data cleanup, and file parsing tasks, saving hours of manual data entry every week.",
        "Implemented thorough unit testing and clean error-handling mechanisms across all CLI utilities."
      ],
      technologies: ["Python", "Java", "OOP", "Data Structures", "Web Scraping", "Automation", "File I/O"],
      metrics: [
        { label: "Tasks Automated", value: "25+ weekly" },
        { label: "Languages", value: "Python · Java" }
      ]
    }
  ],
  projects: [
    {
      id: "proj-mern-market",
      title: "MERN Stack E-Commerce & Merchant Hub",
      subtitle: "Full-stack marketplace with user authentication, product management, cart checkout & dashboard",
      category: "MERN Full Stack",
      description: "A production-grade full-stack web application built from the ground up with React.js, Express.js, Node.js, and MongoDB. Includes role-based access for customers and merchants, real-time inventory counts, and instant search.",
      highlights: [
        "Built responsive client interface with React and Tailwind CSS featuring smooth cart state transitions",
        "Engineered RESTful backend with Express.js and MongoDB Mongoose for product catalog and order processing",
        "Protected private API routes with JSON Web Token (JWT) verification and bcrypt password hashing",
        "Integrated instant keyword filtering, category sorting, and price range filters"
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT", "REST API"],
      githubUrl: "https://github.com/hasnain17576",
      liveUrl: "https://github.com/hasnain17576"
    },
    {
      id: "proj-etsy-ranker",
      title: "Etsy SEO Tag Analyzer & Listing Ranker",
      subtitle: "Automated ranking evaluation and keyword density tool for Etsy shop sellers",
      category: "E-Commerce & Etsy",
      description: "A specialized web application that analyzes Etsy listing copy, scoring titles, attributes, and 13-tag slots against Etsy search engine best practices to maximize organic buyer discovery.",
      highlights: [
        "Evaluates listing titles against Etsy's 140-character algorithmic limit and primary keyword placement",
        "Verifies full 13-tag utilization and identifies single-word versus high-intent multi-word search tags",
        "Calculates tag competition scores and recommends long-tail keyword alternatives",
        "Built with React on the frontend and Python data parsing utility on the backend"
      ],
      technologies: ["React.js", "JavaScript", "Python", "Etsy SEO", "Tailwind CSS", "Data Analytics"],
      githubUrl: "https://github.com/hasnain17576",
      liveUrl: "https://github.com/hasnain17576"
    },
    {
      id: "proj-task-flow",
      title: "Collaborative Task & Sprint Manager",
      subtitle: "Real-time task tracking platform with status columns, priorities, and deadline alerts",
      category: "MERN Full Stack",
      description: "A productivity web application facilitating team sprint planning and task lifecycle tracking. Features clean drag-like status updates, priority tags, and clean RESTful synchronization.",
      highlights: [
        "Engineered component architecture with React for instant UI updates",
        "Designed MongoDB schemas for project boards, user memberships, and activity timelines",
        "Implemented secure user registration, session management, and project invitation links"
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      githubUrl: "https://github.com/hasnain17576",
      liveUrl: "https://github.com/hasnain17576"
    },
    {
      id: "proj-price-scraper",
      title: "Automated E-Commerce Competitor Price Scraper",
      subtitle: "Python script & data pipeline for tracking live market prices and inventory fluctuations",
      category: "Python & Automation",
      description: "A background data extraction pipeline built in Python to monitor competing product listings across e-commerce marketplaces, logging historical price points into structured CSV and JSON outputs.",
      highlights: [
        "Employs BeautifulSoup and custom header rotation to cleanly extract pricing and stock status",
        "Generates automated delta reports flagging price cuts and out-of-stock opportunities",
        "Runs on scheduled intervals with zero manual intervention"
      ],
      technologies: ["Python", "BeautifulSoup", "Requests", "JSON/CSV", "CLI"],
      githubUrl: "https://github.com/hasnain17576",
      liveUrl: "https://github.com/hasnain17576"
    }
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science / Software Engineering",
      institution: "Higher Education Institution",
      period: "2021 — 2025",
      highlights: [
        "Core coursework: Data Structures, Object-Oriented Programming (Java & C++), Database Systems, Web Technologies",
        "Cap-stone engineering project focused on modern web platforms and distributed services",
        "Maintained strong academic standing in software development and database design"
      ]
    },
    {
      degree: "Full Stack MERN & Web Architecture Certification",
      institution: "Professional Development & Web Engineering Track",
      period: "2023 — 2024",
      highlights: [
        "Hands-on building of production RESTful APIs, React SPAs, and MongoDB data persistence",
        "Mastered state management, component lifecycle, and asynchronous JavaScript patterns"
      ]
    },
    {
      degree: "Advanced Etsy SEO & E-Commerce Merchant Strategy",
      institution: "E-Commerce Masterclass & Marketplace Analytics",
      period: "2025",
      highlights: [
        "In-depth mastery of Etsy search algorithms, tag matching, listing quality scores, and conversion optimization"
      ]
    }
  ],
  etsyExpertise: {
    title: "1-Year Etsy Marketplace Mastery",
    experience: "1 Year Active Store Operations (2025 — 2026)",
    overview: "Combining technical software engineering rigor with data-driven e-commerce strategy to turn Etsy shops into profitable, highly ranked storefronts.",
    pillars: [
      {
        title: "Algorithmic Etsy SEO",
        description: "Optimizing title hierarchy, attribute matching, and utilizing all 13 multi-word tags with high buyer intent to trigger Etsy's search algorithm.",
        metric: "+180% Organic Impressions"
      },
      {
        title: "Conversion Rate Optimization (CRO)",
        description: "Crafting benefit-driven copywriting, professional listing thumbnail mockups, and transparent shipping/return policies to maximize checkout conversions.",
        metric: "3.8% Sustained CRO"
      },
      {
        title: "Market Intelligence & Competitor Analysis",
        description: "Leveraging eRank and Marmalead data to identify low-competition / high-demand product niches and optimal price points.",
        metric: "1st Page Ranking"
      },
      {
        title: "Store Management & Customer Trust",
        description: "Standardizing rapid customer inquiry turnaround, automated order delivery for digital products, and proactive review follow-ups.",
        metric: "5.0 / 5.0 Star Rating"
      }
    ],
    tools: ["eRank Analytics", "Marmalead", "Etsy Shop Manager", "Canva / Mockups", "Keyword Trend Trackers", "Google Sheets Analytics"]
  }
};
