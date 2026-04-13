import { useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import {
  Clock, UserCheck, FileText, Repeat,
  Stethoscope, UtensilsCrossed, Building2, User,
  CheckCircle, ArrowRight, Zap,
} from 'lucide-react';

type Page = 'home' | 'about' | 'lineup' | 'vine' | 'contact';

interface LineupProps {
  onNavigate: (page: Page) => void;
}

const services = [
  { icon: Clock, title: 'Temporary Staffing', desc: 'Flexible placements from day cover to months-long contracts, filled quickly and reliably.' },
  { icon: UserCheck, title: 'Permanent Recruitment', desc: 'End-to-end recruitment for permanent roles — from sourcing and screening to placement.' },
  { icon: Repeat, title: 'Emergency Cover', desc: 'Rapid response staffing for urgent and unexpected workforce gaps, available around the clock.' },
  { icon: FileText, title: 'Contract Staffing', desc: 'Fixed-term professionals for project-based or specialist requirements.' },
];

const sectors = [
  {
    icon: Stethoscope,
    title: 'Healthcare',
    colour: 'navy',
    desc: 'Nurses, carers, support workers, and clinical staff placed across NHS and private healthcare organisations.',
    roles: ['Registered Nurses (RN)', 'Healthcare Assistants (HCA)', 'Support Workers', 'Clinical & Allied Health'],
  },
  {
    icon: UtensilsCrossed,
    title: 'Hospitality',
    colour: 'sky',
    desc: 'Front-of-house, kitchen, management, and events staff for hotels, restaurants, and venues nationwide.',
    roles: ['Chefs & Kitchen Staff', 'Front of House', 'Hotel & Venue Management', 'Event & Banqueting Staff'],
  },
];

const process = [
  { step: '01', title: 'Submit Your Brief', desc: 'Tell us exactly what you\'re looking for — role, skills, timeline, and culture.' },
  { step: '02', title: 'Candidate Matching', desc: 'We screen and shortlist only the most qualified and suitable candidates.' },
  { step: '03', title: 'Interview & Select', desc: 'Choose from a vetted shortlist with our full support throughout the process.' },
  { step: '04', title: 'Placed & Supported', desc: 'We handle onboarding and remain your dedicated, long-term point of contact.' },
];

const employerBenefits = [
  'Pre-vetted, DBS-checked candidates',
  'Rapid placement turnaround',
  'Dedicated account manager',
  'Flexible contract options',
  'Compliance & regulatory support',
  'Proactive talent pipeline',
];

const seekerBenefits = [
  'Access to exclusive vacancies',
  'Competitive pay rates',
  'Career progression support',
  'Flexible working arrangements',
  'Ongoing career guidance',
  'Quick registration process',
];

export default function LineupRecruitment({ onNavigate }: LineupProps) {
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-fade">

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-0 bg-[#0A1F44] overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-25" />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#5DADE2]/10 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#5DADE2]/8 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-end">
            {/* Left */}
            <div className="pb-16">
              <div className="flex items-center gap-3 mb-6">
                <img
                  src="https://res.cloudinary.com/dx2bbdxnw/image/upload/v1775920542/lineup-recruitmentIMG_2897.JPG_gabx1k.jpg"
                  alt="Lineup Recruitment"
                  className="h-10 w-auto object-cover rounded-lg opacity-90"
                />
                <span className="text-[#5DADE2] text-[0.65rem] font-semibold tracking-[0.2em] uppercase">Division One</span>
              </div>
              <h1 className="font-display text-[4rem] md:text-[5rem] text-white leading-[1.05] tracking-tight mb-5">
                Lineup<br />
                <em className="not-italic text-[#5DADE2]">Recruitment</em>
              </h1>
              <p className="text-white/60 text-[1.05rem] font-light leading-relaxed mb-8 max-w-lg">
                Specialist recruitment agency connecting businesses with skilled, vetted professionals across healthcare and hospitality.
              </p>
              <div className="flex flex-wrap gap-3">
                <button onClick={() => onNavigate('contact')} className="btn-primary-white">
                  Hire Staff Now <ArrowRight size={15} />
                </button>
                <button onClick={() => onNavigate('contact')} className="btn-outline-white">
                  Find Work
                </button>
              </div>
            </div>

            {/* Right image — flush to bottom */}
            <div className="hidden lg:block self-end">
              <div className="rounded-t-2xl overflow-hidden shadow-2xl border-t border-x border-white/10"
                   style={{ height: '440px' }}>
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=700"
                  alt="Recruitment professionals"
                  className="img-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─────────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 reveal">
            <div>
              <p className="section-label mb-3">What We Offer</p>
              <h2 className="display-md">Our Recruitment Services</h2>
            </div>
            <p className="text-slate-500 text-[0.93rem] leading-relaxed max-w-xs font-light lg:text-right">
              Tailored staffing solutions designed around your organisation's specific needs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <div key={s.title} className={`reveal card-premium p-7 group stagger-${i + 1}`}>
                <div className="icon-box icon-box-gradient mb-5 group-hover:shadow-md transition-shadow">
                  <s.icon size={20} className="text-white" />
                </div>
                <h4 className="font-bold text-[#0A1F44] text-[0.97rem] mb-2.5">{s.title}</h4>
                <p className="text-slate-500 text-[0.84rem] leading-relaxed font-light">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTORS ──────────────────────────────────────────── */}
      <section className="py-28 bg-[#F8F9FC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <p className="section-label mb-3">Industries</p>
            <h2 className="display-md">Sectors We Serve</h2>
            <p className="text-slate-500 text-[0.93rem] font-light mt-4 max-w-md mx-auto">
              Deep expertise across two high-demand sectors, delivering specialists who make an immediate impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {sectors.map((sector, i) => (
              <div
                key={sector.title}
                className={`reveal stagger-${i + 1} ${sector.colour === 'navy' ? 'bg-[#0A1F44]' : 'bg-white border border-slate-100'} rounded-2xl overflow-hidden`}
              >
                <div className="p-10">
                  <div className="flex items-start gap-5 mb-6">
                    <div className={`icon-box flex-shrink-0 ${sector.colour === 'navy' ? 'bg-[#5DADE2]/15' : 'icon-box-gradient'}`}>
                      <sector.icon size={22} className={sector.colour === 'navy' ? 'text-[#5DADE2]' : 'text-white'} />
                    </div>
                    <div>
                      <h3 className={`font-display text-[1.7rem] leading-snug ${sector.colour === 'navy' ? 'text-white' : 'text-[#0A1F44]'}`}>
                        {sector.title}
                      </h3>
                      <p className={`text-[0.84rem] font-light leading-relaxed mt-2 ${sector.colour === 'navy' ? 'text-white/60' : 'text-slate-500'}`}>
                        {sector.desc}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    {sector.roles.map((role) => (
                      <div key={role} className="flex items-center gap-2.5">
                        <CheckCircle size={13} className="text-[#5DADE2] flex-shrink-0" />
                        <span className={`text-[0.84rem] font-medium ${sector.colour === 'navy' ? 'text-white/75' : 'text-slate-600'}`}>
                          {role}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOR EMPLOYERS & JOB SEEKERS ──────────────────────── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <p className="section-label mb-3">Who We Help</p>
            <h2 className="display-md">Built for Employers<br />and Job Seekers</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Employers */}
            <div className="reveal-left bg-[#0A1F44] rounded-2xl p-10 relative overflow-hidden">
              <div className="absolute inset-0 dot-pattern opacity-20" />
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#5DADE2]/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
              <div className="relative">
                <div className="icon-box bg-[#5DADE2]/15 mb-7">
                  <Building2 size={22} className="text-[#5DADE2]" />
                </div>
                <h3 className="font-display text-[1.8rem] text-white mb-4">For Employers</h3>
                <p className="text-white/60 text-[0.93rem] leading-relaxed font-light mb-7">
                  Find qualified, reliable staff quickly. Our rigorous vetting process ensures you receive only the best-matched candidates for your specific needs.
                </p>
                <ul className="space-y-2.5 mb-8">
                  {employerBenefits.map((b) => (
                    <li key={b} className="flex items-center gap-2.5 text-[0.84rem] text-white/75">
                      <CheckCircle size={13} className="text-[#5DADE2] flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <button onClick={() => onNavigate('contact')} className="btn-sky">
                  Start Hiring <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Job Seekers */}
            <div className="reveal-right bg-[#F8F9FC] rounded-2xl p-10 border border-slate-100">
              <div className="icon-box icon-box-light mb-7">
                <User size={22} className="text-[#5DADE2]" />
              </div>
              <h3 className="font-display text-[1.8rem] text-[#0A1F44] mb-4">For Job Seekers</h3>
              <p className="text-slate-500 text-[0.93rem] leading-relaxed font-light mb-7">
                We connect you with rewarding opportunities that match your skills, experience, and ambitions — in healthcare or hospitality.
              </p>
              <ul className="space-y-2.5 mb-8">
                {seekerBenefits.map((b) => (
                  <li key={b} className="flex items-center gap-2.5 text-[0.84rem] text-slate-600">
                    <CheckCircle size={13} className="text-[#5DADE2] flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              <button onClick={() => onNavigate('contact')} className="btn-primary">
                Register Today <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROCESS ──────────────────────────────────────────── */}
      <section className="py-28 bg-[#F8F9FC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <p className="section-label mb-3">How It Works</p>
            <h2 className="display-md">Our Placement Process</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <div className="hidden lg:block absolute top-9 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[#5DADE2]/30 to-transparent" style={{ zIndex: 0 }} />
            {process.map((p, i) => (
              <div key={p.step} className={`reveal stagger-${i + 1} relative z-10 text-center`}>
                <div className="w-[72px] h-[72px] rounded-2xl bg-[#0A1F44] flex items-center justify-center mx-auto mb-5 shadow-premium">
                  <span className="font-display text-[1.5rem] text-[#5DADE2]">{p.step}</span>
                </div>
                <h4 className="font-bold text-[#0A1F44] text-[0.95rem] mb-2.5">{p.title}</h4>
                <p className="text-slate-500 text-[0.84rem] leading-relaxed font-light">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section className="cta-section py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center reveal">
          <div className="flex items-center justify-center gap-2 mb-5">
            <Zap size={16} className="text-[#5DADE2]" />
            <span className="text-[#5DADE2] text-[0.65rem] font-semibold tracking-[0.2em] uppercase">Fast. Reliable. Vetted.</span>
          </div>
          <h2 className="font-display text-[3rem] text-white leading-tight mb-5">
            Let's Find the Right People<br />for Your Team
          </h2>
          <p className="text-white/55 font-light text-[1rem] mb-8 max-w-md mx-auto">
            Whether you need staff today or are planning ahead, Lineup Recruitment has the talent you need.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <button onClick={() => onNavigate('contact')} className="btn-primary-white">
              Get in Touch <ArrowRight size={15} />
            </button>
            <button onClick={() => onNavigate('about')} className="btn-outline-white">
              About LRVLC
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
