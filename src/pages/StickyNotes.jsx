import { useState } from 'react';
import { ArrowLeft, CalendarDays, ChevronDown, LayoutGrid, List, Star, StickyNote } from 'lucide-react';
import StudyShell from '../components/layout/StudyShell.jsx';
import ChapterSidebar from '../components/study/ChapterSidebar.jsx';
import StudyBottom from '../components/study/StudyBottom.jsx';
import { NeedHelp, QuickActions, StudyProgress } from '../components/study/AsideWidgets.jsx';
import Dropdown from '../components/ui/Dropdown.jsx';
import SegTabs from '../components/ui/SegTabs.jsx';
import { toast } from '../components/ui/Toast.jsx';
import { Link } from '../lib/router.jsx';

const Frac = ({ n, d }) => <span className="frac"><span>{n}</span><span>{d}</span></span>;
const M = ({ children }) => <span className="math">{children}</span>;
const Sub = ({ b, s }) => <>{b}<sub>{s}</sub></>;

const Battery = () => (
  <svg className="note-battery" viewBox="0 0 120 64" aria-label="Cell with current flowing from positive to negative">
    <rect x="6" y="6" width="108" height="40" rx="6" fill="none" stroke="#1d1b2f" strokeWidth="2.2" />
    <rect x="44" y="30" width="30" height="30" fill="#fbf7df" />
    <line x1="52" y1="28" x2="52" y2="62" stroke="#1d1b2f" strokeWidth="2.2" />
    <line x1="60" y1="36" x2="60" y2="54" stroke="#1d1b2f" strokeWidth="4" />
    <line x1="44" y1="46" x2="52" y2="46" stroke="#1d1b2f" strokeWidth="2.2" />
    <line x1="60" y1="46" x2="74" y2="46" stroke="#1d1b2f" strokeWidth="2.2" />
    <text x="30" y="40" fontSize="18" fill="#e33b3b" fontWeight="700">+</text>
    <line x1="74" y1="34" x2="86" y2="34" stroke="#2f7ce8" strokeWidth="2.4" />
    <path d="M28 46 H8" stroke="#e33b3b" strokeWidth="2" /><path d="M90 46 H108" stroke="#2f7ce8" strokeWidth="2" />
    <path d="M100 42 l8 4 -8 4" fill="#2f7ce8" /><path d="M16 42 l-8 4 8 4" fill="none" />
  </svg>
);

const notes = [
  { id: 1, color: 'yellow', type: 'Formula Notes', title: 'Ohm’s Law', date: '20 May 2024', body: <>
    <div className="note-formula"><M>V = I R</M></div>
    <ul className="note-dots"><li><M>V</M> <span>= Potential Difference (V)</span></li><li><M>I</M> <span>= Current (A)</span></li><li><M>R</M> <span>= Resistance (Ω)</span></li></ul>
  </> },
  { id: 2, color: 'green', type: 'Concept Notes', title: 'Electric Current', date: '18 May 2024', body: <>
    <p>The rate of flow of electric charge through a conductor is called electric current.</p>
    <div className="note-formula"><M>I = <Frac n="q" d="t" /></M></div>
    <ul className="note-bullets"><li><M>I</M> = Current (A)</li><li><M>q</M> = Charge (C)</li><li><M>t</M> = Time (s)</li></ul>
  </> },
  { id: 3, color: 'red', type: 'Concept Notes', title: 'Series Circuit', date: '16 May 2024', body: <>
    <ul className="note-bullets"><li>Same current flows in all components.</li><li>Total resistance:</li></ul>
    <div className="note-formula note-formula--wide"><M><Sub b="R" s="S" /> = <Sub b="R" s="1" /> + <Sub b="R" s="2" /> + <Sub b="R" s="3" /> + …</M></div>
    <ul className="note-bullets"><li>Voltage divides across components.</li></ul>
  </> },
  { id: 4, color: 'purple', type: 'Formula Notes', title: 'Parallel Circuit', date: '14 May 2024', body: <>
    <ul className="note-bullets"><li>Same voltage across all components.</li><li>Total resistance:</li></ul>
    <div className="note-formula note-formula--wide"><M><Frac n="1" d={<Sub b="R" s="P" />} /> = <Frac n="1" d={<Sub b="R" s="1" />} /> + <Frac n="1" d={<Sub b="R" s="2" />} /> + <Frac n="1" d={<Sub b="R" s="3" />} /> + …</M></div>
    <ul className="note-bullets"><li>Current divides across branches.</li></ul>
  </> },
  { id: 5, color: 'blue', type: 'Formula Notes', title: 'Power in Circuit', date: '12 May 2024', body: <>
    <p>Power is the rate at which electric energy is consumed.</p>
    <div className="note-formula note-formula--wide"><M>P = V I = I<sup>2</sup>R = <Frac n={<>V<sup>2</sup></>} d="R" /></M></div>
    <ul className="note-bullets note-bullets--tight"><li>P = Power (W)</li><li>V = Voltage (V)</li><li>I = Current (A)</li><li>R = Resistance (Ω)</li></ul>
  </> },
  { id: 6, color: 'yellow', type: 'Diagram Notes', title: 'Key Point', date: '10 May 2024', body: <>
    <p>Conventional current flows from positive to negative terminal.</p>
    <Battery />
  </> },
];

