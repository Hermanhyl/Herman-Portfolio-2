import PageTransition from '../../../components/pageTransition';
import OptimizedImage from '../../../components/optimizedImage';
import BackButton from '../../../components/backButton';
import useDocumentMeta from '../../../hooks/useDocumentMeta';

export default function PiaSalaryCaseStudy() {
  useDocumentMeta({
    title: 'PIA Salary Tracker Case Study',
    description: 'A privacy-first income tracking app with automatic tax calculations — all your financial data stays on your device, stored in Excel files you control.',
    url: 'https://hermanhylland.netlify.app/case-study/pia-salary',
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
                      src="/SaleryTracker.jpg"
                      alt="PIA Salary Tracker dashboard interface"
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
                  UX Design • Frontend Development • Next.js
                </p>

                {/* Title */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
                  PIA Salary Tracker
                </h1>

                {/* Tagline */}
                <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
                  A privacy-first income tracking app with automatic tax calculations — all your financial data stays on your device, stored in Excel files you control.
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
                    <span className="text-gray-300">Complete</span>
                  </p>
                  <p>
                    <span className="text-emerald-400 font-semibold">Stack:</span>{' '}
                    <span className="text-gray-300">Next.js, React 19, TypeScript, Tailwind CSS</span>
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
              Tracking income across multiple sources shouldn't require trusting a company with your financial data. I needed a tool that could handle monthly earnings, calculate deductions automatically, and show trends over time — all while keeping sensitive information completely private and portable.
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
              Why Existing Tools Fall Short
            </h2>

            {/* Intro paragraph */}
            <p className="text-lg text-gray-400 leading-relaxed mb-12">
              Most income tracking apps want your data in their cloud. For something as sensitive as salary information, that's a trade-off many people aren't comfortable making.
            </p>

            {/* Key insights - 2x2 grid of cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12 text-left">
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-emerald-500/20 rounded-xl p-6">
                <span className="text-3xl font-bold text-emerald-400 mb-3 block">01</span>
                <p className="text-white leading-relaxed text-lg">
                  Financial data is deeply personal — users shouldn't have to create accounts or trust cloud storage to track their income
                </p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-emerald-500/20 rounded-xl p-6">
                <span className="text-3xl font-bold text-emerald-400 mb-3 block">02</span>
                <p className="text-white leading-relaxed text-lg">
                  Excel is familiar — people already know how to back up, organize, and share spreadsheet files
                </p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-emerald-500/20 rounded-xl p-6">
                <span className="text-3xl font-bold text-emerald-400 mb-3 block">03</span>
                <p className="text-white leading-relaxed text-lg">
                  Automatic calculations save time — tax and social insurance deductions follow predictable rules that software should handle
                </p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-emerald-500/20 rounded-xl p-6">
                <span className="text-3xl font-bold text-emerald-400 mb-3 block">04</span>
                <p className="text-white leading-relaxed text-lg">
                  Bilingual access matters — a tool built for Germany needs to work in both German and English
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="rounded-2xl overflow-hidden">
              <OptimizedImage
                src="/SaleryTracker.jpg"
                alt="PIA Salary Tracker showing calculation fields and language options"
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
              Simple, Private, and Portable
            </h2>

            {/* Intro paragraph */}
            <p className="text-lg text-gray-400 leading-relaxed mb-16">
              The design prioritized clarity and control. Users should understand their income at a glance and never wonder where their data lives.
            </p>
          </div>

          {/* Principle blocks */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
            {/* Principle 1 */}
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-3">Clear Dashboard</h3>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Year-based income overview with trend charts lets users see patterns immediately. No digging through menus — the important numbers are front and center.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden">
                <OptimizedImage
                  src="/SaleryTracker.jpg"
                  alt="PIA Salary Tracker dashboard with income overview and trend charts"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Principle 2 */}
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-3">Local-First Data</h3>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  All data lives in Excel files on your device. Load a file to continue, save when you're done. No accounts, no cloud, no wondering who has access.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="rounded-2xl overflow-hidden max-w-md">
                  <OptimizedImage
                    src="/salaryTracker/saleryTrackerForm.jpg"
                    alt="File load and save interface showing local Excel storage"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Principle 3 */}
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-3">Smart Defaults, Full Control</h3>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Social insurance rates are pre-configured but adjustable. Duplicate entry protection prevents mistakes. The app guides you while staying out of your way.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="rounded-2xl overflow-hidden max-w-md">
                  <OptimizedImage
                    src="/salaryTracker/taxStats.jpg"
                    alt="Entry form and settings showing configurable options"
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
              A Tool That Respects Its Users
            </h2>

            {/* Body paragraph */}
            <p className="text-lg text-gray-400 leading-relaxed mb-12">
              PIA Salary Tracker is now a practical tool I use for my own income tracking. Building it reinforced that privacy-first design isn't a constraint — it's a feature that simplifies both the architecture and the user experience. The project also pushed me to implement internationalization properly, making the app accessible to both German and English speakers.
            </p>

            {/* Takeaway cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-emerald-500/20 rounded-xl p-6 text-left">
                <span className="text-3xl font-bold text-emerald-400 mb-3 block">01</span>
                <p className="text-white leading-relaxed text-lg">
                  Privacy-first design builds trust and reduces complexity
                </p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-emerald-500/20 rounded-xl p-6 text-left">
                <span className="text-3xl font-bold text-emerald-400 mb-3 block">02</span>
                <p className="text-white leading-relaxed text-lg">
                  Familiar formats like Excel lower the learning curve
                </p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-emerald-500/20 rounded-xl p-6 text-left">
                <span className="text-3xl font-bold text-emerald-400 mb-3 block">03</span>
                <p className="text-white leading-relaxed text-lg">
                  Internationalization should be built in from the start, not bolted on later
                </p>
              </div>
            </div>

            {/* Action button */}
            <div className="flex justify-center">
              <a
                href="https://salerytracker.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                View Live App
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
