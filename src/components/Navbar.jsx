import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const WA_LINK = 'https://wa.me/919000000000';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/sahaj-tour', label: 'Events' },
    { to: '/contact', label: 'Contact', href: 'mailto:hello@sahajspirit.in' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/98 backdrop-blur-md border-b border-cream-dark/70 py-3 shadow-sm'
            : 'bg-white/90 backdrop-blur-sm border-b border-cream-dark/40 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative h-11 w-11 rounded-full overflow-hidden border-2 border-teal/30 group-hover:border-teal transition-colors duration-300">
              <img
                src="/logo.png"
                alt="Sahaj Spirit"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.classList.add('bg-teal', 'flex', 'items-center', 'justify-center');
                  e.target.parentElement.innerHTML = '<span class="text-white font-display text-lg font-semibold">S</span>';
                }}
              />
            </div>
            <div className="leading-snug">
              <div className="font-display text-[1.15rem] font-semibold tracking-wide text-charcoal">
                Sahaj Spirit
              </div>
              <div className="text-[9px] tracking-[0.2em] uppercase text-warm-gray">
                Soulful Alliance of Happiness &amp; Joy
              </div>
            </div>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(({ to, label, href }) =>
              href ? (
                <a
                  key={to}
                  href={href}
                  className="text-[11px] tracking-[0.2em] uppercase font-medium text-charcoal/60 hover:text-teal transition-colors duration-200"
                >
                  {label}
                </a>
              ) : (
                <Link
                  key={to}
                  to={to}
                  className={`text-[11px] tracking-[0.2em] uppercase font-medium transition-colors duration-200 ${
                    pathname === to ? 'text-teal' : 'text-charcoal/60 hover:text-teal'
                  }`}
                >
                  {label}
                </Link>
              )
            )}
            <Link
              to="/sahaj-tour"
              className="flex items-center gap-2 px-5 py-2.5 bg-orange text-white text-[11px] tracking-[0.15em] uppercase rounded-full hover:brightness-110 transition-all duration-200"
              style={{ boxShadow: '0 4px 16px rgba(212,113,42,0.3)' }}
            >
              Register &nbsp;→
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-1 text-charcoal transition-colors"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-cream border-t border-cream-dark px-6 py-5 flex flex-col gap-5">
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`text-[11px] tracking-[0.2em] uppercase font-medium ${
                  pathname === to ? 'text-teal' : 'text-charcoal/70'
                }`}
              >
                {label}
              </Link>
            ))}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit flex items-center gap-2 px-5 py-2.5 bg-teal text-white text-[11px] tracking-[0.15em] uppercase rounded-full"
            >
              Join WhatsApp Community
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
