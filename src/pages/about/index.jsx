import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Code, Palette, Rocket, GraduationCap, Briefcase, Award, Sparkles, Terminal, Layers, Brain, ArrowRight, MapPin, Calendar, FolderKanban, PenTool, Film, BookOpen } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import useDocumentMeta from '../../hooks/useDocumentMeta';
import JsonLd, { personSchema } from '../../components/jsonLd';
import OptimizedImage from '../../components/optimizedImage';
import ScrollReveal from '../../components/scrollReveal';
import GradientButton from '../../components/gradientButton';
import CVDownloadButton from '../../components/cvDownloadButton';
import AnimatedCounter from '../../components/animatedCounter';
import AnimatedSkillBar from '../../components/animatedSkillBar';
import ProjectsButton from '../../components/projectsButton';
import TimelineLine from '../../components/timelineLine';
import { fadeUp, staggerContainer, viewportOnce } from '../../utils/motion';

// Skills data (not translatable - technical terms).
// All bars use a unified accent fill — differentiation comes from the
// level value, not from rainbow color coding.
const SKILL_BAR_COLOR = 'from-accent to-accent-soft';
const skills = [
  { name: 'React', level: 90, color: SKILL_BAR_COLOR },
  { name: 'JavaScript', level: 85, color: SKILL_BAR_COLOR },
  { name: 'Tailwind CSS', level: 92, color: SKILL_BAR_COLOR },
  { name: 'HTML/CSS', level: 95, color: SKILL_BAR_COLOR },
  { name: 'Figma / UI Design', level: 88, color: SKILL_BAR_COLOR },
  { name: 'API Integration', level: 80, color: SKILL_BAR_COLOR },
];

