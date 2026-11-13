import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from './context/ThemeContext'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { PageTransition } from './components/layout/PageTransition'
import { MobileBottomNav } from './components/navigation/MobileBottomNav'
import { FloatingWhatsApp } from './components/ui/FloatingWhatsApp'
import { HomePage } from './components/pages/HomePage'
import { AboutPage } from './components/pages/AboutPage'
import { WorksPage } from './components/pages/WorksPage'
import { EducationPage } from './components/pages/EducationPage'
import { ContactPage } from './components/pages/ContactPage'
import type { NavTabId } from './types/portfolio'

export function App() {
  // Sync tab with URL hash and localStorage defensively
  const [activeTab, setActiveTab] = useState<NavTabId>(() => {
    try {
      const hash = window.location.hash.replace('#', '') as NavTabId
      if (['home', 'about', 'works', 'education', 'contact'].includes(hash)) {
        return hash
      }
      const saved = localStorage.getItem('dewi_active_tab') as NavTabId
      if (['home', 'about', 'works', 'education', 'contact'].includes(saved)) {
        return saved
      }
    } catch {}
    return 'home'
  })

  // Handle browser back/forward navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as NavTabId
      if (['home', 'about', 'works', 'education', 'contact'].includes(hash)) {
        setActiveTab(hash)
      }
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const handleTabChange = (tab: NavTabId) => {
    setActiveTab(tab)
    window.location.hash = tab
    try {
      localStorage.setItem('dewi_active_tab', tab)
    } catch {}
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-slate-950 dark:bg-slate-950 light:bg-slate-50 text-slate-100 dark:text-slate-100 light:text-slate-900 transition-colors duration-200 selection:bg-emerald-500/30 selection:text-emerald-300">
        {/* Top Navbar */}
        <Navbar activeTab={activeTab} onTabChange={handleTabChange} />

        {/* Animated Page Transition Area */}
        <div className="flex-1 w-full">
          <AnimatePresence mode="wait">
            {activeTab === 'home' && (
              <PageTransition pageKey="home">
                <HomePage onNavigate={handleTabChange} />
              </PageTransition>
            )}

            {activeTab === 'about' && (
              <PageTransition pageKey="about">
                <AboutPage onNavigate={handleTabChange} />
              </PageTransition>
            )}

            {activeTab === 'works' && (
              <PageTransition pageKey="works">
                <WorksPage onNavigate={handleTabChange} />
              </PageTransition>
            )}

            {activeTab === 'education' && (
              <PageTransition pageKey="education">
                <EducationPage onNavigate={handleTabChange} />
              </PageTransition>
            )}

            {activeTab === 'contact' && (
              <PageTransition pageKey="contact">
                <ContactPage />
              </PageTransition>
            )}
          </AnimatePresence>
        </div>

        {/* Floating WhatsApp CTA */}
        <FloatingWhatsApp />

        {/* Bottom Navigation for Mobile */}
        <MobileBottomNav activeTab={activeTab} onTabChange={handleTabChange} />

        {/* Global Footer */}
        <Footer onTabChange={handleTabChange} />
      </div>
    </ThemeProvider>
  )
}

export default App
