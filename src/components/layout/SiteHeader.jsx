import { ChevronDown, Menu, Plus, Search, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import TopBar from './TopBar.jsx';
import MegaMenu from './MegaMenu.jsx';
import useMegaMenu from './useMegaMenu.js';
import Logo from '../ui/Logo.jsx';
import { Link } from '../../lib/router.jsx';
import { mainNav } from '../../data/site.js';
import { megaMenu } from '../../data/site.js';

/** Marketing-site header: social top bar + G logo + pill buttons. */
export default function SiteHeader({ active, showNews = false, searchRing = false, registerPlus = false }) {
  const mega = useMegaMenu();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [studyOpen, setStudyOpen] = useState(false);
  const items = mainNav.filter((n) => !n.optional || showNews);
  useEffect(() => {
    document.body.classList.toggle('has-mobile-drawer', drawerOpen);
    return () => document.body.classList.remove('has-mobile-drawer');
  }, [drawerOpen]);
  const closeDrawer = () => setDrawerOpen(false);
  return (
    <>
      <TopBar />
      <header className="site-header" ref={mega.root}>
        <div className="site-header__inner header-container">
          <Logo variant="g" />
          <nav className="site-nav" aria-label="Main">
            {items.map((n) => n.mega ? (
              <button key={n.label} type="button" {...mega.hover} onClick={mega.toggle} aria-expanded={mega.open}
                className={`site-nav__item site-nav__item--mega ${mega.open ? 'is-open' : ''} ${active === n.label ? 'is-active' : ''}`}>
                {n.label} <ChevronDown />
              </button>
            ) : (
              <Link key={n.label} to={n.to} className={`site-nav__item ${active === n.label ? 'is-active' : ''}`}>{n.label}</Link>
            ))}
          </nav>
          <div className="site-header__actions">
            <button type="button" className={`site-header__search ${searchRing ? 'has-ring' : ''}`} aria-label="Search"><Search /></button>
            <button type="button" className="site-header__menu" onClick={() => setDrawerOpen(true)} aria-label="Open menu"><Menu /></button>
            <Link to="/login" className="btn btn--purple-outline btn--pill site-header__login">Login</Link>
            <Link to="/register" className="btn btn--purple btn--pill site-header__register">{registerPlus && <Plus />}Register Now</Link>
          </div>
        </div>
        {mega.open && <MegaMenu onNavigate={mega.close} {...mega.hover} />}
      </header>
      {drawerOpen && <>
        <button type="button" className="mobile-drawer__overlay" onClick={closeDrawer} aria-label="Close menu" />
        <aside className="mobile-drawer" aria-label="Mobile navigation">
          <div className="mobile-drawer__head"><Logo variant="g" /><button type="button" onClick={closeDrawer} aria-label="Close menu"><X /></button></div>
          <nav>{items.map((n) => n.mega ? <div key={n.label} className="mobile-drawer__group"><button type="button" onClick={() => setStudyOpen(!studyOpen)}>{n.label}<ChevronDown className={studyOpen ? 'is-open' : ''} /></button>{studyOpen && <div className="mobile-drawer__subnav">{megaMenu.categories.map((item) => <Link key={item.id} to={item.to} onClick={closeDrawer}>{item.title}</Link>)}</div>}</div> : <Link key={n.label} to={n.to || '#'} onClick={closeDrawer} className={active === n.label ? 'is-active' : ''}>{n.label}</Link>)}</nav>
          <div className="mobile-drawer__actions"><Link to="/login" onClick={closeDrawer} className="btn btn--purple-outline">Login</Link><Link to="/register" onClick={closeDrawer} className="btn btn--purple">Register Now</Link></div>
        </aside>
      </>}
    </>
  );
}
