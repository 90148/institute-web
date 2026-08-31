import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, BarChart2, Cpu, Globe2, Cloud, HeartHandshake, ArrowRight, Code, ShieldCheck, Milestone, CheckSquare, Sparkles, BookOpen, Compass } from 'lucide-react';

interface ProgramItem {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  shortDesc: string;
  longDesc: string;
  tech: string[];
  duration: string;
  image: string;
}

const programsData: ProgramItem[] = [
  {
    id: 'programming',
    icon: Terminal,
    title: 'Programming Foundations',
    shortDesc: 'Master data structures, algorithms, and logical problem solving.',
    longDesc: 'Learn the core concepts of software construction. Master arrays, lists, trees, graphs, dynamic programming, and complexity analysis using Python or C++.',
    tech: ['Python', 'C++', 'Data Structures', 'Algorithms'],
    duration: '12 Weeks',
    image: '/images/programming.jpg',
  },
  {
    id: 'data-analytics',
    icon: BarChart2,
    title: 'Data Analytics',
    shortDesc: 'Analyze raw data datasets and extract high-value business insights.',
    longDesc: 'Turn raw unstructured data into interactive analytical reports. Master relational database querying, statistical cleaning, data modeling, and business dashboards.',
    tech: ['SQL', 'Power BI', 'Pandas', 'Excel'],
    duration: '16 Weeks',
    image: '/images/data-analytics.jpg',
  },
  {
    id: 'ai',
    icon: Cpu,
    title: 'Artificial Intelligence',
    shortDesc: 'Build intelligent neural models and generative model applications.',
    longDesc: 'Enter the cutting edge of modern technology. Build linear regressions, decision forests, convolutional neural networks, LLM integrations, and pipeline deployments.',
    tech: ['PyTorch', 'TensorFlow', 'NLP', 'Scikit-Learn'],
    duration: '24 Weeks',
    image: '/images/ai-ml.jpg',
  },
  {
    id: 'web-dev',
    icon: Globe2,
    title: 'Web Development',
    shortDesc: 'Build high-performance, responsive full-stack web applications.',
    longDesc: 'Learn the complete architectural flow of web systems. Build user interfaces using React, scalable API services using Node.js/Next.js, and wire up database layers.',
    tech: ['React', 'Next.js', 'Node.js', 'PostgreSQL'],
    duration: '16 Weeks',
    image: '/images/web-dev.jpg',
  },
  {
    id: 'cloud-devops',
    icon: Cloud,
    title: 'Cloud & DevOps',
    shortDesc: 'Deploy and scale modern distributed cloud architectures.',
    longDesc: 'Automate build environments and system scaling. Master container orchestrations, continuous integration pipelines, infrastructure-as-code, and cloud security.',
    tech: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
    duration: '14 Weeks',
    image: '/images/cloud-devops.jpg',
  },
  {
    id: 'career-dev',
    icon: HeartHandshake,
    title: 'Career Development',
    shortDesc: 'Acquire mock interview skills and high-impact communication.',
    longDesc: 'Bridge the gap between technology and industry entry. Receive structural training on behavioral interview formulas, public pitch delivery, and executive networking.',
    tech: ['Resume Review', 'Mock Interviews', 'Soft Skills', 'LinkedIn Strategy'],
    duration: '8 Weeks',
    image: '/images/career-dev.jpg',
  },
];

// 4-Year Roadmap Details from reference slides
interface RoadmapYear {
  year: number;
  phase: string;
  tagline: string;
  transformationFrom: string;
  transformationTo: string;
  focusAreas: string[];
  tools: string[];
  outputs: string[];
  projects: string[];
  placementConnection: string;
}

