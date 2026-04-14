import { useEffect, useRef, useState, useCallback } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import {
  ArrowRight, Shield, Zap, Heart, CheckCircle, Users,
  Briefcase, Stethoscope, Home as HomeIcon, Star,
  Phone, Building2, ChevronLeft, ChevronRight,
} from 'lucide-react';

type Page = 'home' | 'about' | 'lineup' | 'vine' | 'contact';
interface HomeProps { onNavigate: (page: Page) => void; }

/* ── Hero Slides ─────────────────────────────────────── */
const heroSlides = [
  {
    id: 0,
    tag: 'UK Recruitment & Care Specialists',
    title: ['Connecting', 'Talent.', 'Delivering', 'Care.'],
    highlight: [1, 3],
    desc: 'LRVLC combines expert recruitment with compassionate care through two specialist divisions - Lineup Recruitment and Vine Lodge Care.',
    ctas: [
      { label: 'Hire Staff', page: 'lineup' as Page, style: 'white' },
      { label: 'Find Work', page: 'lineup' as Page, style: 'outline' },
      { label: 'Request Care', page: 'vine' as Page, style: 'sky' },
    ],
    image: 'https://images.pexels.com/photos/3844581/pexels-photo-3844581.jpeg?auto=compress&cs=tinysrgb&w=1400',
    stat1: { value: '500+', label: 'Professionals Placed' },
    stat2: { value: '98%', label: 'Client Satisfaction' },
  },
  {
    id: 1,
    tag: 'Division One, Lineup Recruitment',
    title: ['Expert Staffing', 'Across', 'Healthcare &', 'Hospitality.'],
    highlight: [2],
    desc: 'Lineup Recruitment connects organisations with skilled, vetted professionals — fast, reliable, and tailored to your sector.',
    ctas: [
      { label: 'Hire Staff Now', page: 'lineup' as Page, style: 'white' },
      { label: 'Register as Candidate', page: 'lineup' as Page, style: 'outline' },
    ],
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1400',
    stat1: { value: '24/7', label: 'Emergency Cover' },
    stat2: { value: '200+', label: 'Partner Organisations' },
  },
  {
    id: 2,
    tag: 'Division Two, Vine Lodge Care',
    title: ['Compassionate', 'Care,', 'Delivered With', 'Dignity.'],
    highlight: [0, 2],
    desc: 'Vine Lodge Care provides person-centred home care, complex care, and healthcare staffing, built around the individual.',
    ctas: [
      { label: 'Request Care', page: 'vine' as Page, style: 'white' },
      { label: 'Healthcare Staffing', page: 'vine' as Page, style: 'outline' },
    ],
    image: 'https://images.pexels.com/photos/7551617/pexels-photo-7551617.jpeg?auto=compress&cs=tinysrgb&w=1400',
    stat1: { value: '4', label: 'Care Service Types' },
    stat2: { value: '100%', label: 'Person-Centred' },
  },
];

/* ── Stats Data ──────────────────────────────────────── */
interface StatItem {
  target: number;
  suffix: string;
  prefix: string;
  label: string;
  isStatic?: boolean;
  staticValue?: string;
}

const statsData: StatItem[] = [
  { target: 500, suffix: '+', prefix: '', label: 'Professionals Placed' },
  { target: 98,  suffix: '%', prefix: '', label: 'Client Satisfaction' },
  { target: 0,   suffix: '',  prefix: '', label: 'Emergency Cover', isStatic: true, staticValue: '24/7' },
  { target: 10,  suffix: '+', prefix: '', label: 'Years Combined Experience' },
];

/* ── Testimonials ─────────────────────────────────────── */
const testimonials = [
  {
    quote: "LRVLC have been a genuinely reliable partner. Their staff are professional, well-prepared, and always placed with real care.",
    name: 'Care Home Director',
    location: 'Southern England',
    initials: 'S',
  },
  {
    quote: "Lineup Recruitment consistently delivers exceptional healthcare professionals. The vetting is thorough and we always get staff we can trust.",
    name: 'Healthcare Organisation',
    location: 'West Midlands',
    initials: 'N',
  },
  {
    quote: "Vine Lodge Care transformed the support my mother receives. The carers are compassionate, consistent, and truly person-centred.",
    name: 'Family Member',
    location: 'London',
    initials: 'J',
  },
  {
    quote: "The speed and quality of placements from Lineup Recruitment is unmatched. They understand our industry and deliver every single time.",
    name: 'Hospitality Group Manager',
    location: 'Greater Manchester',
    initials: 'A',
  },
];

