import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Bookmark, CircleAlert, CircleCheck, CircleMinus, Clock3, FileText, LayoutGrid, SquareCheckBig, Star, Target, Trophy, Users } from 'lucide-react';
import StudyShell from '../components/layout/StudyShell.jsx';
import ChapterSidebar from '../components/study/ChapterSidebar.jsx';
import StudyBottom from '../components/study/StudyBottom.jsx';
import { QuickActions } from '../components/study/AsideWidgets.jsx';
import Button from '../components/ui/Button.jsx';
import Progress from '../components/ui/Progress.jsx';
import { toast } from '../components/ui/Toast.jsx';
import { Link, navigate } from '../lib/router.jsx';
import img from '../lib/assets.js';

const questions = [
  ['What is the SI unit of electric charge?', ['Ampere (A)', 'Coulomb (C)', 'Volt (V)', 'Ohm (Ω)']],
  ['Ohm’s law is valid when temperature is', ['Variable', 'Constant', 'Very high', 'Very low']],
  ['The resistance of a conductor depends on', ['Length', 'Area', 'Material', 'All of these']],
  ['Kirchhoff’s current law is based on conservation of', ['Energy', 'Charge', 'Momentum', 'Mass']],
  ['Which of the following is the unit of electric current?', ['Volt (V)', 'Watt (W)', 'Ohm (Ω)', 'Ampere (A)']],
  ['Drift velocity of electrons is of the order of', ['10⁸ m/s', '10⁻⁴ m/s', '10³ m/s', '1 m/s']],
  ['Resistivity of a metal increases with', ['Temperature', 'Length', 'Area', 'Current']],
  ['Equivalent resistance of two 4 Ω resistors in parallel is', ['8 Ω', '4 Ω', '2 Ω', '1 Ω']],
  ['A Wheatstone bridge is balanced when', ['P/Q = R/S', 'P + Q = R + S', 'PQ = RS', 'P = S']],
  ['Potentiometer is used to measure', ['Current', 'Resistance', 'EMF', 'Power']],
  ['Electrical power is given by', ['P = VI', 'P = V/I', 'P = I/R', 'P = IR']],
  ['Unit of conductivity is', ['Ω m', 'S/m', 'Ω', 'A/m']],
  ['Kirchhoff’s voltage law is based on conservation of', ['Charge', 'Energy', 'Mass', 'Momentum']],
  ['Meter bridge works on the principle of', ['Potentiometer', 'Wheatstone bridge', 'Ohm’s law', 'Joule’s law']],
  ['Internal resistance of an ideal cell is', ['Infinite', 'Zero', 'One ohm', 'Variable']],
  ['Current density is a', ['Scalar', 'Vector', 'Tensor', 'Constant']],
  ['1 kWh equals', ['3.6 × 10⁶ J', '3.6 × 10³ J', '1000 J', '36 J']],
  ['Resistance of an ideal ammeter is', ['Zero', 'Infinite', 'High', 'Medium']],
  ['Mobility of electrons is defined as drift velocity per unit', ['Charge', 'Electric field', 'Current', 'Length']],
  ['The slope of V–I graph of an ohmic conductor gives', ['Current', 'Resistance', 'Conductance', 'Power']],
];

const leaderboard = [[1, 'Sajan K.C.', 20, 'lb-1'], [2, 'Aarav Sharma', 19, 'lb-2'], [3, 'Nischal Thapa', 18, 'lb-3']];
const fmt = (s) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

