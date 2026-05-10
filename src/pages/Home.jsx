import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';

const IMG = {
  storytelling: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80',
  poetry:       'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80',
  interactive:  'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80',
  community:    'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=800&q=80',
  hero:         'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1920&q=80',
  whoWeAre:     'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1200&q=80',
  temple:       'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80',
  journey1:     'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
  journey2:     'https://images.unsplash.com/photo-1476234251651-f353703a034d?auto=format&fit=crop&w=800&q=80',
  journey3:     'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80',
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.25, 0.1, 0.25, 1] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.14 } } };
const vp = { once: true, margin: '-80px' };

// Desktop: size/top/left   |   Mobile: mSize/mTop/mLeft
const floatCircles = [
  { src: IMG.storytelling, size: 148, top: '7%',  left: '25%', mSize: 85, mTop: '15%', mLeft: '27%' },
  { src: IMG.poetry,       size: 148, top: '15%', left: '49%', mSize: 85, mTop: '19%', mLeft: '55%' },
  { src: IMG.interactive,  size: 148, top: '34%', left: '60%', mSize: 85, mTop: '37%', mLeft: '67%' },
  { src: IMG.community,    size: 148, top: '55%', left: '49%', mSize: 85, mTop: '52%', mLeft: '53%' },
  { src: IMG.hero,         size: 148, top: '64%', left: '25%', mSize: 85, mTop: '56%', mLeft: '25%' },
];

const sahajAcronym = [
  { letter: 'S', word: 'Soulful' },
  { letter: 'A', word: 'Alliance of' },
  { letter: 'H', word: 'Happiness' },
  { letter: 'A', word: 'And' },
  { letter: 'J', word: 'Joy' },
];

const symbolMeanings = [
  { title: 'The S',              desc: 'The spirit of Sahaj. The flow of life lived naturally.' },
  { title: 'The Soul Figure',    desc: 'The pure, original state of every living being.' },
  { title: 'The Infinity Symbol',desc: 'The soul is eternal. Indestructible. Undefeated.' },
  { title: 'The Subtle Smile',   desc: 'Because the true nature of every soul is happiness.' },
];

