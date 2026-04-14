import { useState, useEffect } from 'react';
import { Phone, Mail } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import LineupRecruitment from './pages/LineupRecruitment';
import VineLodgeCare from './pages/VineLodgeCare';
import Contact from './pages/Contact';

type Page = 'home' | 'about' | 'lineup' | 'vine' | 'contact';

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
      {/* Email */}
      <a
        href="mailto:hello@lrvlc.com"
        title="Email us"
        className="fab-btn bg-[#5DADE2] text-white"
      >
        <Mail size={20} />
      </a>

      {/* Phone */}
      <a
        href="tel:+442084322258"
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

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-1">{renderPage()}</main>
      <Footer onNavigate={setCurrentPage} />
      <StickyFAB />
    </div>
  );
}
