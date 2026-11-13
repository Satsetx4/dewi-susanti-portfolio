import type {
  PersonalInfo,
  EducationItem,
  ExperienceItem,
  SkillCategory,
  SpreadsheetRow,
  ChatScenario,
} from '../types/portfolio'

export const PERSONAL_INFO: PersonalInfo = {
  name: "Dewi Susanti",
  nickname: "Dewi",
  title: "Staf Administrasi Digital & Customer Service",
  tagline: "Merapikan data, melayani pelanggan dengan ramah, dan membantu operasional bisnis berjalan cepat & sistematis.",
  avatar: "/dewi_avatar.png",
  summary:
    "Saya merupakan lulusan SMK Negeri 1 Probolinggo dengan jurusan Bisnis Digital. Memiliki pengalaman PKL sebagai staf administrasi online dan pengolahan data. Terbiasa bekerja dalam tim, komunikatif, dan cekatan menghadapi pelanggan secara online. Siap bekerja di lingkungan dinamis dengan disiplin SOP perusahaan yang tinggi.",
  statusAvailability: "🟢 Terbuka untuk Kerja (Full-time / Kontrak / Remote)",
  availableFor: ["Staf Administrasi", "Customer Service Online", "Data Entry Specialist", "Admin Marketplace / Toko Online"],
  birthPlaceDate: "Probolinggo, 26 Juli 2007",
  gender: "Perempuan",
  maritalStatus: "Belum Menikah",
  nationality: "Indonesia",
  address: "Jl. Ky Ilyas, Jrebeng Kidul",
  city: "Kota Probolinggo, Jawa Timur",
  phone: "+62 858 5624 4374",
  whatsapp: "6285856244374",
  email: "santisanti261091@gmail.com",
}

export const EDUCATION_LIST: EducationItem[] = [
  {
    id: "smk",
    school: "SMK Negeri 1 Probolinggo",
    period: "2023 — 2026",
    degree: "Sekolah Menengah Kejuruan (SMK)",
    major: "Bisnis Digital",
    description:
      "Fokus kurikulum pada operasional bisnis digital, pembukuan & administrasi ritel, pemanfaatan spreadsheet tingkat lanjut, komunikasi pelayanan pelanggan, dan manajemen toko daring.",
    highlights: [
      "Penguasaan administrasi pengolahan data digital & pencatatan pesanan",
      "Praktik customer service online berbasis SOP komunikasi ramah",
      "Manajemen pengarsipan dokumen berbasis cloud (Google Workspace)",
      "Penyelesaian program PKL Administrasi dengan nilai memuaskan",
    ],
    icon: "GraduationCap",
  },
  {
    id: "smp",
    school: "SMP Negeri 8 Probolinggo",
    period: "2019 — 2022",
    degree: "Sekolah Menengah Pertama (SMP)",
    description:
      "Aktif dalam kegiatan sekolah, membangun kedisiplinan, dasar literasi teknologi informasi, dan kemampuan bekerja sama dalam tim.",
    highlights: [
      "Dasar komputasi & aplikasi perkantoran",
      "Karakter kepemimpinan dan kerja sama kelompok",
    ],
    icon: "BookOpen",
  },
  {
    id: "sd",
    school: "SDN Kedopok 2",
    period: "2013 — 2016",
    degree: "Sekolah Dasar (SD)",
    description:
      "Pondasi awal pendidikan karakter, kejujuran, ketelitian berhitung, dan tata krama komunikasi.",
    highlights: ["Pondasi dasar literasi & matematika dasar"],
    icon: "School",
  },
]

