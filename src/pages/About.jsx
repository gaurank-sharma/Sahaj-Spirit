import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.25, 0.1, 0.25, 1] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const vp = { once: true, margin: '-60px' };

const whatWeDo = [
  { title: 'Youth Events',               desc: 'Engaging gatherings designed to connect and inspire young minds rooted in Jain values and community spirit.' },
  { title: 'Meditation & Sessions',      desc: 'Guided meditation and spiritual learning sessions — a space for inner peace, clarity, and conscious living.' },
  { title: 'Activities & Performances',  desc: 'Creative and cultural activities, from spoken word to music, that celebrate the richness of Jain culture.' },
  { title: 'Spiritual + Modern Learning',desc: 'Blending timeless Jain wisdom with contemporary, relatable formats — making ancient philosophy feel alive today.' },
];

const team = [
  { initials: 'SJ', name: 'Sandesh Jain', role: 'President',      desc: 'Leads the overall vision and direction of Sahaj Spirit, ensuring every initiative reflects the values of simplicity, service, and inner peace.' },
  { initials: 'PJ', name: 'Parul Jain',   role: 'Vice President', desc: 'Oversees operations, community outreach, and volunteer coordination — keeping the Sahyogi team aligned and inspired.' },
  { initials: 'SJ', name: 'Sahaj Jain',   role: 'Treasurer',      desc: 'Founded Sahaj Spirit in 2024. Manages financial planning and ensures resources are directed meaningfully toward youth impact.' },
];

