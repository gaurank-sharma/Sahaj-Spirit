import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowDown, Mic, BookOpen, Users, Compass } from 'lucide-react';


const WA_LINK = 'https://wa.me/919000000000';

// Each ID used only ONCE across all 3 pages
const IMG = {
  hero:         'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1920&q=80',
  sahajometer:  'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80',
  poetry:       'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80',
  storytelling: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80',
  interactive:  'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=80',
  community:    'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&w=1200&q=80',
  core1:        'https://media.licdn.com/dms/image/v2/D5612AQGsnWwOD0TmeA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1667156637545?e=2147483647&v=beta&t=k_9LVX0-g5vcigz1Qrcx-0NniXyyrQup6GiyPiAczVU',
  core2:        'https://images.squarespace-cdn.com/content/v1/541f8259e4b0968055cd7ed1/e6104d29-4f87-4cdd-920f-18a4978f09d6/slow-down-and-breathe-moment.jpg',
  core3:        'https://images.unsplash.com/photo-1476234251651-f353703a034d?auto=format&fit=crop&w=1200&q=80',
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.25, 0.1, 0.25, 1] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.13 } } };

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current flex-shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const activities = [
  { title: 'Sahajometer',          desc: 'A gentle mirror — not a test. A quiet conversation with yourself about where you truly are.', image: IMG.sahajometer, Icon: Compass },
  { title: 'Poetry & Music',       desc: "Words and melodies that hold the feelings you couldn't find language for. Come as you are.",  image: IMG.poetry,       Icon: Mic     },
  { title: 'Storytelling Circles', desc: 'Everyone carries a story worth hearing. We sit, we listen, we remember we are not alone.',    image: IMG.storytelling, Icon: BookOpen },
  { title: 'Interactive Sessions', desc: 'Real conversations — not workshops, not lectures. Just humans being honestly, curiously alive.', image: IMG.interactive, Icon: Users   },
];

const coreFeelings = [
  {
    num: '1',
    title: 'Radical Honesty',
    body: "We don't perform here. Sahaj is a space where \"I'm fine\" doesn't have to be the answer. We believe honest expression — of joy, sadness, confusion, and everything in between — is the beginning of real connection.",
    image: IMG.core1,
  },
  {
    num: '2',
    title: 'Presence Over Performance',
    body: "No followers to gain. No content to create. No persona to uphold. At Sahaj, the goal is simply to be fully present — with yourself, and with the people around you. That's rare. That's everything.",
    image: IMG.core2,
  },
  {
    num: '3',
    title: 'Community as Home',
    body: "We believe home is not always a place — sometimes it's a group of people who make you feel like you can exhale. Sahaj is building that: a community where you are known, not just known of.",
    image: IMG.core3,
  },
];

