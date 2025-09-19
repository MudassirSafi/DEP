import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5 } from 'react-icons/fa'

const skills = [
  { name: 'React', icon: FaReact, color: 'from-cyan-400 to-blue-500' },
  { name: 'TypeScript', icon: FaReact, color: 'from-sky-400 to-indigo-500' },
  { name: 'CSS / Tailwind', icon: FaCss3Alt, color: 'from-indigo-400 to-fuchsia-500' },
  { name: 'HTML', icon: FaHtml5, color: 'from-orange-400 to-rose-500' },
  { name: 'Node.js', icon: FaNodeJs, color: 'from-emerald-400 to-teal-500' },
]

export function Skills() {
  return (
    <section id="skills" className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white"
        >
          Skills
        </motion.h2>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4 text-center"
            >
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40`} />
              <s.icon className="mx-auto size-8 text-white" />
              <div className="mt-2 text-sm text-slate-200">{s.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

