import { motion } from 'framer-motion'

const projects = [
  {
    title: 'E-Commerce UI',
    image:
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1600&auto=format&fit=crop',
    tags: ['React', 'Tailwind', 'Stripe'],
  },
  {
    title: 'SaaS Dashboard',
    image:
      'https://images.unsplash.com/photo-1551281044-8d8c9fe1ede4?q=80&w=1600&auto=format&fit=crop',
    tags: ['TypeScript', 'Charts', 'API'],
  },
  {
    title: 'Portfolio Website',
    image:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1600&auto=format&fit=crop',
    tags: ['Vite', 'Framer Motion'],
  },
]

export function Projects() {
  return (
    <section id="projects" className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white"
        >
          Projects
        </motion.h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <img src={p.image} alt="" className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="p-4">
                <div className="text-base font-semibold text-white">{p.title}</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/15 px-2 py-0.5 text-xs text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

