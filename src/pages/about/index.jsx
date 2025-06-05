function About() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-b from-black via-gray-900 to-black px-4 py-20 text-white">
      <div className="w-full max-w-3xl backdrop-blur-md bg-white/10 p-8 rounded-2xl border border-white/20 shadow-lg text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500 text-transparent bg-clip-text">
          About Me
        </h1>
        <p className="text-lg md:text-xl text-gray-100 mb-4">
          Hi, I'm a 27-year-old aspiring front-end developer and digital designer. This portfolio was created to showcase the projects I’ve worked on during my two years of study.
        </p>
        <p className="text-lg md:text-xl text-gray-100 mb-4">
          The projects reflect not only my technical growth, but also how I’ve evolved creatively—learning to turn ideas into accessible, interactive, and visually engaging web experiences.
        </p>
        <p className="text-lg md:text-xl text-gray-100 mb-4">
          You'll find a selection of applications, UI concepts, and illustrations that demonstrate my abilities with React, Tailwind CSS, design systems, and user-centered thinking.
        </p>
        <p className="text-lg md:text-xl text-gray-100">
          I'm currently looking for opportunities in front-end development or digital design roles where I can continue to grow, collaborate, and contribute to meaningful projects.
        </p>
      </div>
    </div>
  );
}

export default About;
