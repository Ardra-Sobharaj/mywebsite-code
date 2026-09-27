import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-[#e6e4df] bg-[#fbfbfa] py-16 text-[#52545a]">
      <div className="max-w-[72rem] mx-auto px-6 sm:px-8 lg:px-12">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#eceae5]">

          {/* Left Block */}
          <div className="md:col-span-5 space-y-4">
            <h4 className="font-sans text-[16px] font-semibold text-[#121314]">
              {PERSONAL_INFO.name}
            </h4>

            <p className="font-sans text-[13px] leading-[1.65] text-[#52545a] max-w-sm">
              B.Tech AI & Data Science student at REVA University, building
              a foundation in programming, data science, and practical
              technology projects.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-mono text-[10px] tracking-[0.08em] uppercase text-[#8c8d91] pb-1">
              NAVIGATION
            </div>

            <ul className="space-y-2 text-[13px] font-sans">
              <li>
                <button
                  onClick={() => scrollTo('about')}
                  className="text-[#52545a] hover:text-[#121314] transition-colors cursor-pointer"
                >
                  About
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollTo('projects')}
                  className="text-[#52545a] hover:text-[#121314] transition-colors cursor-pointer"
                >
                  Projects
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollTo('skills')}
                  className="text-[#52545a] hover:text-[#121314] transition-colors cursor-pointer"
                >
                  Skills
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollTo('journey')}
                  className="text-[#52545a] hover:text-[#121314] transition-colors cursor-pointer"
                >
                  Journey
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollTo('contact')}
                  className="text-[#52545a] hover:text-[#121314] transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4 space-y-3">
            <div className="font-mono text-[10px] tracking-[0.08em] uppercase text-[#8c8d91] pb-1">
              CONNECT
            </div>

            <ul className="space-y-2 text-[13px] font-sans">

              <li>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#52545a] hover:text-[#121314] transition-colors"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#8c8d91]" />
                </a>
              </li>

              <li>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#52545a] hover:text-[#121314] transition-colors"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#8c8d91]" />
                </a>
              </li>

              <li>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="inline-flex items-center gap-1 text-[#52545a] hover:text-[#121314] transition-colors"
                >
                  <span>Email</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#8c8d91]" />
                </a>
              </li>

            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#8c8d91]">

          <div>
            © 2026 {PERSONAL_INFO.name} · All rights reserved.
          </div>

          <div className="flex items-center gap-2 text-[#121314] uppercase tracking-[0.06em]">
            <span className="w-1.5 h-1.5 bg-[#121314]" />
            <span>BENGALURU, INDIA</span>
          </div>

        </div>
      </div>
    </footer>
  );
};
