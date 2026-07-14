import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Loader2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Notification from '../components/Notification';
import {
  profile,
  skills,
  experience,
  education,
  awards,
} from '../data/profile';

const ResumePage = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const response = await fetch('/cv.pdf');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Savindu_Thathsara_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  const allSkills = [
    ...skills.aiAutomation,
    ...skills.cloud,
    ...skills.web,
    ...skills.platforms,
  ];

  return (
    <>
      <SEO
        title="Resume"
        description={`Download ${profile.name}'s resume — AI & automation, AWS, and web systems. ${profile.yearsExperience} years experience. Based in London.`}
        keywords={['Resume', 'CV', 'AI Automation', 'London']}
      />

      <Notification
        isOpen={showNotification}
        onClose={() => setShowNotification(false)}
        message="Resume downloaded — thank you for your interest."
      />

      <div className="page-shell">
        <section className="section-pad border-b border-border">
          <div className="container-narrow max-w-3xl text-center mx-auto">
            <p className="eyebrow mb-4">Resume</p>
            <h1 className="display-title text-4xl sm:text-5xl md:text-6xl mb-6">
              {profile.name}
            </h1>
            <p className="body-lg mb-10">{profile.headline}</p>
            <button
              type="button"
              onClick={handleDownload}
              disabled={isDownloading}
              className="btn-primary disabled:opacity-50"
            >
              {isDownloading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <Download className="w-5 h-5" />
                  Download PDF
                </>
              )}
            </button>
          </div>
        </section>

        <section className="section-pad border-b border-border bg-surface-raised">
          <div className="container-narrow grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'Experience', value: `${profile.yearsExperience} years` },
              { label: 'Location', value: 'London, UK' },
              { label: 'Focus', value: 'AI & automation' },
              { label: 'Study', value: 'Computing + AI' },
            ].map((item) => (
              <div key={item.label}>
                <p className="font-sans text-xs uppercase tracking-wider text-ink-muted mb-2">
                  {item.label}
                </p>
                <p className="font-display text-2xl text-ink">{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section-pad border-b border-border">
          <div className="container-narrow">
            <h2 className="section-title mb-10">Experience snapshot</h2>
            <div className="divide-y divide-border border-y border-border">
              {experience.slice(0, 5).map((role) => (
                <div
                  key={role.id}
                  className="py-5 grid sm:grid-cols-12 gap-2 sm:gap-6"
                >
                  <p className="sm:col-span-3 font-sans text-sm text-ink-muted">
                    {role.period}
                  </p>
                  <div className="sm:col-span-9">
                    <p className="font-display text-xl text-ink">{role.role}</p>
                    <p className="font-sans text-sm text-ink-soft">{role.company}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/about#experience" className="btn-ghost mt-8 inline-flex group">
              Full timeline
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        <section className="section-pad border-b border-border">
          <div className="container-narrow grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="section-title mb-6">Education</h2>
              {education.map((ed) => (
                <div key={ed.id} className="mb-5">
                  <p className="font-display text-lg text-ink">{ed.title}</p>
                  <p className="font-sans text-sm text-ink-soft">
                    {ed.school} · {ed.period}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <h2 className="section-title mb-6">Awards</h2>
              {awards.map((a) => (
                <div key={a.id} className="mb-5">
                  <p className="font-display text-lg text-ink">{a.title}</p>
                  <p className="font-sans text-sm text-ink-soft">
                    {a.org} · {a.year}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="container-narrow">
            <h2 className="section-title mb-8">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {allSkills.map((skill) => (
                <span key={skill} className="skill-chip">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ResumePage;
