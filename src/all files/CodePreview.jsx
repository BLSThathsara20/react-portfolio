import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Copy, Check, AlertCircle } from 'lucide-react';

const CodePreview = ({ title, description, preview, html, css, js }) => {
  const [activeTab, setActiveTab] = useState('preview');
  const [copiedTab, setCopiedTab] = useState(null);
  const [showTooltip, setShowTooltip] = useState({ show: false, message: '', error: false });

  const copyToClipboard = async (code, tab) => {
    if (!code) return;

    try {
      if (navigator.clipboard && window.isSecureContext) {
        // For HTTPS or localhost
        await navigator.clipboard.writeText(code);
      } else {
        // Fallback for other contexts
        const textArea = document.createElement('textarea');
        textArea.value = code;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }

      setCopiedTab(tab);
      setShowTooltip({ show: true, message: 'Copied to clipboard!', error: false });
      
      setTimeout(() => {
        setCopiedTab(null);
        setShowTooltip({ show: false, message: '', error: false });
      }, 2000);
    } catch (error) {
      console.error('Copy failed:', error);
      setShowTooltip({ 
        show: true, 
        message: 'Failed to copy. Try selecting the code manually.', 
        error: true 
      });
      
      setTimeout(() => {
        setShowTooltip({ show: false, message: '', error: false });
      }, 3000);
    }
  };

  const tabs = [
    { id: 'preview', label: 'Preview' },
    { id: 'html', label: 'HTML', code: html },
    { id: 'css', label: 'CSS', code: css },
    { id: 'js', label: 'JavaScript', code: js }
  ].filter(tab => tab.code !== undefined || tab.id === 'preview');

  return (
    <div className="bg-white/5 rounded-xl overflow-hidden border border-white/10">
      <div className="p-4 border-b border-white/10">
        <h3 className="text-lg font-bold mb-1">{title}</h3>
        <p className="text-white/60 text-sm">{description}</p>
      </div>

      <div className="flex border-b border-white/10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm transition-colors relative
                     ${activeTab === tab.id 
                       ? 'bg-white/10 text-white' 
                       : 'text-white/60 hover:text-white hover:bg-white/5'}`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400"
              />
            )}
          </button>
        ))}
      </div>

      <div className="relative">
        {activeTab === 'preview' ? (
          <div className="p-4">
            {preview}
          </div>
        ) : (
          <div className="relative group">
            <pre className="p-4 text-sm overflow-x-auto">
              <code className="language-javascript">
                {tabs.find(t => t.id === activeTab)?.code || ''}
              </code>
            </pre>
            <div className="absolute top-4 right-4 flex items-center gap-2">
              {/* Tooltip */}
              <AnimatePresence>
                {showTooltip.show && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className={`px-3 py-1.5 rounded-lg text-xs whitespace-nowrap
                            ${showTooltip.error 
                              ? 'bg-red-500/20 border border-red-500/20' 
                              : 'bg-white/10 border border-white/20'}`}
                  >
                    <div className="flex items-center gap-1.5">
                      {showTooltip.error ? (
                        <AlertCircle className="w-3 h-3 text-red-400" />
                      ) : (
                        <Check className="w-3 h-3 text-green-400" />
                      )}
                      {showTooltip.message}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Copy Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => copyToClipboard(
                  tabs.find(t => t.id === activeTab)?.code,
                  activeTab
                )}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 
                         transition-colors relative"
              >
                {copiedTab === activeTab ? (
                  <Check className="w-4 h-4 text-green-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </motion.button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CodePreview;