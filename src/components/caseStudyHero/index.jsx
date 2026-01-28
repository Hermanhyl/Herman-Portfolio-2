import { useTranslation } from 'react-i18next';
import { Users, Building2, Clock, Award } from 'lucide-react';
import OptimizedImage from '../optimizedImage';

/**
 * Case Study Hero Section
 * Displays project title, tagline, key details, and hero image
 */
export default function CaseStudyHero({ project }) {
  const { t } = useTranslation();
  const caseStudy = project?.caseStudy;

  if (!caseStudy) return null;

  const details = [
    { icon: Users, label: t('caseStudy.role'), value: caseStudy.role },
    { icon: Users, label: t('caseStudy.team'), value: caseStudy.team },
    { icon: Building2, label: t('caseStudy.client'), value: caseStudy.client },
    { icon: Clock, label: t('caseStudy.timeline'), value: caseStudy.timeline },
    { icon: Award, label: t('caseStudy.outcome'), value: caseStudy.outcome },
  ].filter(item => item.value);

  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-gray-900" />

      {/* Subtle animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">

          {/* Content Side */}
          <div className="flex-1 space-y-6 text-center lg:text-left">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {caseStudy.tags?.map((tag) => (
                <span
                  key={tag}
                  className="text-sm font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
              {project.title}
            </h1>

            {/* Tagline */}
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {caseStudy.tagline}
            </p>

            {/* Key Details Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 pt-4">
              {details.map((detail, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-lg p-4 text-center lg:text-left"
                >
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-1.5">
                    <detail.icon className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                    <span className="text-sm text-gray-400 uppercase tracking-wider">
                      {detail.label}
                    </span>
                  </div>
                  <p className="text-base text-white font-medium">{detail.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Side */}
          <div className="flex-1 w-full lg:w-auto max-w-xl lg:max-w-none">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
              {/* Gradient border effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 via-cyan-500 to-purple-500 rounded-2xl opacity-50 blur-sm" />

              <div className="relative rounded-2xl overflow-hidden bg-gray-900">
                <OptimizedImage
                  src={caseStudy.heroImage || project.images?.[0]}
                  alt={`${project.title} hero image`}
                  eager={true}
                  className="w-full h-auto aspect-[4/3] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
