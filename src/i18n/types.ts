export type Lang = 'en' | 'ja'

export interface Project {
  period: string
  duration: string
  sector: string
  title: string
  role: string
  summary: string
  highlights: string[]
  stack: string[]
}

export interface TimelineEntry {
  period: string
  title: string
  description: string
  featured?: boolean
}

export interface SkillGroup {
  label: string
  items: string[]
}

export interface HeroStat {
  value: string
  label: string
}

export interface FocusPoint {
  title: string
  body: string
}

// Every string the UI renders. `en` and `ja` are both typed as `Dict`,
// so adding a field forces a translation in both languages.
export interface Dict {
  metaTitle: string
  metaDescription: string
  siteName: string
  langGroupLabel: string
  nav: { work: string; experience: string; skills: string; contact: string }
  hero: {
    eyebrowRole: string
    eyebrowLocation: string
    heading: string
    lede: string
    stats: HeroStat[]
  }
  about: {
    tag: string
    ledes: string[]
    points: FocusPoint[]
  }
  work: {
    heading: string
    tag: string
    projects: Project[]
  }
  experience: {
    heading: string
    tag: string
    entries: TimelineEntry[]
  }
  skills: {
    heading: string
    tag: string
    groups: SkillGroup[]
  }
  footer: {
    copyright: string
  }
}
