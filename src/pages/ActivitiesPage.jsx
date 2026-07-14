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
              <article key={award.id} className="py-8 sm:py-10 grid sm:grid-cols-12 gap-4">
                <div className="sm:col-span-2">
                  <p className="font-sans text-sm text-ink-muted">{award.year}</p>
                </div>
                <div className="sm:col-span-10">
                  <h2 className="font-display text-2xl sm:text-3xl text-ink mb-2">
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
