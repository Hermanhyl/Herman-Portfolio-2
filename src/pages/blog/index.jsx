import { Link } from 'react-router-dom';
import { Calendar, Clock, Tag, ArrowRight, BookOpen, Plus, UserPlus } from 'lucide-react';
import { blogPosts, getFeaturedPost } from '../../data/blog/posts';
import PageTransition from '../../components/pageTransition';
import { useState, useEffect } from 'react';

function Blog() {
  const [user, setUser] = useState(null);
  const featuredPost = getFeaturedPost();
  const recentPosts = blogPosts.filter(post => !post.featured);

  useEffect(() => {
    // Check for Netlify Identity user
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', user => setUser(user));
      window.netlifyIdentity.on('login', () => setUser(window.netlifyIdentity.currentUser()));
      window.netlifyIdentity.on('logout', () => setUser(null));
    }
  }, []);

  const handleAdminClick = () => {
    if (user) {
      window.location.href = '/admin/';
    } else if (window.netlifyIdentity) {
      window.netlifyIdentity.open();
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-4 py-20">
        <div className="max-w-6xl mx-auto space-y-16">

          {/* Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/50 px-4 py-2 rounded-full backdrop-blur-sm mb-4">
              <BookOpen className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-300 text-sm font-medium">Blog & Insights</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500 text-transparent bg-clip-text pb-2 leading-tight">
              My Insights
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Thoughts on development, design, and AI
            </p>
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-emerald-400">Featured Post</h2>
              <Link
                to={`/blog/${featuredPost.id}`}
                className="group block animated-border backdrop-blur-md bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 transform hover:scale-[1.02]"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Image */}
                  <div className="relative h-64 md:h-full bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center">
                    <BookOpen className="w-24 h-24 text-emerald-400/50" />
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col justify-center">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {featuredPost.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-xs font-medium text-emerald-300"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-emerald-400 transition-colors">
                      {featuredPost.title}
                    </h3>

                    <p className="text-gray-300 mb-6 line-clamp-3">
                      {featuredPost.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {formatDate(featuredPost.date)}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mt-6 text-emerald-400 font-semibold group-hover:gap-4 transition-all">
                      Read More
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Admin Button - Fixed Position */}
          <button
            onClick={handleAdminClick}
            className="fixed bottom-6 left-6 z-50 p-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 group"
            aria-label={user ? "Manage blog posts" : "Login to manage blog"}
            title={user ? "Manage blog posts" : "Login to manage blog"}
          >
            {user ? <Plus className="w-6 h-6" /> : <UserPlus className="w-6 h-6" />}
            <span className="absolute bottom-full left-0 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {user ? 'Add New Post' : 'Login to Admin'}
            </span>
          </button>

          {/* Recent Posts */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Recent Posts</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {recentPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className="group animated-border backdrop-blur-md bg-white/10 rounded-xl overflow-hidden hover:bg-white/15 transition-all duration-300 transform hover:scale-105"
                >
                  {/* Image */}
                  <div className="relative h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-purple-400/50" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.slice(0, 2).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-xs font-medium text-purple-300"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-gray-400">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {formatDate(post.date)}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </PageTransition>
  );
}

export default Blog;
