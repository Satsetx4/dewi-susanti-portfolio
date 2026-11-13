import React from 'react'
import { motion } from 'framer-motion'
import { Home, User, Briefcase, GraduationCap, MessageSquare } from 'lucide-react'
import type { NavTabId } from '../../types/portfolio'

interface MobileBottomNavProps {
  activeTab: NavTabId
  onTabChange: (tab: NavTabId) => void
}

const ITEMS: { id: NavTabId; label: string; icon: React.ElementType }[] = [
  { id: 'home', label: 'Beranda', icon: Home },
  { id: 'about', label: 'Tentang', icon: User },
  { id: 'works', label: 'Simulasi', icon: Briefcase },
  { id: 'education', label: 'Edukasi', icon: GraduationCap },
  { id: 'contact', label: 'Kontak', icon: MessageSquare },
]

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeTab,
  onTabChange,
}) => {
  return (
    <nav
      aria-label="Navigasi Bawah Mobile"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 px-3 py-2 bg-slate-950/90 dark:bg-slate-950/90 light:bg-white/95 backdrop-blur-xl border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 shadow-2xl transition-colors"
    >
      <ul className="flex items-center justify-around gap-1 p-0 m-0 list-none max-w-lg mx-auto">
        {ITEMS.map((item) => {
          const isActive = activeTab === item.id
          const Icon = item.icon

          return (
            <li key={item.id} className="flex-1">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => onTabChange(item.id)}
                className={`relative w-full py-2 px-1 flex flex-col items-center justify-center gap-1 rounded-xl text-xs font-semibold transition-colors focus:outline-none ${
                  isActive
                    ? 'text-emerald-400 dark:text-emerald-400 light:text-emerald-600'
                    : 'text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-slate-200'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {isActive && (
                  <motion.div
                    layoutId="mobileNavPill"
                    className="absolute inset-0 bg-emerald-500/15 dark:bg-emerald-500/15 light:bg-emerald-50 rounded-xl border border-emerald-500/25"
                    transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                  />
                )}

                <div className="relative z-10 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>

                <span className="relative z-10 text-[10px] tracking-tight">
                  {item.label}
                </span>
              </motion.button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
