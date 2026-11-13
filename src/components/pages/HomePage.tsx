import React from 'react'
import { motion } from 'framer-motion'
import {
  FileSpreadsheet,
  Headphones,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  MessageCircle,
  FileText,
  Building,
  GraduationCap,
  ShieldCheck,
  Zap,
} from 'lucide-react'
import { PERSONAL_INFO } from '../../data/portfolioData'
import { StatusBadge } from '../ui/StatusBadge'
import type { NavTabId } from '../../types/portfolio'

interface HomePageProps {
  onNavigate: (tab: NavTabId) => void
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const message = encodeURIComponent(
    `Halo Dewi, saya tertarik melihat portofolio digital kamu dan ingin berdiskusi mengenai peluang kerja / project.`
  )
  const waUrl = `https://wa.me/${PERSONAL_INFO.whatsapp}?text=${message}`

  return (
    <div className="flex flex-col gap-8 md:gap-12">
      {/* Bento Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* Main Hero Card (lg:col-span-8) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-8 p-6 md:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 light:from-white light:via-slate-50 light:to-slate-100 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 shadow-2xl relative overflow-hidden flex flex-col justify-between transition-colors"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 dark:bg-emerald-500/10 light:bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

          <div className="flex flex-col gap-6 relative z-10">
            {/* Top row: Status Badge & Fresh Graduate chip */}
            <div className="flex flex-wrap items-center gap-2.5">
              <StatusBadge label="🟢 Siap Kerja (Full-time / Kontrak / Remote)" />
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                Fresh Graduate 2026
              </span>
            </div>

            {/* Profile Avatar + Intro */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="relative shrink-0">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl p-1 bg-gradient-to-tr from-emerald-500 via-teal-400 to-blue-500 shadow-xl shadow-emerald-950/40">
                  <div className="w-full h-full rounded-[22px] overflow-hidden bg-slate-950">
                    <img
                      src={PERSONAL_INFO.avatar}
                      alt={PERSONAL_INFO.name}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 p-1.5 rounded-xl bg-emerald-500 text-slate-950 shadow-md">
                  <Sparkles className="w-4 h-4 fill-slate-950" />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="text-xs uppercase tracking-widest font-extrabold text-emerald-400">
                  Portofolio Resmi
                </span>
                <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-sm font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700">
                  {PERSONAL_INFO.title}
                </p>
              </div>
            </div>

            {/* Tagline & summary */}
            <p className="text-sm md:text-base text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed max-w-2xl">
              Lulusan SMK Negeri 1 Probolinggo jurusan Bisnis Digital dengan pengalaman PKL sebagai staf administrasi online dan customer service. Berdedikasi untuk membantu kelancaran operasional data, pencatatan transaksi, dan pelayanan konsumen yang ramah.
            </p>

            {/* Quick Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {['Microsoft Excel / Sheets', 'Customer Service Online', 'Pengarsipan Digital', 'Marketplace Admin'].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-200 text-slate-300 dark:text-slate-300 light:text-slate-800 border border-slate-700/60 light:border-slate-300 flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{skill}</span>
                  </span>
                )
              )}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-8 mt-4 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 relative z-10">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-emerald-500/25 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              <span>Hubungi via WhatsApp</span>
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('works')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-800 dark:bg-slate-800 light:bg-slate-100 hover:bg-slate-700 text-slate-100 dark:text-slate-100 light:text-slate-900 border border-slate-700/80 light:border-slate-300 font-bold text-xs sm:text-sm transition-all"
            >
              <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
              <span>Coba Simulasi Kerja</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('about')}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-slate-100 font-semibold text-xs transition-colors"
            >
              <FileText className="w-4 h-4" />
              <span>Data Diri Lengkap</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Bento Side Column (lg:col-span-4) */}
        <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
          {/* Card: Peran yang Dicari */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 rounded-3xl bg-slate-900/90 dark:bg-slate-900/90 light:bg-white border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 shadow-xl flex flex-col justify-between gap-4 transition-colors"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                <Building className="w-4 h-4" />
                <span>Posisi Siap Isi</span>
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400">
                Tersedia
              </span>
            </div>

            <div className="flex flex-col gap-2">
              {PERSONAL_INFO.availableFor.map((role) => (
                <div
                  key={role}
                  className="p-2.5 rounded-xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 border border-slate-800/60 dark:border-slate-800/60 light:border-slate-200 text-xs font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>{role}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => onNavigate('contact')}
              className="text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 mt-1"
            >
              <span>Ajak Interview Sekarang</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>

          {/* Card: Pendidikan Terakhir */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 rounded-3xl bg-gradient-to-br from-teal-950/40 via-slate-900 to-slate-950 dark:from-teal-950/40 dark:via-slate-900 dark:to-slate-950 light:from-white light:to-teal-50/30 border border-teal-500/30 light:border-teal-200 shadow-xl flex flex-col justify-between gap-4 transition-colors"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-teal-400 uppercase tracking-wider flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4" />
                <span>Pendidikan Terakhir</span>
              </span>
              <span className="text-[10px] text-slate-400 font-mono">2023 — 2026</span>
            </div>

            <div>
              <h4 className="text-base font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                SMK Negeri 1 Probolinggo
              </h4>
              <p className="text-xs text-teal-400 font-semibold mt-0.5">
                Jurusan Bisnis Digital
              </p>
              <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mt-2 leading-relaxed">
                Mempelajari pembukuan digital, pengolahan spreadsheet lanjutan, customer relationship, dan e-commerce.
              </p>
            </div>

            <button
              onClick={() => onNavigate('education')}
              className="text-xs font-bold text-teal-400 hover:text-teal-300 flex items-center gap-1 mt-1"
            >
              <span>Lihat Riwayat Lengkap</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* 3 Core Highlights (Bento Grid 2) */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <motion.div
          whileHover={{ y: -4 }}
          onClick={() => onNavigate('works')}
          className="p-6 rounded-3xl bg-slate-900/90 dark:bg-slate-900/90 light:bg-white border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 shadow-lg cursor-pointer transition-all flex flex-col justify-between gap-4 group"
        >
          <div className="flex items-center justify-between">
            <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform">
              <FileSpreadsheet className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400">
              Interactive
            </span>
          </div>

          <div>
            <h3 className="text-base font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 group-hover:text-emerald-400 transition-colors">
              Pengolahan Data Excel & Sheets
            </h3>
            <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mt-1.5 leading-relaxed">
              Merapikan ribuan baris pesanan, rumus keuangan dasar, sorting data pelanggan, dan ekspor laporan berkala.
            </p>
          </div>

          <div className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
            <span>Buka Simulator Excel</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -4 }}
          onClick={() => onNavigate('works')}
          className="p-6 rounded-3xl bg-slate-900/90 dark:bg-slate-900/90 light:bg-white border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 shadow-lg cursor-pointer transition-all flex flex-col justify-between gap-4 group"
        >
          <div className="flex items-center justify-between">
            <div className="p-3 rounded-2xl bg-teal-500/10 text-teal-400 group-hover:scale-110 transition-transform">
              <Headphones className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-teal-500/10 text-teal-400">
              Interactive
            </span>
          </div>

          <div>
            <h3 className="text-base font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 group-hover:text-teal-400 transition-colors">
              Pelayanan Pelanggan (CS) Ramah
            </h3>
            <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mt-1.5 leading-relaxed">
              Komunikasi santun via WhatsApp & marketplace chat, solusi cepat penanganan komplain, dan follow-up pesanan.
            </p>
          </div>

          <div className="text-xs font-semibold text-teal-400 flex items-center gap-1">
            <span>Coba Chat CS Langsung</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -4 }}
          onClick={() => onNavigate('about')}
          className="p-6 rounded-3xl bg-slate-900/90 dark:bg-slate-900/90 light:bg-white border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 shadow-lg cursor-pointer transition-all flex flex-col justify-between gap-4 group"
        >
          <div className="flex items-center justify-between">
            <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400">
              Karakter Unggul
            </span>
          </div>

          <div>
            <h3 className="text-base font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 group-hover:text-blue-400 transition-colors">
              Jujur, Disiplin & Cepat Belajar
            </h3>
            <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mt-1.5 leading-relaxed">
              Integritas tinggi dalam memegang arsip rahasia perusahaan dan siap menyesuaikan SOP baru secara gesit.
            </p>
          </div>

          <div className="text-xs font-semibold text-blue-400 flex items-center gap-1">
            <span>Pelajari Etika Kerja</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </motion.div>
      </section>

      {/* Quick Testimonial / Work Values Banner */}
      <section className="p-6 md:p-8 rounded-3xl bg-gradient-to-r from-emerald-950/40 via-slate-900 to-teal-950/40 border border-emerald-500/30 dark:border-emerald-500/30 light:border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-2xl bg-emerald-500/20 text-emerald-400 shrink-0">
            <Zap className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
              Siap Bergabung & Mulai Bekerja Segera
            </h4>
            <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 mt-0.5">
              Tersedia untuk wawancara daring (Google Meet / Zoom) maupun tatap muka langsung di wilayah Probolinggo & sekitarnya.
            </p>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onNavigate('contact')}
          className="shrink-0 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-md shadow-emerald-500/20 transition-all"
        >
          Hubungi Dewi Sekarang
        </motion.button>
      </section>
    </div>
  )
}
