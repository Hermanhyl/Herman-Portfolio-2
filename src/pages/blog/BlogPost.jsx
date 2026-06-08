import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Calendar, Clock, Share2, Linkedin, Twitter, Link2, BookOpen, ExternalLink } from 'lucide-react';
import { getPostById, getBlogPosts } from '../../data/blog/posts';
import PageTransition from '../../components/pageTransition';
import ScrollReveal from '../../components/scrollReveal';
import ScrollProgress from '../../components/scrollProgress';
import BlogPostCard from '../../components/blogPostCard';
import GradientButton from '../../components/gradientButton';
import { useState, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { formatDateLong } from '../../utils/formatDate';
import useDocumentMeta from '../../hooks/useDocumentMeta';
import JsonLd, { buildBlogPostingSchema } from '../../components/jsonLd';

function BlogPost() {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith('no') ? 'no' : 'en';

  const post = useMemo(() => getPostById(id, currentLang), [id, currentLang]);
  const blogPosts = useMemo(() => getBlogPosts(currentLang), [currentLang]);
  const [copySuccess, setCopySuccess] = useState(false);

  useDocumentMeta({
    title: post?.title || t('blog.postNotFoundTitle'),
    description: post?.excerpt || t('blog.postNotFoundDescription'),
    url: `https://portfolio-herman-hylland.netlify.app/blog/${id}`,
    type: 'article'
  });

  if (!post) {
    return (
      <PageTransition>
        <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-4 py-20 flex items-center justify-center">
          <ScrollReveal>
            <div className="text-center space-y-6">
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl inline-block mb-4">
                <BookOpen className="w-16 h-16 text-gray-400" />
              </div>
              <h1 className="text-4xl font-bold text-gray-300">{t('blog.postNotFoundTitle')}</h1>
              <p className="text-gray-400">{t('blog.postNotFoundDescription')}</p>
              <GradientButton to="/blog" icon={ArrowLeft}>
                {t('blog.backToBlog')}
              </GradientButton>
            </div>
          </ScrollReveal>
        </div>
      </PageTransition>
    );
  }

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
      {/* BlogPosting structured data — lets Google build rich
          search results (headline, date, author, image). */}
      <JsonLd data={buildBlogPostingSchema(post)} />
      <ScrollProgress />
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
        <article className="max-w-3xl mx-auto px-4 py-20">
          {/* Navigation */}
          <ScrollReveal>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors mb-8 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              {t('blog.backToBlog')}
            </Link>
          </ScrollReveal>

          {/* Hero Image Placeholder */}
          <ScrollReveal delay={100}>
            <div className="relative h-[400px] bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mb-8 overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-8 left-8 w-32 h-32 border border-white/30 rounded-full"></div>
                <div className="absolute bottom-8 right-8 w-48 h-48 border border-white/20 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/10 rounded-full"></div>
              </div>
              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                <BookOpen className="w-32 h-32 text-emerald-400/50" />
              </div>
            </div>
          </ScrollReveal>

          {/* Post Header */}
          <ScrollReveal delay={200}>
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

              {/* Title — solid bone, no per-word accent: reading typography
                  on long-form posts stays clean per the spec. */}
              <h1 className="font-display text-bone text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-[-0.03em] leading-[1.08]">
                {post.title}
              </h1>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-gray-400 text-sm uppercase tracking-[0.08em] tabular-nums">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDateLong(post.date, currentLang)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">{t('blog.by')} {post.author}</span>
                </div>
              </div>

              {/* Project Link Button */}
              {post.projectLink && (
                <div className="pt-4">
                  <Link
                    to={post.projectLink}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-accent-ink font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-black cursor-pointer"
                  >
                    <ExternalLink className="w-5 h-5" />
                    {post.projectLabel || t('blog.viewProject')}
                  </Link>
                </div>
              )}
            </header>
          </ScrollReveal>

          {/* Post Content */}
          <ScrollReveal delay={300}>
            <div className="prose prose-invert prose-lg max-w-[68ch] mb-12">
              {post.content && post.content.includes('<') ? (
                <div
                  className="blog-content text-gray-200 text-lg leading-[1.8] [&>h2]:font-display [&>h2]:text-3xl md:[&>h2]:text-4xl [&>h2]:font-bold [&>h2]:tracking-tight [&>h2]:mt-12 [&>h2]:mb-5 [&>h2]:text-white [&>h2]:leading-[1.2] [&>h3]:font-display [&>h3]:text-2xl md:[&>h3]:text-3xl [&>h3]:font-semibold [&>h3]:tracking-tight [&>h3]:mt-10 [&>h3]:mb-4 [&>h3]:text-emerald-300 [&>p]:mb-5 [&>p]:text-gray-200 [&>p]:leading-[1.8] [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-5 [&>ul]:space-y-2 [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-5 [&>ol]:space-y-2 [&>li]:text-gray-200 [&>blockquote]:font-display [&>blockquote]:italic [&>blockquote]:text-2xl md:[&>blockquote]:text-3xl [&>blockquote]:leading-[1.4] [&>blockquote]:my-10 [&>blockquote]:pl-6 [&>blockquote]:border-l-2 [&>blockquote]:border-emerald-400/60 [&>blockquote]:text-white [&_code]:bg-white/10 [&_code]:px-2 [&_code]:py-1 [&_code]:rounded [&_code]:text-emerald-300 [&_code]:text-sm [&_code]:font-mono [&>pre]:bg-white/5 [&>pre]:p-5 [&>pre]:rounded-xl [&>pre]:overflow-x-auto [&>pre]:my-6 [&_strong]:font-semibold [&_strong]:text-white [&_a]:link-underline"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              ) : (
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  className="text-gray-200 leading-[1.8] text-lg"
                  components={{
                    h2: ({node, ...props}) => <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mt-12 mb-5 text-white leading-[1.2]" {...props} />,
                    h3: ({node, ...props}) => <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight mt-10 mb-4 text-emerald-300" {...props} />,
                    p: ({node, ...props}) => <p className="mb-5 text-gray-200 leading-[1.8]" {...props} />,
                    ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-5 space-y-2 text-gray-200" {...props} />,
                    ol: ({node, ...props}) => <ol className="list-decimal pl-6 mb-5 space-y-2 text-gray-200" {...props} />,
                    li: ({node, ...props}) => <li className="text-gray-200" {...props} />,
                    blockquote: ({node, ...props}) => <blockquote className="font-display italic text-2xl md:text-3xl leading-[1.4] my-10 pl-6 border-l-2 border-emerald-400/60 text-white" {...props} />,
                    code: ({node, inline, ...props}) =>
                      inline ? (
                        <code className="bg-white/10 px-2 py-1 rounded text-emerald-300 text-sm font-mono" {...props} />
                      ) : (
                        <code className="block bg-white/5 p-5 rounded-xl text-emerald-300 text-sm overflow-x-auto font-mono" {...props} />
                      ),
                    strong: ({node, ...props}) => <strong className="font-semibold text-white" {...props} />,
                    a: ({node, ...props}) => <a className="link-underline" {...props} />,
                  }}
                >
                  {post.content}
                </ReactMarkdown>
              )}
            </div>
          </ScrollReveal>

          {/* Share Section */}
          <ScrollReveal delay={400}>
            <div className="py-8 border-t border-white/10">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <h3 className="text-xl font-semibold text-emerald-400 flex items-center gap-2">
                  <Share2 className="w-5 h-5" />
                  {t('blog.shareThisPost')}
                </h3>
                <div className="flex gap-3">
                  <button
                    onClick={shareOnLinkedIn}
                    className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-300 transform hover:scale-105 group focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-black cursor-pointer"
                    aria-label={t('blog.shareOnLinkedIn')}
                  >
                    <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-[#0077B5]" />
                  </button>
                  <button
                    onClick={shareOnTwitter}
                    className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-300 transform hover:scale-105 group focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-black cursor-pointer"
                    aria-label={t('blog.shareOnTwitter')}
                  >
                    <Twitter className="w-5 h-5 text-gray-400 group-hover:text-[#1DA1F2]" />
                  </button>
                  <button
                    onClick={copyLink}
                    className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-300 transform hover:scale-105 group relative focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-black cursor-pointer"
                    aria-label={t('blog.copyLink')}
                  >
                    <Link2 className="w-5 h-5 text-gray-400 group-hover:text-emerald-400" />
                    {copySuccess && (
                      <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap">
                        {t('blog.linkCopied')}
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Read Next Section */}
          {relatedPosts.length > 0 && (
            <div className="mt-16 pt-8 border-t border-white/10">
              <ScrollReveal>
                <h2 className="text-3xl font-bold mb-8 text-emerald-400">{t('blog.readNext')}</h2>
              </ScrollReveal>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedPosts.map((relatedPost, index) => (
                  <ScrollReveal key={relatedPost.id} delay={100 + index * 100}>
                    <BlogPostCard post={relatedPost} variant="minimal" colorScheme="purple" />
                  </ScrollReveal>
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
