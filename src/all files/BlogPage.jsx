import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  Tag, 
  ExternalLink,
  Share2,
  Copy,
  Twitter,
  Linkedin,
  Facebook,
  BookOpen,
  Sparkles,
  MessageSquare,
  ThumbsUp,
  Eye,
  Check,
  Loader2
} from 'lucide-react';
import { fetchMediumPosts } from '../services/mediumApi';
import Badge from '../components/Badge';
import MediumProfile from '../components/MediumProfile';
import Pagination from '../components/Pagination';
import SEO from '../components/SEO';

const POSTS_PER_PAGE = 4;
const RECENT_POST_THRESHOLD = 30; // Days to consider a post as recent

// ShareMenu Component
const ShareMenu = ({ isOpen, onClose, post, position }) => {
  const [copyStatus, setCopyStatus] = useState('');
  
  const shareOptions = [
    {
      name: 'Copy link',
      icon: Copy,
      action: async () => {
        try {
          await navigator.clipboard.writeText(post.link);
          setCopyStatus('copied');
          setTimeout(() => setCopyStatus(''), 2000);
        } catch (error) {
          console.error('Copy failed:', error);
          // Fallback
          const textarea = document.createElement('textarea');
          textarea.value = post.link;
          document.body.appendChild(textarea);
          textarea.select();
          try {
            document.execCommand('copy');
            setCopyStatus('copied');
            setTimeout(() => setCopyStatus(''), 2000);
          } catch (err) {
            console.error('Fallback copy failed:', err);
            setCopyStatus('error');
          }
          document.body.removeChild(textarea);
        }
      }
    },
    {
      name: 'Share on Twitter',
      icon: Twitter,
      action: () => {
        const text = `${post.title}\n\nvia @YourTwitterHandle`;
        const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(post.link)}`;
        window.open(url, '_blank');
      }
    },
    {
      name: 'Share on LinkedIn',
      icon: Linkedin,
      action: () => {
        const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(post.link)}`;
        window.open(url, '_blank');
      }
    },
    {
      name: 'Share on Facebook',
      icon: Facebook,
      action: () => {
        const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(post.link)}`;
        window.open(url, '_blank');
      }
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            style={{
              position: 'fixed',
              top: position.y,
              left: position.x,
              transform: 'translate(-90%, -100%)',
              zIndex: 51
            }}
            className="bg-background/90 backdrop-blur-lg rounded-lg border 
                     border-white/10 shadow-lg overflow-hidden"
          >
            <div className="p-2 space-y-1 min-w-[200px]">
              {shareOptions.map((option) => (
                <motion.button
                  key={option.name}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    option.action();
                    if (option.name !== 'Copy link') onClose();
                  }}
                  className="flex items-center gap-3 w-full px-3 py-2 rounded-lg
                           hover:bg-white/10 transition-colors text-left"
                  whileHover={{ x: 5 }}
                >
                  <option.icon className="w-5 h-5" />
                  <span>
                    {option.name === 'Copy link' && copyStatus === 'copied'
                      ? 'Copied!'
                      : option.name}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// BlogPostCard Component
const BlogPostCard = ({ post, isRecent }) => {
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

  const handleShareClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    setMenuPosition({ x: rect.left, y: rect.top });
    setShowShareMenu(true);
  };

  return (
    <motion.article className="group relative">
      {/* Recent post indicator */}
      {isRecent && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute -top-3 -right-3 z-10"
        >
          <div className="relative">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-blue-500/20 rounded-lg blur-lg"
            />
            <div className="relative px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 
                         rounded-lg backdrop-blur-sm border border-white/10 flex items-center gap-1">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium">New</span>
            </div>
          </div>
        </motion.div>
      )}

      {/* Post Content */}
      <div className="relative">
        <motion.div
          whileHover={{ y: -5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white/5 
                   rounded-xl p-6 border border-white/10 hover:border-white/20
                   transition-colors relative overflow-hidden"
        >
          {/* Image */}
          <div className="md:col-span-1">
            <div className="aspect-video md:aspect-square rounded-xl overflow-hidden">
              <img
                src={post.thumbnail}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500
                         group-hover:scale-110"
              />
            </div>
          </div>

          {/* Content */}
          <div className="md:col-span-2 space-y-4">
            {/* Title and Action Buttons */}
            <div className="flex items-start justify-between">
              <a 
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <h2 className="text-2xl font-bold group-hover:text-blue-400 
                             transition-colors line-clamp-2">
                  {post.title}
                </h2>
              </a>
              
              <div className="flex items-center gap-2 ml-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleShareClick}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 
                           transition-colors"
                >
                  <Share2 className="w-5 h-5" />
                </motion.button>
                <a 
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 
                           transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>

            <p className="text-white/60 line-clamp-2">
              {post.description}
            </p>

            {/* Meta Information */}
            <div className="flex flex-wrap gap-4 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.pubDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                {Math.floor(Math.random() * 1000) + 100} views
              </div>
              <div className="flex items-center gap-2">
                <ThumbsUp className="w-4 h-4" />
                {Math.floor(Math.random() * 50) + 10} likes
              </div>
            </div>

            {/* Categories */}
            {post.categories?.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.categories.map((category) => (
                  <span
                    key={category}
                    className="flex items-center gap-1 px-3 py-1 text-sm
                             bg-white/5 rounded-full hover:bg-white/10 
                             transition-colors"
                  >
                    <Tag className="w-3 h-3" />
                    {category}
                  </span>
                ))}
              </div>
            )}
          </div>
        </motion.div>

        {/* Share Menu */}
        <ShareMenu
          isOpen={showShareMenu}
          onClose={() => setShowShareMenu(false)}
          post={post}
          position={menuPosition}
        />
      </div>
    </motion.article>
  );
};

// Main BlogPage Component
const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState('loading');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const loadPosts = async () => {
      setStatus('loading');
      try {
        const result = await fetchMediumPosts();
        if (result.status === 'online') {
          const postsWithReadTime = result.posts.map(post => ({
            ...post,
            readTime: post.readTime || `${Math.ceil(post.description.split(' ').length / 200)} min read`,
            isRecent: ((new Date() - new Date(post.pubDate)) / (1000 * 60 * 60 * 24)) <= RECENT_POST_THRESHOLD
          }));
          setPosts(postsWithReadTime);
        }
        setStatus(result.status);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
        setStatus('offline');
      }
    };

    loadPosts();
  }, []);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const paginatedPosts = posts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <>
      <SEO
        title="Blog - Frontend Development Insights"
        description="Explore my thoughts and insights about web development, modern frontend technologies, and best practices in web design."
        keywords={['blog', 'frontend development', 'web development', 'React', 'JavaScript']}
      />

      <Badge status={status} />

      <div className="min-h-screen p-4 sm:p-8">
        <div className="max-w-4xl mx-auto pt-20">
          {/* Hero Section */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <BookOpen className="w-8 h-8 text-blue-400" />
              <h1 className="text-4xl sm:text-5xl font-bold">Blog & Insights</h1>
              <BookOpen className="w-8 h-8 text-blue-400" />
            </div>

            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Sharing my experiences, insights, and best practices in frontend development
              and modern web technologies.
            </p>
          </motion.div>

          {/* Medium Profile */}
          <div className="mb-12">
            <MediumProfile />
          </div>

          {/* Blog Posts */}
          {status === 'loading' ? (
            <div className="space-y-8">
              {[1, 2, 3].map((n) => (
                <div 
                  key={n}
                  className="animate-pulse bg-white/5 rounded-xl h-64"
                />
              ))}
            </div>
          ) : paginatedPosts.length > 0 ? (
            <div className="space-y-12">
              {paginatedPosts.map((post) => (
                <BlogPostCard
                  key={post.id}
                  post={post}
                  isRecent={post.isRecent}
                />
              ))}

              {/* Pagination */}
              {totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              )}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-white/60">No posts found. Please try again later.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogPage;