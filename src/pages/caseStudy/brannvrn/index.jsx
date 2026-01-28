import { useTranslation } from 'react-i18next';
import PageTransition from '../../../components/pageTransition';
import OptimizedImage from '../../../components/optimizedImage';
import BackButton from '../../../components/backButton';
import useDocumentMeta from '../../../hooks/useDocumentMeta';

export default function BrannVRnCaseStudy() {
  useDocumentMeta({
    title: 'BrannVRn Case Study',
    description: 'A VR fire safety simulator that teaches hospital staff to respond to emergencies — without the risk.',
    url: 'https://hermanhylland.netlify.app/case-study/brannvrn',
  });

  const { t } = useTranslation();

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">

        {/* Section 1: Case Study Hero */}
        <section className="relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-gray-900" />

          {/* Subtle animated background elements */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          {/* Back button - top left */}
          <BackButton position="top" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24 w-full">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 lg:items-center">

              {/* Image Side - shows first on mobile */}
              <div className="order-first lg:order-last lg:w-[55%] w-full">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 via-cyan-500 to-purple-500 rounded-2xl opacity-50 blur-sm" />
                  <div className="relative rounded-2xl overflow-hidden bg-gray-900">
                    <OptimizedImage
                      src="/BrannVRn/Images/screenshot-01.png"
                      alt="BrannVRn VR environment showing the office space"
                      eager={true}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:w-[45%] space-y-5 text-center lg:text-left">
                {/* Tags - inline with separators */}
                <p className="text-sm font-medium text-emerald-400 tracking-wide">
                  {t('cs.brannvrn.tags')}
                </p>

                {/* Title */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
                  BrannVRn
                </h1>

                {/* Tagline */}
                <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
                  {t('cs.brannvrn.tagline')}
                </p>

                {/* Metadata - clean typography, no boxes */}
                <div className="pt-4 space-y-2 text-sm md:text-base">
                  <p>
                    <span className="text-emerald-400 font-semibold">{t('cs.common.role')}</span>{' '}
                    <span className="text-gray-300">{t('cs.brannvrn.roleValue')}</span>
                  </p>
                  <p>
                    <span className="text-emerald-400 font-semibold">{t('cs.common.team')}</span>{' '}
                    <span className="text-gray-300">{t('cs.brannvrn.teamValue')}</span>
                    <span className="text-gray-600 mx-3">•</span>
                    <span className="text-emerald-400 font-semibold">{t('cs.common.client')}</span>{' '}
                    <span className="text-gray-300">{t('cs.brannvrn.clientValue')}</span>
                  </p>
                  <p>
                    <span className="text-emerald-400 font-semibold">{t('cs.common.timeline')}</span>{' '}
                    <span className="text-gray-300">{t('cs.brannvrn.timelineValue')}</span>
                    <span className="text-gray-600 mx-3">•</span>
                    <span className="text-emerald-400 font-semibold">{t('cs.common.outcome')}</span>{' '}
                    <span className="text-gray-300">{t('cs.brannvrn.outcomeValue')}</span>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 2: The Challenge */}
        <section className="relative py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Section label */}
            <p className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-4">
              {t('cs.common.theChallenge')}
            </p>

            {/* Body text */}
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              {t('cs.brannvrn.challengeText')}
            </p>
          </div>
        </section>

        {/* Section 3: Research */}
        <section className="relative py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Section label */}
            <p className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3">
              {t('cs.common.research')}
            </p>

            {/* Subheading */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t('cs.brannvrn.discoveryHeading')}
            </h2>

            {/* Intro paragraph */}
            <p className="text-lg text-gray-400 leading-relaxed mb-12">
              {t('cs.brannvrn.discoveryIntro')}
            </p>

            {/* Key insights - 2x2 grid of cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12 text-left">
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-emerald-500/20 rounded-xl p-6">
                <span className="text-3xl font-bold text-emerald-400 mb-3 block">01</span>
                <p className="text-white leading-relaxed text-lg">
                  {t('cs.brannvrn.insight1')}
                </p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-emerald-500/20 rounded-xl p-6">
                <span className="text-3xl font-bold text-emerald-400 mb-3 block">02</span>
                <p className="text-white leading-relaxed text-lg">
                  {t('cs.brannvrn.insight2')}
                </p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-emerald-500/20 rounded-xl p-6">
                <span className="text-3xl font-bold text-emerald-400 mb-3 block">03</span>
                <p className="text-white leading-relaxed text-lg">
                  {t('cs.brannvrn.insight3')}
                </p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-emerald-500/20 rounded-xl p-6">
                <span className="text-3xl font-bold text-emerald-400 mb-3 block">04</span>
                <p className="text-white leading-relaxed text-lg">
                  {t('cs.brannvrn.insight4')}
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="rounded-2xl overflow-hidden">
              <OptimizedImage
                src="/BrannVRn/Images/process-01.jpg"
                alt="Research process at the fire station"
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Section 4: Design Approach */}
        <section className="relative py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Section label */}
            <p className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3">
              {t('cs.common.designApproach')}
            </p>

            {/* Subheading */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t('cs.brannvrn.designHeading')}
            </h2>

            {/* Intro paragraph */}
            <p className="text-lg text-gray-400 leading-relaxed mb-16">
              {t('cs.brannvrn.designIntro')}
            </p>
          </div>

          {/* Principle blocks */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
            {/* Principle 1 */}
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-3">{t('cs.brannvrn.principle1Title')}</h3>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  {t('cs.brannvrn.principle1Desc')}
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden">
                <OptimizedImage
                  src="/BrannVRn/Images/tutorial-01.png"
                  alt="Tutorial showing staged information disclosure"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Principle 2 */}
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-3">{t('cs.brannvrn.principle2Title')}</h3>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  {t('cs.brannvrn.principle2Desc')}
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden">
                <OptimizedImage
                  src="/BrannVRn/Images/infographic-firehose.png"
                  alt="In-environment information panel for fire hose"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Principle 3 */}
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-3">{t('cs.brannvrn.principle3Title')}</h3>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  {t('cs.brannvrn.principle3Desc')}
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden">
                <OptimizedImage
                  src="/BrannVRn/Images/screenshot-03.png"
                  alt="User practicing with fire safety equipment"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: The Result */}
        <section className="relative py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Section label */}
            <p className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3">
              {t('cs.common.theResult')}
            </p>

            {/* Subheading */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t('cs.brannvrn.resultHeading')}
            </h2>

            {/* Body paragraph */}
            <p className="text-lg text-gray-400 leading-relaxed mb-12">
              {t('cs.brannvrn.resultText')}
            </p>

            {/* Key takeaways */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-emerald-500/20 rounded-xl p-6">
                <p className="text-white text-lg leading-relaxed">
                  {t('cs.brannvrn.takeaway1')}
                </p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-emerald-500/20 rounded-xl p-6">
                <p className="text-white text-lg leading-relaxed">
                  {t('cs.brannvrn.takeaway2')}
                </p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-emerald-500/20 rounded-xl p-6">
                <p className="text-white text-lg leading-relaxed">
                  {t('cs.brannvrn.takeaway3')}
                </p>
              </div>
            </div>

            {/* Video embed */}
            <div className="rounded-2xl overflow-hidden aspect-video">
              <iframe
                src="https://www.youtube.com/embed/1rR3RqYXKDQ"
                title="BrannVRn project trailer"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Back button - bottom */}
            <BackButton position="bottom" />
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
