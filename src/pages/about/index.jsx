import { Link } from 'react-router-dom';
import { Code, Palette, Rocket, GraduationCap, Briefcase, Award, Sparkles, Terminal, Layers, Brain, ArrowRight, MapPin, Calendar } from 'lucide-react';
import OptimizedImage from '../../components/optimizedImage';
import ScrollReveal from '../../components/scrollReveal';
import GradientButton from '../../components/gradientButton';
import CVDownloadButton from '../../components/cvDownloadButton';
import AnimatedCounter from '../../components/animatedCounter';
import AnimatedSkillBar from '../../components/animatedSkillBar';
import ProjectsButton from '../../components/projectsButton';

// Data
const skills = [
  { name: 'React', level: 90, color: 'from-cyan-400 to-blue-500' },
  { name: 'JavaScript', level: 85, color: 'from-yellow-400 to-orange-400' },
  { name: 'Tailwind CSS', level: 92, color: 'from-cyan-400 to-emerald-400' },
  { name: 'HTML/CSS', level: 95, color: 'from-orange-400 to-red-400' },
  { name: 'Figma / UI Design', level: 88, color: 'from-purple-400 to-pink-400' },
  { name: 'API Integration', level: 80, color: 'from-emerald-400 to-cyan-400' },
];

const stats = [
  { icon: Award, value: '2+', label: 'Years Frontend' },
  { icon: Code, value: '10+', label: 'Projects Built' },
  { icon: Palette, value: '3+', label: 'Years Design' },
  { icon: GraduationCap, value: '2', label: 'Degrees' },
];

const timeline = [
  {
    year: 'Feb 2025 - Present',
    title: 'Customer Service Agent',
    company: 'Foundever',
    description: 'Handling insurance cases via phone support. Using Salesforce CRM for case management.',
    icon: Briefcase,
    type: 'work'
  },
  {
    year: 'Aug 2023 - May 2025',
    title: 'Front-End Development',
    company: 'Noroff School of Technology',
    description: '2-year vocational degree. Specialized in React, JavaScript, and modern web development.',
    icon: GraduationCap,
    type: 'education'
  },
  {
    year: 'Sep 2022 - Mar 2023',
    title: 'Visual Designer',
    company: 'Nanopow',
    description: 'UI/UX design and visual identity. Strategic decisions about color, imagery, and layout.',
    icon: Palette,
    type: 'work'
  },
  {
    year: 'Aug 2019 - May 2022',
    title: 'Bachelor in Animation & Digital Art',
    company: 'Høgskolen i Innlandet',
    description: 'Technical development with concept art, 3D design, and animation.',
    icon: GraduationCap,
    type: 'education'
  },
];

const skillCategories = [
  {
    title: 'Development',
    icon: Terminal,
    gradient: 'from-emerald-400 to-cyan-400',
    bgGradient: 'from-emerald-500/10 to-cyan-500/10',
    borderColor: 'border-emerald-500/30 hover:border-emerald-400/50',
    skills: ['React', 'JavaScript', 'TypeScript', 'Next.js', 'Tailwind CSS', 'HTML/CSS', 'REST APIs']
  },
  {
    title: 'Design',
    icon: Layers,
    gradient: 'from-purple-400 to-pink-400',
    bgGradient: 'from-purple-500/10 to-pink-500/10',
    borderColor: 'border-purple-500/30 hover:border-purple-400/50',
    skills: ['UI/UX Design', 'Figma', 'Adobe Suite', 'Digital Illustration', '3D & Animation']
  },
  {
    title: 'AI & Tools',
    icon: Brain,
    gradient: 'from-cyan-400 to-blue-400',
    bgGradient: 'from-cyan-500/10 to-blue-500/10',
    borderColor: 'border-cyan-500/30 hover:border-cyan-400/50',
    skills: ['Claude API', 'OpenAI API', 'AI Integration', 'Prompt Engineering', 'Git/GitHub']
  }
];