const recent = [['green', 'Kirchhoff’s Laws', '20 May 2024'], ['yellow', 'Resistance & Resistivity', '19 May 2024'], ['purple', 'Energy and Power', '18 May 2024'], ['red', 'Electric Cell & EMF', '17 May 2024']];

export default function StickyNotes() {
  const [tab, setTab] = useState('All Notes');
  const [view, setView] = useState('grid');
  const [starred, setStarred] = useState({});
  const shown = tab === 'All Notes' ? notes : notes.filter((n) => n.type === tab);
  return (
    <StudyShell searchCircle={false} crumbs={[{ label: 'Home', to: '/' }, { label: 'Class 12', to: '/class-12' }, { label: 'Science', to: '/class-12' }, { label: 'Physics', to: '/class-12' }, { label: 'Current Electricity', to: '/notes' }, { label: 'Sticky Notes' }]}>
      <div className="study-container">
        <div className="study-grid study-grid--sticky">
          <ChapterSidebar section="sticky" sub="all" collapsedChevrons currentStyle="fill" />
          <main className="study-main sticky-page">
            <Link to="/notes" className="back-link"><ArrowLeft /> Back to Notes</Link>
            <h1 className="study-title">Current Electricity - Sticky Notes</h1>
            <p className="study-sub">Short, important notes to revise key points quickly.</p>
            <div className="filter-row">
              <SegTabs className="sticky-tabs" tabs={['All Notes', 'Formula Notes', 'Concept Notes', 'Diagram Notes']} value={tab} onChange={setTab} />
              <div className="filter-row__right">
                <Dropdown options={['Newest First', 'Oldest First']} width={124} />
                <div className="view-toggle">
                  <button type="button" className={view === 'grid' ? 'is-active' : ''} onClick={() => setView('grid')} aria-label="Grid view"><LayoutGrid /></button>
                  <button type="button" className={view === 'list' ? 'is-active' : ''} onClick={() => setView('list')} aria-label="List view"><List /></button>
                </div>
              </div>
            </div>
            <div className={`notes-grid notes-grid--${view}`}>
              {shown.map((n) => (
                <article key={n.id} className={`note note--${n.color}`}>
                  <span className="note__pin" aria-hidden="true" />
                  <button type="button" className={`note__star ${starred[n.id] ? 'is-on' : ''}`} onClick={() => setStarred((s) => ({ ...s, [n.id]: !s[n.id] }))} aria-label="Star note"><Star /></button>
                  <h3>{n.title}</h3>
                  <div className="note__body">{n.body}</div>
                  <p className="note__date"><CalendarDays /> {n.date}</p>
                </article>
              ))}
            </div>
            <div className="center-row"><button type="button" className="btn btn--outline show-more" onClick={() => toast('All notes for this chapter are loaded')}>Load More Notes <ChevronDown /></button></div>
          </main>
          <div className="study-aside">
            <QuickActions boxed items={[{ icon: 'fileDown', label: 'Download All Notes' }, { icon: 'bookmark', label: 'Bookmark This Page' }, { icon: 'share', label: 'Share' }, { icon: 'print', label: 'Print', action: () => window.print() }, { icon: 'flag', label: 'Report an Issue', to: '/report-issue' }]} />
            <StudyProgress />
            <section className="aside-card aside-card--soft recent-notes">
              <h3 className="aside-card__title">Recently Added <a href="#" onClick={(e) => e.preventDefault()}>View All</a></h3>
              <ul>{recent.map(([c, t, d]) => <li key={t}><span className={`sq sq--${c}`}><StickyNote /></span><span className="t">{t}</span><span className="d">{d}</span></li>)}</ul>
            </section>
            <NeedHelp />
          </div>
        </div>
        <StudyBottom />
      </div>
    </StudyShell>
  );
}
