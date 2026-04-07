'use client'
import { motion } from 'framer-motion'

export const FadeInUp = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.4, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
)

export const ScaleOnHover = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.15, ease: "easeOut" }}
    className="hover:border-blue-500/50 transition-colors"
  >
    {children}
  </motion.div>
)

export const StaggerContainer = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={{
      visible: { 
        transition: { 
          staggerChildren: 0.08,
          ease: "easeOut" 
        } 
      }
    }}
  >
    {children}
  </motion.div>
)

export const StaggerItem = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    }}
    transition={{ duration: 0.3, ease: "easeOut" }}
  >
    {children}
  </motion.div>
)