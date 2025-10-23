import { useState, useMemo } from "react";
import Hero from "../../components/heroSection";
import ProjectCard from "../../components/projectCard";
import PageTransition from "../../components/pageTransition";
import { projects } from "../../data/projects/projects";
import { Briefcase, ChevronRight, Search, X } from "lucide-react";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTech, setSelectedTech] = useState(null);

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

      {/* Projects Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 xl:px-12 py-20 flex flex-col items-center w-full mx-auto" style={{ maxWidth: '1600px' }}>
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
    </div>
    </PageTransition>
  );
}

export default Home;


