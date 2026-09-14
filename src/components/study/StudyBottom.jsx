import { Atom, BookOpen, Calculator, ChevronRight, FileText, FlaskConical, Microscope, Monitor, NotepadText } from 'lucide-react';
import { extraContent, moreSubjects } from '../../data/chapters.js';
import { Link } from '../../lib/router.jsx';

const extraIcons = { papers: FileText, model: NotepadText, lab: FlaskConical };
const subjectIcons = { Physics: Atom, Chemistry: FlaskConical, Biology: Microscope, Mathematics: Calculator, English: BookOpen, 'Computer Science': Monitor };

/** "Extra Content" + "More Subjects" row shown under every chapter page. */
export default function StudyBottom({ activeSubject = 'Physics' }) {
  return (
    <div className="study-bottom">
      <section className="strip">
        <h3 className="strip__title">Extra Content</h3>
        <div className="extra-list">
          {extraContent.map((e) => {
            const I = extraIcons[e.icon];
            return (
              <Link key={e.title} to="/class-12" className="extra-item">
                <I className="lead" /><span className="t"><strong>{e.title}</strong><span>{e.desc}</span></span><ChevronRight className="go" />
              </Link>
            );
          })}
        </div>
      </section>
      <section className="strip">
        <h3 className="strip__title">More Subjects</h3>
        <div className="subject-strip">
          {moreSubjects.map((s) => {
            const I = subjectIcons[s];
            return <Link key={s} to="/class-12" className={`subject-tile ${s === activeSubject ? 'is-active' : ''}`}><I />{s}</Link>;
          })}
          <button type="button" className="subject-strip__next" aria-label="More subjects"><ChevronRight /></button>
        </div>
      </section>
    </div>
  );
}
