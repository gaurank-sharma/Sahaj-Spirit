import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Copy, Check } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const vp = { once: true, margin: '-60px' };

const team = [
  { initials: 'SJ', name: 'Sandesh Jain', role: 'President',      phone: '+91 96252 29294' },
  { initials: 'PJ', name: 'Parul Jain',   role: 'Vice President', phone: '+91 89309 08824' },
  { initials: 'SJ', name: 'Sahaj Jain',   role: 'Treasurer',      phone: '+91 96506 68139' },
];

const EMAIL = 'Teamsahajspirit@gmail.com';

const cities = [
  { name: 'Hastinapur',   x: 71, y: 22 },
  { name: 'Khatauli',     x: 65, y: 31 },
  { name: 'Meerut',       x: 58, y: 40 },
  { name: 'Khekda',       x: 54, y: 49 },
  { name: 'Ghaziabad',    x: 46, y: 53 },
  { name: 'Delhi',        x: 28, y: 55 },
  { name: 'Noida',        x: 38, y: 58 },
  { name: 'Greater Noida',x: 49, y: 60 },
  { name: 'Gurugram',     x: 23, y: 65 },
];

const INQUIRY_OPTIONS = [
  'General Inquiry',
  'Volunteer / Join the Team',
  'Event Registration',
  'Sponsorship',
  'Media & Press',
  'Other',
];

export default function Contact() {
  const [form, setForm]       = useState({ name: '', email: '', phone: '', topic: 'General Inquiry', message: '' });
  const [sent, setSent]       = useState(false);
  const [copied, setCopied]   = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    await new Promise(r => setTimeout(r, 600));
    setSent(true);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main style={{ background: '#FAF8F3' }}>

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="pt-36 pb-20 px-6 text-center">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.p variants={fadeUp}
            className="text-[10px] tracking-[0.5em] uppercase text-teal font-semibold mb-8">
            Contact
          </motion.p>
          <motion.h1 variants={fadeUp}
            className="font-display font-light text-6xl md:text-7xl lg:text-8xl text-charcoal leading-[1.05] mb-8">
            We&apos;d love to hear<br />from you.
          </motion.h1>
          <motion.p variants={fadeUp}
            className="font-display italic text-lg md:text-xl text-warm-gray max-w-xl mx-auto">
            Whether you have a question, want to volunteer, or just need to share something
            — we&apos;re here.
          </motion.p>
        </motion.div>
      </section>

      {/* ─── FORM + CONTACTS ──────────────────────────────────── */}
      <section className="py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* LEFT: Form */}
          <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger}>
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-24 text-center">
                <div className="w-14 h-14 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-6">
                  <Check size={24} className="text-teal" />
                </div>
                <h3 className="font-display text-3xl text-charcoal font-light mb-3">Message sent.</h3>
                <p className="text-warm-gray text-sm">We&apos;ll get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                {[
                  { label: 'Your Name',            name: 'name',  type: 'text',  required: true  },
                  { label: 'Your Email',           name: 'email', type: 'email', required: true  },
                  { label: 'Your Phone (Optional)',name: 'phone', type: 'tel',   required: false },
                ].map(({ label, name, type, required }) => (
                  <motion.div key={name} variants={fadeUp} className="flex flex-col gap-2">
                    <label className="text-[10px] tracking-[0.35em] uppercase text-charcoal/50">{label}</label>
                    <input
                      name={name} type={type} required={required}
                      value={form[name]} onChange={handleChange}
                      className="bg-transparent border-b border-charcoal/15 focus:border-teal outline-none py-2 text-charcoal text-base transition-colors duration-200 placeholder:text-charcoal/20"
                    />
                  </motion.div>
                ))}

                <motion.div variants={fadeUp} className="flex flex-col gap-2">
                  <label className="text-[10px] tracking-[0.35em] uppercase text-charcoal/50">What&apos;s on your mind?</label>
                  <select
                    name="topic" value={form.topic} onChange={handleChange}
                    className="bg-transparent border-b border-charcoal/15 focus:border-teal outline-none py-2 text-charcoal text-base transition-colors duration-200 appearance-none cursor-pointer">
                    {INQUIRY_OPTIONS.map(o => <option key={o}>{o}</option>)}
                  </select>
                </motion.div>

                <motion.div variants={fadeUp} className="flex flex-col gap-2">
                  <label className="text-[10px] tracking-[0.35em] uppercase text-charcoal/50">Your Message</label>
                  <textarea
                    name="message" required rows={4} value={form.message} onChange={handleChange}
                    className="bg-transparent border-b border-charcoal/15 focus:border-teal outline-none py-2 text-charcoal text-base transition-colors duration-200 resize-none placeholder:text-charcoal/20"
                  />
                </motion.div>

                <motion.div variants={fadeUp}>
                  <button type="submit"
                    className="px-8 py-4 bg-orange text-white text-sm font-medium rounded-full hover:brightness-110 transition-all duration-300"
                    style={{ boxShadow: '0 8px 24px rgba(212,113,42,0.35)' }}>
                    Send your message &nbsp;→
                  </button>
                </motion.div>
              </form>
            )}
          </motion.div>

          {/* RIGHT: Contact cards */}
          <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger}
            className="flex flex-col gap-4">

            {team.map(({ initials, name, role, phone }) => (
              <motion.div key={name} variants={fadeUp}
                className="flex items-center gap-4 bg-white rounded-2xl px-6 py-5 border border-cream-dark">
                <div className="w-11 h-11 rounded-full bg-teal flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-semibold tracking-wide">{initials}</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-charcoal text-sm">{name}</p>
                  <p className="text-[10px] tracking-[0.25em] uppercase text-teal mt-0.5">{role}</p>
                </div>
                <a href={`tel:${phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 text-charcoal/50 hover:text-teal transition-colors duration-200">
                  <Phone size={14} strokeWidth={1.5} />
                  <span className="text-sm">{phone}</span>
                </a>
              </motion.div>
            ))}

            {/* Email card */}
            <motion.div variants={fadeUp}
              className="flex items-center gap-4 rounded-2xl px-6 py-5 border border-cream-dark"
              style={{ background: '#FDF4EE' }}>
              <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: '#FAE4D4' }}>
                <Mail size={18} style={{ color: '#D4712A' }} strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <p className="text-[10px] tracking-[0.25em] uppercase text-warm-gray mb-0.5">Email</p>
                <a href={`mailto:${EMAIL}`} className="text-sm text-charcoal hover:text-teal transition-colors">
                  {EMAIL}
                </a>
              </div>
              <button onClick={copyEmail}
                className="text-charcoal/30 hover:text-teal transition-colors duration-200 p-1">
                {copied ? <Check size={16} className="text-teal" /> : <Copy size={16} strokeWidth={1.5} />}
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── REGIONS WE SERVE ─────────────────────────────────── */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger}
            className="mb-12">
            <motion.p variants={fadeUp}
              className="text-[10px] tracking-[0.45em] uppercase text-teal font-semibold mb-5">
              Regions We Serve
            </motion.p>
            <motion.h2 variants={fadeUp}
              className="font-display text-5xl md:text-6xl lg:text-7xl text-charcoal">
              Rooted across North India.
            </motion.h2>
          </motion.div>

          {/* Map container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={vp} transition={{ duration: 0.9 }}
            className="relative bg-white rounded-3xl border border-cream-dark overflow-hidden"
            style={{ height: 420 }}>

            {/* Organic blob background */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path
                d="M20,30 C25,15 50,10 70,18 C85,24 88,40 82,58 C76,74 60,82 42,80 C24,78 12,70 14,55 C16,42 15,45 20,30 Z"
                fill="none" stroke="#CCE8E2" strokeWidth="0.5" strokeDasharray="2 1.5"
              />
              <path
                d="M20,30 C25,15 50,10 70,18 C85,24 88,40 82,58 C76,74 60,82 42,80 C24,78 12,70 14,55 C16,42 15,45 20,30 Z"
                fill="#E8F4F1" opacity="0.6"
              />
            </svg>

            {/* City dots */}
            {cities.map(({ name, x, y }, i) => (
              <motion.div key={name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={vp}
                transition={{ delay: i * 0.07, duration: 0.4, ease: 'backOut' }}
                className="absolute flex items-center gap-1.5"
                style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}>
                <div className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{ background: '#007D78', opacity: 0.75 }} />
                <span className="text-[11px] text-charcoal/60 whitespace-nowrap font-medium">{name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </main>
  );
}
