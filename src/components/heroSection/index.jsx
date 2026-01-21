import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Github, Linkedin, Mail, Instagram } from 'lucide-react';
import OptimizedImage from '../optimizedImage';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden pt-20 pb-28 md:pb-24 px-4 sm:px-6 lg:px-8">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">

          {/* Text Section */}
          <div className="flex-1 min-w-0 text-center md:text-left space-y-5 md:space-y-6">
            {/* Available badge */}
            <div className="flex justify-center md:justify-start">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/30 to-cyan-500/30 border-2 border-emerald-400/60 px-4 py-2 rounded-full backdrop-blur-sm shadow-lg shadow-emerald-500/20 transform transition-all duration-300 hover:scale-105">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
                </span>
                <span className="text-emerald-100 text-sm md:text-base font-bold">{t('hero.available')}</span>
              </div>
            </div>

            {/* Primary Headline - Role/Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500 text-transparent bg-clip-text">
                {t('hero.headline')}
              </span>
            </h1>

            {/* Subheadline - Value Proposition */}
            <p className="text-xl sm:text-2xl md:text-3xl text-white font-medium leading-relaxed max-w-2xl mx-auto md:mx-0">
              {t('hero.subheadline')}
            </p>

            {/* Credibility Line */}
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-xl mx-auto md:mx-0">
              {t('hero.credibility')}
            </p>

            {/* CTA Buttons - Primary & Secondary only */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-black"
              >
                {t('hero.cta')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
              >
                {t('hero.ctaSecondary')}
              </Link>
            </div>
          </div>

          {/* Image Section - shows first on mobile (order-first), second on desktop (md:order-last) */}
          <div className="order-first md:order-last flex-shrink-0 flex justify-center p-2">
            {/* Fixed aspect ratio container for perfect circle - scales down on small screens */}
            <div className="relative group w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
              {/* Glowing effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

              {/* Rotating gradient border - slightly larger than container */}
              <div className="absolute -inset-1 rounded-full bg-conic-gradient animate-spin-slow opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Static dark background circle */}
              <div className="absolute inset-0 rounded-full bg-gray-900"></div>

              {/* Profile Image - inset to show border */}
              <div className="absolute inset-[6px] rounded-full overflow-hidden">
                <OptimizedImage
                  src="/Profil/Bruk_denne.jpg"
                  alt="Herman Hylland"
                  eager={true}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Social Links - positioned around the image */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
                <a
                  href="https://github.com/Hermanhyl"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Herman's GitHub profile"
                  className="p-3 bg-gray-800/90 hover:bg-emerald-500 border border-white/20 rounded-full text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/herman-hylland/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Herman's LinkedIn profile"
                  className="p-3 bg-gray-800/90 hover:bg-cyan-500 border border-white/20 rounded-full text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/hermanhyl98/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Herman's Instagram profile"
                  className="p-3 bg-gray-800/90 hover:bg-pink-500 border border-white/20 rounded-full text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <Link
                  to="/contact"
                  aria-label="Contact Herman via email"
                  className="p-3 bg-gray-800/90 hover:bg-purple-500 border border-white/20 rounded-full text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                >
                  <Mail className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - positioned at bottom of section, visible on medium screens and up */}
      <div className="hidden md:flex absolute bottom-6 left-1/2 transform -translate-x-1/2 flex-col items-center gap-2 animate-bounce z-20">
        <span className="text-gray-400 text-sm">{t('hero.scrollToExplore')}</span>
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-emerald-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
