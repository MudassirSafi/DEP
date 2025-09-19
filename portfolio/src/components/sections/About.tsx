import { motion } from 'framer-motion'

export function About() {
  return (
    <section id="about" className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 max-w-3xl text-slate-300"
        >
          I’m a frontend developer focused on crafting delightful user experiences with modern web technologies. I care about performance, accessibility, and clean architecture.
        </motion.p>
      </div>
    </section>
  )
}

