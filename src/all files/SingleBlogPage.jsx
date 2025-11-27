import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Share2, Copy, Calendar, Clock, Tag } from 'lucide-react';
import { getBlogPost, getRelatedPosts } from '../data/blogPosts';
import SEO from '../components/SEO';

const SingleBlogPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [showCopyTooltip, setShowCopyTooltip] = React.useState(false);

  // Get blog post data
  const post = getBlogPost(slug);
  const relatedPosts = getRelatedPosts(slug, 3);

  // If post doesn't exist, navigate to blog listing
  React.useEffect(() => {
    if (!post) {
      navigate('/blog');
    }
  }, [post, navigate]);

  if (!post) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowCopyTooltip(true);
    setTimeout(() => setShowCopyTooltip(false), 2000);
  };

  return (
    <>
      <SEO
        title={post.title}
        description={post.description}
        keywords={post.tags}
        image={post.image}
        type="article"
        author={post.author}
        publishedTime={post.date}
        twitterCard="summary_large_image"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen p-8"
      >
        <div className="max-w-3xl mx-auto pt-20">
          {/* Header Navigation */}
          <div className="flex items-center justify-between mb-8">
            <Link
              to="/blog"
              className="flex items-center text-white/60 hover:text-white"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Blog
            </Link>

            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCopyLink}
                className="relative p-2 rounded-lg bg-white/10 hover:bg-white/20 
                         transition-colors"
              >
                <Copy className="w-5 h-5" />
                {showCopyTooltip && (
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 
                             text-xs bg-black rounded whitespace-nowrap"
                  >
                    Link copied!
                  </motion.span>
                )}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 
                         transition-colors"
              >
                <Share2 className="w-5 h-5" />
              </motion.button>
            </div>
          </div>

          {/* Blog Post Content */}
          <article className="space-y-8">
            {/* Featured Image */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="relative aspect-video rounded-xl overflow-hidden"
            >
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Title and Meta */}
            <div className="space-y-4">
              <motion.h1
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl font-bold"
              >
                {post.title}
              </motion.h1>

              <div className="flex flex-wrap gap-4 text-sm text-white/60">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-1 px-3 py-1 text-sm
                             bg-white/10 rounded-full"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Post Content */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16 space-y-8">
              <h2 className="text-2xl font-bold">Related Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.slug}`}
                    className="group"
                  >
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="bg-white/10 rounded-lg overflow-hidden"
                    >
                      <div className="aspect-video">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold group-hover:text-blue-400 
                                   transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-white/60 mt-2">
                          {relatedPost.description}
                        </p>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default SingleBlogPage;