export const EXPERIENCE_LIST: ExperienceItem[] = [
  {
    id: "admin-pkl",
    role: "Staf Administrasi & Customer Service",
    period: "2025 — 2026",
    type: "Praktik Kerja Lapangan (PKL) / Pengalaman Kerja",
    institution: "Unit Usaha & Operasional Penjualan Digital",
    summary:
      "Bertanggung jawab penuh atas kelancaran rekapitulasi data pesanan harian, pengarsipan berkas dokumen digital, serta garda depan pelayanan tanya-jawab pelanggan online.",
    responsibilities: [
      "Membantu operasional penjualan harian dan pelayanan transaksi digital secara berkala.",
      "Mengelola dan mengarsipkan dokumen perusahaan secara rapi dan sistematis di sistem digital & Google Drive.",
      "Menginput data pesanan masuk, mencocokkan bukti transfer, dan memperbarui status pengiriman barang.",
      "Melayani customer secara online via chat dengan gaya komunikasi yang sopan, solutif, dan cepat tanggap.",
      "Membuat rekapitulasi berkala menggunakan Microsoft Excel dan Google Sheets untuk laporan pimpinan.",
    ],
    tools: ["Microsoft Excel", "Google Sheets", "WhatsApp Business", "Google Drive", "Marketplace Tools"],
    keyAchievement: "Menjaga akurasi entri data pesanan 99% tanpa selisih dan mempertahankan rating kepuasan chat pelanggan.",
  },
]

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Administrasi & Pengolahan Data",
    description: "Keahlian teknis dalam merapikan, menginput, dan mengolah data operasional.",
    items: [
      {
        name: "Microsoft Excel & Google Sheets",
        level: "Tingkat Mahir Terapan",
        icon: "FileSpreadsheet",
        proficiency: 92,
        description: "Rumus perhitungan (SUM, AVERAGE, IF, VLOOKUP dasar), sorting, filtering, pembuatan tabel rekap rapi.",
      },
      {
        name: "Penginputan & Validasi Data (Data Entry)",
        level: "Sangat Teliti",
        icon: "Database",
        proficiency: 95,
        description: "Kecepatan mengetik terukur, ketelitian cross-check nota penjualan, dan minimalisir kesalahan ketik.",
      },
      {
        name: "Pengarsipan Digital (Document Filing)",
        level: "Sistematis",
        icon: "FolderArchive",
        proficiency: 90,
        description: "Penamaan folder standar, backup Google Drive, dan kemudahan pencarian dokumen arsip kembali.",
      },
    ],
  },
  {
    category: "Pelayanan Pelanggan (Customer Service)",
    description: "Komunikasi dua arah yang ramah, hangat, dan memuaskan pelanggan.",
    items: [
      {
        name: "Online Chat Support & WhatsApp",
        level: "Komunikatif & Sopan",
        icon: "MessageSquare",
        proficiency: 94,
        description: "Menjawab pertanyaan produk, panduan pemesanan, dan follow-up pengiriman dengan bahasa santun.",
      },
      {
        name: "Penyelesaian Kendala (Problem Solving)",
        level: "Tenang & Solutif",
        icon: "Headphones",
        proficiency: 88,
        description: "Menangani pertanyaan keterlambatan paket atau komplain dengan empati dan koordinasi tim logistik.",
      },
      {
        name: "Operasional Marketplace & Bisnis Digital",
        level: "Fasih Alur",
        icon: "ShoppingBag",
        proficiency: 89,
        description: "Memahami flow pesanan baru, resi otomatis, pengemasan, dan update stok barang di e-commerce.",
      },
    ],
  },
  {
    category: "Soft Skills & Etika Kerja",
    description: "Nilai kepribadian yang menjamin integritas di tempat kerja.",
    items: [
      {
        name: "Jujur & Bertanggung Jawab",
        level: "Prinsip Utama",
        icon: "ShieldCheck",
        proficiency: 100,
        description: "Amanah memegang berkas sensitif, pencatatan kas, dan data privasi pembeli.",
      },
      {
        name: "Kerja Sama Tim (Teamwork)",
        level: "Kolaboratif",
        icon: "Users",
        proficiency: 92,
        description: "Mudah berkoordinasi dengan bagian gudang, kurir, maupun supervisor.",
      },
      {
        name: "Adaptasi Lingkungan Cepat",
        level: "Pembelajar Cepat",
        icon: "Zap",
        proficiency: 90,
        description: "Cepat memahami SOP baru, software perusahaan baru, dan ritme kerja dinamis.",
      },
    ],
  },
]

