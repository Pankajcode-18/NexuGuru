import { useState } from 'react';
import { ArrowRight, Atom, BadgeCheck, BookOpen, Calculator, ChartColumn, ChevronLeft, ChevronRight, CircleCheck, Clock3, Dna, FlaskConical, Headset, Monitor, Notebook, ShieldCheck, Smartphone, UsersRound, Wallet, BriefcaseBusiness, Trophy, Video } from 'lucide-react';
import SitePage from '../components/layout/SitePage.jsx';
import Dropdown from '../components/ui/Dropdown.jsx';
import Button from '../components/ui/Button.jsx';
import { Stars } from '../components/site/Reviews.jsx';
import img from '../lib/assets.js';

const S = { Physics: [Atom, 'Notes, Videos, MCQs, Past Papers & More'], Chemistry: [FlaskConical, 'Notes, Videos, MCQs, Past Papers & More'], Biology: [Dna, 'Notes, Videos, MCQs, Past Papers & More'], Mathematics: [Calculator, 'Notes, Videos, MCQs, Past Papers & More'], English: [BookOpen, 'Notes, Videos, MCQs, Past Papers & More'], Nepali: [Notebook, 'Notes, Videos, MCQs, Past Papers & More'], 'Computer Science': [Monitor, 'Notes, Videos, MCQs, Past Papers & More'], Account: [Wallet, 'Notes, Videos, MCQs, Past Papers & More'], Economics: [ChartColumn, 'Notes, Videos, MCQs, Past Papers & More'], 'Business Studies': [BriefcaseBusiness, 'Notes, Videos, MCQs, Past Papers & More'] };
const faculties = {
  'All Faculties': Object.keys(S),
  Science: ['Physics', 'Chemistry', 'Biology', 'Mathematics', 'English', 'Nepali', 'Computer Science'],
  Management: ['Account', 'Economics', 'Business Studies', 'Mathematics', 'English', 'Nepali', 'Computer Science'],
  'Computer Engineering': ['Mathematics', 'Physics', 'Computer Science', 'English', 'Nepali'],
};
const packages = [
  ['POPULAR', 'purple', 'Science Full Package', 'pkg-science', 'NPR 2,999', 'NPR 4,000', '25% OFF'],
  ['BEST VALUE', 'green', 'Management Full Package', 'pkg-mgmt', 'NPR 2,499', 'NPR 3,500', '29% OFF'],
  ['NEW', 'orange', 'Computer Engineering Package', 'pkg-ce', 'NPR 2,999', 'NPR 4,000', '25% OFF'],
];
const reviews = [
  ['rev-1', 'Anish Karki', 'Science Student', 'Best platform for Class 12 preparation. Notes and videos are super helpful!'],
  ['rev-2', 'Prisha Shah', 'Management Student', 'Weekly tests and doubt support helped me a lot in board exams.'],
  ['rev-3', 'Sujan Thapa', 'Computer Student', 'All subjects in one place. Highly recommended for Class 12.'],
  ['rev-1', 'Kritika B.', 'Class 12, Science', 'I studied Physics only from Nexu Guru notes and cleared my doubts easily.'],
];

