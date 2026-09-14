import { ChevronRight, House } from 'lucide-react';
import { Link } from '../../lib/router.jsx';

/** items: [{ label, to? }] – first item gets the home icon, last is the current page. */
export default function Breadcrumb({ items, className = '', homeIcon = true }) {
  return (
    <nav className={`crumbs ${className}`} aria-label="Breadcrumb">
      {items.map((it, i) => {
        const last = i === items.length - 1;
        return (
          <span key={it.label} className="crumbs__item">
            {i === 0 && homeIcon && <House className="crumbs__home" />}
            {last ? <span className="crumbs__current" aria-current="page">{it.label}</span> : <Link to={it.to ?? '/'}>{it.label}</Link>}
            {!last && <ChevronRight className="crumbs__sep" />}
          </span>
        );
      })}
    </nav>
  );
}