/* ── Why items ─────────────────────────────────────────── */
const whyItems = [
  { icon: Shield,       title: 'Fully Vetted Staff',   desc: 'All staff rigorously screened, DBS checked, and trained to the highest standards.' },
  { icon: Zap,          title: 'Rapid Response',        desc: 'Fast deployment of qualified professionals when and where you need them most.' },
  { icon: Heart,        title: 'Person-Centred',        desc: 'Every care plan uniquely designed around the individual, their needs, their life.' },
  { icon: CheckCircle,  title: 'Compliance First',      desc: 'Full regulatory compliance across all services for complete peace of mind.' },
  { icon: Users,        title: 'Trusted Network',       desc: 'A reliable network of experienced healthcare and hospitality professionals.' },
  { icon: Building2,    title: 'Dedicated Support',     desc: 'A dedicated account manager for every client, consistent, professional, reliable.' },
];

/* ── Process steps ─────────────────────────────────────── */
const process = [
  { num: '01', title: 'Tell Us Your Needs',       desc: 'Share your staffing or care requirements, we listen and take time to understand your situation.' },
  { num: '02', title: 'We Match Professionals',   desc: 'We identify, screen, and present the most suitable candidates for your needs.' },
  { num: '03', title: 'Review & Confirm',         desc: 'Choose from our recommendations with full confidence and our ongoing guidance.' },
  { num: '04', title: 'Ongoing Partnership',      desc: 'We continue to support and manage your account as your trusted long-term partner.' },
];

/* ── Services ──────────────────────────────────────────── */
const services = [
  { icon: Briefcase,    title: 'Recruitment Solutions', desc: 'Temporary, permanent, and contract staffing across healthcare and hospitality.', tag: 'Lineup Recruitment' },
  { icon: Stethoscope,  title: 'Healthcare Staffing',   desc: 'Qualified nurses, carers, and support workers for care homes and healthcare providers.', tag: 'Both' },
  { icon: HomeIcon,     title: 'Home Care Services',    desc: 'Personalised, compassionate care delivered in the comfort of home.',           tag: 'Vine Lodge Care' },
  { icon: Heart,        title: 'Complex Care',           desc: 'Specialist support for individuals with advanced medical or high-dependency needs.', tag: 'Vine Lodge Care' },
];

