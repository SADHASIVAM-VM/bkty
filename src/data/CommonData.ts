import { BarChart3, Boxes, Clock, Code, Database, Globe, Megaphone, Palette, PieChart, Rocket, Search, Settings, Shield, ShieldCheck, Smartphone, TrendingUp, User, Users } from "lucide-react";
import u1 from '../assets/u1.webp'
import u3 from '../assets/u3.webp'


export  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      client: "RetailMax Inc.",
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Complete e-commerce solution with inventory management, payment processing, and analytics dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      results: [
        { metric: "Sales Increase", value: "300%" },
        { metric: "Page Load Speed", value: "2.1s" },
        { metric: "Conversion Rate", value: "8.5%" },
      ],
      duration: "4 months",
      teamSize: "6 developers",
    },
    {
      id: 2,
      title: "Healthcare Management System",
      category: "software",
      client: "MedCare Solutions",
      image:
        "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Comprehensive patient management system with appointment scheduling, medical records, and billing.",
      technologies: ["Angular", "Java Spring", "PostgreSQL", "AWS"],
      results: [
        { metric: "Efficiency Gain", value: "250%" },
        { metric: "Patient Satisfaction", value: "95%" },
        { metric: "Cost Reduction", value: "40%" },
      ],
      duration: "8 months",
      teamSize: "8 developers",
    },
    {
      id: 3,
      title: "Digital Marketing Campaign",
      category: "marketing",
      client: "TechStart Innovations",
      image:
        "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Multi-channel digital marketing campaign including SEO, PPC, social media, and content marketing.",
      technologies: ["Google Ads", "Facebook Ads", "SEMrush", "HubSpot"],
      results: [
        { metric: "Lead Generation", value: "400%" },
        { metric: "Brand Awareness", value: "180%" },
        { metric: "ROI", value: "320%" },
      ],
      duration: "6 months",
      teamSize: "4 marketers",
    },
    {
      id: 4,
      title: "Mobile Banking App",
      category: "mobile",
      client: "SecureBank Corp",
      image:
        "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Secure mobile banking application with biometric authentication and real-time transactions.",
      technologies: ["React Native", "Node.js", "MongoDB", "Blockchain"],
      results: [
        { metric: "User Adoption", value: "85%" },
        { metric: "Security Score", value: "99.9%" },
        { metric: "Transaction Speed", value: "0.5s" },
      ],
      duration: "10 months",
      teamSize: "10 developers",
    },
    {
      id: 5,
      title: "Restaurant Management Portal",
      category: "web",
      client: "FoodChain Masters",
      image:
        "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Complete restaurant management system with POS, inventory, staff scheduling, and analytics.",
      technologies: ["Vue.js", "Python Django", "MySQL", "Redis"],
      results: [
        { metric: "Order Processing", value: "200%" },
        { metric: "Inventory Accuracy", value: "98%" },
        { metric: "Staff Efficiency", value: "150%" },
      ],
      duration: "5 months",
      teamSize: "5 developers",
    },
    {
      id: 6,
      title: "AI-Powered Analytics Platform",
      category: "software",
      client: "DataInsights Pro",
      image:
        "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800",
      description:
        "Machine learning platform for predictive analytics and business intelligence with real-time dashboards.",
      technologies: ["Python", "TensorFlow", "React", "Docker"],
      results: [
        { metric: "Prediction Accuracy", value: "94%" },
        { metric: "Processing Speed", value: "10x" },
        { metric: "Data Insights", value: "500%" },
      ],
      duration: "12 months",
      teamSize: "12 developers",
    },
  ];

  export  const advantages = [
    {
      title: "Expert Team",
      description:
        "Our developers, designers, and marketers bring years of hands-on experience and industry knowledge.",
      icon: Users,
    },
    {
      title: "Reliable Partnership",
      description:
        "We value transparent communication and long-term collaboration with every client.",
      icon: ShieldCheck,
    },
    {
      title: "Scalable Solutions",
      description:
        "We build products that grow with your business, designed for performance and flexibility.",
      icon: TrendingUp,
    },
    {
      title: "On-Time Delivery",
      description:
        "Strict timelines, agile methods, and realistic milestones ensure smooth project completion.",
      icon: Clock,
    },
  ];
  
  export const testimonials = [
    {
      name: "Nina Morales",
      role: "Marketing Director",
      company: "PixelGrowth Agency",
      image:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=100&h=100&fit=crop&crop=face",
      content:
        "Brackerty’s AI ad optimization reduced our CPC by 40% and increased our ROAS significantly across campaigns. Real-time targeting was a game changer.",
      rating: 5,
    },
    {
      name: "Jason Li",
      role: "CEO",
      company: "ClarityCloud",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=100&h=100&fit=crop&crop=face",
      content:
        "Their AI chatbot integration helped cut support tickets by 60%. We’ve freed up hours of agent time while improving customer satisfaction.",
      rating: 5,
    },
    {
      name: "Amira Khalid",
      role: "Head of Content",
      company: "Viral Nest Media",
      image:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=100&h=100&fit=crop&crop=face",
      content:
        "The SEO audits and backlink strategy were spot-on. Organic traffic went up 120% in three months, and we ranked #1 for three major keywords.",
      rating: 5,
    },
    {
      name: "James O'Connor",
      role: "Director of IT",
      company: "SafeNet Solutions",
      image:
        "https://images.unsplash.com/photo-1614284354644-3e67b8b1b3e9?w=100&h=100&fit=crop&crop=face",
      content:
        "Their security team helped us meet SOC 2 compliance in record time. Their vulnerability testing tools identified risks we’d missed for years.",
      rating: 5,
    },
    {
      name: "Lara Bennett",
      role: "Creative Lead",
      company: "StudioNorth",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b1c5?w=100&h=100&fit=crop&crop=face",
      content:
        "We loved how intuitive the new website CMS was. Our internal teams can now update content without needing developers involved.",
      rating: 5,
    },
    {
      name: "Musa Diallo",
      role: "Business Development Manager",
      company: "TradeWave Logistics",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      content:
        "Their B2B lead generation strategy brought in 30 qualified prospects within two weeks. Great ROI and very easy to work with.",
      rating: 5,
    },
    {
      name: "Sofia Ivanova",
      role: "CFO",
      company: "MetaMinds AI",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face",
      content:
        "Data management used to be our weakest point. Brackerty’s cloud-based DWH solution gave us daily reporting that used to take weeks.",
      rating: 5,
    },
    {
      name: "Ricardo Alvarez",
      role: "Social Media Manager",
      company: "BuzzTrend Digital",
      image:
        "https://images.unsplash.com/photo-1603415526960-f7e0328bcd4b?w=100&h=100&fit=crop&crop=face",
      content:
        "We now manage 15+ accounts through a unified dashboard with AI scheduling. Our post engagement doubled within 6 weeks.",
      rating: 5,
    },
    {
      name: "Emily Harper",
      role: "Product Owner",
      company: "NextPath Software",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      content:
        "Brackerty built our custom inventory system from scratch. It syncs in real time with suppliers and reduced order errors by 90%.",
      rating: 5,
    },
    {
      name: "Mohammed Reza",
      role: "Founder",
      company: "EcomSmart",
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop&crop=face",
      content:
        "From page speed to conversion optimization, our Shopify store is now 3x faster and converts 60% better. Couldn’t be happier.",
      rating: 5,
    },
    {
      name: "Chloe Kim",
      role: "Operations Director",
      company: "UrbanShift",
      image:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop&crop=face",
      content:
        "Their data visualization dashboards turned complex KPIs into actionable insights. Our executive reports now take 15 minutes, not hours.",
      rating: 5,
    },
    {
      name: "Leo Tanaka",
      role: "CTO",
      company: "NovaIoT Systems",
      image:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop&crop=face",
      content:
        "We asked for a custom IoT control panel, and they delivered beyond expectations. Secure, scalable, and blazing fast.",
      rating: 5,
    },
    {
      name: "Gabrielle Thomas",
      role: "Head of SEO",
      company: "ClickRank Media",
      image:
        "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=100&h=100&fit=crop&crop=face",
      content:
        "Their technical SEO audit revealed major crawl issues. After fixes, we saw a 3x boost in search visibility within one quarter.",
      rating: 5,
    },
    {
      name: "Yusuf Al-Mansoor",
      role: "Project Manager",
      company: "TeraLink Global",
      image:
        "https://images.unsplash.com/photo-1590080876084-1e7c0a54c4ce?w=100&h=100&fit=crop&crop=face",
      content:
        "Project deadlines were always met. Their Agile software team felt like an extension of our own, and communication was seamless.",
      rating: 5,
    },
    {
      name: "Hannah Williams",
      role: "Digital Marketing Lead",
      company: "BrandElevate",
      image:
        "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&h=100&fit=crop&crop=face",
      content:
        "They revamped our paid media strategy and cut CPA in half. Their creative assets were spot-on and conversion-focused.",
      rating: 5,
    },
    {
      name: "Carlos Mendes",
      role: "E-commerce Manager",
      company: "Shopfinity",
      image:
        "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop&crop=face",
      content:
        "Their abandoned cart automation added $48k in recovered revenue in the first 30 days. Seamless Klaviyo integration too.",
      rating: 5,
    },
    {
      name: "Isabella Ricci",
      role: "UX Research Lead",
      company: "FlowForm Design",
      image:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=100&h=100&fit=crop&crop=face",
      content:
        "Their heatmap & A/B testing tools helped us pinpoint friction points. After two weeks, bounce rate dropped by 27%.",
      rating: 5,
    },
    {
      name: "Tyler Green",
      role: "Security Analyst",
      company: "HexWall Defense",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face",
      content:
        "Pen testing uncovered five critical flaws in our architecture. Their patch recommendations were fast and effective.",
      rating: 5,
    },
    {
      name: "Fatima Noor",
      role: "Program Manager",
      company: "EduVerse",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
      content:
        "Our new LMS platform was built from scratch and delivered early. It's student-friendly, secure, and fully mobile responsive.",
      rating: 5,
    },
    {
      name: "Nick Fischer",
      role: "VP of Sales",
      company: "LeadCore AI",
      image:
        "https://images.unsplash.com/photo-1573497019410-3c89ac37d0ca?w=100&h=100&fit=crop&crop=face",
      content:
        "Brackerty’s AI-powered lead scoring tool has made our outreach 2x more efficient. Sales velocity has jumped by 35%.",
      rating: 5,
    },
    {
      name: "Mei Lin",
      role: "Brand Strategist",
      company: "EchoNest",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face",
      content:
        "Their brand refresh and responsive website helped us land two major clients. We’ve never looked more professional online.",
      rating: 5,
    },
  ];

  export  const services = [
    {
      title: "Redesign Web/App",
      description: "Our redesign transforms your website or app with designs that enhance experience and growth.",
      image: u1, // Replace with actual image
      blocks: [
        {
          title: "Start Your Business",
          description: "We help you launch with design solutions to build your business and develop your MVP, driving growth.",
          icon: Rocket,
        },
        {
          title: "Create New Features",
          description: "We help you launch with design solutions to build your business and develop your MVP, driving growth.",
          icon: Boxes,
        },
      ],
    },
    {
      title: "UI Kit & Template Production",
      description: "We create UI kits and templates to streamline your design process and ensure faster delivery.",
      image:"https://hopeui.iqonic.design/wp-content/uploads/2023/03/Frame-36403-min.png", // Replace with actual image
      blocks: [],
    },
    {
      title: "Digital Marketing",
      description: "digital marketing strategy is a comprehensive plan that outlines how a business will use online channels to reach its target audience, achieve marketing goals, and drive revenue.",
      image: "https://i.imgur.com/74id3oq.png", // Replace with actual image
      blocks: [],
      center: true,
    },
  ];


  export const additionalServices = [
    { icon: Smartphone, title: 'Mobile App Development', description: 'Native and cross-platform mobile applications' },
    { icon: Database, title: 'Data Analytics', description: 'Business intelligence and data visualization solutions' },
    { icon: Search, title: 'SEO Optimization', description: 'Improve your search engine rankings and visibility' },
    { icon: BarChart3, title: 'Performance Marketing', description: 'ROI-focused marketing campaigns and optimization' },
    { icon: Palette, title: 'UI/UX Design', description: 'User-centered design for digital products and services' },
    { icon: Shield, title: 'Cybersecurity', description: 'Protect your digital assets and customer data' }
  ];

  export const Ourmethod = [
  {
    icon: User,
    title: "User",
    description:
      "Guided by a collaborative design team and a user-centered approach, we understand user preferences and continuously strive to improve product satisfaction by enhancing ease of use, accessibility, and market potential.",
  },
  {
    icon: PieChart ,
    title: "Business",
    description:
      "Led by a dynamic business team, knowledgeable about optimal economic strategies, and accountable for meeting deadlines, managing resources, staying within budget, driving profit, fostering motivation, and promoting growth.",
  },
  {
    icon: Settings,
    title: "Technology",
    description:
      "Guided by a proficient engineering team, well-versed in the realm of feasibility, tasked with bringing ideas to fruition while ensuring maintainability, defect-free implementation, future-proofing, scalability, and optimal performance.",
  },
];

