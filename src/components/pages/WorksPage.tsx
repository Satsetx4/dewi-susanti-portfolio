import React, { useState } from 'react'
import {
  Briefcase,
  Calendar,
  CheckCircle2,
  FolderArchive,
  FileSpreadsheet,
  Headphones,
  ShieldCheck,
  FolderTree,
  FileText,
} from 'lucide-react'
import { EXPERIENCE_LIST } from '../../data/portfolioData'
import { SpreadsheetSimulator } from '../interactive/SpreadsheetSimulator'
import { ChatSupportSimulator } from '../interactive/ChatSupportSimulator'
import type { NavTabId } from '../../types/portfolio'

interface WorksPageProps {
  onNavigate: (tab: NavTabId) => void
}

export const WorksPage: React.FC<WorksPageProps> = ({ onNavigate }) => {
  const [activeInteractiveTab, setActiveInteractiveTab] = useState<'excel' | 'cs' | 'archive'>('excel')

  const exp = EXPERIENCE_LIST[0]

  return (
    <div className="flex flex-col gap-8 md:gap-12">
      {/* Page Header */}
      <div className="flex flex-col gap-2 pb-6 border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
          Bukti & Simulasi Kerja
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
          Pengalaman Kerja & Portofolio Interaktif
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl leading-relaxed">
          Jangan hanya membaca teks resume — coba langsung keahlian praktis Dewi dalam mengolah data pesanan dan melayani pelanggan secara interaktif di bawah ini.
        </p>
      </div>

      {/* Experience Overview Card */}
      <section className="p-6 md:p-8 rounded-3xl bg-slate-900/90 dark:bg-slate-900/90 light:bg-white border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 shadow-xl flex flex-col gap-6 transition-colors">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800/60 dark:border-slate-800/60 light:border-slate-200">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wide">
                {exp.type}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                {exp.role}
              </h3>
              <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
                {exp.institution}
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-100 border border-slate-800/80 light:border-slate-300 text-xs font-mono font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 self-start sm:self-auto">
            <Calendar className="w-3.5 h-3.5 text-emerald-400" />
            <span>{exp.period}</span>
          </div>
        </div>

        {/* Summary text */}
        <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
          {exp.summary}
        </p>

        {/* 4 Tugas Pokok dari CV */}
        <div className="flex flex-col gap-2.5">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-600">
            Tanggung Jawab Utama (Sesuai CV):
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {exp.responsibilities.map((resp, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-slate-950/50 dark:bg-slate-950/50 light:bg-slate-50 border border-slate-800/60 dark:border-slate-800/60 light:border-slate-200 text-xs text-slate-300 dark:text-slate-300 light:text-slate-700 flex items-start gap-2.5"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{resp}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tools Badges & Key Achievement */}
        <div className="pt-4 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs text-slate-400 font-semibold mr-1">Tools Digunakan:</span>
            {exp.tools.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-lg bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-200 text-[11px] font-medium text-slate-200 dark:text-slate-200 light:text-slate-800"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 dark:text-emerald-300 light:text-emerald-800 font-medium flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{exp.keyAchievement}</span>
          </div>
        </div>
      </section>

      {/* Interactive Showcase Tabs */}
      <section className="flex flex-col gap-6 pt-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
              Test Drive Keahlian Langsung
            </h3>
            <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
              Pilih modul simulasi di bawah untuk menguji respon dan penguasaan tools.
            </p>
          </div>

          <div className="flex items-center gap-1.5 bg-slate-900/90 dark:bg-slate-900/90 light:bg-slate-100 p-1.5 rounded-2xl border border-slate-800/80 light:border-slate-300 self-start sm:self-auto">
            <button
              onClick={() => setActiveInteractiveTab('excel')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                activeInteractiveTab === 'excel'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>Simulasi Spreadsheet</span>
            </button>

            <button
              onClick={() => setActiveInteractiveTab('cs')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                activeInteractiveTab === 'cs'
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Headphones className="w-4 h-4" />
              <span>Simulasi CS Live</span>
            </button>

            <button
              onClick={() => setActiveInteractiveTab('archive')}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                activeInteractiveTab === 'archive'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <FolderArchive className="w-4 h-4" />
              <span>Sistem Arsip</span>
            </button>
          </div>
        </div>

        {/* Dynamic Interactive Render */}
        {activeInteractiveTab === 'excel' && <SpreadsheetSimulator />}

        {activeInteractiveTab === 'cs' && <ChatSupportSimulator />}

        {activeInteractiveTab === 'archive' && (
          <div className="p-6 md:p-8 rounded-3xl bg-slate-900/90 dark:bg-slate-900/90 light:bg-white border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 shadow-xl flex flex-col gap-6 transition-colors">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <FolderTree className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                  Struktur Pengarsipan Dokumen Digital Sistematis
                </h3>
                <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
                  Standar pengelolaan berkas cloud (Google Drive / OneDrive) yang biasa diterapkan Dewi agar dokumen mudah dilacak.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-xs">
                  <FolderArchive className="w-4 h-4" />
                  <span>📁 01_INVOICE_&_BUKTI_BAYAR</span>
                </div>
                <p className="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                  Tersusun per bulan dan per kanal transaksi (WhatsApp/Marketplace). Setiap file dinamai dengan format: <code>[TGL]_[NO-TRX]_[NAMA-PEMBELI].pdf</code>.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
                  <FileSpreadsheet className="w-4 h-4" />
                  <span>📁 02_REKAP_PENJUALAN_BULANAN</span>
                </div>
                <p className="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                  Berisi lembar kerja spreadsheet utama, rekap omset harian, grafik performa barang terlaris, dan catatan retur.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-teal-400 font-bold text-xs">
                  <FileText className="w-4 h-4" />
                  <span>📁 03_SOP_&_TEMPLATE_CHAT_CS</span>
                </div>
                <p className="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                  Dokumen panduan FAQ, template salam pembuka, penanganan garansi, dan daftar kontak kurir ekspedisi.
                </p>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Call to action card */}
      <section className="p-6 rounded-3xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-300 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-sm font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
            Butuh Staf Administrasi yang Teliti & Siap Kerja?
          </h4>
          <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mt-0.5">
            Dewi siap mengikuti tes praktik pengolahan data atau tes wawancara kerja.
          </p>
        </div>

        <button
          onClick={() => onNavigate('contact')}
          className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold transition-all shadow-md shadow-emerald-500/20"
        >
          Kirim Tawaran Kerja
        </button>
      </section>
    </div>
  )
}