export default function Home() {
  return (
    <main>

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex flex-col lg:flex-row"
        style={{ background: 'linear-gradient(118deg,#ffffff 0%,#f2fbf9 25%,#d0ece8 55%,#bde3dd 80%,#afdbd5 100%)' }}
      >
        {/* LEFT: Logo + circles */}
        <div className="relative w-full lg:w-1/2 min-h-[62vh] lg:min-h-screen">

          {/* MOBILE — orbital ring animation */}
          <div className="lg:hidden absolute inset-0 flex items-center justify-center">
            <div className="relative w-72 h-72">
              {/* Subtle orbit ring guide */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[214px] h-[214px] rounded-full border border-teal/20" />
              </div>
              {/* Rotating container */}
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
              >
                {floatCircles.map(({ src }, i) => {
                  const S = 72, R = 107, H = 144;
                  const a = (i / 5) * 2 * Math.PI;
                  return (
                    <div key={i} className="absolute"
                      style={{
                        width: S, height: S,
                        top:  H - S / 2 + (-R * Math.cos(a)),
                        left: H - S / 2 + ( R * Math.sin(a)),
                      }}>
                      <motion.div
                        className="w-full h-full rounded-full overflow-hidden border-[3px] border-white"
                        style={{ boxShadow: '0 6px 20px rgba(0,100,95,0.18)' }}
                        animate={{ rotate: -360 }}
                        transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}>
                        <img src={src} alt="" className="w-full h-full object-cover" />
                      </motion.div>
                    </div>
                  );
                })}
              </motion.div>
              {/* Logo center */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 z-10">
                <img src="/logo.png" alt="Sahaj Spirit" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>

          {/* DESKTOP — all 5 circles static */}
          {floatCircles.map(({ src, size, top, left }, i) => (
            <div key={`d-${i}`} className="hidden lg:block absolute z-20"
              style={{ width: size, height: size, top, left }}>
              <div className="w-full h-full rounded-full overflow-hidden border-[4px] border-white"
                style={{ boxShadow: '0 10px 36px rgba(0,100,95,0.18)' }}>
                <img src={src} alt="" className="w-full h-full object-cover object-center" />
              </div>
            </div>
          ))}

          {/* Logo — desktop */}
          <div className="hidden lg:block absolute z-10"
            style={{ width: 268, height: 268, top: '28%', left: '16%' }}>
            <img src="/logo.png" alt="Sahaj Spirit" className="w-full h-full object-contain" />
          </div>
        </div>

        {/* RIGHT: Text */}
        <div className="relative w-full lg:w-1/2 flex items-center px-8 md:px-12 lg:px-16 pt-8 pb-24 lg:py-0 lg:pt-20">
          <motion.div className="max-w-xl" initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp}
              className="text-[10px] tracking-[0.48em] uppercase text-teal font-semibold mb-7 text-center lg:text-left">
              <span className="block lg:inline">A Jain Youth Movement</span>
              <span className="block lg:inline lg:before:content-['_·_']">Since 2024</span>
            </motion.p>
            <motion.h1 variants={fadeUp}
              className="font-display text-[3.2rem] md:text-[4rem] lg:text-[4.8rem] xl:text-[5.4rem] text-charcoal leading-[1.03] mb-8 text-center lg:text-left">
              You are not broken.<br />
              You are just<br />
              forgetting<br />
              <em style={{ color: '#007D78', fontStyle: 'italic', fontWeight: 700 }}>who you are.</em>
            </motion.h1>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-5 items-center justify-center lg:justify-start">
              <Link to="/sahaj-tour"
                className="px-8 py-4 bg-orange text-white text-sm font-medium rounded-full transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5"
                style={{ boxShadow: '0 8px 28px rgba(212,113,42,0.38)' }}>
                Experience Sahaj Tour '26 &nbsp;→
              </Link>
              <Link to="/about"
                className="text-sm text-charcoal/60 hover:text-teal font-medium transition-colors duration-200">
                Learn the philosophy &nbsp;↓
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div className="absolute bottom-8 left-[25%] -translate-x-1/2 text-charcoal/25 hidden lg:block"
          animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}>
          <ArrowDown size={20} />
        </motion.div>
      </section>

      {/* ─── 01 THE SOUL ──────────────────────────────────────── */}
      <section className="py-28 md:py-40 px-6 md:px-16 lg:px-28 xl:px-40" style={{ background: '#FAF8F3' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger}
          className="max-w-5xl mx-auto">
          <motion.p variants={fadeUp}
            className="text-[10px] tracking-[0.45em] uppercase text-teal font-semibold mb-12">
            01 — THE SOUL
          </motion.p>
          <motion.h2 variants={fadeUp}
            className="font-display font-light italic text-5xl md:text-6xl lg:text-7xl text-charcoal leading-[1.08] mb-8 text-center">
            Dukh sabko hota hai.<br />Lekin dukh ka karan kya hai?
          </motion.h2>
          <motion.p variants={fadeUp}
            className="font-display italic text-lg text-warm-gray text-center mb-20">
            Suffering is universal. But what is its cause?
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 text-base md:text-lg text-charcoal/75 leading-relaxed max-w-3xl mx-auto">
            <motion.p variants={fadeUp}>
              Life will keep happening — the failures, the pressure, the people who disappoint you.
              None of that is going away.
            </motion.p>
            <motion.p variants={fadeUp}>
              But here&apos;s what changes when you live through the lens of Sahajta: what happens
              outside stops deciding what happens inside.
            </motion.p>
            <motion.p variants={fadeUp} className="md:col-span-2">
              Because you are not just a body reacting to the world. You are a soul — the eternal
              home of infinite happiness. Sahajta is simply the art of remembering that.
            </motion.p>
          </div>
          <motion.p variants={fadeUp}
            className="font-display italic text-2xl md:text-3xl text-center mt-20"
            style={{ color: '#007D78' }}>
            Free from worry. Rooted in yourself. That is Sahaj.
          </motion.p>
        </motion.div>
      </section>

      {/* ─── 02 WHO WE ARE ────────────────────────────────────── */}
      <section className="py-24 md:py-36 px-6 md:px-12 lg:px-20" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Left: text */}
            <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger}>
              <motion.p variants={fadeUp}
                className="text-[10px] tracking-[0.45em] uppercase text-teal font-semibold mb-8">
                02 — WHO WE ARE
              </motion.p>
              <motion.h2 variants={fadeUp}
                className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.05] mb-8">
                We don&apos;t lecture.{' '}
                <em className="italic" style={{ color: '#007D78' }}>We remind.</em>
              </motion.h2>
              <motion.div variants={fadeUp} className="space-y-5 text-charcoal/65 text-base leading-relaxed max-w-lg mb-10">
                <p>Depression. Anxiety. The feeling that life is too loud and you are too small.
                  We know. We felt it too.</p>
                <p>Sahaj Spirit is a Jain youth movement that believes the answer to modern chaos
                  isn&apos;t a productivity hack or a motivational quote. It&apos;s something much older,
                  much quieter, and already living inside you.</p>
                <p>Through music, meditation, real conversations, and experiences that actually
                  move you — we help young people return to their natural state of peace.
                  Not by escaping life. By changing how you see it.</p>
              </motion.div>

              {/* SAHAJ acronym cards */}
              <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                {sahajAcronym.map(({ letter, word }) => (
                  <div key={letter + word}
                    className="flex flex-col items-center justify-center w-[90px] h-[90px] rounded-2xl border border-cream-dark bg-sage">
                    <span className="font-display text-3xl font-semibold" style={{ color: '#007D78' }}>
                      {letter}
                    </span>
                    <span className="text-[10px] text-warm-gray mt-1 text-center px-1">{word}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={vp} transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
              className="rounded-3xl overflow-hidden aspect-[4/5] lg:aspect-auto lg:h-[600px]">
              <img src={IMG.whoWeAre} alt="Sahaj Spirit community"
                className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── 03 UPCOMING ──────────────────────────────────────── */}
      <section className="py-24 md:py-36 px-6 md:px-12 lg:px-20 text-white"
        style={{ background: '#1B20A8' }}>
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger}
            className="text-center mb-16">
            <motion.p variants={fadeUp}
              className="text-[10px] tracking-[0.45em] uppercase font-semibold mb-8"
              style={{ color: '#D4712A' }}>
              03 — UPCOMING
            </motion.p>
            <motion.h2 variants={fadeUp}
              className="font-display font-light text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
              An invitation to meet yourself.
            </motion.h2>
          </motion.div>

          {/* Event card */}
          <motion.div
            initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={vp} transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative rounded-3xl overflow-hidden"
            style={{ minHeight: 380 }}>
            <img src={IMG.temple} alt="Hastinapur Jain Teerth"
              className="absolute inset-0 w-full h-full object-cover opacity-40" />
            <div className="absolute inset-0" style={{
              background: 'linear-gradient(135deg,rgba(15,18,90,0.85) 0%,rgba(27,32,168,0.75) 100%)'
            }} />
            <div className="relative z-10 p-10 md:p-14">
              <p className="text-[10px] tracking-[0.4em] uppercase font-semibold mb-5"
                style={{ color: '#D4712A' }}>Flagship Event</p>
              <h3 className="font-display text-5xl md:text-6xl font-light mb-3">Sahaj Tour &apos;26</h3>
              <p className="text-white/60 text-base mb-4">
                Hastinapur Jain Teerth &nbsp;·&nbsp; 11.10.2026
              </p>
              <p className="font-display italic text-xl text-white/80 mb-6">
                One day. One journey. One encounter with yourself.
              </p>
              <p className="text-white/55 text-sm mb-10">
                100+ youth &nbsp;·&nbsp; ₹500 &nbsp;·&nbsp; Full day
              </p>
              <Link to="/sahaj-tour"
                className="inline-flex items-center gap-2 px-8 py-4 bg-orange text-white text-sm font-medium rounded-full hover:brightness-110 transition-all duration-300"
                style={{ boxShadow: '0 8px 28px rgba(212,113,42,0.4)' }}>
                View Event Details &nbsp;→
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 04 THE JOURNEY SO FAR ────────────────────────────── */}
      <section className="py-24 md:py-36 px-6 md:px-12 lg:px-20" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger}
            className="mb-16">
            <motion.p variants={fadeUp}
              className="text-[10px] tracking-[0.45em] uppercase text-teal font-semibold mb-6">
              04 — THE JOURNEY SO FAR
            </motion.p>
            <motion.h2 variants={fadeUp}
              className="font-display text-5xl md:text-6xl lg:text-7xl text-charcoal leading-[1.05] mb-6">
              We&apos;ve done this before.{' '}
              <em className="italic" style={{ color: '#007D78' }}>And it worked.</em>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-charcoal/60 text-base max-w-xl">
              Since 2024, hundreds of young people have walked into our rooms — and walked out
              a little lighter.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[IMG.journey1, IMG.journey2, IMG.journey3].map((src, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={vp} transition={{ delay: i * 0.12, duration: 0.8 }}
                className="rounded-3xl overflow-hidden aspect-[3/4] relative">
                <img src={src} alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top,rgba(0,0,0,0.25),transparent)' }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 05 OUR SYMBOL ────────────────────────────────────── */}
      <section className="py-24 md:py-36 px-6 md:px-12 lg:px-20" style={{ background: '#F5F4F0' }}>
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger}
            className="text-center mb-16">
            <motion.p variants={fadeUp}
              className="text-[10px] tracking-[0.45em] uppercase text-teal font-semibold mb-6">
              05 — OUR SYMBOL
            </motion.p>
            <motion.h2 variants={fadeUp}
              className="font-display text-5xl md:text-6xl lg:text-7xl text-charcoal leading-[1.05]">
              Every curve means something.
            </motion.h2>
          </motion.div>

          {/* Logo with glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={vp} transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex justify-center mb-16">
            <div className="relative">
              <div className="absolute inset-0 rounded-full blur-3xl scale-110"
                style={{ background: 'radial-gradient(circle,rgba(0,125,120,0.18) 0%,transparent 70%)' }} />
              <img src="/logo.png" alt="Sahaj Spirit symbol"
                className="relative w-52 h-52 md:w-64 md:h-64 object-contain" />
            </div>
          </motion.div>

          {/* Meaning cards */}
          <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
            {symbolMeanings.map(({ title, desc }) => (
              <motion.div key={title} variants={fadeUp}
                className="rounded-2xl border border-cream-dark bg-white p-7">
                <h4 className="font-display text-lg text-teal font-light mb-2">{title}</h4>
                <p className="text-charcoal/60 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={vp} transition={{ duration: 1 }}
            className="font-display italic text-2xl md:text-3xl text-center"
            style={{ color: '#007D78' }}>
            You are infinite. You are enough. You always were.
          </motion.p>
        </div>
      </section>

      {/* ─── 06 RESERVE CTA ───────────────────────────────────── */}
      <section className="relative py-36 md:py-48 px-6 overflow-hidden text-center"
        style={{ background: '#ffffff' }}>

        {/* Subtle scattered dots */}
        {[
          { top: '15%', left: '12%' }, { top: '20%', left: '80%' },
          { top: '70%', left: '8%' },  { top: '75%', left: '75%' },
          { top: '40%', left: '5%' },  { top: '50%', left: '92%' },
        ].map((pos, i) => (
          <div key={i} className="absolute w-1 h-1 rounded-full opacity-30"
            style={{ ...pos, background: '#007D78' }} />
        ))}

        <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger}
          className="max-w-2xl mx-auto">
          <motion.h2 variants={fadeUp}
            className="font-display text-[7rem] md:text-[10rem] lg:text-[13rem] leading-none font-light mb-8"
            style={{ color: '#007D78' }}>
            Sahaj
          </motion.h2>
          <motion.p variants={fadeUp} className="text-charcoal/55 text-base md:text-lg mb-12">
            Registration opens 11th July &nbsp;·&nbsp; ₹500 &nbsp;·&nbsp;
            One day that might quietly change everything.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link to="/sahaj-tour"
              className="inline-flex items-center gap-2 px-10 py-5 bg-orange text-white text-base font-medium rounded-full hover:brightness-110 transition-all duration-300 hover:-translate-y-0.5"
              style={{ boxShadow: '0 10px 32px rgba(212,113,42,0.38)' }}>
              Reserve your spot &nbsp;→
            </Link>
          </motion.div>
        </motion.div>
      </section>

    </main>
  );
}
