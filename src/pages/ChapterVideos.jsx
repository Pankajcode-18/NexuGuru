import { useMemo, useState } from 'react';
import { ArrowLeft, Bookmark, CalendarDays, Eye, Play, Search } from 'lucide-react';
import StudyShell from '../components/layout/StudyShell.jsx';
import ChapterSidebar from '../components/study/ChapterSidebar.jsx';
import StudyBottom from '../components/study/StudyBottom.jsx';
import { NeedHelp, QuickActions, StudyProgress } from '../components/study/AsideWidgets.jsx';
import Dropdown from '../components/ui/Dropdown.jsx';
import { Link } from '../lib/router.jsx';
import img from '../lib/assets.js';

const videos = [
  { n: 1, title: 'Electric Current', desc: 'Learn about electric current, its definition, units and examples.', views: '12.4K', date: '20 May 2024', thumb: 'video-1', t: 12.4 },
  { n: 2, title: 'Ohm’s Law', desc: 'Understand Ohm’s Law, relationships and solved examples.', views: '9.8K', date: '22 May 2024', thumb: 'video-2', t: 9.8 },
  { n: 3, title: 'Kirchhoff’s Laws', desc: 'Learn Kirchhoff’s Current Law and Voltage Law with examples.', views: '8.7K', date: '24 May 2024', thumb: 'video-3', t: 8.7 },
  { n: 4, title: 'Wheatstone Bridge', desc: 'Balanced condition of Wheatstone Bridge and applications.', views: '7.1K', date: '26 May 2024', thumb: 'video-4', t: 7.1 },
  { n: 5, title: 'Series and Parallel Combination', desc: 'Equivalent resistance of resistors in series and parallel.', views: '6.9K', date: '28 May 2024', thumb: 'video-5', t: 6.9 },
  { n: 6, title: 'Potentiometer', desc: 'Principle of potentiometer and comparison of emf of cells.', views: '6.2K', date: '30 May 2024', thumb: 'video-6', t: 6.2 },
];

export function VideoCard({ v, saved, onSave }) {
  return (
    <article className="video-card">
      <button type="button" className="video-card__thumb" aria-label={`Play ${v.title}`}><img src={img[v.thumb]} alt="" /></button>
      <div className="video-card__body">
        <h3>{v.n}. {v.title} <span className="badge badge--indigo">Topic {v.n}</span></h3>
        <p>{v.desc}</p>
        <div className="video-card__meta">
          <span><Eye /> {v.views} views</span>
          <span><CalendarDays /> {v.date}</span>
          <button type="button" className={`video-card__save ${saved ? 'is-saved' : ''}`} onClick={onSave} aria-pressed={saved} aria-label="Bookmark"><Bookmark /></button>
        </div>
      </div>
    </article>
  );
}

export default function ChapterVideos() {
  const [q, setQ] = useState('');
  const [topic, setTopic] = useState('All Topics');
  const [sort, setSort] = useState('Newest First');
  const [saved, setSaved] = useState({});
  const list = useMemo(() => {
    let l = videos.filter((v) => v.title.toLowerCase().includes(q.toLowerCase()));
    if (topic !== 'All Topics') l = l.filter((v) => `Topic ${v.n}` === topic);
    if (sort === 'Most Viewed') l = [...l].sort((a, b) => b.t - a.t);
    if (sort === 'Oldest First') l = [...l].reverse();
    return l;
  }, [q, topic, sort]);

  return (
    <StudyShell crumbs={[{ label: 'Home', to: '/' }, { label: 'Class 12', to: '/class-12' }, { label: 'Science', to: '/class-12' }, { label: 'Physics', to: '/class-12' }, { label: 'Current Electricity', to: '/notes' }, { label: 'Notes', to: '/notes' }, { label: 'Videos' }]}>
      <div className="study-container">
        <div className="study-grid">
          <ChapterSidebar section="notes" sub="videos" />
          <main className="study-main videos-page">
            <Link to="/notes" className="back-link"><ArrowLeft /> Back to Notes</Link>
            <h1 className="study-title">Current Electricity - Videos</h1>
            <p className="study-sub">Watch concept videos to understand topics more clearly.</p>
            <div className="filter-row">
              <label className="search-box"><Search /><input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search videos..." /></label>
              <div className="filter-row__right">
                <Dropdown options={['All Topics', ...videos.map((v) => `Topic ${v.n}`)]} value={topic} onChange={setTopic} width={106} />
                <Dropdown options={['Newest First', 'Oldest First', 'Most Viewed']} value={sort} onChange={setSort} width={106} />
              </div>
            </div>
            <div className="video-scroll">
              <div className="video-grid">
                {list.map((v) => <VideoCard key={v.n} v={v} saved={!!saved[v.n]} onSave={() => setSaved((s) => ({ ...s, [v.n]: !s[v.n] }))} />)}
                {!list.length && <p className="empty-note">No videos match “{q}”. Try another topic name.</p>}
              </div>
            </div>
          </main>
          <div className="study-aside">
            <QuickActions items={[{ icon: 'download', label: 'Download All Videos' }, { icon: 'bookmark', label: 'Bookmark This Page' }, { icon: 'share', label: 'Share' }, { icon: 'report', label: 'Report an Issue', to: '/report-issue' }]} />
            <StudyProgress />
            <NeedHelp />
            <section className="aside-card aside-card--soft about-videos">
              <h3 className="aside-card__title">About Videos</h3>
              <div className="about-videos__row">
                <span className="about-videos__icon"><span><Play /></span></span>
                <p>These videos are carefully prepared by subject experts to help you understand concepts in a simple and effective way.</p>
              </div>
            </section>
          </div>
        </div>
        <StudyBottom />
      </div>
    </StudyShell>
  );
}