export default function Home() {
  return (
    <main>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMG.hero} alt="Sahaj community" className="w-full h-full object-cover object-top" />
          {/* Base dark layer for readability */}
          <div className="absolute inset-0 bg-black/50" />
          {/* Gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/60" />
        </div>

        <motion.div
          className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="text-[10px] tracking-[0.55em] uppercase text-white/60 mb-9 drop-shadow">
            सहज &nbsp;·&nbsp; Sahaj Spirit
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-display font-light text-6xl md:text-8xl lg:text-[6.5rem] leading-[1.04] mb-7 drop-shadow-lg"
          >
            You were never lost.<br />
            <em className="italic font-normal" style={{ color: '#7ECCC6' }}>Just away from yourself.</em>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-base md:text-xl text-white/85 leading-relaxed max-w-2xl mx-auto mb-12 drop-shadow"
          >
            Sahaj is a space where you come back — to honesty, to stillness,<br className="hidden md:block" />
            to the people who feel like home.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/about" className="btn-outline-light">Discover Sahaj</Link>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-teal text-white text-xs tracking-[0.2em] uppercase hover:bg-teal-dark transition-colors duration-300 shadow-lg"
            >
              <WhatsAppIcon />
              Join the Circle
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.3, ease: 'easeInOut' }}
        >
          <ArrowDown size={22} />
        </motion.div>
      </section>

      {/* ─── ESSENCE ──────────────────────────────────────────── */}
      <section className="py-28 md:py-40 bg-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="section-label mb-7">The Essence</motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display font-light text-5xl md:text-6xl lg:text-7xl text-charcoal leading-[1.1] mb-9"
            >
              Sahaj is not an event.<br /><em className="italic">It is a feeling.</em>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base md:text-lg text-warm-gray leading-relaxed max-w-2xl mx-auto">
              The feeling of a deep breath after a long week. Of laughing without thinking about it.
              Of sitting with people and feeling — finally — that you don't need to be anything other than what you are.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-3 gap-4 mt-16 pt-14 border-t border-cream-dark"
            >
              {[
                { num: '200+', label: 'Humans who came home' },
                { num: '15+',  label: 'Soulful gatherings'   },
                { num: '5+',   label: 'Cities touched'       },
              ].map(({ num, label }) => (
                <div key={label}>
                  <div className="font-display text-4xl md:text-5xl text-teal font-light mb-1.5">{num}</div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-warm-gray">{label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── ACTIVITIES ───────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-sage">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="mb-16"
          >
            <motion.p variants={fadeUp} className="section-label mb-5">Experiences</motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display font-light text-5xl md:text-6xl text-charcoal"
            >
              Not features. <em className="italic">Feelings.</em>
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activities.map(({ title, desc, image, Icon }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.1, duration: 0.65 }}
                className="group overflow-hidden rounded-3xl bg-white shadow-sm"
              >
                <div className="overflow-hidden" style={{ aspectRatio: '16/10' }}>
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  />
                </div>
                <div className="p-7 md:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-teal/10 flex items-center justify-center text-teal flex-shrink-0">
                      <Icon size={15} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display text-2xl text-charcoal font-light">{title}</h3>
                  </div>
                  <p className="text-warm-gray text-sm leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SAHAJ SAHIYOGI ───────────────────────────────────── */}
      <section className="py-24 md:py-36 bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="rounded-3xl overflow-hidden aspect-[4/5] max-w-sm mx-auto lg:mx-0">
                <img src={IMG.community} alt="Sahaj community" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 md:right-8 bg-teal text-white rounded-2xl px-6 py-5 shadow-xl">
                <p className="font-display text-3xl font-light">200+</p>
                <p className="text-[10px] tracking-[0.2em] uppercase text-white/70 mt-0.5">Humans who came home</p>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="order-1 lg:order-2"
            >
              <motion.p variants={fadeUp} className="section-label mb-5">Sahaj Sahiyogi</motion.p>
              <motion.h2
                variants={fadeUp}
                className="font-display font-light text-5xl md:text-6xl text-charcoal leading-[1.1] mb-7"
              >
                Not a group chat.<br />
                <em className="italic text-teal">A place to belong.</em>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-warm-gray text-base md:text-lg leading-relaxed mb-6">
                Sahaj isn't about followers or subscribers. It's about the person sitting next to
                you who <em>gets it</em>. Who listens without fixing. Who shows up — not for content,
                but for connection.
              </motion.p>
              <motion.p variants={fadeUp} className="text-warm-gray text-base leading-relaxed mb-9">
                A <strong className="text-charcoal font-medium">Sahiyogi</strong> holds space — helping
                gather, welcome, and carry the warmth forward. Join our WhatsApp community for
                updates on the next gathering near you.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="bg-sage rounded-2xl p-6 mb-8 border border-sage-dark"
              >
                <p className="text-[10px] tracking-[0.3em] uppercase text-warm-gray mb-2">Next Gathering</p>
                <p className="font-display text-2xl text-charcoal font-light mb-1">Coming Soon · Your City</p>
                <p className="text-warm-gray text-sm">Join the group to receive details before anyone else.</p>
              </motion.div>

              <motion.a
                variants={fadeUp}
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white text-xs tracking-[0.18em] uppercase rounded-full font-medium hover:bg-[#1dba58] transition-colors duration-200"
              >
                <WhatsAppIcon />
                Join Sahiyogi WhatsApp
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CORE FEELINGS ────────────────────────────────────── */}
      <section className="py-24 bg-sage">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} className="section-label mb-5">Our Core Feelings</motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display font-light text-5xl md:text-6xl text-charcoal"
            >
              What Sahaj stands for.
            </motion.h2>
          </motion.div>

          {coreFeelings.map(({ num, title, body, image }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 md:gap-16 items-center mb-16 md:mb-24 last:mb-0`}
            >
              <div className="w-full md:w-5/12 rounded-3xl overflow-hidden aspect-[4/3]">
                <img src={image} alt={title} className="w-full h-full object-cover" />
              </div>
              <div className="w-full md:w-7/12">
                <span className="font-display text-5xl text-teal/20 font-light">{num}.</span>
                <h3 className="font-display text-3xl md:text-4xl text-charcoal font-light mt-1 mb-5">{title}</h3>
                <p className="text-warm-gray text-base leading-relaxed max-w-md">{body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section
        className="relative py-36 text-white text-center overflow-hidden"
        style={{ background: 'linear-gradient(140deg, #3D2E20 0%, #2A1F14 50%, #1C1510 100%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5 pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="section-label text-white/35 mb-8">Ready?</motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display font-light text-5xl md:text-7xl leading-[1.1] mb-6"
            >
              You already know<br />
              <em className="italic" style={{ color: '#7ECCC6' }}>if this is for you.</em>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/50 text-base md:text-lg mb-12 max-w-md mx-auto">
              No pitch. No urgency. Just an open door, whenever you're ready.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link to="/sahaj-tour" className="btn-outline-light">
                Explore the Sahaj Tour
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
