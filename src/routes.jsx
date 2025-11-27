import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import AppLayout from './layouts/AppLayout';
import ErrorBoundary from './components/ErrorBoundary';
import { SkeletonCard } from './components/Skeleton';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const PlaygroundPage = lazy(() => import('./pages/PlaygroundPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const SingleBlogPage = lazy(() => import('./pages/SingleBlogPage'));
const ActivitiesPage = lazy(() => import('./pages/ActivitiesPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ResumePage = lazy(() => import('./pages/ResumePage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center p-4">
    <div className="max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  </div>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<PageLoader />}>
            <HomePage />
          </Suspense>
        )
      },
      {
        path: 'about',
        element: (
          <Suspense fallback={<PageLoader />}>
            <AboutPage />
          </Suspense>
        )
      },
      {
        path: 'projects',
        element: (
          <Suspense fallback={<PageLoader />}>
            <ProjectsPage />
          </Suspense>
        )
      },
      {
        path: 'playground',
        element: (
          <Suspense fallback={<PageLoader />}>
            <PlaygroundPage />
          </Suspense>
        )
      },
      {
        path: 'blog',
        element: (
          <Suspense fallback={<PageLoader />}>
            <BlogPage />
          </Suspense>
        )
      },
      {
        path: 'blog/:slug',
        element: (
          <Suspense fallback={<PageLoader />}>
            <SingleBlogPage />
          </Suspense>
        )
      },
      {
        path: 'activities',
        element: (
          <Suspense fallback={<PageLoader />}>
            <ActivitiesPage />
          </Suspense>
        )
      },
      {
        path: 'contact',
        element: (
          <Suspense fallback={<PageLoader />}>
            <ContactPage />
          </Suspense>
        )
      },
      {
        path: 'resume',
        element: (
          <Suspense fallback={<PageLoader />}>
            <ResumePage />
          </Suspense>
        )
      },
      {
        path: '*',
        element: (
          <Suspense fallback={<PageLoader />}>
            <NotFoundPage />
          </Suspense>
        )
      }
    ]
  }
]);

export default router;