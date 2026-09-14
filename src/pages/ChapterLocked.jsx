import { useEffect, useState } from 'react';
import { ArrowRight, BookOpenText, CircleCheck, CirclePlay, Crown, FileBadge, Headset, Lock, LockKeyhole, NotebookTabs, Quote, ShieldCheck, CircleCheckBig } from 'lucide-react';
import StudyShell from '../components/layout/StudyShell.jsx';
import Button from '../components/ui/Button.jsx';
import Progress from '../components/ui/Progress.jsx';
import { navigate } from '../lib/router.jsx';
import img from '../lib/assets.js';

const chapters = [
  ['Units and Measurements', 'Learn about physical quantities, units, dimensions and errors in measurement.'],
  ['Motion in a Straight Line', 'Learn about displacement, velocity, acceleration and equations of motion in one dimension.'],
  ['Motion in a Plane', 'Learn about vectors, projectile motion and uniform circular motion.'],
  ['Laws of Motion', 'Learn about Newton’s laws, friction and dynamics of circular motion.'],
  ['Work, Energy and Power', 'Learn about work-energy theorem, conservation of energy and power.'],
  ['System of Particles & Rotational Motion', 'Learn about centre of mass, torque, angular momentum and moment of inertia.'],
  ['Gravitation', 'Learn about Kepler’s laws, gravitational potential and satellites.'],
  ['Properties of Bulk Matter', 'Learn about elasticity, fluid mechanics, surface tension and viscosity.'],
  ['Thermodynamics', 'Learn about laws of thermodynamics, heat engines and refrigerators.'],
  ['Kinetic Theory of Gases', 'Learn about gas laws, kinetic interpretation of temperature and mean free path.'],
  ['Oscillations', 'Learn about simple harmonic motion, energy in SHM and damped oscillations.'],
  ['Waves', 'Learn about wave motion, superposition, standing waves and beats.'],
];
const features = [
  { icon: BookOpenText, tone: 'purple', title: 'Complete Notes', desc: 'Handwritten, Typed & PPT Slides' },
  { icon: CirclePlay, tone: 'blue', title: 'Video Lectures', desc: 'Concept videos by experts' },
  { icon: NotebookTabs, tone: 'green', title: 'MCQ & Tests', desc: 'Practice and test your knowledge' },
  { icon: FileBadge, tone: 'orange', title: 'Important Q&A', desc: 'Short, Long & Very Long Questions' },
];
const plans = [
  { id: 'm1', name: '1 Month', price: 199, per: '/month', billed: 'Billed as Rs. 199' },
  { id: 'm6', name: '6 Months', price: 699, per: '/6 months', save: 'Save 30%', billed: 'Billed as Rs. 699', popular: true },
  { id: 'y1', name: '1 Year', price: 999, per: '/year', save: 'Save 45%', billed: 'Billed as Rs. 999' },
];
const perks = ['Unlock all chapters', 'Access all notes & PDFs', 'Watch all video lectures', 'Practice MCQs & Tests', 'Get important questions', 'Download study materials', 'Learn anytime, anywhere'];
const quotes = [
  ['“Nexu Guru helped me score 90+ in Physics! The notes and videos are super helpful.”', 'Sushant K., Class 12'],
  ['“The chapter-wise MCQs made my board revision quick and focused.”', 'Riya S., Class 12'],
  ['“Important questions with answers saved me so much time before exams.”', 'Bikash T., Class 11'],
];

