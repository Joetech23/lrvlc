import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import LineupRecruitment from './pages/LineupRecruitment';
import VineLodgeCare from './pages/VineLodgeCare';
import Contact from './pages/Contact';

type Page = 'home' | 'about' | 'lineup' | 'vine' | 'contact';

/* ── WhatsApp SVG Icon ────────────────────────────────── */
function WhatsAppIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

/* ── Loading Screen ───────────────────────────────────── */
function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-[#0A1F44] flex flex-col items-center justify-center z-[100]">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="relative flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-3">
          <img
            src="https://res.cloudinary.com/dx2bbdxnw/image/upload/v1775920583/full-logo--lineup--_bk01pq.png"
            alt="LRVLC"
            className="h-14 w-auto object-contain opacity-95"
          />
          <p className="text-[#5DADE2] text-[0.62rem] font-bold tracking-[0.28em] uppercase mt-1"
            style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Lineup Recruitment &amp; Vine Lodge Care
          </p>
        </div>
        <div className="w-48 h-px bg-white/10 rounded-full overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#5DADE2] to-white rounded-full loading-line" />
        </div>
        <p className="text-white/25 text-[0.68rem] tracking-[0.18em] uppercase font-light">
          Connecting Talent. Delivering Care.
        </p>
      </div>
    </div>
  );
}

/* ── Sticky FAB (WhatsApp + Phone) ───────────────────── */
function StickyFAB() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-7 right-6 z-50 flex flex-col gap-3 transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      {/* WhatsApp */}
      <a
        href="https://wa.me/440000000000"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
        className="fab-btn bg-[#25D366] text-white"
      >
        <WhatsAppIcon size={22} />
      </a>

      {/* Phone */}
      <a
        href="tel:+440000000000"
        title="Call us"
        className="fab-btn bg-[#0A1F44] text-white"
      >
        <Phone size={20} />
      </a>
    </div>
  );
}

/* ── App ──────────────────────────────────────────────── */
export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':    return <Home onNavigate={setCurrentPage} />;
      case 'about':   return <About onNavigate={setCurrentPage} />;
      case 'lineup':  return <LineupRecruitment onNavigate={setCurrentPage} />;
      case 'vine':    return <VineLodgeCare onNavigate={setCurrentPage} />;
      case 'contact': return <Contact />;
      default:        return <Home onNavigate={setCurrentPage} />;
    }
  };

  if (loading) return <LoadingScreen />;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-1">{renderPage()}</main>
      <Footer onNavigate={setCurrentPage} />
      <StickyFAB />
    </div>
  );
}
