import { useState } from 'react';
import { ArrowRight, Award, BookOpenCheck, CalendarDays, ChevronRight, ClipboardCheck, Headset, MonitorPlay, Target, Trophy, UsersRound, Video } from 'lucide-react';
import SitePage from '../components/layout/SitePage.jsx';
import Button from '../components/ui/Button.jsx';
import { Link } from '../lib/router.jsx';
import img from '../lib/assets.js';

const tabs = ['All Exams', 'IOE', 'CEE', 'Loksewa', 'Banking', 'Teacher Service', 'Others'];
const courses = [
  { exam: 'IOE', tone: 'purple', flag: 'POPULAR', head: 'IOE', sub: 'Entrance Preparation', title: 'IOE Full Course 2027', team: 'team-1', for: 'For IOE Entrance Aspirants', price: 4999, oldPrice: 7000, discount: 29 },
  { exam: 'CEE', tone: 'blue', flag: 'MOST CHOSEN', head: 'CEE', sub: 'Entrance Preparation', title: 'CEE Full Course 2027', team: 'team-2', for: 'For CEE (Medical) Aspirants', price: 4499, oldPrice: 6500, discount: 29 },
  { exam: 'Loksewa', tone: 'green', flag: 'BEST VALUE', head: 'Loksewa', sub: 'Preparation', title: 'Loksewa Full Course 2027', team: 'team-3', for: 'For Loksewa Aspirants', price: 3999, oldPrice: 6000, discount: 33 },
  { exam: 'Banking', tone: 'orange', flag: 'NEW', head: 'Banking', sub: 'Preparation', title: 'Banking Full Course 2027', team: 'team-4', for: 'For Banking Job Aspirants', price: 3499, oldPrice: 6000, discount: 42 },
];
const more = [
  ['exam-1', 'Teacher Service Preparation', 'For Teacher Service Commission Aspirants', 'NPR 2,999', 'NPR 4,500'],
  ['exam-2', 'NEB Class 11 & 12 Entrance', 'Entrance preparation for +2 level programs', 'NPR 2,499', 'NPR 4,000'],
  ['exam-3', 'Diploma Entrance', 'For Diploma level entrance exams', 'NPR 2,499', 'NPR 4,000'],
  ['exam-4', 'CMAT Preparation', 'Complete preparation for CMAT entrance', 'NPR 4,999', 'NPR 7,000'],
  ['exam-5', 'Other Exams Preparation', 'All other entrance exam preparation courses', 'NPR 2,499', 'NPR 4,000'],
];
const why = [
  [UsersRound, 'Expert Teachers', 'Learn from experienced subject experts'],
  [BookOpenCheck, 'Smart Study Materials', 'Notes, PDFs and updated resources'],
  [ClipboardCheck, 'Mock Tests & Analysis', 'Real exam-like practice and analysis'],
  [Headset, 'Doubt Support 24/7', 'Get your doubts cleared anytime'],
  [MonitorPlay, 'Performance Tracking', 'Track your preparation progress'],
  [Trophy, 'Affordable Fees', 'Quality education at the best price'],
];

export default function Entrance() {
  const [tab, setTab] = useState('All Exams');
  const shown = tab === 'All Exams' ? courses : courses.filter((c) => c.exam === tab);
  return (
    <SitePage header={{ showNews: true }} footer={{ enotes: true, appleFirst: true, bullet: 'chevron' }} className="entrance-page">
      <section className="ent-hero">
        <div className="container ent-hero__inner">
          <div className="ent-hero__copy">
            <h1>Entrance <span>Preparation</span></h1>
            <p>Prepare smarter, not harder. Nexu Guru provides everything you need to crack competitive entrance exams with confidence.</p>
            <ul className="ent-hero__chips">
              <li><span><Video /></span>Live & Recorded Classes</li>
              <li><span><ClipboardCheck /></span>Mock Tests</li>
              <li><span><BookOpenCheck /></span>Study Materials</li>
              <li><span><Award /></span>Expert Guidance</li>
            </ul>
          </div>
          <img src={img['entrance-hero']} alt="" className="ent-hero__art" />
        </div>
      </section>

      <div className="container">
        <div className="pill-tabs" role="tablist">
          {tabs.map((t) => <button key={t} type="button" role="tab" aria-selected={t === tab} className={t === tab ? 'is-active' : ''} onClick={() => setTab(t)}>{t}</button>)}
        </div>

        <div className="sec-head"><h2 className="section-title section-title--left">Popular <span>Entrance Courses</span></h2><Link to="/entrance" className="sec-head__link">View All <ChevronRight /></Link></div>
        <div className="course-grid">
          {shown.map((c) => (
            <article key={c.title} className={`course-card tone-${c.tone}`}>
              <span className="course-card__flag">{c.flag}</span>
              <div className="course-card__head"><strong>{c.head}</strong><span>{c.sub}</span><img src={img[c.team]} alt="" /></div>
              <div className="course-card__body">
                <h3>{c.title}</h3>
                <span className="lang-chip">Nepali | English</span>
                <p><Target /> {c.for}</p>
                <p><CalendarDays /> Starts on 1 May, 2026 <br />Ends on 31 Dec, 2026</p>
                <div className="premium-bar"><span>Premium Features Included</span><em>INFINITY</em></div>
                <div className="course-card__price"><strong>NPR {c.price.toLocaleString()}</strong><s>NPR {c.oldPrice.toLocaleString()}</s></div>
                <span className="disc-chip">Discount of {c.discount}% applied</span>
                <div className="course-card__btns">
                  <Button variant={`${c.tone === 'purple' ? 'purple' : c.tone === 'orange' ? 'orange' : c.tone === 'green' ? 'success' : 'primary'}-outline`} size="sm" to="/class-12">EXPLORE</Button>
                  <Button variant={c.tone === 'purple' ? 'purple' : c.tone === 'orange' ? 'orange' : c.tone === 'green' ? 'success' : 'primary'} size="sm" to={`/checkout?course=${c.exam.toLowerCase()}`}>BUY NOW</Button>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="center-row"><Button variant="purple-outline" pill iconRight={ChevronRight} to="/entrance">View All Courses</Button></div>

        <h2 className="section-title section-title--left sec-gap">More <span>Entrance Exams</span></h2>
        <div className="more-grid">
          {more.map(([i, t, d, p, s]) => (
            <article key={t} className="more-card">
              <img src={img[i]} alt="" /><h3>{t}</h3><p>{d}</p>
              <div className="more-card__price"><strong>{p}</strong><s>{s}</s></div>
              <Button variant="purple-outline" size="sm" block to="/checkout">EXPLORE</Button>
            </article>
          ))}
        </div>

        <h2 className="section-title sec-gap">Why Choose <span>Nexu Guru?</span></h2>
        <div className="why-row">
          {why.map(([I, t, d]) => <div key={t} className="why-item"><span className="icircle" style={{ width: 56, height: 56 }}><I /></span><strong>{t}</strong><small>{d}</small></div>)}
        </div>

        <div className="cta-band">
          <img src={img['cta-art']} alt="" />
          <div><h3>Start Your Preparation Today!</h3><p>Join thousands of students and achieve your dream career with Nexu Guru.</p></div>
          <Button variant="yellow" pill size="lg" iconRight={ArrowRight} to="/entrance">Explore All Courses</Button>
        </div>
      </div>
    </SitePage>
  );
}
