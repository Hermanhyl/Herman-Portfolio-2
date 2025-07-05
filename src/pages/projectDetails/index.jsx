import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../../data/projects/projects";
import { useState } from "react";

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const project = projects.find((p) => p.id === id);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!project) {
    return <div className="p-8 text-center text-red-500">Project not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8 gap-4 md:gap-0">
        <h2 className="text-2xl md:text-4xl font-bold text-white">{project.title}</h2>
        <button
          onClick={handleCopyLink}
          className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-md text-sm cursor-pointer whitespace-nowrap"
        >
          {copied ? "Link Copied!" : "Copy Link"}
        </button>
      </div>

      {project.authers && (
        <p className="text-gray-400 text-sm md:text-base pb-5">
          <span className="font-semibold text-white">Code Authors:</span> {project.authers}
        </p>
      )}

      <p className="text-gray-300 text-base md:text-lg mb-8">{project.description}</p>

      <div className="space-y-6 mb-12">
        {project.images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Screenshot ${index + 1}`}
            className="rounded-xl w-full object-cover max-h-[400px] md:max-h-[600px]"
          />
        ))}
      </div>

      {project.article && project.article.length > 0 ? (
        <article className="space-y-10 mb-12">
          {project.article.map((section, index) => (
            <section key={index}>
              <h3 className="text-lg md:text-xl text-white font-bold mb-3">{section.heading}</h3>
              <p className="text-gray-300 text-base md:text-lg whitespace-pre-line">{section.content}</p>
            </section>
          ))}
        </article>
      ) : (
        <p className="text-gray-400 mb-12">No article content available.</p>
      )}

      <div className="mb-12">
        <p className="text-white text-lg md:text-xl font-medium mb-3">
          <strong>Technologies Used:</strong>
        </p>
        {project.technologies && (
          <ul className="list-disc list-inside text-base md:text-lg text-gray-300 space-y-1">
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        )}
      </div>

      <div className="flex flex-wrap gap-4">
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-white whitespace-nowrap"
        >
          Live Demo
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded-md text-white whitespace-nowrap"
        >
          GitHub Repo
        </a>
        <a
          href={project.figma}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded-md text-white whitespace-nowrap"
        >
          Figma File
        </a>
        <button
          onClick={() => navigate("/")}
          className="ml-auto bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-md text-white cursor-pointer whitespace-nowrap"
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
}

export default ProjectDetail;
