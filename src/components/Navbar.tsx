import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

type Page = 'home' | 'about' | 'lineup' | 'vine' | 'contact';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const getLogoUrl = (page: Page): string => {
  switch (page) {
    case 'lineup':
      return 'https://res.cloudinary.com/dx2bbdxnw/image/upload/v1775920542/lineup-recruitmentIMG_2897.JPG_gabx1k.jpg';
    case 'vine':
      return 'https://res.cloudinary.com/dx2bbdxnw/image/upload/v1775920584/vlc-lr1_w13kcf.jpg';
    default:
      return 'https://res.cloudinary.com/dx2bbdxnw/image/upload/v1775920583/full-logo--lineup--_bk01pq.png';
  }
};

const navLinks: { label: string; page: Page }[] = [
  { label: 'Home', page: 'home' },
  { label: 'About', page: 'about' },
  { label: 'Lineup Recruitment', page: 'lineup' },
  { label: 'Vine Lodge Care', page: 'vine' },
  { label: 'Contact', page: 'contact' },
];

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  const logoUrl = getLogoUrl(currentPage);

  useEffect(() => {
    const onScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNav = (page: Page) => {
    onNavigate(page);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const announcementHeight = showAnnouncement ? 36 : 0;

  return (
    <>
      {/* ── Announcement Bar ── */}
      {showAnnouncement && (
        <div
          className="announcement-bar fixed top-0 left-0 right-0 z-[60] flex items-center justify-center px-4 overflow-hidden"
          style={{ height: `${announcementHeight}px` }}
        >
          <div className="flex items-center gap-2 text-white/80 text-[0.65rem] tracking-[0.12em] uppercase"
            style={{ fontFamily: 'Montserrat, system-ui, sans-serif', fontWeight: 600 }}>
            <span className="w-1.5 h-1.5 bg-[#5DADE2] rounded-full animate-pulse flex-shrink-0" />
            <span>Trusted by care providers &amp; organisations across the UK</span>
            <span className="hidden sm:inline mx-2 text-white/20">·</span>
            <button
              className="hidden sm:inline text-[#5DADE2] hover:text-white transition-colors"
              onClick={() => handleNav('contact')}
            >
              Get in Touch →
            </button>
          </div>
          <button
            onClick={() => setShowAnnouncement(false)}
            className="absolute right-4 text-white/40 hover:text-white/80 transition-colors p-1"
            aria-label="Dismiss"
          >
            <X size={11} />
          </button>
        </div>
      )}

      {/* ── Main Navbar — always white ── */}
      <nav
        style={{ top: `${announcementHeight}px` }}
        className="fixed left-0 right-0 z-50 bg-white border-b border-slate-100 shadow-[0_2px_16px_rgba(10,31,68,0.06)]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-[68px]">

            {/* Logo only — name is inside the logo image */}
            <button
              onClick={() => handleNav('home')}
              className="flex items-center flex-shrink-0 group"
              aria-label="Go to home"
            >
              <div className="relative h-14 w-auto overflow-hidden rounded-lg">
                <img
                  key={logoUrl}
                  src={logoUrl}
                  alt="LRVLC"
                  className="h-14 w-auto object-cover transition-opacity duration-300"
                />
              </div>
            </button>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <button
                  key={link.page}
                  onClick={() => handleNav(link.page)}
                  className={`nav-link ${currentPage === link.page ? 'active' : ''}`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+442084322258"
                className="btn-primary text-[0.8rem] px-6 py-2.5 flex items-center gap-2 no-underline"
              >
                <Phone size={14} />
                +44 208 432 2258
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden p-2 rounded-lg text-[#0A1F44] hover:bg-slate-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Scroll Progress */}
        <div
          className="absolute bottom-0 left-0 h-[2.5px] bg-gradient-to-r from-[#0A1F44] via-[#5DADE2] to-[#0A1F44] transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </nav>

      {/* ── Mobile Menu ── */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-350 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ top: `${announcementHeight}px` }}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[#0A1F44]/25 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />

        {/* Slide-in panel */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-[300px] bg-white shadow-2xl flex flex-col transition-transform duration-400 ease-out ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
            <img src={logoUrl} alt="LRVLC" className="h-11 w-auto object-cover rounded-md" />
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 rounded-lg text-slate-400 hover:text-[#0A1F44] hover:bg-slate-100 transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Links */}
          <nav className="flex-1 px-4 py-4 overflow-y-auto">
            <div className="space-y-0.5">
              {navLinks.map((link) => (
                <button
                  key={link.page}
                  onClick={() => handleNav(link.page)}
                  className={`w-full text-left px-4 py-3.5 rounded-xl text-[0.88rem] font-semibold tracking-wide transition-all duration-200 flex items-center justify-between ${
                    currentPage === link.page
                      ? 'bg-[#0A1F44] text-white'
                      : 'text-slate-700 hover:bg-slate-100/80 hover:text-[#0A1F44]'
                  }`}
                  style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}
                >
                  {link.label}
                  {currentPage === link.page && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5DADE2]" />
                  )}
                </button>
              ))}
            </div>
          </nav>

          {/* CTA */}
          <div className="px-4 py-5 border-t border-slate-100 space-y-3">
            <a
              href="tel:+442084322258"
              className="btn-primary w-full py-3.5 flex items-center justify-center gap-2 no-underline"
            >
              <Phone size={15} />
              +44 208 432 2258
            </a>
            <a
              href="mailto:hello@lrvlc.com"
              className="block text-center text-[#5DADE2] text-xs font-medium no-underline hover:text-[#0A1F44] transition-colors"
            >
              hello@lrvlc.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
