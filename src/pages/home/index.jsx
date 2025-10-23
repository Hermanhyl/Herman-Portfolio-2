import Hero from "../../components/heroSection";
import ProjectCard from "../../components/projectCard";
import PageTransition from "../../components/pageTransition";
import { projects } from "../../data/projects/projects";
import { Briefcase, ChevronRight } from "lucide-react";

function Home() {
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 w-full">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

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


