import img from '../../lib/assets.js';
import Logo from '../ui/Logo.jsx';
import { Link } from '../../lib/router.jsx';
import { footerAbout, footerColumns } from '../../data/site.js';
import { Apple, GooglePlay, socialIcons } from '../icons/Brand.jsx';
import { socials } from '../../data/site.js';

export function StoreBadges({ appleFirst = false }) {
  const play = <a key="p" href="#" onClick={(e) => e.preventDefault()} className="store-badge"><GooglePlay size={20} /><span><small>GET IT ON</small>Google Play</span></a>;
  const apple = <a key="a" href="#" onClick={(e) => e.preventDefault()} className="store-badge"><Apple size={20} /><span><small>Download on the</small>App Store</span></a>;
  return <div className="store-badges">{appleFirst ? [apple, play] : [play, apple]}</div>;
}

export function SocialCircles() {
  return (
    <div className="social-circles">
      {socials.map((s) => { const I = socialIcons[s]; return <a key={s} href="#" onClick={(e) => e.preventDefault()} aria-label={s}><I size={14} /></a>; })}
    </div>
  );
}

/**
 * Large light footer used on marketing / policy pages.
 * columns: keys of footerColumns; about: 'short' | 'long'; enotes adds "Nepal Enotes" to products.
 */
export default function SiteFooter({ columns = ['company', 'centres', 'exams', 'connect', 'quick', 'products'], about = 'short', enotes = false, appleFirst = false, bullet = 'dot' }) {
  return (
    <footer className="site-footer">
      <svg className="site-footer__wave" viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true"><path d="M0 40 C 360 0, 720 0, 1080 22 S 1440 40, 1440 40 V60 H0 Z" /></svg>
      <div className="site-footer__body container">
        <div className="site-footer__brand">
          <Logo variant="g" />
          <p>{footerAbout[about]}</p>
          <StoreBadges appleFirst={appleFirst} />
          <SocialCircles />
        </div>
        {columns.map((k) => {
          const col = footerColumns[k];
          const links = k === 'products' && !enotes ? col.links.slice(0, 3) : col.links;
          return (
            <div key={k} className={`site-footer__col bullet-${bullet}`}>
              <h4>{col.title}</h4>
              <ul>{links.map(([label, to]) => <li key={label}><Link to={to}>{label}</Link></li>)}</ul>
            </div>
          );
        })}
        <img className="site-footer__books" src={img['footer-books']} alt="" />
      </div>
      <div className="site-footer__bar">
        <div className="container">
          <span>© 2024 Nexu Education Private Limited. All Rights Reserved.</span>
          <span className="site-footer__legal"><Link to="/terms">Terms &amp; Conditions</Link><i>|</i><Link to="/privacy-policy">Privacy Policy</Link></span>
        </div>
      </div>
    </footer>
  );
}
