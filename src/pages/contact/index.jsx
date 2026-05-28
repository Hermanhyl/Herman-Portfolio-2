import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Send, MessageSquare, CheckCircle, AlertCircle, Clock, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import PageTransition from '../../components/pageTransition';
import SectionHeader from '../../components/sectionHeader';
import { SocialLink } from '../../components/socialLinks';
import NetworkBackground from '../../components/networkBackground';
import useDocumentMeta from '../../hooks/useDocumentMeta';
import { fadeUp, staggerContainer, ease, duration } from '../../utils/motion';

function FloatingField({ id, name, type = 'text', value, onChange, disabled, label, placeholder, required = true }) {
  // Trick: keep a single space as the placeholder so the input is never
  // "placeholder-shown" once the user types — peer-[:not(:placeholder-shown)]
  // then drives the floating-label state via pure CSS.
  return (
    <div className="relative">
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        aria-required={required}
        disabled={disabled}
        placeholder=" "
        className="peer w-full px-4 pt-6 pb-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition disabled:opacity-50 disabled:cursor-not-allowed"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-base transition-all duration-200 ease-out peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:text-emerald-400 peer-focus:font-medium peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-emerald-300"
      >
        {label}
        {placeholder && (
          <span className="hidden peer-focus:inline text-gray-500"> · {placeholder}</span>
        )}
      </label>
    </div>
  );
}

function FloatingTextarea({ id, name, value, onChange, disabled, label, rows = 5, required = true }) {
  return (
    <div className="relative">
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        aria-required={required}
        disabled={disabled}
        rows={rows}
        placeholder=" "
        className="peer w-full px-4 pt-6 pb-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition resize-none disabled:opacity-50 disabled:cursor-not-allowed"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-4 text-gray-400 text-base transition-all duration-200 ease-out peer-focus:top-2 peer-focus:text-xs peer-focus:text-emerald-400 peer-focus:font-medium peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-emerald-300"
      >
        {label}
      </label>
    </div>
  );
}

function Contact() {
  const { t } = useTranslation();

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
  const [submitStatus, setSubmitStatus] = useState(null);

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
        <NetworkBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-gray-900/70 to-black/80 z-[1]"></div>

        <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 text-white z-[2]">
          <motion.div
            variants={staggerContainer(0.12, 0.05)}
            initial="hidden"
            animate="visible"
            className="max-w-5xl w-full space-y-12"
          >

            {/* Header */}
            <motion.div variants={fadeUp}>
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-green-500/15 border border-green-400/50 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400"></span>
                  </span>
                  <span className="text-green-200 text-xs font-semibold uppercase tracking-[0.12em]">{t('contact.available')}</span>
                </div>

                <SectionHeader
                  icon={Sparkles}
                  title={t('contact.title')}
                  description={t('contact.subtitle')}
                  accentLastWord
                />
                {/* Animated underline drawing under the title on load */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.6, duration: duration.slow, ease: ease.out }}
                  style={{ transformOrigin: 'center' }}
                  className="h-px w-24 mx-auto mt-2 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
                />
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">

              {/* Contact Form */}
              <motion.div variants={fadeUp}>
                <div className="animated-border backdrop-blur-md bg-white/10 p-8 rounded-2xl border border-white/20 shadow-lg relative z-10 h-full">
                  <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-6 flex items-center gap-2">
                    <MessageSquare className="w-6 h-6 text-emerald-400" />
                    {t('contact.sendMessage')}
                  </h2>

                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, ease: ease.out }}
                      className="mb-4 p-4 bg-green-500/15 border border-green-500/50 rounded-lg flex items-center gap-3"
                      role="alert"
                    >
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <p className="text-green-200">{t('contact.successMessage')}</p>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, ease: ease.out }}
                      className="mb-4 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center gap-3"
                      role="alert"
                    >
                      <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                      <p className="text-red-300">{t('contact.errorMessage')}</p>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                    <input type="hidden" name="form-name" value="contact" />
                    <p className="hidden">
                      <label>
                        Don't fill this out if you're human: <input name="bot-field" />
                      </label>
                    </p>

                    <FloatingField
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={submitStatus === 'loading'}
                      label={t('contact.form.name')}
                    />

                    <FloatingField
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={submitStatus === 'loading'}
                      label={t('contact.form.email')}
                    />

                    <FloatingTextarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      disabled={submitStatus === 'loading'}
                      label={t('contact.form.message')}
                    />

                    <button
                      type="submit"
                      disabled={submitStatus === 'loading'}
                      aria-label={submitStatus === 'loading' ? t('contact.form.sending') : t('contact.form.send')}
                      className="group relative w-full overflow-hidden bg-gradient-to-r from-emerald-500 to-cyan-500 text-accent-ink font-semibold px-6 py-3.5 rounded-lg shadow-lg shadow-emerald-500/20 transition-[transform,box-shadow] duration-300 hover:shadow-xl hover:shadow-emerald-500/30 hover:-translate-y-0.5 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:translate-y-0 cursor-pointer"
                    >
                      {/* Sweep highlight on hover */}
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[700ms] ease-out bg-gradient-to-r from-transparent via-white/25 to-transparent"
                      />
                      <span className="relative flex items-center gap-2">
                        {submitStatus === 'loading' ? (
                          <>
                            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            {t('contact.form.sending')}
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                            {t('contact.form.send')}
                          </>
                        )}
                      </span>
                    </button>
                  </form>
                </div>
              </motion.div>

              {/* Contact Methods & Social Links */}
              <div className="space-y-6">

                <motion.div variants={fadeUp}>
                  <div className="space-y-4">
                    <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">{t('contact.getInTouch')}</h2>
                    <SocialLink platform="email" variant="full" />
                  </div>
                </motion.div>

                <motion.div variants={fadeUp}>
                  <div>
                    <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-4">{t('contact.followMe')}</h2>
                    <div className="grid grid-cols-3 gap-4">
                      <SocialLink platform="linkedin" variant="card" />
                      <SocialLink platform="github" variant="card" />
                      <SocialLink platform="instagram" variant="card" />
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={fadeUp}>
                  <div className="animated-border backdrop-blur-md bg-white/10 p-6 rounded-xl border border-white/20 shadow-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-emerald-500/20 rounded-lg">
                        <Clock className="w-5 h-5 text-emerald-400" />
                      </div>
                      <h3 className="font-display text-xl font-semibold tracking-tight text-emerald-400">{t('contact.responseTime')}</h3>
                    </div>
                    <p className="text-gray-300 text-base leading-relaxed">
                      {t('contact.responseDesc')}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}

export default Contact;