export const  mservices = [
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built from the ground up to meet your specific business requirements.',
      features: [
        'Enterprise Applications',
        'API Development & Integration',
        'Database Design & Optimization',
        'Cloud-Native Solutions',
        'Legacy System Modernization',
        'Scalable Architecture Design'
      ],
      process: [
        'Requirements Analysis',
        'System Architecture Design',
        'Development & Testing',
        'Deployment & Integration',
        'Ongoing Support & Maintenance'
      ],
      color: 'from-blue-500 to-blue-700',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Globe,
      title: 'Web Development & Applications',
      description: 'Modern, responsive websites and web applications that deliver exceptional user experiences.',
      features: [
        'Responsive Web Design',
        'E-commerce Platforms',
        'Progressive Web Apps (PWA)',
        'Content Management Systems',
        'Single Page Applications',
        'Performance Optimization'
      ],
      process: [
        'UI/UX Design',
        'Frontend Development',
        'Backend Integration',
        'Testing & Quality Assurance',
        'Launch & Optimization'
      ],
      color: 'from-purple-500 to-purple-700',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Megaphone,
      title: 'Digital Marketing & Social Media',
      description: 'Comprehensive digital marketing strategies that boost your online presence and drive measurable results.',
      features: [
        'Search Engine Optimization (SEO)',
        'Pay-Per-Click Advertising (PPC)',
        'Social Media Management',
        'Content Marketing Strategy',
        'Email Marketing Campaigns',
        'Analytics & Reporting'
      ],
      process: [
        'Market Research & Analysis',
        'Strategy Development',
        'Campaign Implementation',
        'Performance Monitoring',
        'Optimization & Scaling'
      ],
      color: 'from-cyan-500 to-cyan-700',
      bgColor: 'bg-cyan-50'
    },
    {
      icon: Users,
      title: 'Business Transformation Consulting',
      description: 'Strategic guidance to help you navigate digital transformation and optimize your business processes.',
      features: [
        'Digital Strategy Planning',
        'Process Automation',
        'Technology Assessment',
        'Change Management',
        'Training & Support',
        'ROI Analysis & Optimization'
      ],
      process: [
        'Business Assessment',
        'Strategy Formulation',
        'Implementation Planning',
        'Execution & Monitoring',
        'Continuous Improvement'
      ],
      color: 'from-emerald-500 to-emerald-700',
      bgColor: 'bg-emerald-50'
    }
  ];