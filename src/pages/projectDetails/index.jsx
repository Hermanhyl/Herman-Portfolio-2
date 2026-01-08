import { useParams, useNavigate, Link } from "react-router-dom";
import { projects } from "../../data/projects/projects";
import { useState, useEffect } from "react";
import PageTransition from "../../components/pageTransition";
import OptimizedImage from "../../components/optimizedImage";
import { ArrowLeft, ExternalLink, Github, Figma, Share2, Check, ChevronRight, Code2, Users, Calendar, Linkedin, FileText, BookOpen, Images } from "lucide-react";
import useDocumentMeta from "../../hooks/useDocumentMeta";

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const project = projects.find((p) => p.id === id);

  // Auto-rotate gallery carousel
  useEffect(() => {
    if (!project?.gallery || project.gallery.length === 0) return;

    const interval = setInterval(() => {
      setGalleryIndex((prev) => (prev + 1) % project.gallery.length);
    }, 2500); // 2.5 seconds per image for fairly fast rotation

    return () => clearInterval(interval);
  }, [project?.gallery]);

  useDocumentMeta({
    title: project?.title || 'Project',
    description: project?.teaser || 'View this project by Herman Hylland.',
    url: `https://hermanhylland.netlify.app/project/${id}`,
    image: project?.images?.[0] ? `https://hermanhylland.netlify.app${project.images[0]}` : undefined
  });

  const currentIndex = projects.findIndex((p) => p.id === id);
  const nextProject = projects[currentIndex + 1];
  const prevProject = projects[currentIndex - 1];

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="animated-border backdrop-blur-md bg-white/10 p-8 rounded-2xl text-center">
          <h2 className="text-2xl font-bold text-red-400 mb-4">Project not found</h2>
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
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
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-base md:text-lg text-gray-400 mb-6">
              <li>
                <button
                  onClick={() => navigate("/")}
                  aria-label="Navigate to home page"
                  className="hover:text-emerald-400 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-2 py-1 cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="w-5 h-5" />
              </li>
              <li>
                <button
                  onClick={() => {
                    navigate("/");
                    setTimeout(() => {
                      const projectsSection = document.getElementById("projects");
                      if (projectsSection) {
                        projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
                      }
                    }, 100);
                  }}
                  aria-label="Navigate to projects section"
                  className="hover:text-emerald-400 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-2 py-1 cursor-pointer"
                >
                  Projects
                </button>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="w-5 h-5" />
              </li>
              <li aria-current="page">
                <span className="text-emerald-400">{project.title}</span>
              </li>
            </ol>
          </nav>

          {/* Title and Actions */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
            <div className="flex-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 pb-2 bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500 text-transparent bg-clip-text">
                {project.title}
              </h1>
              <p className="text-xl text-gray-300 mb-4">{project.description}</p>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-4 text-base md:text-lg text-gray-400">
                {project.authers && (
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-emerald-400" />
                    <span>{project.authers}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Share Button */}
            <button
              onClick={handleCopyLink}
              aria-label={copied ? "Link copied to clipboard" : "Copy project link to clipboard"}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 cursor-pointer ${
                copied
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/50'
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
                  Share Project
                </>
              )}
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View live demo of ${project.title} (opens in new tab)`}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                <ExternalLink className="w-5 h-5" aria-hidden="true" />
                Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View source code for ${project.title} on GitHub (opens in new tab)`}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                <Github className="w-5 h-5" aria-hidden="true" />
                View Code
              </a>
            )}
            {project.figma && (
              <a
                href={project.figma}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View Figma design for ${project.title} (opens in new tab)`}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                <Figma className="w-5 h-5" aria-hidden="true" />
                Figma Design
              </a>
            )}
            {project.linkedin && (
              <a
                href={project.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View project trailer on LinkedIn (opens in new tab)`}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-cyan-600 backdrop-blur-sm border border-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                <Linkedin className="w-5 h-5" aria-hidden="true" />
                Watch Trailer
              </a>
            )}
            {project.blogPost && (
              <Link
                to={project.blogPost}
                aria-label={`Read blog post about ${project.title}`}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 shadow-lg shadow-purple-500/25"
              >
                <BookOpen className="w-5 h-5" aria-hidden="true" />
                Read Blog Post
              </Link>
            )}
            {project.report && (
              <a
                href={project.report}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Read bachelor report for ${project.title} (opens in new tab)`}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-orange-600 backdrop-blur-sm border border-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                <FileText className="w-5 h-5" aria-hidden="true" />
                Read Report
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Main Column */}
          <div className="lg:col-span-2 space-y-8">

            {/* Image Gallery */}
            <div className="animated-border backdrop-blur-md bg-white/10 p-6 rounded-2xl">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Code2 className="w-6 h-6 text-emerald-400" />
                Project Showcase
              </h2>

              {/* YouTube Video - if project has youtube link */}
              {project.youtube ? (
                <div className="mb-4 rounded-xl overflow-hidden bg-gray-900 aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${project.youtube.split('v=')[1]}`}
                    title={`${project.title} video`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="mb-4 rounded-xl overflow-hidden bg-gray-800">
                  <OptimizedImage
                    src={project.images[selectedImage]}
                    alt={`${project.title} screenshot ${selectedImage + 1}`}
                    eager={selectedImage === 0}
                    className="w-full h-auto object-contain max-h-[600px]"
                  />
                </div>
              )}

              {/* Image Thumbnails */}
              {project.images.length > 1 && (
                <div className="grid grid-cols-4 gap-3">
                  {project.images.map((src, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      aria-label={`View image ${index + 1} of ${project.title}`}
                      className={`rounded-lg overflow-hidden transition-all duration-300 cursor-pointer ${
                        selectedImage === index
                          ? 'ring-2 ring-emerald-400 scale-105'
                          : 'opacity-60 hover:opacity-100'
                      }`}
                    >
                      <OptimizedImage
                        src={src}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-20 object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Image Gallery Carousel */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="animated-border backdrop-blur-md bg-white/10 p-6 rounded-2xl">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Images className="w-6 h-6 text-purple-400" />
                  Project Gallery
                </h2>

                {/* Main Image Display */}
                <div className="relative rounded-xl overflow-hidden bg-gray-900 aspect-video flex items-center justify-center">
                  <img
                    key={galleryIndex}
                    src={project.gallery[galleryIndex]}
                    alt={`Gallery image ${galleryIndex + 1}`}
                    className="max-w-full max-h-full object-contain"
                  />

                  {/* Navigation arrows */}
                  <button
                    onClick={() => setGalleryIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-all duration-300 cursor-pointer"
                    aria-label="Previous image"
                  >
                    ‹
                  </button>
                  <button
                    onClick={() => setGalleryIndex((prev) => (prev + 1) % project.gallery.length)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-all duration-300 cursor-pointer"
                    aria-label="Next image"
                  >
                    ›
                  </button>

                  {/* Progress indicator */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-white text-sm font-medium">
                      {galleryIndex + 1} / {project.gallery.length}
                    </span>
                  </div>
                </div>

                {/* Dot indicators */}
                <div className="mt-4 flex justify-center gap-2 flex-wrap">
                  {project.gallery.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setGalleryIndex(index)}
                      aria-label={`Go to image ${index + 1}`}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                        galleryIndex === index
                          ? 'bg-purple-400 scale-125'
                          : 'bg-gray-600 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Article Content */}
            {project.article && project.article.length > 0 && (
              <div className="animated-border backdrop-blur-md bg-white/10 p-8 rounded-2xl relative">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                  <h2 className="text-2xl font-bold">About This Project</h2>
                  <div className="flex flex-wrap gap-2">
                    {project.blogPost && (
                      <Link
                        to={project.blogPost}
                        aria-label="Read full blog post about this project"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 shadow-lg shadow-purple-500/25"
                      >
                        <BookOpen className="w-4 h-4" aria-hidden="true" />
                        Read Blog Post
                      </Link>
                    )}
                    {project.linkedin && (
                      <a
                        href={project.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Watch project trailer on LinkedIn (opens in new tab)"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900 shadow-lg shadow-cyan-500/25"
                      >
                        <Linkedin className="w-4 h-4" aria-hidden="true" />
                        Watch Trailer
                      </a>
                    )}
                    {project.report && (
                      <a
                        href={project.report}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Read bachelor report (opens in new tab)"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 shadow-lg shadow-orange-500/25"
                      >
                        <FileText className="w-4 h-4" aria-hidden="true" />
                        Read Report
                      </a>
                    )}
                  </div>
                </div>
                <article className="space-y-8">
                  {project.article.map((section, index) => (
                    <section key={index} className="space-y-3">
                      <h3 className="text-xl font-bold text-emerald-400">{section.heading}</h3>
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

            {/* Technologies */}
            {project.technologies && (
              <div className="animated-border backdrop-blur-md bg-white/10 p-6 rounded-2xl">
                <h3 className="text-xl font-bold mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-full text-sm font-medium text-emerald-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation to Other Projects */}
            <nav aria-label="Project navigation" className="animated-border backdrop-blur-md bg-white/10 p-6 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">More Projects</h3>
              <div className="space-y-3">
                {prevProject && (
                  <button
                    onClick={() => navigate(`/project/${prevProject.id}`)}
                    aria-label={`Navigate to previous project: ${prevProject.title}`}
                    className="w-full text-left p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900 cursor-pointer"
                  >
                    <div className="text-xs text-gray-400 mb-1">Previous</div>
                    <div className="text-emerald-400 group-hover:text-emerald-300 flex items-center gap-2">
                      ← {prevProject.title}
                    </div>
                  </button>
                )}
                {nextProject && (
                  <button
                    onClick={() => navigate(`/project/${nextProject.id}`)}
                    aria-label={`Navigate to next project: ${nextProject.title}`}
                    className="w-full text-left p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900 cursor-pointer"
                  >
                    <div className="text-xs text-gray-400 mb-1">Next</div>
                    <div className="text-emerald-400 group-hover:text-emerald-300 flex items-center gap-2">
                      {nextProject.title} →
                    </div>
                  </button>
                )}
              </div>
            </nav>

            {/* Back to Projects */}
            <button
              onClick={() => {
                navigate("/");
                setTimeout(() => {
                  const projectsSection = document.getElementById("projects");
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }, 100);
              }}
              aria-label="Back to all projects"
              className="w-full inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900 cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5" aria-hidden="true" />
              Back to Projects
            </button>
          </div>
        </div>
      </div>
    </div>
    </PageTransition>
  );
}

export default ProjectDetail;
