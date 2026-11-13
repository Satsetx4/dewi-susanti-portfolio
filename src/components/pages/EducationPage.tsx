import React from 'react'
import { motion } from 'framer-motion'
import {
  GraduationCap,
  Calendar,
  BookOpen,
  School,
  CheckCircle2,
  Award,
  BookCheck,
} from 'lucide-react'
import { EDUCATION_LIST } from '../../data/portfolioData'
import type { NavTabId } from '../../types/portfolio'

interface EducationPageProps {
  onNavigate: (tab: NavTabId) => void
}

export const EducationPage: React.FC<EducationPageProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col gap-8 md:gap-12">
      {/* Header */}
      <div className="flex flex-col gap-2 pb-6 border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
          Latar Belakang Akademik
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
          Riwayat Pendidikan & Kompetensi
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-xl">
          Jejak pendidikan formal yang membentuk etos kerja, ketelitian administrasi, dan keahlian bisnis digital Dewi Susanti.
        </p>
      </div>

      {/* Timeline Section */}
      <div className="relative border-l-2 border-emerald-500/30 dark:border-emerald-500/30 light:border-emerald-400 ml-4 sm:ml-6 flex flex-col gap-10">
        {EDUCATION_LIST.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-6 sm:pl-8 flex flex-col gap-3 group"
          >
            {/* Timeline node circle */}
            <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-slate-950 dark:bg-slate-950 light:bg-white border-2 border-emerald-500 flex items-center justify-center text-emerald-400 shadow-md shadow-emerald-500/20 group-hover:scale-110 transition-transform">
              {edu.id === 'smk' && <GraduationCap className="w-4 h-4" />}
              {edu.id === 'smp' && <BookOpen className="w-4 h-4" />}
              {edu.id === 'sd' && <School className="w-4 h-4" />}
            </div>

            {/* School card */}
            <div className="p-6 rounded-3xl bg-slate-900/90 dark:bg-slate-900/90 light:bg-white border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 shadow-xl flex flex-col gap-4 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base sm:text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                      {edu.school}
                    </h3>
                    {edu.id === 'smk' && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        Kejuruan Utama
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-semibold text-emerald-400 mt-0.5">
                    {edu.degree} {edu.major ? `• Jurusan ${edu.major}` : ''}
                  </p>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-100 text-xs font-mono font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 self-start sm:self-auto border border-slate-800/80 light:border-slate-300">
                  <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{edu.period}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
                {edu.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-col gap-2 pt-2 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-600">
                  Pencapaian & Pembelajaran Kunci:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {edu.highlights.map((item, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-xl bg-slate-950/50 dark:bg-slate-950/50 light:bg-slate-50 border border-slate-800/60 dark:border-slate-800/60 light:border-slate-200 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Kurikulum Kompetensi Bisnis Digital (Khusus SMK N 1 Probolinggo) */}
      <section className="p-6 md:p-8 rounded-3xl bg-slate-900/90 dark:bg-slate-900/90 light:bg-white border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 shadow-xl flex flex-col gap-6 transition-colors">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <BookCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base md:text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
              Mata Pelajaran & Fondasi Keahlian Bisnis Digital
            </h3>
            <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
              Standar kurikulum kejuruan yang telah dikuasai selama 3 tahun di SMK Negeri 1 Probolinggo.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex flex-col gap-2">
            <span className="text-xs font-bold text-emerald-400">01. Administrasi Transaksi</span>
            <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
              Pencatatan nota kredit/debit, invoice faktur, pengelolaan kas kecil, dan rekapitulasi data penjualan harian.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex flex-col gap-2">
            <span className="text-xs font-bold text-teal-400">02. Layanan Pelanggan Digital</span>
            <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
              Etika komunikasi daring, manajemen komplain, standar pelayanan prima (service excellence), dan follow-up prospek.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex flex-col gap-2">
            <span className="text-xs font-bold text-blue-400">03. Operasional Marketplace</span>
            <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
              Manajemen pesanan toko daring (Shopee, Tokopedia, TikTok), update stok barang, dan pemrosesan resi kirim.
            </p>
          </div>
        </div>
      </section>

      {/* Prestasi & Sikap Belajar */}
      <section className="p-6 rounded-3xl bg-gradient-to-r from-emerald-950/30 via-slate-900 to-teal-950/30 border border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="p-3 rounded-2xl bg-emerald-500/20 text-emerald-400">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
              Lulusan Siap Pakai & Mudah Dibimbing
            </h4>
            <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 mt-0.5">
              Memiliki antusiasme belajar tinggi untuk memahami budaya dan sistem kerja di tempat baru Anda.
            </p>
          </div>
        </div>

        <button
          onClick={() => onNavigate('contact')}
          className="shrink-0 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all shadow-md"
        >
          Diskusi Peluang
        </button>
      </section>
    </div>
  )
}
