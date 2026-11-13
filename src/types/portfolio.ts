export type NavTabId = 'home' | 'about' | 'works' | 'education' | 'contact'

export interface PersonalInfo {
  name: string
  nickname: string
  title: string
  tagline: string
  avatar: string
  summary: string
  statusAvailability: string
  availableFor: string[]
  birthPlaceDate: string
  gender: string
  maritalStatus: string
  nationality: string
  address: string
  city: string
  phone: string
  whatsapp: string
  email: string
}

export interface EducationItem {
  id: string
  school: string
  period: string
  degree: string
  major?: string
  description: string
  highlights: string[]
  icon: string
}

export interface ExperienceItem {
  id: string
  role: string
  period: string
  type: string
  institution: string
  summary: string
  responsibilities: string[]
  tools: string[]
  keyAchievement: string
}

export interface SkillCategory {
  category: string
  description: string
  items: {
    name: string
    level: string
    icon: string
    proficiency: number
    description: string
  }[]
}

export interface SpreadsheetRow {
  id: string
  customer: string
  channel: string
  product: string
  qty: number
  total: number
  status: 'Selesai' | 'Dikirim' | 'Diproses'
  date: string
}

export interface ChatScenario {
  id: string
  label: string
  customerQuery: string
  dewiResponse: string
  tips: string
}
