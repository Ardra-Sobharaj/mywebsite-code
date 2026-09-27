import React from 'react';
import { SKILLS_DATA } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 border-t border-[#e6e4df]">
      <div className="max-w-[72rem] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 mb-14 items-end">
          <div className="lg:col-span-6 space-y-3">
            <div className="font-mono text-[11px] tracking-[0.08em] text-[#8c8d91] uppercase">
              03 / SKILLS
            </div>
            <h2 className="font-serif text-[34px] sm:text-[44px] leading-[1.12] tracking-[-0.02em] text-[#121314] font-normal">
              Tools I'm working with.
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="font-sans text-[15px] sm:text-[16px] leading-[1.65] text-[#52545a]">
              A clear overview of my current programming skills and the technologies
  I am actively exploring as I continue building my foundation in AI and
  Data Science.
            </p>
          </div>
        </div>

        {/* 4-Column Tool Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS_DATA.map((skill) => (
            <div
              key={skill.id}
              className="border border-[#e6e4df] bg-[#fbfbfa] hover:bg-[#f6f5f2] transition-colors p-6 flex flex-col justify-between"
            >
              <div>
                {/* Card Header */}
                <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.08em] uppercase text-[#8c8d91] pb-3 mb-4 border-b border-[#eceae5]">
                  <span>{skill.groupNumber}</span>
                  {skill.statusTag && (
                    <span className="px-1.5 py-0.5 border border-[#2a434a] text-[#2a434a] text-[9px] font-semibold">
                      {skill.statusTag}
                    </span>
                  )}
                </div>

                {/* Card Title */}
                <h3 className="font-sans text-[17px] font-semibold text-[#121314] tracking-tight mb-5">
                  {skill.title}
                </h3>

                {/* Skill List items */}
                <div className="space-y-3">
                  {skill.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-baseline justify-between text-[13px] border-b border-[#eceae5]/60 pb-2"
                    >
                      <span className="font-mono text-[#121314] font-medium text-[13px]">
                        {item.name}
                      </span>
                      <span className="font-sans text-[#8c8d91] text-[12px] text-right">
                        {item.detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Tag */}
              <div className="mt-8 pt-3 border-t border-[#eceae5] font-mono text-[10px] tracking-[0.08em] text-[#8c8d91] uppercase">
                {skill.footerNote}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
