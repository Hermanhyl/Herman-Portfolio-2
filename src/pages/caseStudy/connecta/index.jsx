import { useTranslation } from 'react-i18next';
import PageTransition from '../../../components/pageTransition';
import OptimizedImage from '../../../components/optimizedImage';
import BackButton from '../../../components/backButton';
import ExternalLinkHint from '../../../components/externalLinkHint';
import BeforeAfterSlider from '../../../components/beforeAfterSlider';
import JsonLd from '../../../components/jsonLd';
import useDocumentMeta from '../../../hooks/useDocumentMeta';

const caseStudySchema = {
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: 'Connecta website redesign',
  headline: 'Connecta: a trust-first redesign for an online therapy practice',
  about: 'UX analysis, information architecture, React build, and SEO for a small online therapy practice.',
  author: { '@type': 'Person', name: 'Herman Hylland' },
  url: 'https://portfolio-herman-hylland.netlify.app/case-study/connecta',
  inLanguage: ['en', 'no'],
};

export default function ConnectaCaseStudy() {
  const { t } = useTranslation();

  useDocumentMeta({
    title: 'Connecta Case Study',
    description:
      'A trust-first redesign of an online therapy practice. UX analysis, information architecture, React build, and SEO, delivered solo. Ranks top locally for "terapi Drammen".',
    url: 'https://portfolio-herman-hylland.netlify.app/case-study/connecta',
  });

  const insights = ['insight1', 'insight2', 'insight3', 'insight4'];
  const principles = [
    { title: 'principle1Title', desc: 'principle1Desc' },
    { title: 'principle2Title', desc: 'principle2Desc' },
    { title: 'principle3Title', desc: 'principle3Desc' },
  ];
  const metrics = [
    { value: 'metric1Value', label: 'metric1Label' },
    { value: 'metric2Value', label: 'metric2Label' },
    { value: 'metric3Value', label: 'metric3Label' },
  ];

  return (
    <PageTransition>
      <JsonLd data={caseStudySchema} />
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">

        {/* Section 1: Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-gray-900" />
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          <BackButton position="top" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24 w-full">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 lg:items-center">

              {/* Image Side */}
              <div className="order-first lg:order-last lg:w-[55%] w-full">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 via-cyan-500 to-purple-500 rounded-2xl opacity-50 blur-sm" />
                  <div className="relative rounded-2xl overflow-hidden bg-gray-900">
                    <OptimizedImage
                      src="/Connecta/hero.jpg"
                      alt="The redesigned Connecta homepage"
                      eager={true}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:w-[45%] space-y-5 text-center lg:text-left">
                <p className="text-sm font-medium text-emerald-400 tracking-wide">
                  {t('cs.connecta.tags')}
                </p>

                <h1 className="font-display text-bone text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.02em] leading-tight">
                  Connecta
                </h1>

                <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
                  {t('cs.connecta.tagline')}
                </p>

                <div className="pt-4 space-y-2 text-sm md:text-base">
                  <p>
                    <span className="text-emerald-400 font-semibold">{t('cs.common.client')}</span>{' '}
                    <span className="text-gray-300">{t('cs.connecta.clientValue')}</span>
                  </p>
                  <p>
                    <span className="text-emerald-400 font-semibold">{t('cs.common.role')}</span>{' '}
                    <span className="text-gray-300">{t('cs.connecta.roleValue')}</span>
                  </p>
                  <p>
                    <span className="text-emerald-400 font-semibold">{t('cs.common.timeline')}</span>{' '}
                    <span className="text-gray-300">{t('cs.connecta.timelineValue')}</span>
                    <span className="text-gray-600 mx-3">•</span>
                    <span className="text-emerald-400 font-semibold">{t('cs.common.status')}</span>{' '}
                    <span className="text-gray-300">{t('cs.connecta.statusValue')}</span>
                  </p>
                  <p>
                    <span className="text-emerald-400 font-semibold">{t('cs.common.stack')}</span>{' '}
                    <span className="text-gray-300">{t('cs.connecta.stackValue')}</span>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 2: The Challenge */}
        <section className="relative py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-4">
              {t('cs.common.theChallenge')}
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              {t('cs.connecta.challengeText')}
            </p>
          </div>
        </section>

        {/* Section 3: Discovery */}
        <section className="relative py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3">
              {t('cs.common.discovery')}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t('cs.connecta.discoveryHeading')}
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-12">
              {t('cs.connecta.discoveryIntro')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left">
              {insights.map((key, i) => (
                <div key={key} className="bg-gradient-to-br from-white/10 to-white/5 border border-emerald-500/20 rounded-xl p-6">
                  <span className="text-3xl font-bold text-emerald-400 mb-3 block tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-white leading-relaxed text-lg">
                    {t(`cs.connecta.${key}`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: The Approach */}
        <section className="relative py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3">
              {t('cs.common.theApproach')}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t('cs.connecta.approachHeading')}
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-16">
              {t('cs.connecta.approachIntro')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {principles.map(({ title, desc }) => (
              <div key={title} className="text-center md:text-left space-y-3">
                <h3 className="text-xl font-bold text-white">{t(`cs.connecta.${title}`)}</h3>
                <p className="text-gray-400 leading-relaxed">{t(`cs.connecta.${desc}`)}</p>
              </div>
            ))}
          </div>

          {/* Approach section image */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
            <div className="rounded-2xl overflow-hidden">
              <OptimizedImage
                src="/Connecta/approach.jpg"
                alt="Connecta service pages and FAQ, structured to answer questions before contact"
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Section 5: Before and After */}
        <section className="relative py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <p className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3">
                {t('cs.connecta.beforeAfterHeading')}
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                {t('cs.connecta.beforeAfterIntro')}
              </p>
            </div>

            <BeforeAfterSlider
              beforeSrc="/Connecta/before.jpg"
              afterSrc="/Connecta/after.jpg"
              beforeAlt={t('cs.connecta.beforeAlt')}
              afterAlt={t('cs.connecta.afterAlt')}
            />
          </div>
        </section>

        {/* Section 6: Under the Hood (engineering decisions) */}
        <section className="relative py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3">
                {t('cs.common.underTheHood')}
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                {t('cs.connecta.frictionIntro')}
              </p>
            </div>

            <div className="space-y-8">
              <div className="border-l-2 border-emerald-500/40 pl-6">
                <h3 className="text-xl font-bold text-white mb-2">{t('cs.connecta.friction1Title')}</h3>
                <p className="text-gray-400 leading-relaxed">{t('cs.connecta.friction1Desc')}</p>
              </div>
              <div className="border-l-2 border-emerald-500/40 pl-6">
                <h3 className="text-xl font-bold text-white mb-2">{t('cs.connecta.friction2Title')}</h3>
                <p className="text-gray-400 leading-relaxed">{t('cs.connecta.friction2Desc')}</p>
              </div>
              <p className="text-gray-400 leading-relaxed pl-6">{t('cs.connecta.friction3Desc')}</p>
            </div>
          </div>
        </section>

        {/* Section 7: The Result */}
        <section className="relative py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3">
              {t('cs.common.theResult')}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t('cs.connecta.resultHeading')}
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-12">
              {t('cs.connecta.resultText')}
            </p>

            {/* Metric cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
              {metrics.map(({ value, label }) => (
                <div key={value} className="bg-gradient-to-br from-white/10 to-white/5 border border-emerald-500/20 rounded-xl p-6">
                  <span className="block font-display italic text-accent text-3xl md:text-4xl font-bold tracking-tight mb-2 leading-none">
                    {t(`cs.connecta.${value}`)}
                  </span>
                  <span className="block text-gray-400 text-sm md:text-base leading-snug">
                    {t(`cs.connecta.${label}`)}
                  </span>
                </div>
              ))}
            </div>

            {/* Reflection */}
            <div className="max-w-2xl mx-auto mb-12 text-left bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
              <p className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3">
                {t('cs.common.reflection')}
              </p>
              <p className="text-gray-300 leading-relaxed">
                {t('cs.connecta.reflectionText')}
              </p>
            </div>

            {/* Live site CTA (no GitHub — client project) */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
              <a
                href="https://connecta.no/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-accent-ink font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                {t('cs.common.viewLiveSite')}
                <span aria-hidden="true">→</span>
                <ExternalLinkHint />
              </a>
            </div>

            <BackButton position="bottom" />
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
