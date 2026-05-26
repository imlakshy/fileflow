"use client"

import { motion } from "framer-motion"
import { FileImage, FileAudio, FileVideo, FileText, Archive, Scissors } from "lucide-react"

const icons = [
  { Icon: FileImage, color: "text-cyan-400", delay: 0, x: "10%", y: "20%" },
  { Icon: FileAudio, color: "text-emerald-400", delay: 1, x: "85%", y: "15%" },
  { Icon: FileVideo, color: "text-pink-400", delay: 2, x: "75%", y: "70%" },
  { Icon: FileText, color: "text-amber-400", delay: 0.5, x: "15%", y: "65%" },
  { Icon: Archive, color: "text-indigo-400", delay: 1.5, x: "90%", y: "45%" },
  { Icon: Scissors, color: "text-rose-400", delay: 2.5, x: "5%", y: "40%" },
]

export function FloatingIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map(({ Icon, color, delay, x, y }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1, delay: delay * 0.3 }}
          className="absolute"
          style={{ left: x, top: y }}
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 6,
              delay: delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="rounded-2xl bg-secondary/30 p-4 backdrop-blur-sm">
              <Icon className={`h-8 w-8 ${color} sm:h-12 sm:w-12`} />
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}
