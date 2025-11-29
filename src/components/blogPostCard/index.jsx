import { Link } from 'react-router-dom';
import { Clock, Calendar, ArrowRight, FileText } from 'lucide-react';

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
 * @param {boolean} props.compact - Use compact layout (no decorative header)
 */
function BlogPostCard({ post, compact = false }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <Link
      to={`/blog/${post.id}`}
      className="group block h-full animated-border backdrop-blur-md bg-white/10 rounded-xl overflow-hidden hover:bg-white/15 transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-black"
    >
      {/* Decorative header */}
      {!compact && (
        <div className="relative h-48 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 via-cyan-500/20 to-purple-500/30 group-hover:from-emerald-500/40 group-hover:via-cyan-500/30 group-hover:to-purple-500/40 transition-all duration-500"></div>

          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-4 w-20 h-20 border border-white/30 rounded-full"></div>
            <div className="absolute bottom-4 right-4 w-32 h-32 border border-white/20 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white/10 rounded-full"></div>
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl mb-3 group-hover:scale-110 transition-transform duration-300">
              <FileText className="w-10 h-10 text-emerald-400" />
            </div>
            <span className="text-white/70 text-sm font-medium uppercase tracking-wider">Blog Post</span>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-xs font-medium text-emerald-300 group-hover:bg-emerald-500/30 transition-colors"
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
