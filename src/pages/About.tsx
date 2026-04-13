import { useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Target, Eye, Users, Award, ArrowRight, CheckCircle } from 'lucide-react';

type Page = 'home' | 'about' | 'lineup' | 'vine' | 'contact';

interface AboutProps {
  onNavigate: (page: Page) => void;
}

const values = [
  { icon: Award, title: 'Excellence', desc: 'We hold ourselves to the highest standards in everything we do — from first contact to ongoing support.' },
  { icon: Users, title: 'People First', desc: 'Clients, candidates, and care recipients sit at the heart of every decision we make.' },
  { icon: Target, title: 'Integrity', desc: 'Honest, transparent, and accountable in every relationship we build and maintain.' },
  { icon: Eye, title: 'Innovation', desc: 'Continuously improving our processes and approaches to deliver better outcomes for all.' },
];

const stats = [
  { value: '500+', label: 'Staff Placed' },
  { value: '200+', label: 'Partner Organisations' },
  { value: '98%', label: 'Satisfaction Rate' },
  { value: '24/7', label: 'Support Available' },
];

export default function About({ onNavigate }: AboutProps) {
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-fade">

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-24 bg-[#0A1F44] overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-25" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#5DADE2]/10 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#5DADE2]/8 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="section-label text-[#5DADE2]/80 mb-5">Our Story</p>
          <h1 className="font-display text-[4rem] md:text-[5.5rem] text-white leading-[1.05] tracking-tight mb-6">
            About Us
          </h1>
          <p className="text-white/60 text-[1.05rem] font-light leading-relaxed max-w-2xl mx-auto">
            Established to bridge the gap between quality staffing and compassionate care delivery across the United Kingdom.
          </p>
        </div>

        {/* Stats strip */}
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/8 rounded-2xl overflow-hidden">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white/6 backdrop-blur-sm px-6 py-5 text-center">
                <p className="font-display text-[2rem] text-white leading-none mb-1">{stat.value}</p>
                <p className="text-white/50 text-xs font-medium tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Clean bottom border instead of fading gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </section>

      {/* ─── WHO WE ARE ───────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
            {/* Text */}
            <div className="reveal-left order-2 lg:order-1">
              <p className="section-label mb-4">Who We Are</p>
              <h2 className="display-md mb-6">Dual-Division Excellence</h2>
              <div className="space-y-4 mb-8">
                <p className="body-lg">
                  LRVLC was established to bridge the gap between quality staffing and compassionate care delivery. We operate through two specialised divisions forming a comprehensive service offering for organisations and individuals across the UK.
                </p>
                <p className="text-slate-500 text-[0.95rem] leading-relaxed font-light">
                  Our team brings together decades of experience in recruitment and care, combining industry knowledge with a genuine passion for making a meaningful impact on people's lives.
                </p>
                <p className="text-slate-500 text-[0.95rem] leading-relaxed font-light">
                  Whether you're seeking reliable staff, looking for your next role, or need expert care — LRVLC is your trusted UK partner.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {['Established UK organisation', 'Fully regulated', 'DBS-checked professionals', 'Nationwide coverage'].map((point) => (
                  <div key={point} className="flex items-center gap-2.5">
                    <CheckCircle size={14} className="text-[#5DADE2] flex-shrink-0" />
                    <span className="text-[#0A1F44] text-[0.84rem] font-medium">{point}</span>
                  </div>
                ))}
              </div>

              <button onClick={() => onNavigate('contact')} className="btn-primary">
                Work With Us <ArrowRight size={15} />
              </button>
            </div>

            {/* Image */}
            <div className="reveal-right order-1 lg:order-2 relative">
              <div className="image-frame aspect-[4/5] max-w-md lg:ml-auto">
                <img
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=700"
                  alt="LRVLC team"
                  className="img-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/40 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MISSION & VISION ─────────────────────────────────── */}
      <section className="py-28 bg-[#F8F9FC] relative overflow-hidden">
        <div className="absolute right-8 bottom-8 pointer-events-none select-none">
          <span className="font-display text-[12rem] text-[#0A1F44]/[0.03] leading-none">MV</span>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <p className="section-label mb-3">Our Foundation</p>
            <h2 className="display-md">Mission &amp; Vision</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Mission */}
            <div className="reveal-left bg-[#0A1F44] rounded-2xl p-10 relative overflow-hidden">
              <div className="absolute inset-0 dot-pattern opacity-30" />
              <div className="absolute top-0 right-0 w-56 h-56 bg-[#5DADE2]/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
              <div className="relative">
                <div className="icon-box bg-[#5DADE2]/15 mb-7">
                  <Target size={22} className="text-[#5DADE2]" />
                </div>
                <p className="text-[#5DADE2] text-[0.65rem] font-semibold tracking-[0.2em] uppercase mb-3">Our Mission</p>
                <h3 className="font-display text-[1.8rem] text-white mb-5 leading-snug">Driven by Purpose</h3>
                <p className="text-white/65 leading-relaxed font-light text-[0.95rem]">
                  To deliver exceptional recruitment and care services that improve lives, support organisations, and create meaningful connections — with integrity, compassion, and professionalism at every stage.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="reveal-right bg-white rounded-2xl p-10 border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-56 h-56 bg-[#5DADE2]/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
              <div className="relative">
                <div className="icon-box icon-box-light mb-7">
                  <Eye size={22} className="text-[#5DADE2]" />
                </div>
                <p className="section-label mb-3">Our Vision</p>
                <h3 className="font-display text-[1.8rem] text-[#0A1F44] mb-5 leading-snug">Setting the Benchmark</h3>
                <p className="text-slate-500 leading-relaxed font-light text-[0.95rem]">
                  To become the most trusted name in recruitment and care services across the UK — a brand synonymous with quality, reliability, and human-centred delivery that sets the standard for the entire industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CORE VALUES ──────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <p className="section-label mb-3">What We Stand For</p>
            <h2 className="display-md">Core Values</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <div
                key={v.title}
                className={`reveal card-premium p-8 text-center stagger-${i + 1} group`}
              >
                <div className="icon-box icon-box-gradient mx-auto mb-6 group-hover:shadow-md transition-shadow">
                  <v.icon size={20} className="text-white" />
                </div>
                <h4 className="font-bold text-[#0A1F44] text-[1.05rem] mb-3">{v.title}</h4>
                <p className="text-slate-500 text-[0.84rem] leading-relaxed font-light">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DIVISIONS INTRO ──────────────────────────────────── */}
      <section className="py-24 bg-[#F8F9FC] border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div
              className="reveal-left p-8 rounded-2xl bg-[#0A1F44] relative overflow-hidden group cursor-pointer transition-all duration-400 hover:shadow-premium-lg"
              onClick={() => onNavigate('lineup')}
            >
              <div className="absolute inset-0 dot-pattern opacity-25" />
              <div className="relative flex flex-col h-full">
                <img
                  src="https://res.cloudinary.com/dx2bbdxnw/image/upload/v1775920542/lineup-recruitmentIMG_2897.JPG_gabx1k.jpg"
                  alt="Lineup Recruitment"
                  className="h-10 w-auto object-cover rounded-lg mb-5 opacity-90"
                />
                <p className="text-white/60 text-[0.9rem] font-light leading-relaxed flex-1 mb-6">
                  Recruitment specialists connecting businesses with exceptional healthcare and hospitality professionals.
                </p>
                <div className="flex items-center gap-2 text-[#5DADE2] text-sm font-semibold group-hover:gap-3 transition-all">
                  View Lineup Recruitment <ArrowRight size={14} />
                </div>
              </div>
            </div>

            <div
              className="reveal-right p-8 rounded-2xl bg-white border border-slate-100 group cursor-pointer transition-all duration-400 hover:border-[#5DADE2]/30 hover:shadow-premium"
              onClick={() => onNavigate('vine')}
            >
              <img
                src="https://res.cloudinary.com/dx2bbdxnw/image/upload/v1775920584/vlc-lr1_w13kcf.jpg"
                alt="Vine Lodge Care"
                className="h-10 w-auto object-cover rounded-lg mb-5"
              />
              <p className="text-slate-500 text-[0.9rem] font-light leading-relaxed mb-6">
                Person-centred care services and healthcare staffing — delivering dignity, independence, and compassionate support.
              </p>
              <div className="flex items-center gap-2 text-[#0A1F44] text-sm font-semibold group-hover:text-[#5DADE2] group-hover:gap-3 transition-all">
                View Vine Lodge Care <ArrowRight size={14} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section className="cta-section py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center reveal">
          <h2 className="font-display text-[3rem] text-white leading-tight mb-5">
            Ready to Partner With Us?
          </h2>
          <p className="text-white/60 font-light text-[1rem] max-w-xl mx-auto mb-8">
            Discover how LRVLC can support your organisation or care journey. We're here to help.
          </p>
          <button onClick={() => onNavigate('contact')} className="btn-primary-white">
            Get in Touch <ArrowRight size={15} />
          </button>
        </div>
      </section>

    </div>
  );
}
