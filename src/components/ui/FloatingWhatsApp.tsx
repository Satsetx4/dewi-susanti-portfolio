import React from 'react'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { PERSONAL_INFO } from '../../data/portfolioData'

export const FloatingWhatsApp: React.FC = () => {
  const message = encodeURIComponent(
    `Halo ${PERSONAL_INFO.nickname}, saya melihat portofolio digital kamu dan ingin mengajak berdiskusi mengenai peluang kerja / project.`
  )
  const waUrl = `https://wa.me/${PERSONAL_INFO.whatsapp}?text=${message}`

  return (
    <motion.aside
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.8, type: 'spring', stiffness: 260, damping: 20 }}
      aria-label="Kontak Cepat WhatsApp"
      className="fixed bottom-20 md:bottom-8 right-4 md:right-8 z-40"
    >
      <motion.a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08, y: -2 }}
        whileTap={{ scale: 0.92 }}
        className="group relative flex items-center gap-2.5 px-4 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-full shadow-lg shadow-emerald-950/40 border border-emerald-400/40 focus:outline-none focus:ring-4 focus:ring-emerald-500/30 font-medium text-sm transition-all"
        aria-label="Chat WhatsApp Dewi Susanti"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
        </span>
        <span className="hidden sm:inline font-semibold tracking-tight">
          Chat WhatsApp
        </span>
        <span className="sm:hidden font-semibold text-xs tracking-tight">
          WA
        </span>
      </motion.a>
    </motion.aside>
  )
}
