import { Link } from 'react-router-dom';
import { FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const WA_LINK = 'https://wa.me/919000000000';

export default function Footer() {
  return (
    <footer style={{ background: '#F0EDE6' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-16 pb-0">

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-14 border-b border-charcoal/10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-teal flex items-center justify-center flex-shrink-0">
                <span className="font-display text-white text-lg font-semibold">S</span>
              </div>
              <span className="font-display text-xl text-charcoal">Sahaj Spirit</span>
            </div>
            <p className="text-sm text-charcoal/55 leading-relaxed">
              Soulful Alliance of Happiness and Joy.<br />
              Established 2024.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <p className="text-[10px] tracking-[0.35em] uppercase text-teal font-semibold mb-6">
              Navigate
            </p>
            <div className="flex flex-col gap-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About' },
                { to: '/sahaj-tour', label: 'Events' },
                { href: 'mailto:Teamsahajspirit@gmail.com', label: 'Contact' },
              ].map(({ to, href, label }) =>
                href ? (
                  <a key={label} href={href}
                    className="text-sm text-charcoal/60 hover:text-teal transition-colors duration-200">
                    {label}
                  </a>
                ) : (
                  <Link key={label} to={to}
                    className="text-sm text-charcoal/60 hover:text-teal transition-colors duration-200">
                    {label}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Reach Us */}
          <div>
            <p className="text-[10px] tracking-[0.35em] uppercase text-teal font-semibold mb-6">
              Reach Us
            </p>
            <a href="mailto:Teamsahajspirit@gmail.com"
              className="flex items-center gap-2 text-sm text-charcoal/60 hover:text-teal transition-colors duration-200 mb-6">
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              Teamsahajspirit@gmail.com
            </a>
            <div className="flex items-center gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="text-charcoal/40 hover:text-teal transition-colors duration-200">
                <FaInstagram size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                className="text-charcoal/40 hover:text-teal transition-colors duration-200">
                <FaYoutube size={20} />
              </a>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                className="text-charcoal/40 hover:text-teal transition-colors duration-200">
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-8 text-center">
          <p className="font-display italic text-teal text-base mb-2">
            Your journey back to yourself starts here.
          </p>
          <p className="text-[11px] text-charcoal/35 tracking-wider">
            © 2026 Sahaj Spirit &nbsp;·&nbsp; Made with stillness.
          </p>
        </div>

      </div>
    </footer>
  );
}
