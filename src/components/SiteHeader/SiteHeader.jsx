import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { profile } from '../../data/profile';

const navItems = [
  { label: 'Work', path: '/projects' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

const routePrefetchers = {
  '/projects': () => import('../../pages/ProjectsPage'),
  '/about': () => import('../../pages/AboutPage'),
  '/contact': () => import('../../pages/ContactPage'),
  '/resume': () => import('../../pages/ResumePage'),
};

const warmRoute = (path) => {
  const key = path.split('#')[0];
  routePrefetchers[key]?.();
};

const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const linkClass = ({ isActive }) =>
    `font-sans text-sm tracking-wide transition-colors duration-200 ${
      isActive ? 'text-accent' : 'text-ink-soft hover:text-ink'
    }`;

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-3 sm:px-4 pt-3">
      <div className="container-wide mx-auto">
        <div className="flex items-center justify-between h-14 sm:h-16 px-4 sm:px-5 rounded-full border border-border bg-surface/70 backdrop-blur-xl shadow-soft">
          <Link
            to="/"
            className="font-display text-lg sm:text-xl font-semibold tracking-tight text-ink hover:text-accent transition-colors"
            onClick={() => setOpen(false)}
          >
            {profile.firstName}
            <span className="text-accent">_</span>
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={linkClass}
                onMouseEnter={() => warmRoute(item.path)}
                onFocus={() => warmRoute(item.path)}
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/about#experience"
              onMouseEnter={() => warmRoute('/about')}
              onFocus={() => warmRoute('/about')}
              className={`font-sans text-sm tracking-wide ${
                location.pathname === '/about' ? 'text-accent' : 'text-ink-soft hover:text-ink'
              }`}
            >
              Experience
            </Link>
            <Link
              to="/resume"
              onMouseEnter={() => warmRoute('/resume')}
              onFocus={() => warmRoute('/resume')}
              className="btn-primary text-sm px-4 py-2"
            >
              Resume
            </Link>
          </nav>

          <button
            type="button"
            className="md:hidden p-2 text-ink rounded-full hover:bg-white/5"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {open && (
          <nav className="md:hidden mt-2 rounded-3xl border border-border bg-surface-raised/95 backdrop-blur-xl p-3 page-enter">
            <div className="flex flex-col gap-1">
              {[...navItems, { label: 'Experience', path: '/about#experience' }, { label: 'Resume', path: '/resume' }].map(
                (item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    onTouchStart={() => warmRoute(item.path)}
                    className="py-3 px-3 rounded-2xl font-sans text-base text-ink-soft hover:text-ink hover:bg-white/5"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default SiteHeader;
