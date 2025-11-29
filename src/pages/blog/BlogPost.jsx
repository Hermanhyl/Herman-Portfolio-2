import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag, Share2, Linkedin, Twitter, Link2, BookOpen } from 'lucide-react';
import { getPostById, blogPosts } from '../../data/blog/posts';
import PageTransition from '../../components/pageTransition';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = getPostById(id);
  const [copySuccess, setCopySuccess] = useState(false);

  if (!post) {
    return (
      <PageTransition>
        <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-4 py-20 flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-gray-300">Post Not Found</h1>
            <p className="text-gray-400">The blog post you're looking for doesn't exist.</p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Blog
            </Link>
          </div>
        </div>
      </PageTransition>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };

  const shareOnLinkedIn = () => {
    const url = window.location.href;
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(linkedInUrl, '_blank', 'width=600,height=400');
  };

  const shareOnTwitter = () => {
    const url = window.location.href;
    const text = `Check out this post: ${post.title}`;
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
    window.open(twitterUrl, '_blank', 'width=600,height=400');
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  // Get related posts (same tags, excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.tags.some(tag => post.tags.includes(tag)))
    .slice(0, 2);

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
        <article className="max-w-4xl mx-auto px-4 py-20">
          {/* Navigation */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          {/* Hero Image Placeholder */}
          <div className="relative h-[400px] bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mb-8 overflow-hidden">
            <BookOpen className="w-32 h-32 text-emerald-400/50" />
          </div>

          {/* Post Header */}
          <header className="mb-8 space-y-6">
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-sm font-medium text-emerald-300"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500 text-transparent bg-clip-text leading-tight">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">By {post.author}</span>
              </div>
            </div>
          </header>

          {/* Post Content */}
          <div className="prose prose-invert prose-lg max-w-none mb-12">
            {/* Check if content is HTML (from vite-plugin-markdown) or raw markdown */}
            {post.content && post.content.includes('<') ? (
              // Render HTML content directly with styling
              <div
                className="blog-content text-gray-300 leading-relaxed [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:mt-8 [&>h2]:mb-4 [&>h2]:text-emerald-400 [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:mt-6 [&>h3]:mb-3 [&>h3]:text-cyan-400 [&>p]:mb-4 [&>p]:text-gray-300 [&>p]:leading-relaxed [&>ul]:list-disc [&>ul]:list-inside [&>ul]:mb-4 [&>ul]:space-y-2 [&>ol]:list-decimal [&>ol]:list-inside [&>ol]:mb-4 [&>ol]:space-y-2 [&>li]:text-gray-300 [&_code]:bg-white/10 [&_code]:px-2 [&_code]:py-1 [&_code]:rounded [&_code]:text-emerald-300 [&_code]:text-sm [&>pre]:bg-white/5 [&>pre]:p-4 [&>pre]:rounded-xl [&>pre]:overflow-x-auto [&_strong]:font-bold [&_strong]:text-white [&_a]:text-emerald-400 [&_a:hover]:text-cyan-400 [&_a]:underline [&_a]:transition-colors"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            ) : (
              // Render raw markdown with ReactMarkdown
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                className="text-gray-300 leading-relaxed"
                components={{
                  h2: ({node, ...props}) => <h2 className="text-3xl font-bold mt-8 mb-4 text-emerald-400" {...props} />,
                  h3: ({node, ...props}) => <h3 className="text-2xl font-bold mt-6 mb-3 text-cyan-400" {...props} />,
                  p: ({node, ...props}) => <p className="mb-4 text-gray-300 leading-relaxed" {...props} />,
                  ul: ({node, ...props}) => <ul className="list-disc list-inside mb-4 space-y-2 text-gray-300" {...props} />,
                  ol: ({node, ...props}) => <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-300" {...props} />,
                  li: ({node, ...props}) => <li className="text-gray-300" {...props} />,
                  code: ({node, inline, ...props}) =>
                    inline ? (
                      <code className="bg-white/10 px-2 py-1 rounded text-emerald-300 text-sm" {...props} />
                    ) : (
                      <code className="block bg-white/5 p-4 rounded-xl text-emerald-300 text-sm overflow-x-auto" {...props} />
                    ),
                  strong: ({node, ...props}) => <strong className="font-bold text-white" {...props} />,
                  a: ({node, ...props}) => <a className="text-emerald-400 hover:text-cyan-400 underline transition-colors" {...props} />,
                }}
              >
                {post.content}
              </ReactMarkdown>
            )}
          </div>

          {/* Share Section */}
          <div className="py-8 border-t border-white/10">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <h3 className="text-xl font-semibold text-emerald-400 flex items-center gap-2">
                <Share2 className="w-5 h-5" />
                Share this post
              </h3>
              <div className="flex gap-3">
                <button
                  onClick={shareOnLinkedIn}
                  className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-300 transform hover:scale-105 group"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-[#0077B5]" />
                </button>
                <button
                  onClick={shareOnTwitter}
                  className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-300 transform hover:scale-105 group"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="w-5 h-5 text-gray-400 group-hover:text-[#1DA1F2]" />
                </button>
                <button
                  onClick={copyLink}
                  className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-300 transform hover:scale-105 group relative"
                  aria-label="Copy link"
                >
                  <Link2 className="w-5 h-5 text-gray-400 group-hover:text-emerald-400" />
                  {copySuccess && (
                    <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap">
                      Link copied!
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Read Next Section */}
          {relatedPosts.length > 0 && (
            <div className="mt-16 pt-8 border-t border-white/10">
              <h2 className="text-3xl font-bold mb-8 text-emerald-400">Read Next</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.id}`}
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
                        {relatedPost.tags.slice(0, 2).map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-xs font-medium text-purple-300"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-400 transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>

                      <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center gap-4 text-xs text-gray-400">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {relatedPost.readTime}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {formatDate(relatedPost.date)}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </div>
    </PageTransition>
  );
}

export default BlogPost;
