import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Download, ChevronDown, Globe, FileText } from 'lucide-react';

/**
 * CVDownloadButton component - Dropdown button for downloading CV in different languages
 */
function CVDownloadButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState(null);
  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);

  const cvOptions = [
    {
      label: 'English',
      href: '/CV/CV_Herman_Hylland_English.pdf',
      icon: '🇬🇧',
    },
    {
      label: 'Norsk',
      href: '/CV/CV_Herman_Hylland_Norsk.pdf',
      icon: '🇳🇴',
    },
  ];

  // Calculate position and open dropdown
  const handleToggle = () => {
    if (!isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + 8,
        left: rect.left,
        width: Math.max(rect.width, 200),
      });
    }
    setIsOpen(!isOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  // Close dropdown on escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen]);

  // Close dropdown on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, true);
    return () => window.removeEventListener('scroll', handleScroll, true);
  }, [isOpen]);

  const handleDownload = (href) => {
    setIsOpen(false);
    window.open(href, '_blank');
  };

  const dropdown = (isOpen && dropdownPosition) ? createPortal(
    <div
      ref={dropdownRef}
      className="fixed animate-in fade-in duration-150"
      style={{
        top: dropdownPosition.top,
        left: dropdownPosition.left,
        minWidth: dropdownPosition.width,
        zIndex: 99999,
      }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-purple-500/20 blur-xl rounded-xl pointer-events-none"></div>

      <div className="relative backdrop-blur-md bg-gray-900 border border-white/20 rounded-xl overflow-hidden shadow-2xl">
        {/* Gradient border effect */}
        <div className="absolute -inset-[1px] bg-gradient-to-r from-emerald-500 via-cyan-500 to-purple-500 rounded-xl -z-10 opacity-50 pointer-events-none"></div>

        {/* Header */}
        <div className="px-4 py-2 border-b border-white/10 bg-white/5">
          <p className="text-xs text-gray-400 font-medium flex items-center gap-2">
            <Globe className="w-3 h-3" />
            Select Language
          </p>
        </div>

        {/* Options */}
        <div className="py-1">
          {cvOptions.map((option) => (
            <button
              key={option.label}
              onClick={() => handleDownload(option.href)}
              className="w-full px-4 py-3 flex items-center gap-3 text-left text-gray-200 hover:bg-white/10 hover:text-white transition-all duration-200 cursor-pointer"
              aria-label={`Download CV in ${option.label}`}
            >
              <span className="text-xl">{option.icon}</span>
              <div className="flex-1">
                <span className="font-medium">{option.label}</span>
              </div>
              <FileText className="w-4 h-4 text-gray-500 hover:text-emerald-400 transition-colors" />
            </button>
          ))}
        </div>
      </div>
    </div>,
    document.body
  ) : null;

  return (
    <>
      {/* Main Button */}
      <button
        ref={buttonRef}
        onClick={handleToggle}
        className={`group inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white shadow-lg hover:shadow-xl focus:ring-emerald-400 px-6 py-3 text-base ${!isOpen ? 'transform hover:scale-105' : ''}`}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Download CV - Select language"
      >
        <Download className="w-5 h-5" />
        Download CV
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown rendered via portal */}
      {dropdown}
    </>
  );
}

export default CVDownloadButton;
