// Blog registry for mapping slugs to components
import Blog001 from '../pages/blog-detail/components/Blog001';
import Blog002 from '../pages/blog-detail/components/Blog002';
import Blog003 from '../pages/blog-detail/components/Blog003';
import Blog004 from '../pages/blog-detail/components/Blog004';

export const blogRegistry = {
  // Existing post
  'digital-marketing-transformation-2025': {
    component: Blog001,
    title: 'The Future of Digital Marketing in 2025: AI, Privacy, and Immersive Experiences',
    excerpt: 'Explore how AI, data privacy, and immersive technologies are transforming digital marketing in 2025 — and how your brand can leverage them for growth.',
    author: 'Prithvi Pandya',
    date: '2025-08-08',
    readTime: '5 min read',
    category: 'Digital Strategy',
    featured: true,
    image: '/assets/images/blogs/brain.png' // replace with your CDN path
  },

  // BLOG002 — Performance Marketing (kept same slug for stability)
  'performance-marketing-roi-optimization': {
    component: Blog002,
    title: 'Performance Marketing ROI in 2025: Attribution, Value-Based Bidding & Creative that Scales',
    excerpt: 'Win in a privacy-first world with first-party data, server-side tagging, MMM + MTA, value-based bidding, and a weekly creative testing cadence to compound ROAS.',
    author: 'Prithvi Pandya',
    date: '2025-08-08',
    readTime: '7 min read',
    category: 'Digital Strategy',
    featured: false,
    image: '/assets/images/blogs/Roi.png' // use your CDN; 1200x630 recommended
  },

  // BLOG003 — LLM + SEO dual-optimization (new SEO-friendly slug)
  'ai-search-content-optimization': {
    component: Blog003,
    title: 'Content for AI Search in 2025: How to Rank on Google and Get Quoted by LLMs',
    excerpt: 'Users now ask ChatGPT and Perplexity before (or instead of) Googling. Learn a dual-optimization playbook so your content ranks in SERP and gets cited in AI answers.',
    author: 'Prithvi Pandya',
    date: '2025-08-08',
    readTime: '6 min read',
    category: 'Content Strategy',
    featured: false,
    image: '/assets/images/blogs/Aiseo.png' // use your CDN; fast, compressed
  },
  'voice-search-ai-optimization-2025': {
    component: Blog004,
    title: 'Voice Search & AI Assistants in 2025: Optimizing for Alexa, Siri, and Chat-Based Search',
    excerpt: 'Learn how to adapt your SEO to voice-first and AI assistant-driven searches so your brand remains discoverable across Google, Alexa, Siri, and AI chatbots.',
    author: 'Prithvi Pandya',
    date: '2025-08-08',
    readTime: '6 min read',
    category: 'AI & Search',
    featured: false,
    image: '/assets/images/blogs/Aiaudio.png'
  }

};


export const getBlogPost = (slug) => {
  return blogRegistry[slug] || null;
};

export const getAllBlogPosts = () => {
  return Object.entries(blogRegistry).map(([slug, post]) => ({
    slug,
    ...post
  }));
};

export const getFeaturedPosts = () => {
  return getAllBlogPosts().filter(post => post.featured);
};

export const getPostsByCategory = (category) => {
  return getAllBlogPosts().filter(post => post.category === category);
};

export const getCategories = () => {
  const categories = new Set();
  Object.values(blogRegistry).forEach(post => {
    categories.add(post.category);
  });
  return Array.from(categories);
};