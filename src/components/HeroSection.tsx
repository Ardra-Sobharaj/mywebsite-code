import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onScrollToProjects: () => void;
  onScrollToContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onScrollToProjects,
  onScrollToContact,
}) => {
  return (
    <section id="home" className="relative pt-16 md:pt-24 pb-16">
      <div className="max-w-[72rem] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Kicker tag */}
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 bg-[#121314] inline-block" />
          <span className="font-mono text-[11px] sm:text-[12px] tracking-[0.08em] uppercase text-[#52545a] font-medium">
            {PERSONAL_INFO.affiliation}
          </span>
        </div>

        {/* Display Headline */}
        <h1 className="font-serif text-[42px] sm:text-[54px] lg:text-[68px] leading-[1.08] tracking-[-0.025em] text-[#121314] max-w-4xl font-normal mb-7">
          Building my foundation in{' '}
          <em className="font-serif italic font-normal tracking-[-0.015em] text-[#121314]">
            code, AI
          </em>{' '}
          & data.
        </h1>

        {/* Bio paragraph */}
        <p className="font-sans text-[16px] sm:text-[18px] text-[#52545a] leading-[1.65] max-w-2xl font-normal mb-9">
          {PERSONAL_INFO.heroBio}
        </p>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-6 sm:gap-8 mb-16">
          <button
            id="hero-view-projects-btn"
            onClick={onScrollToProjects}
            className="flex items-center gap-3 bg-[#121314] hover:bg-[#2a434a] text-[#fbfbfa] px-6 py-3.5 font-mono text-[11px] sm:text-[12px] tracking-[0.08em] uppercase font-medium transition-colors duration-150 rounded-none cursor-pointer group"
          >
            <span>VIEW PROJECTS</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            id="hero-connect-btn"
            onClick={onScrollToContact}
            className="group flex items-center gap-2 font-mono text-[11px] sm:text-[12px] tracking-[0.08em] uppercase text-[#121314] hover:text-[#2a434a] transition-colors py-2 border-b border-[#121314] hover:border-[#2a434a] cursor-pointer"
          >
            <span>CONNECT WITH ME</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* 3-Column Metadata Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-[#e6e4df] py-5 gap-6 md:gap-0">
          <div className="md:pr-8">
            <span className="block font-mono text-[10px] tracking-[0.08em] text-[#8c8d91] uppercase mb-1">
              CURRENT FOCUS
            </span>
            <span className="font-sans text-[14px] text-[#121314] font-medium">
              {PERSONAL_INFO.currentFocus}
            </span>
          </div>

          <div className="md:px-8 md:border-l md:border-[#e6e4df]">
            <span className="block font-mono text-[10px] tracking-[0.08em] text-[#8c8d91] uppercase mb-1">
              AFFILIATION
            </span>
            <span className="font-sans text-[14px] text-[#121314] font-medium">
              {PERSONAL_INFO.school}
            </span>
          </div>

          <div className="md:pl-8 md:border-l md:border-[#e6e4df]">
            <span className="block font-mono text-[10px] tracking-[0.08em] text-[#8c8d91] uppercase mb-1">
              LOCATION
            </span>
            <span className="font-sans text-[14px] text-[#121314] font-medium tabular-numbers">
              {PERSONAL_INFO.location}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