/* ══════════════════════════════════════════════════════ */
export default function Home({ onNavigate }: HomeProps) {
  useScrollReveal();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleNav = (page: Page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /* ── Hero slider ── */
  const [slide, setSlide] = useState(0);
  const [slideVisible, setSlideVisible] = useState(true);
  const slideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goToSlide = useCallback((next: number) => {
    setSlideVisible(false);
    setTimeout(() => {
      setSlide(next);
      setSlideVisible(true);
    }, 350);
  }, []);

  const nextSlide = useCallback(() => goToSlide((slide + 1) % heroSlides.length), [slide, goToSlide]);
  const prevSlide = useCallback(() => goToSlide((slide - 1 + heroSlides.length) % heroSlides.length), [slide, goToSlide]);

  useEffect(() => {
    slideTimerRef.current = setTimeout(nextSlide, 6000);
    return () => { if (slideTimerRef.current) clearTimeout(slideTimerRef.current); };
  }, [slide, nextSlide]);

  const currentSlide = heroSlides[slide];

  /* ── Counter animation ── */
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const [countersStarted, setCountersStarted] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !countersStarted) setCountersStarted(true); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [countersStarted]);

  useEffect(() => {
    if (!countersStarted) return;
    const targets = statsData.map((s) => s.target);
    const duration = 2200;
    const fps = 60;
    const steps = (duration / 1000) * fps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCounts(targets.map((t) => Math.floor(t * eased)));
      if (step >= steps) clearInterval(timer);
    }, 1000 / fps);
    return () => clearInterval(timer);
  }, [countersStarted]);

  /* ── Process line animation ── */
  const [processVisible, setProcessVisible] = useState(false);
  const processRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = processRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setProcessVisible(true); },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  /* ── Testimonial slider ── */
  const [tSlide, setTSlide] = useState(0);
  const [tVisible, setTVisible] = useState(true);
  const tTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goToTestimonial = useCallback((next: number) => {
    setTVisible(false);
    setTimeout(() => {
      setTSlide(next);
      setTVisible(true);
    }, 300);
  }, []);

  const nextTestimonial = useCallback(
    () => goToTestimonial((tSlide + 1) % testimonials.length),
    [tSlide, goToTestimonial]
  );

  useEffect(() => {
    tTimerRef.current = setTimeout(nextTestimonial, 5000);
    return () => { if (tTimerRef.current) clearTimeout(tTimerRef.current); };
  }, [tSlide, nextTestimonial]);

  /* ══════════════════════════════════════════════════════ */
  return (
    <div className="page-fade">

      {/* ─── HERO SLIDER ─────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A1F44]">

        {/* Background image — transitions with slide */}
        <div
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: slideVisible ? 1 : 0 }}
        >
          <img
            src={currentSlide.image}
            alt=""
            className="w-full h-full object-cover opacity-18"
            key={currentSlide.id}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44] via-[#0A1F44]/94 to-[#0A1F44]/65" />
        </div>

        {/* Dot pattern */}
        <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />
        {/* Glow */}
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#5DADE2]/8 rounded-full blur-[100px] pointer-events-none" />

        {/* ── Content ── */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full pt-32 pb-28">
          <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center">

            {/* Left */}
            <div
              className="max-w-xl"
              style={{
                opacity: slideVisible ? 1 : 0,
                transform: slideVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)',
              }}
            >
              <div className="badge mb-7 w-fit">
                <span className="w-1.5 h-1.5 bg-[#5DADE2] rounded-full animate-pulse" />
                {currentSlide.tag}
              </div>

              <h1 className="display-xl mb-6">
                {currentSlide.title.map((word, i) => (
                  <span key={i}>
                    {currentSlide.highlight.includes(i)
                      ? <em className="not-italic text-[#5DADE2]">{word}</em>
                      : word}
                    <br />
                  </span>
                ))}
              </h1>

              <p className="text-white/65 text-[1rem] leading-relaxed mb-10 font-light">
                {currentSlide.desc}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 mb-12">
                {currentSlide.ctas.map((cta, i) => (
                  <button
                    key={i}
                    onClick={() => handleNav(cta.page)}
                    className={`${
                      i === 0
                        ? 'btn-primary-white btn-breathe'
                        : cta.style === 'sky'
                          ? 'btn-sky btn-breathe-sky'
                          : 'btn-outline-white'
                    }`}
                  >
                    {cta.label}
                    {i === 0 && <ArrowRight size={15} />}
                  </button>
                ))}
              </div>

              {/* Scroll indicator */}
              <div className="hidden lg:flex items-center gap-4">
                <div className="scroll-indicator" />
                <span className="text-white/30 text-[0.65rem] tracking-[0.18em] uppercase font-light"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Scroll to explore
                </span>
              </div>
            </div>

            {/* Right — Floating stats */}
            <div
              className="hidden lg:flex items-center justify-center"
              style={{
                opacity: slideVisible ? 1 : 0,
                transform: slideVisible ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.98)',
                transition: 'opacity 0.8s cubic-bezier(0.22,1,0.36,1) 0.15s, transform 0.8s cubic-bezier(0.22,1,0.36,1) 0.15s',
              }}
            >
              <div className="relative animate-float">
                <div className="image-frame w-[380px] h-[460px]">
                  <img src={currentSlide.image} alt="" className="img-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/55 via-transparent to-transparent" />
                </div>
                {/* Stat bottom-left */}
                <div className="absolute -bottom-5 -left-10 bg-white rounded-2xl p-4 shadow-[0_12px_40px_rgba(10,31,68,0.18)] border border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="icon-box icon-box-sky w-10 h-10">
                      <Users size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="font-display text-[1.5rem] leading-none text-[#0A1F44]">{currentSlide.stat1.value}</p>
                      <p className="text-slate-500 text-[0.72rem] mt-0.5 font-medium">{currentSlide.stat1.label}</p>
                    </div>
                  </div>
                </div>
                {/* Stat top-right */}
                <div className="absolute -top-4 -right-8 bg-white rounded-2xl p-4 shadow-[0_12px_40px_rgba(10,31,68,0.18)] border border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="icon-box icon-box-gradient w-10 h-10">
                      <Star size={16} className="text-[#5DADE2]" />
                    </div>
                    <div>
                      <p className="font-display text-[1.5rem] leading-none text-[#0A1F44]">{currentSlide.stat2.value}</p>
                      <p className="text-slate-500 text-[0.72rem] mt-0.5 font-medium">{currentSlide.stat2.label}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Slider controls ── */}
          <div className="absolute bottom-8 left-6 lg:left-1/2 lg:-translate-x-1/2 flex items-center gap-4">
            {/* Prev */}
            <button
              onClick={prevSlide}
              className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <ChevronLeft size={16} className="text-white" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  className={`slider-dot ${i === slide ? 'active' : ''}`}
                  style={{ width: i === slide ? '28px' : '8px' }}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Next */}
            <button
              onClick={nextSlide}
              className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <ChevronRight size={16} className="text-white" />
            </button>

            {/* Slide counter */}
            <span className="text-white/40 text-[0.7rem] font-light ml-1"
              style={{ fontFamily: 'Montserrat, sans-serif' }}>
              {slide + 1} / {heroSlides.length}
            </span>
          </div>
        </div>
      </section>

      {/* ─── STATS STRIP with Counter ────────────────────── */}
      <section className="bg-white py-14 border-b border-slate-100" ref={statsRef}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {statsData.map((stat, i) => (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center px-4 reveal"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <p className="font-display text-[3rem] leading-none text-[#0A1F44] mb-2">
                  {stat.isStatic
                    ? stat.staticValue
                    : `${stat.prefix}${counts[i]}${stat.suffix}`}
                </p>
                <p className="text-slate-500 text-[0.82rem] font-semibold tracking-wide"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TRUST MARQUEE ───────────────────────────────── */}
      <section className="py-7 bg-[#F8F9FC] border-b border-slate-100 overflow-hidden">
        <div className="marquee-track">
          {[...Array(2)].map((_, setI) =>
            ['Recruitment Solutions', 'Healthcare Staffing', 'Home Care Services', 'Complex Care', 'Temporary & Contract Staffing', 'Qualified Nurses & Carers', 'Personalised Home Care', 'Specialist Support', 'DBS Checked Staff', 'UK Nationwide', 'REC Member', '24/7 Emergency Cover']
              .map((item, i) => (
                <div key={`${setI}-${i}`} className="flex items-center gap-3 flex-shrink-0">
                  <span className="w-1 h-1 rounded-full bg-[#5DADE2]" />
                  <span className="text-slate-500 text-[0.72rem] font-semibold tracking-wide uppercase whitespace-nowrap"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {item}
                  </span>
                </div>
              ))
          )}
        </div>
      </section>

      {/* ─── SERVICES ────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 reveal">
            <div>
              <p className="section-label mb-3">What We Do</p>
              <h2 className="display-md">Comprehensive Solutions<br />Across Two Divisions</h2>
            </div>
            <p className="text-slate-500 text-[0.93rem] leading-relaxed max-w-sm font-light lg:text-right">
              From expert staffing to compassionate care, we deliver tailored solutions built around your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service, i) => (
              <div key={service.title} className={`reveal card-premium p-7 group stagger-${i + 1} relative`}>
                <div className="absolute top-4 right-4">
                  <span className={`text-[0.6rem] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full ${
                    service.tag === 'Lineup'     ? 'bg-[#0A1F44]/6 text-[#0A1F44]'
                    : service.tag === 'Vine Lodge' ? 'bg-[#5DADE2]/10 text-[#3A98D8]'
                    : 'bg-slate-100 text-slate-500'
                  }`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {service.tag}
                  </span>
                </div>
                <div className="icon-box icon-box-gradient mb-5 group-hover:shadow-lg transition-shadow duration-300">
                  <service.icon size={22} className="text-white" />
                </div>
                <h4 className="font-bold text-[#0A1F44] text-[0.97rem] mb-2.5 leading-snug">{service.title}</h4>
                <p className="text-slate-500 text-[0.84rem] leading-relaxed font-light">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT ────────────────────────────────────────── */}
      <section className="py-28 bg-[#F8F9FC] relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none">
          <span className="font-display text-[13rem] text-[#0A1F44]/[0.025] leading-none whitespace-nowrap">LRVLC</span>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
            <div className="reveal-left relative">
              <div className="image-frame aspect-[4/5] max-w-md">
                <img
                  src="https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=700"
                  alt="LRVLC team"
                  className="img-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#0A1F44] rounded-2xl p-6 shadow-premium-lg text-white">
                <p className="font-display text-[2.8rem] leading-none text-[#5DADE2]">2</p>
                <p className="text-white/70 text-[0.78rem] font-light mt-1">Specialist</p>
                <p className="text-white font-bold text-[0.88rem]">Divisions</p>
              </div>
            </div>
            <div className="reveal-right">
              <p className="section-label mb-4">About LRVLC</p>
              <h2 className="display-md mb-6">Built on Excellence,<br />Driven by People</h2>
              <div className="space-y-4 mb-10">
                <p className="body-lg">
                  LRVLC is a UK-based dual-service organisation delivering professional recruitment and high-quality care through two specialist divisions.
                </p>
                <p className="text-slate-500 leading-relaxed text-[0.93rem] font-light">
                  Through <span className="text-[#0A1F44] font-semibold">Lineup Recruitment</span>, we connect businesses with skilled, vetted professionals across healthcare and hospitality.
                </p>
                <p className="text-slate-500 leading-relaxed text-[0.93rem] font-light">
                  Through <span className="text-[#0A1F44] font-semibold">Vine Lodge Care</span>, we deliver person-centred home care, complex care, and healthcare staffing solutions.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-10">
                {['Fully vetted staff', 'DBS checked', 'UK compliant', 'Rapid placement'].map((p) => (
                  <div key={p} className="flex items-center gap-2.5">
                    <CheckCircle size={14} className="text-[#5DADE2] flex-shrink-0" />
                    <span className="text-[#0A1F44] text-[0.84rem] font-semibold">{p}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <button onClick={() => handleNav('about')} className="btn-primary">
                  Our Story <ArrowRight size={15} />
                </button>
                <button onClick={() => handleNav('contact')} className="btn-outline">
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DIVISIONS ───────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <p className="section-label mb-3">Our Divisions</p>
            <h2 className="display-md">Two Divisions, One Commitment</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Lineup */}
            <div
              className="reveal-left group relative bg-[#0A1F44] rounded-2xl p-10 cursor-pointer overflow-hidden transition-all duration-500 hover:shadow-[0_20px_60px_rgba(10,31,68,0.25)] hover:-translate-y-1"
              onClick={() => handleNav('lineup')}
            >
              <div className="absolute inset-0 dot-pattern opacity-25 group-hover:opacity-40 transition-opacity" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#5DADE2]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative">
                <img src="https://res.cloudinary.com/dx2bbdxnw/image/upload/v1775920542/lineup-recruitmentIMG_2897.JPG_gabx1k.jpg"
                  alt="Lineup" className="h-11 w-auto object-cover rounded-lg mb-6 opacity-90" />
                <h3 className="font-display text-[2rem] text-white mb-3">Lineup Recruitment</h3>
                <p className="text-white/60 text-[0.9rem] font-light leading-relaxed mb-6 max-w-sm">
                  Specialist agency providing temporary and permanent placements across healthcare and hospitality.
                </p>
                <ul className="space-y-2.5 mb-7">
                  {['Temporary Staffing', 'Permanent Recruitment', 'Emergency Cover', 'Contract Staffing'].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-[0.84rem] text-white/75">
                      <CheckCircle size={13} className="text-[#5DADE2] flex-shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 text-[#5DADE2] text-[0.84rem] font-bold group-hover:gap-3 transition-all"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Explore Lineup <ArrowRight size={14} />
                </div>
              </div>
            </div>

            {/* Vine Lodge */}
            <div
              className="reveal-right group relative bg-white rounded-2xl p-10 cursor-pointer overflow-hidden border border-slate-100 transition-all duration-500 hover:border-[#5DADE2]/25 hover:shadow-[0_20px_60px_rgba(10,31,68,0.10)] hover:-translate-y-1"
              onClick={() => handleNav('vine')}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#5DADE2]/5 rounded-full blur-3xl pointer-events-none" />
              <div className="relative">
                <img src="https://res.cloudinary.com/dx2bbdxnw/image/upload/v1775920584/vlc-lr1_w13kcf.jpg"
                  alt="Vine Lodge" className="h-11 w-auto object-cover rounded-lg mb-6" />
                <h3 className="font-display text-[2rem] text-[#0A1F44] mb-3">Vine Lodge Care</h3>
                <p className="text-slate-500 text-[0.9rem] font-light leading-relaxed mb-6 max-w-sm">
                  Compassionate care services prioritising dignity, independence, and personalised support.
                </p>
                <ul className="space-y-2.5 mb-7">
                  {['Home Care', 'Complex Care', 'Healthcare Staffing', 'Personalised Care Plans'].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-[0.84rem] text-slate-600">
                      <CheckCircle size={13} className="text-[#5DADE2] flex-shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 text-[#0A1F44] text-[0.84rem] font-bold group-hover:text-[#5DADE2] group-hover:gap-3 transition-all"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Explore Vine Lodge <ArrowRight size={14} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─────────────────────────────────────── */}
      <section className="py-28 bg-[#F8F9FC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <p className="section-label mb-3">Our Process</p>
            <h2 className="display-md">How It Works</h2>
            <p className="text-slate-500 text-[0.93rem] font-light mt-4 max-w-md mx-auto">
              A simple, structured process to connect you with the right people or care solutions.
            </p>
          </div>

          {/* Steps */}
          <div ref={processRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Animated connector line */}
            <div className={`process-line hidden lg:block ${processVisible ? 'animate' : ''}`} />

            {process.map((item, i) => (
              <div key={item.num} className={`reveal stagger-${i + 1} relative z-10`}>
                {/* Per-step watermark */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 font-display text-[6rem] text-[#0A1F44]/[0.04] leading-none select-none pointer-events-none whitespace-nowrap">
                  {item.num}
                </div>
                {/* Dot on line */}
                <div className={`process-dot hidden lg:block ${processVisible ? 'animate' : ''}`}
                  style={{ transitionDelay: `${0.4 + i * 0.35}s` }} />

                <div className="flex flex-col items-center text-center relative z-10 pt-6">
                  <div className="w-[68px] h-[68px] rounded-2xl bg-[#0A1F44] flex items-center justify-center mb-5 shadow-[0_8px_24px_rgba(10,31,68,0.2)]">
                    <span className="font-display text-[1.4rem] text-[#5DADE2]">{item.num}</span>
                  </div>
                  <h4 className="font-bold text-[#0A1F44] text-[0.95rem] mb-2.5">{item.title}</h4>
                  <p className="text-slate-500 text-[0.83rem] leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ───────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-14 xl:gap-20">
            <div className="lg:w-[38%] reveal-left">
              <p className="section-label mb-4">Why LRVLC</p>
              <h2 className="display-md mb-6">What Sets<br />Us Apart</h2>
              <p className="body-lg mb-8">
                Hundreds of businesses and families across the UK trust LRVLC because we hold ourselves to the standard they deserve.
              </p>
              <button onClick={() => handleNav('contact')} className="btn-primary mb-5 btn-breathe-navy">
                Partner With Us <ArrowRight size={15} />
              </button>
              <div className="mt-8 flex items-center gap-4 p-5 bg-[#F8F9FC] rounded-xl border border-slate-100">
                <div className="w-10 h-10 bg-[#0A1F44] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone size={16} className="text-[#5DADE2]" />
                </div>
                <div>
                  <p className="text-[#0A1F44] font-semibold text-[0.88rem]">Need urgent staffing?</p>
                  <p className="text-slate-500 text-[0.8rem] mt-0.5 font-light">Emergency line available 24/7</p>
                </div>
              </div>
            </div>
            <div className="lg:flex-1">
              <div className="grid sm:grid-cols-2 gap-5">
                {whyItems.map((item, i) => (
                  <div key={item.title} className={`card-glow p-6 bg-white rounded-2xl border border-slate-100 stagger-${i + 1} group reveal`}>
                    <div className="icon-box icon-box-gradient mb-4 group-hover:shadow-md transition-shadow">
                      <item.icon size={20} className="text-white" />
                    </div>
                    <h4 className="font-bold text-[#0A1F44] text-[0.93rem] mb-2">{item.title}</h4>
                    <p className="text-slate-500 text-[0.83rem] leading-relaxed font-light">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS SLIDER ─────────────────────────── */}
      <section className="py-24 bg-[#F8F9FC] border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <p className="section-label mb-3">What People Say</p>
            <h2 className="display-md">Client Testimonials</h2>
          </div>

          {/* Testimonial card */}
          <div className="relative min-h-[200px] reveal">
            <div
              className="transition-all duration-500"
              style={{
                opacity: tVisible ? 1 : 0,
                transform: tVisible ? 'translateY(0)' : 'translateY(10px)',
              }}
            >
              {/* Stars */}
              <div className="flex justify-center gap-0.5 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="text-[#5DADE2] fill-[#5DADE2]" />
                ))}
              </div>

              <blockquote className="font-display text-[1.6rem] md:text-[2rem] text-[#0A1F44] leading-[1.3] text-center mb-8 italic">
                "{testimonials[tSlide].quote}"
              </blockquote>

              <div className="flex items-center justify-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#0A1F44] to-[#1a4070] flex items-center justify-center text-white font-bold text-sm">
                  {testimonials[tSlide].initials}
                </div>
                <div className="text-left">
                  <p className="text-[#0A1F44] font-bold text-[0.88rem]">{testimonials[tSlide].name}</p>
                  <p className="text-slate-500 text-[0.78rem] font-light mt-0.5">{testimonials[tSlide].location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={() => goToTestimonial((tSlide - 1 + testimonials.length) % testimonials.length)}
              className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-[#0A1F44] hover:border-[#0A1F44] hover:text-white text-slate-500 transition-all duration-200"
            >
              <ChevronLeft size={16} />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToTestimonial(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === tSlide ? 'bg-[#0A1F44] w-6 h-2' : 'bg-slate-300 w-2 h-2'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => goToTestimonial((tSlide + 1) % testimonials.length)}
              className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-[#0A1F44] hover:border-[#0A1F44] hover:text-white text-slate-500 transition-all duration-200"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ──────────────────────────────────── */}
      <section className="cta-section py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center reveal">
          <p className="section-label text-[#5DADE2]/80 mb-4">Ready to Begin?</p>
          <h2 className="font-display text-[3rem] md:text-[4rem] text-white leading-[1.1] mb-6">
            Let's Build Something<br />
            <em className="not-italic text-[#5DADE2]">Great Together</em>
          </h2>
          <p className="text-white/60 text-[1rem] font-light leading-relaxed mb-10 max-w-xl mx-auto">
            Whether you need qualified staff or compassionate care, LRVLC is your trusted UK partner.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button onClick={() => handleNav('contact')} className="btn-primary-white btn-breathe">
              Get Started Today <ArrowRight size={15} />
            </button>
            <button onClick={() => handleNav('about')} className="btn-outline-white">
              Learn More About Us
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
