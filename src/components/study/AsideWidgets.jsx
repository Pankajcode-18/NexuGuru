import { Bookmark, ChevronRight, CircleAlert, Download, Flag, MessageSquareMore, Printer, Share2, FileDown } from 'lucide-react';
import { Link } from '../../lib/router.jsx';
import Progress from '../ui/Progress.jsx';
import Button from '../ui/Button.jsx';
import { toast } from '../ui/Toast.jsx';

export const qaIcons = { download: Download, fileDown: FileDown, bookmark: Bookmark, share: Share2, print: Printer, report: CircleAlert, flag: Flag };

/** items: [{ icon, label, to? , action? }] */
export function QuickActions({ items, boxed = false, tiles = false, title = 'Quick Actions', className = '' }) {
  return (
    <section className={`aside-card ${className}`}>
      <h3 className="aside-card__title">{title}</h3>
      <ul className={`qa-list ${boxed ? 'qa-list--boxed' : ''} ${tiles ? 'qa-list--tiles' : ''}`}>
        {items.map((it) => {
          const I = qaIcons[it.icon] ?? it.icon;
          const body = <><I />{it.label}</>;
          return <li key={it.label}>{it.to ? <Link to={it.to}>{body}</Link> : <button type="button" onClick={() => (it.action ? it.action() : toast(`${it.label} – available in the full app`))}>{body}</button>}</li>;
        })}
      </ul>
    </section>
  );
}

export function StudyProgress({ subject = 'Current Electricity', value = 65, caption = '13 of 20 topics completed' }) {
  return (
    <section className="aside-card aside-card--soft study-progress">
      <h3 className="aside-card__title">Study Progress</h3>
      <p className="study-progress__subject">{subject}</p>
      <div className="study-progress__row"><Progress value={value} /><strong>{value}%</strong></div>
      <small>{caption}</small>
    </section>
  );
}

export function NeedHelp({ text = 'Ask your doubt or get help from our experts.' }) {
  return (
    <section className="aside-card aside-card--soft need-help">
      <h3 className="aside-card__title">Need Help?</h3>
      <p>{text}</p>
      <Button variant="outline" icon={MessageSquareMore} to="/report-issue" className="need-help__btn">Ask a Question</Button>
    </section>
  );
}

export { ChevronRight };
