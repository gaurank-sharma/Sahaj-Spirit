import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Users, Sun, Moon, Coffee, Leaf, Music, Heart } from 'lucide-react';

const IMG = {
  // All unique — none repeated from Home or About pages
  hero:    'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1920&q=80',
  journey: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1200&q=80',
  day1:    'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
  day2:    '/tour2.png',
  day3:    '/tour3.jpg',
  day4:    'https://images.unsplash.com/photo-1476234251651-f353703a034d?auto=format&fit=crop&w=1200&q=80',
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.25, 0.1, 0.25, 1] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.13 } } };

const highlights = [
  { Icon: Sun,     title: 'Morning Rituals',     desc: 'Begin each day gently — a quiet check-in, some movement, and the kind of stillness that sets the tone.' },
  { Icon: Coffee,  title: 'Shared Meals',         desc: 'Food eaten together tastes different. Every meal is a conversation waiting to begin.' },
  { Icon: Leaf,    title: 'Nature Walks',          desc: "Moving through nature without a destination. Just awareness of what's alive around you — and within you." },
  { Icon: Moon,    title: 'Evening Circles',       desc: 'End each day in a storytelling circle. Everyone carries something worth sharing.' },
  { Icon: Music,   title: 'Poetry & Music',        desc: 'Live music, spoken word, and the kind of art that holds the feelings you couldn\'t find words for.' },
  { Icon: Heart,   title: 'The Sahajometer',       desc: 'An honest, gentle check-in with yourself — held in community, not in isolation.' },
];

const itinerary = [
  {
    day: 'Day 1',
    title: 'Arrive & Settle In',
    desc: 'Check in, find your room, take a slow walk. Meet people at your own pace — no forced icebreakers, no name tags. Just the quiet comfort of arriving somewhere that feels safe.',
    image: IMG.day1,
  },
  {
    day: 'Day 2',
    title: 'The Sahajometer Morning',
    desc: 'A gentle guided self-reflection session in the morning, followed by an afternoon of poetry and live music. The kind of day that surprises you with how much you were holding.',
    image: IMG.day2,
  },
  {
    day: 'Day 3',
    title: 'Into the Story',
    desc: 'Storytelling circles, a mindful nature walk, and an evening around the fire — where the most honest conversations happen, and where strangers stop feeling like strangers.',
    image: IMG.day3,
  },
  {
    day: 'Day 4',
    title: 'Carry It Forward',
    desc: "A gentle closing circle. You share what you're taking home — not souvenirs, but shifts. A quiet goodbye that somehow doesn't feel like goodbye at all.",
    image: IMG.day4,
  },
];

const INITIAL = { name: '', email: '', phone: '', city: '', why: '' };

