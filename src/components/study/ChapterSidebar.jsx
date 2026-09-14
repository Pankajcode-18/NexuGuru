import { useState } from 'react';
import { ArrowRight, ChevronDown, ChevronRight, ChevronUp, CircleDot, NotebookPen, NotebookTabs, NotebookText, Play, BookCopy } from 'lucide-react';
import { chapters, chapterSections } from '../../data/chapters.js';
import { Link } from '../../lib/router.jsx';

const sectionIcons = { notes: NotebookText, mcq: NotebookPen, iq: BookCopy, sticky: NotebookTabs };
const subIcons = { chevron: ChevronRight, play: Play, arrow: ArrowRight };

/**
 * Chapter navigation for a subject.
 * section: id of the resource section currently open (notes | mcq | iq | sticky)
 * sub: id of the active item inside that section
 * currentStyle: how the open section header is marked – 'plain' | 'text' (purple) | 'fill' (purple on lavender)
 */
export default function ChapterSidebar({ section = 'notes', sub, currentChapter = 2, collapsedChevrons = false, currentStyle = 'plain' }) {
  const [openChapter, setOpenChapter] = useState(currentChapter);
  const [openSection, setOpenSection] = useState(section);
  return (
    <aside className="chap-side" aria-label="Chapters">
      <h2 className="chap-side__title">Chapters</h2>
      {chapters.map((name, i) => {
        const open = openChapter === i;
        return (
          <div key={name}>
            <button type="button" className={`chap-side__chapter ${open ? 'is-open' : ''}`} aria-expanded={open} onClick={() => setOpenChapter(open ? -1 : i)}>
              <span className="num">{i + 1}.</span><span className="label">{name}</span>
              {open ? <ChevronDown /> : <ChevronRight />}
            </button>
            {open && (
              <div className="chap-side__panel">
                {chapterSections.map((s) => {
                  const SIcon = sectionIcons[s.id];
                  const expanded = openSection === s.id;
                  return (
                    <div key={s.id}>
                      <button type="button" className={`chap-side__section ${expanded && section === s.id ? `is-current current--${currentStyle}` : ''}`}
                        aria-expanded={expanded} onClick={() => setOpenSection(expanded ? null : s.id)}>
                        <SIcon className="ico" /><span className="label">{s.label}</span>
                        {expanded ? <ChevronUp className="chev" /> : collapsedChevrons && <ChevronRight className="chev" />}
                      </button>
                      {expanded && (
                        <div className="chap-side__subs">
                          {s.items.map((it) => {
                            const active = section === s.id && sub === it.id;
                            const Icon = active && (s.id === 'mcq' || s.id === 'sticky') ? CircleDot : subIcons[it.icon ?? s.subIcon];
                            return <Link key={it.id} to={it.to} className={`chap-side__sub ${active ? 'is-active' : ''}`}><Icon />{it.label}</Link>;
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
      <Link to="/chapter-locked" className="chap-side__all">View All Chapters <ChevronDown /></Link>
    </aside>
  );
}
