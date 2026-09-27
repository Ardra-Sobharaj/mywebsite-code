import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowUpRight, Copy, Check, Clock } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    scope: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const istTime = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(new Date());

        setCurrentTime(istTime);
      } catch {
        setCurrentTime('');
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = async (e: React.MouseEvent) => {
    e.preventDefault();

    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2500);
    } catch {
      setCopied(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.scope) return;

    setStatus('submitting');

    /*
      This is currently a front-end demonstration form.
      No message is actually sent to a server.
    */
    setTimeout(() => {
      setStatus('success');
    }, 800);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      scope: '',
    });

    setStatus('idle');
  };

  return (
    <section id="contact" className="py-20 border-t border-[#e6e4df]">
      <div className="max-w-[72rem] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="font-mono text-[11px] tracking-[0.08em] text-[#8c8d91] uppercase">
              05 / CONTACT
            </div>

            <h2 className="font-serif text-[34px] sm:text-[42px] leading-[1.14] tracking-[-0.015em] text-[#121314] font-normal">
              Let's build something meaningful.
            </h2>

            <p className="font-sans text-[15px] sm:text-[16px] leading-[1.7] text-[#52545a] font-normal">
              Open to research internships, project collaboration, software
              opportunities, and conversations around artificial intelligence,
              data science, and technology.
            </p>

            {/* Direct Contact Links */}
            <div className="space-y-3 pt-4">

              {/* Email */}
              <div className="border border-[#e6e4df] bg-[#fbfbfa] p-4 flex items-center justify-between group hover:border-[#121314] transition-colors">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex-1"
                >
                  <div className="font-mono text-[9px] tracking-[0.08em] text-[#8c8d91] uppercase">
                    PRIMARY CONTACT
                  </div>

                  <div className="font-sans text-[14px] text-[#121314] font-medium mt-0.5">
                    {PERSONAL_INFO.email}
                  </div>
                </a>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 text-[#8c8d91] hover:text-[#121314] transition-colors cursor-pointer"
                    title="Copy Email"
                    type="button"
                  >
                    {copied ? (
                      <span className="flex items-center text-[11px] font-mono text-[#2a434a] gap-1">
                        <Check className="w-3.5 h-3.5" />
                        COPIED
                      </span>
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>

                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-[#8c8d91] group-hover:text-[#121314] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all p-1"
                    aria-label="Send email"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#e6e4df] bg-[#fbfbfa] p-4 flex items-center justify-between group hover:border-[#121314] transition-colors block"
              >
                <div>
                  <div className="font-mono text-[9px] tracking-[0.08em] text-[#8c8d91] uppercase">
                    CODEBASE
                  </div>

                  <div className="font-sans text-[14px] text-[#121314] font-medium mt-0.5">
                    {PERSONAL_INFO.githubHandle}
                  </div>
                </div>

                <ArrowUpRight className="w-4 h-4 text-[#8c8d91] group-hover:text-[#121314] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#e6e4df] bg-[#fbfbfa] p-4 flex items-center justify-between group hover:border-[#121314] transition-colors block"
              >
                <div>
                  <div className="font-mono text-[9px] tracking-[0.08em] text-[#8c8d91] uppercase">
                    PROFESSIONAL NETWORK
                  </div>

                  <div className="font-sans text-[14px] text-[#121314] font-medium mt-0.5">
                    {PERSONAL_INFO.linkedinHandle}
                  </div>
                </div>

                <ArrowUpRight className="w-4 h-4 text-[#8c8d91] group-hover:text-[#121314] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>

            {/* Timezone */}
            <div className="pt-2 font-mono text-[10px] tracking-[0.08em] text-[#8c8d91] uppercase flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-[#2a434a]" />

              <span>
                TIMEZONE: UTC+05:30 (IST)
              </span>

              {currentTime && (
                <span className="text-[#121314] font-semibold tabular-nums">
                  [{currentTime}]
                </span>
              )}
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7">
            <div className="border border-[#e6e4df] bg-[#f6f5f2] p-6 sm:p-8">

              {/* Header */}
              <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.08em] uppercase pb-4 mb-6 border-b border-[#e6e4df]">
                <span className="text-[#52545a] font-medium">
                  CONTACT FORM
                </span>

                <span className="flex items-center gap-1.5 text-[#2a434a] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2a434a]" />
                  OPEN TO CONNECT
                </span>
              </div>

              {status === 'success' ? (
                <div className="py-8 space-y-4 text-center">

                  <div className="inline-flex items-center justify-center w-12 h-12 bg-[#2a434a] text-[#fbfbfa] mx-auto mb-2">
                    <Check className="w-6 h-6" />
                  </div>

                  <h4 className="font-serif text-[24px] text-[#121314]">
                    Message Ready to Send.
                  </h4>

                  <p className="font-sans text-[14px] text-[#52545a] max-w-md mx-auto leading-[1.7]">
                    Thanks, {formData.name}. This portfolio currently uses a
                    front-end contact form, so no message has been sent
                    automatically. Please use the email address on the left
                    for direct contact.
                  </p>

                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="inline-flex items-center gap-2 mt-3 px-5 py-2 font-mono text-[11px] tracking-[0.08em] uppercase bg-[#121314] text-[#fbfbfa] hover:bg-[#2a434a] transition-colors"
                  >
                    EMAIL ARDRA
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <div>
                    <button
                      onClick={handleReset}
                      className="mt-4 px-5 py-2 font-mono text-[11px] tracking-[0.08em] uppercase border border-[#e6e4df] text-[#121314] hover:border-[#121314] cursor-pointer"
                      type="button"
                    >
                      WRITE ANOTHER MESSAGE
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Name */}
                  <div>
                    <label
                      htmlFor="user-name-input"
                      className="block font-mono text-[10px] tracking-[0.08em] uppercase text-[#52545a] mb-2 font-medium"
                    >
                      YOUR NAME *
                    </label>

                    <input
                      id="user-name-input"
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          name: e.target.value,
                        })
                      }
                      className="w-full bg-[#ffffff] border border-[#e6e4df] focus:border-[#121314] focus:outline-hidden px-4 py-3 font-sans text-[14px] text-[#121314] placeholder-[#8c8d91]/70 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="user-email-input"
                      className="block font-mono text-[10px] tracking-[0.08em] uppercase text-[#52545a] mb-2 font-medium"
                    >
                      EMAIL ADDRESS *
                    </label>

                    <input
                      id="user-email-input"
                      type="email"
                      required
                      placeholder="yourname@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        })
                      }
                      className="w-full bg-[#ffffff] border border-[#e6e4df] focus:border-[#121314] focus:outline-hidden px-4 py-3 font-sans text-[14px] text-[#121314] placeholder-[#8c8d91]/70 transition-colors"
                    />
                  </div>

                  {/* Inquiry */}
                  <div>
                    <label
                      htmlFor="user-scope-input"
                      className="block font-mono text-[10px] tracking-[0.08em] uppercase text-[#52545a] mb-2 font-medium"
                    >
                      INQUIRY / PROJECT DETAILS *
                    </label>

                    <textarea
                      id="user-scope-input"
                      required
                      rows={4}
                      placeholder="Tell me about your project, opportunity, or question..."
                      value={formData.scope}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          scope: e.target.value,
                        })
                      }
                      className="w-full bg-[#ffffff] border border-[#e6e4df] focus:border-[#121314] focus:outline-hidden px-4 py-3 font-sans text-[14px] text-[#121314] placeholder-[#8c8d91]/70 transition-colors resize-y"
                    />
                  </div>

                  {/* Submit */}
                  <div className="pt-2">
                    <button
                      id="send-message-button"
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-auto flex items-center gap-3 bg-[#121314] hover:bg-[#2a434a] text-[#fbfbfa] px-6 py-3 font-mono text-[11px] tracking-[0.08em] uppercase font-medium transition-colors cursor-pointer group disabled:opacity-50"
                    >
                      <span>
                        {status === 'submitting'
                          ? 'PROCESSING...'
                          : 'CONTINUE'}
                      </span>

                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>

                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
