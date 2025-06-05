import ProjectCard from "../../components/projectCard";
import { projects } from "../../data/projects/projects";

function Home() {
  return (
    <div className="px-6 pt-40 pb-10 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-10 text-center">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-10 w-full px-16">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Home;


