import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import PageTransition from '../../components/pageTransition';
import ScrollReveal from '../../components/scrollReveal';
import OptimizedImage from '../../components/optimizedImage';
import { projects } from '../../data/projects/projects';

// Map project IDs to their case study paths
const caseStudyPaths = {
  'project1': '/case-study/brannvrn',
  'project-gonefishing': '/case-study/gonefishing',
  'project2': '/case-study/hobbyist',
  'project3': '/case-study/holidaze',
  'project4': '/case-study/auction',
  'project-timer-planner': '/case-study/timer-planner',
  'project-pia-salary': '/case-study/pia-salary',
  'project5': '/case-study/clicketycart',
  'project6': '/case-study/community-science-museum',
  'project7': '/case-study/gamehub',
};

/**
 * Work card component with alternating layout
 */
function WorkCard({ project, index }) {
  const { t } = useTranslation();
  const isReversed = index % 2 === 1;

  // Get the first image from the images array
  const projectImage = project.images?.[0] || '/placeholder.jpg';

  // Get the case study path for this project
  const caseStudyPath = caseStudyPaths[project.id] || `/case-study/${project.id}`;

  return (
    <ScrollReveal delay={index * 100}>
      <Link
        to={caseStudyPath}
        className="group block"
        aria-label={`View case study for ${project.title}`}
      >
        <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6 md:gap-8 lg:gap-12 items-center bg-white/5 hover:bg-white/[0.07] border border-white/10 hover:border-emerald-500/30 rounded-2xl p-6 md:p-8 lg:p-10 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/5 hover:-translate-y-1`}>
          {/* Image Side */}
          <div className="w-full md:w-1/2 lg:w-[55%] flex-shrink-0">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-800">
              <OptimizedImage
                src={projectImage}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full md:w-1/2 lg:w-[45%] space-y-5">
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.technologies?.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="text-sm font-medium text-emerald-400 bg-emerald-500/10 px-4 py-1.5 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
              {project.title}
            </h3>

            {/* Teaser/Description */}
            <p className="text-base md:text-lg text-gray-300 leading-relaxed line-clamp-4">
              {project.teaser || project.description}
            </p>

            {/* CTA */}
            <div className="pt-3">
              <span className="inline-flex items-center gap-2 text-lg text-emerald-400 font-semibold group-hover:text-emerald-300 transition-colors duration-300">
                {t('featuredProjects.viewCaseStudy')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </ScrollReveal>
  );
}

/**
 * Work page displaying all projects in alternating card layout
 */
function Work() {
  const { t } = useTranslation();

  return (
    <PageTransition>
      <div className="bg-gradient-to-b from-black via-gray-900 to-black min-h-screen">
        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500 text-transparent bg-clip-text pb-4">
                {t('work.title')}
              </h1>
              <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
                {t('work.description')}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="relative px-4 sm:px-6 lg:px-8 xl:px-12 pb-20 flex flex-col items-center w-full mx-auto" style={{ maxWidth: '1200px' }}>
          <div className="w-full space-y-8 md:space-y-12">
            {projects.map((project, index) => (
              <WorkCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
}

export default Work;