export default function ClassNotes() {
  const [fac, setFac] = useState('All Faculties');
  const [r, setR] = useState(0);
  const subjects = faculties[fac];
  return (
    <SitePage header={{ showNews: true, searchRing: true, registerPlus: true }} footer={{ enotes: true, bullet: 'chevron' }} className="class-page">
      <section className="class-hero">
        <div className="container class-hero__inner">
          <div className="class-hero__copy">
            <p className="class-hero__kicker">Class 12 Course &amp; Resource Guide</p>
            <h1>Important Notes</h1>
            <p>Notes, Videos, Quizzes, Past Paper Solutions/Guides, Flashcards, Expert Q&amp;A – One Stop for all Academic Needs</p>
          </div>
          <img src={img['class12-hero']} alt="" className="class-hero__art" />
        </div>
        <svg className="page-hero__wave" viewBox="0 0 1440 70" preserveAspectRatio="none" aria-hidden="true"><path d="M0 40 C 360 0, 720 70, 1080 30 S 1440 20, 1440 20 V70 H0 Z" /></svg>
      </section>

      <div className="container">
        <div className="faculty-pick"><h2 className="section-title">Choose Faculty</h2><Dropdown options={Object.keys(faculties)} value={fac} onChange={setFac} width={260} className="dropdown--lg" /></div>
        <div className="subjects-head"><img src={img.pencil} alt="" /><div><h2 className="section-title">Available Subjects</h2><p>Explore our wide range of subjects for Class 12. Click on any subject to access notes, videos, MCQs, past papers, model questions and more.</p></div></div>
        <div className="subject-grid">
          {subjects.map((s) => {
            const [I, d] = S[s];
            return (
              <article key={s} className="subject-card2">
                <span className="icircle" style={{ width: 62, height: 62 }}><I /></span>
                <h3>{s}</h3><p>{d}</p>
                <Button variant="purple-outline" size="sm" iconRight={ArrowRight} to={s === 'Physics' ? '/notes' : '/chapter-locked'}>Explore</Button>
              </article>
            );
          })}
        </div>

        <section className="pkg-box">
          <div className="pkg-intro">
            <p className="pkg-intro__k">Class 12</p>
            <h2>A Complete Package</h2>
            <p>Get complete access to all subjects with notes, videos, tests, past papers, and doubt support.</p>
            <ul>{['Chapter-wise Notes', 'Video Lectures', 'MCQs & Solutions', 'Past Papers', 'Model Questions', '24/7 Doubt Support'].map((t) => <li key={t}><CircleCheck />{t}</li>)}</ul>
            <Button variant="purple" pill iconRight={ArrowRight} to="/checkout">View All Packages</Button>
          </div>
          {packages.map(([flag, tone, t, icon, p, s, off]) => (
            <article key={t} className={`pkg-card tone-${tone}`}>
              <span className="course-card__flag">{flag}</span>
              <div className="pkg-card__top"><h3>{t}</h3><img src={img[icon]} alt="" /></div>
              <ul>{['All Subjects Notes', 'Video Lectures', 'Important Questions', 'MCQ & Model Tests'].map((x) => <li key={x}><CircleCheck />{x}</li>)}</ul>
              <div className="pkg-card__price"><strong>{p}</strong><s>{s}</s><em>{off}</em></div>
              <Button variant={tone === 'purple' ? 'purple' : tone === 'green' ? 'success' : 'orange'} block to="/checkout">Explore Package</Button>
            </article>
          ))}
        </section>

        <h2 className="section-title sec-gap">Why Students Choose Nexu Guru?</h2>
        <div className="why-row">
          {[[BadgeCheck, 'Board Focused'], [Video, 'Chapter-wise Video Lectures'], [ChartColumn, 'Weekly Tests & Performance Analysis'], [Notebook, 'Past Questions & Model Papers'], [Headset, '24/7 Doubt Support'], [ChartColumn, 'Student Progress Tracking']].map(([I, t]) => <div key={t} className="why-item"><span className="icircle" style={{ width: 56, height: 56 }}><I /></span><strong>{t}</strong></div>)}
        </div>

        <section className="class-reviews">
          <div className="class-reviews__intro"><h2>What Our Students Say</h2><p>Real feedback from students who learn with Nexu Guru.</p><Button variant="purple-outline" pill>View All Reviews</Button></div>
          <button type="button" className="rv-arrow" onClick={() => setR((x) => (x + reviews.length - 1) % reviews.length)} aria-label="Previous"><ChevronLeft /></button>
          {[0, 1, 2].map((i) => { const [av, n, role, t] = reviews[(r + i) % reviews.length]; return (
            <article key={i} className="review-card review-card--sm">
              <div className="review-card__by"><img src={img[av]} alt="" /><div><strong>{n}</strong><small>{role}</small></div></div>
              <Stars /><p>{t}</p>
            </article>); })}
          <button type="button" className="rv-arrow" onClick={() => setR((x) => (x + 1) % reviews.length)} aria-label="Next"><ChevronRight /></button>
        </section>

        <div className="trust-strip">
          {[[Clock3, '7 Days', 'Money Back Guarantee'], [Wallet, 'Secure', 'Payment'], [BadgeCheck, 'Instant Access', 'After Purchase'], [Monitor, 'Access on All Devices', 'Mobile, Tablet & Desktop'], [Clock3, '24/7', 'Doubt Support']].map(([I, t, d]) => <div key={t}><I /><span><strong>{t}</strong><small>{d}</small></span></div>)}
        </div>
      </div>
    </SitePage>
  );
}

