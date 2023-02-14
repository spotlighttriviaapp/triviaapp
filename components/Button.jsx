import { motion } from 'framer-motion'

export default function Button({ text }) {
  return (
    <motion.button
      className="
        m-1 flex items-center space-x-1 rounded-lg bg-gray-700 px-4 py-2 text-white
        outline outline-4 outline-transparent transition ease-in-out
        hover:bg-gray-800 hover:outline-dotted hover:outline-2 hover:outline-offset-2 hover:outline-gray-400
        focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2
        active:scale-95 active:bg-gray-900 active:outline active:outline-4
        active:outline-offset-0 active:outline-blue-400
      "
    >
      {text}
    </motion.button>
  )
}
