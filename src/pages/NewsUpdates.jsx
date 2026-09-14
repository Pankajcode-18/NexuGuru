import { ArrowRight, CalendarDays, Megaphone } from 'lucide-react';
import SitePage from '../components/layout/SitePage.jsx';
import PageHero from '../components/site/PageHero.jsx';
import Breadcrumb from '../components/ui/Breadcrumb.jsx';
import Button from '../components/ui/Button.jsx';
import img from '../lib/assets.js';

const updates = [
  { date: '18 May 2024', title: 'Class 12 revision courses are now live', text: 'Revise Physics, Chemistry, Biology, and Mathematics with focused lessons and practice tests.', tone: 'purple' },
  { date: '12 May 2024', title: 'Nexu Guru study planner is here', text: 'Build a realistic weekly plan, track your progress, and keep every revision session moving forward.', tone: 'blue' },
  { date: '6 May 2024', title: 'NEB publishes Class 12 exam routine 2081', text: 'We have added the official routine and a simple preparation checklist to help you plan calmly.', tone: 'orange' },
];

export default function NewsUpdates() {
  return (
    <SitePage header={{ active: 'News & Updates', showNews: true }} footer={{ columns: ['company', 'centres', 'exams', 'quick', 'products'], about: 'long' }} className="news-page">
      <PageHero variant="photo" bg={img['hero-blog']} title="News & Updates" text="Keep up with new courses, useful resources, exam announcements, and everything happening at Nexu Guru." />
      <div className="container">
        <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'News & Updates' }]} className="news-crumbs" />
        <section className="news-intro">
          <div><p className="eyebrow eyebrow--left">WHAT'S NEW</p><h2>Fresh updates for your learning journey</h2></div>
          <p>Here are a few sample announcements from the Nexu Guru team. We will keep this page updated with new releases and important student news.</p>
        </section>
        <div className="news-grid">
          {updates.map((update) => (
            <article key={update.title} className={`news-card news-card--${update.tone}`}>
              <div className="news-card__icon"><Megaphone /></div>
              <div className="news-card__date"><CalendarDays /> {update.date}</div>
              <h3>{update.title}</h3>
              <p>{update.text}</p>
              <Button variant="outline" size="sm" iconRight={ArrowRight} to="/blogs">Read related articles</Button>
            </article>
          ))}
        </div>
      </div>
    </SitePage>
  );
}