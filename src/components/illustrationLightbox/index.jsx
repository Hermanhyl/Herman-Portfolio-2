import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Lightbox component for viewing illustrations in fullscreen
 */
function IllustrationLightbox({ illustrations, currentIndex, isOpen, onClose, onNavigate }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const currentIllustration = illustrations[currentIndex];

  const handlePrevious = useCallback(() => {
    setImageLoaded(false);
    const newIndex = currentIndex === 0 ? illustrations.length - 1 : currentIndex - 1;
    onNavigate(newIndex);
  }, [currentIndex, illustrations.length, onNavigate]);

  const handleNext = useCallback(() => {
    setImageLoaded(false);
    const newIndex = currentIndex === illustrations.length - 1 ? 0 : currentIndex + 1;
    onNavigate(newIndex);
  }, [currentIndex, illustrations.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          handlePrevious();
          break;
        case "ArrowRight":
          handleNext();
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, handlePrevious, handleNext]);

  useEffect(() => {
    if (isOpen) {
      setImageLoaded(false);
    }
  }, [isOpen, currentIndex]);

  if (!isOpen) return null;

  const modalContent = (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Viewing ${currentIllustration?.title}`}
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.97)",
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 80px",
        boxSizing: "border-box",
      }}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close lightbox"
        style={{
          position: "fixed",
          top: 16,
          right: 16,
          zIndex: 100001,
          padding: 12,
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderRadius: "50%",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <X size={24} color="white" />
      </button>

      {/* Counter */}
      <div
        style={{
          position: "fixed",
          top: 16,
          left: 16,
          zIndex: 100001,
          padding: "8px 16px",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderRadius: 20,
          color: "white",
          fontWeight: 500,
          fontSize: 14,
        }}
      >
        {currentIndex + 1} / {illustrations.length}
      </div>

      {/* Previous button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handlePrevious();
        }}
        aria-label="Previous illustration"
        style={{
          position: "fixed",
          left: 16,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 100001,
          padding: 12,
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderRadius: "50%",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ChevronLeft size={32} color="white" />
      </button>

      {/* Next button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
        aria-label="Next illustration"
        style={{
          position: "fixed",
          right: 16,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 100001,
          padding: 12,
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderRadius: "50%",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ChevronRight size={32} color="white" />
      </button>

      {/* Image container */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: "100%",
          maxHeight: "100%",
        }}
      >
        {/* Loading spinner */}
        {!imageLoaded && (
          <div
            style={{
              width: 48,
              height: 48,
              border: "4px solid rgba(52, 211, 153, 0.3)",
              borderTopColor: "#34d399",
              borderRadius: "50%",
              animation: "lightbox-spin 1s linear infinite",
            }}
          />
        )}

        {/* Image with watermark */}
        <div
          style={{
            position: "relative",
            display: imageLoaded ? "block" : "none",
            userSelect: "none",
          }}
          onContextMenu={(e) => e.preventDefault()}
        >
          <img
            key={currentIllustration?.src}
            src={currentIllustration?.src}
            alt={currentIllustration?.title}
            onLoad={() => setImageLoaded(true)}
            draggable="false"
            style={{
              maxWidth: "100%",
              maxHeight: "calc(100vh - 180px)",
              width: "auto",
              height: "auto",
              objectFit: "contain",
              borderRadius: 8,
              pointerEvents: "none",
            }}
          />
          {/* Watermark */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) rotate(-20deg)",
              color: "rgba(255, 255, 255, 0.15)",
              fontSize: "2rem",
              fontWeight: "bold",
              pointerEvents: "none",
              userSelect: "none",
              whiteSpace: "nowrap",
            }}
          >
            Herman Hylland
          </div>
        </div>

        {/* Title */}
        {imageLoaded && (
          <h3
            style={{
              marginTop: 16,
              fontSize: "1.25rem",
              fontWeight: "bold",
              color: "white",
              textAlign: "center",
            }}
          >
            {currentIllustration?.title}
          </h3>
        )}
      </div>

      <style>{`
        @keyframes lightbox-spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );

  return createPortal(modalContent, document.body);
}

export default IllustrationLightbox;
