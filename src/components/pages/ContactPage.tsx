import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  MessageCircle,
  Mail,
  MapPin,
  Phone,
  Send,
  Copy,
  Check,
  Download,
  Building,
  User,
  Sparkles,
  ExternalLink,
} from 'lucide-react'
import { PERSONAL_INFO } from '../../data/portfolioData'

export const ContactPage: React.FC = () => {
  const [senderName, setSenderName] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [senderContact, setSenderContact] = useState('')
  const [purpose, setPurpose] = useState('Lowongan Kerja Full-time')
  const [message, setMessage] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [copied, setCopied] = useState(false)
  const [sentNotice, setSentNotice] = useState(false)

  // Load draft from localStorage on mount (Defensive handling)
  useEffect(() => {
    try {
      const saved = localStorage.getItem('dewi_contact_draft')
      if (saved) {
        const parsed = JSON.parse(saved)
        if (parsed.senderName) setSenderName(parsed.senderName)
        if (parsed.companyName) setCompanyName(parsed.companyName)
        if (parsed.senderContact) setSenderContact(parsed.senderContact)
        if (parsed.purpose) setPurpose(parsed.purpose)
        if (parsed.message) setMessage(parsed.message)
      }
    } catch {}
  }, [])

  // Auto-save draft
  const saveDraft = (updated: Record<string, string>) => {
    try {
      localStorage.setItem(
        'dewi_contact_draft',
        JSON.stringify({
          senderName,
          companyName,
          senderContact,
          purpose,
          message,
          ...updated,
        })
      )
    } catch {}
  }

  // Format the full message text
  const generateFormattedMessage = () => {
    return `Halo Dewi Susanti,\n\nSaya ${senderName || '[Nama]'} dari ${companyName ? companyName : '[Perusahaan/Pribadi]'}.\nKontak Saya: ${senderContact || '-'}\nKeperluan: ${purpose}\n\nPesan:\n"${message || 'Tertarik untuk berdiskusi mengenai peluang kerja di tempat kami.'}"\n\nTerima kasih.`
  }

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault()
    if (honeypot) return // bot trap triggered

    const fullText = generateFormattedMessage()
    const encoded = encodeURIComponent(fullText)
    const url = `https://wa.me/${PERSONAL_INFO.whatsapp}?text=${encoded}`
    window.open(url, '_blank')
    setSentNotice(true)
    setTimeout(() => setSentNotice(false), 3000)
  }

  const handleCopyMessage = () => {
    const fullText = generateFormattedMessage()
    navigator.clipboard.writeText(fullText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  // Generate vCard download
  const handleDownloadVCard = () => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Dewi Susanti
N:Susanti;Dewi;;;
TITLE:${PERSONAL_INFO.title}
TEL;TYPE=CELL:${PERSONAL_INFO.phone}
EMAIL:${PERSONAL_INFO.email}
ADR;TYPE=HOME:;;${PERSONAL_INFO.address};Probolinggo;Jawa Timur;;Indonesia
NOTE:Fresh Graduate Bisnis Digital SMK N 1 Probolinggo
URL:https://dewi-susanti.vercel.app/
END:VCARD`

    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', 'Dewi_Susanti_Kontak.vcf')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="flex flex-col gap-8 md:gap-12">
      {/* Header */}
      <div className="flex flex-col gap-2 pb-6 border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
          Mari Terhubung
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
          Hubungi Dewi Susanti
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-xl">
          Terbuka untuk tawaran posisi Staf Administrasi, Customer Service Online, maupun pekerjaan terkait bisnis digital.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Cards Column (lg:col-span-5) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {/* Card 1: WhatsApp Primary */}
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            href={`https://wa.me/${PERSONAL_INFO.whatsapp}?text=${encodeURIComponent('Halo Dewi Susanti, saya ingin berdiskusi mengenai peluang kerja.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-3xl bg-gradient-to-br from-emerald-950/60 via-slate-900 to-slate-950 dark:from-emerald-950/60 dark:via-slate-900 dark:to-slate-950 light:from-emerald-50 light:to-white border border-emerald-500/30 light:border-emerald-300 shadow-xl flex items-center justify-between group transition-all"
          >
            <div className="flex items-center gap-3.5">
              <div className="p-3 rounded-2xl bg-emerald-500/20 text-emerald-400 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6 fill-emerald-500" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                  Respon Tercepat (WhatsApp)
                </span>
                <h4 className="text-sm font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                  {PERSONAL_INFO.phone}
                </h4>
                <p className="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-600">
                  Klik untuk langsung chat sekarang
                </p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-emerald-400 opacity-60 group-hover:opacity-100 transition-opacity" />
          </motion.a>

          {/* Card 2: Email */}
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            href={`mailto:${PERSONAL_INFO.email}`}
            className="p-5 rounded-3xl bg-slate-900/90 dark:bg-slate-900/90 light:bg-white border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 shadow-xl flex items-center justify-between group transition-all"
          >
            <div className="flex items-center gap-3.5">
              <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400">
                  Surat Elektronik (Email)
                </span>
                <h4 className="text-sm font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 truncate max-w-[180px] sm:max-w-none">
                  {PERSONAL_INFO.email}
                </h4>
                <p className="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-600">
                  Kirim tawaran resmi / berkas via email
                </p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-400 opacity-60 group-hover:opacity-100 transition-opacity" />
          </motion.a>

          {/* Card 3: Lokasi & Domisili */}
          <div className="p-5 rounded-3xl bg-slate-900/90 dark:bg-slate-900/90 light:bg-white border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 shadow-xl flex flex-col gap-3 transition-colors">
            <div className="flex items-center gap-3.5">
              <div className="p-3 rounded-2xl bg-teal-500/10 text-teal-400">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-400">
                  Lokasi Domisili
                </span>
                <h4 className="text-sm font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                  {PERSONAL_INFO.address}
                </h4>
                <p className="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-600">
                  {PERSONAL_INFO.city}
                </p>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Probolinggo,Jawa+Timur"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-teal-400 hover:text-teal-300 flex items-center gap-1.5 self-start pt-1"
            >
              <span>Lihat di Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 4: Download vCard */}
          <motion.button
            whileTap={{ scale: 0.96 }}
            onClick={handleDownloadVCard}
            className="p-4 rounded-2xl bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-100 border border-slate-800/80 light:border-slate-300 flex items-center justify-between text-left hover:border-emerald-500/40 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Download className="w-4 h-4 text-emerald-400" />
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-200 dark:text-slate-200 light:text-slate-900">
                  Simpan Kontak Dewi ke HP
                </span>
                <span className="text-[10px] text-slate-400">
                  Format .vcf (vCard kontak langsung tersimpan)
                </span>
              </div>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400">
              Download
            </span>
          </motion.button>
        </div>

        {/* Interactive Form Column (lg:col-span-7) */}
        <div className="lg:col-span-7 p-6 md:p-8 rounded-3xl bg-slate-900/90 dark:bg-slate-900/90 light:bg-white border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 shadow-xl flex flex-col gap-5 transition-colors">
          <div className="flex items-center justify-between">
            <h3 className="text-base sm:text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-emerald-400" />
              <span>Formulir Pesan Cepat</span>
            </h3>
            <span className="text-[10px] text-slate-400">Draft otomatis tersimpan</span>
          </div>

          <form onSubmit={handleSendWhatsApp} className="flex flex-col gap-4">
            {/* Honeypot field (hidden for anti-spam bots) */}
            <input
              type="text"
              name="company_trap_url"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Nama Lengkap Anda *</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Pak Hendra / Bu Sari"
                  value={senderName}
                  onChange={(e) => {
                    setSenderName(e.target.value)
                    saveDraft({ senderName: e.target.value })
                  }}
                  className="px-3.5 py-2.5 text-xs rounded-xl bg-slate-950/70 dark:bg-slate-950/70 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-100 dark:text-slate-100 light:text-slate-900 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-blue-400" />
                  <span>Nama Perusahaan / Bisnis</span>
                </label>
                <input
                  type="text"
                  placeholder="Contoh: PT Sumber Digital / Toko Berkah"
                  value={companyName}
                  onChange={(e) => {
                    setCompanyName(e.target.value)
                    saveDraft({ companyName: e.target.value })
                  }}
                  className="px-3.5 py-2.5 text-xs rounded-xl bg-slate-950/70 dark:bg-slate-950/70 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-100 dark:text-slate-100 light:text-slate-900 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-teal-400" />
                  <span>Nomor Kontak Anda / Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Contoh: 0812-xxxx-xxxx"
                  value={senderContact}
                  onChange={(e) => {
                    setSenderContact(e.target.value)
                    saveDraft({ senderContact: e.target.value })
                  }}
                  className="px-3.5 py-2.5 text-xs rounded-xl bg-slate-950/70 dark:bg-slate-950/70 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-100 dark:text-slate-100 light:text-slate-900 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700">
                  Jenis Keperluan
                </label>
                <select
                  value={purpose}
                  onChange={(e) => {
                    setPurpose(e.target.value)
                    saveDraft({ purpose: e.target.value })
                  }}
                  className="px-3.5 py-2.5 text-xs rounded-xl bg-slate-950/70 dark:bg-slate-950/70 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-100 dark:text-slate-100 light:text-slate-900 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                >
                  <option value="Lowongan Kerja Full-time">Lowongan Kerja Full-time</option>
                  <option value="Lowongan Staf Administrasi">Lowongan Staf Administrasi</option>
                  <option value="Customer Support / CS Online">Customer Support / CS Online</option>
                  <option value="Proyek Freelance Input Data">Proyek Freelance Input Data</option>
                  <option value="Undangan Wawancara / Interview">Undangan Wawancara / Interview</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700">
                Isi Pesan / Keterangan Tawaran *
              </label>
              <textarea
                rows={4}
                required
                placeholder="Tuliskan detail pekerjaan atau jadwal wawancara yang Anda rencanakan..."
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value)
                  saveDraft({ message: e.target.value })
                }}
                className="px-3.5 py-2.5 text-xs rounded-xl bg-slate-950/70 dark:bg-slate-950/70 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-100 dark:text-slate-100 light:text-slate-900 focus:outline-none focus:ring-1 focus:ring-emerald-500 resize-none leading-relaxed"
              />
            </div>

            {/* Buttons row */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <motion.button
                type="button"
                whileTap={{ scale: 0.95 }}
                onClick={handleCopyMessage}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold rounded-xl bg-slate-800 dark:bg-slate-800 light:bg-slate-100 hover:bg-slate-700 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-700/80 light:border-slate-300 transition-colors"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Teks Tersalin!' : 'Salin Format Pesan'}</span>
              </motion.button>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 shadow-md shadow-emerald-500/25 transition-all"
              >
                <Send className="w-4 h-4" />
                <span>{sentNotice ? 'Membuka WhatsApp...' : 'Kirim via WhatsApp'}</span>
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
