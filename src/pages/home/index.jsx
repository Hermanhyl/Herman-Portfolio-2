import Hero from "../../components/heroSection";
import ProjectCard from "../../components/projectCard";
import { projects } from "../../data/projects/projects";


function Home() {
  return (
    <>
    <div>
      <Hero />
    </div>

    <div className="px-6 pt-20 pb-10 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-10 w-full ">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
    </>
  );
}

export default Home;


