/**
 * Format a date string for display
 *
 * @param {string} dateString - Date string to format
 * @param {Object} options - Intl.DateTimeFormat options
 * @returns {string} Formatted date string
 */
export function formatDate(dateString, options = { month: 'short', day: 'numeric', year: 'numeric' }) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', options);
}

/**
 * Format a date string with long month name
 *
 * @param {string} dateString - Date string to format
 * @returns {string} Formatted date string (e.g., "January 15, 2025")
 */
export function formatDateLong(dateString) {
  return formatDate(dateString, { month: 'long', day: 'numeric', year: 'numeric' });
}
