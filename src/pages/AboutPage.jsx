import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import profileImage from '../assets/savindu-thathsara.webp';
import SEO from '../components/SEO';
import {
  profile,
  experience,
  education,
  awards,
  certifications,
  skills,
} from '../data/profile';

const AboutPage = () => {
  return (
    <>
      <SEO
        title="About"
        description={profile.about}
        keywords={['About', 'London', 'AI student', 'Northumbria', 'UI UX']}
      />

      <div className="page-shell">
        <section className="section-pad">
          <div className="container-wide grid lg:grid-cols-12 gap-5 items-stretch">
            <motion.div
              initial={{ opacity: 1, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-5 bento-cell overflow-hidden min-h-[420px] relative"
            >
              <img
                src={profileImage}
                alt={profile.name}
                width={900}
                height={1125}
                fetchpriority="high"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 1, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="lg:col-span-7 bento-cell p-6 sm:p-8 lg:p-10 flex flex-col justify-center"
            >
              <p className="eyebrow mb-4">About</p>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-5">
                Not a template person.
                <span className="text-accent">_</span>
              </h1>
              <p className="body-lg max-w-2xl mb-8">{profile.about}</p>

              <div className="flex flex-wrap gap-3 mb-10">
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
                <a href={profile.links.email} className="btn-secondary">
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              </div>

              <div className="grid grid-cols-3 gap-4 border-t border-border pt-8">
                {[
                  { value: profile.yearsExperience, label: 'Years building' },
                  { value: 'London', label: 'Based in UK' },
                  { value: 'AI', label: 'Northumbria' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-2xl sm:text-3xl font-semibold text-accent">
                      {stat.value}
                    </p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="section-pad pt-0">
          <div className="container-wide">
            <p className="eyebrow mb-3">Focus</p>
            <h2 className="section-title mb-8 max-w-xl">Where systems meet taste</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  title: 'Practical automation',
                  body: 'Make.com workflows, React + Supabase ops tools, and AI-assisted lead handling — shipping real systems at Asahi Motors London.',
                },
                {
                  title: 'AI-aware engineering',
                  body: 'Studying Computing with AI while applying automation, Python, and OpenAI integrations to day-to-day business problems.',
                },
                {
                  title: 'Interface craft',
                  body: 'Years leading web delivery — I design interactions people feel, then ship them with AWS and CI/CD.',
                },
              ].map((item) => (
                <div key={item.title} className="bento-cell p-6">
                  <h3 className="font-display text-2xl font-semibold tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="body-lg text-sm">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section-pad pt-0 scroll-mt-28">
          <div className="container-wide">
            <p className="eyebrow mb-3">Experience</p>
            <h2 className="section-title mb-10">Career timeline</h2>
            <div className="bento-cell divide-y divide-border">
              {experience.map((role) => (
                <div
                  key={role.id}
                  className="p-5 sm:p-7 grid sm:grid-cols-12 gap-3 sm:gap-6"
                >
                  <div className="sm:col-span-3">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">
                      {role.period}
                    </p>
                    {role.current && (
                      <span className="mt-2 inline-block rounded-full bg-accent/15 text-accent px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider">
                        Now
                      </span>
                    )}
                  </div>
                  <div className="sm:col-span-9">
                    <h3 className="font-display text-xl sm:text-2xl font-semibold tracking-tight">
                      {role.role}
                    </h3>
                    <p className="font-sans text-sm text-ink-soft mt-1 mb-3">
                      {role.company} · {role.location}
                    </p>
                    <p className="body-lg text-sm max-w-2xl mb-3">{role.summary}</p>
                    {role.highlights && (
                      <ul className="space-y-1.5">
                        {role.highlights.map((h) => (
                          <li
                            key={h}
                            className="font-sans text-sm text-ink-soft pl-4 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent"
                          >
                            {h}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad pt-0">
          <div className="container-wide grid lg:grid-cols-2 gap-4">
            <div className="bento-cell p-6 sm:p-8">
              <p className="eyebrow mb-3">Education</p>
              <h2 className="font-display text-3xl font-semibold tracking-tight mb-8">
                Learning path
              </h2>
              <div className="space-y-6">
                {education.map((ed) => (
                  <div key={ed.id} className="border-l-2 border-accent/50 pl-4">
                    <p className="font-mono text-[11px] text-ink-muted">{ed.period}</p>
                    <h3 className="font-display text-lg font-semibold mt-1">{ed.title}</h3>
                    <p className="font-sans text-sm text-ink-soft mt-1">
                      {ed.school} · {ed.location}
                    </p>
                    {ed.note && (
                      <p className="font-mono text-[11px] text-ink-muted mt-1">{ed.note}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="bento-cell p-6 sm:p-8">
              <p className="eyebrow mb-3">Awards & certs</p>
              <h2 className="font-display text-3xl font-semibold tracking-tight mb-8">
                Recognition
              </h2>
              <div className="space-y-5 mb-8">
                {awards.map((a) => (
                  <div key={a.id}>
                    <p className="font-mono text-[11px] text-accent">{a.year}</p>
                    <h3 className="font-display text-lg font-semibold mt-1">{a.title}</h3>
                    <p className="font-sans text-sm text-ink-soft mt-1">{a.org}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {certifications.map((c) => (
                  <span key={c.title} className="skill-chip">
                    {c.org}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad pt-0">
          <div className="container-wide">
            <p className="eyebrow mb-3">Skills</p>
            <h2 className="section-title mb-8">Stack, ordered by focus</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                ['AI & automation', skills.aiAutomation],
                ['Cloud & delivery', skills.cloud],
                ['Web systems', skills.web],
                ['Platforms', skills.platforms],
              ].map(([label, list]) => (
                <div key={label} className="bento-cell p-5">
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent mb-3">
                    {label}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {list.map((s) => (
                      <span key={s} className="skill-chip">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad pt-0 text-center">
          <Link to="/resume" className="btn-primary">
            View resume
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
