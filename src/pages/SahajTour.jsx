import { motion } from 'framer-motion';
import { MapPin, Clock, Check, Coffee, Home as HomeIcon, Bus, Users, Package, Globe } from 'lucide-react';

const TOUR_IMG = {
  hero:      'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1920&q=80',
  about:     '/about2.png',
  awaken:    '/about1.png',
  wander:    '/tour2.png',
  comeAlive: '/tour3.jpg',
};

const fadeUp = {
  hidden: { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.25, 0.1, 0.25, 1] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const vp = { once: true, margin: '-60px' };

const awakenSchedule = [
  { time: '9:00',  act: 'Breakfast' },
  { time: '9:30',  act: 'Opening Ceremony & Introduction' },
  { time: '10:00', act: 'Sahajometre Activity' },
  { time: '10:45', act: 'Group Engagement Activity' },
  { time: '11:00', act: 'Musical Poetry' },
  { time: '11:15', act: 'Main Session' },
  { time: '11:40', act: 'Guided Meditation' },
  { time: '12:00', act: 'Lunch Break' },
];

const wanderSchedule = [
  { time: '1:30', act: 'Hastinapur Bhraman (Sightseeing)' },
];

const comeAliveSchedule = [
  { time: '3:30', act: 'Nukkad Natak with Nashik Dhol by Manglarthies' },
  { time: '3:45', act: 'Sahaj Keertan' },
  { time: '5:15', act: 'Evening Meal' },
  { time: '6:45', act: 'Departure' },
];

const practicalInfo = [
  { Icon: Coffee,    title: 'Food',              desc: 'Satvik. Jain-aligned. Healthy and delicious. Three meals included — breakfast, lunch, evening.' },
  { Icon: HomeIcon,  title: 'Accommodation',     desc: 'This is a one-day event — no overnight stay needed. For attendees from far, we can help arrange paid accommodation on request.' },
  { Icon: Bus,       title: 'Transport',         desc: 'Buses arranged from Delhi NCR for a smooth same-day journey to Hastinapur and back.' },
  { Icon: Users,     title: 'Crowd Management',  desc: 'The venue is zoned into Activity, Meditation, and Dining areas. One volunteer for every 50 participants. Wristband entry.' },
  { Icon: Package,   title: 'What to Bring',     desc: 'An open mind. Comfortable clothing. Yourself — exactly as you are.' },
  { Icon: Globe,     title: 'Languages',         desc: 'All sessions in Hindi & English. Inclusive of all backgrounds.' },
];

const milestones = [
  { date: '11 May',     label: 'Sahaj Tour announced',   done: true  },
  { date: '11 June',    label: 'Date and venue revealed', done: true  },
  { date: '11 July',    label: 'Registrations open',      done: false, active: true },
  { date: '11 October', label: 'The day itself',           done: false },
];

function ScheduleRow({ time, act, light }) {
  return (
    <div className={`flex gap-6 items-start py-4 border-b ${light ? 'border-white/10' : 'border-charcoal/8'}`}>
      <span className={`font-display text-xl w-16 flex-shrink-0 ${light ? 'text-orange' : 'text-teal'}`}>{time}</span>
      <span className={`text-base ${light ? 'text-white/80' : 'text-charcoal/75'}`}>{act}</span>
    </div>
  );
}

export default function SahajTour() {
  return (
    <main>

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center text-white text-center overflow-hidden">
        <img src={TOUR_IMG.hero} alt="Sahaj Tour"
          className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom,rgba(0,0,0,0.35) 0%,rgba(0,0,0,0.55) 60%,rgba(0,0,0,0.7) 100%)' }} />
        <motion.div
          className="relative z-10 px-6 max-w-4xl mx-auto"
          initial="hidden" animate="visible" variants={stagger}
        >
          <motion.p variants={fadeUp}
            className="text-[10px] tracking-[0.5em] uppercase mb-6 font-semibold"
            style={{ color: '#D4712A' }}>
            Flagship Event &nbsp;·&nbsp; 11.10.2026
          </motion.p>
          <motion.h1 variants={fadeUp}
            className="font-display font-light text-6xl md:text-8xl lg:text-9xl leading-[1.0] mb-6">
            Sahaj Tour &apos;26
          </motion.h1>
          <motion.p variants={fadeUp}
            className="font-display italic text-xl md:text-2xl text-white/75 mb-10">
            One day. One journey. One encounter with yourself.
          </motion.p>
          <motion.div variants={fadeUp}
            className="flex flex-wrap justify-center gap-8 text-white/55 text-xs tracking-widest uppercase mb-12">
            <span className="flex items-center gap-2"><MapPin size={13} strokeWidth={1.5} />Hastinapur, UP</span>
            <span className="flex items-center gap-2"><Clock size={13} strokeWidth={1.5} />Full day</span>
            <span className="flex items-center gap-2 text-white/55">₹500 / person</span>
          </motion.div>
          <motion.div variants={fadeUp}>
            <a href="#register"
              className="inline-flex items-center gap-2 px-10 py-4 bg-orange text-white text-sm font-medium rounded-full hover:brightness-110 transition-all duration-300"
              style={{ boxShadow: '0 8px 28px rgba(212,113,42,0.45)' }}>
              Register Now &nbsp;→
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ─── ABOUT THE EVENT ──────────────────────────────────── */}
      <section className="py-24 md:py-36 px-6 md:px-12 lg:px-20" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger}>
            <motion.p variants={fadeUp}
              className="text-[10px] tracking-[0.45em] uppercase text-teal font-semibold mb-8">
              About the Event
            </motion.p>
            <motion.h2 variants={fadeUp}
              className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.05] mb-8">
              Not a pilgrimage. Not a seminar.{' '}
              <em className="italic" style={{ color: '#007D78' }}>An experience.</em>
            </motion.h2>
            <motion.div variants={fadeUp} className="space-y-5 text-charcoal/65 text-base leading-relaxed">
              <p>Sahaj Tour is one full day where a hundred young people travel together to
                Hastinapur Jain Teerth — and somewhere between the ancient temples,
                the music, the laughter, and the silence — something shifts.</p>
              <p>You arrive as one version of yourself. You leave as a slightly lighter one.</p>
              <p>We&apos;ve designed this day around three movements — Awaken, Wander,
                Come Alive. Each one peels away a layer.</p>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={vp} transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="rounded-3xl overflow-hidden aspect-[4/5] lg:h-[580px]">
            <img src={TOUR_IMG.about} alt="About Sahaj Tour"
              className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* ─── CHAPTER ONE: AWAKEN ──────────────────────────────── */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20" style={{ background: '#FAF8F3' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: chapter content */}
          <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger}>
            <motion.p variants={fadeUp}
              className="text-[10px] tracking-[0.45em] uppercase text-teal font-semibold mb-4">
              Chapter One
            </motion.p>
            <motion.h2 variants={fadeUp}
              className="font-display text-6xl md:text-7xl text-charcoal font-light mb-3">
              Awaken
            </motion.h2>
            <motion.p variants={fadeUp} className="text-warm-gray text-sm mb-8">
              9 AM — 12 PM
            </motion.p>
            <motion.p variants={fadeUp} className="text-charcoal/65 text-base leading-relaxed mb-10 max-w-md">
              It begins with breakfast and strangers who quickly stop feeling like strangers.
              The Sahajometre will make you question how calm you actually are. Musical poetry
              will make you feel things you forgot you could feel. The main session and guided
              meditation will bring you somewhere quieter than you&apos;ve been in a while.
            </motion.p>
            <motion.div variants={fadeUp}
              className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src={TOUR_IMG.awaken} alt="Awaken"
                className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>
          {/* Right: schedule */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={vp} transition={{ duration: 0.8, delay: 0.15 }}
            className="pt-16 lg:pt-28">
            {awakenSchedule.map(({ time, act }) => (
              <ScheduleRow key={time} time={time} act={act} light={false} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── CHAPTER TWO: WANDER ──────────────────────────────── */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20" style={{ background: '#ffffff' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: continues schedule */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={vp} transition={{ duration: 0.8 }}
            className="pt-0 lg:pt-16">
            {wanderSchedule.map(({ time, act }) => (
              <ScheduleRow key={time} time={time} act={act} light={false} />
            ))}
          </motion.div>
          {/* Right: chapter content */}
          <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger}>
            <motion.p variants={fadeUp}
              className="text-[10px] tracking-[0.45em] uppercase text-teal font-semibold mb-4">
              Chapter Two
            </motion.p>
            <motion.h2 variants={fadeUp}
              className="font-display text-6xl md:text-7xl text-charcoal font-light mb-3">
              Wander
            </motion.h2>
            <motion.p variants={fadeUp} className="text-warm-gray text-sm mb-8">
              12 PM — 3:30 PM
            </motion.p>
            <motion.p variants={fadeUp} className="text-charcoal/65 text-base leading-relaxed mb-10 max-w-md">
              After lunch, we walk through Hastinapur — one of the most ancient Jain teerthas
              in the country. No rush. No agenda. Just you, the history beneath your feet,
              and a sky that doesn&apos;t care about your deadlines.
            </motion.p>
            <motion.div variants={fadeUp}
              className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src={TOUR_IMG.wander} alt="Wander"
                className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── CHAPTER THREE: COME ALIVE ────────────────────────── */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 text-white"
        style={{ background: '#1B20A8' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: chapter content */}
          <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger}>
            <motion.p variants={fadeUp}
              className="text-[10px] tracking-[0.45em] uppercase font-semibold mb-4"
              style={{ color: '#D4712A' }}>
              Chapter Three
            </motion.p>
            <motion.h2 variants={fadeUp}
              className="font-display text-6xl md:text-7xl font-light mb-3">
              Come Alive
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/50 text-sm mb-8">
              3:30 PM — 6:45 PM
            </motion.p>
            <motion.p variants={fadeUp} className="text-white/70 text-base leading-relaxed mb-10 max-w-md">
              Nukkad Natak with the thunder of Nashik Dhol. Sahaj Keertan that you won&apos;t
              be able to stay still for. Evening meal together. And then the ride back —
              quieter than you expected, fuller than you hoped.
            </motion.p>
            <motion.div variants={fadeUp}
              className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src={TOUR_IMG.comeAlive} alt="Come Alive"
                className="w-full h-full object-cover opacity-90" />
            </motion.div>
          </motion.div>
          {/* Right: schedule */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={vp} transition={{ duration: 0.8, delay: 0.15 }}
            className="pt-0 lg:pt-28">
            {comeAliveSchedule.map(({ time, act }) => (
              <ScheduleRow key={time} time={time} act={act} light={true} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── PRACTICAL INFORMATION ────────────────────────────── */}
      <section className="py-24 md:py-36 px-6 md:px-12 lg:px-20" style={{ background: '#FAF8F3' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger}
            className="mb-16">
            <motion.p variants={fadeUp}
              className="text-[10px] tracking-[0.45em] uppercase text-teal font-semibold mb-6">
              Practical Information
            </motion.p>
            <motion.h2 variants={fadeUp}
              className="font-display text-5xl md:text-6xl lg:text-7xl text-charcoal leading-[1.05]">
              Everything you need.<br />Nothing you don&apos;t.
            </motion.h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {practicalInfo.map(({ Icon, title, desc }, i) => (
              <motion.div key={title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={vp} transition={{ delay: i * 0.08, duration: 0.7 }}
                className="bg-white rounded-2xl p-8 border border-cream-dark">
                <div className="w-10 h-10 rounded-xl bg-sage flex items-center justify-center mb-6">
                  <Icon size={18} className="text-teal" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl text-charcoal font-light mb-3">{title}</h3>
                <p className="text-charcoal/55 text-sm leading-relaxed italic">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── REGISTRATION ─────────────────────────────────────── */}
      <section id="register" className="py-24 md:py-36 px-6 md:px-12 lg:px-20"
        style={{ background: '#ffffff' }}>
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger}
            className="mb-14">
            <motion.p variants={fadeUp}
              className="text-[10px] tracking-[0.45em] uppercase text-teal font-semibold mb-6">
              Registration
            </motion.p>
            <motion.h2 variants={fadeUp}
              className="font-display text-5xl md:text-6xl text-charcoal">
              Two ways to join us.
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Online */}
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={vp} transition={{ duration: 0.75 }}
              className="rounded-2xl p-10 border-2 flex flex-col"
              style={{ borderColor: '#D4712A' }}>
              <p className="text-[10px] tracking-[0.35em] uppercase font-semibold mb-4"
                style={{ color: '#D4712A' }}>Primary</p>
              <h3 className="font-display text-3xl text-charcoal font-light mb-2">Register Online</h3>
              <p className="text-charcoal/55 italic text-sm mb-8">
                Available across India. Fill the form, pay ₹500, get instant confirmation.
              </p>
              <div className="space-y-3 mb-10 flex-1">
                {['Open to participants nationwide', '₹500 per participant',
                  'Instant digital confirmation', 'Wristband collection at venue'].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <Check size={15} className="text-teal flex-shrink-0" />
                    <span className="text-charcoal/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4 flex-wrap">
                <span className="text-[10px] text-warm-gray border border-cream-dark px-3 py-1.5 rounded-full">
                  Registrations open 11th July 2026
                </span>
                <a href="mailto:Teamsahajspirit@gmail.com"
                  className="px-6 py-3 bg-orange text-white text-sm font-medium rounded-full hover:brightness-110 transition-all duration-300"
                  style={{ boxShadow: '0 6px 20px rgba(212,113,42,0.3)' }}>
                  Open Registration Form &nbsp;→
                </a>
              </div>
            </motion.div>

            {/* In-person */}
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={vp} transition={{ duration: 0.75, delay: 0.1 }}
              className="rounded-2xl p-10 border-2 flex flex-col"
              style={{ borderColor: '#007D78' }}>
              <p className="text-[10px] tracking-[0.35em] uppercase text-teal font-semibold mb-4">
                In-Person
              </p>
              <h3 className="font-display text-3xl text-charcoal font-light mb-2">Register in Delhi NCR</h3>
              <p className="text-charcoal/55 italic text-sm mb-8">
                Drop by selected pickup points across Delhi NCR. Talk to our team in person.
              </p>
              <div className="space-y-3 mb-10 flex-1">
                {['Available across Delhi, Noida, Gurugram, Ghaziabad, Greater Noida, Meerut, Khatauli, Khekda',
                  'Same ₹500 fee', 'In-person assistance from our team'].map(item => (
                  <div key={item} className="flex items-start gap-3">
                    <Check size={15} className="text-teal flex-shrink-0 mt-0.5" />
                    <span className="text-charcoal/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <a href="mailto:Teamsahajspirit@gmail.com"
                className="w-fit px-6 py-3 border border-teal text-teal text-sm font-medium rounded-full hover:bg-teal hover:text-white transition-all duration-300">
                View Pickup Points &nbsp;→
              </a>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={vp} transition={{ duration: 1, delay: 0.2 }}
            className="text-center text-charcoal/40 text-sm italic mt-10">
            Once registered, you&apos;ll get a wristband at the venue. That&apos;s your ticket in.
          </motion.p>
        </div>
      </section>

      {/* ─── MILESTONES ───────────────────────────────────────── */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20" style={{ background: '#FAF8F3' }}>
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={vp} variants={stagger}
            className="mb-16">
            <motion.p variants={fadeUp}
              className="text-[10px] tracking-[0.45em] uppercase text-teal font-semibold mb-6">
              Milestones
            </motion.p>
            <motion.h2 variants={fadeUp}
              className="font-display text-5xl md:text-6xl lg:text-7xl text-charcoal">
              The road to October.
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={vp} transition={{ duration: 0.8 }}
            className="relative">
            {/* Connecting line */}
            <div className="absolute top-4 left-0 right-0 h-px bg-charcoal/12 hidden sm:block" />
            <div className="flex flex-col sm:flex-row sm:justify-between gap-10 sm:gap-0">
              {milestones.map(({ date, label, done, active }) => (
                <div key={date} className="flex flex-col items-start sm:items-center sm:text-center">
                  {/* Circle */}
                  <div className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center mb-4 ${
                    done   ? 'bg-teal'
                    : active ? 'border-2 border-teal bg-white'
                    :          'border-2 bg-white' } `}
                    style={ !done && !active ? { borderColor: '#27211D30' } : {} }>
                    {done && <Check size={14} className="text-white" strokeWidth={2.5} />}
                  </div>
                  <p className={`font-display text-lg font-light ${active ? 'text-teal' : 'text-charcoal'}`}>
                    {date}
                  </p>
                  <p className="text-xs text-warm-gray mt-1 max-w-[120px]">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
