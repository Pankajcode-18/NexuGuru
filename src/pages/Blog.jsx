import { useMemo, useState } from 'react';
import { CalendarDays, ChevronRight, Clock3, Flame, Search } from 'lucide-react';
import SitePage from '../components/layout/SitePage.jsx';
import PageHero from '../components/site/PageHero.jsx';
import Breadcrumb from '../components/ui/Breadcrumb.jsx';
import { toast } from '../components/ui/Toast.jsx';
import img from '../lib/assets.js';

const cats = ['All', 'Study Tips', 'Exam Guide', 'Career', 'News & Updates'];
const posts = [
  ['Study Tips', 'How to Prepare for Class 12 Board Exams in 3 Months', 'A practical study plan to cover the full syllabus, revise smartly and score higher.', '15 May 2024', '5 min read'],
  ['Exam Guide', 'IOE Entrance 2024: Complete Preparation Strategy', 'Everything you need to know about syllabus, marks distribution and best resources.', '12 May 2024', '7 min read'],
  ['Career', 'Top Career Options After +2 Science in Nepal', 'Explore engineering, medicine, IT and other promising career paths after Class 12.', '10 May 2024', '6 min read'],
  ['Study Tips', '10 Proven Techniques to Improve Your Memory', 'Science-backed methods to remember formulas, definitions and concepts for longer.', '8 May 2024', '4 min read'],
  ['News & Updates', 'NEB Publishes Class 12 Exam Routine 2081', 'The National Examinations Board has released the official routine for board exams.', '6 May 2024', '3 min read'],
  ['Exam Guide', 'CEE Preparation: Biology Chapters You Can’t Skip', 'High-weightage biology topics and how to master them before the entrance exam.', '4 May 2024', '6 min read'],
  ['Career', 'Is BIT or BCA Better for Your Future?', 'Compare course structure, fees, colleges and job prospects of BIT and BCA in Nepal.', '2 May 2024', '5 min read'],
  ['Study Tips', 'How to Make Effective Handwritten Notes', 'Simple tips to create neat, colourful notes that make revision quick and easy.', '30 Apr 2024', '4 min read'],
  ['News & Updates', 'Nexu Guru App Now Available on the App Store', 'Study anytime with offline notes, videos and live quizzes on your iPhone.', '28 Apr 2024', '2 min read'],
];

export default function Blog() {
  const [cat, setCat] = useState('All');
  const [q, setQ] = useState('');
  const [page, setPage] = useState(1);
  const [email, setEmail] = useState('');
  const list = useMemo(() => posts.map((p, i) => [...p, i]).filter((p) => (cat === 'All' || p[0] === cat) && (p[1] + p[2]).toLowerCase().includes(q.toLowerCase())), [cat, q]);
  const counts = cats.slice(1).map((c) => [c, posts.filter((p) => p[0] === c).length * 6 + 2]);

  return (
    <SitePage header={{ active: 'Blogs', showNews: true }} footer={{ columns: ['company', 'centres', 'exams', 'quick', 'products'], about: 'long' }} className="blog-page">
      <PageHero variant="photo" bg={img['hero-blog']} title="Blog" text="Explore our latest articles, study tips, exam guides and educational insights to help you learn better and grow faster." />
      <div className="container">
        <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Blog' }]} className="blog-crumbs" />
        <div className="blog-tools">
          <label className="blog-search"><Search /><input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search articles..." /><span className="btn btn--purple">Search</span></label>
          <div className="chips">{cats.map((c) => <button key={c} type="button" className={c === cat ? 'is-active' : ''} onClick={() => setCat(c)}>{c}</button>)}</div>
        </div>
        <div className="blog-layout">
          <div>
            <div className="blog-grid">
              {list.map(([c, t, d, date, read, i]) => (
                <article key={t} className="post-card">
                  <img src={img[`blog-${((i + (page - 1) * 3) % 9) + 1}`]} alt="" />
                  <div className="post-card__body">
                    <span className="post-card__cat">{c}</span>
                    <h3>{t}</h3>
                    <p>{d}</p>
                    <div className="post-card__meta"><span><CalendarDays /> {date}</span><span><Clock3 /> {read}</span></div>
                  </div>
                </article>
              ))}
              {!list.length && <p className="faq-empty">No articles found.</p>}
            </div>
            <nav className="pager" aria-label="Pagination">
              {[1, 2, 3].map((n) => <button key={n} type="button" className={page === n ? 'is-active' : ''} onClick={() => setPage(n)}>{n}</button>)}
              <span>…</span><button type="button" onClick={() => setPage(12)} className={page === 12 ? 'is-active' : ''}>12</button>
              <button type="button" className="pager__next" onClick={() => setPage((p) => (p >= 12 ? 1 : p + 1))}>Next <ChevronRight /></button>
            </nav>
          </div>
          <aside className="blog-side">
            <section className="side-box">
              <h3><Flame /> Popular Posts</h3>
              <ul className="pop-list">{posts.slice(0, 5).map(([, t, , date], i) => <li key={t}><img src={img[`pop-${i + 1}`]} alt="" /><div><strong>{t}</strong><small>{date}</small></div></li>)}</ul>
            </section>
            <section className="side-box">
              <h3>Categories</h3>
              <ul className="cat-list">{counts.map(([c, n]) => <li key={c}><button type="button" onClick={() => setCat(c)}><ChevronRight />{c}<em>{n}</em></button></li>)}</ul>
            </section>
            <section className="side-box side-box--soft subscribe">
              <img src={img['subscribe-art']} alt="" />
              <h3>Subscribe to Our Newsletter</h3>
              <p>Get the latest articles and updates directly in your inbox.</p>
              <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
              <button type="button" className="btn btn--purple btn--block" onClick={() => { if (email.includes('@')) { toast('Subscribed! Check your inbox.'); setEmail(''); } else toast('Enter a valid email address'); }}>Subscribe</button>
              <small>We respect your privacy. Unsubscribe anytime.</small>
            </section>
          </aside>
        </div>
      </div>
    </SitePage>
  );
}
