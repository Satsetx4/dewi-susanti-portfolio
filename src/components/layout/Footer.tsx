import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  RotateCcw,
  Heart,
  MessageCircle,
  Mail,
  MapPin,
  CheckCircle2,
  FileText,
} from 'lucide-react'
import { PERSONAL_INFO } from '../../data/portfolioData'
import type { NavTabId } from '../../types/portfolio'

interface FooterProps {
  onTabChange: (tab: NavTabId) => void
}

export const Footer: React.FC<FooterProps> = ({ onTabChange }) => {
  const [resetSuccess, setResetSuccess] = useState(false)

  const handleResetStorage = () => {
    try {
      localStorage.removeItem('dewi_theme')
      localStorage.removeItem('dewi_active_tab')
      localStorage.removeItem('dewi_contact_draft')
      localStorage.removeItem('dewi_spreadsheet_data')
      setResetSuccess(true)
      setTimeout(() => {
        window.location.reload()
      }, 700)
    } catch {
      window.location.reload()
    }
  }

  return (
    <footer className="w-full border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 bg-slate-950 dark:bg-slate-950 light:bg-slate-50 py-12 px-4 transition-colors">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Identity Info */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 p-[2px]">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-emerald-400 font-bold text-xs">
                  DS
                </div>
              </div>
              <span className="font-extrabold text-base tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed max-w-md">
              Fresh graduate SMK Bisnis Digital siap kerja. Berpengalaman dalam pengarsipan digital, pengelolaan spreadsheet, dan pelayanan pelanggan online dengan standar respons cepat & ramah.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <MapPin className="w-3.5 h-3.5" />
              <span>{PERSONAL_INFO.city}</span>
            </div>
          </div>

          {/* Navigasi Cepat */}
          <div className="flex flex-col gap-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 dark:text-slate-300 light:text-slate-700">
              Halaman
            </h4>
            <div className="flex flex-col gap-1.5 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
              <button
                onClick={() => onTabChange('home')}
                className="text-left hover:text-emerald-400 transition-colors"
              >
                Beranda
              </button>
              <button
                onClick={() => onTabChange('about')}
                className="text-left hover:text-emerald-400 transition-colors"
              >
                Tentang & Data Diri
              </button>
              <button
                onClick={() => onTabChange('works')}
                className="text-left hover:text-emerald-400 transition-colors"
              >
                Portofolio & Simulasi Kerja
              </button>
              <button
                onClick={() => onTabChange('education')}
                className="text-left hover:text-emerald-400 transition-colors"
              >
                Riwayat Pendidikan
              </button>
              <button
                onClick={() => onTabChange('contact')}
                className="text-left hover:text-emerald-400 transition-colors"
              >
                Hubungi Langsung
              </button>
            </div>
          </div>

          {/* Hubungi & Dokumen */}
          <div className="flex flex-col gap-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 dark:text-slate-300 light:text-slate-700">
              Akses & Kontak
            </h4>
            <div className="flex flex-col gap-2 text-xs">
              <a
                href={`https://wa.me/${PERSONAL_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-emerald-400 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-500" />
                <span>WhatsApp: {PERSONAL_INFO.phone}</span>
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-1.5 text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-emerald-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span className="truncate">{PERSONAL_INFO.email}</span>
              </a>
              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-500 hover:text-slate-300 transition-colors"
              >
                <FileText className="w-3 h-3" />
                <span>Peta Situs (sitemap.xml)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Fresh Start & Copyright */}
        <div className="pt-6 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-500 light:text-slate-500">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} {PERSONAL_INFO.name}. Dibuat dengan</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
            <span>untuk dunia kerja profesional.</span>
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              whileTap={{ scale: 0.94 }}
              onClick={handleResetStorage}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 dark:bg-slate-900 light:bg-slate-200 hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors focus:outline-none"
              title="Mengosongkan cache local storage peramban"
            >
              <RotateCcw className={`w-3.5 h-3.5 ${resetSuccess ? 'text-emerald-400 animate-spin' : ''}`} />
              <span>{resetSuccess ? 'Cache Direset...' : 'Reset Sesi / Mulai Awal'}</span>
              {resetSuccess && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}
