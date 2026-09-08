/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { JourneySection } from './components/JourneySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ConnectModal } from './components/ConnectModal';
import { ProjectDossier } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectDossier | null>(null);
  const [connectModalOpen, setConnectModalOpen] = useState(false);

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
        setConnectModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fbfbfa] text-[#121314] font-sans antialiased selection:bg-[#2a434a] selection:text-[#fbfbfa]">
      {/* Editorial Navigation */}
      <Navbar onOpenConnect={() => setConnectModalOpen(true)} />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* Hero Section */}
        <HeroSection
          onScrollToProjects={() => scrollToSection('projects')}
          onScrollToContact={() => scrollToSection('contact')}
        />

        {/* 01 / ABOUT Section */}
        <AboutSection />

        {/* 02 / SELECTED WORK Section */}
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* 03 / SKILLS Section */}
        <SkillsSection />

        {/* 04 / JOURNEY Section */}
        <JourneySection />

        {/* 05 / CONTACT Section */}
        <ContactSection />
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* Modals & Overlays */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ConnectModal
        isOpen={connectModalOpen}
        onClose={() => setConnectModalOpen(false)}
      />
    </div>
  );
}
