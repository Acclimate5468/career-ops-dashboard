export type ModuleId =
  | "truth-lock"
  | "role-lanes"
  | "job-analyzer"
  | "bullet-bank"
  | "application-tracker";

export type ModuleDef = {
  id: ModuleId;
  label: string;
  shortLabel: string;
  summary: string;
  description: string;
};

export const MODULES: ModuleDef[] = [
  {
    id: "truth-lock",
    label: "Truth Lock Profile",
    shortLabel: "Truth Lock",
    summary:
      "The single source of truth about your background. Every resume bullet and job-match claim must be supported by a fact stored here.",
    description:
      "Capture verified roles, achievements, skills, and credentials. The Truth Lock blocks resume claims that are not backed by a stored fact.",
  },
  {
    id: "role-lanes",
    label: "Target Role Lanes",
    shortLabel: "Role Lanes",
    summary:
      "The handful of role types you are actively targeting. Each lane shapes how postings are evaluated and which bullets are surfaced.",
    description:
      "Define titles, seniority, must-haves, and disqualifiers per lane. Used downstream by the Analyzer and Tracker.",
  },
  {
    id: "job-analyzer",
    label: "Job Posting Analyzer",
    shortLabel: "Analyzer",
    summary:
      "Paste a posting and see how it matches your Truth Lock and Role Lanes — without inventing experience you don't have.",
    description:
      "Extract requirements, surface supporting Truth Lock facts, and flag gaps. Never generates unsupported claims.",
  },
  {
    id: "bullet-bank",
    label: "Resume Bullet Bank",
    shortLabel: "Bullet Bank",
    summary:
      "Reusable, Truth-Lock-backed resume bullets organized by skill and role lane. Edits stay aligned with verified facts.",
    description:
      "Bullets are linked to TruthFacts. Bullets that lose their backing fact are flagged as blocked claims.",
  },
  {
    id: "application-tracker",
    label: "Application Tracker",
    shortLabel: "Tracker",
    summary:
      "A private log of applications you have submitted manually. Nothing is auto-applied or sent on your behalf.",
    description:
      "Track status, notes, and follow-ups. Submission always happens by you, in the real job site.",
  },
];
