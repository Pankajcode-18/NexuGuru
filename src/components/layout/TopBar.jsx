import { Mail, Phone } from 'lucide-react';
import { socialIcons } from '../icons/Brand.jsx';
import { contact, socials } from '../../data/site.js';

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar__inner header-container">
        <div className="topbar__social">
          {socials.map((s) => { const I = socialIcons[s]; return <a key={s} href="#" onClick={(e) => e.preventDefault()} aria-label={s}><I size={16} /></a>; })}
        </div>
        <div className="topbar__contact">
          <a href={`tel:${contact.phone.replace(/\s/g, '')}`}><Phone /> {contact.phone}</a>
          <a href={`mailto:${contact.email}`}><Mail /> {contact.email}</a>
        </div>
      </div>
    </div>
  );
}
