import { useMemo, useState } from 'react';
import { ArrowRight, BookOpen, ChevronDown, ChevronRight, ChevronUp, CreditCard, GraduationCap, Headset, LayoutGrid, MailOpen, Search, Smartphone, UserRound, CircleHelp } from 'lucide-react';
import SitePage from '../components/layout/SitePage.jsx';
import PageHero from '../components/site/PageHero.jsx';
import Button from '../components/ui/Button.jsx';
import img from '../lib/assets.js';
import { Link } from '../lib/router.jsx';

const groups = [
  { id: 'general', title: 'General', icon: CircleHelp, items: [
    ['What is Nexu Guru?', 'Nexu Guru is Nepal’s online learning platform offering notes, videos, MCQs and entrance preparation for Class 11, Class 12 and entrance exams.'],
    ['Is Nexu Guru free to use?', 'Many notes and the first chapter of every subject are free. Premium chapters, videos and tests are available with a Pro plan.'],
    ['Which classes and faculties do you cover?', 'We cover Class 11 and 12 Science, Management and Computer Engineering, plus IOE, CEE, Loksewa and Banking preparation.'],
  ] },
  { id: 'materials', title: 'Study Materials', icon: BookOpen, more: true, items: [
    ['Can I download notes as PDF?', 'Yes. Handwritten and typed notes can be downloaded from the chapter page using the Download PDF button.'],
    ['Are the notes based on the latest NEB syllabus?', 'All notes are prepared by subject experts following the latest NEB curriculum.'],
    ['How often is new content added?', 'New notes, videos and questions are added every week throughout the academic session.'],
  ] },
  { id: 'exams', title: 'Exams & Preparation', icon: GraduationCap, items: [
    ['How do Live MCQ tests work?', 'Live MCQs are timed quizzes where correct answers earn +4 and wrong answers −1. Ranks are shown on a live leaderboard.'],
    ['Do you provide model and past question papers?', 'Yes, model papers and previous year papers with solutions are available in the Extra Content section.'],
  ] },
  { id: 'payments', title: 'Payments & Plans', icon: CreditCard, items: [
    ['Which payment methods are accepted?', 'We accept eSewa, Khalti, debit/credit cards, IME Pay and bank transfer.'],
    ['Can I get a refund?', 'Refunds are available within 7 days as described in our Refund Policy.'],
  ] },
  { id: 'account', title: 'Account & Profile', icon: UserRound, items: [
    ['How do I reset my password?', 'Click “Forgot Password?” on the login page and follow the link sent to your email.'],
    ['Can I use one account on multiple devices?', 'Yes, you can sign in on your phone and computer, but sharing accounts is not allowed.'],
  ] },
  { id: 'app', title: 'Mobile App', icon: Smartphone, items: [
    ['Is there a Nexu Guru mobile app?', 'Yes, the Nexu Guru app is available on Google Play and the App Store.'],
    ['Can I study offline?', 'Downloaded notes are available offline in the NEN Offline App.'],
  ] },
];

export default function FAQ() {
  const [q, setQ] = useState('');
  const [query, setQuery] = useState('');
  const [cat, setCat] = useState(null);
  const [open, setOpen] = useState(null);
  const shown = useMemo(() => groups
    .filter((g) => !cat || g.id === cat)
    .map((g) => ({ ...g, items: g.items.map((it, i) => [...it, i]).filter(([qq, a]) => (qq + a).toLowerCase().includes(query.toLowerCase())) }))
    .filter((g) => g.items.length)
    .slice(0, cat || query ? 6 : 3), [cat, query]);

  return (
    <SitePage header={{ showNews: true }} footer={{ columns: ['company', 'centres', 'quick', 'products'] }} className="faq-page">
      <PageHero variant="dark" title="Frequently Asked" accent="Questions" art={img['hero-faq']} wave
        text="Find answers to the most common questions about Nexu Guru, our courses, study materials and more." />
      <div className="container">
        <form className="faq-search" onSubmit={(e) => { e.preventDefault(); setQuery(q); }}>
          <Search /><input value={q} onChange={(e) => { setQ(e.target.value); if (!e.target.value) setQuery(''); }} placeholder="Search your question..." />
          <button type="submit" className="btn btn--purple">Search</button>
        </form>
        <div className="faq-layout">
          <aside className="faq-side">
            <div className="faq-cats">
              <h3><LayoutGrid /> Browse by Category</h3>
              <ul>
                {groups.map((g) => {
                  const I = g.icon;
                  return <li key={g.id}><button type="button" className={cat === g.id ? 'is-active' : ''} onClick={() => setCat(cat === g.id ? null : g.id)}><I /><span>{g.title}</span><em>{g.items.length}</em><ChevronRight /></button></li>;
                })}
              </ul>
            </div>
            <div className="faq-still">
              <span className="faq-still__icon"><Headset /></span>
              <h3>Still have questions?</h3>
              <p>Can’t find the answer you’re looking for? Our team is here to help.</p>
              <Button variant="purple" pill iconRight={ArrowRight} to="/report-issue">Contact Us</Button>
            </div>
          </aside>
          <div className="faq-main">
            {shown.map((g) => (
              <section key={g.id} className="faq-group">
                <div className="faq-group__head"><h2>{g.title}</h2>{g.more && <button type="button" onClick={() => setCat(g.id)}>View all <ArrowRight /></button>}</div>
                <div className="faq-acc">
                  {g.items.map(([qq, a, i]) => {
                    const id = `${g.id}-${i}`; const isOpen = open === id;
                    return (
                      <div key={id} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
                        <button type="button" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : id)}><span>{i + 1}. {qq}</span>{isOpen ? <ChevronUp /> : <ChevronDown />}</button>
                        {isOpen && <p>{a}</p>}
                      </div>
                    );
                  })}
                </div>
              </section>
            ))}
            {!shown.length && <p className="faq-empty">No questions match “{query}”. <Link to="/report-issue">Ask our team</Link>.</p>}
            <div className="faq-cta">
              <MailOpen className="faq-cta__art" />
              <div><h3>Can’t find what you’re looking for?</h3><p>Send us your question and our support team will get back to you within 24 hours.</p></div>
              <Button variant="purple" pill iconRight={ArrowRight} to="/report-issue">Contact Support</Button>
            </div>
          </div>
        </div>
      </div>
    </SitePage>
  );
}
