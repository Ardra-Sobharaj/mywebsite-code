import React from 'react';
import { CheckCircle2, FileCheck } from 'lucide-react';
import {
  JOURNEY_MILESTONES,
  EDUCATION_RECORDS,
  CERTIFICATIONS,
} from '../data/portfolioData';

export const JourneySection: React.FC = () => {
  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'PASSED':
        return 'bg-[#121314] text-[#fbfbfa]';

      case 'IN FOCUS':
        return 'bg-[#2a434a] text-[#fbfbfa] font-bold';

      case 'ACTIVE':
        return 'border border-[#2a434a] text-[#2a434a] font-semibold';

      case 'TRAJECTORY':
        return 'border border-[#9e7b4f] text-[#9e7b4f]';

      case 'OBJECTIVE':
      default:
        return 'border border-[#8c8d91] text-[#8c8d91]';
    }
  };

  return (
    <section id="journey" className="py-20 border-t border-[#e6e4df]">
      <div className="max-w-[72rem] mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 mb-14 items-end">

          <div className="lg:col-span-6 space-y-3">
            <div className="font-mono text-[11px] tracking-[0.08em] text-[#8c8d91] uppercase">
              04 / JOURNEY
            </div>

            <h2 className="font-serif text-[34px] sm:text-[44px] leading-[1.12] tracking-[-0.02em] text-[#121314] font-normal">
              Currently learning. Always improving.
            </h2>
          </div>

          <div className="lg:col-span-6">
            <p className="font-sans text-[15px] sm:text-[16px] leading-[1.65] text-[#52545a]">
              A snapshot of my current learning path, from strengthening
              programming fundamentals to exploring data structures,
              databases, AI, and practical projects.
            </p>
          </div>
        </div>

        {/* 6-Stage Milestone Progress Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-16">
          {JOURNEY_MILESTONES.map((milestone) => (
            <div
              key={milestone.step}
              className="border border-[#e6e4df] bg-[#fbfbfa] p-4 flex flex-col justify-between"
            >
              <div>

                <div className="flex items-center justify-between font-mono text-[10px] pb-2 mb-3 border-b border-[#eceae5]">
                  <span className="font-semibold text-[#121314]">
                    {milestone.step}
                  </span>

                  <span
                    className={`text-[9px] px-1.5 py-0.5 tracking-[0.06em] uppercase ${getStatusBadgeClass(
                      milestone.status
                    )}`}
                  >
                    {milestone.status}
                  </span>
                </div>

                <h4 className="font-mono text-[13px] font-semibold text-[#121314] mb-2">
                  {milestone.title}
                </h4>

                <p className="font-sans text-[11px] leading-[1.5] text-[#52545a]">
                  {milestone.description}
                </p>

              </div>
            </div>
          ))}
        </div>

        {/* Two-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Education */}
          <div className="space-y-8">

            <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.08em] text-[#8c8d91] uppercase pb-3 border-b border-[#e6e4df]">
              <span>ACADEMIC RECORD</span>
              <span>SEC: ED // 01</span>
            </div>

            <h3 className="font-serif text-[28px] text-[#121314] font-normal">
              Education
            </h3>

            <div className="space-y-8">
              {EDUCATION_RECORDS.map((edu, idx) => (
                <div
                  key={idx}
                  className="border-b border-[#eceae5] pb-8 last:border-b-0 space-y-3"
                >

                  <div className="flex items-center justify-between font-mono text-[11px]">
                    <span className="text-[#8c8d91]">
                      {edu.period}
                    </span>

                    <span
                      className={`text-[10px] px-2 py-0.5 uppercase tracking-[0.06em] ${
                        edu.statusBadge.includes('CURRENT')
                          ? 'bg-[#2a434a] text-[#fbfbfa]'
                          : 'border border-[#e6e4df] text-[#52545a]'
                      }`}
                    >
                      {edu.statusBadge}
                    </span>
                  </div>

                  <h4 className="font-sans text-[18px] font-medium text-[#121314]">
                    {edu.degree}
                  </h4>

                  <div className="font-sans text-[13px] text-[#8c8d91] font-medium">
                    {edu.institution}
                  </div>

                  <p className="font-sans text-[14px] leading-[1.65] text-[#52545a]">
                    {edu.description}
                  </p>

                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-8">

            <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.08em] text-[#8c8d91] uppercase pb-3 border-b border-[#e6e4df]">
              <span>CREDENTIAL ARCHIVE</span>
              <span>SEC: CERT // 02</span>
            </div>

            <h3 className="font-serif text-[28px] text-[#121314] font-normal">
              Certifications
            </h3>

            <div className="space-y-8">

              {CERTIFICATIONS.map((cert, idx) => (
                <div
                  key={idx}
                  className="border border-[#e6e4df] bg-[#fbfbfa] p-6 space-y-3 relative"
                >

                  <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.08em] uppercase pb-2 border-b border-[#eceae5]">
                    <span className="text-[#8c8d91] font-medium">
                      {cert.issuerOrg}
                    </span>

                    <span className="text-[#2a434a] font-semibold flex items-center gap-1">
                      VERIFIED
                    </span>
                  </div>

                  <h4 className="font-sans text-[18px] font-medium text-[#121314]">
                    {cert.title}
                  </h4>

                  <div className="font-sans text-[13px] text-[#8c8d91] italic">
                    {cert.issuedBy}
                  </div>

                  <p className="font-sans text-[14px] leading-[1.65] text-[#52545a]">
                    {cert.description}
                  </p>

                  <div className="pt-3 border-t border-[#eceae5] flex items-center justify-between">

                    <div className="font-mono text-[10px] tracking-[0.06em] text-[#8c8d91] uppercase">
                      SKILL: {cert.skills.join(' · ')}
                    </div>

                    <CheckCircle2 className="w-4 h-4 text-[#2a434a]" />

                  </div>
                </div>
              ))}

              {/* Certifications Notice */}
              <div className="border border-[#e6e4df] bg-[#f6f5f2] p-4 flex items-start gap-3">

                <FileCheck className="w-5 h-5 text-[#2a434a] shrink-0 mt-0.5" />

                <div className="font-sans text-[12px] leading-[1.6] text-[#52545a]">

                  <span className="font-mono text-[11px] font-semibold text-[#121314] uppercase tracking-[0.06em] block mb-1">
                    CERTIFICATIONS
                  </span>

                  Certifications and courses that support my ongoing learning
                  in programming, data science, and professional development.

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