export default function ChapterLocked() {
  const [selected, setSelected] = useState(1);
  const [plan, setPlan] = useState('m6');
  const [quote, setQuote] = useState(0);
  useEffect(() => { const t = setInterval(() => setQuote((q) => (q + 1) % quotes.length), 5000); return () => clearInterval(t); }, []);
  const [title, desc] = chapters[selected];

  return (
    <StudyShell searchCircle={false} crumbs={[{ label: 'Home', to: '/' }, { label: 'Class 12', to: '/class-12' }, { label: 'Science', to: '/class-12' }, { label: 'Physics', to: '/class-12' }, { label: 'Mechanics', to: '/class-12' }, { label: `Chapter ${selected + 1}` }]}
      footer={{ copyright: '© 2024 Nexu Education Pvt. Ltd. All rights reserved.', className: 'study-footer--tall' }}>
      <div className="study-container">
        <div className="locked-grid">
          {/* Left: subject card */}
          <aside className="subject-card">
            <div className="subject-card__head">
              <h2>Class 12<br />Physics</h2>
              <img src={img.cradle} alt="" />
            </div>
            <div className="subject-card__progress">
              <div className="row"><span>Progress</span><span>1 / 12 Chapters</span></div>
              <Progress value={100 / 12} />
            </div>
            <h3 className="subject-card__title">Chapters</h3>
            <ul className="lock-list">
              {chapters.map(([name], i) => {
                const free = i === 0;
                return (
                  <li key={name}>
                    <button type="button" className={`lock-item ${free ? 'is-free' : ''} ${selected === i && !free ? 'is-selected' : ''}`} onClick={() => (free ? navigate('/notes') : setSelected(i))}>
                      {free ? <LockKeyhole className="lock-item__ico lock-item__ico--open" /> : <Lock className="lock-item__ico" />}
                      <span className="lock-item__name">{i + 1}. {name}</span>
                      {free ? <><span className="badge badge--free">FREE</span><CircleCheck className="lock-item__check" /></> : <span className="badge badge--pro">PRO</span>}
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="unlock-card">
              <h4><Crown /> Unlock All Chapters</h4>
              <p>Get unlimited access to all chapters, notes, videos, MCQs and more.</p>
              <Button block spread iconRight={ArrowRight} to="/checkout" className="unlock-card__btn">Go Premium Now</Button>
            </div>
          </aside>

          {/* Center: locked chapter */}
          <main className="locked-main">
            <div className="free-banner"><LockKeyhole /> Only the first chapter is free. Unlock all chapters by upgrading to Pro.</div>
            <div className="locked-panel">
              <section className="chapter-hero">
                <div className="chapter-hero__text">
                  <p className="chapter-hero__kicker"><Lock /> Chapter {selected + 1} <i /> <span className="badge badge--purple badge--pill">PRO</span></p>
                  <h1>{title}</h1>
                  <p>{desc}</p>
                </div>
                <img src={img['locked-hero']} alt="" />
              </section>
              <section className="locked-box">
                <span className="locked-box__lock"><Lock /></span>
                <h2>This Chapter is Locked</h2>
                <p>You can preview Chapter 1 for free.<br />Upgrade to <b>Nexu Guru Pro</b> to unlock this<br />chapter and all other chapters.</p>
                <div className="locked-features">
                  {features.map(({ icon: I, tone, title: t, desc: d }) => (
                    <div key={t} className="locked-feature"><span className={`tone tone--${tone}`}><I /></span><strong>{t}</strong><small>{d}</small></div>
                  ))}
                </div>
                <h3 className="plans-title">Choose Your Plan</h3>
                <div className="plans">
                  {plans.map((p) => (
                    <div key={p.id} className={`plan ${plan === p.id ? 'is-selected' : ''}`} onClick={() => setPlan(p.id)} role="radio" aria-checked={plan === p.id} tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && setPlan(p.id)}>
                      {p.popular && <span className="plan__flag">Most Popular</span>}
                      <p className="plan__name">{p.name}</p>
                      <p className="plan__price"><small>Rs.</small> {p.price} <em>{p.per}</em></p>
                      <p className="plan__save">{p.save}</p>
                      <p className="plan__billed">{p.billed}</p>
                      <Button variant={plan === p.id ? 'primary' : 'soft'} block to="/checkout" className="plan__btn">Get Started</Button>
                    </div>
                  ))}
                </div>
                <p className="secure-note"><ShieldCheck /> 100% Secure Payment <span>•</span> Cancel Anytime</p>
              </section>
            </div>
          </main>

          {/* Right */}
          <div className="locked-aside">
            <section className="aside-card aside-card--soft why-pro">
              <h3><Crown className="c-amber" /> Why Go Pro?</h3>
              <ul>{perks.map((p) => <li key={p}><CircleCheckBig />{p}</li>)}</ul>
            </section>
            <section className="aside-card aside-card--soft love-card">
              <h3><Quote /> Students Love Nexu Guru</h3>
              <blockquote>{quotes[quote][0]}</blockquote>
              <p className="love-card__by">– &nbsp;{quotes[quote][1]}</p>
              <div className="dots">{quotes.map((_, i) => <button key={i} type="button" className={i === quote ? 'is-active' : ''} onClick={() => setQuote(i)} aria-label={`Quote ${i + 1}`} />)}</div>
            </section>
            <section className="aside-card aside-card--soft help-card">
              <span className="help-card__icon"><Headset /></span>
              <div>
                <h3>Need Help?</h3>
                <p>Our support team is here to help you.</p>
                <Button variant="outline" iconRight={ArrowRight} to="/report-issue">Contact Support</Button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </StudyShell>
  );
}
