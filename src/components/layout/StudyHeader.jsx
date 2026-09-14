import { ChevronDown, Search } from 'lucide-react';
import Logo from '../ui/Logo.jsx';
import MegaMenu from './MegaMenu.jsx';
import useMegaMenu from './useMegaMenu.js';
import { Link } from '../../lib/router.jsx';
import { mainNav } from '../../data/site.js';

/** Header used on the learning pages (chapters, MCQ, notes…). */
export default function StudyHeader({ logo = 'g', searchCircle = true }) {
  const mega = useMegaMenu();
  return (
    <header className="study-header" ref={mega.root}>
      <div className="study-header__inner study-container">
        <Logo variant={logo} />
        <nav className="study-nav" aria-label="Main">
          {mainNav.filter((n) => !n.optional).map((n) => n.mega ? (
            <button key={n.label} type="button" {...mega.hover} onClick={mega.toggle} aria-expanded={mega.open} className={`study-nav__item ${mega.open ? 'is-open' : ''}`}>
              {n.label} <ChevronDown />
            </button>
          ) : <Link key={n.label} to={n.to} className="study-nav__item">{n.label}</Link>)}
        </nav>
        <div className="study-header__actions">
          <button type="button" className={`study-header__search ${searchCircle ? 'is-circle' : ''}`} aria-label="Search"><Search /></button>
          <Link to="/login" className="btn btn--outline study-header__login">Login</Link>
          <Link to="/register" className="btn btn--primary study-header__register">Register Now</Link>
        </div>
      </div>
      {mega.open && <MegaMenu onNavigate={mega.close} {...mega.hover} />}
    </header>
  );
}
