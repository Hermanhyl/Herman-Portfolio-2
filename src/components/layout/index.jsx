import { useEffect, useRef } from "react";
import Footer from "../../pages/footer";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../header";
import ScrollToTop from "../scrollToTop";
import BackToTop from "../backToTop";
import ChatBot from "../chatBot";

/**
 * Layout component that provides the main structure for the application.
 * It includes a header, a main content area for nested routes, and a footer.
 *
 * @component
 * @returns {JSX.Element} The layout structure with header, main content, and footer.
 */

export default function Layout() {
  const mainRef = useRef(null);
  const location = useLocation();
  const isFirstRenderRef = useRef(true);

  // WCAG 2.4.3 Focus Order. On every client-side route change (but not
  // the initial load), move keyboard focus to the main landmark so SR
  // users hear the new page and keyboard users don't get stranded on
  // the nav link they just clicked (which is now offscreen). The
  // skip-link target reuses the same #main-content anchor.
  useEffect(() => {
    if (isFirstRenderRef.current) {
      isFirstRenderRef.current = false;
      return;
    }
    mainRef.current?.focus();
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen animated-bg text-white overflow-x-hidden">
  <ScrollToTop />
  <BackToTop />
  <ChatBot />
  {/* Skip to main content link for keyboard navigation */}
  <a
    href="#main-content"
    className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-emerald-500 text-white px-6 py-3 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-black"
  >
    Skip to main content
  </a>
  <Header />
  <main
    ref={mainRef}
    id="main-content"
    tabIndex={-1}
    className="flex-grow backdrop-blur-sm bg-black/30 focus:outline-none"
  >
    <Outlet />
  </main>
  <Footer />
</div>
  );
}
