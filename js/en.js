window.i18nData = window.i18nData || {};
window.i18nData.en = {
  nav: {
    about: "About",
    career: "Career",
    skills: "Skills",
    sideProjects: "Side Projects",
    journey: "Journey"
  },

  hero: {
    tagline: "Backend Engineer",
    title: "Generalist Backend Engineer \u2014 A problem-solving engineer covering DevOps, infrastructure, and AI-powered development",
    bio: "Over 7 years, I have designed and operated backend systems across diverse domains. Starting as a junior who only knew code, I grew to architect systems handling 70K concurrent users and recover an entire cloud infrastructure from scratch in 14 hours after a Friday 4 PM catastrophe. I focus on building great systems, not just writing great code.",
    contact: "mydoor3520@gmail.com",
    tags: [
      "Backend Architecture",
      "DevOps / Infrastructure",
      "Incident Response & Recovery",
      "Business Logic Design",
      "AI / LLM Integration"
    ]
  },

  career: {
    sectionTitle: "Career",
    teamplback: {
      company: "TeamplBack",
      period: "2024.10 ~ 2026.02",
      role: "Senior Researcher",
      description: "AI-powered writing assessment platform (B2G web service)",
      team: "Dev team of 5 (3 backend, 2 frontend)",
      roleDetail: "Backend lead + Infrastructure (DevOps)",
      stack: "Java, Spring Boot, NCP, NHN Cloud, GitHub Actions, Docker, Locust, Python, FastAPI, Slack, MySQL, Redis",
      projects: {
        loadTest: {
          title: "70K CCU Load Testing and High-Availability Architecture",
          situation: "The server was to be delivered to the Gangwon Provincial Office of Education, with a requirement that half of the 130,000 enrolled students (approximately 70,000) must be able to use the service concurrently.",
          analysis: "Load testing using Python Locust with real user behavior scenarios revealed bottlenecks: a misconfigured transaction scope caused pessimistic lock hold times to become abnormally long, and unbounded full-table queries (without LIMIT) were being executed on every user registration.",
          action: "Separated heavy query logic from the transaction scope to minimize lock hold time. Applied LIMIT to group queries to restrict retrieval to only the necessary range.",
          result: "Passed the second load test on NCP cloud environment. 0% error rate with negligible response time difference compared to single-request execution. Established a high-availability architecture with 9 servers."
        },
        cicd: {
          title: "CI/CD Pipeline and Deployment Automation",
          situation: "The legacy service was operated with manual deployment (SSH access followed by direct build and deploy).",
          analysis: "Issues included human error risk during deployment, slow deployment speed, and non-reproducible deployment environments.",
          action: "Transitioned to Docker image-based deployment. Staging environment: build, test, SonarQube static analysis, then deploy. Production environment: blue/green deployment with automatic rollback on health check failure.",
          result: "Eliminated human errors through deployment automation and improved deployment speed. Implemented zero-downtime deployment via NCP CLI-based blue/green deployment scripts."
        },
        monitoring: {
          title: "Real-time Monitoring System with Slack Integration",
          situation: "No monitoring system existed for detecting server failures and errors.",
          action: "Built real-time Slack notifications for 500 errors and an on-premise NAS-based health check server.",
          result: "Proactively detected an LLM service outage before any customer support tickets came in. Immediately switched to an alternative LLM model and deployed, resolving the issue with zero service downtime."
        },
        cloudRecovery: {
          title: "Cloud Crisis Response and Infrastructure Rebuild (NHN Cloud to NCP)",
          situation: "While using NHN Cloud, the CEO mistakenly believed the account was under a partnership agreement, but it was actually an educational account. On a Friday at 4 PM, while users were actively using the service, the entire NHN Cloud account was deleted. All servers, databases, and infrastructure were lost.",
          action: "Led the 14-hour recovery from 4 PM to 6 AM the next day. Deployed a temporary maintenance page, obtained DB backups through NHN support, requested an emergency NCP public cloud account, rebuilt all 9 servers from scratch, and restored and verified the database.",
          result: "Full service recovery completed in 14 hours. Subsequently established a NAS-based daily automated backup system and revised cloud account management procedures to prevent recurrence."
        }
      }
    },
    primeEdunet: {
      company: "PrimeEdunet",
      period: "2022.06 ~ 2024.10",
      role: "Associate",
      description: "Online lecture platform for civil service exam preparation",
      stack: "Java, Spring Framework, Oracle, MySQL, Inicis Payment System, Spring Security, Spring Batch",
      projects: {
        refund: {
          title: "Refund System Development",
          situation: "A payment system existed but there was no refund or settlement system at all. The operations team manually cancelled transactions through the PG provider and recorded them in Excel spreadsheets.",
          analysis: "Analyzed complex product structures (single courses, standard packages, customizable packages) and per-instructor settlement ratios",
          action: "Designed and implemented Inicis PG-integrated refund system with progress-based refund ratio calculation logic",
          result: "Automated the manual refund process, improving operations team efficiency and ensuring settlement data integrity."
        },
        migration: {
          title: "Legacy Payment Data Migration",
          situation: "Refund data was not managed in a separate table; instead, rows were added to the payment table with different status values. This caused serious data integrity issues for refund history tracking and settlement data generation.",
          action: "Analyzed existing status values to separate tables and designed a new schema for data migration.",
          result: "Ensured payment and refund data integrity with a trackable structure."
        },
        settlement: {
          title: "Settlement System (Spring Batch)",
          situation: "Manual Excel-based settlement where the accounting team aggregated data manually.",
          action: "Built an automated settlement system using Spring Batch (weekly/monthly). Set up a dedicated settlement management server separated from the service server. Continuously improved through feedback from the accounting team.",
          result: "Fully automated the manual settlement process, improving accounting team efficiency."
        },
        versioning: {
          title: "Product Version Management",
          situation: "Due to the nature of certification exams, some lectures within a product needed to be replaced when exam scope or regulations changed.",
          action: "Implemented a versioning system for products to maintain history.",
          result: "Enabled tracking of past transaction records during customer support inquiries, improving operational efficiency."
        }
      }
    },
    bubblecon: {
      company: "BubbleCon",
      period: "2020.11 ~ 2022.06",
      role: "Assistant Manager",
      description: "Education business SI (Systems Integration)",
      team: "Dev team of 4 (including dev lead)",
      stack: "Java, Spring Framework, PostgreSQL, Spring Batch, Spring Security, NEXUS, OpenEQUELLA",
      projects: {
        searchOptimization: {
          title: "Search Performance Optimization (XML to PostgreSQL Normalization)",
          situation: "In the OpenEQUELLA-based education content hub, all data was stored in XML format, resulting in very poor search performance (approximately 10 seconds per query).",
          action: "Analyzed XML metadata and parsed only the necessary data, normalized it into PostgreSQL, and established a database indexing strategy.",
          result: "Reduced search time from approximately 10 seconds to under 1 second (perceived 10x improvement)."
        },
        posco: {
          title: "POSCO Education System On-site Support (4 weeks)",
          situation: "Responsible for the content hub in the POSCO education system project, stationed on-site for 4 weeks before production launch.",
          action: "Conducted thorough testing to ensure content could be properly uploaded, viewed, and edited in the LMS. Provided direct phone support and handled CS tickets for content provider usage issues.",
          result: "Successfully completed the production launch and accumulated client-facing support experience."
        }
      }
    },
    brainer: {
      company: "Brainer",
      period: "2019.02 ~ 2020.10",
      role: "Assistant Manager",
      description: "Security management solution provider",
      stack: "Java, Spring Framework, Jira, Redmine, eGov Framework",
      projects: {
        reportAutomation: {
          title: "Security Report Automation",
          situation: "Security reports were being generated manually by hand.",
          action: "Transitioned to an automated system using JasperReports.",
          result: "Automated security report generation, improving operational efficiency."
        },
        securityWorkflow: {
          title: "Security Operations Center and Issue Management Workflow Integration",
          situation: "Detected vulnerabilities from the security monitoring system were tracked and managed manually.",
          action: "Integrated the security monitoring system API with the issue management platform to automatically assign detected vulnerabilities as issues to responsible personnel, and provided a statistics dashboard with visualized analysis.",
          result: "Automated vulnerability tracking and visualized analysis results."
        },
        issueTracker: {
          title: "In-house Issue Management Tool Development",
          situation: "Initiated by a proposal from the development team lead (20 years of experience), the two of us led the development of an in-house issue management program.",
          action: "Benchmarked features from JIRA, Redmine, METIS, and Confluence, then planned and implemented the tool with user-centered UI/UX design.",
          result: "Gained end-to-end product experience from planning to implementation."
        }
      }
    }
  },

  skills: {
    sectionTitle: "Skills",
    categories: {
      languageFramework: {
        title: "Language & Framework",
        description: "Java, Spring Framework/Boot (7 years) | Python, FastAPI, JavaScript"
      },
      database: {
        title: "Database",
        description: "Oracle, MariaDB, PostgreSQL, MySQL, Redis | DB design, normalization, indexing, query optimization (6 years) | Legacy data migration"
      },
      devops: {
        title: "DevOps / Infrastructure",
        description: "NCP, NHN Cloud, AWS | GitHub Actions CI/CD (Docker, blue/green deployment, SonarQube) | Full server infrastructure setup (LB, VPC, ACG, DB replication) | NAS backup system"
      },
      monitoring: {
        title: "Monitoring & Operations",
        description: "Slack webhook-based real-time error alerts and health checks | Locust-based load testing"
      },
      ai: {
        title: "AI / LLM",
        description: "LLM API integration and prompt engineering | AI service failover with model switching | Vibe coding with Claude Code"
      }
    }
  },

  sideProjects: {
    sectionTitle: "Side Projects",
    interviewTrainer: {
      title: "Interview Training Web Service",
      description: "A service I planned and developed while preparing for a career transition, integrating LLM APIs. Learned that solid planning and thorough testing remain critically important, especially for AI-powered services.",
      stack: "LLM API, Prompt Engineering"
    },
    srtApp: {
      title: "SRT Auto-booking Android App",
      description: "My first mobile app built with vibe coding using Claude Code. Experienced firsthand how AI can deliver dramatic productivity gains, while recognizing the need for more rigorous or different testing methodologies when working with AI-assisted development.",
      stack: "Claude Code, Android, Vibe Coding"
    }
  },

  journey: {
    sectionTitle: "Journey",
    entries: [
      {
        year: "2019",
        title: "The Beginning",
        description: "A junior developer who only knew how to write code. Through field deployments and hands-on product planning, I began to see myself as a \"problem solver\" rather than just a coder."
      },
      {
        year: "2020~2024",
        title: "Growth",
        description: "Across diverse domains (education SI, e-commerce style online lecture services), I built my foundation as a backend engineer through search performance optimization, complex business logic systematization, and legacy data migration."
      },
      {
        year: "2024~",
        title: "The Leap",
        description: "As backend lead and infrastructure owner, I grew into a generalist covering 70K CCU high-availability architecture, CI/CD automation, cloud infrastructure rebuilds, and real-time monitoring \u2014 spanning backend, DevOps, infrastructure, and LLM integration."
      },
      {
        year: "Now",
        title: "Present",
        description: "An engineer who embraces new development methodologies for the AI era (vibe coding) firsthand, while thoughtfully considering the emerging challenges of testing and quality assurance that come with them."
      }
    ]
  },

  footer: {
    copyright: "Park Jeongho. All rights reserved."
  },

  labels: {
    situation: "Situation",
    analysis: "Analysis",
    action: "Action",
    result: "Result"
  }
,
  // Hero metrics
  hero_metric1_value: "7+",
  hero_metric1_label: "Years Experience",
  hero_metric2_value: "70K",
  hero_metric2_label: "CCU Architecture",
  hero_metric3_value: "14h",
  hero_metric3_label: "Full Infra Recovery",
  hero_metric4_value: "10x",
  hero_metric4_label: "Search Speedup",

  // GitHub
  hero_github: "GitHub",

  // Architecture diagram
  arch_title: "Server Architecture",
  arch_ext_lb: "External LB",
  arch_be_lb: "Backend LB",
  arch_fe_lb: "Frontend LB",
  arch_api1: "API Server #1",
  arch_api2: "API Server #2",
  arch_fe1: "Frontend #1",
  arch_fe2: "Frontend #2",
  arch_redis: "Redis",
  arch_db_master: "DB Master",
  arch_db_slave: "DB Slave (Backup)",
  arch_pdf: "PDF Server",
  arch_batch: "Batch Server",

  // CI/CD flow
  cicd_build: "Build",
  cicd_test: "Test",
  cicd_sonar: "SonarQube",
  cicd_deploy: "Blue/Green Deploy",
  cicd_health: "Health Check",
  cicd_rollback: "Auto Rollback",

  // Journey timeline
  j1_year: "2019 - 2020",
  j1_company: "Brainer",
  j1_desc: "My first job. Alongside a 20-year veteran tech lead, I developed security monitoring systems and delivered them on-site. Started working with Linux and Docker for the first time, built automated reporting with JasperReports, and integrated security operations with issue management workflows.",
  j1_legacy: "Security monitoring systems delivered to multiple institutions",
  j1_transition: "Wanted to experience building things as a team, not alone.",
  j2_year: "2020 - 2022",
  j2_company: "BubbleCon",
  j2_desc: "Joined a 4-person dev team building education content hubs. Improved search performance 10x by normalizing XML data into PostgreSQL, and spent 4 weeks on-site supporting the POSCO education system launch.",
  j2_legacy: "POSCO in-house education system, still operational today",
  j2_transition: "Wanted to build a service that grows with its users, not just deliver and leave.",
  j3_year: "2022 - 2024",
  j3_company: "PrimeEdunet",
  j3_desc: "Designed payment, refund, and settlement systems from scratch for an online lecture platform. Integrated Inicis PG, automated settlements with Spring Batch, and migrated legacy data -- building the ability to translate complex business logic into code.",
  j3_legacy: "Payment/refund/settlement systems running unchanged even after service downsizing",
  j3_transition: "With experience under my belt, I wanted the challenge of building and leading a team from scratch.",
  j4_year: "2024 - 2026",
  j4_company: "TeamplBack",
  j4_desc: "Joined a new dev team, grew it to 5 members, and served as backend lead and DevOps. Renewed the service, built 70K CCU architecture, CI/CD, monitoring, and recovered entire infrastructure in 14 hours -- working with the dedication of an owner, where on-time departure was less than 20% of all working days.",
  j4_legacy: "Renewed service 'Jakjakjakjak', 9-server infrastructure with CI/CD pipeline, monitoring and backup systems",
  j5_year: "Next",
  j5_company: "Next Chapter",
  j5_desc: "Four transitions over seven years taught me what I do best and what I truly want. I'm looking to join a team that fearlessly embraces new technology -- and become a long-term colleague built on mutual trust.",

  // Decision blocks
  decision_title: "Technical Decision",
  c1_p1_decision: "The PDF generation server was separated because the CPU-intensive anthology creation feature directly impacted API server response times. The DB Slave was operated purely for backup rather than read distribution \u2014 since read load was not significant, we prioritized backup reliability over adding replication complexity.",
  c1_p4_decision: "Recovery priorities were set as: user notification \u2192 DB recovery \u2192 infrastructure rebuild \u2192 verification \u2192 launch. Recognizing that users seeing a blank page was the highest risk, the first action was uploading a maintenance notice HTML to NCP Object Storage and temporarily pointing the domain there. After recovery, a NAS backup system was established to prevent recurrence.",
  c2_p1_decision: "Three product types \u2014 single courses, standard packages, and customizable packages \u2014 each required different refund calculation and instructor settlement logic. The solution was a unified refund calculation engine with separated settlement distribution strategies per product type, enabling extension to new product types without modifying the core refund logic.",

  // Print button
  print_btn: "Download PDF"
};