function About() {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-black via-gray-900 to-black px-4 py-20 text-white">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* Hero Section */}
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Profile Image with rotating border */}
            <div className="flex-shrink-0 relative group">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500 animate-spin-slow opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0.5 rounded-full bg-gray-900"></div>
              <OptimizedImage
                src="/profilepicture.jpg"
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
                  Norway / Open to Germany
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500 text-transparent bg-clip-text leading-tight">
                  Herman Hylland
                </h1>
                <p className="text-xl md:text-2xl text-gray-300">
                  Front-End Developer & Digital Designer
                </p>
              </div>

              <p className="text-gray-400 text-lg max-w-xl">
                Bridging technology and art with 2+ years in frontend development and 3+ years in digital design. Creating accessible, interactive web experiences.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start relative z-20">
                <CVDownloadButton />
                <ProjectsButton />
                <GradientButton to="/contact" variant="secondary" icon={ArrowRight}>
                  Get In Touch
                </GradientButton>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Stats Section */}
        <ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 hover:border-emerald-500/30 p-6 rounded-2xl text-center transition-all duration-300 hover:transform hover:scale-105 hover:bg-white/10"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-emerald-400 group-hover:scale-110 transition-transform" />
                <div className="text-3xl md:text-4xl font-bold mb-1 bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text">
                  <AnimatedCounter value={stat.value} />
                </div>
                <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* My Story Section */}
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 md:p-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-emerald-500/20 rounded-lg">
                  <Rocket className="w-6 h-6 text-emerald-400" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">My Story</h2>
              </div>

              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  I'm a <span className="text-white font-medium">27-year-old developer</span> with a unique background bridging technology and art. With a Bachelor's in Animation & Digital Art and a vocational degree in Front-End Development, I bring both technical expertise and creative vision to every project.
                </p>
                <p>
                  Skilled in <span className="text-emerald-400">React, JavaScript, and modern frontend workflows</span>, I combine technical development with user-centered design. My experience spans building responsive web solutions, API integrations, and team-based development.
                </p>
                <p>
                  From designing UI/UX for startups to developing VR training simulations, my work reflects a passion for creating <span className="text-cyan-400">accessible, interactive, and visually engaging</span> digital experiences.
                </p>
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
                <span className="text-purple-300 text-sm font-medium">What I Work With</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Skills & Expertise</h2>
            </div>
          </ScrollReveal>

          {/* Skill Categories */}
          <div className="grid md:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className={`group h-full relative bg-gradient-to-br ${category.bgGradient} p-6 rounded-2xl border ${category.borderColor} transition-all duration-300 hover:transform hover:scale-[1.02]`}>
                    <div className={`inline-flex p-3 mb-4 rounded-xl bg-gradient-to-br ${category.gradient}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <h3 className={`text-xl font-bold mb-4 bg-gradient-to-r ${category.gradient} text-transparent bg-clip-text`}>
                      {category.title}
                    </h3>

                    <ul className="space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <li key={skillIndex} className="flex items-center gap-2 text-gray-300 group-hover:text-gray-200 transition-colors">
                          <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.gradient}`}></span>
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
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-cyan-500/20 rounded-lg">
                  <Code className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold">Proficiency Levels</h3>
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
                <span className="text-cyan-300 text-sm font-medium">Career Path</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Experience & Education</h2>
            </div>
          </ScrollReveal>

          <div className="relative">
            {/* Timeline line - hidden on mobile, shown from md up */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500 via-cyan-500 to-purple-500 opacity-30"></div>

            <div className="space-y-6 md:space-y-8">
              {timeline.map((item, index) => {
                const isLeft = index % 2 === 0;
                const Icon = item.icon;
                const isWork = item.type === 'work';

                return (
                  <ScrollReveal key={index} delay={index * 100}>
                    {/* Mobile layout - icon above card */}
                    <div className="md:hidden">
                      <div className="flex flex-col items-center">
                        {/* Icon */}
                        <div className={`p-3 rounded-full border-2 ${isWork ? 'bg-emerald-500/20 border-emerald-500' : 'bg-purple-500/20 border-purple-500'} mb-3`}>
                          <Icon className={`w-5 h-5 ${isWork ? 'text-emerald-400' : 'text-purple-400'}`} />
                        </div>
                        {/* Connecting line */}
                        <div className={`w-px h-4 ${isWork ? 'bg-emerald-500/50' : 'bg-purple-500/50'}`}></div>
                        {/* Card */}
                        <div className={`w-full group bg-white/5 hover:bg-white/10 backdrop-blur-sm border ${isWork ? 'border-emerald-500/20 hover:border-emerald-500/40' : 'border-purple-500/20 hover:border-purple-500/40'} rounded-2xl p-5 transition-all duration-300`}>
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${isWork ? 'bg-emerald-500/20 text-emerald-300' : 'bg-purple-500/20 text-purple-300'}`}>
                            {item.year}
                          </span>
                          <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                          <p className={`font-medium mb-2 text-sm ${isWork ? 'text-emerald-400' : 'text-purple-400'}`}>{item.company}</p>
                          <p className="text-gray-400 text-sm">{item.description}</p>
                        </div>
                      </div>
                    </div>

                    {/* Desktop layout - alternating sides */}
                    <div className={`hidden md:flex relative items-start ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
                      {/* Content */}
                      <div className={`flex-1 w-1/2 ${isLeft ? 'pr-12 text-right' : 'pl-12'}`}>
                        <div className={`group bg-white/5 hover:bg-white/10 backdrop-blur-sm border ${isWork ? 'border-emerald-500/20 hover:border-emerald-500/40' : 'border-purple-500/20 hover:border-purple-500/40'} rounded-2xl p-6 transition-all duration-300`}>
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${isWork ? 'bg-emerald-500/20 text-emerald-300' : 'bg-purple-500/20 text-purple-300'}`}>
                            {item.year}
                          </span>
                          <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                          <p className={`font-medium mb-2 ${isWork ? 'text-emerald-400' : 'text-purple-400'}`}>{item.company}</p>
                          <p className="text-gray-400 text-sm">{item.description}</p>
                        </div>
                      </div>

                      {/* Icon */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                        <div className={`p-3 rounded-full border-2 ${isWork ? 'bg-emerald-500/20 border-emerald-500' : 'bg-purple-500/20 border-purple-500'} transition-transform hover:scale-110`}>
                          <Icon className={`w-5 h-5 ${isWork ? 'text-emerald-400' : 'text-purple-400'}`} />
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

              <h2 className="text-3xl md:text-4xl font-bold">Let's Build Something Amazing</h2>

              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                I'm actively looking for frontend development or digital design opportunities where I can grow, collaborate, and contribute to meaningful projects.
              </p>

              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <GradientButton to="/contact" icon={ArrowRight} size="lg">
                  Get In Touch
                </GradientButton>
                <GradientButton to="/#projects" variant="secondary" size="lg">
                  View My Work
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
