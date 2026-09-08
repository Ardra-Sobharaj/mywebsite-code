import { ProjectDossier, SkillCategory, JourneyMilestone, EducationItem, CertificationItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Ardra Sobharaj',
  status: 'AVAILABLE FOR EXPLORATION & PROJECTS',
  affiliation: 'B.TECH AI & DATA SCIENCE · REVA UNIVERSITY',
  school: 'School of C&IT, REVA Univ.',
  currentFocus: 'Algorithms · ML Screening Concept',
  location: 'Bengaluru, India · 13.1147° N, 77.6346° E',
  heroLead: 'Building my foundation in',
  heroEmphasis: 'code, AI',
  heroTrail: '& data.',
  heroBio:
    "I'm Ardra Sobharaj — an Artificial Intelligence & Data Science student exploring software development, machine learning, and computational data systems through deliberate study and hands-on construction.",
  aboutParagraph:
    'I am currently in my 3rd semester studying Artificial Intelligence & Data Science at REVA University. My daily work revolves around stripping complex algorithmic concepts down to their core mechanics, implementing them from first principles, and assembling applied systems across embedded hardware, relational databases, and medical screening algorithms.',
  email: 'ardrasobharaj@gmail.com',
  github: 'https://github.com/Ardra-Sobharaj',
  githubHandle: 'github.com/Ardra-Sobharaj',
  linkedin: 'https://linkedin.com/in/ardra-sobharaj',
  linkedinHandle: 'linkedin.com/in/ardra-sobharaj',
  timezone: 'UTC+05:30 (IST) · BENGALURU, INDIA',
};

export const ABOUT_PILLARS = [
  {
    code: '01.1 // CORE',
    number: '01',
    title: 'LEARN',
    text: 'Strengthen fundamentals. Cultivating profound clarity across discrete mathematics, memory models in C, and Pythonic data structures before premature abstraction.',
    tag: '■ FIRST PRINCIPLES',
  },
  {
    code: '01.2 // METHOD',
    number: '02',
    title: 'BUILD',
    text: 'Turn concepts into practical projects. Theory solidifies when it is forced to interact with hardware constraints, noisy camera inputs, and relational foreign keys.',
    tag: '■ SYNTHESIS',
  },
  {
    code: '01.3 // TRAJECTORY',
    number: '03',
    title: 'GROW',
    text: 'Keep exploring technology. Navigating the evolving paradigm shift in deep neural networks, multimodal learning architectures, and high-performance computation.',
    tag: '■ CONTINUOUS EVOLUTION',
  },
];

export const FEATURED_DOSSIER: ProjectDossier = {
  id: 'anemia-detector',
  dossierNumber: 'DOSSIER 01 // BIOMETRIC AI',
  badge: 'CONCEPT & PROTOTYPE EXPLORATION · 2024',
  category: 'Biometric AI & Computer Vision',
  year: '2024',
  title: 'Anemia Detector',
  tags: ['AI/ML', 'Image Analysis', 'Healthcare', 'Computer Vision'],
  summary:
    'An AI-based application concept exploring initial non-invasive anemia screening through indicators such as sclera color chromaticity and conjunctival / nail bed pallor. The architecture isolates micro-vascular color signatures to estimate hemoglobin deficiency probabilities, acting as an early indicator that prompts formal laboratory evaluation.',
  specs: [
    { label: 'Primary Target', value: 'Erythrocyte Hemoglobin Index' },
    { label: 'Color Space Analysis', value: 'CIE L*a*b* & HSV Extraction' },
    { label: 'Intended Outcome', value: 'Referral Triaging Pipeline' },
  ],
  actionLabel: 'VIEW PROJECT REPOSITORY →',
  actionUrl: 'https://github.com/Ardra-Sobharaj/anemia-detector-concept',
  statusLabel: 'ACTIVE PROTO',
  schematicType: 'biometric',
};

