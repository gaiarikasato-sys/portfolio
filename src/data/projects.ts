export interface Project {
  period: string
  duration: string
  sector: string
  title: string
  role: string
  summary: string
  highlights: string[]
  metrics: { label: string; value: string }[]
  stack: string[]
}

// The two most recent engagements — pulled forward as the featured case studies.
export const featuredProjects: Project[] = [
  {
    period: '2025 — 2026',
    duration: '11 months, ongoing',
    sector: 'Rental services · SaaS',
    title: 'Rental Order Management — Platform Replacement',
    role: 'Frontend lead / backend contributor',
    summary:
      'A legacy inventory system for a device-rental business — tablets, cameras, phones — was rebuilt end to end. I owned the frontend architecture and led the design and build of the locker-management screens staff use to check devices in and out, while also contributing to backend API design and the team\'s acceptance-criteria documentation.',
    highlights: [
      'Designed and implemented the locker-management screens from scratch, replacing an ageing internal tool',
      'Contributed to backend API design alongside the platform rebuild',
      'Wrote acceptance-criteria and spec documentation in Confluence to keep the wider team aligned',
      'Worked across a modern stack introduced specifically to replace legacy tooling',
    ],
    metrics: [
      { label: 'role', value: 'frontend + API' },
      { label: 'status', value: 'in progress' },
    ],
    stack: [
      'TypeScript',
      'React',
      'Next.js',
      'Python',
      'FastAPI',
      'Material UI',
      'Recoil',
      'SWR',
      'Axios',
      'OpenSearch',
      'MySQL',
      'Docker',
    ],
  },
  {
    period: '2024 — 2025',
    duration: '16 months',
    sector: 'Government · construction permitting',
    title: 'Confirmation-Application CDE — Markup & Annotation Tooling',
    role: 'Frontend engineer',
    summary:
      'Government building-permit review runs on marked-up architectural drawings. I built the browser-based tool reviewers use to open a drawing PDF or image and mark it up by hand — freehand lines, shapes and notes — the same way they would on paper, without leaving the browser.',
    highlights: [
      'Built PDF and image viewers with pdf.js and jsPDF, handling large architectural drawings smoothly',
      'Implemented freehand and shape-based markup on top of the viewer using Konva',
      'Designed the UI and canvas/draw-area control logic in React and Next.js',
      'Built the save/load pipeline connecting annotation data to the backend',
      'Kept the codebase type-safe end to end with TypeScript',
    ],
    metrics: [
      { label: 'role', value: 'frontend' },
      { label: 'duration', value: '16 mo' },
    ],
    stack: [
      'TypeScript',
      'React',
      'Next.js',
      'NestJS',
      'Material UI',
      'pdf.js',
      'jsPDF',
      'Konva',
      'Prisma',
      'SQL Server',
    ],
  },
]
