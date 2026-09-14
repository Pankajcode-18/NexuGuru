import { useState } from 'react';
import { ArrowLeft, ChevronDown, ChevronUp, CirclePlay, Eye } from 'lucide-react';
import StudyShell from '../components/layout/StudyShell.jsx';
import ChapterSidebar from '../components/study/ChapterSidebar.jsx';
import StudyBottom from '../components/study/StudyBottom.jsx';
import { QuickActions } from '../components/study/AsideWidgets.jsx';
import Dropdown from '../components/ui/Dropdown.jsx';
import SegTabs from '../components/ui/SegTabs.jsx';
import Button from '../components/ui/Button.jsx';
import { Link } from '../lib/router.jsx';
import img from '../lib/assets.js';

const bank = {
  'Very Short (5)': [
    ['What is electric current?', 'The rate of flow of electric charge through a conductor is called electric current.', true],
    ['Write the formula for electric current.', 'I = q / t, where q is the charge flowing and t is the time taken.'],
    ['Define Ohm’s law.', 'At constant temperature, the current through a conductor is directly proportional to the potential difference across its ends.'],
    ['What is the unit of resistance?', 'The SI unit of resistance is ohm (Ω).'],
    ['Name any two factors on which the resistance of a conductor depends.', 'Length of the conductor and its area of cross-section (also material and temperature).'],
  ],
  'Short (10)': [
    ['Distinguish between drift velocity and thermal velocity.', 'Thermal velocity is the random velocity of electrons; drift velocity is the small average velocity acquired along the field.'],
    ['State Kirchhoff’s laws.', 'Junction law: the algebraic sum of currents at a junction is zero. Loop law: the algebraic sum of potential changes around a closed loop is zero.'],
    ['What is a Wheatstone bridge? Write its balance condition.', 'An arrangement of four resistors used to measure an unknown resistance; balanced when P/Q = R/S.'],
    ['Define resistivity and give its SI unit.', 'Resistance of a conductor of unit length and unit cross-section; SI unit is ohm-metre (Ω m).'],
    ['Why is a potentiometer preferred over a voltmeter?', 'It draws no current at the balance point, so it measures the true emf of a cell.'],
  ],
  'Long (15)': [
    ['Derive the relation between current and drift velocity.', 'Consider a conductor of cross-section A with n electrons per unit volume… I = neAv_d.'],
    ['Explain the principle of a meter bridge and describe how it is used to find an unknown resistance.', 'It works on the Wheatstone bridge principle; at balance X/R = l/(100 − l).'],
    ['Obtain the expressions for equivalent resistance in series and parallel combinations.', 'Series: R = R₁ + R₂ + … ; Parallel: 1/R = 1/R₁ + 1/R₂ + …'],
    ['Describe the potentiometer method to compare emfs of two cells.', 'Balancing lengths l₁ and l₂ are found for each cell; E₁/E₂ = l₁/l₂.'],
    ['Discuss the variation of resistivity with temperature for metals and semiconductors.', 'For metals resistivity increases with temperature; for semiconductors it decreases.'],
  ],
};

const related = [
  ['rel-1', 'Electric Current - Basic Concept', '15.2K views'],
  ['rel-2', 'Ohm’s Law Explained', '18.7K views'],
  ['rel-3', 'Resistance and Factors', '11.3K views'],
];

export default function ImportantQuestions() {
  const [tab, setTab] = useState('Very Short (5)');
  const [open, setOpen] = useState(0);
  const items = bank[tab];
  return (
    <StudyShell searchCircle={false} crumbs={[{ label: 'Home', to: '/' }, { label: 'Class 12', to: '/class-12' }, { label: 'Science', to: '/class-12' }, { label: 'Physics', to: '/class-12' }, { label: 'Current Electricity', to: '/notes' }, { label: 'Important Questions' }]}>
      <div className="study-container">
        <div className="study-grid">
          <ChapterSidebar section="iq" sub={null} collapsedChevrons currentStyle="fill" />
          <main className="study-main iq-page">
            <Link to="/notes" className="back-link"><ArrowLeft /> Back to Notes</Link>
            <h1 className="study-title">Current Electricity - Important Questions</h1>
            <p className="study-sub">Important questions with answers to help you revise better.</p>
            <div className="filter-row">
              <SegTabs className="iq-tabs" tabs={Object.keys(bank)} value={tab} onChange={(t) => { setTab(t); setOpen(0); }} />
              <Dropdown options={['Newest First', 'Oldest First']} width={130} />
            </div>
            <div className="iq-list">
              {items.map(([q, a, video], i) => {
                const isOpen = open === i;
                return (
                  <div key={q} className={`iq-item ${isOpen ? 'is-open' : ''}`}>
                    <button type="button" className="iq-item__q" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? -1 : i)}>
                      <span className="iq-num">{i + 1}</span><span className="iq-item__text">{q}</span>{isOpen ? <ChevronUp /> : <ChevronDown />}
                    </button>
                    {isOpen && (
                      <div className="iq-item__a">
                        <p className="iq-answer-label">Answer:</p>
                        <p className="iq-answer">{a}</p>
                        {video && (
                          <div className="iq-video">
                            <h4>Watch Video Explanation</h4>
                            <div className="iq-video__row">
                              <img src={img['rel-q']} alt="" />
                              <div className="iq-video__info">
                                <strong>Electric Current - Definition, Units and Examples</strong>
                                <span><Eye /> 04:25 <Eye /> 12.4K views</span>
                              </div>
                              <Button variant="outline" size="sm" icon={CirclePlay} to="/videos" className="iq-video__btn">Watch Now</Button>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="center-row"><button type="button" className="btn btn--outline show-more">Show More <ChevronDown /></button></div>
          </main>
          <div className="study-aside">
            <QuickActions boxed items={[{ icon: 'fileDown', label: 'Download PDF' }, { icon: 'bookmark', label: 'Bookmark This Page' }, { icon: 'share', label: 'Share' }, { icon: 'print', label: 'Print', action: () => window.print() }, { icon: 'flag', label: 'Report an Issue', to: '/report-issue' }]} />
            <section className="aside-card related">
              <h3 className="aside-card__title">Video Lectures (Related) <Link to="/videos">View All</Link></h3>
              <ul>
                {related.map(([t, name, v]) => (
                  <li key={name}><Link to="/videos"><img src={img[t]} alt="" /><span><strong>{name}</strong><small><Eye /> {v}</small></span></Link></li>
                ))}
              </ul>
              <Button variant="outline" block icon={CirclePlay} to="/videos" className="related__all">View All Videos</Button>
            </section>
          </div>
        </div>
        <StudyBottom />
      </div>
    </StudyShell>
  );
}

