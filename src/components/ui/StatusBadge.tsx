import React from 'react'
import { motion } from 'framer-motion'

interface StatusBadgeProps {
  label?: string
  className?: string
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  label = "Siap Kerja (Full-time / Kontrak / Remote)",
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      className={`inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full text-xs font-semibold border backdrop-blur-md transition-all ${
        "bg-emerald-500/10 border-emerald-500/30 text-emerald-400 dark:text-emerald-300 dark:bg-emerald-950/40"
      } ${className}`}
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
      </span>
      <span className="tracking-tight">{label}</span>
    </motion.div>
  )
}
