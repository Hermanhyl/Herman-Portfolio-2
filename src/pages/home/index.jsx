import { useState, useMemo, useEffect } from "react";
import Hero from "../../components/heroSection";
import ProjectCard from "../../components/projectCard";
import PageTransition from "../../components/pageTransition";
import ScrollReveal from "../../components/scrollReveal";
import SectionHeader from "../../components/sectionHeader";
import StatusCard from "../../components/statusCard";
import BlogPostCard from "../../components/blogPostCard";
import GradientButton from "../../components/gradientButton";
import OptimizedImage from "../../components/optimizedImage";
import IllustrationLightbox from "../../components/illustrationLightbox";
import { projects } from "../../data/projects/projects";
import { illustrations, illustrationCategories } from "../../data/illustrations";
import { getRecentPosts } from "../../data/blog/posts";
import { Briefcase, ChevronRight, Search, X, GraduationCap, Sparkles, MapPin, Palette, BookOpen, ArrowRight, PenTool, Instagram } from "lucide-react";

// Status items data
const statusItems = [
  { icon: GraduationCap, title: "Finishing Frontend Development degree", subtitle: "(May 2025)", color: "emerald" },
  { icon: Sparkles, title: "Building AI-powered tools", subtitle: "with Claude API & OpenAI API", color: "cyan" },
  { icon: MapPin, title: "Open to Frontend/UX roles", subtitle: "in Norway + Germany", color: "purple" },
  { icon: Palette, title: "Exploring AI + Design workflows", subtitle: "Modern creative tools", color: "pink" },
];

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTech, setSelectedTech] = useState(null);
  const [activeView, setActiveView] = useState("projects"); // "projects" or "illustrations"
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isCarouselTransitioning, setIsCarouselTransitioning] = useState(false);

  const latestPosts = getRecentPosts(2);

  const filteredIllustrations = useMemo(() => {
    if (selectedCategory === "All") return illustrations;
    return illustrations.filter(ill => ill.category === selectedCategory);
  }, [selectedCategory]);

  // Auto-rotate carousel for illustrations with smooth fade transition
  useEffect(() => {
    if (activeView !== "illustrations") return;

    const interval = setInterval(() => {
      // Start fade out
      setIsCarouselTransitioning(true);
      // Wait for fade out to complete, then change image
      setTimeout(() => {
        setCarouselIndex((prev) => (prev + 1) % filteredIllustrations.length);
      }, 700);
      // Start fade in after image changes
      setTimeout(() => {
        setIsCarouselTransitioning(false);
      }, 800);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeView, filteredIllustrations.length]);

  // Reset carousel when category changes
  useEffect(() => {
    setCarouselIndex(0);
  }, [selectedCategory]);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const allTechnologies = useMemo(() => {
    const techSet = new Set();
    projects.forEach(project => {
      project.technologies.forEach(tech => techSet.add(tech));
    });
    return Array.from(techSet).sort();
  }, []);

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = searchQuery === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.teaser.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTech = !selectedTech || project.technologies.includes(selectedTech);
      return matchesSearch && matchesTech;
    });
  }, [searchQuery, selectedTech]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedTech(null);
  };

  const hasActiveFilters = searchQuery || selectedTech;

  return (
    <PageTransition>
      <div className="bg-gradient-to-b from-black via-gray-900 to-black min-h-screen">
        <Hero />

        {/* What I'm Currently Doing Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 xl:px-12 py-16 flex flex-col items-center w-full mx-auto" style={{ maxWidth: '1400px' }}>
          <ScrollReveal className="w-full">
            <div className="animated-border backdrop-blur-md bg-white/10 p-8 md:p-10 rounded-2xl">
              <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
                <Sparkles className="w-7 h-7 text-emerald-400 animate-pulse" />
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500 text-transparent bg-clip-text pb-1.5 leading-tight">
                  What I'm Currently Doing
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {statusItems.map((item, index) => (
                  <StatusCard key={index} {...item} />
                ))}
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Projects Section */}
        <section id="projects" className="relative px-4 sm:px-6 lg:px-8 xl:px-12 py-20 flex flex-col items-center w-full mx-auto" style={{ maxWidth: '1600px' }}>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-emerald-500 to-transparent opacity-50"></div>

          <ScrollReveal className="mb-12">
            {/* Toggle Buttons */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex bg-white/5 border border-white/10 rounded-xl p-1.5 backdrop-blur-sm">
                <button
                  onClick={() => setActiveView("projects")}
                  aria-pressed={activeView === "projects"}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeView === "projects"
                      ? "bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Briefcase className="w-5 h-5" aria-hidden="true" />
                  My Projects
                </button>
                <button
                  onClick={() => setActiveView("illustrations")}
                  aria-pressed={activeView === "illustrations"}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeView === "illustrations"
                      ? "bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <PenTool className="w-5 h-5" aria-hidden="true" />
                  My Illustrations
                </button>
              </div>
            </div>

            {/* Section Header - Changes based on active view */}
            <SectionHeader
              icon={activeView === "projects" ? Briefcase : PenTool}
              badge={activeView === "projects" ? "Featured Work" : "Creative Art"}
              badgeColor="purple"
              title={activeView === "projects" ? "My Projects" : "My Illustrations"}
              description={
                activeView === "projects"
                  ? "A collection of projects showcasing my skills in front-end development, UI/UX design, and creative problem-solving."
                  : "A collection of personal illustrations and digital artwork created by me, exploring various styles and creative techniques."
              }
            />
          </ScrollReveal>

          {/* Filter Section - Only show for projects */}
          {activeView === "projects" && (
          <div className="w-full space-y-6 mb-12">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" aria-hidden="true" />
                <input
                  type="text"
                  placeholder="Search projects by name or description..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-12 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                  aria-label="Search projects"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition"
                    aria-label="Clear search"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {allTechnologies.map((tech) => (
                <button
                  key={tech}
                  onClick={() => setSelectedTech(selectedTech === tech ? null : tech)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                    selectedTech === tech
                      ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg'
                      : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white'
                  }`}
                  aria-pressed={selectedTech === tech}
                >
                  {tech}
                </button>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-400 text-sm">
              <div className="flex items-center gap-3">
                {hasActiveFilters ? (
                  <>
                    <span>Showing {filteredProjects.length} of {projects.length} projects</span>
                    <button onClick={clearFilters} className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition" aria-label="Clear all filters">
                      <X className="w-4 h-4" />
                      Clear filters
                    </button>
                  </>
                ) : (
                  <span>{projects.length} projects</span>
                )}
              </div>
            </div>
          </div>
          )}

          {/* Projects Grid - Only show when projects view is active */}
          {activeView === "projects" && (
            <>
              {filteredProjects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 w-full">
                  {filteredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <p className="text-xl text-gray-400 mb-4">No projects found matching your criteria</p>
                  <GradientButton onClick={clearFilters}>Clear filters</GradientButton>
                </div>
              )}

              <div className="mt-16">
                <a
                  href="https://github.com/Hermanhyl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors duration-300 animate-pulse-subtle"
                >
                  <span className="text-lg font-medium bg-gradient-to-r from-gray-400 via-emerald-300 to-gray-400 bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer">View more on GitHub</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </>
          )}

          {/* Illustrations Grid - Only show when illustrations view is active */}
          {activeView === "illustrations" && (
            <>
              {/* Featured Illustration Carousel */}
              <div className="w-full mb-12">
                <div className="relative max-w-lg mx-auto">
                  <div
                    className="animated-border backdrop-blur-md bg-white/5 p-3 rounded-2xl cursor-pointer"
                    onClick={() => openLightbox(carouselIndex)}
                  >
                    <div
                      className="relative aspect-square rounded-xl overflow-hidden bg-gray-900 select-none"
                      onContextMenu={(e) => e.preventDefault()}
                    >
                      <img
                        key={carouselIndex}
                        src={filteredIllustrations[carouselIndex]?.src}
                        alt={filteredIllustrations[carouselIndex]?.title}
                        style={{
                          transition: 'opacity 700ms ease-in-out',
                          opacity: isCarouselTransitioning ? 0 : 1,
                        }}
                        className="w-full h-full object-contain pointer-events-none"
                        draggable="false"
                      />
                      {/* Watermark */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <span className="text-white/10 text-2xl md:text-4xl font-bold rotate-[-20deg] select-none">
                          Herman Hylland
                        </span>
                      </div>
                    </div>
                    <div className="mt-3 text-center">
                      <p className="text-white font-medium">{filteredIllustrations[carouselIndex]?.title}</p>
                      <p className="text-gray-400 text-sm">{filteredIllustrations[carouselIndex]?.category}</p>
                    </div>
                  </div>
                  {/* Animated navigation dots */}
                  <div className="flex justify-center items-center gap-3 mt-4">
                    <div className="relative flex items-center gap-3">
                      {[0, 1, 2, 3].map((dotIndex) => (
                        <button
                          key={dotIndex}
                          onClick={() => setCarouselIndex(dotIndex)}
                          aria-label={`View illustration ${dotIndex + 1}`}
                          className="w-3 h-3 rounded-full bg-white/20 hover:bg-white/40 transition-colors duration-300"
                        />
                      ))}
                      {/* Animated moving dot */}
                      <div
                        className="absolute w-3 h-3 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50 transition-all duration-500 ease-in-out"
                        style={{
                          left: `${(carouselIndex % 4) * 24}px`,
                        }}
                      />
                    </div>
                    <span className="text-gray-400 text-sm ml-2">+{filteredIllustrations.length - 4} more</span>
                  </div>
                </div>
              </div>

              {/* Category Filter */}
              <div className="w-full mb-8">
                <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                  {illustrationCategories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                        selectedCategory === category
                          ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg'
                          : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white'
                      }`}
                      aria-pressed={selectedCategory === category}
                    >
                      {category}
                    </button>
                  ))}
                </div>
                <div className="text-center mt-4 text-gray-400 text-sm">
                  {selectedCategory === "All"
                    ? `${illustrations.length} illustrations`
                    : `${filteredIllustrations.length} illustrations in ${selectedCategory}`
                  }
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4 w-full">
                {filteredIllustrations.map((illustration, index) => (
                  <button
                    key={illustration.id}
                    onClick={() => openLightbox(index)}
                    onContextMenu={(e) => e.preventDefault()}
                    aria-label={`View ${illustration.title} in fullscreen`}
                    className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer bg-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-black select-none"
                  >
                    <img
                      src={illustration.src}
                      alt={illustration.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 pointer-events-none"
                      draggable="false"
                      loading="lazy"
                    />
                    {/* Watermark */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <span className="text-white/10 text-xs md:text-sm font-bold rotate-[-20deg] select-none">
                        Herman Hylland
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 md:p-4">
                      <span className="text-white font-medium text-xs md:text-sm line-clamp-2">{illustration.title}</span>
                    </div>
                    <div className="absolute inset-0 ring-2 ring-emerald-400/0 group-hover:ring-emerald-400/50 rounded-xl transition-all duration-300"></div>
                  </button>
                ))}
              </div>

              <div className="mt-16">
                <a
                  href="https://www.instagram.com/hermanhyl98/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View more illustrations on Instagram (opens in new tab)"
                  className="group inline-flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                >
                  <Instagram className="w-5 h-5 animate-pulse" aria-hidden="true" />
                  <span className="text-lg font-medium bg-gradient-to-r from-gray-400 via-emerald-300 to-gray-400 bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer">View more on Instagram</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Lightbox */}
              <IllustrationLightbox
                illustrations={filteredIllustrations}
                currentIndex={lightboxIndex}
                isOpen={lightboxOpen}
                onClose={() => setLightboxOpen(false)}
                onNavigate={setLightboxIndex}
              />
            </>
          )}
        </section>

        {/* Latest Insights Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 xl:px-12 py-20 flex flex-col items-center w-full mx-auto" style={{ maxWidth: '1400px' }}>
          <ScrollReveal className="w-full mb-12">
            <SectionHeader
              icon={BookOpen}
              badge="Latest Insights"
              badgeColor="emerald"
              title="From the Blog"
              description="Thoughts on development, design, and AI"
            />
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 w-full mb-12">
            {latestPosts.map((post, index) => (
              <ScrollReveal key={post.id} delay={index * 150}>
                <BlogPostCard post={post} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={300}>
            <GradientButton to="/blog" icon={ArrowRight} size="lg">
              View All Posts
            </GradientButton>
          </ScrollReveal>
        </section>
      </div>
    </PageTransition>
  );
}

export default Home;
