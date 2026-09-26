import { ProjectDossier, SkillCategory, JourneyMilestone, EducationItem, CertificationItem } from '../types';
import {
  ProjectDossier,
  SkillCategory,
  JourneyMilestone,
  EducationItem,
  CertificationItem,
} from '../types';

export const PERSONAL_INFO = {
  name: 'Ardra Sobharaj',

  status: 'AVAILABLE FOR EXPLORATION & PROJECTS',

  affiliation: 'B.TECH AI & DATA SCIENCE · REVA UNIVERSITY',

  school: 'REVA University',

  currentFocus: 'C · Python · DSA · MySQL',

  location: 'Bengaluru, India',

  heroLead: 'Building my foundation in',

  heroEmphasis: 'code, AI',

  heroTrail: '& data.',

  heroBio:
    "I'm Ardra Sobharaj, a B.Tech Artificial Intelligence and Data Science student at REVA University. I am interested in programming, AI, data science, and building practical projects.",

  aboutParagraph:
    'I am currently pursuing a B.Tech in Artificial Intelligence and Data Science at REVA University. I enjoy learning programming, exploring data structures and algorithms, and building practical projects. My current skills include C and Python, while I am exploring DSA and MySQL.',

  email: 'ardrasobharaj@gmail.com',

  github: 'https://github.com/Ardra-Sobharaj',

  githubHandle: 'github.com/Ardra-Sobharaj',

  linkedin:
    'https://www.linkedin.com/in/ardra-sobharaj-a21217335/',

  linkedinHandle:
    'linkedin.com/in/ardra-sobharaj-a21217335',

  timezone: 'UTC+05:30 (IST) · BENGALURU, INDIA',
};


export const ABOUT_PILLARS = [
  {
    code: '01.1 // LEARNING',
    number: '01',
    title: 'LEARN',
    text:
      'Building a strong foundation in programming with C and Python while continuously exploring new concepts in technology.',
    tag: '■ CONTINUOUS LEARNING',
  },

  {
    code: '01.2 // PRACTICE',
    number: '02',
    title: 'BUILD',
    text:
      'Turning what I learn into practical projects, including embedded systems, web development, and application concepts.',
    tag: '■ HANDS-ON PRACTICE',
  },

  {
    code: '01.3 // GROWTH',
    number: '03',
    title: 'GROW',
    text:
      'Exploring data structures and algorithms and expanding my knowledge of databases and artificial intelligence.',
    tag: '■ ACTIVE EXPLORATION',
  },
];


export const FEATURED_DOSSIER: ProjectDossier = {
  id: 'anemia-detector',

  dossierNumber: 'DOSSIER 01 // AI APPLICATION',

  badge: 'AI APPLICATION CONCEPT',

  category: 'AI-Based Application',

  year: '—',

  title: 'Anemia Detector App',

  tags: [
    'AI',
    'Image Analysis',
    'Healthcare',
    'Application Concept',
  ],

  summary:
    'An AI-based application concept designed to help detect possible anemia by analyzing indicators such as sclera color and nail pallor. The application aims to provide an initial screening and connect users with doctors or healthcare facilities for further evaluation.',

  specs: [
    {
      label: 'Purpose',
      value: 'Initial Screening Concept',
    },
    {
      label: 'Indicators',
      value: 'Sclera Color & Nail Pallor',
    },
    {
      label: 'Intended Outcome',
      value: 'Further Medical Evaluation',
    },
  ],

  actionLabel: 'VIEW PROJECT REPOSITORY →',

  actionUrl:
    'https://github.com/Ardra-Sobharaj/anemia-detector-concept',

  statusLabel: 'PROJECT CONCEPT',

  schematicType: 'biometric',
};