const roadmapYears: RoadmapYear[] = [
  {
    year: 1,
    phase: 'FOUNDATION',
    tagline: 'Learn How to Learn & Think Like a Programmer',
    transformationFrom: 'I don\'t know programming.',
    transformationTo: 'I can understand logic and solve basic problems with code.',
    focusAreas: [
      'Programming Fundamentals (C / Python / Java)',
      'Syntax & Semantics',
      'Variables & Control Flow',
      'Logical Thinking & Logic Building',
      'Basic Databases & SQL',
      'Git & Version Control basics',
      'Communication & Presentation Skills'
    ],
    tools: ['VS Code', 'Git', 'GitHub CLI'],
    outputs: [
      'Basic command-line applications',
      'Active Git/GitHub profile setup',
      'Technical presentation delivery',
      'Consistent daily problem-solving habits'
    ],
    projects: ['Basic Calculator', 'Student Grade System', 'Simple Automation Script'],
    placementConnection: 'Develops the core analytical foundation and cognitive muscle required to face complex hiring processes later.'
  },
  {
    year: 2,
    phase: 'SKILL DEVELOPMENT',
    tagline: 'Move from Learning Concepts to Building Skills',
    transformationFrom: 'I know programming basics.',
    transformationTo: 'I can build and explain a working multi-layered application.',
    focusAreas: [
      'Object-Oriented Programming (OOP)',
      'SQL & Relational Database Design',
      'Frontend Development (HTML, CSS, basic JS)',
      'REST APIs & Backend basics',
      'Testing Fundamentals & Debugging',
      'Agile/Scrum Team Development basics',
      'Technical writing & Documentation'
    ],
    tools: ['Git Branches', 'GitHub Projects', 'Postman', 'SQL Server / PostgreSQL'],
    outputs: [
      'Multiple working mini-projects',
      'Clean Git branches & pull request workflow',
      'Complete Database-driven application',
      'Written technical documentation & code reviews'
    ],
    projects: ['Dynamic REST API service', 'Full Stack CRUD App', 'Collaborative Group Project'],
    placementConnection: 'Aptitude mapping begins. Students start early mock drills and communication awareness workshops.'
  },
  {
    year: 3,
    phase: 'SPECIALIZATION',
    tagline: 'Choose a Technology Path and Become Project-Ready',
    transformationFrom: 'I can build basic apps.',
    transformationTo: 'I am specialized and internship-ready in a core technology.',
    focusAreas: [
      'Targeted Specialization (Full Stack / AI & ML / Cloud / Data Science / Java Enterprise)',
      'Database indexing & Optimization',
      'UI/UX implementation & authentication security',
      'Cloud Deployment & Dockerization',
      'Collaborative Team Sprints',
      'Mock interview preparation & aptitude labs'
    ],
    tools: ['Docker', 'AWS / GCP', 'CI/CD Pipelines', 'Framer Motion / Tailwind'],
    outputs: [
      'Comprehensive Specialized Portfolio',
      'Professional LinkedIn & Resume optimization',
      'Verified mock technical interview scorecards',
      'Secured Industry Internship / Hackathon certificate'
    ],
    projects: ['Production-grade Capstone', 'Over-the-Cloud Deployed App', 'Open Source Contribution'],
    placementConnection: 'Placement preparation goes into overdrive. Target internship placements, resume vetting, and active mock testing.'
  },
  {
    year: 4,
    phase: 'CORPORATE READINESS',
    tagline: 'Convert Technical Ability into Employability',
    transformationFrom: 'I have skills.',
    transformationTo: 'I can demonstrate my skills, communicate my value, and excel in interviews.',
    focusAreas: [
      'Advanced projects & System Design',
      'Coding assessments under timed environments',
      'Technical interview drills (Data Structures & System Design)',
      'HR interview preparation & Corporate Behavior training',
      'Group Discussions (GD) & Presentation polish',
      'Active corporate job application submissions'
    ],
    tools: ['LeetCode / HackerRank datasets', 'Resume ATS scanners', 'Interview Prep Platforms'],
    outputs: [
      '1 Major Capstone Project',
      'Corporate-Ready Graduate Profile',
      'Multiple full-time placement interview sessions',
      'Technical presentations & interview feedback records'
    ],
    projects: ['Industrial-grade Enterprise System', 'Comprehensive Final Capstone Project'],
    placementConnection: 'Full-time placement execution. Accessing targeted placements, securing corporate interviews, and transitioning into full-time employment.'
  }
];

