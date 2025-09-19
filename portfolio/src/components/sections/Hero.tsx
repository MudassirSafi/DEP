import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-24 pt-28 md:grid-cols-2 md:pb-32 md:pt-36">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-pretty text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            Hi, I’m <span className="bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text text-transparent">Web Developer</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-4 max-w-prose text-base text-slate-300"
          >
            I build fast, accessible web apps with React, TypeScript, and Tailwind CSS.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mt-8 flex gap-3"
          >
            <a href="#projects" className="rounded-md bg-indigo-500 px-4 py-2 text-sm font-medium text-white shadow hover:bg-indigo-400">View Projects</a>
            <a href="#contact" className="rounded-md border border-white/15 px-4 py-2 text-sm font-medium text-white hover:bg-white/5">Contact Me</a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mt-8 flex items-center gap-4 text-slate-300"
          >
            <a href="https://github.com/" target="_blank" className="hover:text-white"><FaGithub size={22} /></a>
            <a href="https://linkedin.com/" target="_blank" className="hover:text-white"><FaLinkedin size={22} /></a>
          </motion.div>
        </div>
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative mx-auto aspect-square max-w-sm overflow-hidden rounded-3xl border border-white/10 shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1600&auto=format&fit=crop"
              alt="Profile"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-slate-950/50 via-transparent to-slate-950/50" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="absolute -left-6 -top-6 -z-10 h-40 w-40 rounded-full bg-indigo-500/30 blur-3xl"/>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="absolute -bottom-8 -right-10 -z-10 h-52 w-52 rounded-full bg-cyan-400/30 blur-3xl"/>
        </div>
      </div>
    </section>
  )
}