export const SECONDARY_DOSSIERS: ProjectDossier[] = [
  {
    id: 'smart-door-lock',

    dossierNumber: 'DOSSIER 02 // EMBEDDED SYSTEM',

    badge: 'ARDUINO',

    category: 'Embedded System',

    year: '—',

    title: 'Smart Door Lock System',

    tags: [
      'Arduino',
      'Keypad',
      'LCD',
      'Buzzer',
      'Servo Motor',
    ],

    summary:
      'A smart security system developed using Arduino, keypad, LCD, buzzer, and a servo motor for authentication-based access. The system allows the door to be unlocked only when the correct password is entered, improving security and convenience.',

    actionLabel: 'VIEW PROJECT →',

    actionUrl:
      'https://github.com/Ardra-Sobharaj/smart-door-lock-arduino',

    statusLabel: 'IMPLEMENTED PROJECT',

    schematicType: 'hardware',
  },

  {
    id: 'github-portfolio',

    dossierNumber: 'DOSSIER 03 // WEB PROJECT',

    badge: 'WEB DEVELOPMENT',

    category: 'Personal Portfolio',

    year: '—',

    title: 'GitHub Portfolio',

    tags: [
      'Portfolio',
      'Web Development',
      'GitHub',
    ],

    summary:
      'A personal portfolio website developed to showcase my skills, projects, achievements, and technical experience. It demonstrates my knowledge of web development and provides a professional platform to present my work.',

    actionLabel: 'VIEW PROJECT →',

    actionUrl:
      'https://github.com/Ardra-Sobharaj/portfolio',

    statusLabel: 'PORTFOLIO PROJECT',

    schematicType: 'code',
  },
];


export const SKILLS_DATA: SkillCategory[] = [
  {
    id: 'programming',

    groupNumber: 'FOUNDATIONS ■',

    title: 'Programming',

    items: [
      {
        name: 'C',
        detail: 'Programming Language',
      },

      {
        name: 'Python',
        detail: 'Programming Language',
      },
    ],

    footerNote: 'CURRENT SKILLS',
  },

  {
    id: 'exploring',

    groupNumber: 'EXPLORING ■',

    title: 'Currently Exploring',

    statusTag: 'ACTIVE LEARNING',

    items: [
      {
        name: 'DSA',
        detail: 'Data Structures & Algorithms',
      },

      {
        name: 'MySQL',
        detail: 'Database Management',
      },
    ],

    footerNote: 'ACTIVE LEARNING',
  },
];


export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    step: '01',

    status: 'ACTIVE',

    title: 'C & Python',

    description:
      'Building programming knowledge using C and Python.',
  },

  {
    step: '02',

    status: 'IN FOCUS',

    title: 'DSA',

    description:
      'Currently exploring data structures and algorithms.',
  },

  {
    step: '03',

    status: 'IN FOCUS',

    title: 'MySQL',

    description:
      'Currently exploring MySQL and database concepts.',
  },

  {
    step: '04',

    status: 'ACTIVE',

    title: 'Practical Projects',

    description:
      'Applying what I learn through projects such as the Smart Door Lock System and Anemia Detector App.',
  },

  {
    step: '05',

    status: 'TRAJECTORY',

    title: 'AI & Data Science',

    description:
      'Continuing my B.Tech journey in Artificial Intelligence and Data Science.',
  },

  {
    step: '06',

    status: 'OBJECTIVE',

    title: 'Software Development',

    description:
      'Continuing to build programming knowledge and practical technical experience.',
  },
];


export const EDUCATION_RECORDS: EducationItem[] = [
  {
    period: 'PRESENT',

    statusBadge: 'CURRENTLY PURSUING',

    degree:
      'B.Tech in Artificial Intelligence and Data Science',

    institution:
      'REVA University',

    description:
      'Currently pursuing a degree in Artificial Intelligence and Data Science.',
  },

  {
    period: 'COMPLETED',

    statusBadge: 'SCORE: 92.4%',

    degree:
      'Senior Secondary Education',

    institution:
      'Vyasa Vidhya Peethom',

    description:
      'Senior Secondary education completed with a score of 92.4%.',
  },

  {
    period: 'COMPLETED',

    statusBadge: 'SCORE: 86%',

    degree:
      'High School',

    institution:
      'The Elegant Public School',

    description:
      'High School education completed with a score of 86%.',
  },
];


export const CERTIFICATIONS: CertificationItem[] = [
  {
    issuerOrg: 'IBM',

    verified: true,

    title: 'Python for Data Science',

    issuedBy: 'IBM Certification',

    description:
      'Certification in Python for Data Science.',

    skills: [
      'PYTHON',
      'DATA SCIENCE',
    ],
  },

  {
    issuerOrg: 'WADHWANI FOUNDATION',

    verified: true,

    title: 'Wadhwani Foundation Course',

    issuedBy: 'Wadhwani Foundation',

    description:
      'Completed a course from the Wadhwani Foundation.',

    skills: [
      'PROFESSIONAL SKILLS',
    ],
  },
];
