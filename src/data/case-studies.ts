import { CaseStudy } from "@/types/case-study";

export const caseStudies: Record<string, CaseStudy> = {
    "financial-automation-banking": {
        slug: "financial-automation-banking",
        client: "A leading multinational bank",
        industry: "Banking & Financial Services",
        duration: "8 months",
        teamSize: "12",
        title: "AI-Driven Financial Automation for a Multinational Bank",
        description:
          "Debite partnered with a global banking institution to revolutionize its financial operations through AI-powered automation. The goal was to reduce manual inefficiencies, enhance fraud detection, and provide real-time financial insights for better decision-making.",
        heroImage: "/images/case-studies/financial-automation.jpg",
        challenge:
          "The bank was struggling with slow and error-prone manual processes, outdated risk assessment models, and rising fraud incidents. Additionally, compliance with international regulations was becoming increasingly complex.",
        approach:
          "We leveraged AI and robotic process automation (RPA) to automate routine banking operations, implemented a real-time fraud detection system, and integrated a compliance management framework to ensure regulatory adherence. Our approach prioritized security, efficiency, and customer experience.",
        metrics: [
          {
            label: "Fraud Detection Accuracy",
            value: "85% improvement",
            description:
              "AI-driven analytics significantly reduced false positives in fraud detection.",
          },
          {
            label: "Operational Costs",
            value: "30% reduction",
            description:
              "Automation of manual processes led to significant cost savings.",
          },
          {
            label: "Processing Speed",
            value: "4x faster",
            description:
              "Financial transactions and loan approvals were processed significantly faster.",
          },
        ],
        solutions: [
          {
            title: "Robotic Process Automation (RPA)",
            description:
              "Automated repetitive banking processes such as loan approvals, KYC verification, and account reconciliation, reducing human errors and improving efficiency.",
            image: "/images/case-studies/solutions/rpa-banking.jpg",
          },
          {
            title: "AI-Powered Fraud Detection",
            description:
              "Developed a real-time fraud detection system using AI and machine learning to analyze transaction patterns and prevent suspicious activities.",
            image: "/images/case-studies/solutions/fraud-detection.jpg",
          },
          {
            title: "Regulatory Compliance Automation",
            description:
              "Integrated an AI-driven compliance monitoring system to ensure adherence to financial regulations such as Basel III and GDPR.",
            image: "/images/case-studies/solutions/compliance-automation.jpg",
          },
        ],
        technologies: [
          {
            name: "Machine Learning & AI",
            description:
              "Advanced predictive analytics and fraud detection models for banking security.",
            logo: "/images/technologies/ai-ml-logo.png",
          },
          {
            name: "Robotic Process Automation (RPA)",
            description:
              "Automating banking workflows for efficiency and accuracy.",
            logo: "/images/technologies/rpa-logo.png",
          },
          {
            name: "Blockchain for Security",
            description:
              "Enhancing transaction security and data integrity in banking operations.",
            logo: "/images/technologies/blockchain-logo.png",
          },
        ],
        testimonial: {
          quote:
            "Debite's AI-powered automation completely transformed our banking operations. Fraud detection is now significantly more accurate, and our efficiency has skyrocketed.",
          author: "Jane Smith",
          role: "CIO, Leading Multinational Bank",
          image: "/images/testimonials/jane-smith.jpg",
        }
    },
    "smart-manufacturing-iot": {
        slug: "smart-manufacturing-iot",
        client: "A leading automotive parts manufacturer",
        industry: "Automotive & Manufacturing",
        duration: "10 months",
        teamSize: "18",
        title: "Smart Manufacturing with IoT & AI for an Automotive Parts Manufacturer",
        description:
          "Debite helped an automotive parts manufacturer transform its production lines by integrating IoT-enabled sensors, AI-driven analytics, and automated quality control. This resulted in reduced downtime, improved efficiency, and predictive maintenance capabilities.",
        heroImage: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg",
        challenge:
          "The company faced challenges with unplanned downtime, inefficient production workflows, and high defect rates. The lack of real-time monitoring made it difficult to optimize operations and meet growing industry demands.",
        approach:
          "We implemented a smart factory solution powered by IoT and AI, enabling real-time monitoring of equipment, predictive maintenance, and data-driven quality control. Our solution streamlined production workflows, reducing waste and improving productivity.",
        metrics: [
          {
            label: "Production Efficiency",
            value: "45% increase",
            description:
              "Optimized manufacturing workflows and automated quality checks improved efficiency.",
          },
          {
            label: "Downtime Reduction",
            value: "60% decrease",
            description:
              "IoT-based predictive maintenance significantly reduced unplanned downtime.",
          },
          {
            label: "Defect Rate",
            value: "70% improvement",
            description:
              "AI-powered quality control reduced product defects and enhanced reliability.",
          },
        ],
        solutions: [
          {
            title: "IoT-Powered Real-Time Monitoring",
            description:
              "Installed IoT sensors across production lines to monitor equipment health, detect anomalies, and provide real-time analytics.",
            image: "https://images.pexels.com/photos/3855617/pexels-photo-3855617.jpeg",
          },
          {
            title: "AI-Driven Predictive Maintenance",
            description:
              "Utilized AI algorithms to predict equipment failures before they happened, reducing maintenance costs and improving production uptime.",
            image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
          },
          {
            title: "Automated Quality Control with Computer Vision",
            description:
              "Implemented an AI-powered vision system to inspect product quality in real-time, reducing defect rates and improving consistency.",
            image: "https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg",
          },
        ],
        technologies: [
          {
            name: "Internet of Things (IoT)",
            description:
              "Connected devices for real-time monitoring and predictive analytics in manufacturing.",
            logo: "/images/technologies/iot-logo.png",
          },
          {
            name: "Artificial Intelligence & Computer Vision",
            description:
              "AI-driven quality control and predictive maintenance for enhanced manufacturing efficiency.",
            logo: "/images/technologies/ai-computer-vision-logo.png",
          },
          {
            name: "Cloud Computing",
            description:
              "Centralized data processing and analytics for scalable industrial automation.",
            logo: "/images/technologies/cloud-logo.png",
          },
        ],
        testimonial: {
          quote:
            "With Debite’s IoT and AI-driven automation, we’ve drastically reduced downtime and improved product quality. Our manufacturing processes are now smarter and more efficient than ever.",
          author: "Michael Johnson",
          role: "Operations Director, Leading Automotive Manufacturer",
          image: "/images/testimonials/michael-johnson.jpg",
        }
    },
    "digital-transformation-healthcare": {
        slug: "digital-transformation-healthcare",
    client: "A leading medical equipment manufacturer",
    industry: "Healthcare & Medical Devices",
    duration: "12 months",
    teamSize: "15",
    title: "Digital Transformation for a Global Healthcare Manufacturer",
    description:
      "We partnered with a global medical equipment manufacturer to modernize their legacy systems, streamline operations, and enhance digital experiences. Our team implemented a cloud-based infrastructure, integrated AI-driven analytics, and improved cybersecurity measures to ensure seamless operations.",
    heroImage: "/images/case-studies/healthcare-digital-transformation.jpg",
    challenge:
      "The client faced challenges with outdated legacy systems, inefficient workflows, and data security risks. Their existing system struggled with interoperability, leading to delays in product development and regulatory compliance.",
    approach:
      "Our team conducted a comprehensive audit of the client’s IT infrastructure and proposed a phased approach to migrate their legacy systems to a secure cloud-based solution. We implemented AI-driven predictive maintenance, optimized data workflows, and introduced real-time analytics dashboards.",
    metrics: [
      {
        label: "Operational Efficiency",
        value: "35% increase",
        description: "Improved workflow automation and process optimization.",
      },
      {
        label: "Data Security",
        value: "70% risk reduction",
        description: "Enhanced cybersecurity protocols and compliance measures.",
      },
      {
        label: "Time to Market",
        value: "40% faster",
        description:
          "Accelerated product development through digital process enhancements.",
      },
    ],
    solutions: [
      {
        title: "Cloud Infrastructure Migration",
        description:
          "Migrated legacy systems to a secure, scalable cloud platform, ensuring real-time data access and improved operational efficiency.",
        image: "/images/case-studies/solutions/cloud-migration.jpg",
      },
      {
        title: "AI-Driven Predictive Maintenance",
        description:
          "Implemented AI-based predictive analytics to monitor equipment performance and reduce downtime by 45%.",
        image: "/images/case-studies/solutions/ai-predictive-maintenance.jpg",
      },
      {
        title: "Cybersecurity & Compliance Enhancement",
        description:
          "Deployed advanced security protocols to meet HIPAA compliance and protect sensitive medical data.",
        image: "/images/case-studies/solutions/cybersecurity.jpg",
      },
    ],
    technologies: [
      {
        name: "Microsoft Azure",
        description: "Cloud infrastructure for secure and scalable solutions.",
        logo: "/images/technologies/azure-logo.png",
      },
      {
        name: "AI & Machine Learning",
        description: "Predictive analytics and automation to optimize processes.",
        logo: "/images/technologies/ai-ml-logo.png",
      },
      {
        name: "Cybersecurity Frameworks",
        description: "Enhanced security protocols for compliance and risk management.",
        logo: "/images/technologies/security-frameworks-logo.png",
      },
    ],
    testimonial: {
      quote:
        "Debite transformed our operations by modernizing our IT infrastructure and implementing AI-driven insights. We've seen a remarkable improvement in efficiency and security.",
      author: "John Doe",
      role: "CTO, Leading Medical Equipment Manufacturer",
      image: "/images/testimonials/john-doe.jpg",
    },
    },
    "ai-ecommerce-optimization": {
        slug: "ai-ecommerce-optimization",
  client: "A leading global fashion retailer",
  industry: "Retail & eCommerce",
  duration: "9 months",
  teamSize: "14",
  title: "AI-Powered eCommerce Optimization for a Global Fashion Retailer",
  description:
    "Debite collaborated with a leading fashion retailer to transform their eCommerce operations by implementing AI-driven personalization, automated inventory management, and real-time customer insights. The goal was to enhance customer engagement, optimize logistics, and increase revenue.",
  heroImage: "https://images.pexels.com/photos/4127648/pexels-photo-4127648.jpeg",
  challenge:
    "The client faced challenges with low conversion rates, inefficient inventory management, and an outdated recommendation system that failed to provide personalized shopping experiences. Additionally, order fulfillment delays led to customer dissatisfaction.",
  approach:
    "We implemented an AI-powered recommendation engine, predictive demand forecasting, and automated supply chain management. Our approach prioritized real-time insights, customer behavior tracking, and efficient order processing.",
  metrics: [
    {
      label: "Conversion Rate",
      value: "38% increase",
      description:
        "AI-driven personalization and dynamic pricing improved online sales.",
    },
    {
      label: "Inventory Efficiency",
      value: "50% reduction in stockouts",
      description:
        "Predictive demand forecasting minimized overstock and stockouts.",
    },
    {
      label: "Order Fulfillment Speed",
      value: "3x faster",
      description:
        "Automated warehouse operations and logistics optimization improved delivery times.",
    },
  ],
  solutions: [
    {
      title: "AI-Driven Product Recommendations",
      description:
        "Implemented a machine learning-based recommendation engine that personalized product suggestions based on customer behavior and purchase history.",
      image: "https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg",
    },
    {
      title: "Automated Inventory & Demand Forecasting",
      description:
        "Leveraged AI models to predict demand trends and optimize stock levels, reducing waste and improving fulfillment efficiency.",
      image: "https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg",
    },
    {
      title: "Chatbot-Powered Customer Support",
      description:
        "Deployed an AI chatbot to handle customer inquiries, assist with orders, and provide real-time tracking updates, improving customer satisfaction.",
      image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg",
    },
  ],
  technologies: [
    {
      name: "Machine Learning & AI",
      description:
        "Advanced AI-driven insights for eCommerce personalization and demand forecasting.",
      logo: "/images/technologies/ai-ml-logo.png",
    },
    {
      name: "Cloud-Based eCommerce Solutions",
      description:
        "Scalable cloud infrastructure for seamless digital retail operations.",
      logo: "/images/technologies/cloud-logo.png",
    },
    {
      name: "Natural Language Processing (NLP)",
      description:
        "AI-powered chatbot and voice assistants for enhanced customer interactions.",
      logo: "/images/technologies/nlp-logo.png",
    },
  ],
  testimonial: {
    quote:
      "Debite’s AI solutions revolutionized our eCommerce operations. Our customers now enjoy a highly personalized shopping experience, and our logistics have never been more efficient.",
    author: "Sophia Martinez",
    role: "Head of Digital Transformation, Leading Fashion Retailer",
    image: "/images/testimonials/sophia-martinez.jpg",
  },
    },
    "digital-banking-revamp":{
        slug: "digital-banking-revamp",
  client: "A leading digital-first bank",
  industry: "Banking & Financial Services",
  duration: "11 months",
  teamSize: "16",
  title: "AI-Powered Digital Banking Transformation for a Leading Fintech Bank",
  description:
    "Debite partnered with a leading digital-first bank to overhaul its core banking infrastructure. By implementing AI-driven customer insights, blockchain-based security, and process automation, we improved customer engagement, enhanced fraud detection, and optimized financial operations.",
  heroImage: "https://images.pexels.com/photos/4968384/pexels-photo-4968384.jpeg",
  challenge:
    "The bank struggled with a fragmented digital ecosystem, rising cybersecurity threats, and a lack of AI-driven automation in its customer services. Additionally, traditional KYC verification processes led to onboarding delays.",
  approach:
    "We implemented AI-powered fraud detection, automated risk assessments, and blockchain-based identity verification. By integrating a modern cloud banking solution, we streamlined digital transactions and improved customer experience.",
  metrics: [
    {
      label: "Customer Onboarding Time",
      value: "70% faster",
      description:
        "Automated KYC verification reduced manual processes and improved approval times.",
    },
    {
      label: "Fraud Detection Accuracy",
      value: "90% improvement",
      description:
        "Real-time AI analytics significantly reduced fraudulent transactions.",
    },
    {
      label: "Operational Costs",
      value: "40% reduction",
      description:
        "Cloud-native banking infrastructure and automation cut costs and improved scalability.",
    },
  ],
  solutions: [
    {
      title: "AI-Powered Customer Insights",
      description:
        "Developed an AI engine that analyzed customer behaviors, providing personalized banking recommendations and proactive fraud alerts.",
      image: "https://images.pexels.com/photos/4386371/pexels-photo-4386371.jpeg",
    },
    {
      title: "Blockchain-Based KYC & Identity Verification",
      description:
        "Implemented a secure, blockchain-powered digital identity verification system, reducing fraud risks and streamlining onboarding.",
      image: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg",
    },
    {
      title: "Automated Loan & Risk Assessment",
      description:
        "Used AI to automate risk assessments for loan approvals, improving decision-making speed and accuracy.",
      image: "https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg",
    },
  ],
  technologies: [
    {
      name: "AI & Machine Learning",
      description:
        "Advanced AI models for fraud detection, customer insights, and automated decision-making.",
      logo: "/images/technologies/ai-ml-logo.png",
    },
    {
      name: "Blockchain Security",
      description:
        "Decentralized security for banking transactions and identity verification.",
      logo: "/images/technologies/blockchain-logo.png",
    },
    {
      name: "Cloud-Based Banking Infrastructure",
      description:
        "Scalable, secure, and high-performance cloud solutions for digital banking.",
      logo: "/images/technologies/cloud-logo.png",
    },
  ],
  testimonial: {
    quote:
      "Debite’s AI and blockchain-driven solutions transformed our banking operations. Our fraud detection accuracy improved dramatically, and our customers now enjoy a seamless digital experience.",
    author: "David Williams",
    role: "Chief Technology Officer, Leading Digital Bank",
    image: "/images/testimonials/david-williams.jpg",
  },
    },
    "ai-cybersecurity-threat-detection":{
        slug: "ai-cybersecurity-threat-detection",
        client: "A leading multinational corporation",
        industry: "Enterprise Security & IT",
        duration: "9 months",
        teamSize: "14",
        title: "AI-Powered Threat Detection & Response for a Global Enterprise",
        description:
          "Debite helped a multinational corporation enhance its cybersecurity posture by implementing AI-driven threat detection, real-time monitoring, and automated incident response. Our solution significantly reduced cyber attack risks and improved compliance with global security standards.",
        heroImage: "https://images.pexels.com/photos/5380663/pexels-photo-5380663.jpeg",
        challenge:
          "The client faced frequent phishing attacks, ransomware threats, and vulnerabilities in their IT infrastructure. Traditional security solutions failed to detect sophisticated cyber threats in real time.",
        approach:
          "We deployed an AI-driven Security Information and Event Management (SIEM) system, combined with machine learning algorithms for anomaly detection. This allowed real-time monitoring, predictive threat intelligence, and automated response mechanisms.",
        metrics: [
          {
            label: "Threat Detection Speed",
            value: "90% faster",
            description:
              "AI-driven monitoring detected threats in real-time, reducing breach response time from hours to minutes.",
          },
          {
            label: "Phishing Attack Reduction",
            value: "85% decrease",
            description:
              "AI-powered email filtering and user training significantly lowered phishing attack success rates.",
          },
          {
            label: "Compliance Score",
            value: "ISO 27001 & GDPR certified",
            description:
              "Ensured the company met international cybersecurity standards and compliance requirements.",
          },
        ],
        solutions: [
          {
            title: "AI-Driven Threat Intelligence",
            description:
              "Developed an AI-powered SIEM platform that continuously analyzed network traffic, identifying and mitigating potential threats in real time.",
            image: "https://images.pexels.com/photos/1181351/pexels-photo-1181351.jpeg",
          },
          {
            title: "Automated Incident Response",
            description:
              "Implemented automated security workflows to contain threats instantly, reducing the impact of cyber attacks.",
            image: "https://images.pexels.com/photos/6239033/pexels-photo-6239033.jpeg",
          },
          {
            title: "Employee Security Awareness Training",
            description:
              "Conducted AI-driven security awareness training to educate employees on identifying and avoiding phishing and social engineering attacks.",
            image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
          },
        ],
        technologies: [
          {
            name: "AI & Machine Learning",
            description:
              "Real-time anomaly detection and predictive analytics for proactive cybersecurity.",
            logo: "/images/technologies/ai-ml-logo.png",
          },
          {
            name: "SIEM & Threat Intelligence",
            description:
              "Security event management and predictive analytics for cyber threat detection.",
            logo: "/images/technologies/siem-logo.png",
          },
          {
            name: "Zero Trust Architecture",
            description:
              "Implemented a zero-trust framework to enhance network security and access control.",
            logo: "/images/technologies/zero-trust-logo.png",
          },
        ],
        testimonial: {
          quote:
            "With Debite’s AI-driven security solutions, we have dramatically improved our threat detection capabilities. We now detect and neutralize cyber threats before they cause damage.",
          author: "Mark Reynolds",
          role: "CISO, Leading Multinational Corporation",
          image: "/images/testimonials/mark-reynolds.jpg",
        },      
      },
      "cloud-security-data-protection":{
        slug: "cloud-security-data-protection",
  client: "A leading investment firm",
  industry: "Financial Services & Cybersecurity",
  duration: "12 months",
  teamSize: "18",
  title: "Cloud Security & Data Protection for a Global Financial Institution",
  description:
    "Debite collaborated with a leading investment firm to enhance cloud security, ensuring compliance with financial regulations and protecting sensitive customer data from cyber threats.",
  heroImage: "https://images.pexels.com/photos/289236/pexels-photo-289236.jpeg",
  challenge:
    "The client faced growing security risks due to increased cloud adoption, unencrypted sensitive financial data, and a lack of robust access controls. Data breaches posed a major risk to their reputation and regulatory compliance.",
  approach:
    "We implemented a multi-layered security strategy using encryption, AI-based threat monitoring, and role-based access control (RBAC) to protect critical financial data in the cloud.",
  metrics: [
    {
      label: "Cloud Security Score",
      value: "99.8% compliance",
      description:
        "Achieved high security compliance with financial regulations like PCI-DSS, GDPR, and SOC 2.",
    },
    {
      label: "Data Breach Incidents",
      value: "Zero breaches",
      description:
        "AI-driven monitoring and encryption protocols eliminated major data breaches.",
    },
    {
      label: "Data Access Speed",
      value: "25% faster",
      description:
        "Optimized secure cloud data access without compromising security measures.",
    },
  ],
  solutions: [
    {
      title: "End-to-End Data Encryption",
      description:
        "Implemented AES-256 encryption for data at rest and in transit, ensuring complete protection from unauthorized access.",
      image: "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg",
    },
    {
      title: "AI-Powered Cloud Security Monitoring",
      description:
        "Deployed AI-driven security monitoring tools that continuously scan for vulnerabilities and unauthorized access attempts.",
      image: "https://images.pexels.com/photos/531767/pexels-photo-531767.jpeg",
    },
    {
      title: "Zero Trust Network Access (ZTNA)",
      description:
        "Implemented a Zero Trust model that required continuous identity verification for access to financial data.",
      image: "https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg",
    },
  ],
  technologies: [
    {
      name: "Cloud Security & Encryption",
      description:
        "Protecting sensitive data with advanced encryption protocols and secure access controls.",
      logo: "/images/technologies/cloud-security-logo.png",
    },
    {
      name: "AI-Powered Threat Detection",
      description:
        "Continuous monitoring and automated threat response for financial data security.",
      logo: "/images/technologies/ai-threat-detection-logo.png",
    },
    {
      name: "Zero Trust Security Framework",
      description:
        "Ensuring continuous verification and least-privilege access for financial data protection.",
      logo: "/images/technologies/zero-trust-logo.png",
    },
  ],
  testimonial: {
    quote:
      "Debite’s cloud security strategy provided us with unmatched data protection. Our financial transactions and customer data are now fully secure, with zero breaches.",
    author: "Alex Thompson",
    role: "Head of IT Security, Leading Investment Firm",
    image: "/images/testimonials/alex-thompson.jpg",
  },
      },
      'cloud-native-fintech-transformation': {
        slug: "cloud-native-fintech-transformation",
        client: "A global FinTech startup",
        industry: "Financial Technology & Cloud Services",
        duration: "10 months",
        teamSize: "15",
        title: "Cloud-Native Platform Transformation for a Global FinTech Startup",
        description:
          "Debite partnered with a fast-growing FinTech startup to modernize their infrastructure by migrating to a cloud-native architecture. The goal was to enhance scalability, improve security, and ensure high availability for their financial services platform.",
        heroImage: "https://images.pexels.com/photos/45111/pexels-photo-45111.jpeg",
        challenge:
          "The FinTech company struggled with an outdated monolithic system that lacked scalability, suffered from performance bottlenecks, and posed security risks due to fragmented cloud integrations.",
        approach:
          "We transitioned their platform to a fully cloud-native, microservices-based architecture using Kubernetes and serverless technologies. Our solution included API modernization, real-time fraud detection, and CI/CD pipeline automation.",
        metrics: [
          {
            label: "Scalability",
            value: "5x improvement",
            description:
              "The platform now automatically scales based on transaction volume, improving uptime and performance.",
          },
          {
            label: "Deployment Speed",
            value: "80% faster",
            description:
              "CI/CD automation enabled rapid feature releases and improved developer efficiency.",
          },
          {
            label: "Cost Savings",
            value: "40% reduction",
            description:
              "Optimized cloud resource allocation reduced operational expenses significantly.",
          },
        ],
        solutions: [
          {
            title: "Cloud-Native Microservices Architecture",
            description:
              "Implemented a Kubernetes-based microservices infrastructure to enhance modularity and performance.",
            image: "https://images.pexels.com/photos/270373/pexels-photo-270373.jpeg",
          },
          {
            title: "Serverless Payment Processing",
            description:
              "Leveraged serverless computing to ensure seamless payment transactions with minimal latency.",
            image: "https://images.pexels.com/photos/11035364/pexels-photo-11035364.jpeg",
          },
          {
            title: "Automated Security & Compliance",
            description:
              "Implemented DevSecOps best practices to ensure regulatory compliance with PCI-DSS and GDPR.",
            image: "https://images.pexels.com/photos/6914589/pexels-photo-6914589.jpeg",
          },
        ],
        technologies: [
          {
            name: "AWS Lambda & Kubernetes",
            description:
              "Serverless and containerized applications for high-performance cloud operations.",
            logo: "/images/technologies/aws-kubernetes-logo.png",
          },
          {
            name: "API Gateway & Microservices",
            description:
              "Scalable API integrations and modular cloud-based application architecture.",
            logo: "/images/technologies/api-microservices-logo.png",
          },
          {
            name: "DevSecOps & Cloud Security",
            description:
              "Automated security checks and compliance monitoring for FinTech regulations.",
            logo: "/images/technologies/devsecops-logo.png",
          },
        ],
        testimonial: {
          quote:
            "Debite helped us build a resilient, scalable, and secure cloud-native financial platform. We can now deploy features faster and scale effortlessly to meet demand.",
          author: "Liam Parker",
          role: "CTO, Leading FinTech Startup",
          image: "/images/testimonials/liam-parker.jpg",
        },
      },
      "multi-cloud-migration-ecommerce" : {
        slug: "multi-cloud-migration-ecommerce",
        client: "A global eCommerce leader",
        industry: "Retail & Cloud Computing",
        duration: "12 months",
        teamSize: "20",
        title: "Seamless Multi-Cloud Migration for a Global E-commerce Leader",
        description:
          "Debite assisted a global eCommerce giant in migrating their entire infrastructure to a multi-cloud environment. The objective was to enhance redundancy, optimize performance, and prevent vendor lock-in.",
        heroImage: "https://images.pexels.com/photos/4127648/pexels-photo-4127648.jpeg",
        challenge:
          "The company faced frequent downtime during peak sales periods, limited cloud scalability, and high dependency on a single cloud provider, making them vulnerable to outages and cost inefficiencies.",
        approach:
          "We designed a multi-cloud strategy utilizing AWS, Azure, and Google Cloud, ensuring seamless workload distribution, redundancy, and disaster recovery across platforms.",
        metrics: [
          {
            label: "Downtime Reduction",
            value: "99.99% uptime",
            description:
              "Multi-cloud load balancing eliminated single points of failure.",
          },
          {
            label: "Operational Costs",
            value: "30% cost optimization",
            description:
              "Dynamic cloud resource allocation improved efficiency and reduced over-provisioning.",
          },
          {
            label: "Page Load Speed",
            value: "2x faster",
            description:
              "Optimized cloud architecture improved website performance globally.",
          },
        ],
        solutions: [
          {
            title: "Multi-Cloud Load Balancing",
            description:
              "Distributed workloads across AWS, Azure, and Google Cloud to optimize performance and ensure redundancy.",
            image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
          },
          {
            title: "Auto-Scaling Infrastructure",
            description:
              "Implemented an auto-scaling cloud environment that adjusts resources dynamically based on traffic.",
            image: "https://images.pexels.com/photos/4974916/pexels-photo-4974916.jpeg",
          },
          {
            title: "Disaster Recovery & Cloud Security",
            description:
              "Deployed a cloud-based disaster recovery plan ensuring business continuity with encrypted backups.",
            image: "https://images.pexels.com/photos/2291876/pexels-photo-2291876.jpeg",
          },
        ],
        technologies: [
          {
            name: "AWS, Azure & Google Cloud",
            description:
              "Multi-cloud integration for reliability and performance optimization.",
            logo: "/images/technologies/multi-cloud-logo.png",
          },
          {
            name: "Cloud Load Balancing",
            description:
              "Dynamic workload distribution to maintain high availability.",
            logo: "/images/technologies/load-balancer-logo.png",
          },
          {
            name: "Cloud Backup & Disaster Recovery",
            description:
              "Automated failover solutions ensuring business continuity.",
            logo: "/images/technologies/cloud-backup-logo.png",
          },
        ],
        testimonial: {
          quote:
            "Debite’s multi-cloud strategy helped us scale globally while reducing costs. Our site now runs seamlessly, even during major sales events.",
          author: "Emma Roberts",
          role: "VP of IT, Global eCommerce Leader",
          image: "/images/testimonials/emma-roberts.jpg",
        },
      },
  };