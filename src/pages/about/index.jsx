import { Code, Palette, Rocket, GraduationCap, Briefcase, Download, Award, Target } from 'lucide-react';
import profileImage from '../../../public/profileImage.jpg';

function About() {
  const skills = [
    { name: 'React', level: 90, color: 'from-blue-400 to-cyan-400' },
    { name: 'JavaScript', level: 75, color: 'from-yellow-400 to-orange-400' },
    { name: 'Tailwind CSS', level: 90, color: 'from-cyan-400 to-blue-500' },
    { name: 'HTML/CSS', level: 95, color: 'from-orange-400 to-red-400' },
    { name: 'Figma / Adobe XD', level: 85, color: 'from-purple-400 to-pink-400' },
    { name: 'Adobe Suite', level: 80, color: 'from-pink-400 to-purple-400' },
    { name: 'API Integration', level: 75, color: 'from-emerald-400 to-cyan-400' },
    { name: 'Visual Studio Code', level: 90, color: 'from-gray-400 to-blue-400' },
  ];

  const stats = [
    { icon: Award, value: '2', label: 'Years Front-End Study' },
    { icon: Code, value: '10+', label: 'Projects Completed' },
    { icon: Palette, value: '3', label: 'Years Design Study' },
  ];

  const timeline = [
    {
      year: 'Feb 2025 - Present',
      title: 'Customer Service Agent - Foundever',
      description: 'Handling insurance cases for electronic devices via phone support. Using Salesforce CRM for case management and documentation.',
      icon: Briefcase,
      color: 'emerald'
    },
    {
      year: 'Aug 2023 - May 2025',
      title: 'Front-End Development Degree',
      description: 'Noroff School of Technology and Digital Media - 2-year vocational education in Front-End Development. Specialized in React, JavaScript, and modern web development workflows.',
      icon: GraduationCap,
      color: 'cyan'
    },
    {
      year: 'Sep 2022 - Mar 2023',
      title: 'Visual Designer - Nanopow',
      description: 'Developed UI/UX design and established visual identity for company website. Made strategic decisions about color palette, imagery, and layout using Squarespace CMS.',
      icon: Palette,
      color: 'purple'
    },
    {
      year: 'Nov 2021 - Jun 2022',
      title: 'Bachelor Thesis - VR Fire Safety Training',
      description: 'Developed interactive VR simulation for fire safety training using Unreal Engine at Sykehuspartner. Focused on realistic scenarios and user experience in high-risk environments.',
      icon: Code,
      color: 'orange'
    },
    {
      year: 'Aug 2019 - May 2022',
      title: 'Bachelor in Animation & Digital Art',
      description: 'Høgskolen i Innlandet - Combined technical development with concept art, 3D design, and animation. Built foundation in visual design and creative problem-solving.',
      icon: GraduationCap,
      color: 'pink'
    },
  ];

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-black via-gray-900 to-black px-4 py-20 text-white">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Header Section with Profile Image */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-shrink-0">
            <div className="animated-border p-1 rounded-full">
              <img
                src={profileImage}
                alt="Profile"
                className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-full"
              />
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500 text-transparent bg-clip-text">
              About Me
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-6">
              Front-End Developer & Digital Designer
            </p>
            <a
              href="/Herman_Hylland_CV.pdf"
              download
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Download className="w-5 h-5" />
              Download CV
            </a>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="animated-border backdrop-blur-md bg-white/10 p-6 rounded-xl text-center transform hover:scale-105 transition-all duration-300">
              <stat.icon className="w-10 h-10 mx-auto mb-3 text-emerald-400" />
              <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text">
                {stat.value}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Introduction */}
        <div className="animated-border backdrop-blur-md bg-white/10 p-8 rounded-2xl">
          <div className="flex items-center gap-3 mb-6">
            <Rocket className="w-7 h-7 text-emerald-400" />
            <h2 className="text-3xl font-bold">My Journey</h2>
          </div>
          <div className="space-y-4 text-gray-100 text-lg">
            <p>
              Hi, I'm a 27-year-old front-end developer with a unique background that bridges technology and art. With a Bachelor's degree in Animation and Digital Art and a recent vocational degree in Front-End Development from Noroff, I bring both technical expertise and creative vision to every project.
            </p>
            <p>
              I'm skilled in React, JavaScript, and modern front-end workflows, combining technical development with user-centered design. My experience includes building responsive web solutions, working with APIs, and contributing to team-based development of digital services. I'm comfortable using AI-assisted coding tools like Claude to enhance productivity and streamline development processes.
            </p>
            <p>
              From designing UI/UX for startups like Nanopow to developing VR training simulations with Unreal Engine, my work reflects a passion for creating accessible, interactive, and visually engaging digital experiences. Each project in this portfolio demonstrates my growth as both a developer and designer.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="animated-border backdrop-blur-md bg-white/10 p-8 rounded-2xl">
          <div className="flex items-center gap-3 mb-6">
            <Code className="w-7 h-7 text-cyan-400" />
            <h2 className="text-3xl font-bold">Technical Skills</h2>
          </div>
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-200">{skill.name}</span>
                  <span className="text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="animated-border backdrop-blur-md bg-white/10 p-8 rounded-2xl">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-7 h-7 text-purple-400" />
            <h2 className="text-3xl font-bold">Education & Experience</h2>
          </div>
          <div className="space-y-6">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className={`p-3 rounded-full bg-${item.color}-500/20 border-2 border-${item.color}-500 group-hover:scale-110 transition-transform`}>
                    <item.icon className={`w-6 h-6 text-${item.color}-400`} />
                  </div>
                  {index !== timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-gradient-to-b from-gray-600 to-transparent mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div className="text-sm font-semibold text-gray-400 mb-1">{item.year}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What I'm Looking For */}
        <div className="animated-border backdrop-blur-md bg-white/10 p-8 rounded-2xl text-center">
          <Briefcase className="w-12 h-12 mx-auto mb-4 text-emerald-400" />
          <h2 className="text-3xl font-bold mb-4">Looking Forward</h2>
          <p className="text-lg text-gray-100 max-w-2xl mx-auto">
            I'm currently looking for opportunities in front-end development or digital design roles where I can continue to grow, collaborate, and contribute to meaningful projects. Let's build something amazing together!
          </p>
          <a
            href="/contact"
            className="inline-block mt-6 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
