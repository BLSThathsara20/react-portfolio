import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import router from './routes';
import './styles/fonts.css';
import './index.css';

createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <RouterProvider router={router} />
  </HelmetProvider>
);

/** Umami — load after idle so it never competes with LCP / first paint */
const UMAMI_SRC = 'https://cloud.umami.is/script.js';
const UMAMI_WEBSITE_ID = '23c6e92f-b9ad-41a7-a7f1-8e8addafd734';

const loadUmami = () => {
  if (document.querySelector(`script[data-website-id="${UMAMI_WEBSITE_ID}"]`)) return;
  const script = document.createElement('script');
  script.defer = true;
  script.src = UMAMI_SRC;
  script.setAttribute('data-website-id', UMAMI_WEBSITE_ID);
  document.head.appendChild(script);
};

if (typeof window !== 'undefined') {
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(loadUmami, { timeout: 3500 });
  } else {
    window.addEventListener('load', () => setTimeout(loadUmami, 2000), { once: true });
  }
}
