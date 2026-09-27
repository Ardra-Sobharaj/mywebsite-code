import React, { useState } from 'react';
import { X, Check, ArrowUpRight, Copy } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConnectModal: React.FC<ConnectModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email) return;

    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    setCopied(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#121314]/40 backdrop-blur-xs"
      onClick={handleClose}
    >
      <div
        className="bg-[#fbfbfa] border border-[#e6e4df] w-full max-w-lg shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#e6e4df] bg-[#f6f5f2]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#2a434a]" />

            <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-[#121314] font-medium">
              CONNECT // CONTACT
            </span>
          </div>

          <button
            onClick={handleClose}
            className="p-1.5 text-[#52545a] hover:text-[#121314] hover:bg-[#eceae5] transition-colors cursor-pointer"
            aria-label="Close contact window"
            type="button"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">

          {submitted ? (
            <div className="py-6 text-center space-y-4">

              <div className="w-10 h-10 bg-[#2a434a] text-[#fbfbfa] inline-flex items-center justify-center">
                <Check className="w-5 h-5" />
              </div>

              <h4 className="font-serif text-[22px] text-[#121314]">
                Thanks for reaching out.
              </h4>

              <p className="font-sans text-[13px] text-[#52545a] leading-[1.7] max-w-md mx-auto">
                Your details have been entered into the portfolio contact
                form. This form is currently a front-end interface and does
                not send messages automatically.
              </p>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-2 mt-2 px-5 py-2 font-mono text-[11px] tracking-[0.08em] uppercase bg-[#121314] text-[#fbfbfa] hover:bg-[#2a434a] transition-colors"
              >
                EMAIL ARDRA
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <div>
                <button
                  onClick={handleClose}
                  className="mt-3 px-5 py-2 font-mono text-[11px] tracking-[0.08em] uppercase border border-[#e6e4df] text-[#121314] hover:border-[#121314] cursor-pointer"
                  type="button"
                >
                  CLOSE
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Intro */}
              <div>
                <h3 className="font-serif text-[24px] text-[#121314] font-normal mb-1">
                  Connect with Ardra
                </h3>

                <p className="font-sans text-[13px] text-[#52545a]">
                  B.Tech AI & Data Science · REVA University
                </p>
              </div>

              {/* Email */}
              <div className="border border-[#e6e4df] bg-[#f6f5f2] p-3 flex items-center justify-between text-[13px]">
                <span className="font-mono text-[12px] text-[#121314]">
                  {PERSONAL_INFO.email}
                </span>

                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1 text-[11px] font-mono text-[#2a434a] hover:text-[#121314] font-medium cursor-pointer"
                  type="button"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}

                  <span>
                    {copied ? 'COPIED' : 'COPY'}
                  </span>
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">

                {/* Name */}
                <div>
                  <label
                    htmlFor="connect-name"
                    className="block font-mono text-[9px] tracking-[0.08em] uppercase text-[#52545a] mb-1.5 font-medium"
                  >
                    YOUR NAME *
                  </label>

                  <input
                    id="connect-name"
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
                    className="w-full bg-[#ffffff] border border-[#e6e4df] focus:border-[#121314] focus:outline-hidden px-3.5 py-2.5 font-sans text-[13px] text-[#121314]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="connect-email"
                    className="block font-mono text-[9px] tracking-[0.08em] uppercase text-[#52545a] mb-1.5 font-medium"
                  >
                    YOUR EMAIL *
                  </label>

                  <input
                    id="connect-email"
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
                    className="w-full bg-[#ffffff] border border-[#e6e4df] focus:border-[#121314] focus:outline-hidden px-3.5 py-2.5 font-sans text-[13px] text-[#121314]"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="connect-message"
                    className="block font-mono text-[9px] tracking-[0.08em] uppercase text-[#52545a] mb-1.5 font-medium"
                  >
                    MESSAGE
                  </label>

                  <textarea
                    id="connect-message"
                    rows={3}
                    placeholder="Tell me about your opportunity, project, or question..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      })
                    }
                    className="w-full bg-[#ffffff] border border-[#e6e4df] focus:border-[#121314] focus:outline-hidden px-3.5 py-2.5 font-sans text-[13px] text-[#121314] resize-none"
                  />
                </div>

                {/* Actions */}
                <div className="pt-2 flex items-center justify-between gap-4">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="font-mono text-[11px] text-[#52545a] hover:text-[#121314] underline"
                  >
                    EMAIL DIRECTLY ↗
                  </a>

                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-[#121314] hover:bg-[#2a434a] text-[#fbfbfa] font-mono text-[11px] tracking-[0.08em] uppercase font-medium transition-colors cursor-pointer"
                  >
                    CONTINUE
                  </button>
                </div>

              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
