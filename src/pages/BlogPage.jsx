import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Tag, ExternalLink } from 'lucide-react';
import { fetchMediumPosts } from '../services/mediumApi';
import Badge from '../components/Badge';
import MediumProfile from '../components/MediumProfile';
import Pagination from '../components/Pagination';
import SEO from '../components/SEO';

const POSTS_PER_PAGE = 4;

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState('loading');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const loadPosts = async () => {
      setStatus('loading');
      const result = await fetchMediumPosts();
      setPosts(result.posts);
      setStatus(result.status);
    };

    loadPosts();
  }, []);

  // Calculate pagination
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const paginatedPosts = posts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <>
      <SEO
        title="Blog"
        description="Read my latest thoughts and insights about web development, design, and technology"
        keywords={['blog', 'web development', 'technology', 'programming']}
      />

      <Badge status={status} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen p-8"
      >
        <div className="max-w-4xl mx-auto pt-20">
          <motion.h1
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-4xl font-bold mb-6"
          >
            Blog Posts
          </motion.h1>

          <motion.p
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg mb-12"
          >
            Insights and thoughts about web development, design, and technology
          </motion.p>

          {/* Medium Profile */}
          <MediumProfile />

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
            <>
              <div className="space-y-12">
                {paginatedPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <a 
                      href={post.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                          <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-bold group-hover:text-blue-400 
                                       transition-colors">
                              {post.title}
                            </h2>
                            <ExternalLink className="w-5 h-5 text-white/40 group-hover:text-blue-400" />
                          </div>

                          <p className="text-white/60 line-clamp-2">
                            {post.description}
                          </p>

                          {/* Meta Information */}
                          <div className="flex flex-wrap gap-4 text-sm text-white/60">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              {post.pubDate.toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4" />
                              {post.readTime}
                            </div>
                          </div>

                          {/* Categories */}
                          {post.categories?.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                              {post.categories.map((category) => (
                                <span
                                  key={category}
                                  className="flex items-center gap-1 px-3 py-1 text-sm
                                           bg-white/10 rounded-full"
                                >
                                  <Tag className="w-3 h-3" />
                                  {category}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </a>

                    {/* Divider */}
                    {index < paginatedPosts.length - 1 && (
                      <div className="mt-12 border-t border-white/10" />
                    )}
                  </motion.article>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              )}
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-white/60">No posts found. Please try again later.</p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default BlogPage;