export default function About() {
  return (
    <main style={{ background: '#FAF8F3' }}>

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="pt-36 pb-20 px-6 md:px-12 lg:px-20 text-center"
        style={{ background: 'linear-gradient(135deg,#ffffff 0%,#edfaf8 50%,#d0ece8 100%)' }}>
        <motion.div initial="hidden" animate="visible" variants={stagger}
          className="max-w-4xl mx-auto">
          <motion.p variants={fadeUp}
            className="text-[10px] tracking-[0.5em] uppercase text-teal font-semibold mb-8">
            About Us
          </motion.p>
          <motion.h1 variants={fadeUp}
            className="font-display font-light text-6xl md:text-7xl lg:text-8xl text-charcoal leading-[1.04] mb-8">
            A Jain Youth Foundation.<br />
            <em className="italic" style={{ color: '#007D78' }}>Established 2024.</em>
          </motion.h1>
          <motion.p variants={fadeUp}
            className="font-display italic text-xl text-warm-gray max-w-2xl mx-auto">
            Guiding youth towards simplicity, peace, and inner happiness — through Jain
            philosophy presented in a modern, engaging way.
          </motion.p>
        </motion.div>
      </section>

      {/* ─── WHO WE ARE ───────────────────────────────────────── */}
      <section className="py-24 md:py-36 px-6 md:px-12 lg:px-20" style={{ background: '#ffffff' }}>
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger}>
            <motion.p variants={fadeUp}
              className="text-[10px] tracking-[0.45em] uppercase text-teal font-semibold mb-8">
              Who We Are
            </motion.p>
            <motion.p variants={fadeUp}
              className="font-display font-light text-3xl md:text-4xl lg:text-5xl text-charcoal leading-relaxed mb-10">
              Sahaj Spirit is a Jain youth foundation — a soulful alliance of humans who
              believe in guiding a generation towards inner happiness through the timeless
              wisdom of Jain philosophy.
            </motion.p>
            <motion.div variants={fadeUp}
              className="h-px w-full bg-cream-dark mb-10" />
            <motion.div variants={fadeUp}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 text-charcoal/60 text-base leading-relaxed">
              <p>We present Jain philosophy not as a set of rules, but as a living,
                breathing way of being — accessible, relatable, and deeply meaningful
                for today&apos;s youth.</p>
              <p>Our approach brings together music, meditation, storytelling, and
                sacred experiences. Every programme is designed to move people —
                not just inform them.</p>
              <p>With 50+ dedicated Sahyogi volunteers across Delhi NCR, we create
                experiences that stay with participants long after the day ends.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── WHAT WE DO ───────────────────────────────────────── */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20" style={{ background: '#FAF8F3' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger}
            className="mb-16">
            <motion.p variants={fadeUp}
              className="text-[10px] tracking-[0.45em] uppercase text-teal font-semibold mb-6">
              What We Do
            </motion.p>
            <motion.h2 variants={fadeUp}
              className="font-display text-5xl md:text-6xl text-charcoal leading-[1.05]">
              Sahaj Spirit brings together<br />
              <em className="italic" style={{ color: '#007D78' }}>meaningful experiences</em>
              {' '}for youth.
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {whatWeDo.map(({ title, desc }, i) => (
              <motion.div key={title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={vp} transition={{ delay: i * 0.09, duration: 0.75 }}
                className="bg-white rounded-2xl p-8 border border-cream-dark">
                <h3 className="font-display text-2xl text-charcoal font-light mb-4">{title}</h3>
                <p className="text-charcoal/55 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OUR VISION ───────────────────────────────────────── */}
      <section className="py-24 md:py-32 px-6 text-center" style={{ background: '#1B20A8' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger}
          className="max-w-4xl mx-auto">
          <motion.p variants={fadeUp}
            className="text-[10px] tracking-[0.45em] uppercase font-semibold mb-8"
            style={{ color: '#D4712A' }}>
            Our Vision
          </motion.p>
          <motion.p variants={fadeUp}
            className="font-display font-light text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-10">
            To help youth live a peaceful, happy, and meaningful life through{' '}
            <em className="italic" style={{ color: '#7ECCC6' }}>Sahajta.</em>
          </motion.p>
          <motion.p variants={fadeUp}
            className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Sahajta — the art of living naturally and effortlessly — is at the heart of
            everything we do. We believe that when youth are rooted in simplicity and inner
            calm, they flourish in every area of life.
          </motion.p>
        </motion.div>
      </section>

      {/* ─── OUR TEAM ─────────────────────────────────────────── */}
      <section className="py-24 md:py-36 px-6 md:px-12 lg:px-20" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger}
            className="mb-16">
            <motion.p variants={fadeUp}
              className="text-[10px] tracking-[0.45em] uppercase text-teal font-semibold mb-6">
              Our Team
            </motion.p>
            <motion.h2 variants={fadeUp}
              className="font-display text-5xl md:text-6xl text-charcoal">
              Faces behind <em className="italic" style={{ color: '#007D78' }}>Sahaj.</em>
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-warm-gray text-base max-w-lg">
              50 dedicated Sahyogi volunteers — each assigned a specific responsibility,
              united by one shared purpose.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map(({ initials, name, role, desc }, i) => (
              <motion.div key={name}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={vp} transition={{ delay: i * 0.1, duration: 0.75 }}
                className="bg-white rounded-2xl p-8 border border-cream-dark">
                <div className="w-14 h-14 rounded-full bg-teal flex items-center justify-center mb-6">
                  <span className="text-white font-semibold tracking-wide">{initials}</span>
                </div>
                <h3 className="font-display text-2xl text-charcoal font-light mb-1">{name}</h3>
                <p className="text-[10px] tracking-[0.25em] uppercase text-teal mb-5">{role}</p>
                <p className="text-charcoal/55 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── JOIN AS SAHIYOGI ─────────────────────────────────── */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20" style={{ background: '#FAF8F3' }}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger}>
            <motion.p variants={fadeUp}
              className="text-[10px] tracking-[0.45em] uppercase text-teal font-semibold mb-6">
              Get Involved
            </motion.p>
            <motion.h2 variants={fadeUp}
              className="font-display text-5xl md:text-6xl text-charcoal mb-6">
              Want to be a{' '}
              <em className="italic" style={{ color: '#007D78' }}>Sahiyogi?</em>
            </motion.h2>
            <motion.p variants={fadeUp}
              className="text-charcoal/60 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10">
              If you want to be part of the team — as a volunteer, coordinator, or
              collaborator — we&apos;d love to have you. Roles include registration,
              hospitality, transport, social media, stage, and more.
            </motion.p>
            <motion.div variants={fadeUp} className="flex gap-4 justify-center flex-wrap">
              <Link to="/contact"
                className="px-8 py-4 bg-orange text-white text-sm font-medium rounded-full hover:brightness-110 transition-all duration-300"
                style={{ boxShadow: '0 8px 24px rgba(212,113,42,0.35)' }}>
                Get in Touch &nbsp;→
              </Link>
              <Link to="/sahaj-tour"
                className="px-8 py-4 border border-teal text-teal text-sm font-medium rounded-full hover:bg-teal hover:text-white transition-all duration-300">
                Explore Sahaj Tour
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
