import {
  ProjectDossier,
  SkillCategory,
  JourneyMilestone,
  EducationItem,
  CertificationItem,
} from '../types';

export const PERSONAL_INFO = {
  name: 'Ardra Sobharaj',

  status:  'OPEN TO LEARNING & PROJECTS',

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
      'Turning what I learn into practical projects, including embedded systems, web development, graphics programming, and AI-based project ideas.',
    tag: '■ HANDS-ON PRACTICE',
  },
  {
    code: '01.3 // GROWTH',
    number: '03',
    title: 'GROW',
    text:
      'Exploring data structures and algorithms and expanding my knowledge of databases, artificial intelligence, and software development.',
    tag: '■ ACTIVE EXPLORATION',
  },
];

export const FEATURED_DOSSIER: ProjectDossier = {
  id: 'anemia-detector',

  dossierNumber: 'DOSSIER 01 // AI PROJECT',

  badge: 'AI-POWERED SCREENING PROJECT',

  category: 'AI-Powered Healthcare Project',

  year: '—',

  title: 'Anemia Detector',

  tags: [
    'AI / ML',
    'Image Analysis',
    'Healthcare',
  ],

  summary:
    'An AI-powered screening platform designed to assess potential anemia risk using visual indicators such as nail and eye pallor. The system is intended as an initial screening aid rather than a medical diagnosis. When potential risk is identified, it recommends consulting a doctor and can provide supportive health reminders such as hydration and other preventive guidance.',

  specs: [
    {
      label: 'Project Type',
      value: 'AI-Powered Screening Project',
    },
    {
      label: 'Input',
      value: 'Nail & Eye Pallor Images',
    },
    {
      label: 'Output',
      value: 'Potential Risk Assessment',
    },
    {
      label: 'Safety',
      value: 'Doctor Consultation Recommended',
    },
  ],

  actionLabel: 'PROJECT',

  actionUrl: '',

  statusLabel: 'AI PROJECT',

  schematicType: 'biometric',
};

export const SECONDARY_DOSSIERS: ProjectDossier[] = [
  {
    id: 'smart-door-lock',

    dossierNumber: 'DOSSIER 02 // HARDWARE PROJECT',

    badge: 'ARDUINO PROTOTYPE',

    category: 'Embedded Hardware',

    year: '—',

    title: 'Smart Door Lock System',

    tags: [
      'Arduino Uno',
      '4×4 Keypad',
      'Servo Motor',
      'LCD',
      'Buzzer',
    ],

    summary:
      'An Arduino-based smart door lock prototype using an Arduino Uno, 4×4 matrix keypad, servo motor, 16×2 LCD with I2C module, and a 5V active buzzer. The system uses password-based authentication to control the locking mechanism and provides visual and audio feedback for successful and unsuccessful attempts.',

    specs: [
      {
        label: 'Project Type',
        value: 'Hardware Prototype',
      },
      {
        label: 'Controller',
        value: 'Arduino Uno',
      },
      {
        label: 'Authentication',
        value: 'Password Based',
      },
    ],

    actionLabel: 'HARDWARE PROTOTYPE',

    actionUrl: '',

    statusLabel: 'PROTOTYPE',

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
      'Web Development',
      'Portfolio',
      'GitHub',
    ],

    summary:
      'A personal portfolio website developed to showcase my skills, projects, achievements, and technical experience. It provides a professional platform to present my work and learning journey.',

    actionLabel: 'VIEW PROJECT →',

    actionUrl:
      'https://github.com/Ardra-Sobharaj/mywebsite-code',

    statusLabel: 'LIVE PROJECT',

    schematicType: 'code',
  },

  {
    id: '2d-graphics',

    dossierNumber: 'DOSSIER 04 // C PROJECT',

    badge: 'C PROGRAMMING',

    category: '2D Graphics',

    year: '—',

    title: '2D ASCII Graphics Editor',

    tags: [
      'C',
      'ASCII Graphics',
      'Data Structures',
    ],

    summary:
      'A C-based 2D ASCII graphics project that allows users to work with geometric shapes such as lines, rectangles, circles, and triangles on a text-based canvas.',

    actionLabel: 'VIEW PROJECT →',

    actionUrl:
      'https://github.com/Ardra-Sobharaj/2d-graphics-shapes',

    statusLabel: 'GITHUB PROJECT',

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
      'Applying what I learn through hardware, graphics, web development, and AI-based projects.',
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
