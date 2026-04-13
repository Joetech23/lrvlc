import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

type Page = 'home' | 'about' | 'lineup' | 'vine' | 'contact';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNav = (page: Page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A1F44] text-white relative overflow-hidden">
      {/* Dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-25 pointer-events-none" />
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#5DADE2]/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Main grid */}
        <div className="pt-16 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 border-b border-white/10">

          {/* Brand column */}
          <div className="lg:col-span-4">
            <img
              src="https://res.cloudinary.com/dx2bbdxnw/image/upload/v1775920583/full-logo--lineup--_bk01pq.png"
              alt="LRVLC"
              className="h-12 w-auto object-contain mb-5 opacity-95"
            />
            <p className="text-slate-300 text-[0.9rem] leading-relaxed mb-6 max-w-xs font-light">
              A UK dual-service organisation connecting talent and delivering compassionate care — with integrity and professionalism.
            </p>

            {/* Social icons */}
            <div className="flex gap-2.5">
              {[
                { Icon: Linkedin, label: 'LinkedIn' },
                { Icon: Twitter, label: 'Twitter' },
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Instagram, label: 'Instagram' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center hover:bg-[#5DADE2] hover:border-[#5DADE2] transition-all duration-250"
                >
                  <Icon size={14} className="text-slate-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigate column */}
          <div className="lg:col-span-2">
            <h4 className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-[#5DADE2] mb-5"
              style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Navigate
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', page: 'home' as Page },
                { label: 'About Us', page: 'about' as Page },
                { label: 'Lineup Recruitment', page: 'lineup' as Page },
                { label: 'Vine Lodge Care', page: 'vine' as Page },
                { label: 'Contact', page: 'contact' as Page },
              ].map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => handleNav(link.page)}
                    className="text-slate-300 hover:text-white text-[0.87rem] transition-colors duration-200 link-underline font-light"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services column */}
          <div className="lg:col-span-3">
            <h4 className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-[#5DADE2] mb-5"
              style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Our Services
            </h4>
            <ul className="space-y-3">
              {[
                'Temporary Staffing',
                'Permanent Recruitment',
                'Emergency Cover',
                'Home Care',
                'Complex Care',
                'Healthcare Staffing',
              ].map((service) => (
                <li key={service} className="flex items-center gap-2 text-slate-300 text-[0.87rem] font-light">
                  <span className="w-1 h-1 rounded-full bg-[#5DADE2]/70 flex-shrink-0" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div className="lg:col-span-3">
            <h4 className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-[#5DADE2] mb-5"
              style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Get in Touch
            </h4>
            <ul className="space-y-4">
              {[
                { Icon: Phone, text: '+44 (0) 000 000 0000', sub: 'Mon–Fri, 9am–5pm' },
                { Icon: Mail, text: 'info@lrvlc.co.uk', sub: 'Reply within 24 hours' },
                { Icon: MapPin, text: 'United Kingdom', sub: 'Nationwide service' },
              ].map(({ Icon, text, sub }) => (
                <li key={text} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/8 border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={13} className="text-[#5DADE2]" />
                  </div>
                  <div>
                    <p className="text-white text-[0.86rem] font-medium">{text}</p>
                    <p className="text-slate-400 text-[0.75rem] mt-0.5 font-light">{sub}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-[0.8rem] font-light">
            &copy; {new Date().getFullYear()} LRVLC – Lineup Recruitment &amp; Vine Lodge Care. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-slate-400 hover:text-white text-[0.78rem] transition-colors duration-200 font-light"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
