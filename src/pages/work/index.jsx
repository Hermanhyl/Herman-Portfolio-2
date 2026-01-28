import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Briefcase, BookOpen, PenTool, Play } from 'lucide-react';
import PageTransition from '../../components/pageTransition';
import ScrollReveal from '../../components/scrollReveal';
import OptimizedImage from '../../components/optimizedImage';
import ProjectCard from '../../components/projectCard';
import AnimationCard from '../../components/animationCard';
import IllustrationLightbox from '../../components/illustrationLightbox';
import { projects } from '../../data/projects/projects';
import { illustrations, illustrationCategories } from '../../data/illustrations';
import { animations } from '../../data/animations';

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
 * Work page displaying all projects with toggle between Case Studies, Articles, Illustrations, Animations
 */
function Work() {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();

  // Illustration-specific state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Derive active view from URL params
  const activeView = searchParams.get('view') || 'case-studies';

  const setActiveView = (view) => {
    if (view === 'case-studies') {
      setSearchParams({});
    } else {
      setSearchParams({ view });
    }
  };

  const filteredIllustrations = useMemo(() => {
    if (selectedCategory === 'All') return illustrations;
    return illustrations.filter((ill) => ill.category === selectedCategory);
  }, [selectedCategory]);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  // Toggle button config
  const viewButtons = [
    { id: 'case-studies', label: t('work.caseStudies'), icon: Briefcase },
    { id: 'articles', label: t('projects.articles'), icon: BookOpen },
    { id: 'illustrations', label: t('projects.illustrations'), icon: PenTool },
    { id: 'animations', label: t('projects.animations'), icon: Play },
  ];

  return (
    <PageTransition>
      <div className="bg-gradient-to-b from-black via-gray-900 to-black min-h-screen">
        {/* Hero Section */}
        <section className="relative px-4 sm:px-6 lg:px-8 pt-32 pb-8">
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

        {/* Toggle Buttons */}
        <section className="px-4 sm:px-6 lg:px-8 pb-12">
          <ScrollReveal>
            <div className="flex justify-center">
              <div className="relative group">
                {/* Animated glow effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 via-cyan-500 to-purple-500 rounded-2xl blur-lg opacity-50 animate-glow-pulse" />
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-xl blur-md opacity-30 animate-glow-pulse-delayed" />

                <div className="relative inline-flex flex-col sm:flex-row bg-gray-900/95 border-2 border-emerald-500/50 rounded-xl p-1.5 backdrop-blur-sm w-full sm:w-auto shadow-lg shadow-emerald-500/20">
                  {viewButtons.map((btn) => {
                    const Icon = btn.icon;
                    return (
                      <button
                        key={btn.id}
                        onClick={() => setActiveView(btn.id)}
                        aria-pressed={activeView === btn.id}
                        className={`flex items-center justify-center gap-2 px-3 sm:px-5 py-3 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base cursor-pointer ${
                          activeView === btn.id
                            ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/30'
                            : 'text-gray-400 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                        {btn.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Case Studies View */}
        {activeView === 'case-studies' && (
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
        )}

        {/* Articles View */}
        {activeView === 'articles' && (
          <section className="relative px-4 sm:px-6 lg:px-8 xl:px-12 pb-20 flex flex-col items-center w-full mx-auto" style={{ maxWidth: '1600px' }}>
            <div className="w-full mb-6 text-center">
              <p className="text-gray-400">
                {projects.length} {t('projects.projectsLabel')}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 w-full">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        )}

        {/* Illustrations View */}
        {activeView === 'illustrations' && (
          <section className="relative px-4 sm:px-6 lg:px-8 xl:px-12 pb-20 flex flex-col items-center w-full mx-auto" style={{ maxWidth: '1600px' }}>
            {/* Category Filter */}
            <div className="w-full mb-6 sm:mb-8 px-2 sm:px-0">
              <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 md:gap-3">
                {illustrationCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-lg font-medium text-xs sm:text-sm md:text-base transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg'
                        : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white'
                    }`}
                    aria-pressed={selectedCategory === category}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <div className="text-center mt-3 sm:mt-4 text-gray-400 text-xs sm:text-sm">
                {selectedCategory === 'All'
                  ? `${illustrations.length} ${t('illustrations.illustrationsCount')}`
                  : `${filteredIllustrations.length} ${t('illustrations.illustrationsIn')} ${selectedCategory}`}
              </div>
            </div>

            {/* Illustration Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3 md:gap-4 w-full px-1 sm:px-0">
              {filteredIllustrations.map((illustration, index) => (
                <button
                  key={illustration.id}
                  onClick={() => openLightbox(index)}
                  onContextMenu={(e) => e.preventDefault()}
                  aria-label={`View ${illustration.title} in fullscreen`}
                  className="group relative aspect-square rounded-lg sm:rounded-xl overflow-hidden cursor-pointer bg-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-black select-none"
                >
                  <img
                    src={illustration.src}
                    alt={illustration.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 pointer-events-none"
                    draggable="false"
                    loading="lazy"
                  />
                  {/* Watermark */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="text-white/10 text-[8px] sm:text-xs md:text-sm font-bold rotate-[-20deg] select-none">
                      Herman Hylland
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2 sm:p-3 md:p-4">
                    <span className="text-white font-medium text-[10px] sm:text-xs md:text-sm line-clamp-2">{illustration.title}</span>
                  </div>
                  <div className="absolute inset-0 ring-2 ring-emerald-400/0 group-hover:ring-emerald-400/50 rounded-lg sm:rounded-xl transition-all duration-300" />
                </button>
              ))}
            </div>

            {/* Lightbox */}
            <IllustrationLightbox
              illustrations={filteredIllustrations}
              currentIndex={lightboxIndex}
              isOpen={lightboxOpen}
              onClose={() => setLightboxOpen(false)}
              onNavigate={setLightboxIndex}
            />
          </section>
        )}

        {/* Animations View */}
        {activeView === 'animations' && (
          <section className="relative px-4 sm:px-6 lg:px-8 xl:px-12 pb-20 flex flex-col items-center w-full mx-auto" style={{ maxWidth: '1600px' }}>
            {animations.length > 0 ? (
              <>
                <div className="w-full mb-6 text-center">
                  <p className="text-gray-400">
                    {animations.length} {t('animations.animationsCount')}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 w-full">
                  {animations.map((animation) => (
                    <AnimationCard key={animation.id} animation={animation} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-16">
                <div className="animated-border backdrop-blur-md bg-white/10 p-8 rounded-2xl inline-block">
                  <Play className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">{t('animations.comingSoon')}</h3>
                  <p className="text-gray-400 max-w-md">
                    {t('animations.comingSoonDesc')}
                  </p>
                </div>
              </div>
            )}
          </section>
        )}
      </div>
    </PageTransition>
  );
}

export default Work;
