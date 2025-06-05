import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <div className="w-full bg-gray-800 rounded-2xl p-4 shadow-md hover:shadow-lg transition flex flex-col">
      <div className="w-full h-72 md:h-80 mb-4 overflow-hidden rounded-xl bg-gray-700">
        <img
          src={project.images[0]}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover object-top rounded-xl transition duration-300 ease-in-out"
          decoding="async"
          fetchpriority="high"
        />
      </div>

      <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>

      <div className="text-gray-400 mb-4 flex-grow space-y-2">
        {project.teaser
          ? project.teaser.split("\n\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))
          : <p className="italic text-gray-500">No teaser available.</p>
        }
      </div>

      <div className="flex gap-2">
        <Link to={`/project/${project.id}`}>
          <button className="px-3 py-1 text-sm bg-emerald-500 hover:bg-emerald-600 rounded-md text-white">
            View Project
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
