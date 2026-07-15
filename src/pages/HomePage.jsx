import React, { lazy, Suspense } from 'react';
import { ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Marquee from '../components/Marquee';
import profileImage from '../assets/savindu-experience.webp';
import leadAutomationImg from '../assets/projects/lead-automation.webp';
import farmsenseImg from '../assets/projects/farmsense-ai.webp';
import buyrocellImg from '../assets/projects/buyrocell.webp';
import {
  profile,
  skills,
  experience,
  education,
  awards,
  featuredWork,
} from '../data/profile';

const SignalField = lazy(() => import('../components/SignalField'));

const workImages = {
  'lead-automation': leadAutomationImg,
  'farmsense-ai': farmsenseImg,
  buyrocell: buyrocellImg,
};

const HomePage = () => {
  const recentRoles = experience.slice(0, 3);
  const marqueeItems = [
    ...skills.aiAutomation,
    ...skills.cloud.slice(0, 4),
    ...skills.web.slice(0, 4),
  ];

  return (
    <>
      <SEO
        title="AI & Automation Engineer"
        description={profile.shortBio}
        keywords={[
          'AI Automation Engineer London',
          'Process Automation',
          'AWS Automation',
          'FarmSense AI',
          'Northumbria University AI',
        ]}
      />

      <div className="page-shell">
        {/* Full-bleed kinetic hero */}
        <section className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden">
          <div className="absolute inset-0 bg-surface">
            <div className="absolute inset-0 grid-fade opacity-30 md:opacity-60" />
            <Suspense fallback={null}>
              <SignalField />
            </Suspense>
            {/* Mobile: heavy bottom veil so content stays crisp; desktop keeps side fade */}
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/90 to-surface/40 md:via-surface/50 md:to-transparent" />
            <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-surface/85 via-surface/35 to-transparent" />
          </div>

          <div className="relative z-10 container-wide px-4 sm:px-6 lg:px-8 pb-14 sm:pb-20 pt-28">
            <div className="max-w-4xl page-enter">
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 mb-7">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                  {profile.location}
                </span>
              </div>

              <h1 className="display-title mb-5">
                <span className="block">{profile.firstName}</span>
                <span className="block text-ink-soft">
                  Thathsara
                  <span className="text-accent">_</span>
                </span>
              </h1>

              <p className="font-display text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-ink mb-5 max-w-2xl">
                {profile.headline}
              </p>

              <p className="body-lg max-w-xl mb-9">
                {profile.shortBio}
              </p>

              <div className="flex flex-wrap gap-3">
                <Link to="/projects" className="btn-primary">
                  Explore work
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a href={profile.links.resume} download className="btn-secondary">
                  Resume PDF
                </a>
              </div>
            </div>
          </div>
        </section>

        <Marquee items={marqueeItems} />

        {/* Bento work */}
        <section className="section-pad">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 sm:mb-14">
              <div>
                <p className="eyebrow mb-3">Selected systems</p>
                <h2 className="section-title max-w-xl">
                  Built to remove friction
                </h2>
              </div>
              <Link to="/projects" className="btn-ghost group">
                All projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-6 gap-4 sm:gap-5 auto-rows-[minmax(180px,auto)]">
              {featuredWork.map((work, i) => {
                const span =
                  i === 0
                    ? 'md:col-span-4 md:row-span-2'
                    : i === 1
                      ? 'md:col-span-2'
                      : i === 2
                        ? 'md:col-span-2'
                        : 'md:col-span-6';
                const img = work.image ? workImages[work.image] : null;
                const external = work.liveUrl || work.githubUrl;

                return (
                  <article
                    key={work.id}
                    className={`bento-cell group p-0 overflow-hidden flex flex-col justify-between min-h-[200px] ${span}`}
                  >
                    {img && (
                      <div
                        className={`relative overflow-hidden ${
                          i === 0 ? 'h-44 sm:h-56 md:h-64' : 'h-28 sm:h-32'
                        }`}
                      >
                        <img
                          src={img}
                          alt=""
                          loading="lazy"
                          decoding="async"
                          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
                      </div>
                    )}
                    <div className="relative flex flex-1 flex-col justify-between p-6 sm:p-7">
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_30%_20%,rgba(200,245,66,0.12),transparent_55%)] pointer-events-none" />
                      <div className="relative">
                        <div className="flex items-center justify-between gap-3 mb-4">
                          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                            {work.category}
                          </span>
                          {external && (
                            <a
                              href={external}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-ink-muted hover:text-accent"
                              aria-label={`Open ${work.title}`}
                            >
                              <ArrowUpRight className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                        <h3
                          className={`font-display font-semibold tracking-tight text-ink mb-3 ${
                            i === 0 ? 'text-3xl sm:text-4xl md:text-5xl' : 'text-2xl sm:text-3xl'
                          }`}
                        >
                          {work.title}
                        </h3>
                        <p className="body-lg text-sm sm:text-base max-w-xl">
                          {work.description}
                        </p>
                      </div>
                      <div className="relative mt-6 flex flex-wrap items-center gap-2 justify-between">
                        <p className="font-mono text-xs text-accent/90">{work.outcome}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {work.tech.slice(0, 3).map((t) => (
                            <span
                              key={t}
                              className="rounded-full border border-border px-2 py-0.5 text-[11px] text-ink-muted"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Experience + portrait split */}
        <section className="section-pad pt-0">
          <div className="container-wide grid lg:grid-cols-12 gap-5">
            <div className="lg:col-span-5 bento-cell overflow-hidden min-h-[420px] relative">
              <img
                src={profileImage}
                alt={profile.name}
                width={1200}
                height={1500}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <p className="eyebrow mb-2">Profile</p>
                <p className="font-display text-3xl font-semibold tracking-tight">
                  {profile.yearsExperience} years shipping
                </p>
                <p className="body-lg text-sm mt-2 max-w-sm">
                  From Associate Lead at Enfection to IT ops &amp; automation at Asahi Motors London.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 bento-cell p-6 sm:p-8">
              <div className="flex items-end justify-between gap-4 mb-8">
                <div>
                  <p className="eyebrow mb-2">Experience</p>
                  <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
                    Recent signal
                  </h2>
                </div>
                <Link to="/about#experience" className="btn-ghost text-xs sm:text-sm">
                  Full timeline
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="space-y-0 divide-y divide-border">
                {recentRoles.map((role) => (
                  <div key={role.id} className="py-5 first:pt-0 last:pb-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <p className="font-mono text-[11px] text-ink-muted uppercase tracking-wider">
                        {role.period}
                      </p>
                      {role.current && (
                        <span className="rounded-full bg-accent/15 text-accent px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider">
                          Now
                        </span>
                      )}
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl font-semibold tracking-tight">
                      {role.role}
                    </h3>
                    <p className="font-sans text-sm text-ink-soft mt-1 mb-2">
                      {role.company} · {role.location}
                    </p>
                    <p className="body-lg text-sm max-w-2xl">{role.summary}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Capability mosaic */}
        <section className="section-pad pt-0">
          <div className="container-wide">
            <p className="eyebrow mb-3">Stack</p>
            <h2 className="section-title mb-10 max-w-2xl">
              AI first.
              <span className="text-ink-muted"> Then cloud. Then the interface.</span>
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'AI & automation', items: skills.aiAutomation, accent: true },
                { title: 'Cloud & delivery', items: skills.cloud, accent: true },
                { title: 'Web systems', items: skills.web, accent: false },
                { title: 'Platforms', items: skills.platforms, accent: false },
              ].map((col) => (
                <div
                  key={col.title}
                  className={`bento-cell p-5 sm:p-6 ${col.accent ? 'bg-accent/[0.04]' : ''}`}
                >
                  <div className="flex items-center gap-2 mb-4">
                    {col.accent && <Sparkles className="w-3.5 h-3.5 text-accent" />}
                    <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                      {col.title}
                    </h3>
                  </div>
                  <ul className="space-y-2.5">
                    {col.items.map((item) => (
                      <li key={item} className="font-sans text-sm text-ink-soft">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education + awards as signal strip */}
        <section className="section-pad pt-0">
          <div className="container-wide grid lg:grid-cols-2 gap-4">
            <div className="bento-cell p-6 sm:p-8 bg-surface-light text-ink-dark">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#4a6410] mb-3">
                Education
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-8 text-ink-dark">
                Learning AI in London
              </h2>
              <div className="space-y-5">
                {education.map((ed) => (
                  <div key={ed.id} className="border-l-2 border-accent pl-4">
                    <p className="font-mono text-[11px] text-ink-dark/80">{ed.period}</p>
                    <h3 className="font-display text-lg font-semibold mt-1 text-ink-dark">
                      {ed.title}
                    </h3>
                    <p className="font-sans text-sm text-ink-dark/75 mt-1">
                      {ed.school}
                    </p>
                    {ed.note && (
                      <p className="font-mono text-[11px] text-ink-dark/70 mt-1">{ed.note}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bento-cell p-6 sm:p-8">
              <p className="eyebrow mb-3">Recognition</p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-8">
                Awards that stuck
              </h2>
              <div className="space-y-5">
                {awards.map((award) => (
                  <div
                    key={award.id}
                    className={
                      award.highlight
                        ? 'rounded-2xl border border-accent/40 bg-accent/10 p-4 -mx-1'
                        : 'flex gap-4 items-start'
                    }
                  >
                    {award.highlight ? (
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="font-mono text-accent text-sm">{award.year}</span>
                          <span className="rounded-full bg-accent text-surface px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.16em] font-semibold">
                            1st place
                          </span>
                        </div>
                        <h3 className="font-display text-xl sm:text-2xl font-semibold tracking-tight text-ink">
                          {award.title}
                        </h3>
                        <p className="font-sans text-sm text-ink-soft mt-1">{award.org}</p>
                        {award.description && (
                          <p className="font-sans text-sm text-ink-muted mt-2">
                            {award.description}
                          </p>
                        )}
                      </div>
                    ) : (
                      <>
                        <span className="font-mono text-accent text-sm shrink-0">
                          {award.year}
                        </span>
                        <div>
                          <h3 className="font-display text-lg font-semibold">{award.title}</h3>
                          <p className="font-sans text-sm text-ink-soft mt-1">{award.org}</p>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA band */}
        <section className="section-pad pt-0 pb-24">
          <div className="container-wide">
            <div className="relative overflow-hidden rounded-[2rem] border border-accent/25 bg-accent/[0.07] px-6 py-14 sm:px-12 sm:py-20 text-center">
              <div className="absolute inset-0 grid-fade opacity-40" />
              <div className="relative">
                <p className="eyebrow mb-4">{profile.tagline}</p>
                <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-5">
                  Let’s automate the boring.
                  <br />
                  <span className="text-accent">Keep the craft.</span>
                </h2>
                <p className="body-lg max-w-xl mx-auto mb-9">
                  Exploring AI automation, workflow systems, and interfaces —
                  happy to talk about projects or collaboration.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Link to="/contact" className="btn-primary">
                    Start a conversation
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href={profile.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
