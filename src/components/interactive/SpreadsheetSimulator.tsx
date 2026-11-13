import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FileSpreadsheet,
  Search,
  Plus,
  Download,
  CheckCircle,
  Truck,
  Clock,
  Check,
  TrendingUp,
} from 'lucide-react'
import { SPREADSHEET_DEMO_DATA } from '../../data/portfolioData'
import type { SpreadsheetRow } from '../../types/portfolio'

export const SpreadsheetSimulator: React.FC = () => {
  const [data, setData] = useState<SpreadsheetRow[]>(() => {
    try {
      const saved = localStorage.getItem('dewi_spreadsheet_data')
      if (saved) return JSON.parse(saved)
    } catch {}
    return SPREADSHEET_DEMO_DATA
  })

  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState<'All' | 'Selesai' | 'Dikirim' | 'Diproses'>('All')
  const [isAdding, setIsAdding] = useState(false)
  const [newCustomer, setNewCustomer] = useState('')
  const [newProduct, setNewProduct] = useState('')
  const [newChannel, setNewChannel] = useState('WhatsApp Order')
  const [newQty, setNewQty] = useState(1)
  const [newTotal, setNewTotal] = useState(150000)
  const [exportNotice, setExportNotice] = useState(false)

  // Save changes
  const saveData = (updated: SpreadsheetRow[]) => {
    setData(updated)
    try {
      localStorage.setItem('dewi_spreadsheet_data', JSON.stringify(updated))
    } catch {}
  }

  // Filtered rows
  const filteredRows = data.filter((row) => {
    const matchSearch =
      row.customer.toLowerCase().includes(search.toLowerCase()) ||
      row.product.toLowerCase().includes(search.toLowerCase()) ||
      row.id.toLowerCase().includes(search.toLowerCase())
    const matchStatus = statusFilter === 'All' || row.status === statusFilter
    return matchSearch && matchStatus
  })

  // KPI Calculations
  const totalOmset = data.reduce((acc, curr) => acc + curr.total, 0)
  const countSelesai = data.filter((d) => d.status === 'Selesai').length
  const completionRate = Math.round((countSelesai / (data.length || 1)) * 100)

  const handleAddRow = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newCustomer.trim() || !newProduct.trim()) return

    const newRow: SpreadsheetRow = {
      id: `TRX-2026-0${80 + data.length + 1}`,
      customer: newCustomer.trim(),
      channel: newChannel,
      product: newProduct.trim(),
      qty: Number(newQty) || 1,
      total: Number(newTotal) || 100000,
      status: 'Diproses',
      date: 'Hari ini',
    }

    saveData([newRow, ...data])
    setNewCustomer('')
    setNewProduct('')
    setIsAdding(false)
  }

  const handleExportCSV = () => {
    const headers = 'ID Transaksi,Pelanggan,Kanal Penjualan,Produk,Qty,Total Harga,Status,Tanggal\n'
    const rows = data
      .map(
        (r) =>
          `"${r.id}","${r.customer}","${r.channel}","${r.product}",${r.qty},${r.total},"${r.status}","${r.date}"`
      )
      .join('\n')
    const blob = new Blob([headers + rows], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', 'Laporan_Rekap_Pesanan_Dewi_Susanti.csv')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    setExportNotice(true)
    setTimeout(() => setExportNotice(false), 2500)
  }

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(val)
  }

  return (
    <div className="w-full flex flex-col gap-5 bg-slate-900/90 dark:bg-slate-900/90 light:bg-white rounded-3xl border border-slate-800/90 dark:border-slate-800/90 light:border-slate-200 p-5 md:p-7 shadow-xl backdrop-blur-md transition-colors">
      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <FileSpreadsheet className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base md:text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 flex items-center gap-2">
              Simulasi Rekapitulasi Data Transaksi
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Live Interactive
              </span>
            </h3>
            <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
              Contoh riil bagaimana Dewi menginput data pesanan, menyortir kanal marketplace, dan menghitung rekap keuangan.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsAdding(!isAdding)}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl bg-slate-800 dark:bg-slate-800 light:bg-slate-100 hover:bg-slate-700 text-slate-200 dark:text-slate-200 light:text-slate-700 transition-colors"
          >
            <Plus className="w-4 h-4 text-emerald-400" />
            <span>Tambah Data Coba</span>
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleExportCSV}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-950/30 transition-colors"
          >
            {exportNotice ? <Check className="w-4 h-4" /> : <Download className="w-4 h-4" />}
            <span>{exportNotice ? 'Terunduh!' : 'Ekspor CSV'}</span>
          </motion.button>
        </div>
      </div>

      {/* KPI Stats Widgets */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="p-3.5 rounded-2xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-medium text-slate-400 dark:text-slate-400 light:text-slate-600">
              Total Omset Rekap
            </span>
            <div className="text-lg font-extrabold text-emerald-400 dark:text-emerald-400 light:text-emerald-600 tracking-tight">
              {formatRupiah(totalOmset)}
            </div>
          </div>
          <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
            <TrendingUp className="w-5 h-5" />
          </div>
        </div>

        <div className="p-3.5 rounded-2xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-medium text-slate-400 dark:text-slate-400 light:text-slate-600">
              Jumlah Transaksi
            </span>
            <div className="text-lg font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
              {data.length} Pesanan
            </div>
          </div>
          <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400">
            <FileSpreadsheet className="w-5 h-5" />
          </div>
        </div>

        <div className="p-3.5 rounded-2xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-50 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-medium text-slate-400 dark:text-slate-400 light:text-slate-600">
              Tingkat Selesai
            </span>
            <div className="text-lg font-extrabold text-teal-400 dark:text-teal-400 light:text-teal-600 tracking-tight">
              {completionRate}%
            </div>
          </div>
          <div className="p-2 rounded-xl bg-teal-500/10 text-teal-400">
            <CheckCircle className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Add data form accordion */}
      <AnimatePresence>
        {isAdding && (
          <motion.form
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            onSubmit={handleAddRow}
            className="overflow-hidden p-4 rounded-2xl bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-100 border border-emerald-500/30 flex flex-col gap-3"
          >
            <div className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
              <Plus className="w-3.5 h-3.5" />
              <span>Input Data Pesanan Baru (Simulasi)</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5">
              <input
                type="text"
                placeholder="Nama Pembeli (mis. Dian)"
                value={newCustomer}
                onChange={(e) => setNewCustomer(e.target.value)}
                required
                className="px-3 py-2 text-xs rounded-xl bg-slate-900 dark:bg-slate-900 light:bg-white border border-slate-700/80 light:border-slate-300 text-slate-100 dark:text-slate-100 light:text-slate-900 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
              <input
                type="text"
                placeholder="Nama Produk (mis. Flashdisk 64GB)"
                value={newProduct}
                onChange={(e) => setNewProduct(e.target.value)}
                required
                className="px-3 py-2 text-xs rounded-xl bg-slate-900 dark:bg-slate-900 light:bg-white border border-slate-700/80 light:border-slate-300 text-slate-100 dark:text-slate-100 light:text-slate-900 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
              <select
                value={newChannel}
                onChange={(e) => setNewChannel(e.target.value)}
                className="px-3 py-2 text-xs rounded-xl bg-slate-900 dark:bg-slate-900 light:bg-white border border-slate-700/80 light:border-slate-300 text-slate-100 dark:text-slate-100 light:text-slate-900 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              >
                <option value="WhatsApp Order">WhatsApp Order</option>
                <option value="Shopee Store">Shopee Store</option>
                <option value="TikTok Shop">TikTok Shop</option>
                <option value="Tokopedia">Tokopedia</option>
              </select>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Qty"
                  value={newQty}
                  onChange={(e) => setNewQty(Number(e.target.value))}
                  min={1}
                  className="w-16 px-2 py-2 text-xs rounded-xl bg-slate-900 dark:bg-slate-900 light:bg-white border border-slate-700/80 light:border-slate-300 text-slate-100 dark:text-slate-100 light:text-slate-900 text-center focus:outline-none"
                />
                <input
                  type="number"
                  placeholder="Total (Rp)"
                  value={newTotal}
                  onChange={(e) => setNewTotal(Number(e.target.value))}
                  step={5000}
                  className="flex-1 px-3 py-2 text-xs rounded-xl bg-slate-900 dark:bg-slate-900 light:bg-white border border-slate-700/80 light:border-slate-300 text-slate-100 dark:text-slate-100 light:text-slate-900 focus:outline-none"
                />
              </div>
            </div>
            <div className="flex justify-end gap-2 pt-1">
              <button
                type="button"
                onClick={() => setIsAdding(false)}
                className="px-3 py-1.5 text-xs text-slate-400 hover:text-slate-200"
              >
                Batal
              </button>
              <button
                type="submit"
                className="px-4 py-1.5 text-xs font-bold rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950"
              >
                Simpan ke Tabel
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>

      {/* Search and Filters Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div className="relative flex-1 max-w-sm">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Cari pembeli, produk, atau ID..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-950/60 dark:bg-slate-950/60 light:bg-slate-100 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-300 text-slate-100 dark:text-slate-100 light:text-slate-900 focus:outline-none focus:ring-1 focus:ring-emerald-500"
          />
        </div>

        <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0">
          {(['All', 'Selesai', 'Dikirim', 'Diproses'] as const).map((st) => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                statusFilter === st
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                  : 'text-slate-400 dark:text-slate-400 light:text-slate-600 hover:bg-slate-800 dark:hover:bg-slate-800 light:hover:bg-slate-200'
              }`}
            >
              {st === 'All' ? 'Semua Status' : st}
            </button>
          ))}
        </div>
      </div>

      {/* Spreadsheet Table View */}
      <div className="overflow-x-auto rounded-2xl border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-slate-950/90 dark:bg-slate-950/90 light:bg-slate-100 text-slate-400 dark:text-slate-400 light:text-slate-600 font-semibold border-b border-slate-800/80 light:border-slate-200">
              <th className="py-3 px-3.5">ID Transaksi</th>
              <th className="py-3 px-3.5">Nama Pelanggan</th>
              <th className="py-3 px-3.5">Kanal Penjualan</th>
              <th className="py-3 px-3.5">Produk</th>
              <th className="py-3 px-3.5 text-center">Qty</th>
              <th className="py-3 px-3.5 text-right">Total</th>
              <th className="py-3 px-3.5 text-center">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 dark:divide-slate-800/60 light:divide-slate-200">
            {filteredRows.length === 0 ? (
              <tr>
                <td colSpan={7} className="py-8 text-center text-slate-500">
                  Tidak ada data yang cocok dengan pencarian "{search}".
                </td>
              </tr>
            ) : (
              filteredRows.map((row) => (
                <tr
                  key={row.id}
                  className="hover:bg-slate-800/40 dark:hover:bg-slate-800/40 light:hover:bg-slate-50 transition-colors"
                >
                  <td className="py-3 px-3.5 font-mono text-[11px] text-slate-400 font-medium">
                    {row.id}
                  </td>
                  <td className="py-3 px-3.5 font-semibold text-slate-200 dark:text-slate-200 light:text-slate-900">
                    {row.customer}
                  </td>
                  <td className="py-3 px-3.5 text-slate-400 dark:text-slate-400 light:text-slate-600">
                    <span className="px-2 py-0.5 rounded-md bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-200 text-[10px] font-medium">
                      {row.channel}
                    </span>
                  </td>
                  <td className="py-3 px-3.5 text-slate-300 dark:text-slate-300 light:text-slate-700 font-medium">
                    {row.product}
                  </td>
                  <td className="py-3 px-3.5 text-center text-slate-300 dark:text-slate-300 light:text-slate-700">
                    {row.qty}
                  </td>
                  <td className="py-3 px-3.5 text-right font-mono font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                    {formatRupiah(row.total)}
                  </td>
                  <td className="py-3 px-3.5 text-center">
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                        row.status === 'Selesai'
                          ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                          : row.status === 'Dikirim'
                          ? 'bg-blue-500/15 text-blue-400 border border-blue-500/30'
                          : 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                      }`}
                    >
                      {row.status === 'Selesai' && <CheckCircle className="w-3 h-3" />}
                      {row.status === 'Dikirim' && <Truck className="w-3 h-3" />}
                      {row.status === 'Diproses' && <Clock className="w-3 h-3" />}
                      <span>{row.status}</span>
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
