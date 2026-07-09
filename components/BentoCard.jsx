import BentoTilt from './BentoTilt'
import AnimatedGradient from './fancy/animated-gradient-with-svg'
import { motion } from "motion/react"

const BentoCard = ({ children, className, colors = ["#cdff4f", "#ff9a3c", "#1b1814"] }) => {
  return (
    <BentoTilt className={`group relative overflow-hidden rounded-2xl border border-line bg-coal ${className}`}>
      {/* Ambient on-brand glow, kept subtle behind a dark veil */}
      <div className="pointer-events-none absolute inset-0 opacity-40 transition-opacity duration-500 group-hover:opacity-70">
        <AnimatedGradient colors={colors} speed={0.1} blur="medium" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-ink/70" />
      {/* Hover accent ring */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-transparent transition-colors duration-500 group-hover:ring-acid/25" />

      <motion.div
        className="relative z-10 h-full p-4 text-bone sm:p-5 md:p-7"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.div>
    </BentoTilt>
  )
}

export default BentoCard
