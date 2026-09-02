export interface SkillGroup {
  label: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    items: ['JavaScript', 'TypeScript', 'PHP', 'Java', 'Python', 'C#', 'Ruby', 'SQL', 'PL/SQL'],
  },
  {
    label: 'Frameworks & libraries',
    items: [
      'React',
      'Next.js',
      'Vue.js',
      'Angular',
      'jQuery',
      'NestJS',
      'FastAPI',
      'Laravel',
      'Spring',
      'ServiceNow',
    ],
  },
  {
    label: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'SQL Server', 'Oracle', 'DB2', 'Access'],
  },
  {
    label: 'Platforms & tools',
    items: ['Docker', 'AWS', 'VS Code', 'Git', 'Windows', 'Linux', 'macOS'],
  },
]
