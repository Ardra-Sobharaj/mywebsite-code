export interface ProjectDossier {
  id: string;
  dossierNumber: string;
  category: string;
  badge?: string;
  year: string;
  title: string;
  tags: string[];
  summary: string;
  specs?: { label: string; value: string }[];
  actionLabel: string;
  actionUrl: string;
  statusLabel?: string;
  schematicType?: 'biometric' | 'hardware' | 'code';
}

export interface SkillCategory {
  id: string;
  groupNumber: string;
  title: string;
  statusTag?: string;
  items: { name: string; detail: string }[];
  footerNote: string;
}

export interface JourneyMilestone {
  step: string;
  status: 'PASSED' | 'IN FOCUS' | 'ACTIVE' | 'TRAJECTORY' | 'OBJECTIVE';
  title: string;
  description: string;
}

export interface EducationItem {
  period: string;
  statusBadge: string;
  degree: string;
  institution: string;
  description: string;
}

export interface CertificationItem {
  issuerOrg: string;
  verified: boolean;
  title: string;
  issuedBy: string;
  description: string;
  skills: string[];
}
