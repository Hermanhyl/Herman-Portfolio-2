import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react"; // Optional: replace with another icon lib

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className="bg-gray-950 border-b border-gray-800 shadow-md w-full z-50">
      <div className="w-full px-6 md:px-16 py-4 flex justify-between items-center mx-auto relative">
        <Link to="/" className="text-2xl font-bold tracking-widest text-white">
          <span className="text-cyan-400">/</span>
          <span className="hover:text-cyan-400 transition">PORTFOLIO</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-10 text-sm uppercase tracking-wider">
          <Link
            to="/"
            className="text-gray-300 text-lg font-bold hover:text-cyan-400 transition"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-300 text-lg font-bold hover:text-cyan-400 transition"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-300 text-lg font-bold hover:text-cyan-400 transition"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Dropdown */}
        {menuOpen && (
            <div
              ref={menuRef}
              className="absolute top-full right-6 mt-2 w-56 bg-gray-900 border border-gray-800 rounded-xl shadow-md p-4 flex flex-col items-center text-center space-y-5 md:hidden z-50"
            >
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-cyan-400 transition text-lg py-2 w-full"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-cyan-400 transition text-lg py-2 w-full"
              >
                About
              </Link>
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-cyan-400 transition text-lg py-2 w-full"
              >
                Contact
              </Link>
            </div>
          )}
      </div>
    </header>
  );
}

export default Header;
