import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { Home, RefreshCcw } from 'lucide-react';

const ErrorBoundary = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-surface text-ink">
      <div className="max-w-md w-full bento-cell p-6 sm:p-8 text-center space-y-6">
        <h1 className="font-display text-2xl font-semibold tracking-tight">
          Something went wrong
        </h1>
        <div className="space-y-2">
          <p className="text-ink-soft">
            {error?.message || "The page you're looking for couldn't be loaded."}
          </p>
          <p className="font-mono text-xs text-ink-muted">
            {error?.statusText || error?.name || 'Unknown error'}
          </p>
        </div>
        <div className="flex gap-3 justify-center flex-wrap">
          <button type="button" onClick={() => navigate('/')} className="btn-primary">
            <Home className="w-4 h-4" />
            Go home
          </button>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="btn-secondary"
          >
            <RefreshCcw className="w-4 h-4" />
            Reload
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorBoundary;
