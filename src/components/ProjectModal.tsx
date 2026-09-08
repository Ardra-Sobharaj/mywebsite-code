import React from 'react';
import { X, ExternalLink, GitBranch, Cpu, Code2, Layers, CheckCircle2 } from 'lucide-react';
import { ProjectDossier } from '../types';

interface ProjectModalProps {
  project: ProjectDossier | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#121314]/40 backdrop-blur-xs">
      <div
        className="bg-[#fbfbfa] border border-[#e6e4df] w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#e6e4df] bg-[#f6f5f2] sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#121314]" />
            <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-[#52545a] font-medium">
              {project.dossierNumber}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#52545a] hover:text-[#121314] hover:bg-[#eceae5] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-8">
          <div>
            <div className="flex items-center justify-between gap-4 mb-2">
              <span className="font-mono text-[11px] text-[#9e7b4f] font-semibold tracking-[0.06em]">
                {project.badge || project.category}
              </span>
              <span className="font-mono text-[11px] text-[#8c8d91]">YEAR // {project.year}</span>
            </div>
            <h3 className="font-serif text-[32px] sm:text-[38px] text-[#121314] font-normal leading-tight">
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] px-2 py-0.5 border border-[#e6e4df] bg-[#fbfbfa] text-[#52545a]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-b border-[#eceae5] py-5">
            <h4 className="font-mono text-[11px] tracking-[0.08em] text-[#8c8d91] uppercase mb-2 font-medium">
              SYSTEM ABSTRACT & METHODOLOGY
            </h4>
            <p className="font-sans text-[15px] leading-[1.75] text-[#52545a]">
              {project.summary}
            </p>
          </div>

          {/* Dossier Specific Deep-Dive */}
          {project.id === 'anemia-detector' && (
            <div className="space-y-4">
              <h4 className="font-mono text-[11px] tracking-[0.08em] text-[#8c8d91] uppercase font-medium">
                ALGORITHMIC FORMULATION & COLOR SPACE EXTRACTION
              </h4>
              <div className="bg-[#f6f5f2] border border-[#e6e4df] p-4 text-[13px] font-sans space-y-3 text-[#52545a]">
                <p>
                  1. <strong className="text-[#121314]">Region of Interest (ROI) Masking:</strong>{' '}
                  Utilizes OpenCV Haar-cascade and landmark boundary coordinates to eliminate pupillary
                  and iris artifacts, isolating pristine scleral microvasculature.
                </p>
                <p>
                  2. <strong className="text-[#121314]">Color Space Normalization:</strong> Raw RGB
                  matrices undergo chromatic adaptation transforms to CIELAB, evaluating Euclidean
                  perceptual divergence (ΔE*ab) against clinically established hemoglobin thresholds.
                </p>
                <p>
                  3. <strong className="text-[#121314]">Vascular Bed Pallor Analysis:</strong> Computes
                  erythema indices (EI) across capillary clusters to calculate early probability scores
                  for proactive medical referral.
                </p>
              </div>
            </div>
          )}

          {project.id === 'smart-door-lock' && (
            <div className="space-y-4">
              <h4 className="font-mono text-[11px] tracking-[0.08em] text-[#8c8d91] uppercase font-medium">
                EMBEDDED HARDWARE INTERFACING & FIRMWARE ROUTINES
              </h4>
              <div className="bg-[#f6f5f2] border border-[#e6e4df] p-4 text-[13px] font-sans space-y-3 text-[#52545a]">
                <p>
                  1. <strong className="text-[#121314]">Hardware Architecture:</strong> Custom ATmega328P
                  circuitry coupled with 4x4 matrix scanning, hardware debouncing circuits, and
                  isolated 5V servo power rail to isolate inductive motor noise.
                </p>
                <p>
                  2. <strong className="text-[#121314]">Fail-Safe Security:</strong> Implements 3-tier
                  invalid password lockouts with timed buzzer alert triggers and EEPROM master code
                  recovery.
                </p>
              </div>
            </div>
          )}

          {project.id === 'github-portfolio' && (
            <div className="space-y-4">
              <h4 className="font-mono text-[11px] tracking-[0.08em] text-[#8c8d91] uppercase font-medium">
                ARCHITECTURAL METRICS & PERFORMANCE DISCIPLINE
              </h4>
              <div className="bg-[#f6f5f2] border border-[#e6e4df] p-4 text-[13px] font-sans space-y-3 text-[#52545a]">
                <p>
                  1. <strong className="text-[#121314]">Zero-Runtime Overhead:</strong> Engineered with
                  semantic HTML5 and CSS tokens with 100/100 Lighthouse performance metrics.
                </p>
                <p>
                  2. <strong className="text-[#121314]">Archival Typography:</strong> Implements
                  optical-grade serif pairing with monospaced tabular metrics to evoke traditional
                  printed monographs.
                </p>
              </div>
            </div>
          )}

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#eceae5]">
            <a
              href={project.actionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#121314] hover:bg-[#2a434a] text-[#fbfbfa] px-6 py-3 font-mono text-[11px] tracking-[0.08em] uppercase font-medium transition-colors"
            >
              <span>ACCESS CODEBASE ARCHIVE</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 font-mono text-[11px] tracking-[0.08em] uppercase text-[#52545a] hover:text-[#121314] cursor-pointer"
            >
              CLOSE DOSSIER [ESC]
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
