import PageTransition from '../../../components/pageTransition';
import OptimizedImage from '../../../components/optimizedImage';
import BackButton from '../../../components/backButton';
import useDocumentMeta from '../../../hooks/useDocumentMeta';

export default function HolidazeCaseStudy() {
  useDocumentMeta({
    title: 'Holidaze Case Study',
    description: 'A cozy booking app for slow-living getaways — browse, book, and unwind in handpicked cabins and retreats.',
    url: 'https://hermanhylland.netlify.app/case-study/holidaze',
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
              <div className="order-first lg:order-last lg:w-[60%] w-full">
                <OptimizedImage
                  src="/Holidaze/Natural-Titanium.png"
                  alt="Holidaze booking platform interface"
                  eager={true}
                  className="w-full h-auto"
                />
              </div>

              {/* Content Side */}
              <div className="lg:w-[45%] space-y-5 text-center lg:text-left">
                {/* Tags - inline with separators */}
                <p className="text-sm font-medium text-emerald-400 tracking-wide">
                  React • Vite • Tailwind CSS • Figma
                </p>

                {/* Title */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
                  Holidaze
                </h1>

                {/* Tagline */}
                <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
                  A cozy booking app for slow-living getaways — browse, book, and unwind in handpicked cabins and retreats.
                </p>

                {/* Metadata - clean typography, no boxes */}
                <div className="pt-4 space-y-2 text-sm md:text-base">
                  <p>
                    <span className="text-emerald-400 font-semibold">Role:</span>{' '}
                    <span className="text-gray-300">Frontend Developer & UI Designer</span>
                  </p>
                  <p>
                    <span className="text-emerald-400 font-semibold">Team:</span>{' '}
                    <span className="text-gray-300">3 people</span>
                    <span className="text-gray-600 mx-3">•</span>
                    <span className="text-emerald-400 font-semibold">Type:</span>{' '}
                    <span className="text-gray-300">Project Exam</span>
                  </p>
                  <p>
                    <span className="text-emerald-400 font-semibold">Outcome:</span>{' '}
                    <span className="text-gray-300">A grade</span>
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
              We were tasked with building a modern accommodation booking platform using the Noroff API. The goal was to create an experience that felt warm and inviting — not like a generic booking site, but something that matched the slow-living escapes it showcased. We also needed to work effectively as a three-person team with clear communication and version control.
            </p>
          </div>
        </section>

        {/* Section 3: Our Approach */}
        <section className="relative py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Section label */}
            <p className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3">
              Our Approach
            </p>

            {/* Subheading */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Collaboration First
            </h2>

            {/* Intro paragraph */}
            <p className="text-lg text-gray-400 leading-relaxed mb-12">
              As a team of three, we divided tasks based on strengths while staying involved in all aspects — planning, design, and development. Clear communication and disciplined GitHub workflows kept us aligned throughout.
            </p>

            {/* Key points - 2x2 grid of cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12 text-left">
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-emerald-500/20 rounded-xl p-6">
                <span className="text-3xl font-bold text-emerald-400 mb-3 block">01</span>
                <p className="text-white leading-relaxed text-lg">
                  Divided tasks by strength, but everyone touched design, code, and planning
                </p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-emerald-500/20 rounded-xl p-6">
                <span className="text-3xl font-bold text-emerald-400 mb-3 block">02</span>
                <p className="text-white leading-relaxed text-lg">
                  Used GitHub with clear commit messages and documentation to stay in sync
                </p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-emerald-500/20 rounded-xl p-6">
                <span className="text-3xl font-bold text-emerald-400 mb-3 block">03</span>
                <p className="text-white leading-relaxed text-lg">
                  Built in React with Tailwind CSS for fast, consistent styling
                </p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-emerald-500/20 rounded-xl p-6">
                <span className="text-3xl font-bold text-emerald-400 mb-3 block">04</span>
                <p className="text-white leading-relaxed text-lg">
                  Focused on functionality first, with design implemented from our Figma mockups
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="rounded-2xl overflow-hidden">
              <OptimizedImage
                src="/holidaze.png"
                alt="Holidaze Figma design mockup showing the visual style"
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
              Warm, Cozy, and Easy to Use
            </h2>

            {/* Intro paragraph */}
            <p className="text-lg text-gray-400 leading-relaxed mb-16">
              The visual design needed to reflect the product — peaceful getaways, not corporate travel. We used warm colors, soft typography, and generous whitespace to create a calm browsing experience.
            </p>
          </div>

          {/* Principle blocks */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
            {/* Principle 1 */}
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-3">Inviting Visual Language</h3>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Earthy tones, rounded corners, and cozy imagery create an atmosphere that matches the slow-living retreats users are booking.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden max-w-md mx-auto">
                <OptimizedImage
                  src="/Holidaze/holidaze.jpg"
                  alt="Holidaze homepage showing the visual style"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Principle 2 */}
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-3">Clear Booking Flow</h3>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Users can browse, view details, and book with minimal friction. The interface guides them step by step without overwhelming.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden">
                <OptimizedImage
                  src="/holidaze.png"
                  alt="Holidaze booking flow and venue detail page"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Principle 3 */}
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-3">Responsive Across Devices</h3>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Built mobile-first with Tailwind, ensuring the experience feels native whether you're browsing on your phone or desktop.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden">
                <OptimizedImage
                  src="/Holidaze/Midnight.png"
                  alt="Holidaze mobile responsive design"
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
              A Project We're Proud Of
            </h2>

            {/* Body paragraph */}
            <p className="text-lg text-gray-400 leading-relaxed mb-12">
              We delivered a fully functional booking platform that earned an A grade. More importantly, we learned how to collaborate effectively as a team — dividing work, communicating clearly, and maintaining code quality throughout. The project also highlighted areas for growth, including better error handling and accessibility improvements we'd prioritize in future work.
            </p>

            {/* Takeaway cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-emerald-500/20 rounded-xl p-6">
                <span className="text-3xl font-bold text-emerald-400 mb-3 block">01</span>
                <p className="text-white text-lg leading-relaxed">
                  Team collaboration requires clear communication and disciplined workflows
                </p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-emerald-500/20 rounded-xl p-6">
                <span className="text-3xl font-bold text-emerald-400 mb-3 block">02</span>
                <p className="text-white text-lg leading-relaxed">
                  Consistent styling frameworks like Tailwind accelerate development
                </p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-emerald-500/20 rounded-xl p-6">
                <span className="text-3xl font-bold text-emerald-400 mb-3 block">03</span>
                <p className="text-white text-lg leading-relaxed">
                  Recognizing areas for improvement is part of delivering good work
                </p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
              <a
                href="https://fireside-holidaze.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                View Live Site
                <span aria-hidden="true">→</span>
              </a>
              <a
                href="https://github.com/maddipaddi/Fireside-Holidaze"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                View GitHub
                <span aria-hidden="true">→</span>
              </a>
              <a
                href="https://www.figma.com/design/thqoG8jMTmJWJ0xvjoWJFX/PE2-Fireside-Holidaze?node-id=97-2&p=f&t=WNVw9oV9YS4fXdlk-0"
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
