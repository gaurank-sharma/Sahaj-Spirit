import { Link } from 'react-router-dom';

const WA_LINK = 'https://wa.me/919000000000';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current flex-shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 pb-16 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-10 w-10 rounded-full overflow-hidden border border-teal/40">
                <img
                  src="/logo.png"
                  alt="Sahaj Spirit"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.parentElement.classList.add('bg-teal', 'flex', 'items-center', 'justify-center');
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <div>
                <div className="font-display text-xl text-white">Sahaj Spirit</div>
                <div className="text-[9px] tracking-[0.2em] uppercase text-teal-light">Soulful Alliance of Happiness &amp; Joy</div>
              </div>
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              A space to return to yourself. No performance, no pretense — just the quiet joy of being human, together.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-6">Navigate</p>
            <div className="flex flex-col gap-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/sahaj-tour', label: 'Sahaj Tour' },
              ].map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="text-sm text-white/60 hover:text-teal-light transition-colors duration-200"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-6">Connect</p>
            <p className="text-sm text-white/60 mb-1">Write to us at</p>
            <a
              href="mailto:hello@sahajspirit.in"
              className="text-orange text-sm hover:text-orange/80 transition-colors"
            >
              hello@sahajspirit.in
            </a>
            <div className="mt-8">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-3 bg-[#25D366] text-white text-xs tracking-widest rounded-full hover:bg-[#1ebe5a] transition-colors"
              >
                <WhatsAppIcon />
                Join Community
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-white/25 tracking-widest">
          <span>© 2026 Sahaj Spirit. Made with stillness.</span>
          <span className="font-display italic text-white/15 text-base">सहज</span>
        </div>
      </div>
    </footer>
  );
}
