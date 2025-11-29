import { useState, useEffect } from 'react';
import { BookOpen, Plus, UserPlus } from 'lucide-react';
import { blogPosts, getFeaturedPost } from '../../data/blog/posts';
import PageTransition from '../../components/pageTransition';
import ScrollReveal from '../../components/scrollReveal';
import SectionHeader from '../../components/sectionHeader';
import BlogPostCard from '../../components/blogPostCard';

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

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-4 py-20">
        <div className="max-w-6xl mx-auto space-y-16">

          {/* Header */}
          <ScrollReveal>
            <SectionHeader
              icon={BookOpen}
              badge="Blog & Insights"
              badgeColor="emerald"
              title="My Insights"
              description="Thoughts on development, design, and AI"
            />
          </ScrollReveal>

          {/* Featured Post */}
          {featuredPost && (
            <ScrollReveal delay={100}>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-emerald-400">Featured Post</h2>
                <BlogPostCard post={featuredPost} variant="featured" />
              </div>
            </ScrollReveal>
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
            <ScrollReveal delay={200}>
              <h2 className="text-2xl font-bold">Recent Posts</h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 gap-6">
              {recentPosts.map((post, index) => (
                <ScrollReveal key={post.id} delay={250 + index * 100}>
                  <BlogPostCard post={post} variant="minimal" colorScheme="purple" />
                </ScrollReveal>
              ))}
            </div>
          </div>

        </div>
      </div>
    </PageTransition>
  );
}

export default Blog;
