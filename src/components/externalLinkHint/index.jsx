import { useTranslation } from 'react-i18next';

/**
 * ExternalLinkHint — visually-hidden span that announces "opens in
 * new tab" (or the localised equivalent) to screen-reader users.
 * Drop inside any anchor that uses target="_blank" so SR users get
 * a warning about the context change (WCAG 3.2.5 Change on Request).
 *
 * Usage:
 *   <a href="..." target="_blank" rel="noopener noreferrer">
 *     View live site
 *     <ExternalLinkHint />
 *   </a>
 */
export default function ExternalLinkHint() {
  const { t } = useTranslation();
  return <span className="sr-only"> ({t('common.opensInNewTab')})</span>;
}
