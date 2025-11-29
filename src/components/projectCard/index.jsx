import { Link } from "react-router-dom";
import LivePreview from "../livePreview";

function ProjectCard({ project }) {
  return (
    <Link
      to={`/project/${project.id}`}
      className="block w-full h-full focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-black rounded-2xl group"
    >
      {/* Card container - visible border that highlights on hover */}
      <div className="relative w-full h-full bg-gray-800 rounded-2xl border-2 border-gray-600 hover:border-emerald-500/70 shadow-md hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 flex flex-col cursor-pointer transform hover:scale-[1.02]">

        {/* Card content with proper padding */}
        <div className="flex flex-col h-full p-6 lg:p-8">
          {/* Live Preview */}
          <div className="w-full h-72 md:h-80 lg:h-96 xl:h-[26rem] mb-6 overflow-hidden rounded-xl bg-gray-700">
            <LivePreview
              url={project.live}
              fallbackImage={project.images[0]}
              title={project.title}
            />
          </div>

          {/* Title */}
          <h3 className="text-xl lg:text-2xl font-semibold text-white group-hover:text-emerald-400 transition-colors duration-300 mb-3">
            {project.title}
          </h3>

          {/* Technology badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 4).map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-gray-300 group-hover:border-emerald-500/30 group-hover:text-emerald-300 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-gray-400">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Teaser text */}
          <div className="text-gray-400 group-hover:text-gray-200 mb-6 flex-grow space-y-2 transition-colors duration-300 text-sm lg:text-base">
            {project.teaser
              ? project.teaser.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="transition-colors duration-300 leading-relaxed line-clamp-3">
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

          {/* CTA Button */}
          <div className="inline-flex mt-auto">
            <span className="px-6 py-2.5 text-sm lg:text-base bg-gradient-to-r from-emerald-500 to-cyan-500 group-hover:from-emerald-600 group-hover:to-cyan-600 rounded-lg text-white transition-all duration-300 font-medium shadow-lg group-hover:shadow-emerald-500/25">
              View Project →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
