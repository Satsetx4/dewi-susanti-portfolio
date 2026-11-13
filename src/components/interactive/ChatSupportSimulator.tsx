import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Send,
  Sparkles,
  CheckCheck,
  Headphones,
  Info,
} from 'lucide-react'
import { CHAT_SCENARIOS, PERSONAL_INFO } from '../../data/portfolioData'

interface ChatMessage {
  id: string
  sender: 'customer' | 'dewi'
  text: string
  time: string
}

export const ChatSupportSimulator: React.FC = () => {
  const [activeScenarioId, setActiveScenarioId] = useState(CHAT_SCENARIOS[0].id)
  const [isTyping, setIsTyping] = useState(false)
  const [customInput, setCustomInput] = useState('')
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm1',
      sender: 'customer',
      text: CHAT_SCENARIOS[0].customerQuery,
      time: '10:14',
    },
    {
      id: 'm2',
      sender: 'dewi',
      text: CHAT_SCENARIOS[0].dewiResponse,
      time: '10:15',
    },
  ])

  const selectScenario = (id: string) => {
    const sc = CHAT_SCENARIOS.find((s) => s.id === id)
    if (!sc) return
    setActiveScenarioId(id)
    setIsTyping(true)
    setMessages([
      {
        id: `c-${Date.now()}`,
        sender: 'customer',
        text: sc.customerQuery,
        time: '10:14',
      },
    ])

    setTimeout(() => {
      setIsTyping(false)
      setMessages((prev) => [
        ...prev,
        {
          id: `d-${Date.now()}`,
          sender: 'dewi',
          text: sc.dewiResponse,
          time: '10:15',
        },
      ])
    }, 700)
  }

  const handleCustomSend = (e: React.FormEvent) => {
    e.preventDefault()
    if (!customInput.trim()) return

    const userText = customInput.trim()
    const nowTime = new Date().toLocaleTimeString('id-ID', {
      hour: '2-digit',
      minute: '2-digit',
    })

    setMessages((prev) => [
      ...prev,
      {
        id: `c-${Date.now()}`,
        sender: 'customer',
        text: userText,
        time: nowTime,
      },
    ])
    setCustomInput('')
    setIsTyping(true)

    // Dynamic professional CS response
    setTimeout(() => {
      setIsTyping(false)
      let reply = `Halo Kak! Terima kasih banyak sudah bertanya mengenai hal tersebut 😊. Permintaan Kakak "${userText.slice(0, 30)}..." telah saya catat dan langsung saya koordinasikan dengan tim. Ada lagi data atau pesanan yang bisa saya bantu rekapkan hari ini?`
      if (userText.toLowerCase().includes('harga') || userText.toLowerCase().includes('diskon')) {
        reply = `Halo Kak! Untuk info harga dan promo terbaru, kami sediakan penawaran terbaik sesuai jumlah pesanan Kakak 🎉. Saya siap kirimkan daftar katalog lengkapnya ya Kak.`
      } else if (userText.toLowerCase().includes('retur') || userText.toLowerCase().includes('rusak') || userText.toLowerCase().includes('salah')) {
        reply = `Mohon maaf sekali atas ketidaknyamanannya ya Kak 🙏. Jangan khawatir, kami siap bantu proses ganti baru atau pengecekan resi retur sesuai SOP garansi kami. Boleh dibantu kirimkan foto/video unboxing paketnya Kak?`
      }

      setMessages((prev) => [
        ...prev,
        {
          id: `d-${Date.now()}`,
          sender: 'dewi',
          text: reply,
          time: nowTime,
        },
      ])
    }, 900)
  }

  const currentScenario = CHAT_SCENARIOS.find((s) => s.id === activeScenarioId)

  return (
    <div className="w-full flex flex-col gap-5 bg-slate-900/90 dark:bg-slate-900/90 light:bg-white rounded-3xl border border-slate-800/90 dark:border-slate-800/90 light:border-slate-200 p-5 md:p-7 shadow-xl backdrop-blur-md transition-colors">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-teal-500/10 text-teal-400 border border-teal-500/20">
            <Headphones className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base md:text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 flex items-center gap-2">
              Simulasi Respon Pelayanan Pelanggan (CS)
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20">
                Live Chat
              </span>
            </h3>
            <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
              Lihat bagaimana Dewi melayani pelanggan secara cepat, empati, dan sesuai SOP standar perusahaan.
            </p>
          </div>
        </div>
      </div>

      {/* Scenario buttons */}
      <div className="flex flex-col gap-2">
        <span className="text-xs font-semibold text-slate-400 dark:text-slate-400 light:text-slate-600 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-teal-400" />
          <span>Pilih Contoh Skenario Pertanyaan Pelanggan:</span>
        </span>
        <div className="flex flex-wrap gap-2">
          {CHAT_SCENARIOS.map((sc) => (
            <motion.button
              key={sc.id}
              whileTap={{ scale: 0.95 }}
              onClick={() => selectScenario(sc.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeScenarioId === sc.id
                  ? 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-md shadow-teal-950/30'
                  : 'bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:bg-slate-800 dark:hover:bg-slate-800 light:hover:bg-slate-200 border border-slate-800/80 light:border-slate-300'
              }`}
            >
              {sc.label}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Chat UI Box */}
      <div className="rounded-2xl border border-slate-800/90 dark:border-slate-800/90 light:border-slate-200 bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-50 overflow-hidden flex flex-col shadow-inner">
        {/* Chat Header */}
        <div className="px-4 py-3 bg-slate-900/90 dark:bg-slate-900/90 light:bg-slate-100 border-b border-slate-800/80 light:border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 rounded-full overflow-hidden bg-slate-800 border-2 border-teal-500/50">
              <img
                src={PERSONAL_INFO.avatar}
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover object-top"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border border-slate-950"></span>
            </div>
            <div>
              <div className="text-xs font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 flex items-center gap-1.5">
                {PERSONAL_INFO.name}
                <span className="text-[10px] font-normal text-teal-400">
                  (Customer Support)
                </span>
              </div>
              <div className="text-[10px] text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Aktif Sekarang • Rata-rata respon &lt; 2 menit</span>
              </div>
            </div>
          </div>
        </div>

        {/* Chat message stream */}
        <div className="p-4 flex flex-col gap-3 min-h-[220px] max-h-[340px] overflow-y-auto">
          {messages.map((msg) => {
            const isCustomer = msg.sender === 'customer'
            return (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className={`flex flex-col ${isCustomer ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] sm:max-w-[75%] px-4 py-2.5 rounded-2xl text-xs leading-relaxed shadow-sm ${
                    isCustomer
                      ? 'bg-slate-800 dark:bg-slate-800 light:bg-slate-200 text-slate-100 dark:text-slate-100 light:text-slate-900 rounded-tr-none'
                      : 'bg-gradient-to-r from-teal-700 to-emerald-700 text-white rounded-tl-none'
                  }`}
                >
                  <p>{msg.text}</p>
                  <div
                    className={`flex items-center justify-end gap-1 mt-1 text-[9px] ${
                      isCustomer ? 'text-slate-400' : 'text-teal-200'
                    }`}
                  >
                    <span>{msg.time}</span>
                    <CheckCheck className="w-3 h-3" />
                  </div>
                </div>
              </motion.div>
            )
          })}

          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 bg-slate-900/50 light:bg-slate-200 px-3 py-1.5 rounded-full w-fit"
            >
              <div className="flex gap-1 items-center">
                <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
              </div>
              <span className="text-[10px]">Dewi sedang mengetik respon...</span>
            </motion.div>
          )}
        </div>

        {/* Input box */}
        <form
          onSubmit={handleCustomSend}
          className="p-3 bg-slate-900/90 dark:bg-slate-900/90 light:bg-slate-100 border-t border-slate-800/80 light:border-slate-200 flex items-center gap-2"
        >
          <input
            type="text"
            placeholder="Coba ketik pertanyaan Anda sendiri ke Dewi..."
            value={customInput}
            onChange={(e) => setCustomInput(e.target.value)}
            className="flex-1 px-3.5 py-2 text-xs rounded-xl bg-slate-950 dark:bg-slate-950 light:bg-white border border-slate-800 light:border-slate-300 text-slate-100 dark:text-slate-100 light:text-slate-900 focus:outline-none focus:ring-1 focus:ring-teal-500"
          />
          <motion.button
            whileTap={{ scale: 0.92 }}
            type="submit"
            className="p-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white transition-colors focus:outline-none"
            aria-label="Kirim Pesan"
          >
            <Send className="w-4 h-4" />
          </motion.button>
        </form>
      </div>

      {/* CS SOP Tips */}
      {currentScenario && (
        <div className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-teal-500/10 border border-teal-500/20 text-xs text-teal-300 dark:text-teal-300 light:text-teal-800">
          <Info className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold">Analisis SOP & Nilai Tambah: </span>
            <span>{currentScenario.tips}</span>
          </div>
        </div>
      )}
    </div>
  )
}
