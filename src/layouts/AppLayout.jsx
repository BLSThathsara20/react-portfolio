import React, { useEffect } from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import { SpotlightProvider } from '../providers';
import SiteHeader from '../components/SiteHeader';
import PageTransition from '../components/PageTransition';
import { profile } from '../data/profile';

const AppLayout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (location.hash) {
      const id = location.hash.replace('#', '');
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      });
    }
  }, [location.pathname, location.hash]);

  return (
    <SpotlightProvider>
      <SiteHeader />
      <main className="min-h-[70vh] pt-4">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <footer className="border-t border-border bg-surface-deep relative overflow-hidden">
        <div className="absolute inset-0 grid-fade opacity-30" aria-hidden />
        <div className="relative container-wide px-4 sm:px-6 lg:px-8 py-14 sm:py-16 flex flex-col sm:flex-row gap-10 sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
              {profile.firstName}
              <span className="text-accent">_</span>
            </p>
            <p className="mt-3 font-sans text-sm text-ink-soft max-w-md">
              {profile.headline}
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 font-mono text-xs uppercase tracking-[0.16em] text-ink-muted">
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              GitHub
            </a>
            <Link to="/contact" className="hover:text-accent transition-colors">
              Contact
            </Link>
            <Link to="/blog" className="hover:text-accent transition-colors">
              Blog
            </Link>
            <Link to="/playground" className="hover:text-accent transition-colors">
              Playground
            </Link>
            <a
              href={profile.links.resume}
              download
              className="hover:text-accent transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
        <div className="relative container-wide px-4 sm:px-6 lg:px-8 pb-8">
          <p className="font-mono text-[11px] text-ink-faint uppercase tracking-[0.16em]">
            © {new Date().getFullYear()} {profile.name} · {profile.location}
          </p>
        </div>
      </footer>
    </SpotlightProvider>
  );
};

export default AppLayout;
