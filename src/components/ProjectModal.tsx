import React from 'react';
import { X, ExternalLink, CheckCircle2 } from 'lucide-react';
import { ProjectDossier } from '../types';

interface ProjectModalProps {
  project: ProjectDossier | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
}) => {
  if (!project) return null;

  const hasProjectLink = Boolean(project.actionUrl);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#121314]/40 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="bg-[#fbfbfa] border border-[#e6e4df] w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >

        {/* ============================================================ */}
        {/* HEADER */}
        {/* ============================================================ */}

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

        {/* ============================================================ */}
        {/* CONTENT */}
        {/* ============================================================ */}

        <div className="p-6 sm:p-8 space-y-8">

          {/* Project Heading */}
          <div>

            <div className="flex flex-wrap items-center justify-between gap-4 mb-2">

              <span className="font-mono text-[11px] text-[#9e7b4f] font-semibold tracking-[0.06em]">
                {project.badge || project.category}
              </span>

              {project.year && project.year !== '—' && (
                <span className="font-mono text-[11px] text-[#8c8d91]">
                  YEAR // {project.year}
                </span>
              )}

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

          {/* ============================================================ */}
          {/* PROJECT SUMMARY */}
          {/* ============================================================ */}

          <div className="border-t border-b border-[#eceae5] py-5">

            <h4 className="font-mono text-[11px] tracking-[0.08em] text-[#8c8d91] uppercase mb-2 font-medium">
              PROJECT OVERVIEW
            </h4>

            <p className="font-sans text-[15px] leading-[1.75] text-[#52545a]">
              {project.summary}
            </p>

          </div>

          {/* ============================================================ */}
          {/* ANEMIA DETECTOR */}
          {/* ============================================================ */}

          {project.id === 'anemia-detector' && (
            <div className="space-y-5">

              <h4 className="font-mono text-[11px] tracking-[0.08em] text-[#8c8d91] uppercase font-medium">
                SCREENING APPROACH
              </h4>

              <div className="bg-[#f6f5f2] border border-[#e6e4df] p-5 space-y-4">

                <div>
                  <div className="font-mono text-[10px] tracking-[0.06em] text-[#8c8d91] uppercase mb-1">
                    01 / IMAGE INPUT
                  </div>

                  <p className="font-sans text-[14px] leading-[1.65] text-[#52545a]">
                    The user provides images showing visual indicators such
                    as nail and eye pallor.
                  </p>
                </div>

                <div className="border-t border-[#e6e4df] pt-4">
                  <div className="font-mono text-[10px] tracking-[0.06em] text-[#8c8d91] uppercase mb-1">
                    02 / AI-BASED SCREENING
                  </div>

                  <p className="font-sans text-[14px] leading-[1.65] text-[#52545a]">
                    The project uses an AI-based approach to assess the
                    visual indicators and identify potential anemia risk.
                  </p>
                </div>

                <div className="border-t border-[#e6e4df] pt-4">
                  <div className="font-mono text-[10px] tracking-[0.06em] text-[#8c8d91] uppercase mb-1">
                    03 / GUIDANCE
                  </div>

                  <p className="font-sans text-[14px] leading-[1.65] text-[#52545a]">
                    When potential risk is indicated, the project recommends
                    consulting a doctor and can provide supportive reminders
                    such as staying hydrated and other general guidance.
                  </p>
                </div>

              </div>

              {/* Safety Note */}
              <div className="flex gap-3 border border-[#e6e4df] bg-[#fbfbfa] p-4">

                <CheckCircle2 className="w-4 h-4 text-[#2a434a] shrink-0 mt-0.5" />

                <div>
                  <div className="font-mono text-[10px] tracking-[0.06em] uppercase text-[#121314] mb-1">
                    IMPORTANT
                  </div>

                  <p className="font-sans text-[13px] leading-[1.6] text-[#52545a]">
                    This project is intended for potential-risk screening
                    and does not diagnose anemia. Medical evaluation should
                    be obtained from a qualified healthcare professional.
                  </p>
                </div>

              </div>

            </div>
          )}

          {/* ============================================================ */}
          {/* SMART DOOR LOCK */}
          {/* ============================================================ */}

          {project.id === 'smart-door-lock' && (
            <div className="space-y-5">

              <h4 className="font-mono text-[11px] tracking-[0.08em] text-[#8c8d91] uppercase font-medium">
                HARDWARE IMPLEMENTATION
              </h4>

              <div className="bg-[#f6f5f2] border border-[#e6e4df] p-5 space-y-4">

                <div>
                  <div className="font-mono text-[10px] tracking-[0.06em] text-[#8c8d91] uppercase mb-1">
                    01 / CONTROLLER
                  </div>

                  <p className="font-sans text-[14px] leading-[1.65] text-[#52545a]">
                    Arduino Uno serves as the main controller for the
                    password-based door locking system.
                  </p>
                </div>

                <div className="border-t border-[#e6e4df] pt-4">
                  <div className="font-mono text-[10px] tracking-[0.06em] text-[#8c8d91] uppercase mb-1">
                    02 / INPUT
                  </div>

                  <p className="font-sans text-[14px] leading-[1.65] text-[#52545a]">
                    A 4×4 matrix keypad is used to enter the password.
                  </p>
                </div>

                <div className="border-t border-[#e6e4df] pt-4">
                  <div className="font-mono text-[10px] tracking-[0.06em] text-[#8c8d91] uppercase mb-1">
                    03 / OUTPUT & CONTROL
                  </div>

                  <p className="font-sans text-[14px] leading-[1.65] text-[#52545a]">
                    A servo motor controls the locking mechanism, while a
                    16×2 LCD with I2C provides visual feedback and a 5V
                    active buzzer provides audio feedback.
                  </p>
                </div>

                <div className="border-t border-[#e6e4df] pt-4">
                  <div className="font-mono text-[10px] tracking-[0.06em] text-[#8c8d91] uppercase mb-1">
                    04 / PASSWORD RESPONSE
                  </div>

                  <p className="font-sans text-[14px] leading-[1.65] text-[#52545a]">
                    A correct password activates the servo to unlock the
                    system and provides a success indication. An incorrect
                    password produces an error indication with audio
                    feedback.
                  </p>
                </div>

              </div>

            </div>
          )}

          {/* ============================================================ */}
          {/* GITHUB PORTFOLIO */}
          {/* ============================================================ */}

          {project.id === 'github-portfolio' && (
            <div className="space-y-5">

              <h4 className="font-mono text-[11px] tracking-[0.08em] text-[#8c8d91] uppercase font-medium">
                PROJECT PURPOSE
              </h4>

              <div className="bg-[#f6f5f2] border border-[#e6e4df] p-5">

                <p className="font-sans text-[14px] leading-[1.7] text-[#52545a]">
                  This personal portfolio website is designed to showcase
                  my skills, projects, education, certifications, and
                  technical learning journey in one place.
                </p>

              </div>

            </div>
          )}

          {/* ============================================================ */}
          {/* 2D GRAPHICS EDITOR */}
          {/* ============================================================ */}

          {project.id === '2d-graphics' && (
            <div className="space-y-5">

              <h4 className="font-mono text-[11px] tracking-[0.08em] text-[#8c8d91] uppercase font-medium">
                PROJECT FEATURES
              </h4>

              <div className="bg-[#f6f5f2] border border-[#e6e4df] p-5 space-y-4">

                <div>
                  <div className="font-mono text-[10px] tracking-[0.06em] text-[#8c8d91] uppercase mb-1">
                    01 / 2D CANVAS
                  </div>

                  <p className="font-sans text-[14px] leading-[1.65] text-[#52545a]">
                    Provides a text-based 2D canvas for working with
                    geometric shapes.
                  </p>
                </div>

                <div className="border-t border-[#e6e4df] pt-4">
                  <div className="font-mono text-[10px] tracking-[0.06em] text-[#8c8d91] uppercase mb-1">
                    02 / GEOMETRIC SHAPES
                  </div>

                  <p className="font-sans text-[14px] leading-[1.65] text-[#52545a]">
                    Supports shapes including lines, rectangles, circles,
                    and triangles.
                  </p>
                </div>

                <div className="border-t border-[#e6e4df] pt-4">
                  <div className="font-mono text-[10px] tracking-[0.06em] text-[#8c8d91] uppercase mb-1">
                    03 / C PROGRAMMING
                  </div>

                  <p className="font-sans text-[14px] leading-[1.65] text-[#52545a]">
                    The project is implemented in C and focuses on
                    programming fundamentals and working with structured
                    graphical data.
                  </p>
                </div>

              </div>

            </div>
          )}

          {/* ============================================================ */}
          {/* SPECS */}
          {/* ============================================================ */}

          {project.specs && project.specs.length > 0 && (
            <div className="border-t border-b border-[#eceae5] py-3">

              <h4 className="font-mono text-[11px] tracking-[0.08em] text-[#8c8d91] uppercase mb-2 font-medium">
                PROJECT DETAILS
              </h4>

              <div className="divide-y divide-[#eceae5]">

                {project.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="py-2.5 flex justify-between gap-6 text-[13px]"
                  >
                    <span className="font-mono text-[11px] text-[#8c8d91]">
                      {spec.label}
                    </span>

                    <span className="font-sans text-[#121314] font-medium text-right">
                      {spec.value}
                    </span>
                  </div>
                ))}

              </div>
            </div>
          )}

          {/* ============================================================ */}
          {/* ACTION ROW */}
          {/* ============================================================ */}

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#eceae5]">

            {hasProjectLink ? (
              <a
                href={project.actionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#121314] hover:bg-[#2a434a] text-[#fbfbfa] px-6 py-3 font-mono text-[11px] tracking-[0.08em] uppercase font-medium transition-colors"
              >
                <span>VIEW PROJECT</span>

                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 border border-[#e6e4df] bg-[#f6f5f2] text-[#8c8d91] px-6 py-3 font-mono text-[11px] tracking-[0.08em] uppercase">
                {project.id === 'smart-door-lock'
                  ? 'HARDWARE PROTOTYPE'
                  : 'PROJECT INFORMATION'}
              </span>
            )}

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
