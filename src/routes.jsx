import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import AppLayout from './layouts/AppLayout';
import ErrorBoundary from './components/ErrorBoundary';
import HomePage from './pages/HomePage';

// Non-critical routes stay lazy to keep first paint tiny
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const PlaygroundPage = lazy(() => import('./pages/PlaygroundPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const SingleBlogPage = lazy(() => import('./pages/SingleBlogPage'));
const ActivitiesPage = lazy(() => import('./pages/ActivitiesPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ResumePage = lazy(() => import('./pages/ResumePage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

const PageLoader = () => (
  <div className="min-h-[40vh] flex items-center justify-center" aria-hidden>
    <div className="h-8 w-8 rounded-full border-2 border-accent/30 border-t-accent animate-spin" />
  </div>
);

const Lazy = ({ children }) => (
  <Suspense fallback={<PageLoader />}>{children}</Suspense>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'about',
        element: (
          <Lazy>
            <AboutPage />
          </Lazy>
        ),
      },
      {
        path: 'projects',
        element: (
          <Lazy>
            <ProjectsPage />
          </Lazy>
        ),
      },
      {
        path: 'playground',
        element: (
          <Lazy>
            <PlaygroundPage />
          </Lazy>
        ),
      },
      {
        path: 'blog',
        element: (
          <Lazy>
            <BlogPage />
          </Lazy>
        ),
      },
      {
        path: 'blog/:slug',
        element: (
          <Lazy>
            <SingleBlogPage />
          </Lazy>
        ),
      },
      {
        path: 'activities',
        element: (
          <Lazy>
            <ActivitiesPage />
          </Lazy>
        ),
      },
      {
        path: 'contact',
        element: (
          <Lazy>
            <ContactPage />
          </Lazy>
        ),
      },
      {
        path: 'resume',
        element: (
          <Lazy>
            <ResumePage />
          </Lazy>
        ),
      },
      {
        path: '*',
        element: (
          <Lazy>
            <NotFoundPage />
          </Lazy>
        ),
      },
    ],
  },
]);

export default router;
