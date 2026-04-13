import { useEffect, useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { supabase } from '../lib/supabase';
import { Phone, Mail, MapPin, CheckCircle, AlertCircle, Send, Clock } from 'lucide-react';

export default function Contact() {
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const { error } = await supabase.from('contact_submissions').insert([
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          message: form.message,
        },
      ]);
      if (error) throw error;
      setStatus('success');
      setForm({ name: '', email: '', phone: '', service: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+44 (0) 000 000 0000',
      sub: 'Mon–Fri, 9am–5pm',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@lrvlc.co.uk',
      sub: 'We respond within 24 hours',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'United Kingdom',
      sub: 'Serving clients nationwide',
    },
    {
      icon: Clock,
      title: 'Emergency Cover',
      value: 'Available 24/7',
      sub: 'For urgent staffing needs',
    },
  ];

  return (
    <div className="page-fade">

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-24 bg-[#0A1F44] overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-25" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#5DADE2]/10 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4 pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="section-label text-[#5DADE2]/80 mb-5">Get in Touch</p>
          <h1 className="font-display text-[4rem] md:text-[5.5rem] text-white leading-[1.05] tracking-tight mb-6">
            Contact Us
          </h1>
          <p className="text-white/60 text-[1.05rem] font-light leading-relaxed max-w-xl mx-auto">
            Whether you need staffing solutions, care services, or just want to learn more — our team is here and ready to help.
          </p>
        </div>

        {/* Clean bottom border instead of fading gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </section>

      {/* ─── CONTACT SECTION ──────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 xl:gap-16">

            {/* ── Info Side ── */}
            <div className="lg:col-span-2 reveal-left">
              <p className="section-label mb-4">Reach Out</p>
              <h2 className="display-md mb-5">Let's Start a<br />Conversation</h2>
              <p className="text-slate-500 text-[0.93rem] leading-relaxed font-light mb-10">
                Our team is ready to assist you. Reach out via any channel below and we'll get back to you promptly.
              </p>

              {/* Contact cards */}
              <div className="space-y-4 mb-10">
                {contactInfo.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 bg-[#F8F9FC] hover:border-slate-200 hover:bg-white transition-all duration-250"
                  >
                    <div className="icon-box icon-box-gradient w-10 h-10 flex-shrink-0">
                      <item.icon size={16} className="text-white" />
                    </div>
                    <div>
                      <p className="text-[#0A1F44] font-semibold text-[0.85rem]">{item.title}</p>
                      <p className="text-slate-700 text-[0.84rem] mt-0.5">{item.value}</p>
                      <p className="text-slate-400 text-[0.75rem] mt-0.5 font-light">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Emergency notice */}
              <div className="bg-[#0A1F44] rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute inset-0 dot-pattern opacity-20" />
                <div className="relative">
                  <p className="text-white font-bold text-[0.92rem] mb-1.5">Need Staff Urgently?</p>
                  <p className="text-white/60 text-[0.83rem] font-light leading-relaxed mb-4">
                    Our emergency staffing line is available around the clock. We respond within the hour.
                  </p>
                  <div className="flex items-center gap-2 text-[#5DADE2] text-[0.83rem] font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5DADE2] animate-pulse" />
                    Emergency line available 24/7
                  </div>
                </div>
              </div>
            </div>

            {/* ── Form Side ── */}
            <div className="lg:col-span-3 reveal-right">
              <div className="bg-white rounded-2xl border border-slate-100 shadow-premium-lg p-8 md:p-10">

                {status === 'success' ? (
                  <div className="flex flex-col items-center text-center py-14">
                    <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-6">
                      <CheckCircle size={30} className="text-green-500" />
                    </div>
                    <h4 className="font-display text-[1.8rem] text-[#0A1F44] mb-3">Message Sent!</h4>
                    <p className="text-slate-500 text-[0.9rem] font-light max-w-sm mb-8 leading-relaxed">
                      Thank you for reaching out. A member of the LRVLC team will contact you within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="btn-primary"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h3 className="font-display text-[1.8rem] text-[#0A1F44] mb-2">Send a Message</h3>
                      <p className="text-slate-500 text-[0.88rem] font-light">
                        Fill in the form below and we'll be in touch shortly.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-[0.72rem] font-semibold text-[#0A1F44] mb-2 tracking-[0.1em] uppercase">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            placeholder="Your full name"
                            className="input-premium"
                          />
                        </div>
                        <div>
                          <label className="block text-[0.72rem] font-semibold text-[#0A1F44] mb-2 tracking-[0.1em] uppercase">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            placeholder="your@email.com"
                            className="input-premium"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-[0.72rem] font-semibold text-[#0A1F44] mb-2 tracking-[0.1em] uppercase">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="+44 000 000 0000"
                            className="input-premium"
                          />
                        </div>
                        <div>
                          <label className="block text-[0.72rem] font-semibold text-[#0A1F44] mb-2 tracking-[0.1em] uppercase">
                            Service Needed *
                          </label>
                          <select
                            name="service"
                            value={form.service}
                            onChange={handleChange}
                            required
                            className="input-premium"
                          >
                            <option value="">Select a service...</option>
                            <optgroup label="Lineup Recruitment">
                              <option value="Temporary Staffing">Temporary Staffing</option>
                              <option value="Permanent Recruitment">Permanent Recruitment</option>
                              <option value="Emergency Cover">Emergency Cover</option>
                              <option value="Contract Staffing">Contract Staffing</option>
                              <option value="Find Work">Find Work (Job Seeker)</option>
                            </optgroup>
                            <optgroup label="Vine Lodge Care">
                              <option value="Home Care">Home Care</option>
                              <option value="Complex Care">Complex Care</option>
                              <option value="Healthcare Staffing">Healthcare Staffing</option>
                            </optgroup>
                            <option value="General Enquiry">General Enquiry</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-[0.72rem] font-semibold text-[#0A1F44] mb-2 tracking-[0.1em] uppercase">
                          Your Message *
                        </label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          placeholder="Tell us how we can help..."
                          className="input-premium resize-none"
                        />
                      </div>

                      {status === 'error' && (
                        <div className="flex items-center gap-3 bg-red-50 border border-red-100 rounded-xl p-4">
                          <AlertCircle size={16} className="text-red-500 flex-shrink-0" />
                          <p className="text-red-600 text-[0.85rem]">Something went wrong. Please try again or contact us directly.</p>
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="btn-primary w-full py-4 text-[0.9rem] disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {status === 'loading' ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send size={15} />
                            Send Message
                          </>
                        )}
                      </button>

                      <p className="text-center text-slate-400 text-[0.78rem] font-light">
                        Your information is handled securely and never shared with third parties.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MAP / UK Visual ──────────────────────────────────── */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="reveal rounded-2xl overflow-hidden shadow-premium border border-slate-100 h-[360px] relative bg-[#F8F9FC]">
            <img
              src="https://images.pexels.com/photos/4386442/pexels-photo-4386442.jpeg?auto=compress&cs=tinysrgb&w=1400"
              alt="UK operations"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-10 py-7 text-center border border-slate-100 shadow-premium">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0A1F44] to-[#1a4070] flex items-center justify-center mx-auto mb-4">
                  <MapPin size={20} className="text-[#5DADE2]" />
                </div>
                <p className="font-display text-[1.4rem] text-[#0A1F44] mb-1.5">Serving Clients Across the UK</p>
                <p className="text-slate-500 text-[0.85rem] font-light">Contact us for specific office locations and coverage areas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
