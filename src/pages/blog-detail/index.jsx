import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Icon from '../../components/AppIcon';
import AppImage from '../../components/AppImage';
import { getBlogPost, getAllBlogPosts } from '../../utils/blogRegistry';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const blogPost = getBlogPost(slug);
    if (!blogPost) {
      navigate('/blog');
      return;
    }

    setPost({ ...blogPost, slug });

    // Related posts (same category, excluding current)
    const allPosts = getAllBlogPosts();
    const related = allPosts
      .filter((p) => p.slug !== slug && p.category === blogPost.category)
      .slice(0, 3);
    setRelatedPosts(related);

    setIsLoading(false);
  }, [slug, navigate]);

  const handleShare = (platform) => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const title = post?.title || '';
    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
    };
    window.open(shareUrls[platform], '_blank', 'width=600,height=400');
  };

  const handleRelatedPostClick = (postSlug) => {
    navigate(`/blog/${postSlug}`);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-6 py-16">
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-2xl font-bold text-text-primary mb-4">Post Not Found</h1>
          <button onClick={() => navigate('/blog')} className="text-primary hover:underline">
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  const BlogContent = post.component;

  // Canonical URL (client-safe)
  const canonicalUrl =
    typeof window !== 'undefined'
      ? window.location.href.split('#')[0]
      : `https://yourwebsite.com/blog/${post.slug}`;

  // BlogPosting JSON-LD
  const blogPostingLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl
    },
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    author: { '@type': 'Person', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: 'MarketForce Pro',
      logo: {
        '@type': 'ImageObject',
        url: 'https://yourwebsite.com/assets/images/logo.png'
      }
    },
    datePublished: post.date,
    dateModified: post.date
  };

  // Conditional FAQPage JSON-LD for Blog002
  const isBlog002 = post.slug === 'performance-marketing-roi-optimization';
  const faqLd = isBlog002
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How do I improve ROAS with rising CPAs?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'Tighten tracking, shift to value-based bidding, and run a weekly creative testing cadence. Reinvest into winners; cap frequency on low-intent segments.'
            }
          },
          {
            '@type': 'Question',
            name: 'What’s the best attribution model in 2025?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'Use MTA for tactical decisions and MMM for budgeting—validate both with incrementality tests. No single model is “best” without triangulation.'
            }
          },
          {
            '@type': 'Question',
            name: 'Does server-side tagging really help?',
            acceptedAnswer: {
              '@type': 'Answer',
              text:
                'Yes. It improves data quality, page performance, and privacy control—leading to more reliable optimization and better ROI decisions.'
            }
          }
        ]
      }
    : null;

  return (
    <>
      <Header />
      <Helmet>
        {/* Canonical + Core Meta */}
        <link rel="canonical" href={canonicalUrl} />
        <title>{post.title} - MarketForce Pro Blog</title>
        <meta name="description" content={post.excerpt} />

        {/* Open Graph */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.image} />

        {/* BlogPosting JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(blogPostingLd)}</script>

        {/* Conditional FAQ JSON-LD */}
        {faqLd && <script type="application/ld+json">{JSON.stringify(faqLd)}</script>}
      </Helmet>

      <div className="min-h-screen bg-background pt-20">
        {/* Breadcrumbs */}
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center space-x-2 text-sm text-text-secondary">
            <button onClick={() => navigate('/blog')} className="hover:text-primary transition-brand">
              Blog
            </button>
            <Icon name="ChevronRight" size={16} />
            <span className="text-text-primary">{post.title}</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-6 pb-12">
          <div className="max-w-4xl mx-auto">
            {/* Category Badge */}
            <div className="mb-6">
              <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 pb-8 border-b border-border">
              <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">
                    {post.author.split(' ').map((n) => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-text-primary">{post.author}</p>
                  <p className="text-text-secondary text-sm">
                    {post.date} • {post.readTime}
                  </p>
                </div>
              </div>

              {/* Social Share */}
              <div className="flex items-center space-x-3">
                <span className="text-sm text-text-secondary">Share:</span>
                <button
                  onClick={() => handleShare('twitter')}
                  className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-white transition-brand"
                >
                  <Icon name="Twitter" size={18} />
                </button>
                <button
                  onClick={() => handleShare('linkedin')}
                  className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-white transition-brand"
                >
                  <Icon name="Linkedin" size={18} />
                </button>
                <button
                  onClick={() => handleShare('facebook')}
                  className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-white transition-brand"
                >
                  <Icon name="Facebook" size={18} />
                </button>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative overflow-hidden rounded-xl mb-12">
              <AppImage src={post.image} alt={post.title} className="w-full h-64 lg:h-96 object-cover" />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="container mx-auto px-6 pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <BlogContent />
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="bg-muted py-16">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">Related Articles</h2>

                <div className="grid md:grid-cols-3 gap-8">
                  {relatedPosts.map((relatedPost) => (
                    <article
                      key={relatedPost.slug}
                      className="bg-white rounded-xl border border-border shadow-brand hover:shadow-brand-lg transition-brand cursor-pointer group"
                      onClick={() => handleRelatedPostClick(relatedPost.slug)}
                    >
                      <div className="relative overflow-hidden rounded-t-xl h-48">
                        <AppImage
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      <div className="p-6">
                        <h3 className="font-bold text-lg text-text-primary mb-3 group-hover:text-primary transition-brand">
                          {relatedPost.title}
                        </h3>

                        <p className="text-text-secondary mb-4 line-clamp-2">{relatedPost.excerpt}</p>

                        <div className="flex items-center justify-between">
                          <span className="text-sm text-text-secondary">{relatedPost.readTime}</span>
                          <Icon name="ArrowRight" size={16} className="text-accent group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Back to Blog CTA */}
        <section className="container mx-auto px-6 py-8">
          <div className="text-center">
            <button
              onClick={() => navigate('/blog')}
              className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-brand"
            >
              <Icon name="ArrowLeft" size={16} />
              <span>Back to all articles</span>
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetail;
