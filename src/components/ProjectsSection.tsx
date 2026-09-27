import React, { useState } from 'react';
import { ArrowRight, ExternalLink, Lock, Unlock } from 'lucide-react';
import { FEATURED_DOSSIER, SECONDARY_DOSSIERS } from '../data/portfolioData';
import { ProjectDossier } from '../types';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectDossier) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProject,
}) => {
  const [lockState, setLockState] = useState<'LOCKED' | 'UNLOCKED'>('LOCKED');

  const handleSimulateLockToggle = () => {
    setLockState((prev) =>
      prev === 'LOCKED' ? 'UNLOCKED' : 'LOCKED'
    );
  };

  const smartDoorLock = SECONDARY_DOSSIERS[0];
  const githubPortfolio = SECONDARY_DOSSIERS[1];
  const graphicsEditor = SECONDARY_DOSSIERS[2];

  return (
    <section id="projects" className="py-20 border-t border-[#e6e4df]">
      <div className="max-w-[72rem] mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 mb-14 items-end">
          <div className="lg:col-span-6 space-y-3">
            <div className="font-mono text-[11px] tracking-[0.08em] text-[#8c8d91] uppercase">
              02 / SELECTED WORK
            </div>

            <h2 className="font-serif text-[34px] sm:text-[44px] leading-[1.12] tracking-[-0.02em] text-[#121314] font-normal">
              A few things I've built.
            </h2>
          </div>

          <div className="lg:col-span-6">
            <p className="font-sans text-[15px] sm:text-[16px] leading-[1.65] text-[#52545a]">
              A collection of practical projects across AI, hardware,
              programming, and web development.
            </p>
          </div>
        </div>

        {/* ============================================================ */}
        {/* FEATURED PROJECT: ANEMIA DETECTOR */}
        {/* ============================================================ */}

        <div className="border border-[#e6e4df] bg-[#fbfbfa] p-6 sm:p-8 lg:p-10 mb-12">

          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[#eceae5] mb-8">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#121314]" />

              <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-[#52545a] font-medium">
                {FEATURED_DOSSIER.badge}
              </span>
            </div>

            <div className="font-mono text-[11px] tracking-[0.08em] uppercase text-[#8c8d91]">
              {FEATURED_DOSSIER.dossierNumber}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">

            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>

                <div className="font-mono text-[10px] tracking-[0.08em] uppercase text-[#8c8d91] mb-3">
                  {FEATURED_DOSSIER.category}
                </div>

                <h3 className="font-serif text-[32px] sm:text-[38px] text-[#121314] font-normal leading-[1.15] mb-4">
                  {FEATURED_DOSSIER.title}
                </h3>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {FEATURED_DOSSIER.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] px-2.5 py-0.5 border border-[#e6e4df] bg-[#fbfbfa] text-[#52545a]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="font-sans text-[15px] leading-[1.7] text-[#52545a] mb-8">
                  {FEATURED_DOSSIER.summary}
                </p>

                <div className="border-l-2 border-[#9e7b4f] bg-[#f6f5f2] px-4 py-3 mb-8">
                  <div className="font-mono text-[10px] tracking-[0.06em] uppercase text-[#8c8d91] mb-1">
                    PROJECT NOTE
                  </div>

                  <p className="font-sans text-[13px] leading-[1.6] text-[#52545a]">
                    This project is intended as a screening aid and does not
                    provide a medical diagnosis. If potential risk is
                    indicated, the user is advised to consult a doctor.
                  </p>
                </div>

                <div className="border-t border-b border-[#eceae5] py-3 my-6 divide-y divide-[#eceae5] text-[13px]">
                  {FEATURED_DOSSIER.specs?.map((spec) => (
                    <div
                      key={spec.label}
                      className="py-2.5 flex justify-between items-center font-sans"
                    >
                      <span className="text-[#8c8d91] font-mono text-[12px]">
                        {spec.label}
                      </span>

                      <span className="text-[#121314] font-medium text-right">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <button
                  id="featured-project-btn"
                  onClick={() => onSelectProject(FEATURED_DOSSIER)}
                  className="inline-flex items-center gap-2.5 bg-[#121314] hover:bg-[#2a434a] text-[#fbfbfa] px-5 py-3 font-mono text-[11px] tracking-[0.08em] uppercase font-medium transition-colors cursor-pointer group"
                >
                  <span>{FEATURED_DOSSIER.actionLabel}</span>

                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-5">
              <div className="h-full border border-[#e6e4df] bg-[#f6f5f2] p-6 flex flex-col justify-between">

                <div>
                  <div className="font-mono text-[10px] tracking-[0.08em] text-[#8c8d91] uppercase pb-3 mb-6 border-b border-[#e6e4df]">
                    PROJECT OVERVIEW
                  </div>

                  <div className="space-y-3">

                    <div className="border border-[#e6e4df] bg-[#fbfbfa] p-4">
                      <div className="font-mono text-[9px] tracking-[0.08em] text-[#8c8d91] uppercase mb-2">
                        INPUT
                      </div>

                      <div className="font-sans text-[14px] text-[#121314]">
                        Images of nail and eye pallor
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <ArrowRight className="w-4 h-4 text-[#8c8d91] rotate-90" />
                    </div>

                    <div className="border border-[#e6e4df] bg-[#fbfbfa] p-4">
                      <div className="font-mono text-[9px] tracking-[0.08em] text-[#8c8d91] uppercase mb-2">
                        AI SCREENING
                      </div>

                      <div className="font-sans text-[14px] text-[#121314]">
                        Visual indicators are assessed for potential risk
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <ArrowRight className="w-4 h-4 text-[#8c8d91] rotate-90" />
                    </div>

                    <div className="border border-[#e6e4df] bg-[#fbfbfa] p-4">
                      <div className="font-mono text-[9px] tracking-[0.08em] text-[#8c8d91] uppercase mb-2">
                        RESULT
                      </div>

                      <div className="font-sans text-[14px] text-[#121314]">
                        Potential risk indication and supportive guidance
                      </div>
                    </div>

                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#e6e4df]">
                  <div className="font-mono text-[10px] leading-[1.6] text-[#8c8d91]">
                    SCREENING PROJECT · NOT A MEDICAL DIAGNOSIS
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* SECONDARY PROJECTS */}
        {/* ============================================================ */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* ========================================================== */}
          {/* SMART DOOR LOCK */}
          {/* ========================================================== */}

          <div className="border border-[#e6e4df] bg-[#fbfbfa] p-6 sm:p-7 flex flex-col justify-between">
            <div>

              <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.08em] uppercase text-[#8c8d91] pb-4 mb-4 border-b border-[#eceae5]">
                <span>{smartDoorLock.dossierNumber}</span>

                <span className="text-[#121314] font-medium">
                  {smartDoorLock.badge}
                </span>
              </div>

              <div className="font-mono text-[10px] tracking-[0.08em] uppercase text-[#8c8d91] mb-2">
                {smartDoorLock.category}
              </div>

              <h3 className="font-serif text-[24px] sm:text-[28px] text-[#121314] font-normal leading-tight mb-3">
                {smartDoorLock.title}
              </h3>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {smartDoorLock.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] px-2 py-0.5 border border-[#e6e4df] bg-[#fbfbfa] text-[#52545a]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="font-sans text-[14px] leading-[1.65] text-[#52545a] mb-6">
                {smartDoorLock.summary}
              </p>

              <div className="border border-[#e6e4df] bg-[#f6f5f2] p-4 mb-6">

                <div className="flex items-center justify-between font-mono text-[9px] tracking-[0.08em] text-[#8c8d91] uppercase pb-2 mb-3 border-b border-[#e6e4df]">
                  <span>HARDWARE SCHEMATIC</span>

                  <span className="text-[#9e7b4f] font-semibold">
                    5V DC BUS
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center font-mono">

                  <div className="bg-[#fbfbfa] border border-[#e6e4df] p-2">
                    <div className="text-[8px] text-[#8c8d91] uppercase">
                      INPUT
                    </div>

                    <div className="text-[10px] font-semibold text-[#121314]">
                      4x4 KEYPAD
                    </div>
                  </div>

                  <div className="bg-[#fbfbfa] border border-[#e6e4df] p-2">
                    <div className="text-[8px] text-[#8c8d91] uppercase">
                      CONTROLLER
                    </div>

                    <div className="text-[10px] font-semibold text-[#2a434a]">
                      ARDUINO UNO
                    </div>
                  </div>

                  <div className="bg-[#fbfbfa] border border-[#e6e4df] p-2">
                    <div className="text-[8px] text-[#8c8d91] uppercase">
                      ACTUATOR
                    </div>

                    <div className="text-[10px] font-semibold text-[#121314]">
                      SG90 SERVO
                    </div>
                  </div>

                  <button
                    onClick={handleSimulateLockToggle}
                    className={`border p-2 cursor-pointer transition-colors ${
                      lockState === 'LOCKED'
                        ? 'bg-[#121314] text-[#fbfbfa] border-[#121314]'
                        : 'bg-[#2a434a] text-[#fbfbfa] border-[#2a434a]'
                    }`}
                  >
                    <div className="text-[8px] text-white/70 uppercase">
                      STATE
                    </div>

                    <div className="text-[10px] font-bold flex items-center justify-center gap-1">
                      {lockState === 'LOCKED' ? (
                        <>
                          <Lock className="w-2.5 h-2.5" />
                          LOCKED
                        </>
                      ) : (
                        <>
                          <Unlock className="w-2.5 h-2.5" />
                          OPEN
                        </>
                      )}
                    </div>
                  </button>

                </div>

                <div className="grid grid-cols-2 gap-2 mt-2 font-mono text-center">

                  <div className="bg-[#fbfbfa] border border-[#e6e4df] p-2">
                    <div className="text-[8px] text-[#8c8d91] uppercase">
                      DISPLAY
                    </div>

                    <div className="text-[10px] font-semibold text-[#121314]">
                      16x2 LCD + I2C
                    </div>
                  </div>

                  <div className="bg-[#fbfbfa] border border-[#e6e4df] p-2">
                    <div className="text-[8px] text-[#8c8d91] uppercase">
                      ALERT
                    </div>

                    <div className="text-[10px] font-semibold text-[#121314]">
                      5V BUZZER
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#eceae5]">

              <button
                onClick={() => onSelectProject(smartDoorLock)}
                className="font-mono text-[11px] tracking-[0.08em] uppercase text-[#121314] hover:text-[#2a434a] font-medium flex items-center gap-2 cursor-pointer group"
              >
                <span>{smartDoorLock.actionLabel}</span>

                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>

              <span className="font-mono text-[10px] tracking-[0.08em] text-[#8c8d91] uppercase">
                {smartDoorLock.statusLabel}
              </span>

            </div>
          </div>

          {/* ========================================================== */}
          {/* GITHUB PORTFOLIO */}
          {/* ========================================================== */}

          <div className="border border-[#e6e4df] bg-[#fbfbfa] p-6 sm:p-7 flex flex-col justify-between">
            <div>

              <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.08em] uppercase text-[#8c8d91] pb-4 mb-4 border-b border-[#eceae5]">
                <span>{githubPortfolio.dossierNumber}</span>

                <span className="text-[#121314] font-medium">
                  {githubPortfolio.badge}
                </span>
              </div>

              <div className="font-mono text-[10px] tracking-[0.08em] uppercase text-[#8c8d91] mb-2">
                {githubPortfolio.category}
              </div>

              <h3 className="font-serif text-[24px] sm:text-[28px] text-[#121314] font-normal leading-tight mb-3">
                {githubPortfolio.title}
              </h3>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {githubPortfolio.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] px-2 py-0.5 border border-[#e6e4df] bg-[#fbfbfa] text-[#52545a]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="font-sans text-[14px] leading-[1.65] text-[#52545a] mb-6">
                {githubPortfolio.summary}
              </p>

              <div className="border border-[#e6e4df] bg-[#f6f5f2] p-4 mb-6">

                <div className="flex items-center justify-between font-mono text-[9px] tracking-[0.08em] text-[#8c8d91] uppercase pb-2 mb-3 border-b border-[#e6e4df]">
                  <span>GITHUB REPOSITORY</span>

                  <span className="text-[#2a434a] font-semibold">
                    PUBLIC
                  </span>
                </div>

                <div className="font-mono text-[11px] leading-[1.7] text-[#121314] break-all">
                  github.com/Ardra-Sobharaj/mywebsite-code
                </div>

              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#eceae5]">

              <a
                href={githubPortfolio.actionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] tracking-[0.08em] uppercase text-[#121314] hover:text-[#2a434a] font-medium flex items-center gap-2 group"
              >
                <span>VIEW PROJECT</span>

                <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>

              <span className="font-mono text-[10px] tracking-[0.08em] text-[#8c8d91] uppercase">
                {githubPortfolio.statusLabel}
              </span>

            </div>
          </div>

          {/* ========================================================== */}
          {/* 2D ASCII GRAPHICS EDITOR */}
          {/* ========================================================== */}

          <div className="border border-[#e6e4df] bg-[#fbfbfa] p-6 sm:p-7 flex flex-col justify-between">
            <div>

              <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.08em] uppercase text-[#8c8d91] pb-4 mb-4 border-b border-[#eceae5]">
                <span>{graphicsEditor.dossierNumber}</span>

                <span className="text-[#121314] font-medium">
                  {graphicsEditor.badge}
                </span>
              </div>

              <div className="font-mono text-[10px] tracking-[0.08em] uppercase text-[#8c8d91] mb-2">
                {graphicsEditor.category}
              </div>

              <h3 className="font-serif text-[24px] sm:text-[28px] text-[#121314] font-normal leading-tight mb-3">
                {graphicsEditor.title}
              </h3>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {graphicsEditor.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] px-2 py-0.5 border border-[#e6e4df] bg-[#fbfbfa] text-[#52545a]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="font-sans text-[14px] leading-[1.65] text-[#52545a] mb-6">
                {graphicsEditor.summary}
              </p>

              {/* ASCII Preview */}
              <div className="border border-[#e6e4df] bg-[#f6f5f2] p-4 mb-6">

                <div className="flex items-center justify-between font-mono text-[9px] tracking-[0.08em] text-[#8c8d91] uppercase pb-2 mb-3 border-b border-[#e6e4df]">
                  <span>ASCII CANVAS</span>

                  <span className="text-[#2a434a] font-semibold">
                    C PROGRAM
                  </span>
                </div>

                <pre className="font-mono text-[11px] leading-[1.5] text-[#52545a] overflow-x-auto">
{`+----------------------+
|    /\\        ____    |
|   /  \\      /    \\   |
|  /____\\    |  ()  |  |
|            |______|  |
|                      |
|  LINE  RECT  CIRCLE  |
+----------------------+`}
                </pre>

              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#eceae5]">

              <a
                href={graphicsEditor.actionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] tracking-[0.08em] uppercase text-[#121314] hover:text-[#2a434a] font-medium flex items-center gap-2 group"
              >
                <span>VIEW PROJECT</span>

                <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>

              <span className="font-mono text-[10px] tracking-[0.08em] text-[#8c8d91] uppercase">
                {graphicsEditor.statusLabel}
              </span>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
