import React from 'react'
import { motion } from 'framer-motion'
import {
  Home,
  User,
  Briefcase,
  GraduationCap,
  MessageSquare,
  Sparkles,
} from 'lucide-react'
import type { NavTabId } from '../../types/portfolio'
import { ThemeToggle } from '../ui/ThemeToggle'
import { PERSONAL_INFO } from '../../data/portfolioData'

interface NavbarProps {
  activeTab: NavTabId
  onTabChange: (tab: NavTabId) => void
}

export const NAV_ITEMS: { id: NavTabId; label: string; icon: React.ElementType }[] = [
  { id: 'home', label: 'Beranda', icon: Home },
  { id: 'about', label: 'Tentang', icon: User },
  { id: 'works', label: 'Portofolio & Simulasi', icon: Briefcase },
  { id: 'education', label: 'Pendidikan', icon: GraduationCap },
  { id: 'contact', label: 'Kontak', icon: MessageSquare },
]

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange }) => {
  return (
    <header className="sticky top-0 z-40 w-full px-4 py-3 bg-slate-900/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80 dark:border-slate-800/80 light:bg-white/80 light:border-slate-200 transition-colors">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        {/* Brand Logo & Name */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.96 }}
          onClick={() => onTabChange('home')}
          className="flex items-center gap-3 text-left focus:outline-none"
        >
          <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 p-[2px] shadow-md shadow-emerald-950/30">
            <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-emerald-400 font-extrabold text-sm tracking-tight">
              DS
            </div>
            <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900 flex items-center gap-1.5">
              {PERSONAL_INFO.name}
              <span className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-md">
                Fresh Grad
              </span>
            </span>
            <span className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 truncate max-w-[160px] sm:max-w-none">
              Bisnis Digital & Administrasi
            </span>
          </div>
        </motion.button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 dark:bg-slate-900/80 light:bg-slate-100 p-1.5 rounded-2xl border border-slate-800/80 light:border-slate-200 shadow-inner">
          {NAV_ITEMS.map((item) => {
            const isActive = activeTab === item.id
            const Icon = item.icon

            return (
              <motion.button
                key={item.id}
                whileTap={{ scale: 0.94 }}
                onClick={() => onTabChange(item.id)}
                className={`relative px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all focus:outline-none ${
                  isActive
                    ? 'text-white dark:text-white light:text-slate-900'
                    : 'text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-slate-200 light:hover:text-slate-900'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="desktopNavActivePill"
                    className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl shadow-md shadow-emerald-950/30"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  <Icon className="w-4 h-4" />
                  {item.label}
                </span>
              </motion.button>
            )
          })}
        </nav>

        {/* Right Actions: Theme Toggle & Quick CTA */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            href={`https://wa.me/${PERSONAL_INFO.whatsapp}?text=${encodeURIComponent('Halo Dewi, saya tertarik untuk berdiskusi tentang peluang kerja / project.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-md shadow-emerald-500/20 transition-all"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Mulai Diskusi</span>
          </motion.a>
        </div>
      </div>
    </header>
  )
}
