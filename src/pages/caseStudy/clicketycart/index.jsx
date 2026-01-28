import PageTransition from '../../../components/pageTransition';
import OptimizedImage from '../../../components/optimizedImage';
import BackButton from '../../../components/backButton';
import useDocumentMeta from '../../../hooks/useDocumentMeta';

export default function ClicketyCartCaseStudy() {
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
                  UX Design • Frontend Development • React
                </p>

                {/* Title */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
                  ClicketyCart
                </h1>

                {/* Tagline */}
                <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
                  A retro-inspired e-commerce storefront with a fast, playful checkout experience — built to make online shopping feel effortless.
                </p>

                {/* Metadata - clean typography, no boxes */}
                <div className="pt-4 space-y-2 text-sm md:text-base">
                  <p>
                    <span className="text-emerald-400 font-semibold">Role:</span>{' '}
                    <span className="text-gray-300">UX Designer & Frontend Developer</span>
                  </p>
                  <p>
                    <span className="text-emerald-400 font-semibold">Team:</span>{' '}
                    <span className="text-gray-300">Herman Hylland, Madelen Sletteberg</span>
                  </p>
                  <p>
                    <span className="text-emerald-400 font-semibold">Stack:</span>{' '}
                    <span className="text-gray-300">React, JavaScript, Noroff API</span>
                    <span className="text-gray-600 mx-3">•</span>
                    <span className="text-emerald-400 font-semibold">Type:</span>{' '}
                    <span className="text-gray-300">Project Assignment</span>
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
              The Challenge
            </p>

            {/* Body text */}
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Build a functional e-commerce frontend that connects to the Noroff API — handling products, cart management, and checkout. Beyond the technical requirements, we wanted to create something with personality: a retro-inspired design that makes shopping feel quick and fun, not like a chore.
            </p>
          </div>
        </section>

        {/* Section 3: Discovery */}
        <section className="relative py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Section label */}
            <p className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3">
              Discovery
            </p>

            {/* Subheading */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              What Makes Online Shopping Feel Good
            </h2>

            {/* Intro paragraph */}
            <p className="text-lg text-gray-400 leading-relaxed mb-12">
              E-commerce is a solved problem technically, but most stores feel interchangeable. We explored what makes a shopping experience memorable and frictionless.
            </p>

            {/* Key insights - 2x2 grid of cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12 text-left">
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-emerald-500/20 rounded-xl p-6">
                <span className="text-3xl font-bold text-emerald-400 mb-3 block">01</span>
                <p className="text-white leading-relaxed text-lg">
                  Speed is trust — slow interfaces make users doubt whether their actions registered
                </p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-emerald-500/20 rounded-xl p-6">
                <span className="text-3xl font-bold text-emerald-400 mb-3 block">02</span>
                <p className="text-white leading-relaxed text-lg">
                  Personality differentiates — a distinctive visual style makes a store memorable
                </p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-emerald-500/20 rounded-xl p-6">
                <span className="text-3xl font-bold text-emerald-400 mb-3 block">03</span>
                <p className="text-white leading-relaxed text-lg">
                  Navigation should be invisible — users expect the logo to go home, the cart to show items, no surprises
                </p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-emerald-500/20 rounded-xl p-6">
                <span className="text-3xl font-bold text-emerald-400 mb-3 block">04</span>
                <p className="text-white leading-relaxed text-lg">
                  Accessibility is baseline — forms need proper structure, interactions need keyboard support
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
              Design Approach
            </p>

            {/* Subheading */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Fast, Fun, and Familiar
            </h2>

            {/* Intro paragraph */}
            <p className="text-lg text-gray-400 leading-relaxed mb-16">
              We balanced a playful retro aesthetic with e-commerce conventions users already know. The design stands out visually while the interactions feel intuitive.
            </p>
          </div>

          {/* Principle blocks */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
            {/* Principle 1 */}
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-3">Retro Visual Identity</h3>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Bold colors, playful typography, and vintage-inspired elements give ClicketyCart a personality that stands apart from generic storefronts.
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
                <h3 className="text-2xl font-bold text-white mb-3">Streamlined Checkout</h3>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Cart updates instantly, totals are always visible, and checkout flows in a clear sequence. No surprises, no friction.
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
                <h3 className="text-2xl font-bold text-white mb-3">Expected Navigation Patterns</h3>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  The logo links home, the cart icon shows item count, categories are one click away. Users never have to think about how to get around.
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
              The Result
            </p>

            {/* Subheading */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              A Store With Character
            </h2>

            {/* Body paragraph */}
            <p className="text-lg text-gray-400 leading-relaxed mb-12">
              We delivered a fully functional e-commerce frontend with a distinctive visual identity. After submission, I revisited the project to improve accessibility — wrapping inputs in proper form elements — and added documentation for maintainability. Small details like making the logo clickable reinforced that good UX often means meeting expectations users don't consciously notice.
            </p>

            {/* Takeaway cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-emerald-500/20 rounded-xl p-6 text-left">
                <span className="text-3xl font-bold text-emerald-400 mb-3 block">01</span>
                <p className="text-white leading-relaxed text-lg">
                  Visual personality and usability aren't trade-offs — you can have both
                </p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-emerald-500/20 rounded-xl p-6 text-left">
                <span className="text-3xl font-bold text-emerald-400 mb-3 block">02</span>
                <p className="text-white leading-relaxed text-lg">
                  Accessibility fixes are often small but impact real users significantly
                </p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-emerald-500/20 rounded-xl p-6 text-left">
                <span className="text-3xl font-bold text-emerald-400 mb-3 block">03</span>
                <p className="text-white leading-relaxed text-lg">
                  Revisiting projects after submission builds better habits than moving on immediately
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
                View Live Site
                <span aria-hidden="true">→</span>
              </a>
              <a
                href="https://github.com/Hermanhyl/ClicketyCart"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                View GitHub
                <span aria-hidden="true">→</span>
              </a>
              <a
                href="https://www.figma.com/design/R8wGWrRexwOTDaQnpFKNmn/Ecom-store?node-id=0-1&p=f&t=UlgGs9y5P55UgOu2-0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                View Figma
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
