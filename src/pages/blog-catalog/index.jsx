import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
import Icon from '../../components/AppIcon';
import AppImage from '../../components/AppImage';
import { getAllBlogPosts, getFeaturedPosts, getCategories } from '../../utils/blogRegistry';

const BlogCatalog = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const categories = ['All', ...getCategories()];
  const featuredPosts = getFeaturedPosts();

  useEffect(() => {
    setTimeout(() => {
      const allPosts = getAllBlogPosts();
      setPosts(allPosts);
      setFilteredPosts(allPosts);
      setIsLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    let filtered = posts;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(post => post?.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(post =>
        post?.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post?.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post?.author?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredPosts(filtered);
  }, [posts, selectedCategory, searchQuery]);

  const handlePostClick = (slug) => {
    navigate(`/blog/${slug}`);
  };

  const BlogCard = ({ post, featured = false }) => (
    <article 
      className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden transform hover:scale-105 border border-slate-100 ${
        featured ? 'md:col-span-2 lg:col-span-1' : ''
      }`}
      onClick={() => handlePostClick(post?.slug)}
    >
      {/* Image Container */}
      <div className={`relative overflow-hidden ${featured ? 'h-72' : 'h-56'}`}>
        <AppImage
          src={post?.image}
          alt={post?.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm text-slate-800 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full"></div>
            {post?.category}
          </span>
        </div>

        {/* Reading Time */}
        <div className="absolute top-4 right-4">
          <span className="bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
            {post?.readTime}
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-8">
        <h3 className={`font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight ${
          featured ? 'text-2xl' : 'text-xl'
        }`}>
          {post?.title}
        </h3>
        
        <p className="text-slate-600 mb-6 line-clamp-3 leading-relaxed">
          {post?.excerpt}
        </p>
        
        {/* Author and CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-md">
                <span className="text-white text-sm font-bold">
                  {post?.author?.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full flex items-center justify-center">
                <Icon name="CheckCircle" size={12} className="text-white" />
              </div>
            </div>
            <div>
              <p className="font-semibold text-slate-900 text-sm">{post?.author}</p>
              <p className="text-xs text-slate-500">{post?.date}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-blue-600 group-hover:text-blue-700 transition-colors">
            <span className="text-sm font-semibold">Read More</span>
            <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </article>
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Header />
        <div className="pt-20 flex items-center justify-center h-96">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-slate-600 font-medium">Loading insights...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Marketing Insights - MarketForce Pro | Expert Digital Marketing Content</title>
        <meta name="description" content="Discover the latest digital marketing strategies, industry insights, and expert analysis from MarketForce Pro's marketing intelligence team." />
      </Helmet>

      <div className="min-h-screen bg-slate-50">
        <Header />
        
        {/* Enhanced Hero Section */}
        <section className="pt-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 container mx-auto px-6 py-20">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
                <Icon name="BookOpen" size={20} className="text-orange-400" />
                <span className="font-semibold text-sm uppercase tracking-wide">Marketing Intelligence</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                Strategic Marketing 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-400">
                  Intelligence Hub
                </span>
              </h1>
              
              <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
                Unlock the secrets of high-performance marketing with expert insights, proven strategies, 
                and data-driven analysis that transforms businesses and drives measurable growth.
              </p>
              
              
            </div>
          </div>
        </section>

        

        {/* Enhanced Category Filter */}
        <section className="container mx-auto px-6 py-12 border-t border-slate-200">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                    : 'bg-white text-slate-700 hover:bg-slate-100 shadow-md border border-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Enhanced Blog Grid */}
        <section className="container mx-auto px-6 pb-20">
          {filteredPosts?.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogCard key={post?.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-32 h-32 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center mx-auto mb-8">
                <Icon name="Search" size={48} className="text-slate-400" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">No insights found</h3>
              <p className="text-slate-600 mb-8 max-w-md mx-auto leading-relaxed">
                We couldn't find any articles matching your search criteria. 
                Try adjusting your filters or exploring different topics.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </section>

        {/* Enhanced Newsletter Signup */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-64 h-64 bg-orange-500/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-500/20 rounded-full blur-2xl"></div>
          </div>

          <div className="relative z-10 container mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Icon name="Mail" size={40} className="text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Stay Ahead of the Curve
              </h2>
              <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                Get exclusive marketing insights, industry trends, and strategic frameworks delivered 
                straight to your inbox. Join the growing list of successful businesses that trust MarketForce Pro with their growth.
              </p>
              
              <div className="flex flex-col sm:flex-row max-w-lg mx-auto gap-4 mb-6">
                <input
                  type="email"
                  placeholder="Enter your professional email"
                  className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-slate-300 focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
                />
                <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap">
                  Get Insights
                </button>
              </div>
              
              <div className="flex items-center justify-center gap-6 text-slate-400 text-sm">
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle" size={16} className="text-emerald-400" />
                  <span>Weekly insights</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Shield" size={16} className="text-blue-400" />
                  <span>No spam ever</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Users" size={16} className="text-orange-400" />
                  <span>10,000+ subscribers</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default BlogCatalog;