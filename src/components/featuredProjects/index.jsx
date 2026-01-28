import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ChevronRight, BookOpen } from 'lucide-react';
import OptimizedImage from '../optimizedImage';
import ScrollReveal from '../scrollReveal';

/**
 * Single featured project card with alternating layout
 */
function FeaturedProjectCard({ project, index }) {
  const { t } = useTranslation();
  const isReversed = index % 2 === 1;

  return (
    <ScrollReveal delay={index * 100}>
      <Link
        to={project.path || `/project/${project.id}`}
        className="group block"
        aria-label={`View case study for ${project.title}`}
      >
        <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6 md:gap-8 lg:gap-12 items-center bg-white/5 hover:bg-white/[0.07] border border-white/10 hover:border-emerald-500/30 rounded-2xl p-6 md:p-8 lg:p-10 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/5 hover:-translate-y-1`}>
          {/* Image Side */}
          <div className="w-full md:w-1/2 lg:w-[55%] flex-shrink-0">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-800">
              <OptimizedImage
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full md:w-1/2 lg:w-[45%] space-y-4">
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
              {project.title}
            </h3>

            {/* Tagline */}
            <p className="text-lg md:text-xl text-cyan-400 font-medium">
              {project.tagline}
            </p>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed line-clamp-3">
              {project.description}
            </p>

            {/* CTA */}
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 text-emerald-400 font-semibold group-hover:text-emerald-300 transition-colors duration-300">
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
 * Featured projects section with full-width alternating cards
 */
export default function FeaturedProjects() {
  const { t } = useTranslation();

  // Featured projects data with custom content for this section
  const featuredProjects = [
    {
      id: 'brannvrn',
      path: '/case-study/brannvrn',
      title: 'BrannVRn',
      tagline: t('featuredProjects.brannvrn.tagline'),
      description: t('featuredProjects.brannvrn.description'),
      image: '/BrannVRn/Thumbnail/HighresScreenshot00005.png',
      tags: ['UX Design', 'User Research', 'VR'],
    },
    {
      id: 'hobbyist',
      path: '/case-study/hobbyist',
      title: 'Hobbyist',
      tagline: t('featuredProjects.hobbyist.tagline'),
      description: t('featuredProjects.hobbyist.description'),
      image: '/hobbyist.jpg',
      tags: ['UX Design', 'Frontend Development', 'React'],
    },
    {
      id: 'project-gonefishing',
      path: '/case-study/gonefishing',
      title: 'GoneFishing',
      tagline: t('featuredProjects.gonefishing.tagline'),
      description: t('featuredProjects.gonefishing.description'),
      image: '/gonefishing.png',
      tags: ['UX Design', 'Full-stack Development', 'PWA'],
    },
  ];

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 xl:px-12 py-20 flex flex-col items-center w-full mx-auto" style={{ maxWidth: '1200px' }}>
      {/* Section Header */}
      <ScrollReveal className="w-full mb-12 md:mb-16">
        <div className="text-center space-y-4">
          <span className="inline-block text-sm font-semibold text-emerald-400 tracking-wider uppercase">
            {t('featuredProjects.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            {t('featuredProjects.title')}
          </h2>
        </div>
      </ScrollReveal>

      {/* Project Cards */}
      <div className="w-full space-y-8 md:space-y-12">
        {featuredProjects.map((project, index) => (
          <FeaturedProjectCard
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </div>

      {/* View All Projects Link */}
      <ScrollReveal className="mt-12 md:mt-16">
        <Link
          to="/work"
          className="group inline-flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors duration-300"
        >
          <BookOpen className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          <span className="text-lg font-medium bg-gradient-to-r from-gray-400 via-emerald-300 to-gray-400 bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer">{t('featuredProjects.viewAll')}</span>
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </ScrollReveal>
    </section>
  );
}
