import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Hero from "../../components/heroSection";
import ProjectCard from "../../components/projectCard";
import PageTransition from "../../components/pageTransition";
import { projects } from "../../data/projects/projects";
import { getRecentPosts } from "../../data/blog/posts";
import { Briefcase, ChevronRight, Search, X, GraduationCap, Sparkles, MapPin, Palette, BookOpen, Calendar, Clock, ArrowRight } from "lucide-react";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTech, setSelectedTech] = useState(null);

  // Get 2 latest blog posts
  const latestPosts = getRecentPosts(2);

  // Format date helper
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  // Get all unique technologies from projects
  const allTechnologies = useMemo(() => {
    const techSet = new Set();
    projects.forEach(project => {
      project.technologies.forEach(tech => techSet.add(tech));
    });
    return Array.from(techSet).sort();
  }, []);

  // Filter projects based on search and technology
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      // Search filter
      const matchesSearch = searchQuery === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.teaser.toLowerCase().includes(searchQuery.toLowerCase());

      // Technology filter
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
        <div className="w-full">
          <div className="animated-border backdrop-blur-md bg-white/10 p-8 md:p-10 rounded-2xl">
            <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
              <Sparkles className="w-7 h-7 text-emerald-400 animate-pulse" />
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500 text-transparent bg-clip-text pb-1.5 leading-tight">
                What I'm Currently Doing
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="flex items-start gap-4 p-5 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 group hover:transform hover:scale-105">
                <div className="flex-shrink-0 p-3 bg-emerald-500/20 rounded-lg group-hover:bg-emerald-500/30 transition-colors">
                  <GraduationCap className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-emerald-300 mb-1">Finishing Frontend Development degree</h3>
                  <p className="text-gray-300 text-base">(May 2025)</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex items-start gap-4 p-5 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group hover:transform hover:scale-105">
                <div className="flex-shrink-0 p-3 bg-cyan-500/20 rounded-lg group-hover:bg-cyan-500/30 transition-colors">
                  <Sparkles className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-cyan-300 mb-1">Building AI-powered tools</h3>
                  <p className="text-gray-300 text-base">with Claude API & OpenAI API</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex items-start gap-4 p-5 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group hover:transform hover:scale-105">
                <div className="flex-shrink-0 p-3 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-purple-300 mb-1">Open to Frontend/UX roles</h3>
                  <p className="text-gray-300 text-base">in Norway + Germany</p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="flex items-start gap-4 p-5 bg-gradient-to-br from-pink-500/10 to-orange-500/10 rounded-xl border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 group hover:transform hover:scale-105">
                <div className="flex-shrink-0 p-3 bg-pink-500/20 rounded-lg group-hover:bg-pink-500/30 transition-colors">
                  <Palette className="w-6 h-6 text-pink-400" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-pink-300 mb-1">Exploring AI + Design workflows</h3>
                  <p className="text-gray-300 text-base">Modern creative tools</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative px-4 sm:px-6 lg:px-8 xl:px-12 py-20 flex flex-col items-center w-full mx-auto" style={{ maxWidth: '1600px' }}>
        {/* Background decoration */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-emerald-500 to-transparent opacity-50"></div>

        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/50 px-4 py-2 rounded-full backdrop-blur-sm mb-4">
            <Briefcase className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm font-medium">Featured Work</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500 text-transparent bg-clip-text pb-2">
            My Projects
          </h2>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            A collection of projects showcasing my skills in front-end development, UI/UX design, and creative problem-solving.
          </p>
        </div>

        {/* Filter Section */}
        <div className="w-full space-y-6 mb-12">
          {/* Search Bar */}
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

          {/* Technology Filters */}
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

          {/* Active Filters & Results */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-400 text-sm">
            <div className="flex items-center gap-3">
              {hasActiveFilters && (
                <>
                  <span>
                    Showing {filteredProjects.length} of {projects.length} projects
                  </span>
                  <button
                    onClick={clearFilters}
                    className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition"
                    aria-label="Clear all filters"
                  >
                    <X className="w-4 h-4" />
                    Clear filters
                  </button>
                </>
              )}
              {!hasActiveFilters && (
                <span>{projects.length} projects</span>
              )}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 w-full">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-gray-400 mb-4">No projects found matching your criteria</p>
            <button
              onClick={clearFilters}
              className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* View More Link (if needed in future) */}
        <div className="mt-16">
          <a
            href="https://github.com/Hermanhyl"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors duration-300"
          >
            <span className="text-lg font-medium">View more on GitHub</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* Latest Insights Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 xl:px-12 py-20 flex flex-col items-center w-full mx-auto" style={{ maxWidth: '1400px' }}>
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4 w-full">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/50 px-4 py-2 rounded-full backdrop-blur-sm mb-4">
            <BookOpen className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-300 text-sm font-medium">Latest Insights</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500 text-transparent bg-clip-text pb-2">
            From the Blog
          </h2>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Thoughts on development, design, and AI
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 gap-8 w-full mb-12">
          {latestPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="group animated-border backdrop-blur-md bg-white/10 rounded-xl overflow-hidden hover:bg-white/15 transition-all duration-300 transform hover:scale-105"
            >
              {/* Image */}
              <div className="relative h-56 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center">
                <BookOpen className="w-20 h-20 text-emerald-400/50" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-xs font-medium text-emerald-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-emerald-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-300 text-base mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {formatDate(post.date)}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Posts Button */}
        <Link
          to="/blog"
          className="group inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          View All Posts
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>
    </div>
    </PageTransition>
  );
}

export default Home;


