import Logo from '../ui/Logo.jsx';
import { Link } from '../../lib/router.jsx';
import { Facebook, Instagram, Telegram, XLogo, Youtube } from '../icons/Brand.jsx';

const DEFAULT_LINKS = [['Terms & Conditions', '/terms'], ['Privacy Policy', '/privacy-policy']];

/** Slim dark footer used on learning pages and the dashboard. */
export default function StudyFooter({ links = DEFAULT_LINKS, copyright = '© 2024 Nexu Education Private Limited. All Rights Reserved.', icons = [Facebook, XLogo, Instagram, Youtube, Telegram], divided = true, className = '' }) {
  return (
    <footer className={`study-footer ${className}`}>
      <div className="study-footer__inner study-container">
        <Logo variant="g" tone="light" />
        <p className="study-footer__copy">{copyright}</p>
        <nav className={`study-footer__links ${divided ? 'is-divided' : ''}`}>
          {links.map(([l, to], i) => <span key={l}>{i > 0 && divided && <i>|</i>}<Link to={to}>{l}</Link></span>)}
        </nav>
        <div className="study-footer__social">
          {icons.map((I, i) => <a key={i} href="#" onClick={(e) => e.preventDefault()} aria-label="social"><I size={18} /></a>)}
        </div>
      </div>
    </footer>
  );
}