export const SECONDARY_DOSSIERS: ProjectDossier[] = [
  {
    id: 'smart-door-lock',
    dossierNumber: 'DOSSIER 02 // EMBEDDED HARDWARE',
    badge: 'ARDUINO C++',
    category: 'Embedded Hardware',
    year: '2023',
    title: 'Smart Door Lock System',
    tags: ['Arduino', 'Embedded Systems', 'Hardware Interfacing', 'Security'],
    summary:
      'An authentication-based physical security device engineered using an Arduino micro-controller, 4x4 matrix keypad, alphanumeric 16x2 LCD module, buzzer audio feedback, and high-torque SG90 servo motor for deadbolt engagement. Programmed with debounce mechanics and safety lockouts.',
    actionLabel: 'VIEW PROJECT →',
    actionUrl: 'https://github.com/Ardra-Sobharaj/smart-door-lock-arduino',
    statusLabel: 'v1.2 IMPLEMENTED',
    schematicType: 'hardware',
  },
  {
    id: 'github-portfolio',
    dossierNumber: 'DOSSIER 03 // SOFTWARE ARTIFACT',
    badge: 'WEB SYSTEMS',
    category: 'Web Systems',
    year: '2024',
    title: 'GitHub Portfolio & Index',
    tags: ['HTML5', 'CSS Architecture', 'JavaScript', 'GitHub Pages'],
    summary:
      'A minimalist personal portfolio platform created to curate engineering artifacts, academic trajectories, and computational research notes. Developed with uncompromising typographic discipline, rapid zero-runtime load speeds, and strict semantic markup standards.',
    actionLabel: 'VIEW REPOSITORY →',
    actionUrl: 'https://github.com/Ardra-Sobharaj/portfolio',
    statusLabel: 'GITHUB HOSTED',
    schematicType: 'code',
  },
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    id: 'foundations',
    groupNumber: 'FOUNDATIONS ■',
    title: 'Programming',
    items: [
      { name: 'C Language', detail: 'Low-level / Memory' },
      { name: 'Python', detail: 'Scripting / Data' },
    ],
    footerNote: 'ACTIVE TOOLCHAIN',
  },
  {
    id: 'interfaces',
    groupNumber: 'INTERFACES ■',
    title: 'Web Platform',
    items: [
      { name: 'HTML5 & CSS3', detail: 'Semantic / Layout' },
      { name: 'JavaScript', detail: 'ES6+ Standard' },
      { name: 'Node.js', detail: 'Runtime Services' },
    ],
    footerNote: 'WEB PRODUCTION',
  },
  {
    id: 'persistence',
    groupNumber: 'PERSISTENCE ■',
    title: 'Data Storage',
    items: [
      { name: 'MySQL', detail: 'Relational Schema' },
      { name: 'SQL Queries', detail: 'Joins & Indexing' },
      { name: 'Data Normalization', detail: '1NF to 3NF' },
    ],
    footerNote: 'DATA ARCHITECTURE',
  },
  {
    id: 'horizon',
    groupNumber: 'HORIZON',
    statusTag: 'ACTIVE LEARNING',
    title: 'Exploring Areas',
    items: [
      { name: 'DSA', detail: 'Trees, Graphs' },
      { name: 'AI / ML Concepts', detail: 'Supervised, CV' },
      { name: 'Data Science', detail: 'Pandas, NumPy' },
    ],
    footerNote: 'CURRICULAR DEEPENING',
  },
];

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    step: '01',
    status: 'PASSED',
    title: 'C & Python',
    description: 'Syntax, flow control, procedural logic, and memory mechanics.',
  },
  {
    step: '02',
    status: 'IN FOCUS',
    title: 'DSA',
    description: 'Time/space complexity, linear structures, recursion, dynamic sorting.',
  },
  {
    step: '03',
    status: 'PASSED',
    title: 'MySQL',
    description: 'Relational databases, indexing, entity-relationship models, constraints.',
  },
  {
    step: '04',
    status: 'ACTIVE',
    title: 'Practical Projects',
    description: 'Arduino hardware controllers, web frontends, and applied prototypes.',
  },
  {
    step: '05',
    status: 'TRAJECTORY',
    title: 'AI / ML & Data Science',
    description: 'Statistical inference, image processing pipelines, deep learning foundations.',
  },
  {
    step: '06',
    status: 'OBJECTIVE',
    title: 'Software Dev',
    description: 'Production system design, end-to-end architectures, distributed workflows.',
  },
];

export const EDUCATION_RECORDS: EducationItem[] = [
  {
    period: '2023 — PRESENT',
    statusBadge: 'CURRENTLY PURSUING',
    degree: 'B.Tech in Artificial Intelligence & Data Science',
    institution: 'REVA University · Bengaluru',
    description:
      'Rigorous coursework encompassing Data Structures, Relational Database Management, Discrete Mathematics, Object-Oriented Systems, and Foundations of Machine Learning.',
  },
  {
    period: 'COMPLETED 2023',
    statusBadge: 'SCORE: 92.4%',
    degree: 'Senior Secondary Education (Class XII)',
    institution: 'Vyasa Vidhya Peethom',
    description:
      'Major coursework in Physics, Chemistry, Mathematics, and Computer Science with high academic distinction.',
  },
  {
    period: 'COMPLETED 2021',
    statusBadge: 'SCORE: 86.0%',
    degree: 'Secondary High School (Class X)',
    institution: 'The Elegant Public School',
    description: 'Foundational science, mathematics, and analytical curricula.',
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    issuerOrg: 'IBM COGNITIVE CLASS',
    verified: true,
    title: 'Python for Data Science',
    issuedBy: 'Issued by IBM',
    description:
      'Comprehensive training covering Python programming fundamentals, data structures, data analysis workflows, Pandas and NumPy manipulation, and computational notebook management.',
    skills: ['PYTHON', 'DATA ANALYSIS'],
  },
  {
    issuerOrg: 'WADHWANI FOUNDATION',
    verified: true,
    title: 'Wadhwani Foundation Course Certification',
    issuedBy: 'Issued by Wadhwani Foundation',
    description:
      'Professional skill development covering critical problem-solving paradigms, technical communication, workplace synthesis, and structured collaboration in tech-driven environments.',
    skills: ['PROBLEM SOLVING', 'COMM'],
  },
];
