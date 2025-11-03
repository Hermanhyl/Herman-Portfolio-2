import { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Code2, Palette } from 'lucide-react';
import OptimizedImage from '../optimizedImage';

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Herman Hylland';

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100); // Speed of typing (100ms per character)

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 lg:gap-20">

          {/* Text Section */}
          <div className="flex-1 text-center md:text-left space-y-6 md:space-y-8">
            {/* Badges */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/30 to-cyan-500/30 border-2 border-emerald-400/60 px-4 py-2 rounded-full backdrop-blur-sm shadow-lg shadow-emerald-500/20 transform transition-all duration-300 hover:scale-105">
                <Sparkles className="w-4 h-4 text-emerald-300 animate-pulse" />
                <span className="text-emerald-100 text-sm md:text-base font-bold">Front-End Developer & Digital Designer</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/30 to-cyan-500/30 border-2 border-emerald-400/60 px-4 py-2 rounded-full backdrop-blur-sm shadow-lg shadow-emerald-500/20 transform transition-all duration-300 hover:scale-105">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
                </span>
                <span className="text-emerald-100 text-sm md:text-base font-bold">Available for Work</span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              <span className="text-white">Hi, I'm </span>
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500 text-transparent bg-clip-text whitespace-nowrap">
                {displayedText}
                <span className="animate-pulse">|</span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto md:mx-0">
              I create beautiful, accessible, and user-friendly web experiences. Combining technical skills with creative design to bring ideas to life.
            </p>

            {/* Key Points */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start text-gray-400">
              <div className="flex items-center gap-2">
                <Code2 className="w-5 h-5 text-emerald-400" />
                <span>React & Modern JS</span>
              </div>
              <div className="flex items-center gap-2">
                <Palette className="w-5 h-5 text-purple-400" />
                <span>UI/UX Design</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Let's Work Together
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/about"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative group">
              {/* Glowing effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>

              {/* Profile Image */}
              <OptimizedImage
                src="/profilepicture.jpg"
                alt="Herman Hylland"
                eager={true}
                className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-2xl transform transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Scroll indicator - hidden on small screens to avoid overlap with profile image */}
        <div className="hidden md:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 flex-col items-center gap-2 animate-bounce">
          <span className="text-gray-400 text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-emerald-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
