import { Link } from "react-router-dom";
import LivePreview from "../livePreview";

function ProjectCard({ project }) {
  return (
    <Link to={`/project/${project.id}`} className="block w-full h-full">
      <div className="relative w-full h-full bg-gray-800 rounded-2xl p-5 lg:p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group overflow-hidden cursor-pointer transform hover:scale-[1.02]">
        {/* Animated glowing border */}
        <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-emerald-400 via-pink-500 to-purple-500 blur-lg opacity-0 group-hover:opacity-100 animate-glow-spin pointer-events-none z-0"></div>

        {/* Card content */}
        <div className="relative z-10 flex flex-col h-full">
          <div className="w-full h-72 md:h-80 lg:h-96 xl:h-[26rem] mb-5 overflow-hidden rounded-xl bg-gray-700">
            <LivePreview
              url={project.live}
              fallbackImage={project.images[0]}
              title={project.title}
            />
          </div>

          <h3 className="text-xl lg:text-2xl font-semibold text-white group-hover:text-emerald-400 transition-colors duration-300 mb-3">
            {project.title}
          </h3>

          <div className="text-gray-400 group-hover:text-gray-200 mb-5 flex-grow space-y-2 transition-colors duration-300 text-sm lg:text-base">
            {project.teaser
              ? project.teaser.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="transition-colors duration-300 leading-relaxed">
                    {paragraph}
                  </p>
                ))
              : (
                  <p className="italic text-gray-500 group-hover:text-gray-300 transition-colors duration-300">
                    No teaser available.
                  </p>
                )
            }
          </div>

          <div className="inline-flex mt-auto">
            <span className="px-6 py-2.5 text-sm lg:text-base bg-emerald-500 group-hover:bg-emerald-600 rounded-md text-white transition-colors duration-200 font-medium">
              View Project →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