export default function SahajTour() {
  const [form, setForm] = useState(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Connect to EmailJS — add your serviceId, templateId, publicKey
    await new Promise((res) => setTimeout(res, 1000));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <main>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-[75vh] flex items-end overflow-hidden pt-28">
        <div className="absolute inset-0">
          <img src={IMG.hero} alt="Sahaj Tour" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-16 md:pb-24 w-full">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-[10px] tracking-[0.4em] uppercase text-white/45 mb-5">
              The Journey
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-display font-light text-6xl md:text-8xl text-white leading-[1.05] max-w-3xl"
            >
              The Sahaj Tour.<br />
              <em className="italic" style={{ color: '#7ECCC6' }}>A journey inward.</em>
            </motion.h1>
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-6 mt-10 text-white/55 text-xs tracking-widest uppercase"
            >
              <span className="flex items-center gap-2"><Calendar size={13} strokeWidth={1.5} /> 4 Days · 3 Nights</span>
              <span className="flex items-center gap-2"><MapPin size={13} strokeWidth={1.5} /> Location TBA</span>
              <span className="flex items-center gap-2"><Users size={13} strokeWidth={1.5} /> Small Group · 20 Seats Only</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── ABOUT JOURNEY ────────────────────────────────────── */}
      <section className="py-24 md:py-36 bg-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center mb-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.p variants={fadeUp} className="section-label mb-5">About the Journey</motion.p>
              <motion.h2
                variants={fadeUp}
                className="font-display font-light text-5xl md:text-6xl text-charcoal leading-[1.1] mb-8"
              >
                Not a trip.<br />
                <em className="italic">A turning point.</em>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-warm-gray text-base md:text-lg leading-relaxed mb-5">
                The Sahaj Tour is a 4-day immersive experience — in nature, in community, in
                yourself. A small group of people who are ready to be real. Not performing. Not
                networking. Just being.
              </motion.p>
              <motion.p variants={fadeUp} className="text-warm-gray text-base leading-relaxed mb-5">
                Each day is shaped around a gentle rhythm: morning reflection, shared meals,
                creative expression, and evening storytelling. There is no rigid schedule.
                There is only space — and within that space, something real tends to happen.
              </motion.p>
              <motion.p variants={fadeUp} className="text-warm-gray text-base leading-relaxed">
                You will leave different. Not because something happened to you, but because
                something was allowed to happen in you.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden aspect-[4/5]"
            >
              <img src={IMG.journey} alt="Journey path" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="font-display text-2xl font-light italic leading-snug">
                  "Where you arrive is less important than<br />what you leave behind."
                </p>
              </div>
            </motion.div>
          </div>

          {/* Highlights grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="section-label mb-5">What to Expect</motion.p>
            <motion.h3
              variants={fadeUp}
              className="font-display font-light text-4xl md:text-5xl text-charcoal mb-12"
            >
              Elements of the experience.
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {highlights.map(({ Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                  className="bg-sage rounded-2xl p-7 flex flex-col gap-4 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center text-teal">
                    <Icon size={18} strokeWidth={1.5} />
                  </div>
                  <h4 className="font-display text-xl text-charcoal font-light">{title}</h4>
                  <p className="text-warm-gray text-sm leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── ITINERARY ────────────────────────────────────────── */}
      <section className="py-24 bg-sage">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mb-14"
          >
            <motion.p variants={fadeUp} className="section-label mb-5">Itinerary</motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display font-light text-5xl md:text-6xl text-charcoal"
            >
              Day by <em className="italic">day.</em>
            </motion.h2>
          </motion.div>

          <div className="flex flex-col gap-6">
            {itinerary.map(({ day, title, desc, image }, i) => (
              <motion.div
                key={day}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.65 }}
                className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-0 rounded-3xl overflow-hidden bg-white shadow-sm`}
              >
                <div className="w-full md:w-5/12 overflow-hidden aspect-[4/3] md:aspect-auto">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="w-full md:w-7/12 p-8 md:p-12 flex flex-col justify-center">
                  <span className="text-[10px] tracking-[0.35em] uppercase text-teal mb-4 font-medium">{day}</span>
                  <h3 className="font-display text-3xl md:text-4xl text-charcoal font-light mb-4">{title}</h3>
                  <p className="text-warm-gray text-base leading-relaxed max-w-sm">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── REGISTRATION ─────────────────────────────────────── */}
      <section id="register" className="py-24 md:py-36 bg-cream">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mb-12 text-center"
          >
            <motion.p variants={fadeUp} className="section-label mb-5">Registration</motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display font-light text-5xl md:text-6xl text-charcoal mb-5"
            >
              Begin the <em className="italic text-teal">journey.</em>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-warm-gray text-base leading-relaxed max-w-md mx-auto">
              Seats are limited to 20. Fill this in and we'll get back to you personally
              with all the details. No commitment required — just curiosity.
            </motion.p>
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20 bg-sage rounded-3xl border border-sage-dark"
            >
              <div className="w-16 h-16 rounded-full bg-teal/15 flex items-center justify-center mx-auto mb-6">
                <Leaf className="text-teal" size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-4xl text-charcoal font-light mb-3">
                You're on the path.
              </h3>
              <p className="text-warm-gray text-base max-w-sm mx-auto leading-relaxed">
                We've received your interest. Expect a warm message from us soon — no rush, no urgency. Just us, saying hello.
              </p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 bg-sage rounded-3xl p-8 md:p-12 border border-sage-dark"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] tracking-[0.25em] uppercase text-warm-gray">Full Name *</label>
                  <input
                    name="name" type="text" required value={form.name} onChange={handleChange}
                    placeholder="Your name"
                    className="bg-white border border-cream-dark focus:border-teal rounded-xl px-4 py-3.5 text-charcoal text-sm outline-none transition-colors placeholder:text-warm-gray/40"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] tracking-[0.25em] uppercase text-warm-gray">Email *</label>
                  <input
                    name="email" type="email" required value={form.email} onChange={handleChange}
                    placeholder="your@email.com"
                    className="bg-white border border-cream-dark focus:border-teal rounded-xl px-4 py-3.5 text-charcoal text-sm outline-none transition-colors placeholder:text-warm-gray/40"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] tracking-[0.25em] uppercase text-warm-gray">Phone</label>
                  <input
                    name="phone" type="tel" value={form.phone} onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="bg-white border border-cream-dark focus:border-teal rounded-xl px-4 py-3.5 text-charcoal text-sm outline-none transition-colors placeholder:text-warm-gray/40"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] tracking-[0.25em] uppercase text-warm-gray">City *</label>
                  <input
                    name="city" type="text" required value={form.city} onChange={handleChange}
                    placeholder="Where are you based?"
                    className="bg-white border border-cream-dark focus:border-teal rounded-xl px-4 py-3.5 text-charcoal text-sm outline-none transition-colors placeholder:text-warm-gray/40"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] tracking-[0.25em] uppercase text-warm-gray">
                  Why do you want to come? *
                </label>
                <textarea
                  name="why" required rows={5} value={form.why} onChange={handleChange}
                  placeholder="No right answer. Just tell us what's true for you right now..."
                  className="bg-white border border-cream-dark focus:border-teal rounded-xl px-4 py-3.5 text-charcoal text-sm outline-none transition-colors resize-none placeholder:text-warm-gray/40"
                />
              </div>
              <button
                type="submit" disabled={loading}
                className="w-full py-4 bg-teal text-white text-xs tracking-[0.25em] uppercase rounded-xl hover:bg-teal-dark transition-colors duration-200 disabled:opacity-60 mt-2"
              >
                {loading ? 'Sending...' : 'Register Interest'}
              </button>
              <p className="text-center text-[11px] text-warm-gray/60">
                No commitment required. We'll share details and you decide from there.
              </p>
            </motion.form>
          )}
        </div>
      </section>
    </main>
  );
}
