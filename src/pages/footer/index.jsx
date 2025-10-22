import { Heart, Code2, Mail, Linkedin, Github, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/herman-hylland-86969718b/",
      icon: Linkedin,
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    {
      href: "https://github.com/Hermanhyl",
      icon: Github,
      label: "GitHub",
      color: "hover:text-gray-300"
    },
    {
      href: "https://www.instagram.com/hermanhyl98/",
      icon: Instagram,
      label: "Instagram",
      color: "hover:text-pink-400"
    },
  ];

  const quickLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-black to-black border-t border-white/10 mt-auto">
      {/* Decorative gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">

          {/* Brand Section */}
          <div className="text-center md:text-left space-y-4">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Code2 className="w-6 h-6 lg:w-7 lg:h-7 text-emerald-400" />
              <span className="text-xl lg:text-2xl font-bold">
                <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500 text-transparent bg-clip-text">
                  Herman
                </span>
                <span className="text-white">Hylland</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
              Front-End Developer & Digital Designer crafting beautiful web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center space-y-4">
            <h3 className="text-white font-semibold text-lg lg:text-xl mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 text-sm lg:text-base"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social & Contact */}
          <div className="text-center md:text-right space-y-4">
            <h3 className="text-white font-semibold text-lg lg:text-xl mb-4">Connect</h3>
            <div className="flex justify-center md:justify-end gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`p-3 lg:p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all duration-300 transform hover:scale-110 text-gray-400 ${social.color}`}
                  >
                    <Icon className="w-5 h-5 lg:w-6 lg:h-6" />
                  </a>
                );
              })}
            </div>
            <a
              href="mailto:hermanhyl@hotmail.com"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors duration-300 text-sm lg:text-base mt-4"
            >
              <Mail className="w-4 h-4 lg:w-5 lg:h-5" />
              hermanhyl@hotmail.com
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-sm lg:text-base">
            <p className="flex items-center gap-2">
              &copy; {currentYear} Herman Hylland. All rights reserved.
            </p>
            <p className="flex items-center gap-2">
              Built with <Heart className="w-4 h-4 lg:w-5 lg:h-5 text-red-500 fill-red-500 animate-pulse" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

