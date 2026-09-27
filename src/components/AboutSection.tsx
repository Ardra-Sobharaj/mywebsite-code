import React from 'react';
import { PERSONAL_INFO, ABOUT_PILLARS } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 border-t border-[#e6e4df]">
      <div className="max-w-[72rem] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column (Sticky editorial anchor) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="font-mono text-[11px] tracking-[0.08em] text-[#8c8d91] uppercase">
              01 / ABOUT
            </div>
            <h2 className="font-serif text-[32px] sm:text-[38px] leading-[1.18] tracking-[-0.015em] text-[#121314] font-normal">
              Learning by buidling . Building through practice.
            </h2>
          </div>

          {/* Right Column (Narrative & 3 Pillars) */}
          <div className="lg:col-span-8 space-y-10">
            <p className="font-sans text-[16px] sm:text-[17px] leading-[1.75] text-[#52545a] font-normal">
              {PERSONAL_INFO.aboutParagraph}
            </p>

            {/* 3 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {ABOUT_PILLARS.map((pillar) => (
                <div
                  key={pillar.number}
                  className="border border-[#e6e4df] bg-[#fbfbfa] hover:bg-[#f6f5f2] transition-colors p-5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.08em] text-[#8c8d91] uppercase mb-4 pb-2 border-b border-[#eceae5]">
                      <span>{pillar.code}</span>
                      <span className="tabular-numbers">{pillar.number}</span>
                    </div>
                    <h3 className="font-mono text-[16px] font-semibold text-[#121314] tracking-[0.05em] mb-2.5">
                      {pillar.title}
                    </h3>
                    <p className="font-sans text-[13px] leading-[1.65] text-[#52545a]">
                      {pillar.text}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-[#eceae5] font-mono text-[10px] tracking-[0.08em] text-[#2a434a] font-medium uppercase flex items-center gap-1.5">
                    <span>{pillar.tag}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
