import { useEffect, useRef } from 'react';

/**
 * Focus-trap + restore-focus hook for dialogs and modal overlays.
 *
 * When `active` becomes true:
 *   1. Stores the element that had focus at activation time so it can
 *      be restored on deactivation.
 *   2. Moves focus inside the container — to the first element that
 *      matches the selector, or the container itself if none found.
 *   3. Intercepts Tab / Shift+Tab so focus cycles within the container.
 *   4. Calls `onEscape` when the user presses Escape (callers wire this
 *      to their own close handler).
 *
 * When `active` becomes false:
 *   - Returns focus to the previously-focused element.
 *
 * The hook returns a ref to attach to the container element.
 *
 * Notes:
 *   - This is a lightweight implementation, not a full focus-trap
 *     library. It does not handle iframe focus, shadow DOM, or
 *     `contenteditable` quirks. For the dialogs in this portfolio
 *     (chatbot, illustration lightbox, mobile menu) those edge cases
 *     do not apply.
 *   - The container must be in the DOM by the time `active` flips to
 *     true. Render the dialog conditionally and only then set active.
 *
 * @param {boolean} active - Whether the trap is currently engaged.
 * @param {Object} options
 * @param {() => void} [options.onEscape] - Called on Escape keydown.
 * @param {string} [options.initialFocusSelector] - CSS selector for the
 *   element that should receive focus on activation. Defaults to the
 *   first focusable descendant.
 * @returns {React.MutableRefObject} Container ref.
 */
export default function useFocusTrap(active, { onEscape, initialFocusSelector } = {}) {
  const containerRef = useRef(null);
  const previouslyFocusedRef = useRef(null);

  useEffect(() => {
    if (!active) return;
    const container = containerRef.current;
    if (!container) return;

    previouslyFocusedRef.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;

    const focusableSelectors = [
      'a[href]',
      'area[href]',
      'button:not([disabled])',
      'input:not([disabled]):not([type="hidden"])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      'iframe',
      '[tabindex]:not([tabindex="-1"])',
      '[contenteditable]',
    ].join(',');

    const getFocusable = () =>
      Array.from(container.querySelectorAll(focusableSelectors)).filter(
        (el) => !el.hasAttribute('disabled') && el.offsetParent !== null
      );

    // Move focus inside the trap.
    const initial = initialFocusSelector
      ? container.querySelector(initialFocusSelector)
      : getFocusable()[0];
    if (initial && typeof initial.focus === 'function') {
      initial.focus();
    } else {
      container.focus();
    }

    const onKeyDown = (event) => {
      if (event.key === 'Escape' && typeof onEscape === 'function') {
        event.stopPropagation();
        onEscape();
        return;
      }
      if (event.key !== 'Tab') return;

      const focusables = getFocusable();
      if (focusables.length === 0) {
        event.preventDefault();
        return;
      }
      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    container.addEventListener('keydown', onKeyDown);

    return () => {
      container.removeEventListener('keydown', onKeyDown);
      // Restore focus to the previously-focused element if it is
      // still in the DOM and focusable.
      const prev = previouslyFocusedRef.current;
      if (prev && document.contains(prev) && typeof prev.focus === 'function') {
        prev.focus();
      }
    };
    // We intentionally do not depend on onEscape / initialFocusSelector
    // to avoid re-running the entire trap setup when the consumer
    // re-renders. Treat them as stable for the lifetime of `active`.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return containerRef;
}