export const SPREADSHEET_DEMO_DATA: SpreadsheetRow[] = [
  {
    id: "TRX-2026-081",
    customer: "Rina Handayani",
    channel: "WhatsApp Order",
    product: "Paket Hampers Premium Digital",
    qty: 2,
    total: 350000,
    status: "Selesai",
    date: "12 Nov 2026",
  },
  {
    id: "TRX-2026-082",
    customer: "Budi Pratama",
    channel: "Shopee Store",
    product: "Organizer Meja Akrilik A4",
    qty: 5,
    total: 425000,
    status: "Dikirim",
    date: "12 Nov 2026",
  },
  {
    id: "TRX-2026-083",
    customer: "Siti Nurhaliza",
    channel: "TikTok Shop",
    product: "Buku Catatan Agenda Kulit",
    qty: 1,
    total: 89000,
    status: "Diproses",
    date: "13 Nov 2026",
  },
  {
    id: "TRX-2026-084",
    customer: "Ahmad Fauzi",
    channel: "WhatsApp Order",
    product: "Kertas Binder Refill 100 Lembar",
    qty: 10,
    total: 210000,
    status: "Selesai",
    date: "13 Nov 2026",
  },
  {
    id: "TRX-2026-085",
    customer: "Dewi Lestari",
    channel: "Tokopedia",
    product: "Label Thermal Barcode 50x30",
    qty: 4,
    total: 160000,
    status: "Diproses",
    date: "13 Nov 2026",
  },
]

export const CHAT_SCENARIOS: ChatScenario[] = [
  {
    id: "ready-stock",
    label: "Tanya Ketersediaan Stok",
    customerQuery: "Halo Kak Dewi, apakah produk Organizer Meja Akrilik masih ready untuk kirim hari ini?",
    dewiResponse:
      "Halo Kak! Terima kasih sudah menghubungi kami 😊. Untuk produk Organizer Meja Akrilik saat ini READY STOK siap kirim ya Kak. Apabila pembayaran terkonfirmasi sebelum jam 15.00 WIB, paket Kakak langsung kami kirimkan sore ini juga. Apakah ada warna atau tipe khusus yang ingin Kakak pesan?",
    tips: "Menunjukkan respon hangat, kepastian stok, batasan waktu kirim (cut-off time), dan menawarkan bantuan kelanjutan.",
  },
  {
    id: "resi-tracking",
    label: "Cek Resi & Status Kirim",
    customerQuery: "Mbak, pesanan saya nomor TRX-082 sudah dikirim belum ya? Boleh minta nomor resinya?",
    dewiResponse:
      "Baik Kak Budi, mohon ditunggu sebentar ya, saya bantu periksa data di sistem 🙏... Pesanan Kakak dengan nomor TRX-082 sudah selesai dikemas dan saat ini sudah diserahkan ke kurir J&T dengan nomor resi JNT882910399. Kakak juga bisa pantau langsung via aplikasi ya. Terima kasih banyak atas kesabarannya!",
    tips: "Pengecekan data sistematis, sopan memohon waktu, menyertakan nomor resi akurat, dan menenangkan pelanggan.",
  },
  {
    id: "wholesale-discount",
    label: "Permintaan Harga Grosir",
    customerQuery: "Halo, kalau saya mau order Kertas Binder 50 pack untuk keperluan kantor apakah ada diskon khusus?",
    dewiResponse:
      "Halo Kak! Tentu ada harga spesial grosir untuk pemesanan 50 pack ke atas 🎉. Kami bisa berikan potongan harga 12% serta opsi pengiriman kargo hemat agar ongkir lebih terjangkau. Bolehkah saya buatkan surat penawaran (invoice draft) resminya terlebih dahulu, Kak?",
    tips: "Antusias menyambut prospek B2B/grosir, memberikan benefit diskon dan solusi logistik, serta langsung mengambil inisiatif invoicing.",
  },
]
