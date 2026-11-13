import React from 'react'
import { motion } from 'framer-motion'
import {
  User,
  Calendar,
  Heart,
  Flag,
  MapPin,
  Mail,
  Phone,
  Printer,
  Sparkles,
  Award,
  ShieldCheck,
  CheckCircle,
} from 'lucide-react'
import { PERSONAL_INFO, SKILL_CATEGORIES } from '../../data/portfolioData'
import type { NavTabId } from '../../types/portfolio'

interface AboutPageProps {
  onNavigate: (tab: NavTabId) => void
}

export const AboutPage: React.FC<AboutPageProps> = () => {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="flex flex-col gap-8 md:gap-12">
      {/* Header section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
            Profil & Biodata Lengkap
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight mt-1">
            Tentang Dewi Susanti
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 mt-1 max-w-xl">
            Lulusan Bisnis Digital yang berdedikasi, siap memberikan kontribusi nyata dalam pengelolaan administrasi dan kepuasan pelanggan.
          </p>
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handlePrint}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 dark:bg-slate-800 light:bg-slate-100 hover:bg-slate-700 text-slate-200 dark:text-slate-200 light:text-slate-800 border border-slate-700/80 light:border-slate-300 text-xs font-semibold self-start md:self-auto transition-colors"
        >
          <Printer className="w-4 h-4 text-emerald-400" />
          <span>Cetak / Simpan PDF CV</span>
        </motion.button>
      </div>

      {/* Profile Overview & Data Diri Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Photo & Biodata Card (lg:col-span-5) */}
        <div className="lg:col-span-5 flex flex-col gap-5">
          <div className="p-6 rounded-3xl bg-slate-900/90 dark:bg-slate-900/90 light:bg-white border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 shadow-xl flex flex-col items-center text-center gap-4 transition-colors">
            <div className="relative">
              <div className="w-32 h-32 rounded-3xl p-1 bg-gradient-to-tr from-emerald-500 via-teal-400 to-blue-500 shadow-xl shadow-emerald-950/40">
                <div className="w-full h-full rounded-[22px] overflow-hidden bg-slate-950">
                  <img
                    src={PERSONAL_INFO.avatar}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <span className="absolute -bottom-1 -right-1 p-1.5 rounded-xl bg-emerald-500 text-slate-950 shadow-md">
                <Award className="w-4 h-4" />
              </span>
            </div>

            <div>
              <h3 className="text-xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900">
                {PERSONAL_INFO.name}
              </h3>
              <p className="text-xs text-emerald-400 font-semibold mt-0.5">
                Fresh Graduate Bisnis Digital (2026)
              </p>
            </div>

            {/* Biodata list items */}
            <div className="w-full flex flex-col gap-2 pt-4 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200 text-left text-xs">
              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-950/50 dark:bg-slate-950/50 light:bg-slate-50">
                <span className="text-slate-400 flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Tempat / Tanggal Lahir</span>
                </span>
                <span className="font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">
                  {PERSONAL_INFO.birthPlaceDate}
                </span>
              </div>

              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-950/50 dark:bg-slate-950/50 light:bg-slate-50">
                <span className="text-slate-400 flex items-center gap-2">
                  <User className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Jenis Kelamin</span>
                </span>
                <span className="font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">
                  {PERSONAL_INFO.gender}
                </span>
              </div>

              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-950/50 dark:bg-slate-950/50 light:bg-slate-50">
                <span className="text-slate-400 flex items-center gap-2">
                  <Heart className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Status Pernikahan</span>
                </span>
                <span className="font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">
                  {PERSONAL_INFO.maritalStatus}
                </span>
              </div>

              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-950/50 dark:bg-slate-950/50 light:bg-slate-50">
                <span className="text-slate-400 flex items-center gap-2">
                  <Flag className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Kewarganegaraan</span>
                </span>
                <span className="font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">
                  {PERSONAL_INFO.nationality}
                </span>
              </div>

              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-950/50 dark:bg-slate-950/50 light:bg-slate-50">
                <span className="text-slate-400 flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Alamat Domisili</span>
                </span>
                <span className="font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800 text-right truncate max-w-[150px]">
                  {PERSONAL_INFO.address}
                </span>
              </div>
            </div>

            {/* Quick Contact buttons */}
            <div className="w-full flex gap-2 pt-2">
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex-1 py-2 px-3 rounded-xl bg-slate-800 dark:bg-slate-800 light:bg-slate-100 hover:bg-slate-700 text-xs font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800 flex items-center justify-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>Telepon</span>
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex-1 py-2 px-3 rounded-xl bg-slate-800 dark:bg-slate-800 light:bg-slate-100 hover:bg-slate-700 text-xs font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800 flex items-center justify-center gap-1.5 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Bio Narrative & Work Ethics (lg:col-span-7) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Narrative card */}
          <div className="p-6 md:p-8 rounded-3xl bg-slate-900/90 dark:bg-slate-900/90 light:bg-white border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 shadow-xl flex flex-col gap-4 transition-colors">
            <h3 className="text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-emerald-400" />
              <span>Profil Singkat & Visi Kerja</span>
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
              Saya adalah lulusan baru (fresh graduate) dari <strong>SMK Negeri 1 Probolinggo</strong> program keahlian <strong>Bisnis Digital</strong>. Sepanjang masa studi dan masa Praktik Kerja Lapangan (PKL), saya terbiasa mengemban tugas-tugas operasional administrasi secara teliti, mulai dari pencatatan transaksi harian, pengarsipan berkas terstruktur, hingga melayani komunikasi dengan pelanggan secara online.
            </p>

            <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
              Bagi saya, pekerjaan administrasi bukan sekadar memasukkan angka ke dalam lembar kerja, melainkan fondasi penting yang memastikan setiap pesanan sampai ke pelanggan dengan tepat dan setiap rupiah tercatat secara transparan. Saya terbiasa mematuhi Standar Operasional Prosedur (SOP) perusahaan dengan disiplin tinggi.
            </p>

            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 dark:text-emerald-300 light:text-emerald-800 leading-relaxed">
              <span className="font-bold">Motto Kerja: </span>
              "Ketelitian dalam angka, keramahan dalam melayani, dan kejujuran dalam setiap tindakan."
            </div>
          </div>

          {/* 4 Pilar Karakter Kerja */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
                <ShieldCheck className="w-4 h-4" />
                <span>Jujur & Bertanggung Jawab</span>
              </div>
              <p className="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                Selalu amanah dalam menjaga kerahasiaan data pembeli, rekapan kas, dan dokumen internal instansi.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-teal-400 font-bold text-xs">
                <CheckCircle className="w-4 h-4" />
                <span>Ketelitian Data Tinggi</span>
              </div>
              <p className="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                Terbiasa melakukan verifikasi silang (cross-check) bukti bayar dan nomor resi untuk memastikan nol salah kirim.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-xs">
                <User className="w-4 h-4" />
                <span>Kerja Sama Tim & Komunikatif</span>
              </div>
              <p className="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                Mudah berkoordinasi dengan rekan divisi gudang, pengemasan, maupun pihak manajerial.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-xs">
                <Sparkles className="w-4 h-4" />
                <span>Cepat Beradaptasi</span>
              </div>
              <p className="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
                Siap mempelajari sistem ERP, software kasir baru, atau channel marketplace apa pun yang digunakan perusahaan.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Keahlian & Kategori Kemampuan Detail */}
      <section className="flex flex-col gap-5 pt-4">
        <div>
          <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
            Katalog Keahlian Terapan
          </h3>
          <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
            Tingkat penguasaan perangkat lunak perkantoran dan kapabilitas operasional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.category}
              className="p-6 rounded-3xl bg-slate-900/90 dark:bg-slate-900/90 light:bg-white border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 shadow-xl flex flex-col gap-4 transition-colors"
            >
              <div>
                <h4 className="text-sm font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                  {cat.category}
                </h4>
                <p className="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-600 mt-0.5">
                  {cat.description}
                </p>
              </div>

              <div className="flex flex-col gap-3.5 pt-2">
                {cat.items.map((item) => (
                  <div key={item.name} className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">
                        {item.name}
                      </span>
                      <span className="text-[10px] font-bold text-emerald-400">
                        {item.level}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-2 rounded-full bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-200 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"
                      />
                    </div>

                    <p className="text-[10px] text-slate-400 dark:text-slate-400 light:text-slate-600 leading-tight">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
