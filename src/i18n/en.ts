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
    lede: "I build frontend applications for complex systems — from admin tools and PDF/canvas-based editors to map interfaces — primarily for government and enterprise projects. My core stack is React, TypeScript and Next.js, and in recent years I've also taken on Web API development, requirements definition and system design.",
    stats: [
      { value: '13 yrs', label: 'professional experience' },
      { value: '10', label: 'projects' },
      { value: 'EN / JP', label: 'working languages' },
    ],
  },
  about: {
    tag: 'about',
    ledes: [
      "For most of my career, I've focused on frontend development for large-scale government and enterprise systems, covering design, development and testing. This gave me extensive hands-on experience with HTML5, CSS3, JavaScript and jQuery in production environments where reliability and maintainability were essential.",
      "In recent years, I've worked primarily with TypeScript, React and Next.js, while also building Web APIs with Node.js, Express and NestJS, working on database integration, and taking part in requirements definition and design. I'm a Japanese national who studied overseas in the Philippines, so I'm comfortable researching technical material in English and coordinating specifications and progress with overseas development teams. I place a strong emphasis on communication with clients and team members — confirming open questions and spec inconsistencies early so development keeps moving smoothly.",
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
        title: 'APIs & design',
        body: 'Web APIs with Node.js, Express and NestJS, plus requirements definition, interface and API design.',
      },
      {
        title: 'Bilingual collaboration',
        body: 'Requirements discussions with clients and spec coordination with offshore teams, in Japanese and English.',
      },
    ],
  },
  work: {
    heading: 'Recent work',
    tag: '2024 — 2026',
    projects: [
      {
        period: '2025 — 2026',
        duration: '12 months',
        sector: 'Rental services · SaaS',
        title: 'Rental Order Management Platform Modernization',
        role: 'Frontend engineer / requirements & API design',
        summary:
          'A replacement of the order management system for a business that rents out tablets, cameras and smartphones. I worked mainly on the frontend, designing and building the locker-management screens in Next.js, React and Material UI, and joined client meetings to pin down requirements and screen specifications. For the next phase of the replacement, I then moved on to requirements definition, design documents and API specification design.',
        highlights: [
          'Designed and implemented the locker-management screens — 8 screens in TypeScript, React and Next.js',
          'Implemented API integration for around 9 APIs using SWR and Axios',
          'Joined client meetings to confirm requirements and screen behaviour; flagged inconsistencies with existing specs to stakeholders and helped resolve them',
          'For the next phase, investigated the existing system and design documents, then wrote requirements definitions, design documents and API specifications',
          'Wrote specifications and acceptance criteria in Confluence to keep development and the team aligned',
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
          'Building-permit reviews rely heavily on annotations made directly on architectural drawings. I developed the main web-based editing screen, where reviewers open PDF or image drawings and draw and annotate on them directly in the browser, along with the Web APIs behind it.',
        highlights: [
          'Converted image files to PDF so every drawing is displayed through one common pdf.js-based viewer',
          'Implemented drawing and editing on top of the viewer using Konva, plus display-size and scale controls',
          'Built file export in PDF, PNG and JPEG formats',
          'Built 12 Web APIs in NestJS, using Prisma against SQL Server for create, read, update and delete operations',
          'Used TypeScript throughout, across React, Next.js and NestJS',
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
        period: 'Oct 2025 — Sep 2026',
        title: 'Rental Order Management Platform Modernization',
        description:
          'Frontend design and implementation, then requirements definition and API design for the next phase. Full case study above.',
        featured: true,
      },
      {
        period: 'Jun 2024 — Sep 2025',
        title: 'Building Permit Review System — Drawing Markup Tools',
        description: 'Built the PDF and image markup tools and their NestJS APIs. Full case study above.',
        featured: true,
      },
      {
        period: 'May 2023 — May 2024',
        title: 'Industrial Plant Software — Web Migration',
        description:
          'Analysed an existing packaged application and took its web migration from basic, detailed and interface/API design through implementation — 8 screens in TypeScript and React, 12 APIs in Node.js and Express with Prisma. Explained specs to, reviewed deliverables from and tracked progress of an offshore team in Vietnam, in Japanese and English.',
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
          'Developed admin screens and Web APIs for a banking mobile app in Java and PHP, and managed progress and quality as subsystem leader.',
      },
      {
        period: 'Sep 2019 — Mar 2020',
        title: 'Government Common Platform — HTML5 Migration',
        description:
          'Designed and built shared UI components and a developer sample site, migrated legacy screens to HTML5 and turned servlet EJB logic into Web APIs. Also handled schedule and quality management for the team.',
      },
      {
        period: 'Apr 2017 — Aug 2019',
        title: 'Government HR & Payroll System',
        description:
          'Developed the shared frontend library (30K of an 88K jQuery codebase) and server-side Java APIs for a large-scale government HR and payroll system.',
      },
      {
        period: 'Apr 2015 — Mar 2017',
        title: 'Government Notification System Modernization',
        description:
          'Developed 14 screens, Web API integration and Java/PHP server-side processing, plus 16 PDF report templates rendered with TCPDF.',
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
