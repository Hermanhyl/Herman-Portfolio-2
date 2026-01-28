import PageTransition from '../../../components/pageTransition';
import OptimizedImage from '../../../components/optimizedImage';
import BackButton from '../../../components/backButton';
import useDocumentMeta from '../../../hooks/useDocumentMeta';

export default function AuctionCaseStudy() {
  useDocumentMeta({
    title: 'Own The Bid Case Study',
    description: 'A web-based auction platform where users can create listings, place bids, and manage their credits in real-time.',
    url: 'https://hermanhylland.netlify.app/case-study/auction',
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
                <OptimizedImage
                  src="/Action-semester-project.png"
                  alt="Own The Bid auction platform interface"
                  eager={true}
                  className="w-full h-auto"
                />
              </div>

              {/* Content Side */}
              <div className="lg:w-[45%] space-y-5 text-center lg:text-left">
                {/* Tags - inline with separators */}
                <p className="text-sm font-medium text-emerald-400 tracking-wide">
                  UX Design • Frontend Development • JavaScript
                </p>

                {/* Title */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
                  Own The Bid
                </h1>

                {/* Tagline */}
                <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
                  A web-based auction platform where users can create listings, place bids, and manage their credits in real-time.
                </p>

                {/* Metadata - clean typography, no boxes */}
                <div className="pt-4 space-y-2 text-sm md:text-base">
                  <p>
                    <span className="text-emerald-400 font-semibold">Role:</span>{' '}
                    <span className="text-gray-300">UX Designer & Frontend Developer</span>
                  </p>
                  <p>
                    <span className="text-emerald-400 font-semibold">Type:</span>{' '}
                    <span className="text-gray-300">Semester Project</span>
                    <span className="text-gray-600 mx-3">•</span>
                    <span className="text-emerald-400 font-semibold">Stack:</span>{' '}
                    <span className="text-gray-300">JavaScript, HTML, CSS</span>
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
              Build a fully functional auction platform where users can register, create timed listings with images and descriptions, and bid on items. The site needed to handle real-time credit management and provide a smooth experience for both registered users and casual browsers.
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
              Understanding Auction Behavior
            </h2>

            {/* Intro paragraph */}
            <p className="text-lg text-gray-400 leading-relaxed mb-12">
              Auction platforms create urgency and competition. I needed to understand what makes users trust a listing, how they decide to bid, and what information they need to act quickly.
            </p>

            {/* Key insights - 2x2 grid of cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12 text-left">
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-emerald-500/20 rounded-xl p-6">
                <span className="text-3xl font-bold text-emerald-400 mb-3 block">01</span>
                <p className="text-white leading-relaxed text-lg">
                  Trust is everything — users need to see clear images, descriptions, and seller info before risking credits
                </p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-emerald-500/20 rounded-xl p-6">
                <span className="text-3xl font-bold text-emerald-400 mb-3 block">02</span>
                <p className="text-white leading-relaxed text-lg">
                  Time pressure drives action — visible deadlines and countdowns create urgency to bid now
                </p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-emerald-500/20 rounded-xl p-6">
                <span className="text-3xl font-bold text-emerald-400 mb-3 block">03</span>
                <p className="text-white leading-relaxed text-lg">
                  Credits must feel tangible — users need to always know their balance and what they can afford
                </p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-emerald-500/20 rounded-xl p-6">
                <span className="text-3xl font-bold text-emerald-400 mb-3 block">04</span>
                <p className="text-white leading-relaxed text-lg">
                  Browsing before committing — unregistered users should explore freely to build interest
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="rounded-2xl overflow-hidden">
              <OptimizedImage
                src="/own_the_bid/wire-frame.jpg"
                alt="Own The Bid wireframes showing mobile UI designs for home, profile, listings, and edit screens"
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
              Designed for Trust and Speed
            </h2>

            {/* Intro paragraph */}
            <p className="text-lg text-gray-400 leading-relaxed mb-16">
              Every design decision focused on helping users make confident bidding decisions quickly.
            </p>
          </div>

          {/* Principle blocks */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
            {/* Principle 1 */}
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-3">Clear Listing Information</h3>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Each listing shows images, description, current bid, time remaining, and seller details — everything needed to decide at a glance.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="rounded-2xl overflow-hidden max-w-sm">
                  <OptimizedImage
                    src="/own_the_bid/Mockup_hand.png"
                    alt="Listing detail page showing images, description, current bid, and time remaining"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Principle 2 */}
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-3">Visible Credit Balance</h3>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Users always see their available credits, so they know what they can bid without checking a separate page.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="rounded-2xl overflow-hidden max-w-sm">
                  <OptimizedImage
                    src="/own_the_bid/Black.png"
                    alt="Credit balance display showing available credits"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Principle 3 */}
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-3">Frictionless Browsing</h3>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Unregistered users can search and view listings freely. Registration is only required to bid, lowering the barrier to exploration.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden">
                <OptimizedImage
                  src="/own_the_bid/Midnight.png"
                  alt="Browse and search view showing listing grid"
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
              A Platform That Builds Confidence
            </h2>

            {/* Body paragraph */}
            <p className="text-lg text-gray-400 leading-relaxed mb-12">
              The project earned an A grade. After submission, I revisited the code to improve error handling and form validation — ensuring users get clear feedback when something goes wrong. It reinforced that good UX extends into the details: how errors are communicated, how forms guide input, how layouts stay consistent.
            </p>

            {/* Takeaway cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-emerald-500/20 rounded-xl p-6 text-left">
                <span className="text-3xl font-bold text-emerald-400 mb-3 block">01</span>
                <p className="text-white leading-relaxed text-lg">
                  Auction UX is about enabling fast, confident decisions
                </p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-emerald-500/20 rounded-xl p-6 text-left">
                <span className="text-3xl font-bold text-emerald-400 mb-3 block">02</span>
                <p className="text-white leading-relaxed text-lg">
                  Trust signals — images, seller info, clear deadlines — reduce hesitation
                </p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-emerald-500/20 rounded-xl p-6 text-left">
                <span className="text-3xl font-bold text-emerald-400 mb-3 block">03</span>
                <p className="text-white leading-relaxed text-lg">
                  Post-launch iteration is part of the design process
                </p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
              <a
                href="https://own-the-bid-main.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                View Live Site
                <span aria-hidden="true">→</span>
              </a>
              <a
                href="https://github.com/Hermanhyl/Own-The-Bid-Semester-Project-2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                View GitHub
                <span aria-hidden="true">→</span>
              </a>
              <a
                href="https://www.figma.com/design/8AhvLrYMu6VoQhHefNQpUz/Semester-Project-2-auction?t=RmAPyAmZq0TLngla-0"
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
