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
  { title: 'Youth Events',              desc: 'Engaging gatherings designed to connect and inspire young minds rooted in Jain values and community spirit.', image: IMG.sahajometer, Icon: Users   },
  { title: 'Meditation & Sessions',     desc: 'Guided meditation and spiritual learning sessions — a space for inner peace, clarity, and conscious living.', image: IMG.poetry,       Icon: Compass },
  { title: 'Activities & Performances', desc: 'Creative and cultural activities, from spoken word to music, that celebrate the richness of Jain culture.',   image: IMG.storytelling, Icon: Mic     },
  { title: 'Spiritual + Modern Learning', desc: 'Blending timeless Jain wisdom with contemporary, relatable formats — making ancient philosophy feel alive today.', image: IMG.interactive, Icon: BookOpen },
];

const coreFeelings = [
  {
    num: '1',
    title: 'Sahajta',
    body: "Sahajta — the art of living naturally and effortlessly — is at the heart of everything we do. We believe that when youth are rooted in simplicity and inner calm, they flourish in every area of life.",
    image: IMG.core1,
  },
  {
    num: '2',
    title: 'Jain Philosophy, Modern Language',
    body: "Ancient wisdom doesn't have to feel distant. We present Jain values — non-violence, honesty, simplicity, and compassion — in formats that today's youth genuinely connect with and carry forward.",
    image: IMG.core2,
  },
  {
    num: '3',
    title: 'Purposeful Community',
    body: "A Sahiyogi holds space — not just for events, but for each other. We are 50 dedicated volunteers from across Delhi NCR, building a community where every young person finds purpose, belonging, and inner happiness.",
    image: IMG.core3,
  },
];

// Circle positions are % within the left column container (50vw wide on desktop)
// Negative values let circles bleed off the edge intentionally
const floatCircles = [
  { src: IMG.storytelling, size: 148, top: '7%', left: '25%'},
  { src: IMG.poetry,       size: 148, top:  '15%', left: '49%'},
  { src: IMG.interactive,  size: 148, top: '34%', left: '60%'},
  { src: IMG.community,    size: 148, top: '55%', left: '49%'},
  { src: IMG.hero,         size: 148, top: '64%', left: '25%'},
];

