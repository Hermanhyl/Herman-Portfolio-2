import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
   <div className="relative w-full bg-gray-800 rounded-2xl p-4 shadow-md hover:shadow-lg transition flex flex-col group overflow-hidden glow-border">
      {/* Animated glowing border */}
      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-emerald-400 via-pink-500 to-purple-500 blur-lg opacity-0 group-hover:opacity-100 animate-glow-spin pointer-events-none z-0"></div>

      {/* Card content */}
      <div className="relative z-10">
        <div className="w-full h-72 md:h-80 mb-4 overflow-hidden rounded-xl bg-gray-700">
          <img
            src={project.images[0]}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover object-top rounded-xl transition duration-300 ease-in-out"
            decoding="async"
          />
        </div>

        <h3 className="text-xl font-semibold text-white group-hover:text-white transition mb-2">
          {project.title}
        </h3>

        <div className="text-gray-400 group-hover:text-white mb-4 flex-grow space-y-2 transition-colors duration-300">
          {project.teaser
            ? project.teaser.split("\n\n").map((paragraph, index) => (
                <p key={index} className="transition-colors duration-300 group-hover:text-white">
                  {paragraph}
                </p>
              ))
            : (
                <p className="italic text-gray-500 group-hover:text-white transition-colors duration-300">
                  No teaser available.
                </p>
              )
          }
        </div>

        <div className="flex gap-2">
          <Link to={`/project/${project.id}`}>
            <button className="px-5 py-2 text-ld bg-emerald-500 hover:bg-emerald-600 rounded-md text-white cursor-pointer transition duration-200">
              View Project
            </button>
          </Link>
        </div>
      </div>
    </div>

  );
}

export default ProjectCard;
