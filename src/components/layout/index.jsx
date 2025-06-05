import Footer from "../../pages/footer";
import { Outlet } from "react-router-dom";
import Header from "../header";

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
  <Header />
  <main className="flex-grow backdrop-blur-sm bg-black/30">
    <Outlet />
  </main>
  <Footer />
</div>
  );
}
