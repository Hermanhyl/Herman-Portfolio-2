import { Mail, Linkedin, Github, Instagram, Send, User, MessageSquare } from 'lucide-react';
import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link with form data
    const mailtoLink = `mailto:hermanhyl@hotmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0D%0A%0D%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20 text-white bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-5xl w-full space-y-8">

        {/* Header with Availability Badge */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/50 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-300 text-sm font-medium">Available for Opportunities</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500 text-transparent bg-clip-text">
            Let's Connect
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Contact Form */}
          <div className="animated-border backdrop-blur-md bg-white/10 p-8 rounded-2xl border border-white/20 shadow-lg relative z-10">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <MessageSquare className="w-6 h-6 text-emerald-400" />
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Methods & Social Links */}
          <div className="space-y-6">

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>

              <a
                href="mailto:hermanhyl@hotmail.com"
                className="group animated-border block backdrop-blur-md bg-white/10 p-6 rounded-xl border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-emerald-500/20 rounded-lg group-hover:bg-emerald-500/30 transition">
                    <Mail className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Email</h3>
                    <p className="text-gray-300 text-sm">hermanhyl@hotmail.com</p>
                  </div>
                </div>
              </a>
            </div>

            {/* Social Media Links */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Follow Me</h2>
              <div className="grid grid-cols-3 gap-4">

                <a
                  href="https://www.linkedin.com/in/herman-hylland/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="animated-border backdrop-blur-md bg-white/10 p-6 rounded-xl border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-300 transform hover:scale-110 flex flex-col items-center gap-2 group"
                >
                  <Linkedin className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>

                <a
                  href="https://github.com/Hermanhyl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="animated-border backdrop-blur-md bg-white/10 p-6 rounded-xl border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-300 transform hover:scale-110 flex flex-col items-center gap-2 group"
                >
                  <Github className="w-8 h-8 text-gray-300 group-hover:text-white transition" />
                  <span className="text-sm font-medium">GitHub</span>
                </a>

                <a
                  href="https://www.instagram.com/hermanhyl98/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="animated-border backdrop-blur-md bg-white/10 p-6 rounded-xl border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-300 transform hover:scale-110 flex flex-col items-center gap-2 group"
                >
                  <Instagram className="w-8 h-8 text-pink-400 group-hover:text-pink-300 transition" />
                  <span className="text-sm font-medium">Instagram</span>
                </a>
              </div>
            </div>

            {/* Quick Info */}
            <div className="animated-border backdrop-blur-md bg-white/10 p-6 rounded-xl border border-white/20 shadow-lg">
              <h3 className="font-semibold text-lg mb-3 text-emerald-400">Response Time</h3>
              <p className="text-gray-300 text-sm">
                I typically respond within 24-48 hours. Looking forward to hearing from you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