function About() {
  const { t } = useTranslation();
  const timelineRef = useRef(null);

  useDocumentMeta({
    title: 'About Me',
    description: 'Learn about Herman Hylland - a frontend developer and UI/UX designer with 2+ years of experience building modern web applications with React and Tailwind CSS.',
    url: 'https://portfolio-herman-hylland.netlify.app/about'
  });

  // Stats data - using translations
  const stats = [
    { icon: Award, value: '2+', label: t('about.stats.yearsFrontend') },
    { icon: Code, value: '10+', label: t('about.stats.projectsBuilt') },
    { icon: Palette, value: '3+', label: t('about.stats.yearsDesign') },
    { icon: GraduationCap, value: '2', label: t('about.stats.degrees') },
  ];

  // Skill categories - using translations.
  // Unified on-palette treatment across all three cards; the lucide icon
  // (Terminal / Layers / Brain) provides visual distinction.
  const skillCategories = [
    {
      title: t('about.skillCategories.development'),
      icon: Terminal,
      skills: ['React', 'JavaScript', 'TypeScript', 'Next.js', 'Tailwind CSS', 'HTML/CSS', 'REST APIs']
    },
    {
      title: t('about.skillCategories.design'),
      icon: Layers,
      skills: ['UI/UX Design', 'Figma', 'Adobe Suite', 'Digital Illustration', '3D & Animation']
    },
    {
      title: t('about.skillCategories.aiTools'),
      icon: Brain,
      skills: ['Claude API', 'OpenAI API', 'AI Integration', 'Prompt Engineering', 'Git/GitHub']
    }
  ];

  // Timeline data - using translations.
  // Order: most recent first. Foundever ended in 2026 (no longer current).
  const timeline = [
    {
      year: '2026',
      title: t('about.timeline.hubroUx'),
      company: 'Hubro Digital',
      description: t('about.timeline.hubroUxDesc'),
      icon: Briefcase,
      type: 'work'
    },
    {
      year: 'Feb 2025 - 2026',
      title: t('about.timeline.customerService'),
      company: 'Foundever',
      description: t('about.timeline.customerServiceDesc'),
      icon: Briefcase,
      type: 'work'
    },
    {
      year: 'Aug 2023 - May 2025',
      title: t('about.timeline.frontendDev'),
      company: 'Noroff School of Technology',
      description: t('about.timeline.frontendDevDesc'),
      icon: GraduationCap,
      type: 'education'
    },
    {
      year: 'Sep 2022 - Mar 2023',
      title: t('about.timeline.visualDesigner'),
      company: 'Nanopow',
      description: t('about.timeline.visualDesignerDesc'),
      icon: Palette,
      type: 'work'
    },
    {
      year: 'Aug 2019 - May 2022',
      title: t('about.timeline.bachelorAnim'),
      company: 'Høgskolen i Innlandet',
      description: t('about.timeline.bachelorAnimDesc'),
      icon: GraduationCap,
      type: 'education'
    },
  ];

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-black via-gray-900 to-black px-4 py-20 text-white">
      {/* Person structured data — the About page is the canonical
          source of truth for who Herman is, so the schema sits
          here as well as the lighter copy on the homepage. */}
      <JsonLd data={personSchema} />
      <div className="max-w-6xl mx-auto space-y-20">

        {/* Hero Section */}
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Profile Image with rotating border */}
            <div className="flex-shrink-0 relative group">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500 animate-spin-slow opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0.5 rounded-full bg-gray-900"></div>
              <OptimizedImage
                src="/Profil/Bruk_denne.jpg"
                alt="Herman Hylland - Front-End Developer"
                eager={true}
                className="relative w-52 h-52 md:w-64 md:h-64 object-cover rounded-full"
              />
            </div>

            {/* Hero Text */}
            <div className="flex-1 text-center lg:text-left space-y-6">
              <div className="space-y-2">
                <p className="text-emerald-400 font-medium flex items-center justify-center lg:justify-start gap-2">
                  <MapPin className="w-4 h-4" />
                  {t('about.location')}
                </p>
                <h1 className="font-display text-bone text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.03em] leading-[1.05]">
                  Herman <span className="italic text-accent">Hylland</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300">
                  {t('about.role')}
                </p>
              </div>

              <p className="text-gray-400 text-lg max-w-xl">
                {t('about.heroDescription')}
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start relative z-20">
                <CVDownloadButton />
                <ProjectsButton />
                <GradientButton to="/contact" variant="secondary" icon={ArrowRight}>
                  {t('about.getInTouch')}
                </GradientButton>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Stats Section */}
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 hover:border-emerald-500/30 p-6 rounded-2xl text-center transition-all duration-300 hover:transform hover:scale-105 hover:bg-white/10"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-emerald-400 group-hover:scale-110 transition-transform" />
              <div className="font-display italic text-accent text-5xl md:text-6xl font-bold tracking-tight mb-1 tabular-nums leading-none">
                <AnimatedCounter value={stat.value} />
              </div>
              <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* My Story Section */}
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 md:p-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-emerald-500/20 rounded-lg">
                  <Rocket className="w-6 h-6 text-emerald-400" />
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">{t('about.myStory')}</h2>
              </div>

              <motion.div
                variants={staggerContainer(0.15)}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="space-y-5 text-gray-300 text-lg leading-[1.75] max-w-[68ch]"
              >
                <motion.p
                  variants={fadeUp}
                  dangerouslySetInnerHTML={{
                    __html: t('about.storyP1')
                      .replace(/<highlight>/g, '<span class="text-white font-medium">')
                      .replace(/<\/highlight>/g, '</span>')
                      .replace(/<accent1>/g, '<span class="accent-underline accent-emerald">')
                      .replace(/<\/accent1>/g, '</span>')
                  }}
                />
                <motion.p
                  variants={fadeUp}
                  dangerouslySetInnerHTML={{
                    __html: t('about.storyP2')
                      .replace(/<highlight>/g, '<span class="text-white font-medium">')
                      .replace(/<\/highlight>/g, '</span>')
                      .replace(/<accent2>/g, '<span class="accent-underline accent-cyan">')
                      .replace(/<\/accent2>/g, '</span>')
                  }}
                />
                <motion.p
                  variants={fadeUp}
                  dangerouslySetInnerHTML={{
                    __html: t('about.storyP3')
                      .replace(/<accent1>/g, '<span class="accent-underline accent-emerald">')
                      .replace(/<\/accent1>/g, '</span>')
                      .replace(/<accent2>/g, '<span class="accent-underline accent-cyan">')
                      .replace(/<\/accent2>/g, '</span>')
                  }}
                />
              </motion.div>

              {/* Explore My Work Buttons — unified on-palette treatment.
                  Visual differentiation comes from the four lucide icons,
                  not from color. */}
              <div className="pt-6 border-t border-border mt-8">
                <h3 className="text-lg font-semibold text-bone mb-4">{t('about.exploreMyWork')}</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    { to: '/work', icon: Briefcase, label: t('about.myWork') },
                    { to: '/work?view=articles', icon: BookOpen, label: t('about.myArticles') },
                    { to: '/work?view=illustrations', icon: PenTool, label: t('about.myIllustrations') },
                    { to: '/work?view=animations', icon: Film, label: t('about.myAnimations') },
                  ].map(({ to, icon: Icon, label }) => (
                    <Link
                      key={to}
                      to={to}
                      className="group inline-flex items-center gap-3 bg-ink-elevated hover:bg-ink-elevated-2 border border-border hover:border-accent px-5 py-3 rounded-xl transition-colors duration-300"
                    >
                      <div className="p-2 bg-accent/15 group-hover:bg-accent/25 rounded-lg transition-colors">
                        <Icon className="w-5 h-5 text-accent" />
                      </div>
                      <span className="text-bone font-medium">{label}</span>
                      <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Skills & Expertise */}
        <div className="space-y-8">
          <ScrollReveal>
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/50 px-4 py-2 rounded-full">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-purple-300 text-sm font-medium">{t('about.whatIWorkWith')}</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">{t('about.skillsExpertise')}</h2>
            </div>
          </ScrollReveal>

          {/* Skill Categories — unified on-palette treatment. */}
          <div className="grid md:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="group h-full relative bg-ink-elevated p-6 rounded-2xl border border-border hover:border-accent transition-colors duration-300">
                    <div className="inline-flex p-3 mb-4 rounded-xl bg-accent/15 group-hover:bg-accent/25 transition-colors">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>

                    <h3 className="font-display text-2xl font-bold tracking-tight mb-4 text-bone">
                      {category.title}
                    </h3>

                    <ul className="space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <li key={skillIndex} className="flex items-center gap-2 text-bone-muted group-hover:text-bone transition-colors">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Skill Bars */}
          <ScrollReveal>
            <div className="bg-ink-elevated border border-border rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-accent/15 rounded-lg">
                  <Code className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-2xl font-bold tracking-tight text-bone">{t('about.proficiencyLevels')}</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                {skills.map((skill, index) => (
                  <AnimatedSkillBar
                    key={index}
                    name={skill.name}
                    level={skill.level}
                    color={skill.color}
                    delay={index * 100}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          <ScrollReveal>
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 bg-cyan-500/20 border border-cyan-500/50 px-4 py-2 rounded-full">
                <Calendar className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-300 text-sm font-medium">{t('about.careerPath')}</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">{t('about.experienceEducation')}</h2>
            </div>
          </ScrollReveal>

          <div ref={timelineRef} className="relative">
            <TimelineLine parentRef={timelineRef} />

            <div className="space-y-6 md:space-y-8">
              {timeline.map((item, index) => {
                const isLeft = index % 2 === 0;
                const Icon = item.icon;

                // Uniform on-palette treatment across every card.
                // Previously work entries were tangerine and education
                // entries were warm-muted (the remapped purple), which
                // made the column read as hit-or-miss orange/grey and
                // signaled "education is less important". Differentiation
                // now lives entirely in the lucide icon choice
                // (Briefcase / GraduationCap / Palette) carried in the
                // timeline data, which already distinguishes type
                // without dropping any card to a muted treatment.

                return (
                  <ScrollReveal key={index} delay={index * 100}>
                    {/* Mobile layout - icon above card */}
                    <div className="md:hidden">
                      <div className="flex flex-col items-center">
                        {/* Icon */}
                        <div className="p-3 rounded-full border-2 bg-emerald-500/20 border-emerald-500 mb-3">
                          <Icon className="w-5 h-5 text-emerald-400" />
                        </div>
                        {/* Connecting line */}
                        <div className="w-px h-4 bg-emerald-500/50"></div>
                        {/* Card */}
                        <div className="w-full group bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-emerald-500/20 hover:border-emerald-500/40 rounded-2xl p-5 transition-all duration-300">
                          <span className="block font-display italic tabular-nums text-2xl md:text-3xl tracking-tight mb-2 leading-none text-accent">
                            {item.year}
                          </span>
                          <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                          <p className="font-medium mb-2 text-sm text-emerald-400">{item.company}</p>
                          <p className="text-gray-400 text-sm">{item.description}</p>
                        </div>
                      </div>
                    </div>

                    {/* Desktop layout - alternating sides */}
                    <div className={`hidden md:flex relative items-start ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
                      {/* Content */}
                      <div className={`flex-1 w-1/2 ${isLeft ? 'pr-12 text-right' : 'pl-12'}`}>
                        <div className="group bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-emerald-500/20 hover:border-emerald-500/40 rounded-2xl p-6 transition-all duration-300">
                          <span className="block font-display italic tabular-nums text-2xl md:text-3xl tracking-tight mb-2 leading-none text-accent">
                            {item.year}
                          </span>
                          <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                          <p className="font-medium mb-2 text-emerald-400">{item.company}</p>
                          <p className="text-gray-400 text-sm">{item.description}</p>
                        </div>
                      </div>

                      {/* Icon */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                        <div className="p-3 rounded-full border-2 bg-emerald-500/20 border-emerald-500 transition-transform hover:scale-110">
                          <Icon className="w-5 h-5 text-emerald-400" />
                        </div>
                      </div>

                      {/* Spacer for alternating layout */}
                      <div className="flex-1 w-1/2"></div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/10 via-cyan-500/5 to-purple-500/10 p-10 md:p-14 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.1),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(139,92,246,0.1),transparent_50%)]"></div>

            <div className="relative space-y-6">
              <div className="inline-flex p-4 bg-white/10 rounded-2xl mb-2">
                <Briefcase className="w-10 h-10 text-emerald-400" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold">{t('about.ctaTitle')}</h2>

              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                {t('about.ctaDescription')}
              </p>

              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <GradientButton to="/contact" icon={ArrowRight} size="lg">
                  {t('about.getInTouch')}
                </GradientButton>
                <GradientButton to="/work" variant="secondary" size="lg">
                  {t('about.viewMyWork')}
                </GradientButton>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}

export default About;
