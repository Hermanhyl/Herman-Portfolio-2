import { useParams, useNavigate } from "react-router-dom";
import { animations } from "../../data/animations";
import { useState } from "react";
import PageTransition from "../../components/pageTransition";
import OptimizedImage from "../../components/optimizedImage";
import { ArrowLeft, Share2, Check, ChevronRight, Play, Clock, Calendar, Clapperboard, Images } from "lucide-react";
import useDocumentMeta from "../../hooks/useDocumentMeta";

function AnimationDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const animation = animations.find((a) => a.id === id);

  useDocumentMeta({
    title: animation?.title || 'Animation',
    description: animation?.teaser || 'View this animation by Herman Hylland.',
    url: `https://hermanhylland.netlify.app/animation/${id}`,
    image: animation?.thumbnail ? `https://hermanhylland.netlify.app${animation.thumbnail}` : undefined
  });

  const currentIndex = animations.findIndex((a) => a.id === id);
  const nextAnimation = animations[currentIndex + 1];
  const prevAnimation = animations[currentIndex - 1];

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navigateToAnimations = () => {
    navigate("/?view=illustrations&subview=animations");
    setTimeout(() => {
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  if (!animation) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="animated-border backdrop-blur-md bg-white/10 p-8 rounded-2xl text-center">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Animation not found</h2>
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden py-20 px-4">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden opacity-30">
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-base md:text-lg text-gray-400 mb-6">
                <li>
                  <button
                    onClick={() => navigate("/")}
                    aria-label="Navigate to home page"
                    className="hover:text-purple-400 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-2 py-1 cursor-pointer"
                  >
                    Home
                  </button>
                </li>
                <li aria-hidden="true">
                  <ChevronRight className="w-5 h-5" />
                </li>
                <li>
                  <button
                    onClick={navigateToAnimations}
                    aria-label="Navigate to animations section"
                    className="hover:text-purple-400 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-2 py-1 cursor-pointer"
                  >
                    Animations
                  </button>
                </li>
                <li aria-hidden="true">
                  <ChevronRight className="w-5 h-5" />
                </li>
                <li aria-current="page">
                  <span className="text-purple-400">{animation.title}</span>
                </li>
              </ol>
            </nav>

            {/* Title and Actions */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
              <div className="flex-1">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 pb-2 bg-gradient-to-r from-purple-400 via-pink-400 to-rose-500 text-transparent bg-clip-text">
                  {animation.title}
                </h1>
                <p className="text-xl text-gray-300 mb-4">{animation.description}</p>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 text-base md:text-lg text-gray-400">
                  {animation.duration && (
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-purple-400" />
                      <span>{animation.duration}</span>
                    </div>
                  )}
                  {animation.year && (
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-purple-400" />
                      <span>{animation.year}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Share Button */}
              <button
                onClick={handleCopyLink}
                aria-label={copied ? "Link copied to clipboard" : "Copy animation link to clipboard"}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 cursor-pointer ${
                  copied
                    ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/50'
                    : 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30 text-white border border-purple-500/50 hover:border-purple-400 shadow-lg'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-5 h-5" aria-hidden="true" />
                    Link Copied!
                  </>
                ) : (
                  <>
                    <Share2 className="w-5 h-5" aria-hidden="true" />
                    Share Animation
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Main Column */}
            <div className="lg:col-span-2 space-y-8">

              {/* Video/Animation Player */}
              <div className="animated-border backdrop-blur-md bg-white/10 p-6 rounded-2xl">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Play className="w-6 h-6 text-purple-400" />
                  Animation
                </h2>

                {animation.video ? (
                  <div className="rounded-xl overflow-hidden bg-gray-900 aspect-video">
                    {animation.video.includes('youtube') || animation.video.includes('youtu.be') ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${animation.video.includes('v=') ? animation.video.split('v=')[1] : animation.video.split('/').pop()}`}
                        title={`${animation.title} video`}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <video
                        src={animation.video}
                        controls
                        className="w-full h-full"
                        poster={animation.thumbnail}
                      >
                        Your browser does not support the video tag.
                      </video>
                    )}
                  </div>
                ) : (
                  <div className="rounded-xl overflow-hidden bg-gray-800 aspect-video flex items-center justify-center">
                    <div className="text-center">
                      <OptimizedImage
                        src={animation.thumbnail}
                        alt={animation.title}
                        className="w-full h-full object-contain max-h-[600px]"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Gallery (if available) */}
              {animation.gallery && animation.gallery.length > 0 && (
                <div className="animated-border backdrop-blur-md bg-white/10 p-6 rounded-2xl">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Images className="w-6 h-6 text-pink-400" />
                    Process Gallery
                  </h2>

                  <div className="relative rounded-xl overflow-hidden bg-gray-900 aspect-video flex items-center justify-center">
                    <img
                      src={animation.gallery[galleryIndex]}
                      alt={`Gallery image ${galleryIndex + 1}`}
                      className="max-w-full max-h-full object-contain"
                    />

                    {/* Navigation arrows */}
                    <button
                      onClick={() => setGalleryIndex((prev) => (prev - 1 + animation.gallery.length) % animation.gallery.length)}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-all duration-300 cursor-pointer"
                      aria-label="Previous image"
                    >
                      ‹
                    </button>
                    <button
                      onClick={() => setGalleryIndex((prev) => (prev + 1) % animation.gallery.length)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-all duration-300 cursor-pointer"
                      aria-label="Next image"
                    >
                      ›
                    </button>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-white text-sm font-medium">
                        {galleryIndex + 1} / {animation.gallery.length}
                      </span>
                    </div>
                  </div>

                  {/* Dot indicators */}
                  <div className="mt-4 flex justify-center gap-2 flex-wrap">
                    {animation.gallery.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setGalleryIndex(index)}
                        aria-label={`Go to image ${index + 1}`}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                          galleryIndex === index
                            ? 'bg-pink-400 scale-125'
                            : 'bg-gray-600 hover:bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Article Content */}
              {animation.article && animation.article.length > 0 && (
                <div className="animated-border backdrop-blur-md bg-white/10 p-8 rounded-2xl">
                  <h2 className="text-2xl font-bold mb-6">About This Animation</h2>
                  <article className="space-y-8">
                    {animation.article.map((section, index) => (
                      <section key={index} className="space-y-3">
                        <h3 className="text-xl font-bold text-purple-400">{section.heading}</h3>
                        <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                          {section.content}
                        </p>
                      </section>
                    ))}
                  </article>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">

              {/* Software/Tools */}
              {animation.software && animation.software.length > 0 && (
                <div className="animated-border backdrop-blur-md bg-white/10 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Clapperboard className="w-5 h-5 text-purple-400" />
                    Tools Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {animation.software.map((tool, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-sm font-medium text-purple-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Navigation to Other Animations */}
              {animations.length > 1 && (
                <nav aria-label="Animation navigation" className="animated-border backdrop-blur-md bg-white/10 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold mb-4">More Animations</h3>
                  <div className="space-y-3">
                    {prevAnimation && (
                      <button
                        onClick={() => navigate(`/animation/${prevAnimation.id}`)}
                        aria-label={`Navigate to previous animation: ${prevAnimation.title}`}
                        className="w-full text-left p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 cursor-pointer"
                      >
                        <div className="text-xs text-gray-400 mb-1">Previous</div>
                        <div className="text-purple-400 group-hover:text-purple-300 flex items-center gap-2">
                          ← {prevAnimation.title}
                        </div>
                      </button>
                    )}
                    {nextAnimation && (
                      <button
                        onClick={() => navigate(`/animation/${nextAnimation.id}`)}
                        aria-label={`Navigate to next animation: ${nextAnimation.title}`}
                        className="w-full text-left p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 cursor-pointer"
                      >
                        <div className="text-xs text-gray-400 mb-1">Next</div>
                        <div className="text-purple-400 group-hover:text-purple-300 flex items-center gap-2">
                          {nextAnimation.title} →
                        </div>
                      </button>
                    )}
                  </div>
                </nav>
              )}

              {/* Back to Animations */}
              <button
                onClick={navigateToAnimations}
                aria-label="Back to all animations"
                className="w-full inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 cursor-pointer"
              >
                <ArrowLeft className="w-5 h-5" aria-hidden="true" />
                Back to Animations
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default AnimationDetail;
