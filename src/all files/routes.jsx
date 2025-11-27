import { createBrowserRouter } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import PlaygroundPage from './pages/PlaygroundPage';
import BlogPage from './pages/BlogPage';
import SingleBlogPage from './pages/SingleBlogPage';
import ContactPage from './pages/ContactPage';
import ResumePage from './pages/ResumePage';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'about',
        element: <AboutPage />
      },
      {
        path: 'projects',
        element: <ProjectsPage />
      },
      {
        path: 'playground',
        element: <PlaygroundPage />
      },
      {
        path: 'blog',
        element: <BlogPage />
      },
      {
        path: 'blog/:slug',
        element: <SingleBlogPage />
      },
      {
        path: 'contact',
        element: <ContactPage />
      },
      {
        path: 'resume',
        element: <ResumePage />
      },
      {
        path: '*',
        element: <NotFoundPage />
      }
    ]
  }
]);

export default router;