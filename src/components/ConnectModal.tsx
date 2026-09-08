import React, { useState } from 'react';
import { X, Send, Check, Mail, ArrowUpRight, Copy } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConnectModal: React.FC<ConnectModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSent(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#121314]/40 backdrop-blur-xs">
      <div
        className="bg-[#fbfbfa] border border-[#e6e4df] w-full max-w-lg shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#e6e4df] bg-[#f6f5f2]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#2a434a]" />
            <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-[#121314] font-medium">
              TRANSMISSION // DIRECT DIALOGUE
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#52545a] hover:text-[#121314] hover:bg-[#eceae5] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          {sent ? (
            <div className="py-6 text-center space-y-3">
              <div className="w-10 h-10 bg-[#2a434a] text-[#fbfbfa] inline-flex items-center justify-center mb-2">
                <Check className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-[22px] text-[#121314]">Correspondence Recorded</h4>
              <p className="font-sans text-[13px] text-[#52545a]">
                Your message has been safely logged. Ardra will respond to your email at{' '}
                <span className="font-medium text-[#121314]">{formData.email}</span>.
              </p>
              <button
                onClick={onClose}
                className="mt-3 px-5 py-2 font-mono text-[11px] tracking-[0.08em] uppercase bg-[#121314] text-[#fbfbfa] hover:bg-[#2a434a] cursor-pointer"
              >
                RETURN TO MONOGRAPH
              </button>
            </div>
          ) : (
            <>
              <div>
                <h3 className="font-serif text-[24px] text-[#121314] font-normal mb-1">
                  Connect with Ardra Sobharaj
                </h3>
                <p className="font-sans text-[13px] text-[#52545a]">
                  Artificial Intelligence & Data Science · REVA University, Bengaluru
                </p>
              </div>

              {/* Direct copy bar */}
              <div className="border border-[#e6e4df] bg-[#f6f5f2] p-3 flex items-center justify-between text-[13px]">
                <span className="font-mono text-[12px] text-[#121314]">{PERSONAL_INFO.email}</span>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1 text-[11px] font-mono text-[#2a434a] hover:text-[#121314] font-medium cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'COPIED' : 'COPY'}</span>
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-mono text-[9px] tracking-[0.08em] uppercase text-[#52545a] mb-1.5 font-medium">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Eleanor Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#ffffff] border border-[#e6e4df] focus:border-[#121314] focus:outline-hidden px-3.5 py-2.5 font-sans text-[13px] text-[#121314]"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[9px] tracking-[0.08em] uppercase text-[#52545a] mb-1.5 font-medium">
                    YOUR EMAIL *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. eleanor@research-lab.org"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#ffffff] border border-[#e6e4df] focus:border-[#121314] focus:outline-hidden px-3.5 py-2.5 font-sans text-[13px] text-[#121314]"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[9px] tracking-[0.08em] uppercase text-[#52545a] mb-1.5 font-medium">
                    NOTE / PURPOSE
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Brief description of your research proposal or inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#ffffff] border border-[#e6e4df] focus:border-[#121314] focus:outline-hidden px-3.5 py-2.5 font-sans text-[13px] text-[#121314] resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="font-mono text-[11px] text-[#52545a] hover:text-[#121314] underline"
                  >
                    Open default mail client ↗
                  </a>
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-[#121314] hover:bg-[#2a434a] text-[#fbfbfa] font-mono text-[11px] tracking-[0.08em] uppercase font-medium transition-colors cursor-pointer"
                  >
                    DISPATCH
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
