import { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { BookOpen, Plus, UserPlus, Search, X } from 'lucide-react';
import { getBlogPosts, getFeaturedPost } from '../../data/blog/posts';
import PageTransition from '../../components/pageTransition';
import ScrollReveal from '../../components/scrollReveal';
import SectionHeader from '../../components/sectionHeader';
import BlogPostCard from '../../components/blogPostCard';
import useDocumentMeta from '../../hooks/useDocumentMeta';

function Blog() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith('no') ? 'no' : 'en';

  useDocumentMeta({
    title: t('blog.title'),
    description: t('blog.description'),
    url: 'https://hermanhylland.netlify.app/blog'
  });

  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Get posts for current language
  const blogPosts = useMemo(() => getBlogPosts(currentLang), [currentLang]);
  const featuredPost = useMemo(() => getFeaturedPost(currentLang), [currentLang]);

  // Filter posts based on search query
  const filteredPosts = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) {
      return blogPosts.filter(post => !post.featured);
    }
    return blogPosts.filter(post => {
      const titleMatch = post.title.toLowerCase().includes(query);
      const excerptMatch = post.excerpt.toLowerCase().includes(query);
      const tagMatch = post.tags.some(tag => tag.toLowerCase().includes(query));
      const authorMatch = post.author.toLowerCase().includes(query);
      return titleMatch || excerptMatch || tagMatch || authorMatch;
    });
  }, [searchQuery, blogPosts]);

  // Check if featured post matches search
  const showFeaturedPost = useMemo(() => {
    if (!featuredPost) return false;
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase().trim();
    const titleMatch = featuredPost.title.toLowerCase().includes(query);
    const excerptMatch = featuredPost.excerpt.toLowerCase().includes(query);
    const tagMatch = featuredPost.tags.some(tag => tag.toLowerCase().includes(query));
    return titleMatch || excerptMatch || tagMatch;
  }, [featuredPost, searchQuery]);

  const clearSearch = () => setSearchQuery('');

  useEffect(() => {
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

  const resultCount = filteredPosts.length + (showFeaturedPost ? 1 : 0);

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-4 py-20">
        <div className="max-w-6xl mx-auto space-y-16">

          {/* Header */}
          <ScrollReveal>
            <SectionHeader
              icon={BookOpen}
              badge={t('blog.badge')}
              badgeColor="emerald"
              title={t('blog.pageTitle')}
              description={t('blog.description')}
            />
          </ScrollReveal>

          {/* Search Bar */}
          <ScrollReveal delay={50}>
            <div className="max-w-xl mx-auto space-y-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" aria-hidden="true" />
                <input
                  type="text"
                  placeholder={t('blog.searchPlaceholder')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-12 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                  aria-label={t('blog.searchPlaceholder')}
                />
                {searchQuery && (
                  <button
                    onClick={clearSearch}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 hover:bg-white/10 rounded-full transition-colors cursor-pointer"
                    aria-label={t('blog.clearSearch')}
                  >
                    <X className="w-4 h-4 text-gray-400 hover:text-white" />
                  </button>
                )}
              </div>
              {searchQuery && (
                <p className="text-sm text-gray-400 text-center">
                  {resultCount === 0
                    ? t('blog.noResults')
                    : t('blog.resultsFound', { count: resultCount })}
                </p>
              )}
            </div>
          </ScrollReveal>

          {/* Featured Post */}
          {showFeaturedPost && (
            <ScrollReveal delay={100}>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-emerald-400">{t('blog.featuredPost')}</h2>
                <BlogPostCard post={featuredPost} variant="featured" />
              </div>
            </ScrollReveal>
          )}

          {/* Posts */}
          {filteredPosts.length > 0 && (
            <div className="space-y-6">
              <ScrollReveal delay={200}>
                <h2 className="text-2xl font-bold">
                  {searchQuery ? t('blog.searchResults') : t('blog.recentPosts')}
                </h2>
              </ScrollReveal>
              <div className="grid md:grid-cols-2 gap-6">
                {filteredPosts.map((post, index) => (
                  <ScrollReveal key={post.id} delay={250 + index * 50}>
                    <BlogPostCard post={post} variant="minimal" colorScheme="purple" />
                  </ScrollReveal>
                ))}
              </div>
            </div>
          )}

          {/* No Results Message */}
          {searchQuery && !showFeaturedPost && filteredPosts.length === 0 && (
            <ScrollReveal delay={200}>
              <div className="text-center py-12">
                <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl inline-block mb-4">
                  <Search className="w-12 h-12 text-gray-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-300 mb-2">{t('blog.noPostsFound')}</h3>
                <p className="text-gray-400 mb-4">{t('blog.tryDifferentKeywords')}</p>
                <button
                  onClick={clearSearch}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                >
                  {t('blog.viewAllPosts')}
                </button>
              </div>
            </ScrollReveal>
          )}

          {/* Admin Button */}
          <ScrollReveal delay={300}>
            <div className="flex justify-center">
              <button
                onClick={handleAdminClick}
                className="inline-flex items-center gap-2 p-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 cursor-pointer"
                aria-label={user ? t('blog.managePosts') : t('blog.adminLogin')}
                title={user ? t('blog.managePosts') : t('blog.adminLogin')}
              >
                {user ? <Plus className="w-6 h-6" /> : <UserPlus className="w-6 h-6" />}
                <span className="text-sm font-medium">
                  {user ? t('blog.addNewPost') : t('blog.adminLogin')}
                </span>
              </button>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </PageTransition>
  );
}

export default Blog;
