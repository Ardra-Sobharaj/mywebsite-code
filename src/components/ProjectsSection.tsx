import React, { useState } from 'react';
import { ArrowRight, ExternalLink, Sliders, CheckCircle2, Lock, Unlock } from 'lucide-react';
import { FEATURED_DOSSIER, SECONDARY_DOSSIERS } from '../data/portfolioData';
import { ProjectDossier } from '../types';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectDossier) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  // Interactive diagnostic state for Anemia Detector demo
  const [activeSample, setActiveSample] = useState<'sampleA' | 'sampleB'>('sampleA');

  // Interactive state for Smart Door Lock simulator
  const [lockState, setLockState] = useState<'LOCKED' | 'UNLOCKED'>('LOCKED');
  const [keypadInput, setKeypadInput] = useState('');

  const sampleData = {
    sampleA: {
      scleraRgb: '242, 239, 232',
      deltaE: '4.12',
      erythema: '68.4%',
      pallor: '0.781 [HIGH]',
      diagnosis: 'Indication of Pallor — Microvascular Hemoglobin Attenuation',
    },
    sampleB: {
      scleraRgb: '251, 248, 245',
      deltaE: '1.45',
      erythema: '89.2%',
      pallor: '0.215 [NORMAL]',
      diagnosis: 'Erythrocyte Pigment Nominal — Baseline Healthy Vascularization',
    },
  };

  const currentSample = sampleData[activeSample];

  const handleSimulateLockToggle = () => {
    setLockState((prev) => (prev === 'LOCKED' ? 'UNLOCKED' : 'LOCKED'));
  };

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
              Investigative experiments, hardware micro-controllers, and digital interfaces designed
              with architectural restraint and verifiable implementation.
            </p>
          </div>
        </div>

        {/* ============================================================ */}
        {/* FEATURED PROJECT: ANEMIA DETECTOR (DOSSIER 01) */}
        {/* ============================================================ */}
        <div className="border border-[#e6e4df] bg-[#fbfbfa] p-6 sm:p-8 lg:p-10 mb-12">
          {/* Top metadata badge */}
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

          {/* Project Body: Split into Specs / Description and Visual Diagnostic Pipeline */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Left Col: Title, Tags, Description, Specs */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-[32px] sm:text-[38px] text-[#121314] font-normal leading-[1.15] mb-4">
                  {FEATURED_DOSSIER.title}
                </h3>

                {/* Tags */}
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

                {/* Specs Table */}
                <div className="border-t border-b border-[#eceae5] py-3 my-6 divide-y divide-[#eceae5] text-[13px]">
                  {FEATURED_DOSSIER.specs?.map((spec) => (
                    <div
                      key={spec.label}
                      className="py-2.5 flex justify-between items-center font-sans"
                    >
                      <span className="text-[#8c8d91] font-mono text-[12px]">{spec.label}</span>
                      <span className="text-[#121314] font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 flex items-center gap-4">
                <button
                  id="featured-project-repo-btn"
                  onClick={() => onSelectProject(FEATURED_DOSSIER)}
                  className="inline-flex items-center gap-2.5 bg-[#121314] hover:bg-[#2a434a] text-[#fbfbfa] px-5 py-3 font-mono text-[11px] tracking-[0.08em] uppercase font-medium transition-colors cursor-pointer group"
                >
                  <span>{FEATURED_DOSSIER.actionLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Right Col: Diagnostic Pipeline Architecture // v0.3 */}
            <div className="lg:col-span-6">
              <div className="border border-[#e6e4df] bg-[#f6f5f2] p-5">
                {/* Diagram Header */}
                <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.08em] pb-3 mb-4 border-b border-[#e6e4df]">
                  <span className="text-[#52545a] font-medium uppercase">
                    DIAGNOSTIC PIPELINE ARCHITECTURE // V0.3
                  </span>
                  <span className="px-2 py-0.5 border border-[#2a434a] text-[#2a434a] font-semibold">
                    ACTIVE PROTO
                  </span>
                </div>

                {/* Interactive Sample Selector */}
                <div className="mb-4 flex items-center justify-between text-[11px] font-mono bg-[#eceae5]/60 p-2">
                  <span className="text-[#52545a] flex items-center gap-1.5">
                    <Sliders className="w-3 h-3 text-[#2a434a]" /> SAMPLE CALIBRATION:
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setActiveSample('sampleA')}
                      className={`px-2 py-0.5 text-[10px] uppercase font-mono cursor-pointer transition-colors ${
                        activeSample === 'sampleA'
                          ? 'bg-[#121314] text-[#fbfbfa]'
                          : 'bg-[#fbfbfa] text-[#52545a] border border-[#e6e4df]'
                      }`}
                    >
                      SPECIMEN #01 (PALLOR)
                    </button>
                    <button
                      onClick={() => setActiveSample('sampleB')}
                      className={`px-2 py-0.5 text-[10px] uppercase font-mono cursor-pointer transition-colors ${
                        activeSample === 'sampleB'
                          ? 'bg-[#121314] text-[#fbfbfa]'
                          : 'bg-[#fbfbfa] text-[#52545a] border border-[#e6e4df]'
                      }`}
                    >
                      SPECIMEN #02 (NOMINAL)
                    </button>
                  </div>
                </div>

                {/* Two Visual Schematic Panels */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  {/* Panel 1: Sclera ROI */}
                  <div className="border border-[#e6e4df] bg-[#fbfbfa] p-3.5 flex flex-col justify-between">
                    <div>
                      <div className="font-mono text-[10px] text-[#8c8d91] tracking-[0.06em] uppercase mb-2">
                        REGION OF INTEREST 01: SCLERA
                      </div>
                      {/* SVG Schematic of Sclera with Crosshair & Reticles */}
                      <div className="w-full h-32 bg-[#f6f5f2] border border-[#eceae5] flex items-center justify-center relative overflow-hidden mb-3">
                        <svg className="w-full h-full" viewBox="0 0 160 120">
                          {/* Grid background */}
                          <defs>
                            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#e6e4df" strokeWidth="0.5" />
                            </pattern>
                          </defs>
                          <rect width="160" height="120" fill="url(#grid)" />

                          {/* Eye contour */}
                          <path
                            d="M 20 60 Q 80 18 140 60 Q 80 102 20 60 Z"
                            fill="#ffffff"
                            stroke="#52545a"
                            strokeWidth="1.2"
                          />
                          {/* Iris & Pupil */}
                          <circle
                            cx="80"
                            cy="60"
                            r="24"
                            fill={activeSample === 'sampleA' ? '#c7c2b6' : '#b08b68'}
                            stroke="#52545a"
                            strokeWidth="1"
                          />
                          <circle cx="80" cy="60" r="11" fill="#121314" />
                          <circle cx="83" cy="56" r="3" fill="#ffffff" />

                          {/* Sclera Target Region Crosshair */}
                          <circle
                            cx="42"
                            cy="60"
                            r="12"
                            fill="none"
                            stroke="#9e7b4f"
                            strokeWidth="1"
                            strokeDasharray="2 2"
                          />
                          <line x1="28" y1="60" x2="56" y2="60" stroke="#9e7b4f" strokeWidth="0.75" />
                          <line x1="42" y1="46" x2="42" y2="74" stroke="#9e7b4f" strokeWidth="0.75" />
                          <circle cx="42" cy="60" r="2" fill="#9e7b4f" />

                          {/* Optical Reticle Labels */}
                          <text x="32" y="38" fontSize="7" fill="#8c8d91" fontFamily="JetBrains Mono">
                            ROI_SCLERA
                          </text>
                        </svg>
                      </div>
                    </div>

                    <div className="space-y-1 font-mono text-[11px] tabular-numbers border-t border-[#eceae5] pt-2">
                      <div className="flex justify-between text-[#52545a]">
                        <span className="text-[#8c8d91]">RGB:</span>
                        <span className="font-semibold">{currentSample.scleraRgb}</span>
                      </div>
                      <div className="flex justify-between text-[#52545a]">
                        <span className="text-[#8c8d91]">Chromaticity Shift:</span>
                        <span className="font-semibold text-[#2a434a]">
                          ΔE = {currentSample.deltaE}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Panel 2: Nail Bed ROI */}
                  <div className="border border-[#e6e4df] bg-[#fbfbfa] p-3.5 flex flex-col justify-between">
                    <div>
                      <div className="font-mono text-[10px] text-[#8c8d91] tracking-[0.06em] uppercase mb-2">
                        REGION OF INTEREST 02: NAIL BED
                      </div>
                      {/* SVG Schematic of Nail Bed */}
                      <div className="w-full h-32 bg-[#f6f5f2] border border-[#eceae5] flex items-center justify-center relative overflow-hidden mb-3">
                        <svg className="w-full h-full" viewBox="0 0 160 120">
                          <rect width="160" height="120" fill="url(#grid)" />

                          {/* Finger outline */}
                          <path
                            d="M 30 110 L 30 50 C 30 25 130 25 130 50 L 130 110"
                            fill="#fcfbf8"
                            stroke="#52545a"
                            strokeWidth="1.2"
                          />
                          {/* Nail Plate */}
                          <path
                            d="M 45 60 C 45 35 115 35 115 60 L 115 95 C 115 100 45 100 45 95 Z"
                            fill={activeSample === 'sampleA' ? '#f4ece8' : '#fad5cb'}
                            stroke="#52545a"
                            strokeWidth="1"
                          />
                          {/* Lunula arc */}
                          <path
                            d="M 58 95 C 58 84 102 84 102 95 Z"
                            fill="#ffffff"
                            stroke="#8c8d91"
                            strokeWidth="0.75"
                          />

                          {/* Inspection Box Reticle */}
                          <rect
                            x="62"
                            y="54"
                            width="36"
                            height="24"
                            fill="none"
                            stroke="#2a434a"
                            strokeWidth="1"
                            strokeDasharray="2 2"
                          />
                          <circle cx="80" cy="66" r="2" fill="#2a434a" />
                          <text x="63" y="48" fontSize="7" fill="#8c8d91" fontFamily="JetBrains Mono">
                            VASCULAR_BED
                          </text>
                        </svg>
                      </div>
                    </div>

                    <div className="space-y-1 font-mono text-[11px] tabular-numbers border-t border-[#eceae5] pt-2">
                      <div className="flex justify-between text-[#52545a]">
                        <span className="text-[#8c8d91]">Erythema:</span>
                        <span className="font-semibold">{currentSample.erythema}</span>
                      </div>
                      <div className="flex justify-between text-[#52545a]">
                        <span className="text-[#8c8d91]">Pallor Coefficient:</span>
                        <span
                          className={`font-semibold ${
                            activeSample === 'sampleA' ? 'text-[#ba1a1a]' : 'text-[#2a434a]'
                          }`}
                        >
                          {currentSample.pallor}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Model Note */}
                <div className="flex flex-wrap items-center justify-between text-[10px] font-mono pt-3 border-t border-[#e6e4df] text-[#8c8d91]">
                  <div className="flex items-center gap-1.5 text-[#52545a]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2a434a]" />
                    <span>Model: Convolutional Color-Feature Extractor</span>
                  </div>
                  <span className="tracking-[0.08em] font-medium text-[#121314]">
                    TENSORFLOW / OPENCV CONCEPT
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* TWO-COLUMN SUB-PROJECTS GRID: DOSSIERS 02 & 03 */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Smart Door Lock System */}
          <div className="border border-[#e6e4df] bg-[#fbfbfa] p-6 sm:p-7 flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.08em] uppercase text-[#8c8d91] pb-4 mb-4 border-b border-[#eceae5]">
                <span>{SECONDARY_DOSSIERS[0].dossierNumber}</span>
                <span className="text-[#121314] font-medium">{SECONDARY_DOSSIERS[0].badge}</span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-[24px] sm:text-[28px] text-[#121314] font-normal leading-tight mb-3">
                {SECONDARY_DOSSIERS[0].title}
              </h3>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {SECONDARY_DOSSIERS[0].tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] px-2 py-0.5 border border-[#e6e4df] bg-[#fbfbfa] text-[#52545a]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="font-sans text-[14px] leading-[1.65] text-[#52545a] mb-6">
                {SECONDARY_DOSSIERS[0].summary}
              </p>

              {/* Hardware Schematic Interface Box */}
              <div className="border border-[#e6e4df] bg-[#f6f5f2] p-4 mb-6">
                <div className="flex items-center justify-between font-mono text-[9px] tracking-[0.08em] text-[#8c8d91] uppercase pb-2 mb-3 border-b border-[#e6e4df]">
                  <span>HARDWARE SCHEMATIC INTERFACE</span>
                  <span className="text-[#9e7b4f] font-semibold">5V DC BUS</span>
                </div>

                {/* Circuit Flow Blocks */}
                <div className="grid grid-cols-4 gap-2 text-center font-mono">
                  <div className="bg-[#fbfbfa] border border-[#e6e4df] p-2">
                    <div className="text-[8px] text-[#8c8d91] uppercase">KEYPAD</div>
                    <div className="text-[10px] font-semibold text-[#121314]">4x4 MATRIX</div>
                  </div>
                  <div className="bg-[#fbfbfa] border border-[#e6e4df] p-2">
                    <div className="text-[8px] text-[#8c8d91] uppercase">MCU</div>
                    <div className="text-[10px] font-semibold text-[#2a434a]">ATmega328P</div>
                  </div>
                  <div className="bg-[#fbfbfa] border border-[#e6e4df] p-2">
                    <div className="text-[8px] text-[#8c8d91] uppercase">ACTUATOR</div>
                    <div className="text-[10px] font-semibold text-[#121314]">SERVO 180°</div>
                  </div>
                  <button
                    onClick={handleSimulateLockToggle}
                    className={`border p-2 cursor-pointer transition-colors ${
                      lockState === 'LOCKED'
                        ? 'bg-[#121314] text-[#fbfbfa] border-[#121314]'
                        : 'bg-[#2a434a] text-[#fbfbfa] border-[#2a434a]'
                    }`}
                  >
                    <div className="text-[8px] text-white/70 uppercase">STATE</div>
                    <div className="text-[10px] font-bold flex items-center justify-center gap-1">
                      {lockState === 'LOCKED' ? (
                        <>
                          <Lock className="w-2.5 h-2.5" /> LOCKED
                        </>
                      ) : (
                        <>
                          <Unlock className="w-2.5 h-2.5" /> OPEN
                        </>
                      )}
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="flex items-center justify-between pt-4 border-t border-[#eceae5]">
              <button
                onClick={() => onSelectProject(SECONDARY_DOSSIERS[0])}
                className="font-mono text-[11px] tracking-[0.08em] uppercase text-[#121314] hover:text-[#2a434a] font-medium flex items-center gap-2 cursor-pointer group"
              >
                <span>{SECONDARY_DOSSIERS[0].actionLabel}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
              <span className="font-mono text-[10px] tracking-[0.08em] text-[#8c8d91] uppercase">
                {SECONDARY_DOSSIERS[0].statusLabel}
              </span>
            </div>
          </div>

          {/* Card 2: GitHub Portfolio & Index */}
          <div className="border border-[#e6e4df] bg-[#fbfbfa] p-6 sm:p-7 flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.08em] uppercase text-[#8c8d91] pb-4 mb-4 border-b border-[#eceae5]">
                <span>{SECONDARY_DOSSIERS[1].dossierNumber}</span>
                <span className="text-[#121314] font-medium">{SECONDARY_DOSSIERS[1].badge}</span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-[24px] sm:text-[28px] text-[#121314] font-normal leading-tight mb-3">
                {SECONDARY_DOSSIERS[1].title}
              </h3>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {SECONDARY_DOSSIERS[1].tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] px-2 py-0.5 border border-[#e6e4df] bg-[#fbfbfa] text-[#52545a]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="font-sans text-[14px] leading-[1.65] text-[#52545a] mb-6">
                {SECONDARY_DOSSIERS[1].summary}
              </p>

              {/* Code Snippet Box */}
              <div className="border border-[#e6e4df] bg-[#f6f5f2] p-4 mb-6">
                <div className="flex items-center justify-between font-mono text-[9px] tracking-[0.08em] text-[#8c8d91] uppercase pb-2 mb-3 border-b border-[#e6e4df]">
                  <span>INDEX.HTML / REPO DISPATCH</span>
                  <span className="text-[#2a434a] font-semibold">STATUS: PRODUCTION</span>
                </div>

                <pre className="font-mono text-[11px] leading-[1.7] text-[#121314] overflow-x-auto">
                  <code>
                    <span className="text-[#2a434a] font-semibold">const</span> scholar = &#123;
                    name: <span className="text-[#9e7b4f]">"Ardra Sobharaj"</span>, focus:{' '}
                    <span className="text-[#9e7b4f]">"AI/DS"</span> &#125;;
                    <br />
                    <span className="text-[#2a434a] font-semibold">export default</span>{' '}
                    renderDossiers(scholar);
                  </code>
                </pre>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="flex items-center justify-between pt-4 border-t border-[#eceae5]">
              <button
                onClick={() => onSelectProject(SECONDARY_DOSSIERS[1])}
                className="font-mono text-[11px] tracking-[0.08em] uppercase text-[#121314] hover:text-[#2a434a] font-medium flex items-center gap-2 cursor-pointer group"
              >
                <span>{SECONDARY_DOSSIERS[1].actionLabel}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
              <span className="font-mono text-[10px] tracking-[0.08em] text-[#8c8d91] uppercase">
                {SECONDARY_DOSSIERS[1].statusLabel}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
