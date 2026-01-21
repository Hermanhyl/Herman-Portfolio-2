import PageTransition from '../../../components/pageTransition';
import OptimizedImage from '../../../components/optimizedImage';
import useDocumentMeta from '../../../hooks/useDocumentMeta';

export default function BrannVRnCaseStudy() {
  useDocumentMeta({
    title: 'BrannVRn Case Study',
    description: 'A VR fire safety simulator that teaches hospital staff to respond to emergencies — without the risk.',
    url: 'https://hermanhylland.netlify.app/case-study/brannvrn',
  });

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">

        {/* Section 1: Case Study Hero */}
        <section className="relative overflow-hidden min-h-[80vh] flex items-center">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-gray-900" />

          {/* Subtle animated background elements */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">

              {/* Image Side - shows first on mobile */}
              <div className="order-first lg:order-last lg:w-[55%] w-full">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 via-cyan-500 to-purple-500 rounded-2xl opacity-50 blur-sm" />
                  <div className="relative rounded-2xl overflow-hidden bg-gray-900">
                    <OptimizedImage
                      src="/BrannVRn/Images/screenshot-01.png"
                      alt="BrannVRn VR environment showing the office space"
                      eager={true}
                      className="w-full h-auto aspect-[4/3] object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:w-[45%] space-y-5 text-center lg:text-left">
                {/* Tags - inline with separators */}
                <p className="text-sm font-medium text-emerald-400 tracking-wide">
                  UX Design • User Research • VR
                </p>

                {/* Title */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
                  BrannVRn
                </h1>

                {/* Tagline */}
                <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
                  A VR fire safety simulator that teaches hospital staff to respond to emergencies — without the risk.
                </p>

                {/* Metadata - clean typography, no boxes */}
                <div className="pt-4 space-y-2 text-sm md:text-base">
                  <p>
                    <span className="text-emerald-400 font-semibold">Role:</span>{' '}
                    <span className="text-gray-300">UI/UX Designer & Concept Artist</span>
                  </p>
                  <p>
                    <span className="text-emerald-400 font-semibold">Team:</span>{' '}
                    <span className="text-gray-300">3 people</span>
                    <span className="text-gray-600 mx-3">•</span>
                    <span className="text-emerald-400 font-semibold">Client:</span>{' '}
                    <span className="text-gray-300">Sykehuspartner</span>
                  </p>
                  <p>
                    <span className="text-emerald-400 font-semibold">Timeline:</span>{' '}
                    <span className="text-gray-300">6 months</span>
                    <span className="text-gray-600 mx-3">•</span>
                    <span className="text-emerald-400 font-semibold">Outcome:</span>{' '}
                    <span className="text-gray-300">A grade, delivered to client</span>
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
              Hospital employees need fire safety training, but real drills are disruptive and risky. Sykehuspartner wanted a way to train staff in realistic emergency scenarios — letting them practice using fire extinguishers, following evacuation routes, and making quick decisions — all without any real danger.
            </p>
          </div>
        </section>

        {/* Section 3: Research */}
        <section className="relative py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Section label */}
            <p className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3">
              Research
            </p>

            {/* Subheading */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              What We Learned from Firefighters
            </h2>

            {/* Intro paragraph */}
            <p className="text-lg text-gray-400 leading-relaxed mb-12">
              We spent a day at the local fire station consulting directly with firefighters. Their real-world expertise shaped our entire design approach.
            </p>

            {/* Key insights - 2x2 grid of cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12 text-left">
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-emerald-500/20 rounded-xl p-6">
                <span className="text-3xl font-bold text-emerald-400/80 mb-3 block">01</span>
                <p className="text-gray-200 leading-relaxed text-base font-medium">
                  Untrained people make predictable mistakes — we designed our tutorials around preventing these
                </p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-emerald-500/20 rounded-xl p-6">
                <span className="text-3xl font-bold text-emerald-400/80 mb-3 block">02</span>
                <p className="text-gray-200 leading-relaxed text-base font-medium">
                  Panic overrides knowledge, so repetition and muscle memory matter more than information
                </p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-emerald-500/20 rounded-xl p-6">
                <span className="text-3xl font-bold text-emerald-400/80 mb-3 block">03</span>
                <p className="text-gray-200 leading-relaxed text-base font-medium">
                  Escape routes need to be learned spatially, not just memorized from a floor plan
                </p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-emerald-500/20 rounded-xl p-6">
                <span className="text-3xl font-bold text-emerald-400/80 mb-3 block">04</span>
                <p className="text-gray-200 leading-relaxed text-base font-medium">
                  The right equipment depends on the situation — we taught decision-making, not just procedures
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
              Design Approach
            </p>

            {/* Subheading */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Learning That Feels Effortless
            </h2>

            {/* Intro paragraph */}
            <p className="text-lg text-gray-400 leading-relaxed mb-16">
              This wasn't just a simulation — it was an educational tool that needed to teach life-saving skills. Every design decision focused on helping users absorb knowledge naturally while immersed in the experience.
            </p>
          </div>

          {/* Principle blocks */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
            {/* Principle 1 */}
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-3">Progressive Disclosure</h3>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Information is revealed in stages to prevent overload. Users learn one concept at a time before moving forward.
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
                <h3 className="text-2xl font-bold text-white mb-3">Contextual Learning</h3>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Educational content appears exactly where it's needed — integrated into the environment rather than interrupting the experience.
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
                <h3 className="text-2xl font-bold text-white mb-3">Learn Then Practice</h3>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Users read about equipment first, then immediately use it hands-on — reinforcing knowledge through action.
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
              The Result
            </p>

            {/* Subheading */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              A Training Tool That Teaches
            </h2>

            {/* Body paragraph */}
            <p className="text-lg text-gray-400 leading-relaxed mb-12">
              We delivered a fully functional VR fire safety simulator to Sykehuspartner. The project received an A grade and demonstrated that VR can effectively teach complex safety procedures in a way that's engaging, memorable, and risk-free. The experience taught me that the best educational tools balance technical accuracy with genuine empathy for how people learn under pressure.
            </p>

            {/* Key takeaways */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-emerald-500/20 rounded-xl p-5">
                <p className="text-gray-200 font-medium">
                  User research transforms assumptions into real insight
                </p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-emerald-500/20 rounded-xl p-5">
                <p className="text-gray-200 font-medium">
                  Learning design requires empathy for how people absorb information
                </p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-emerald-500/20 rounded-xl p-5">
                <p className="text-gray-200 font-medium">
                  Cross-functional collaboration produces better outcomes
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
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
