import { useState } from 'react';
import { BookOpen, BriefcaseBusiness, ChevronRight, FileText, FlaskConical, GraduationCap, Landmark, Monitor, Target } from 'lucide-react';
import { Link } from '../../lib/router.jsx';
import { megaMenu } from '../../data/site.js';
import img from '../../lib/assets.js';

const icons = { book: BookOpen, target: Target, flask: FlaskConical, briefcase: BriefcaseBusiness, monitor: Monitor, landmark: Landmark, cap: GraduationCap, file: FileText };

/** "Study Materials" dropdown shown under the main navigation. */
export default function MegaMenu({ onNavigate, ...hover }) {
  const [active, setActive] = useState('c11');
  return (
    <div className="mega" role="menu" {...hover}>
      <div className="mega__side">
        {megaMenu.categories.map((c) => {
          const I = icons[c.icon];
          return (
            <Link key={c.id} to={c.to} onClick={onNavigate} onMouseEnter={() => setActive(c.id)} className={`mega__cat ${active === c.id ? 'is-active' : ''}`}>
              <span className="mega__cat-icon"><I /></span>
              <span className="mega__cat-text"><strong>{c.title}</strong><span>{c.desc}</span></span>
              <ChevronRight className="mega__cat-arrow" />
            </Link>
          );
        })}
        <Link to="/class-12" onClick={onNavigate} className="mega__explore">
          <img src={img['explore-books']} alt="" />
          <span><strong>Explore All Materials</strong><span>Access notes, videos, MCQs, past papers and more.</span></span>
          <span className="mega__explore-go"><ChevronRight /></span>
        </Link>
      </div>
      <div className="mega__main">
        {megaMenu.groups.map((g) => (
          <section key={g.title} className="mega__group">
            <h3>{g.title}</h3>
            <div className={`mega__grid mega__grid--${g.cols}`}>
              {g.items.map((it) => {
                const I = icons[it.icon];
                return (
                  <Link key={it.title} to={it.to} onClick={onNavigate} className="mega__item">
                    <span className="mega__item-icon"><I /></span>
                    <span className="mega__item-text"><strong>{it.title}</strong><span>{it.desc}</span></span>
                    <ChevronRight className="mega__item-arrow" />
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
