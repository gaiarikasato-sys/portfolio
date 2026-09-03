import type { Dict } from './types'
import { projectStacks, skillItems } from './shared'

export const en: Dict = {
  metaTitle: 'Rika Sato — Frontend Engineer',
  metaDescription:
    'Rika Sato — Frontend-focused software engineer. 13 years building interfaces for government, enterprise and consumer web systems.',
  siteName: 'Rika Sato',
  langGroupLabel: 'Language',
  nav: {
    work: 'Work',
    experience: 'Experience',
    skills: 'Skills',
    contact: 'Contact',
  },
  hero: {
    eyebrowRole: 'Frontend-focused software engineer',
    eyebrowLocation: 'Tokyo',
    heading: '13 years of building frontend applications for complex systems.',
    lede: "I build frontend applications for complex systems — from admin tools and PDF/canvas-based editors to map interfaces — primarily for government and enterprise projects. My core stack is React, TypeScript and Next.js, and in recent years I've also expanded into backend development and API design.",
    stats: [
      { value: '13 yrs', label: 'professional experience' },
      { value: '12', label: 'projects' },
      { value: 'EN / JP', label: 'working languages' },
    ],
  },
  about: {
    tag: 'about',
    ledes: [
      "For most of my career, I've focused on frontend development for large-scale manufacturing and government systems. This gave me extensive hands-on experience with HTML5, CSS3, JavaScript and jQuery in production environments where reliability and maintainability were essential.",
      "In recent years, I've worked primarily with TypeScript, React and Next.js while expanding into backend development with Node.js, as well as API, database and interface design. Having spent part of my childhood in the Philippines, I'm comfortable working in both English and Japanese. I also place a strong emphasis on clear communication, regular progress reporting and documentation.",
    ],
    points: [
      {
        title: 'Complex UI development',
        body: 'Canvas, PDF and map-based interfaces where accuracy and performance are critical.',
      },
      {
        title: 'Type-safe frontend development',
        body: 'TypeScript across React and Next.js codebases, with maintainability and scalability in mind.',
      },
      {
        title: 'Full-stack capability',
        body: 'Comfortable working with APIs, backend logic and data models when required.',
      },
      {
        title: 'Clear communication',
        body: 'Regular progress reporting and documentation to keep the team aligned.',
      },
    ],
  },
  work: {
    heading: 'Recent work',
    tag: '2024 — 2026',
    projects: [
      {
        period: '2025 —',
        duration: '',
        sector: 'Rental services · SaaS',
        title: 'Rental Order Management Platform Modernization',
        role: 'Frontend engineer / backend API design',
        summary:
          'A legacy inventory and order management system for a device-rental business was rebuilt from the ground up. I was responsible for the frontend architecture and development, including the locker-management screens used by staff to check devices in and out. I also contributed to backend API design and acceptance-criteria documentation.',
        highlights: [
          'Designed and implemented the locker-management screens from scratch, replacing an ageing internal tool',
          'Contributed to backend API design alongside the platform rebuild',
          'Created acceptance criteria and specification documentation in Confluence to support development and team alignment',
        ],
        stack: projectStacks.rental,
      },
      {
        period: '2024 — 2025',
        duration: '16 months',
        sector: 'Government · construction permitting',
        title: 'Building Permit Review System — Drawing Markup & Annotation Tools',
        role: 'Frontend engineer / backend development',
        summary:
          'Building-permit reviews rely heavily on annotations made directly on architectural drawings. I developed a browser-based tool that allows reviewers to open PDF or image-based drawings and add freehand lines, shapes and notes directly in the browser.',
        highlights: [
          'Built PDF and image viewers with pdf.js and jsPDF, handling large architectural drawings smoothly',
          'Implemented freehand and shape-based markup on top of the viewer using Konva',
          'Designed the UI and canvas/draw-area control logic in React and Next.js',
          'Built the APIs for saving and loading annotation data in Next.js, using Prisma against SQL Server',
          'Used TypeScript throughout the frontend to improve type safety and maintainability',
        ],
        stack: projectStacks.cde,
      },
    ],
  },
  experience: {
    heading: 'Full history',
    tag: '2013 — 2026',
    entries: [
      {
        period: 'Oct 2025 —',
        title: 'Rental Order Management Platform Modernization',
        description:
          'Frontend design and implementation, with involvement in backend design. Full case study above.',
        featured: true,
      },
      {
        period: 'Jun 2024 — Sep 2025',
        title: 'Building Permit Review System — Drawing Markup Tools',
        description: 'Built the PDF and image annotation tools and their backend API. Full case study above.',
        featured: true,
      },
      {
        period: 'Jan 2024 — Mar 2024',
        title: 'Car-Share Platform Modernization',
        description:
          'Resolved production issues in an offshore-developed system and supported a multi-brand rebranding effort across UI copy, assets and security-related fixes.',
      },
      {
        period: 'Oct 2023 — Dec 2023',
        title: 'Internal Sales Tool Modernization',
        description:
          'Rebuilt a legacy intranet sales tool with a focus on security, using VB.NET and Excel VBA — 28 screens and 20 APIs.',
      },
      {
        period: 'May 2023 — Sep 2023',
        title: 'Industrial Plant Software — Web Migration',
        description:
          'Reverse-engineered an existing desktop application and reimplemented its functionality as a web application using JSF and JavaScript — 8 screens and 12 APIs.',
      },
      {
        period: 'May 2021 — Apr 2023',
        title: 'ERP Customization for a Core Business System',
        description:
          'Background feature development on ServiceNow — Flow Designer and Actions, database and interface design, and 53 integration APIs.',
      },
      {
        period: 'Oct 2020 — Apr 2021',
        title: 'Government Flood Risk Early-Warning System',
        description:
          'Built 12 map-based situational-awareness screens in Vue.js and Vuetify over OpenLayers, plus 12 Java Web APIs.',
      },
      {
        period: 'Apr 2020 — Sep 2020',
        title: 'Banking Mobile Application',
        description:
          'Developed administrative screens and Web APIs for a banking mobile application, in PHP on Docker and PostgreSQL.',
      },
      {
        period: 'Sep 2019 — Mar 2020',
        title: 'Government Common Platform — HTML5 Migration',
        description:
          'Migrated legacy screens to HTML5 and implemented Web APIs based on existing servlet logic for a shared government platform.',
      },
      {
        period: 'Apr 2017 — Aug 2019',
        title: 'Government HR & Payroll System',
        description:
          'Developed frontend libraries and Web APIs for a large-scale government HR and payroll system — 30K of an 88K jQuery codebase.',
      },
      {
        period: 'Apr 2015 — Mar 2017',
        title: 'Government Notification System Modernization',
        description:
          'Developed application screens and PDF generation functionality for a government command subsystem — 14 screens.',
      },
      {
        period: 'Apr 2013 — Mar 2015',
        title: 'Government Cyberattack Simulation System',
        description:
          'Developed screen controls and UI functionality for a government cybersecurity simulation system — 12 screens.',
      },
    ],
  },
  skills: {
    heading: 'Tools & stack',
    tag: 'by category',
    groups: [
      { label: 'Core frontend', items: skillItems.frontend },
      { label: 'Canvas, PDF & mapping', items: skillItems.graphics },
      { label: 'Backend & APIs', items: skillItems.backend },
      { label: 'Databases', items: skillItems.databases },
      { label: 'Tools & platforms', items: skillItems.platforms },
    ],
  },
  footer: {
    copyright: 'Rika Sato',
  },
}
