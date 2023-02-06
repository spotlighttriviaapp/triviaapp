import { motion } from 'framer-motion'

interface Props {
  children: React.ReactNode
}

export default function PageWrapper({ children }: Props) {
  return (
    <div className="h-full">
      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.main>
    </div>
  )
}
