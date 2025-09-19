import { motion } from 'framer-motion'

export function Contact() {
  return (
    <section id="contact" className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white"
        >
          Contact
        </motion.h2>
        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-8 grid gap-4 rounded-xl border border-white/10 bg-white/5 p-6 sm:grid-cols-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="sm:col-span-1">
            <label className="block text-sm text-slate-300">Name</label>
            <input className="mt-1 w-full rounded-md border border-white/10 bg-slate-900 px-3 py-2 text-sm text-white outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div className="sm:col-span-1">
            <label className="block text-sm text-slate-300">Email</label>
            <input type="email" className="mt-1 w-full rounded-md border border-white/10 bg-slate-900 px-3 py-2 text-sm text-white outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm text-slate-300">Message</label>
            <textarea rows={4} className="mt-1 w-full rounded-md border border-white/10 bg-slate-900 px-3 py-2 text-sm text-white outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div className="sm:col-span-2">
            <button className="inline-flex items-center rounded-md bg-indigo-500 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-400">
              Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}

