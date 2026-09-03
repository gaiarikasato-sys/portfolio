// Language-neutral content: technology names and tool lists are the same
// in every language, so both dictionaries import them from here to stay in sync.

export const projectStacks = {
  rental: [
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
    'Claude Code',
  ],
  cde: ['TypeScript', 'React', 'Next.js', 'NestJS', 'Material UI', 'pdf.js', 'jsPDF', 'Konva', 'Prisma', 'SQL Server'],
}

// Grouped so the specialist frontend work reads as the differentiator it is,
// rather than flattening into one long list of equally-weighted names.
//
// Everything here is backed by the skill sheet, plus Node.js, Jira, Azure
// DevOps and Figma, which Rika confirmed but the August sheet does not capture.
//
// Deliberately omitted: C#, Ruby, PL/SQL, Objective-C, Angular, Laravel,
// Struts, DB2 and Access — all listed on the sheet with no period, which its
// own legend marks as 実務経験なし. IDEs beyond VS Code are omitted too; they
// add length without adding signal.
export const skillItems = {
  frontend: ['TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'React', 'Next.js', 'Vue.js', 'jQuery', 'Material UI', 'Vuetify'],
  graphics: ['pdf.js', 'jsPDF', 'Konva', 'OpenLayers'],
  // Python/FastAPI are deliberately absent: they were the rental project's
  // backend, but Rika worked on its frontend and API design, not its Python.
  backend: ['Node.js', 'PHP', 'Java', 'Spring', 'NestJS', 'JSF', 'ServiceNow', 'VB.NET', 'VBA'],
  databases: ['PostgreSQL', 'MySQL', 'Oracle', 'SQL Server', 'Prisma'],
  platforms: ['Docker', 'AWS', 'Linux', 'Windows', 'Git', 'VS Code', 'Figma', 'Jira', 'Confluence', 'Azure DevOps'],
}
