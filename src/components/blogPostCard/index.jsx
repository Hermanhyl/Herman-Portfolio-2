import { Link } from 'react-router-dom';
import { Clock, Calendar, ArrowRight, FileText, BookOpen } from 'lucide-react';
import { formatDate } from '../../utils/formatDate';

/**
 * BlogPostCard component - Card for displaying blog post previews
 *
 * @param {Object} props - Component props
 * @param {Object} props.post - Blog post data
 * @param {string} props.post.id - Post ID
 * @param {string} props.post.title - Post title
 * @param {string} props.post.excerpt - Post excerpt
 * @param {string} props.post.date - Post date
 * @param {string} props.post.readTime - Read time
 * @param {string[]} props.post.tags - Post tags
 * @param {string} props.variant - Card variant: 'default' | 'featured' | 'compact' | 'minimal'
 * @param {string} props.colorScheme - Color scheme: 'emerald' | 'purple'
 */
function BlogPostCard({ post, variant = 'default', colorScheme = 'emerald' }) {
  const colors = {
    emerald: {
      gradient: 'from-emerald-500/30 via-cyan-500/20 to-purple-500/30',
      gradientHover: 'group-hover:from-emerald-500/40 group-hover:via-cyan-500/30 group-hover:to-purple-500/40',
      tag: 'bg-emerald-500/20 border-emerald-500/30 text-emerald-300 group-hover:bg-emerald-500/30',
      icon: 'text-emerald-400',
      iconBg: 'from-emerald-500/20 to-cyan-500/20',
    },
    purple: {
      gradient: 'from-purple-500/30 via-pink-500/20 to-cyan-500/30',
      gradientHover: 'group-hover:from-purple-500/40 group-hover:via-pink-500/30 group-hover:to-cyan-500/40',
      tag: 'bg-purple-500/20 border-purple-500/30 text-purple-300 group-hover:bg-purple-500/30',
      icon: 'text-purple-400',
      iconBg: 'from-purple-500/20 to-pink-500/20',
    },
  };

  const colorSet = colors[colorScheme];

  // Featured variant - large horizontal card
  if (variant === 'featured') {
    return (
      <Link
        to={`/blog/${post.id}`}
        className="group block animated-border backdrop-blur-md bg-white/10 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-black"
      >
        <div className="grid md:grid-cols-2 gap-6">
          {/* Image */}
          <div className={`relative h-64 md:h-full bg-gradient-to-br ${colorSet.iconBg} flex items-center justify-center`}>
            <BookOpen className={`w-24 h-24 ${colorSet.icon}/50`} />
          </div>

          {/* Content */}
          <div className="p-8 flex flex-col justify-center">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 border rounded-full text-xs font-medium transition-colors ${colorSet.tag}`}
                >
                  #{tag}
                </span>
              ))}
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-emerald-400 transition-colors">
              {post.title}
            </h3>

            <p className="text-gray-300 mb-6 line-clamp-3">
              {post.excerpt}
            </p>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {formatDate(post.date)}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>

            <div className="flex items-center gap-2 mt-6 text-emerald-400 font-semibold group-hover:gap-4 transition-all">
              Read More
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </div>
      </Link>
    );
  }

  // Minimal variant - no decorative header, smaller
  if (variant === 'minimal') {
    return (
      <Link
        to={`/blog/${post.id}`}
        className="group block h-full animated-border backdrop-blur-md bg-white/10 rounded-xl overflow-hidden hover:bg-white/15 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-black"
      >
        {/* Image */}
        <div className={`relative h-48 bg-gradient-to-br ${colorSet.iconBg} flex items-center justify-center`}>
          <BookOpen className={`w-16 h-16 ${colorSet.icon}/50`} />
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags.slice(0, 2).map((tag, index) => (
              <span
                key={index}
                className={`px-2 py-1 border rounded-full text-xs font-medium transition-colors ${colorSet.tag}`}
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
    );
  }

  // Compact variant - no decorative header
  if (variant === 'compact') {
    return (
      <Link
        to={`/blog/${post.id}`}
        className="group block h-full backdrop-blur-md bg-white/10 rounded-xl overflow-hidden hover:bg-white/15 transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-black p-6"
      >
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className={`px-3 py-1 border rounded-full text-xs font-medium transition-colors ${colorSet.tag}`}
            >
              #{tag}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-emerald-400 transition-colors line-clamp-2">
          {post.title}
        </h3>

        <p className="text-gray-300 text-sm mb-4 line-clamp-2 group-hover:text-gray-200 transition-colors">
          {post.excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between text-sm text-gray-400">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {formatDate(post.date)}
            </div>
          </div>
          <span className="text-emerald-400 font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
            Read <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </Link>
    );
  }

  // Default variant - with decorative header
  return (
    <Link
      to={`/blog/${post.id}`}
      className="group block h-full animated-border backdrop-blur-md bg-white/10 rounded-xl overflow-hidden hover:bg-white/15 transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-black"
    >
      {/* Decorative header */}
      <div className="relative h-48 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${colorSet.gradient} ${colorSet.gradientHover} transition-all duration-500`}></div>

        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 left-4 w-20 h-20 border border-white/30 rounded-full"></div>
          <div className="absolute bottom-4 right-4 w-32 h-32 border border-white/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white/10 rounded-full"></div>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl mb-3 group-hover:scale-110 transition-transform duration-300">
            <FileText className={`w-10 h-10 ${colorSet.icon}`} />
          </div>
          <span className="text-white/70 text-sm font-medium uppercase tracking-wider">Blog Post</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className={`px-3 py-1 border rounded-full text-xs font-medium transition-colors ${colorSet.tag}`}
            >
              #{tag}
            </span>
          ))}
        </div>

        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-emerald-400 transition-colors line-clamp-2">
          {post.title}
        </h3>

        <p className="text-gray-300 text-base mb-4 line-clamp-3 group-hover:text-gray-200 transition-colors">
          {post.excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between text-sm text-gray-400">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {formatDate(post.date)}
            </div>
          </div>
          <span className="text-emerald-400 font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
            Read <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default BlogPostCard;
