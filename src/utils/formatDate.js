/**
 * Get locale string from language code
 * @param {string} lang - Language code ('en' or 'no')
 * @returns {string} Locale string for Intl.DateTimeFormat
 */
function getLocale(lang) {
  return lang === 'no' ? 'nb-NO' : 'en-US';
}

/**
 * Format a date string for display
 *
 * @param {string} dateString - Date string to format
 * @param {string} lang - Language code ('en' or 'no')
 * @param {Object} options - Intl.DateTimeFormat options
 * @returns {string} Formatted date string
 */
export function formatDate(dateString, lang = 'en', options = { month: 'short', day: 'numeric', year: 'numeric' }) {
  const date = new Date(dateString);
  return date.toLocaleDateString(getLocale(lang), options);
}

/**
 * Format a date string with long month name
 *
 * @param {string} dateString - Date string to format
 * @param {string} lang - Language code ('en' or 'no')
 * @returns {string} Formatted date string (e.g., "January 15, 2025" or "15. januar 2025")
 */
export function formatDateLong(dateString, lang = 'en') {
  return formatDate(dateString, lang, { month: 'long', day: 'numeric', year: 'numeric' });
}
