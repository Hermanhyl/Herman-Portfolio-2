import PageTransition from '../../../components/pageTransition';
import OptimizedImage from '../../../components/optimizedImage';
import BackButton from '../../../components/backButton';
import useDocumentMeta from '../../../hooks/useDocumentMeta';

export default function HobbyistCaseStudy() {
  useDocumentMeta({
    title: 'Hobbyist Case Study',
    description: 'A social platform that helps people find others who share their hobbies — no swiping, just genuine connections.',
    url: 'https://hermanhylland.netlify.app/case-study/hobbyist',
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
                      src="/hobbyist.jpg"
                      alt="Hobbyist app mockup showing Make Real Friends Through Shared Activities"
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
                  Hobbyist
                </h1>

                {/* Tagline */}
                <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
                  A social platform that helps people find others who share their hobbies — no swiping, just genuine connections.
                </p>

                {/* Metadata - clean typography, no boxes */}
                <div className="pt-4 space-y-2 text-sm md:text-base">
                  <p>
                    <span className="text-emerald-400 font-semibold">Role:</span>{' '}
                    <span className="text-gray-300">UX Designer & Frontend Developer</span>
                  </p>
                  <p>
                    <span className="text-emerald-400 font-semibold">Type:</span>{' '}
                    <span className="text-gray-300">Personal Project</span>
                    <span className="text-gray-600 mx-3">•</span>
                    <span className="text-emerald-400 font-semibold">Status:</span>{' '}
                    <span className="text-gray-300">In development</span>
                  </p>
                  <p>
                    <span className="text-emerald-400 font-semibold">Stack:</span>{' '}
                    <span className="text-gray-300">React, TypeScript, Tailwind CSS</span>
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
              Making friends as an adult is hard — especially around specific hobbies. Dating apps have solved matching for romance, but there's no good way to find a hiking buddy, a board game group, or someone to practice a language with. Hobbyist aims to fill that gap with activity-first connections.
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
              Understanding the Problem Space
            </h2>

            {/* Intro paragraph */}
            <p className="text-lg text-gray-400 leading-relaxed mb-12">
              Before designing, I explored why existing solutions fall short. What makes finding hobby partners different from dating or general social networking?
            </p>

            {/* Key insights - 2x2 grid of cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left">
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-emerald-500/20 rounded-xl p-6">
                <span className="text-3xl font-bold text-emerald-400 mb-3 block">01</span>
                <p className="text-white leading-relaxed text-lg">
                  Dating app mechanics feel wrong for friendships — swiping creates pressure and awkwardness
                </p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-emerald-500/20 rounded-xl p-6">
                <span className="text-3xl font-bold text-emerald-400 mb-3 block">02</span>
                <p className="text-white leading-relaxed text-lg">
                  People want to do activities together, not just chat — the hobby should be the focus, not the profile
                </p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-emerald-500/20 rounded-xl p-6">
                <span className="text-3xl font-bold text-emerald-400 mb-3 block">03</span>
                <p className="text-white leading-relaxed text-lg">
                  Trust matters — users need to feel safe meeting strangers around shared interests
                </p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-emerald-500/20 rounded-xl p-6">
                <span className="text-3xl font-bold text-emerald-400 mb-3 block">04</span>
                <p className="text-white leading-relaxed text-lg">
                  Scheduling is a barrier — even interested people fail to connect if coordinating is too hard
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="rounded-2xl overflow-hidden mt-12">
              <OptimizedImage
                src="/Hobbyist/how_it_works.jpg"
                alt="How Hobbyist works - activity-first connection flow"
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
              Activity-First, Not Profile-First
            </h2>

            {/* Intro paragraph */}
            <p className="text-lg text-gray-400 leading-relaxed mb-16">
              Instead of browsing people and hoping they share your interests, Hobbyist flips the model. You browse activities and find people through the things you want to do together.
            </p>
          </div>

          {/* Principle blocks */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
            {/* Principle 1 */}
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-3">Activities as the Core</h3>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Users create or browse activities — like "Sunday morning hike" or "Board game night" — and join based on interest. The activity is the anchor, not the person.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden max-w-xs mx-auto">
                <OptimizedImage
                  src="/Hobbyist/myActivities.png"
                  alt="Activity browsing screen showing various hobby activities"
                  className="w-full h-auto"
                  style={{ imageRendering: 'crisp-edges' }}
                />
              </div>
            </div>

            {/* Principle 2 */}
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-3">Built-in Safety</h3>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Meeting strangers can feel risky. Hobbyist includes safety tips, optional identity verification, and activity reviews to build trust over time.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden max-w-xs mx-auto">
                <OptimizedImage
                  src="/Hobbyist/safety_tips.png"
                  alt="Safety features and verification screen"
                  className="w-full h-auto"
                  style={{ imageRendering: 'crisp-edges' }}
                />
              </div>
            </div>

            {/* Principle 3 */}
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-3">Simple Coordination</h3>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Once matched to an activity, users have a clear path to confirm attendance, message the group, and see logistics — reducing the friction that kills plans.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden max-w-xs mx-auto">
                <OptimizedImage
                  src="/Hobbyist/simpleCoordination.png"
                  alt="Activity details and messaging screen"
                  className="w-full h-auto"
                  style={{ imageRendering: 'crisp-edges' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: AI Integration */}
        <section className="relative py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Section label */}
            <p className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3">
              AI Integration
            </p>

            {/* Subheading */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              An AI Concierge for Activities
            </h2>

            {/* Intro paragraph */}
            <p className="text-lg text-gray-400 leading-relaxed mb-16">
              Finding the right activity shouldn't feel like work. I integrated an AI chat feature that acts as a personal concierge — helping users discover activities based on their interests, availability, and location. It's a conversational way to explore options without endless scrolling and filtering.
            </p>
          </div>

          {/* Feature block */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-3">Natural Conversation</h3>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Users can chat naturally — "I want to do something outdoors this weekend" or "Find me a board game group near Dresden" — and the AI suggests relevant activities. It learns from preferences over time, making recommendations more personal the more you use it.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden max-w-xs mx-auto">
                <OptimizedImage
                  src="/Hobbyist/AI_chat.jpg"
                  alt="AI Buddy Chat interface showing a conversation about finding activities"
                  className="w-full h-auto"
                  style={{ imageRendering: 'crisp-edges' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: The Result */}
        <section className="relative py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Section label */}
            <p className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3">
              The Result
            </p>

            {/* Subheading */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              A Platform Taking Shape
            </h2>

            {/* Body paragraph */}
            <p className="text-lg text-gray-400 leading-relaxed mb-12">
              Hobbyist is currently in development, with core features designed and built in React and TypeScript. The project has pushed me to think deeply about social dynamics, trust, and how digital products can facilitate real-world connection. It's also been a hands-on exercise in building a full product — from UX research and design through to frontend implementation.
            </p>

            {/* Key takeaways */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-emerald-500/20 rounded-xl p-6 text-left">
                <span className="text-3xl font-bold text-emerald-400 mb-3 block">01</span>
                <p className="text-white leading-relaxed text-lg">
                  Designing for social interaction requires understanding psychology, not just usability
                </p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-emerald-500/20 rounded-xl p-6 text-left">
                <span className="text-3xl font-bold text-emerald-400 mb-3 block">02</span>
                <p className="text-white leading-relaxed text-lg">
                  Personal projects let you own the entire process — research, design, and code
                </p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-emerald-500/20 rounded-xl p-6 text-left">
                <span className="text-3xl font-bold text-emerald-400 mb-3 block">03</span>
                <p className="text-white leading-relaxed text-lg">
                  Building in public keeps momentum and invites feedback
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="https://hobbyist.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              View Live Demo
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>

            {/* Back button - bottom */}
            <BackButton position="bottom" />
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
