import React, { useEffect } from 'react'
import { motion, type Variants } from 'framer-motion'

interface PageTransitionProps {
  children: React.ReactNode
  pageKey: string
  className?: string
}

const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 18,
    scale: 0.985,
    filter: 'blur(4px)',
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      type: 'spring' as const,
      stiffness: 260,
      damping: 24,
      mass: 0.8,
    },
  },
  exit: {
    opacity: 0,
    y: -14,
    scale: 0.99,
    filter: 'blur(2px)',
    transition: {
      duration: 0.22,
      ease: [0.32, 0, 0.67, 0],
    },
  },
}

export const PageTransition: React.FC<PageTransitionProps> = ({
  children,
  pageKey,
  className = '',
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pageKey])

  return (
    <motion.main
      key={pageKey}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`w-full max-w-6xl mx-auto px-4 py-6 md:py-10 pb-28 md:pb-16 ${className}`}
    >
      {children}
    </motion.main>
  )
}
