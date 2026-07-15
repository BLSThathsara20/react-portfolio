import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { awards, profile } from '../data/profile';

const ActivitiesPage = () => {
  return (
    <>
      <SEO
        title="Awards & Activities"
        description="Awards and recognition — Santander Career Support Award, LSEG hackathon win, NASA Space App Challenge nominee."
        keywords={['Awards', 'Hackathon', 'Santander', 'LSEG', 'NASA']}
      />

      <div className="page-shell">
        <section className="section-pad border-b border-border">
          <div className="container-narrow max-w-3xl">
            <p className="eyebrow mb-4">Recognition</p>
            <h1 className="display-title text-4xl sm:text-5xl md:text-6xl mb-6">
              Awards & activities
            </h1>
            <p className="body-lg">
              Highlights beyond day-to-day delivery — competitions, career awards, and
              community work that shape how I build.
            </p>
          </div>
        </section>

        <section className="section-pad">
          <div className="container-narrow divide-y divide-border border-y border-border">
            {awards.map((award) => (
              <article
                key={award.id}
                className={`py-8 sm:py-10 grid sm:grid-cols-12 gap-4 ${
                  award.highlight ? 'rounded-2xl border border-accent/35 bg-accent/[0.07] px-4 sm:px-6 my-2' : ''
                }`}
              >
                <div className="sm:col-span-2">
                  <p className="font-sans text-sm text-ink-muted">{award.year}</p>
                  {award.highlight && (
                    <span className="mt-2 inline-block rounded-full bg-accent text-surface px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] font-semibold">
                      1st place
                    </span>
                  )}
                </div>
                <div className="sm:col-span-10">
                  <h2
                    className={`font-display text-ink mb-2 ${
                      award.highlight ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'
                    }`}
                  >
                    {award.title}
                  </h2>
                  <p className="font-sans text-sm text-accent mb-3">{award.org}</p>
                  <p className="body-lg text-base max-w-2xl">{award.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="container-narrow mt-12 text-center">
            <p className="body-lg mb-6">
              Prefer the full story? See education and timeline on About.
            </p>
            <Link to="/about" className="btn-primary">
              About {profile.firstName}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default ActivitiesPage;
