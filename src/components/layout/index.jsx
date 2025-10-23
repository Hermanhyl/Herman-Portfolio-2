import Footer from "../../pages/footer";
import { Outlet } from "react-router-dom";
import Header from "../header";
import ScrollToTop from "../scrollToTop";
import BackToTop from "../backToTop";

/**
 * Layout component that provides the main structure for the application.
 * It includes a header, a main content area for nested routes, and a footer.
 *
 * @component
 * @returns {JSX.Element} The layout structure with header, main content, and footer.
 */

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen animated-bg text-white">
  <ScrollToTop />
  <BackToTop />
  {/* Skip to main content link for keyboard navigation */}
  <a
    href="#main-content"
    className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-emerald-500 text-white px-6 py-3 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-black"
  >
    Skip to main content
  </a>
  <Header />
  <main id="main-content" className="flex-grow backdrop-blur-sm bg-black/30">
    <Outlet />
  </main>
  <Footer />
</div>
  );
}