export default function Home() {
  return (
    <main>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex flex-col lg:flex-row"
        style={{
          background:
            'linear-gradient(118deg, #ffffff 0%, #f2fbf9 25%, #d0ece8 55%, #bde3dd 80%, #afdbd5 100%)',
        }}
      >
        {/* ── LEFT: Logo + floating circles ─────────────────── */}
        {/* No overflow-hidden — circles must bleed off edges */}
        <div className="relative w-full lg:w-1/2 min-h-[55vh] lg:min-h-screen">

          {/* Floating photo circles — desktop only */}
          {floatCircles.map(({ src, size, top, left, delay, floatY, floatDur }, i) => (
            <motion.div
              key={i}
              className="absolute z-20 hidden lg:block"
              style={{ width: size, height: size, top, left }}
              animate={{ y: [0, floatY, 0] }}
              transition={{
                duration: floatDur,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: delay + 1.6,
              }}
            >
              <motion.div
                className="w-full h-full rounded-full overflow-hidden border-[4px] border-white"
                style={{ boxShadow: '0 10px 36px rgba(0,100,95,0.18)' }}
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: delay * 0.65,
                  duration: 0.9,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                <img src={src} alt="" className="w-full h-full object-cover" />
              </motion.div>
            </motion.div>
          ))}

          {/* Logo — desktop: absolutely placed in left column */}
          <motion.div
            className="hidden lg:block absolute z-10"
            style={{ width: 268, height: 268, top: '28%', left: '16%' }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 1.05, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <img src="/logo.png" alt="Sahaj Spirit" className="w-full h-full object-contain" />
          </motion.div>

          {/* Logo — mobile: centered */}
          <motion.div
            className="lg:hidden absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
          >
            <img src="/logo.png" alt="Sahaj Spirit" className="w-44 h-44 object-contain" />
          </motion.div>
        </div>

        {/* ── RIGHT: Text content ───────────────────────────── */}
        <div className="relative w-full lg:w-1/2 flex items-center px-8 md:px-12 lg:px-16 pt-8 pb-24 lg:py-0 lg:pt-20">
          <motion.div
            className="max-w-xl"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            {/* Badge */}
            <motion.p
              variants={fadeUp}
              className="text-[10px] tracking-[0.48em] uppercase text-teal font-semibold mb-7"
            >
              A Jain Youth Movement &nbsp;·&nbsp; Since 2024
            </motion.p>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="font-display text-[3.2rem] md:text-[4rem] lg:text-[4.8rem] xl:text-[5.4rem] text-charcoal leading-[1.03] mb-8"
            >
              You are not broken.<br />
              You are just<br />
              forgetting<br />
              <em style={{ color: '#007D78', fontStyle: 'italic', fontWeight: 700 }}>
                who you are.
              </em>
            </motion.h1>

            {/* Body */}
            <motion.p
              variants={fadeUp}
              className="text-charcoal/55 text-base md:text-[1.04rem] leading-relaxed max-w-[22rem] mb-11"
            >
            
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-5 items-center">
              <Link
                to="/sahaj-tour"
                className="px-8 py-4 bg-orange text-white text-sm font-medium rounded-full transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5"
                style={{ boxShadow: '0 8px 28px rgba(212,113,42,0.38)' }}
              >
                Experience Sahaj Tour '26 &nbsp;→
              </Link>
              <Link
                to="/about"
                className="text-sm text-charcoal/60 hover:text-teal font-medium transition-colors duration-200"
              >
                Learn the philosophy &nbsp;↓
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator — sits below logo on left side */}
        <motion.div
          className="absolute bottom-8 left-[25%] -translate-x-1/2 text-charcoal/25 hidden lg:block"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
        >
          <ArrowDown size={20} />
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
              A Jain Youth Foundation.<br /><em className="italic">Established 2024.</em>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base md:text-lg text-warm-gray leading-relaxed max-w-2xl mx-auto">
              Sahaj Spirit guides youth towards simplicity, peace, and inner happiness — presenting
              Jain philosophy in a modern, engaging way that resonates with a new generation.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-3 gap-4 mt-16 pt-14 border-t border-cream-dark"
            >
              {[
                { num: '50+',  label: 'Dedicated Sahyogi volunteers' },
                { num: '15–45', label: 'Age group reached'           },
                { num: '5+',   label: 'Cities covered'               },
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
                <p className="font-display text-3xl font-light">50+</p>
                <p className="text-[10px] tracking-[0.2em] uppercase text-white/70 mt-0.5">Dedicated Sahyogi volunteers</p>
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
                A Sahiyogi is more than a volunteer — they are the heartbeat of Sahaj Spirit. 50
                dedicated members, each with a specific role, working together to create experiences
                that truly matter for youth across Delhi NCR.
              </motion.p>
              <motion.p variants={fadeUp} className="text-warm-gray text-base leading-relaxed mb-9">
                From registration to stage coordination, from food to transport — every detail is
                handled with care, dedication, and the spirit of <strong className="text-charcoal font-medium">seva</strong>. Join our
                WhatsApp community to be part of the next gathering.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="bg-sage rounded-2xl p-6 mb-8 border border-sage-dark"
              >
                <p className="text-[10px] tracking-[0.3em] uppercase text-warm-gray mb-2">Next Gathering</p>
                <p className="font-display text-2xl text-charcoal font-light mb-1">Sahaj Tour · Hastinapur</p>
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
            <motion.p variants={fadeUp} className="section-label mb-5">Our Values</motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display font-light text-5xl md:text-6xl text-charcoal"
            >
              What Sahaj Spirit stands for.
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
              Be part of the<br />
              <em className="italic" style={{ color: '#7ECCC6' }}>Sahaj Tour journey.</em>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/50 text-base md:text-lg mb-12 max-w-md mx-auto">
              A sacred one-day experience at Hastinapur Jain Teerth — for youth aged 15–45 across Delhi NCR.
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