export default function Programs() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [activeYearTab, setActiveYearTab] = useState<number>(1);

  return (
    <div className="pt-24 pb-16 bg-brand-gray/30 min-h-screen">
      
      {/* 1. Cinematic Programs Hero Section */}
      <section className="relative pt-8 pb-16 bg-gradient-to-b from-brand-navy-dark via-brand-navy to-brand-navy-dark text-white overflow-hidden mb-16">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-brand-royal/25 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-brand-gold/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 text-left"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-royal/20 border border-brand-royal/40 text-brand-gold-light text-xs font-semibold uppercase tracking-wider mb-6">
                <Sparkles className="h-3.5 w-3.5 text-brand-gold" />
                <span>Industry-Standard Curriculum</span>
              </div>

              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-6">
                Tech Curriculum & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-royal-light via-blue-400 to-brand-gold">
                  Career Roadmaps
                </span>
              </h1>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
                Explore our 6 high-demand specialized learning paths and the flagship 4-Year Industry & Placement Readiness Roadmap engineered for student success.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-200">
                  <Code className="h-4 w-4 text-brand-gold" />
                  <span>6 Core Specializations</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-gray-200">
                  <Milestone className="h-4 w-4 text-brand-gold" />
                  <span>4-Year Placement Blueprint</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#specialized-paths"
                  className="px-7 py-3.5 rounded-full bg-gradient-to-r from-brand-royal to-blue-700 hover:from-blue-600 hover:to-brand-royal text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-brand-royal/30 transition-all duration-300 group"
                >
                  <span>Specialized Tracks</span>
                  <ArrowRight className="h-4 w-4 text-brand-gold group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#roadmap-dashboard"
                  className="px-7 py-3.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300"
                >
                  <span>4-Year Roadmap</span>
                  <Compass className="h-4 w-4 text-brand-gold" />
                </a>
              </div>
            </motion.div>

            {/* Right Hero Image Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="lg:col-span-6 relative"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-brand-gold/30 to-brand-royal rounded-3xl blur-xl opacity-40 animate-pulse-subtle" />

              <div className="relative rounded-3xl overflow-hidden border border-white/20 bg-brand-navy-dark shadow-2xl group">
                <img
                  src="/images/programs-hero.jpg"
                  alt="Scholars Bridge Curriculum and Learning Roadmap"
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/80 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-brand-navy-accent/90 border border-brand-gold/30 backdrop-blur-md flex items-center justify-between text-left">
                  <div>
                    <span className="text-[10px] font-bold text-brand-gold uppercase tracking-widest block">
                      End-to-End Progression
                    </span>
                    <h4 className="font-display font-bold text-sm text-white mt-0.5">
                      Curriculum Engineered for Top Placements
                    </h4>
                  </div>
                  <div className="p-2 rounded-xl bg-brand-gold/20 text-brand-gold">
                    <BookOpen className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. Specialized Programs Grid */}
      <section id="specialized-paths" className="max-w-7xl mx-auto px-6 mb-24">
        <div className="text-left mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-royal/10 border border-brand-royal/30 text-brand-royal text-xs font-semibold uppercase tracking-wider mb-2">
            <Code className="h-3.5 w-3.5" />
            <span>Targeted Industry Skills</span>
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-navy tracking-tight">
            Specialized Learning Paths
          </h2>
          <p className="text-brand-gray-textlight text-sm mt-1">
            Choose your specialization track with deep hands-on project experience, mentorship, and career placement preparation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programsData.map((prog) => {
            const Icon = prog.icon;
            const isHovered = hoveredCard === prog.id;

            return (
              <div
                key={prog.id}
                onMouseEnter={() => setHoveredCard(prog.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="relative bg-white rounded-3xl border border-brand-gray-dark/70 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between group"
              >
                {/* Card Image Banner */}
                <div className="relative h-48 w-full overflow-hidden bg-brand-navy-dark">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/95 via-brand-navy-dark/30 to-transparent" />
                  
                  {/* Floating icon badge and duration */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between z-10">
                    <div className="p-2.5 rounded-xl bg-brand-navy/90 border border-brand-gold/40 text-brand-gold shadow-md backdrop-blur-sm">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-bold text-white bg-brand-royal/80 border border-white/20 backdrop-blur-sm px-3 py-1 rounded-full shadow">
                      {prog.duration}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-display font-bold text-xl text-brand-navy mb-2 text-left group-hover:text-brand-royal transition-colors">
                      {prog.title}
                    </h3>
                    
                    <div className="relative overflow-hidden min-h-[85px] text-left">
                      <p className={`text-brand-gray-text text-sm leading-relaxed absolute inset-0 transition-opacity duration-300 ${
                        isHovered ? 'opacity-0 pointer-events-none' : 'opacity-100'
                      }`}>
                        {prog.shortDesc}
                      </p>
                      <p className={`text-brand-gray-textlight text-xs leading-relaxed absolute inset-0 transition-opacity duration-300 ${
                        isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
                      }`}>
                        {prog.longDesc}
                      </p>
                    </div>
                  </div>

                  {/* Technologies & Action */}
                  <div className="mt-5 pt-5 border-t border-brand-gray-dark flex flex-col gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {prog.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-semibold bg-brand-gray text-brand-navy border border-brand-gray-dark/60 px-2.5 py-0.5 rounded-md"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <a
                      href="#/contact"
                      className="flex items-center justify-between text-sm font-semibold text-brand-navy group-hover:text-brand-royal mt-1 transition-colors"
                    >
                      <span>Request Syllabus</span>
                      <ArrowRight className={`h-4 w-4 text-brand-gold transform transition-transform duration-300 ${
                        isHovered ? 'translate-x-1.5' : ''
                      }`} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. 4-Year Industry & Placement Readiness Roadmap Dashboard */}
      <section id="roadmap-dashboard" className="max-w-7xl mx-auto px-6 bg-white border border-brand-gray-dark rounded-3xl p-8 sm:p-12 shadow-md">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold-dark text-xs font-semibold uppercase tracking-wider mb-4">
            <Milestone className="h-3.5 w-3.5" />
            <span>Structured Path to Placement</span>
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-navy tracking-tight">
            4-Year Industry & Placement Readiness Roadmap
          </h2>
          <p className="text-brand-gray-textlight mt-2 text-sm">
            A comprehensive, year-by-year framework that bridges academic theory with practical employment outcomes.
          </p>
        </div>

        {/* Year Selector Tabs */}
        <div className="flex justify-center border-b border-brand-gray-dark mb-8 flex-wrap">
          {roadmapYears.map((item) => (
            <button
              key={item.year}
              onClick={() => setActiveYearTab(item.year)}
              className={`px-6 py-4 font-display font-bold text-sm tracking-wide border-b-2 transition-all duration-300 ${
                activeYearTab === item.year
                  ? 'border-brand-navy text-brand-navy bg-brand-gray/30'
                  : 'border-transparent text-brand-gray-textlight hover:text-brand-navy'
              }`}
            >
              YEAR {item.year}: {item.phase}
            </button>
          ))}
        </div>

        {/* Selected Year Panel Dashboard */}
        <AnimatePresence mode="wait">
          {roadmapYears
            .filter((item) => item.year === activeYearTab)
            .map((item) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left"
              >
                
                {/* Left Panel: Phase Focus (7 cols) */}
                <div className="lg:col-span-7 flex flex-col gap-6">
                  <div>
                    <span className="text-[10px] font-bold text-brand-gold-dark uppercase tracking-widest">
                      Year {item.year} Objective
                    </span>
                    <h3 className="font-display font-bold text-2xl text-brand-navy mt-1">
                      {item.tagline}
                    </h3>
                  </div>

                  {/* Focus Areas list */}
                  <div className="bg-brand-gray/40 border border-brand-gray-dark/50 rounded-2xl p-6">
                    <h4 className="font-display font-bold text-xs text-brand-navy uppercase tracking-widest mb-4 flex items-center gap-2">
                      <Code className="h-4 w-4 text-brand-royal" />
                      Core Focus Areas & Skills
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {item.focusAreas.map((f, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-brand-gray-text font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-royal mt-1.5 flex-shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tools covered */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                      Key Tools:
                    </span>
                    {item.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs font-semibold px-2.5 py-1 bg-brand-navy text-white rounded-md"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Placement Connection statement */}
                  <div className="p-4 bg-brand-gold/10 border-l-4 border-brand-gold rounded-r-xl">
                    <h4 className="font-display font-bold text-xs text-brand-gold-dark uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <ShieldCheck className="h-4 w-4" /> Placement Connection
                    </h4>
                    <p className="text-xs text-brand-navy font-semibold leading-relaxed">
                      {item.placementConnection}
                    </p>
                  </div>

                </div>

                {/* Right Panel: Projects & Expected Outputs (5 cols) */}
                <div className="lg:col-span-5 flex flex-col gap-6">
                  
                  {/* Expected Outputs */}
                  <div className="bg-brand-gray/40 border border-brand-gray-dark/50 rounded-2xl p-6 flex flex-col justify-between h-full">
                    <div>
                      <h4 className="font-display font-bold text-xs text-brand-navy uppercase tracking-widest mb-4 flex items-center gap-2">
                        <CheckSquare className="h-4 w-4 text-brand-gold" />
                        Expected Milestones & Outputs
                      </h4>
                      <ul className="flex flex-col gap-3">
                        {item.outputs.map((out, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-brand-gray-text font-semibold">
                            <CheckSquare className="h-4.5 w-4.5 text-brand-gold flex-shrink-0 mt-0.5" />
                            <span>{out}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Example Projects */}
                    <div className="mt-6 pt-6 border-t border-brand-gray-dark/80">
                      <span className="text-[10px] font-bold text-brand-gray-textlight uppercase tracking-widest block mb-2">
                        Expected Mini & Team Projects:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {item.projects.map((proj) => (
                          <span
                            key={proj}
                            className="text-xs font-semibold px-2.5 py-1 bg-white border border-brand-gray-dark text-brand-navy rounded-full shadow-sm"
                          >
                            {proj}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>

                {/* Student Transformation Box (Full width inside panel) */}
                <div className="lg:col-span-12 mt-4 p-5 rounded-2xl bg-brand-navy text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow">
                  <div className="text-center sm:text-left">
                    <span className="text-[9px] font-bold text-brand-gold uppercase tracking-wider block">
                      Student Transformation Stage {item.year}
                    </span>
                    <span className="text-sm font-semibold italic text-gray-300 block mt-1">
                      "{item.transformationFrom}"
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-brand-gold">➔</div>
                  <div className="text-center sm:text-right">
                    <span className="text-[9px] font-bold text-brand-gold uppercase tracking-wider block">
                      Ready For
                    </span>
                    <span className="text-sm font-bold text-white block mt-1 flex items-center gap-1.5 justify-center sm:justify-end">
                      <Sparkles className="h-4 w-4 text-brand-gold animate-pulse" />
                      {item.transformationTo}
                    </span>
                  </div>
                </div>

              </motion.div>
            ))}
        </AnimatePresence>

      </section>

      {/* 4. Placement Readiness Matrix */}
      <section className="max-w-7xl mx-auto px-6 mt-20 text-left">
        <h3 className="font-display font-bold text-2xl text-brand-navy mb-6 text-center">
          Placement Readiness Matrix
        </h3>
        <div className="overflow-x-auto bg-white border border-brand-gray-dark rounded-3xl shadow-sm">
          <table className="w-full text-sm text-left">
            <thead className="text-xs font-bold text-white uppercase bg-brand-navy tracking-wider">
              <tr>
                <th className="px-6 py-4">Year</th>
                <th className="px-6 py-4">Technical Skill Level</th>
                <th className="px-6 py-4">Project Scope</th>
                <th className="px-6 py-4">Professional Skills</th>
                <th className="px-6 py-4">Placement Milestone</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-gray-dark font-medium text-brand-gray-text">
              <tr className="hover:bg-brand-gray/20">
                <td className="px-6 py-4 font-bold text-brand-navy">Year 1</td>
                <td className="px-6 py-4">Foundation (Syntax, Logic)</td>
                <td className="px-6 py-4">Mini Projects (Calculator)</td>
                <td className="px-6 py-4">Communication Skills</td>
                <td className="px-6 py-4">Career Awareness</td>
              </tr>
              <tr className="hover:bg-brand-gray/20">
                <td className="px-6 py-4 font-bold text-brand-navy">Year 2</td>
                <td className="px-6 py-4">Core Skills (OOP, Database)</td>
                <td className="px-6 py-4">Team Projects (APIs, CRUD)</td>
                <td className="px-6 py-4">Presentation Delivery</td>
                <td className="px-6 py-4">Early Aptitude Vetting</td>
              </tr>
              <tr className="hover:bg-brand-gray/20">
                <td className="px-6 py-4 font-bold text-brand-navy">Year 3</td>
                <td className="px-6 py-4">Specialization (Stack, Cloud)</td>
                <td className="px-6 py-4">Real Projects (Capstones)</td>
                <td className="px-6 py-4">Internship Preparation</td>
                <td className="px-6 py-4">Interview Readiness & Internships</td>
              </tr>
              <tr className="hover:bg-brand-gray/20">
                <td className="px-6 py-4 font-bold text-brand-navy">Year 4</td>
                <td className="px-6 py-4">Advanced Skills (System Design)</td>
                <td className="px-6 py-4">Capstone Deployments</td>
                <td className="px-6 py-4">Corporate Adaptation</td>
                <td className="px-6 py-4">Placement Execution</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        {/* Disclaimer quote */}
        <div className="mt-8 text-center bg-brand-navy/5 p-4 rounded-xl border border-brand-navy/10 max-w-2xl mx-auto">
          <p className="text-xs text-brand-navy font-semibold">
            "We don't train students only to attend interviews. We develop students who are ready for opportunities."
          </p>
        </div>
      </section>

    </div>
  );
}
