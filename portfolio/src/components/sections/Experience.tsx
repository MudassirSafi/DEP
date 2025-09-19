import { motion } from 'framer-motion'

const items = [
  { role: 'Frontend Developer', company: 'Tech Co', period: '2023 - Present', bullets: ['Built responsive UI', 'Optimized performance'] },
  { role: 'Web Developer', company: 'Startup Inc', period: '2021 - 2023', bullets: ['Owned component library', 'Led migration to TS'] },
]

export function Experience() {
  return (
    <section id="experience" className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white"
        >
          Experience
        </motion.h2>
        <div className="mt-8 space-y-8">
          {items.map((item, i) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="rounded-xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <div className="text-lg font-semibold text-white">
                  {item.role} · <span className="text-slate-300">{item.company}</span>
                </div>
                <div className="text-sm text-slate-400">{item.period}</div>
              </div>
              <ul className="mt-3 list-inside list-disc text-sm text-slate-300">
                {item.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

