import { useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import {
  Home, Heart, Stethoscope, Users, UserCheck,
  Leaf, CheckCircle, ArrowRight, Star, Shield,
} from 'lucide-react';

type Page = 'home' | 'about' | 'lineup' | 'vine' | 'contact';

interface VineProps {
  onNavigate: (page: Page) => void;
}

const services = [
  {
    icon: Home,
    title: 'Home Care',
    desc: 'Daily support, personal care, and companionship delivered with dignity in the comfort of home.',
    features: ['Personal care & hygiene', 'Medication management', 'Meal preparation', 'Companionship visits'],
    accent: 'sky',
  },
  {
    icon: Stethoscope,
    title: 'Complex Care',
    desc: 'Specialist care for individuals with advanced or complex medical needs — delivered by highly trained professionals.',
    features: ['Ventilator care', 'PEG feeding support', 'Neurological conditions', 'Post-hospital recovery'],
    accent: 'navy',
  },
  {
    icon: UserCheck,
    title: 'Healthcare Staffing',
    desc: 'Supplying trained healthcare professionals to care homes, hospitals, and community settings across the UK.',
    features: ['Registered nurses', 'Care assistants', 'Support workers', 'Community carers'],
    accent: 'sky',
  },
];

const whoWeSupport = [
  { icon: Users, title: 'Elderly Individuals', desc: 'Tailored care for older adults to maintain independence, comfort, and dignity at home.' },
  { icon: Heart, title: 'People with Disabilities', desc: 'Specialist support that promotes quality of life, self-determination, and dignity.' },
  { icon: Star, title: 'Complex Care Needs', desc: 'Expert support for high-dependency conditions requiring specialist, ongoing care.' },
  { icon: Shield, title: 'Families & Carers', desc: 'Providing peace of mind for families — reliable care when and where it\'s needed.' },
];

const approach = [
  { num: '01', title: 'Initial Assessment', desc: 'A thorough assessment of needs, preferences, goals, and home environment.' },
  { num: '02', title: 'Care Plan Design', desc: 'A personalised care plan co-created with the individual, family, and our team.' },
  { num: '03', title: 'Staff Matching', desc: 'Careful matching of carers to ensure compatibility, consistency, and trust.' },
  { num: '04', title: 'Ongoing Review', desc: 'Regular check-ins and reviews to adapt care as needs evolve over time.' },
];

export default function VineLodgeCare({ onNavigate }: VineProps) {
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

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-end">
            {/* Left */}
            <div className="pb-16">
              <div className="flex items-center gap-3 mb-6">
                <img
                  src="https://res.cloudinary.com/dx2bbdxnw/image/upload/v1775920584/vlc-lr1_w13kcf.jpg"
                  alt="Vine Lodge Care"
                  className="h-10 w-auto object-cover rounded-lg opacity-90"
                />
                <span className="text-[#5DADE2] text-[0.65rem] font-semibold tracking-[0.2em] uppercase">Division Two</span>
              </div>
              <h1 className="font-display text-[4rem] md:text-[5rem] text-white leading-[1.05] tracking-tight mb-5">
                Vine Lodge<br />
                <em className="not-italic text-[#5DADE2]">Care</em>
              </h1>
              <p className="text-white/60 text-[1.05rem] font-light leading-relaxed mb-8 max-w-lg">
                Compassionate, person-centred care services and healthcare staffing — prioritising dignity, independence, and quality of life.
              </p>
              <div className="flex flex-wrap gap-3">
                <button onClick={() => onNavigate('contact')} className="btn-primary-white">
                  Request Care <ArrowRight size={15} />
                </button>
                <button onClick={() => onNavigate('contact')} className="btn-outline-white">
                  Healthcare Staffing
                </button>
              </div>
            </div>

            {/* Right image — flush to bottom */}
            <div className="hidden lg:block self-end">
              <div className="rounded-t-2xl overflow-hidden shadow-2xl border-t border-x border-white/10"
                   style={{ height: '440px' }}>
                <img
                  src="https://images.pexels.com/photos/7551617/pexels-photo-7551617.jpeg?auto=compress&cs=tinysrgb&w=700"
                  alt="Care professionals"
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
              <p className="section-label mb-3">What We Provide</p>
              <h2 className="display-md">Our Care Services</h2>
            </div>
            <p className="text-slate-500 text-[0.93rem] font-light leading-relaxed max-w-xs lg:text-right">
              Every service is designed around the individual — their needs, their preferences, their life.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <div
                key={s.title}
                className={`reveal stagger-${i + 1} rounded-2xl overflow-hidden ${
                  s.accent === 'navy' ? 'bg-[#0A1F44]' : 'bg-white border border-slate-100'
                } transition-all duration-400 hover:shadow-premium`}
              >
                <div className="p-8">
                  <div className={`icon-box mb-6 ${s.accent === 'navy' ? 'bg-[#5DADE2]/15' : 'icon-box-gradient'}`}>
                    <s.icon size={22} className={s.accent === 'navy' ? 'text-[#5DADE2]' : 'text-white'} />
                  </div>
                  <h3 className={`font-display text-[1.5rem] mb-3 leading-snug ${s.accent === 'navy' ? 'text-white' : 'text-[#0A1F44]'}`}>
                    {s.title}
                  </h3>
                  <p className={`text-[0.86rem] leading-relaxed font-light mb-6 ${s.accent === 'navy' ? 'text-white/60' : 'text-slate-500'}`}>
                    {s.desc}
                  </p>
                  <ul className="space-y-2.5">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5">
                        <CheckCircle size={13} className="text-[#5DADE2] flex-shrink-0" />
                        <span className={`text-[0.83rem] font-medium ${s.accent === 'navy' ? 'text-white/70' : 'text-slate-600'}`}>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── APPROACH / PHILOSOPHY ────────────────────────────── */}
      <section className="py-28 bg-[#F8F9FC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
            {/* Image */}
            <div className="reveal-left relative">
              <div className="image-frame aspect-[4/5] max-w-md">
                <img
                  src="https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg?auto=compress&cs=tinysrgb&w=700"
                  alt="Person-centred care"
                  className="img-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-premium">
                    <div className="w-9 h-9 rounded-lg bg-[#5DADE2]/15 flex items-center justify-center flex-shrink-0">
                      <Leaf size={16} className="text-[#5DADE2]" />
                    </div>
                    <div>
                      <p className="text-[#0A1F44] font-bold text-[0.85rem]">Person-Centred Philosophy</p>
                      <p className="text-slate-500 text-[0.74rem] mt-0.5 font-light">Your needs, your choices, your care</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text + Steps */}
            <div className="reveal-right">
              <p className="section-label mb-4">Our Philosophy</p>
              <h2 className="display-md mb-6">
                Dignity, Independence,<br />Personalised Care
              </h2>
              <p className="text-slate-500 leading-relaxed font-light text-[0.95rem] mb-10">
                We focus on dignity, independence, and truly personalised care plans. Every individual receives care tailored to their unique circumstances — delivered by compassionate professionals who genuinely care.
              </p>

              <div className="space-y-5">
                {approach.map((a, i) => (
                  <div key={a.num} className={`flex gap-5 reveal stagger-${i + 1}`}>
                    <div className="w-12 h-12 rounded-xl bg-[#0A1F44] flex items-center justify-center flex-shrink-0 shadow-md">
                      <span className="font-display text-[#5DADE2] text-[0.9rem]">{a.num}</span>
                    </div>
                    <div className="pt-1">
                      <h4 className="font-bold text-[#0A1F44] text-[0.95rem] mb-1.5">{a.title}</h4>
                      <p className="text-slate-500 text-[0.84rem] leading-relaxed font-light">{a.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHO WE SUPPORT ───────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <p className="section-label mb-3">Our Community</p>
            <h2 className="display-md">Who We Support</h2>
            <p className="text-slate-500 text-[0.93rem] font-light mt-4 max-w-md mx-auto">
              Vine Lodge Care provides specialist, personalised support for individuals with a wide range of needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {whoWeSupport.map((w, i) => (
              <div key={w.title} className={`reveal stagger-${i + 1} card-premium p-7 text-center group`}>
                <div className="icon-box icon-box-gradient mx-auto mb-5 group-hover:shadow-md transition-shadow">
                  <w.icon size={20} className="text-white" />
                </div>
                <h4 className="font-bold text-[#0A1F44] text-[0.97rem] mb-2.5">{w.title}</h4>
                <p className="text-slate-500 text-[0.83rem] leading-relaxed font-light">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section className="cta-section py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center reveal">
          <div className="flex items-center justify-center gap-2 mb-5">
            <Heart size={16} className="text-[#5DADE2]" />
            <span className="text-[#5DADE2] text-[0.65rem] font-semibold tracking-[0.2em] uppercase">Compassionate. Professional. Personalised.</span>
          </div>
          <h2 className="font-display text-[3rem] text-white leading-tight mb-5">
            Start Your Care Journey<br />
            <em className="not-italic text-[#5DADE2]">Today</em>
          </h2>
          <p className="text-white/55 font-light text-[1rem] mb-8 max-w-md mx-auto">
            Contact our care team to discuss your needs and find out how Vine Lodge Care can support you or your loved one.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <button onClick={() => onNavigate('contact')} className="btn-primary-white">
              Request a Care Assessment <ArrowRight size={15} />
            </button>
            <button onClick={() => onNavigate('lineup')} className="btn-outline-white">
              View Lineup Recruitment
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
