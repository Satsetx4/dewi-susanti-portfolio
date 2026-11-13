import React from 'react'
import { motion } from 'framer-motion'
import { Home, AlertCircle } from 'lucide-react'

interface NotFoundPageProps {
  onNavigateHome: () => void
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigateHome }) => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 gap-5">
      <div className="w-16 h-16 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
        <AlertCircle className="w-8 h-8" />
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-xs uppercase tracking-widest font-extrabold text-emerald-400">
          404 Halaman Tidak Ditemukan
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900">
          Waduh, Halamannya Tidak Tersedia
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-md mx-auto">
          Tautan yang Anda tuju mungkin sudah dipindahkan atau salah ketik. Yuk kembali ke beranda portofolio Dewi Susanti!
        </p>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNavigateHome}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-lg shadow-emerald-500/20 transition-all"
      >
        <Home className="w-4 h-4" />
        <span>Kembali ke Beranda</span>
      </motion.button>
    </div>
  )
}
