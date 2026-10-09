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
  plant: ['TypeScript', 'React', 'Node.js', 'Express', 'Prisma', 'MySQL'],
  cde: ['TypeScript', 'React', 'Next.js', 'NestJS', 'Material UI', 'pdf.js', 'jsPDF', 'Konva', 'Prisma', 'SQL Server'],
}

// Grouped so the specialist frontend work reads as the differentiator it is,
// rather than flattening into one long list of equally-weighted names.
//
// Everything here is backed by the September 2026 skill sheet, plus Jira,
// Azure DevOps and Figma, which Rika confirmed but the sheet does not capture.
//
// Deliberately omitted: C#, Ruby, PL/SQL, Objective-C, Angular, Laravel,
// Struts, DB2 and Access — all listed on the sheet with no period, which its
// own legend marks as 実務経験なし. JSF, VB.NET and VBA are gone too: the
// projects that used them are no longer on the sheet. IDEs beyond VS Code
// are omitted; they add length without adding signal.
export const skillItems = {
  frontend: ['TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'React', 'Next.js', 'Vue.js', 'jQuery', 'Material UI', 'Vuetify', 'SWR', 'Axios'],
  graphics: ['pdf.js', 'jsPDF', 'Konva', 'OpenLayers', 'TCPDF'],
  // Python/FastAPI are deliberately absent: they were the rental project's
  // backend, but Rika worked on its frontend and API design, not its Python.
  backend: ['Node.js', 'Express', 'NestJS', 'Java', 'Spring', 'PHP', 'ServiceNow'],
  databases: ['PostgreSQL', 'MySQL', 'Oracle', 'SQL Server', 'Prisma'],
  platforms: ['Docker', 'AWS', 'Linux', 'Windows', 'Git', 'VS Code', 'Figma', 'Jira', 'Confluence', 'Azure DevOps'],
}
