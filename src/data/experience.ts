export interface TimelineEntry {
  period: string
  title: string
  description: string
  featured?: boolean
}

// Reverse chronological. The two most recent roles are covered in full
// above as case studies, so they appear here as short pointers back up.
export const timeline: TimelineEntry[] = [
  {
    period: 'Oct 2025 — present',
    title: 'Rental order management platform replacement',
    description: 'Frontend lead and backend contributor. Full case study above.',
    featured: true,
  },
  {
    period: 'Jun 2024 — Sep 2025',
    title: 'Confirmation-application CDE, drawing markup tooling',
    description: 'Built the PDF and image annotation tools. Full case study above.',
    featured: true,
  },
  {
    period: 'Jan 2024 — Mar 2024',
    title: 'Car-share platform modernization',
    description:
      'Triaged production bugs originating from an offshore build and led a multi-brand rebrand across copy, assets and security fixes.',
  },
  {
    period: 'Oct 2023 — Dec 2023',
    title: 'Sales-tool modernization',
    description:
      'Rebuilt a legacy intranet sales tool for stronger security, working in VB.NET and Excel VBA.',
  },
  {
    period: 'May 2023 — Sep 2023',
    title: 'Plant-industry package software, web migration',
    description:
      'Reverse-engineered an existing desktop package and re-implemented its behaviour as a browser app with JSF and JavaScript.',
  },
  {
    period: 'May 2021 — Apr 2023',
    title: 'ERP customization for a core business system',
    description:
      'Backend feature development, database and interface design, and workflow automation on ServiceNow.',
  },
  {
    period: 'Oct 2020 — Apr 2021',
    title: 'Flood-risk early-warning system, government',
    description:
      'Built map-based situational-awareness screens and APIs for disaster response, combining OpenLayers with Vue.js.',
  },
  {
    period: 'Apr 2020 — Sep 2020',
    title: 'Banking mobile app',
    description: 'Management-screen and WebAPI development for a bank\u2019s smartphone app.',
  },
  {
    period: 'Sep 2019 — Mar 2020',
    title: 'Core government system, HTML5 migration',
    description:
      'Modernized legacy screens to HTML5 and exposed servlet logic as WebAPIs for a common government platform.',
  },
  {
    period: 'Apr 2017 — Aug 2019',
    title: 'HR and payroll system, government',
    description:
      'Front-end library development and WebAPI implementation across a large government payroll platform.',
  },
  {
    period: 'Apr 2015 — Mar 2017',
    title: 'Notification-system overhaul, government',
    description: 'Screen development and PDF-output generation for a government command subsystem.',
  },
  {
    period: 'Apr 2013 — Mar 2015',
    title: 'Cyberattack simulation system, government',
    description: 'Early-career screen-control development \u2014 where it all started.',
  },
]
