import { useEffect, useState } from 'react';
import { Info } from 'lucide-react';
import { scrollToId } from '../../lib/router.jsx';

/** Numbered table of contents that tracks the section in view. */
export function OnThisPage({ sections, idPrefix = 'sec' }) {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const els = sections.map((_, i) => document.getElementById(`${idPrefix}-${i}`)).filter(Boolean);
    const io = new IntersectionObserver((entries) => {
      const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (vis) setActive(Number(vis.target.id.split('-').pop()));
    }, { rootMargin: '-30% 0px -60% 0px' });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [sections, idPrefix]);
  return (
    <nav className="toc" aria-label="On this page">
      <h2>On This Page</h2>
      <ol>
        {sections.map((s, i) => (
          <li key={s.title}>
            <button type="button" className={active === i ? 'is-active' : ''} onClick={() => scrollToId(`${idPrefix}-${i}`)}><span>{i + 1}</span>{s.title}</button>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function InfoBanner({ children, aside, className = '' }) {
  return (
    <div className={`info-banner ${className}`}>
      <span className="info-banner__icon"><Info /></span>
      <p>{children}</p>
      {aside && <span className="info-banner__aside">{aside}</span>}
    </div>
  );
}

/** Icon + numbered title + paragraph rows. */
export function PolicyList({ sections, idPrefix = 'sec', boxed = false }) {
  return (
    <div className={`policy-list ${boxed ? 'policy-list--boxed' : ''}`}>
      {sections.map((s, i) => {
        const I = s.icon;
        return (
          <section key={s.title} id={`${idPrefix}-${i}`} className="policy-row">
            <span className="policy-row__icon"><I /></span>
            <div><h3>{i + 1}. {s.title}</h3><p>{s.text}</p></div>
          </section>
        );
      })}
    </div>
  );
}
