import { useState } from 'react';
import { Mail, Send, MessageSquare, CheckCircle, AlertCircle, Clock, Sparkles } from 'lucide-react';
import PageTransition from '../../components/pageTransition';
import ScrollReveal from '../../components/scrollReveal';
import SectionHeader from '../../components/sectionHeader';
import { SocialLink } from '../../components/socialLinks';
import NetworkBackground from '../../components/networkBackground';
import useDocumentMeta from '../../hooks/useDocumentMeta';

function Contact() {
  useDocumentMeta({
    title: 'Contact',
    description: 'Get in touch with Herman Hylland for frontend development, UI/UX design projects, or collaboration opportunities.',
    url: 'https://hermanhylland.netlify.app/contact'
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', 'loading', or null

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('loading');

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formData
        }).toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        // Clear success message after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <PageTransition>
      <div className="relative min-h-screen">
        {/* Network Background Animation */}
        <NetworkBackground />

        {/* Semi-transparent overlay so dots show through */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-gray-900/70 to-black/80 z-[1]"></div>

        <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 text-white z-[2]">
        <div className="max-w-5xl w-full space-y-12">

          {/* Header */}
          <ScrollReveal>
            <div className="text-center">
              {/* Availability Badge */}
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/50 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-emerald-300 text-sm font-medium">Available for Opportunities</span>
              </div>

              <SectionHeader
                icon={Sparkles}
                title="Let's Connect"
                description="I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision."
              />
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Contact Form */}
            <ScrollReveal delay={100}>
              <div className="animated-border backdrop-blur-md bg-white/10 p-8 rounded-2xl border border-white/20 shadow-lg relative z-10 h-full">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <MessageSquare className="w-6 h-6 text-emerald-400" />
                  Send a Message
                </h2>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div className="mb-4 p-4 bg-emerald-500/20 border border-emerald-500/50 rounded-lg flex items-center gap-3" role="alert">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <p className="text-emerald-300">Thank you! Your message has been sent successfully. I'll get back to you soon!</p>
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div className="mb-4 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center gap-3 animate-in fade-in slide-in-from-top-2 duration-300" role="alert">
                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                    <p className="text-red-300">Oops! Something went wrong. Please try again or email me directly.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                  {/* Hidden inputs for Netlify Forms */}
                  <input type="hidden" name="form-name" value="contact" />
                  {/* Honeypot field for spam protection */}
                  <p className="hidden">
                    <label>
                      Don't fill this out if you're human: <input name="bot-field" />
                    </label>
                  </p>

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
                      aria-required="true"
                      disabled={submitStatus === 'loading'}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition disabled:opacity-50 disabled:cursor-not-allowed"
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
                      aria-required="true"
                      disabled={submitStatus === 'loading'}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition disabled:opacity-50 disabled:cursor-not-allowed"
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
                      aria-required="true"
                      disabled={submitStatus === 'loading'}
                      rows="5"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitStatus === 'loading'}
                    aria-label={submitStatus === 'loading' ? 'Sending message...' : 'Send message'}
                    className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none cursor-pointer"
                  >
                    {submitStatus === 'loading' ? (
                      <>
                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" aria-hidden="true" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </ScrollReveal>

            {/* Contact Methods & Social Links */}
            <div className="space-y-6">

              {/* Direct Contact Card */}
              <ScrollReveal delay={200}>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Get in Touch</h2>
                  <SocialLink platform="email" variant="full" />
                </div>
              </ScrollReveal>

              {/* Social Media Links */}
              <ScrollReveal delay={300}>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Follow Me</h2>
                  <div className="grid grid-cols-3 gap-4">
                    <SocialLink platform="linkedin" variant="card" />
                    <SocialLink platform="github" variant="card" />
                    <SocialLink platform="instagram" variant="card" />
                  </div>
                </div>
              </ScrollReveal>

              {/* Quick Info */}
              <ScrollReveal delay={400}>
                <div className="animated-border backdrop-blur-md bg-white/10 p-6 rounded-xl border border-white/20 shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-emerald-500/20 rounded-lg">
                      <Clock className="w-5 h-5 text-emerald-400" />
                    </div>
                    <h3 className="font-semibold text-xl text-emerald-400">Response Time</h3>
                  </div>
                  <p className="text-gray-300 text-base leading-relaxed">
                    I typically respond within 24-48 hours. Looking forward to hearing from you!
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
      </div>
    </PageTransition>
  );
}

export default Contact;
