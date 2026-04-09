import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Eye, Heart, Zap } from 'lucide-react';

const IMG = {
  // All unique — none repeated from Home or Tour pages
  hero:  'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1920&q=80',
  what:  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80',
  why:   '/about1.png',
  how:   '/about2.png',
  team:  'https://images.unsplash.com/photo-1472162270831-a62154c7ece7?auto=format&fit=crop&w=1920&q=80',
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.25, 0.1, 0.25, 1] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.13 } } };

const pillars = [
  {
    label: 'What',
    Icon: Eye,
    heading: 'A gathering of souls',
    body: 'Sahaj Summit is not a conference, not a retreat, and definitely not a networking event. It\'s an intentional space for people to simply be — with themselves and with each other. No agenda to perform. No pressure to impress. Just honest conversation, shared silence, and the quiet joy of realising you\'re not as alone as you thought.',
    image: IMG.what,
  },
  {
    label: 'Why',
    Icon: Heart,
    heading: 'Because we forgot how to just be',
    body: 'In the noise of modern life, we\'ve become experts at being productive, visible, and optimised — but not present. We scroll past our own feelings. We perform wellness instead of experiencing it. Sahaj exists because there is a deep, unspoken hunger for spaces where you can exhale. Where you can say "I don\'t know" and have that be enough.',
    image: IMG.why,
  },
  {
    label: 'How',
    Icon: Zap,
    heading: 'Through shared experience',
    body: 'The Sahajometer — an honest check-in with yourself, held in community. Poetry read aloud with live music. Storytelling circles where every voice matters. Conversations that start with "how are you, really?" These aren\'t activities designed to fill time — they\'re designed to open people. And when people open, something real happens.',
    image: IMG.how,
  },
];

const teamMembers = [
  {
    name: 'Sahaj Jain',
    role: 'Founder & Curator',
    bio: 'Started Sahaj after realising that the best moments in life happen when people stop performing and start connecting. With years of experience in community building and a deep love for human stories, Sahaj created this space as the one they always wished existed — honest, warm, and free from pretence.',
    vision: '"My vision for Sahaj is simple: a world where people feel less alone — not because they found the perfect app, but because they found each other."',
  },
];

export default function About() {
  return (
    <main>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-[75vh] flex items-end overflow-hidden pt-28">
        <div className="absolute inset-0">
          <img src={IMG.hero} alt="Sahaj community" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-16 md:pb-24 w-full">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-[10px] tracking-[0.4em] uppercase text-white/45 mb-5">
              About Us
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-display font-light text-6xl md:text-8xl text-white leading-[1.05] max-w-3xl"
            >
              A space that feels<br />
              <em className="italic" style={{ color: '#7ECCC6' }}>like coming home.</em>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* ─── INTRO ────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="section-label mb-6">Who We Are</motion.p>
            <motion.p
              variants={fadeUp}
              className="font-display font-light text-3xl md:text-4xl text-charcoal leading-relaxed"
            >
              Sahaj Spirit is a community — a soulful alliance of humans who believe in
              the power of honest presence, shared stories, and showing up for each other.
              We are not a brand. We are a feeling.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── SAHAJ SUMMIT — WHAT / WHY / HOW ─────────────────── */}
      <section className="py-24 md:py-32 bg-sage">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} className="section-label mb-5">Sahaj Summit</motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display font-light text-5xl md:text-6xl text-charcoal"
            >
              What, why, and <em className="italic">how.</em>
            </motion.h2>
          </motion.div>

          <div className="flex flex-col gap-10 md:gap-16">
            {pillars.map(({ label, Icon, heading, body, image }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-0 rounded-3xl overflow-hidden bg-white shadow-sm`}
              >
                <div className="w-full md:w-5/12 aspect-[4/3] md:aspect-auto overflow-hidden">
                  <img
                    src={image}
                    alt={heading}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="w-full md:w-7/12 p-9 md:p-14 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-full bg-teal/10 flex items-center justify-center text-teal">
                      <Icon size={17} strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] tracking-[0.35em] uppercase text-warm-gray font-medium">{label}</span>
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl text-charcoal font-light mb-5 leading-snug">{heading}</h3>
                  <p className="text-warm-gray text-base leading-relaxed max-w-lg">{body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── QUOTE BAND ───────────────────────────────────────── */}
      <section className="py-20 bg-teal text-white text-center px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto"
        >
          <p className="font-display text-3xl md:text-5xl font-light leading-relaxed">
            "Sahaj isn't about followers or subscribers.<br />
            <em className="italic">It's about the person sitting next to you who gets it."</em>
          </p>
        </motion.div>
      </section>

      {/* ─── TEAM ─────────────────────────────────────────────── */}
      <section className="py-24 md:py-36 bg-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mb-16"
          >
            <motion.p variants={fadeUp} className="section-label mb-5">Meet the Team</motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display font-light text-5xl md:text-6xl text-charcoal"
            >
              Faces behind <em className="italic">Sahaj.</em>
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-warm-gray text-base max-w-xl">
              A small group of passionate humans spread across India, closely connected
              by the shared purpose of building more honest, connected communities.
            </motion.p>
          </motion.div>

          <div className="flex flex-col gap-20">
            {teamMembers.map(({ name, role, bio, vision }) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
              >
                {/* Avatar placeholder */}
                <div className="relative flex justify-center lg:justify-start">
                  <div className="relative">
                    <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-sage border-4 border-sage-dark flex items-center justify-center">
                      {/* Person silhouette SVG */}
                      <svg
                        viewBox="0 0 100 100"
                        className="w-36 h-36 md:w-44 md:h-44 text-teal/30"
                        fill="currentColor"
                      >
                        <circle cx="50" cy="32" r="20" />
                        <ellipse cx="50" cy="85" rx="32" ry="22" />
                      </svg>
                    </div>
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-teal text-white rounded-full px-5 py-2 shadow-lg">
                      <p className="font-display text-sm font-light">{role}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-display text-4xl md:text-5xl text-charcoal font-light mb-2">{name}</h3>
                  <p className="text-[10px] tracking-[0.25em] uppercase text-teal mb-7">{role}</p>
                  <p className="text-warm-gray text-base leading-relaxed mb-8">{bio}</p>
                  <blockquote className="border-l-2 border-teal pl-6">
                    <p className="font-display text-xl md:text-2xl text-charcoal font-light italic leading-relaxed">
                      {vision}
                    </p>
                  </blockquote>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── JOIN TEAM (Satvic-style) ─────────────────────────── */}
      <section className="py-24 bg-sage">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.h2
                variants={fadeUp}
                className="font-display font-light text-4xl md:text-5xl text-charcoal mb-5"
              >
                Want to be a <em className="italic text-teal">Sahiyogi?</em>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-warm-gray text-base leading-relaxed mb-8 max-w-md">
                If you want to help carry the warmth of Sahaj forward — as a volunteer, a
                collaborator, or simply someone who shows up — we'd love to hear from you.
                Even if we don't have a defined role, reach out.
              </motion.p>
              <motion.div variants={fadeUp}>
                <Link
                  to="/sahaj-tour"
                  className="inline-block px-8 py-4 bg-teal text-white text-xs tracking-[0.2em] uppercase rounded-full hover:bg-teal-dark transition-colors duration-200"
                >
                  Begin the Journey
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-3xl overflow-hidden aspect-[16/10]"
            >
              <img src={IMG.team} alt="Sahaj team" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