export default function LiveMCQ() {
  const [current, setCurrent] = useState(4);
  const [answers, setAnswers] = useState({ 0: 1, 1: 1, 2: 3, 3: 1, 4: 3 });
  const [review, setReview] = useState({ 5: true });
  const [seconds, setSeconds] = useState(20 * 60);
  useEffect(() => { const t = setInterval(() => setSeconds((s) => Math.max(0, s - 1)), 1000); return () => clearInterval(t); }, []);

  const [text, options] = questions[current];
  const answeredCount = Object.keys(answers).length;
  const status = (i) => (i === current ? 'current' : review[i] ? 'review' : answers[i] !== undefined ? 'answered' : 'idle');

  return (
    <StudyShell crumbs={[{ label: 'Home', to: '/' }, { label: 'Class 12', to: '/class-12' }, { label: 'Science', to: '/class-12' }, { label: 'Physics', to: '/class-12' }, { label: 'Current Electricity', to: '/notes' }, { label: 'MCQ', to: '/live-mcq' }, { label: 'Live MCQ' }]}>
      <div className="study-container">
        <div className="study-grid study-grid--mcq">
          <ChapterSidebar section="mcq" sub="live" />
          <main className="study-main mcq-page">
            <div className="mcq-head">
              <div>
                <Link to="/notes" className="back-link"><ArrowLeft /> Back to MCQ</Link>
                <h1 className="study-title">Live MCQ - Current Electricity <span className="live-pill"><i />LIVE</span></h1>
                <p className="study-sub">Join live quiz and compete with students across Nepal.</p>
              </div>
              <Button variant="danger" className="mcq-exit" onClick={() => navigate('/notes')}>Exit Quiz</Button>
            </div>

            <div className="mcq-stats">
              <div className="mcq-stat"><Trophy className="c-amber" /><div><strong>20</strong><span>Total Questions</span></div></div>
              <div className="mcq-stat"><Clock3 className="c-indigo" /><div><strong>{fmt(seconds)}</strong><span>Time Left</span></div></div>
              <div className="mcq-stat"><Target className="c-green" /><div><strong>+4</strong><span>Correct Answer</span></div></div>
              <div className="mcq-stat"><CircleMinus className="c-red" /><div><strong>-1</strong><span>Wrong Answer</span></div></div>
            </div>

            <div className="mcq-body">
              <section className="mcq-q">
                <p className="mcq-q__count">Question {current + 1} of 20</p>
                <div className="mcq-q__progress"><Progress value={(answeredCount / 20) * 100} /><strong>{Math.round((answeredCount / 20) * 100)}%</strong></div>
                <h2 className="mcq-q__text">{text}</h2>
                <div className="mcq-options" role="radiogroup">
                  {options.map((o, i) => {
                    const sel = answers[current] === i;
                    return (
                      <button key={o} type="button" role="radio" aria-checked={sel} className={`mcq-option ${sel ? 'is-selected' : ''}`} onClick={() => setAnswers((a) => ({ ...a, [current]: i }))}>
                        <span className="mcq-option__radio">{sel && <CircleCheck />}</span>{o}
                      </button>
                    );
                  })}
                </div>
                <div className="mcq-q__nav">
                  <Button variant="outline" icon={ArrowLeft} disabled={current === 0} onClick={() => setCurrent((c) => c - 1)}>Previous</Button>
                  <Button iconRight={ArrowRight} onClick={() => (current < 19 ? setCurrent((c) => c + 1) : toast('Quiz submitted'))}>Next</Button>
                </div>
              </section>

              <section className="mcq-palette">
                <h3>Question Palette</h3>
                <div className="mcq-legend">
                  <span><i className="lg lg--answered" />Answered</span><span className="is-current"><i className="lg lg--current" />Current</span>
                  <span><i className="lg lg--idle" />Unanswered</span><span><i className="lg lg--review" />Review</span>
                </div>
                <div className="mcq-grid">
                  {questions.map((_, i) => <button key={i} type="button" className={`pq pq--${status(i)}`} onClick={() => setCurrent(i)}>{i + 1}</button>)}
                </div>
                <button type="button" className="mcq-review" onClick={() => setReview((r) => ({ ...r, [current]: !r[current] }))}>
                  <Bookmark /> Review Later ({Object.values(review).filter(Boolean).length})
                </button>
              </section>
            </div>

            <div className="mcq-info">
              <span className="mcq-info__icon"><SquareCheckBig /></span>
              <div><strong>How Live MCQ Works?</strong><p>Answer all questions within the time limit. Correct answer +4 marks and wrong answer -1 mark. Your rank will be based on your score and time.</p></div>
            </div>
          </main>

          <div className="study-aside">
            <QuickActions tiles items={[
              { icon: SquareCheckBig, label: 'Submit Quiz', action: () => toast(`Quiz submitted – ${answeredCount} of 20 answered`) },
              { icon: LayoutGrid, label: 'Change Quiz Mode' },
              { icon: FileText, label: 'View Rules' },
              { icon: CircleAlert, label: 'Report an Issue', to: '/report-issue' },
            ]} />
            <section className="aside-card live-now">
              <h3 className="live-now__title"><i /> LIVE <b>NOW</b></h3>
              <ul>
                <li><Users className="c-green" /><span>Participants</span><strong>1,248</strong></li>
                <li><Trophy className="c-amber" /><span>Your Rank</span><strong>#18</strong></li>
                <li><Star className="c-amber" /><span>Your Score</span><strong>16 / 20</strong></li>
              </ul>
            </section>
            <section className="aside-card leaderboard">
              <h3 className="aside-card__title">Live Leaderboard <a href="#" onClick={(e) => e.preventDefault()}>View All</a></h3>
              <ul>
                {leaderboard.map(([r, n, s, a]) => <li key={r}><span className="rank">{r}</span><img src={img[a]} alt="" /><span className="name">{n}</span><strong>{s}</strong></li>)}
                <li className="gap">…</li>
                <li className="is-me"><span className="rank">18</span><img src={img['lb-me']} alt="" /><span className="name">You (Aman)</span><strong>16</strong></li>
              </ul>
            </section>
          </div>
        </div>
        <StudyBottom />
      </div>
    </StudyShell>
  );
}

