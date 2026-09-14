import img from '../../lib/assets.js';
import { Link } from '../../lib/router.jsx';

/**
 * Uses the official logo from src/assets/logo.png
 * Supports tone='light' (with clean contrast treatment for dark backgrounds)
 * and markOnly/collapsed displays.
 */
export default function Logo({ variant = 'g', tone = 'dark', markOnly = false, className = '' }) {
  const isMarkOnly = markOnly || variant === 'mark';

  return (
    <Link
      to="/"
      className={`logo logo--${tone} ${isMarkOnly ? 'logo--mark-only' : ''} ${className}`}
      aria-label="Nexu Guru home"
    >
      <img
        src={img['logo1'] || img['logo']}
        alt="Nexu Guru – Learn without Limits"
        className="logo__img"
      />
    </Link>
  );
}
