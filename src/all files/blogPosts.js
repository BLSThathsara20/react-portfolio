export const blogPosts = [
    {
      id: 1,
      slug: 'getting-started-with-react-and-framer-motion',
      title: 'Getting Started with React and Framer Motion',
      description: 'Learn how to create smooth animations in React using Framer Motion library with practical examples.',
      date: '2024-03-25',
      author: 'Savindu Thaththsara',
      content: `
        <div class="space-y-6">
          <p>
            Framer Motion is a powerful library that enables you to create beautiful animations in your React applications.
            In this guide, we'll explore how to get started with basic animations and create engaging user experiences.
          </p>
          
          <h2 class="text-2xl font-bold mt-8">Getting Started</h2>
          <p>
            First, you'll need to install Framer Motion in your React project. You can do this using npm or yarn:
            \`npm install framer-motion\`
          </p>
  
          <h2 class="text-2xl font-bold mt-8">Basic Animations</h2>
          <p>
            Let's start with a simple fade-in animation. Here's how you can create one:
          </p>
  
          <pre class="bg-white/5 p-4 rounded-lg overflow-x-auto">
            <code>
              import { motion } from 'framer-motion';
              
              const FadeIn = () => (
                &lt;motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                &gt;
                  Hello World!
                &lt;/motion.div&gt;
              );
            </code>
          </pre>
        </div>
      `,
      readTime: '5 min read',
      tags: ['React', 'Animation', 'Framer Motion', 'Web Development'],
      image: '/api/placeholder/800/400'
    },
    {
      id: 2,
      slug: 'mastering-tailwind-css',
      title: 'Mastering Tailwind CSS',
      description: 'A comprehensive guide to using Tailwind CSS for modern web development.',
      date: '2024-03-20',
      author: 'Savindu Thaththsara',
      content: `
        <div class="space-y-6">
          <p>
            Tailwind CSS has revolutionized the way we style web applications. In this comprehensive guide,
            we'll explore how to effectively use Tailwind CSS in your projects.
          </p>
  
          <h2 class="text-2xl font-bold mt-8">Why Tailwind CSS?</h2>
          <p>
            Tailwind CSS provides a utility-first approach to styling, which means you can rapidly build
            custom designs without leaving your HTML. Here are some key benefits:
          </p>
  
          <ul class="list-disc list-inside space-y-2 ml-4">
            <li>Rapid development</li>
            <li>Consistent design system</li>
            <li>Highly customizable</li>
            <li>Small production bundle size</li>
          </ul>
        </div>
      `,
      readTime: '7 min read',
      tags: ['CSS', 'Tailwind', 'Web Development', 'Styling'],
      image: '/api/placeholder/800/400'
    }
  ];
  
  export const getBlogPost = (slug) => {
    return blogPosts.find(post => post.slug === slug);
  };
  
  export const getRelatedPosts = (currentSlug, limit = 3) => {
    return blogPosts
      .filter(post => post.slug !== currentSlug)
      .slice(0, limit);
  };