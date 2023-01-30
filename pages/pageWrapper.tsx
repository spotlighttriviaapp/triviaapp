import { motion } from 'framer-motion'

interface Props {
  children: React.ReactNode
}

export const PageWrapper = ({ children }: Props) => (
  <motion.main
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.main>
)
