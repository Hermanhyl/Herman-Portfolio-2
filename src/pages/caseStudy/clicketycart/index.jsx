import PageTransition from '../../../components/pageTransition';
import OptimizedImage from '../../../components/optimizedImage';
import BackButton from '../../../components/backButton';
import useDocumentMeta from '../../../hooks/useDocumentMeta';
import { useTranslation } from 'react-i18next';

export default function ClicketyCartCaseStudy() {
  const { t } = useTranslation();

  useDocumentMeta({
    title: 'ClicketyCart Case Study',
    description: 'A retro-inspired e-commerce storefront with a fast, playful checkout experience — built to make online shopping feel effortless.',
    url: 'https://hermanhylland.netlify.app/case-study/clicketycart',
  });

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

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:py-24 w-full">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 lg:items-center">

              {/* Image Side - shows first on mobile */}
              <div className="order-first lg:order-last lg:w-[55%] w-full">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 via-cyan-500 to-purple-500 rounded-2xl opacity-50 blur-sm" />
                  <div className="relative rounded-2xl overflow-hidden bg-gray-900">
                    <OptimizedImage
                      src="/ClicketyCart.png"
                      alt="ClicketyCart eCommerce store interface"
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
                  {t('cs.clicketycart.tags')}
                </p>

                {/* Title */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
                  ClicketyCart
                </h1>

                {/* Tagline */}
                <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
                  {t('cs.clicketycart.tagline')}
                </p>

                {/* Metadata - clean typography, no boxes */}
                <div className="pt-4 space-y-2 text-sm md:text-base">
                  <p>
                    <span className="text-emerald-400 font-semibold">{t('cs.common.role')}</span>{' '}
                    <span className="text-gray-300">{t('cs.clicketycart.roleValue')}</span>
                  </p>
                  <p>
                    <span className="text-emerald-400 font-semibold">{t('cs.common.team')}</span>{' '}
                    <span className="text-gray-300">{t('cs.clicketycart.teamValue')}</span>
                  </p>
                  <p>
                    <span className="text-emerald-400 font-semibold">{t('cs.common.stack')}</span>{' '}
                    <span className="text-gray-300">{t('cs.clicketycart.stackValue')}</span>
                    <span className="text-gray-600 mx-3">•</span>
                    <span className="text-emerald-400 font-semibold">{t('cs.common.type')}</span>{' '}
                    <span className="text-gray-300">{t('cs.clicketycart.typeValue')}</span>
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
              {t('cs.clicketycart.challengeText')}
            </p>
          </div>
        </section>

        {/* Section 3: Discovery */}
        <section className="relative py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Section label */}
            <p className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3">
              {t('cs.common.discovery')}
            </p>

            {/* Subheading */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t('cs.clicketycart.discoveryHeading')}
            </h2>

            {/* Intro paragraph */}
            <p className="text-lg text-gray-400 leading-relaxed mb-12">
              {t('cs.clicketycart.discoveryIntro')}
            </p>

            {/* Key insights - 2x2 grid of cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12 text-left">
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-emerald-500/20 rounded-xl p-6">
                <span className="text-3xl font-bold text-emerald-400 mb-3 block">01</span>
                <p className="text-white leading-relaxed text-lg">
                  {t('cs.clicketycart.insight1')}
                </p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-emerald-500/20 rounded-xl p-6">
                <span className="text-3xl font-bold text-emerald-400 mb-3 block">02</span>
                <p className="text-white leading-relaxed text-lg">
                  {t('cs.clicketycart.insight2')}
                </p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-emerald-500/20 rounded-xl p-6">
                <span className="text-3xl font-bold text-emerald-400 mb-3 block">03</span>
                <p className="text-white leading-relaxed text-lg">
                  {t('cs.clicketycart.insight3')}
                </p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-emerald-500/20 rounded-xl p-6">
                <span className="text-3xl font-bold text-emerald-400 mb-3 block">04</span>
                <p className="text-white leading-relaxed text-lg">
                  {t('cs.clicketycart.insight4')}
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="rounded-2xl overflow-hidden">
              <OptimizedImage
                src="/ClicketyCart.png"
                alt="ClicketyCart product grid showing the retro-inspired design style"
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
              {t('cs.clicketycart.designHeading')}
            </h2>

            {/* Intro paragraph */}
            <p className="text-lg text-gray-400 leading-relaxed mb-16">
              {t('cs.clicketycart.designIntro')}
            </p>
          </div>

          {/* Principle blocks */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
            {/* Principle 1 */}
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-3">{t('cs.clicketycart.principle1Title')}</h3>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  {t('cs.clicketycart.principle1Desc')}
                </p>
              </div>
              <div className="flex justify-center">
                <div className="rounded-2xl overflow-hidden max-w-md">
                  <OptimizedImage
                    src="/clicketyCart/individualItem.jpg"
                    alt="ClicketyCart individual product page with retro design elements"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Principle 2 */}
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-3">{t('cs.clicketycart.principle2Title')}</h3>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  {t('cs.clicketycart.principle2Desc')}
                </p>
              </div>
              <div className="flex justify-center">
                <div className="rounded-2xl overflow-hidden max-w-md">
                  <OptimizedImage
                    src="/clicketyCart/cart.jpg"
                    alt="ClicketyCart cart and checkout flow showing instant updates"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Principle 3 */}
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-3">{t('cs.clicketycart.principle3Title')}</h3>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  {t('cs.clicketycart.principle3Desc')}
                </p>
              </div>
              <div className="flex justify-center">
                <div className="rounded-2xl overflow-hidden max-w-md">
                  <OptimizedImage
                    src="/clicketyCart/successMessege.jpg"
                    alt="ClicketyCart success message showing familiar navigation patterns"
                    className="w-full h-auto"
                  />
                </div>
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
              {t('cs.clicketycart.resultHeading')}
            </h2>

            {/* Body paragraph */}
            <p className="text-lg text-gray-400 leading-relaxed mb-12">
              {t('cs.clicketycart.resultText')}
            </p>

            {/* Takeaway cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-emerald-500/20 rounded-xl p-6 text-left">
                <span className="text-3xl font-bold text-emerald-400 mb-3 block">01</span>
                <p className="text-white leading-relaxed text-lg">
                  {t('cs.clicketycart.takeaway1')}
                </p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-emerald-500/20 rounded-xl p-6 text-left">
                <span className="text-3xl font-bold text-emerald-400 mb-3 block">02</span>
                <p className="text-white leading-relaxed text-lg">
                  {t('cs.clicketycart.takeaway2')}
                </p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-emerald-500/20 rounded-xl p-6 text-left">
                <span className="text-3xl font-bold text-emerald-400 mb-3 block">03</span>
                <p className="text-white leading-relaxed text-lg">
                  {t('cs.clicketycart.takeaway3')}
                </p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
              <a
                href="https://clicketycart.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                {t('cs.common.viewLiveSite')}
                <span aria-hidden="true">→</span>
              </a>
              <a
                href="https://github.com/Hermanhyl/ClicketyCart"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                {t('cs.common.viewGithub')}
                <span aria-hidden="true">→</span>
              </a>
              <a
                href="https://www.figma.com/design/R8wGWrRexwOTDaQnpFKNmn/Ecom-store?node-id=0-1&p=f&t=UlgGs9y5P55UgOu2-0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                {t('cs.common.viewFigma')}
                <span aria-hidden="true">→</span>
              </a>
            </div>

            {/* Back button - bottom */}
            <BackButton position="bottom" />
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
