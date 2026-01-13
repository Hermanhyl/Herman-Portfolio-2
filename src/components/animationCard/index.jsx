import { Link } from "react-router-dom";
import { useState } from "react";
import { Play, Clock } from "lucide-react";

/**
 * Helper function to extract YouTube video ID from various YouTube URL formats
 */
function getYouTubeId(url) {
  if (!url) return null;
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([^?&]+)/);
  return match ? match[1] : null;
}

/**
 * AnimationCard component for displaying animation pieces in a grid
 * Uses the video itself as the preview, or YouTube thumbnail for YouTube videos
 *
 * @param {Object} props - Component props
 * @param {Object} props.animation - Animation data object
 */
function AnimationCard({ animation }) {
  const youtubeId = getYouTubeId(animation.video);
  const isYouTube = !!youtubeId;
  const [imgError, setImgError] = useState(false);

  // YouTube thumbnail URLs - try maxres first, fall back to hqdefault
  const thumbnailUrl = isYouTube
    ? imgError
      ? `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`
      : `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`
    : null;

  return (
    <Link
      to={`/animation/${animation.id}`}
      className="block w-full h-full focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black rounded-2xl group"
    >
      <div className="relative w-full h-full bg-gray-800 rounded-2xl border-2 border-gray-600 hover:border-purple-500/70 shadow-md hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 flex flex-col cursor-pointer transform hover:scale-[1.02]">
        <div className="flex flex-col h-full p-6 lg:p-8">
          {/* Video preview */}
          <div className="relative w-full h-56 md:h-64 lg:h-72 mb-6 overflow-hidden rounded-xl bg-gray-900">
            {isYouTube ? (
              <img
                src={thumbnailUrl}
                alt={animation.title}
                className="w-full h-full object-cover"
                onError={() => setImgError(true)}
              />
            ) : (
              <video
                src={animation.video}
                muted
                loop
                playsInline
                autoPlay
                className="w-full h-full object-contain"
              />
            )}
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-purple-500/80 group-hover:bg-purple-500 flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg shadow-purple-500/50">
                <Play className="w-7 h-7 text-white ml-1" fill="white" />
              </div>
            </div>
            {/* Duration badge */}
            {animation.duration && (
              <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-black/70 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <Clock className="w-3.5 h-3.5 text-purple-300" />
                <span className="text-xs text-white font-medium">{animation.duration}</span>
              </div>
            )}
          </div>

          {/* Title */}
          <h3 className="text-xl lg:text-2xl font-semibold text-white group-hover:text-purple-400 transition-colors duration-300 mb-3">
            {animation.title}
          </h3>

          {/* Software/tools badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            {animation.software.slice(0, 3).map((tool, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-gray-300 group-hover:border-purple-500/30 group-hover:text-purple-300 transition-all duration-300"
              >
                {tool}
              </span>
            ))}
            {animation.software.length > 3 && (
              <span className="px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-gray-400">
                +{animation.software.length - 3}
              </span>
            )}
          </div>

          {/* Teaser text */}
          <p className="text-gray-400 group-hover:text-gray-200 mb-6 flex-grow transition-colors duration-300 text-sm lg:text-base leading-relaxed line-clamp-3">
            {animation.teaser || "No description available."}
          </p>

          {/* CTA Button */}
          <div className="inline-flex mt-auto">
            <span className="px-6 py-2.5 text-sm lg:text-base bg-gradient-to-r from-purple-500 to-pink-500 group-hover:from-purple-600 group-hover:to-pink-600 rounded-lg text-white transition-all duration-300 font-medium shadow-lg group-hover:shadow-purple-500/25">
              View Animation →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default AnimationCard;
