import { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Eye, Gem, Handshake, Quote, Target } from 'lucide-react';
import SitePage from '../components/layout/SitePage.jsx';
import Button from '../components/ui/Button.jsx';
import { Stars } from '../components/site/Reviews.jsx';
import img from '../lib/assets.js';

const story = [
  ['Launch', 'Nexu Guru Website with few Class 11 Notes', '9th April 2021', 'rock-1'],
  ['Add more Notes', 'of Class 11 & 12 Science Faculty', '13th Sept 2021', 'rock-2'],
  ['Register', 'Nexu Guru as a Pvt. Ltd Company', '25th April 2022', 'rock-3'],
  ['We cross', '1 Million views on Website', '13th July 2022', 'rock-4'],
  ['We Launch', 'our First App on Playstore named Class 12 of Nexu Guru', '1st May 2023', 'rock-5'],
  ['We reached', '5 Lakhs users in Websites', '13th Aug 2023', 'rock-6'],
  ['We Launched', 'our Phase 2 Website with Notes, Important answer and past questions', '5th Nov 2023', 'rock-1'],
  ['We reached', '10 Lakhs users in Websites', 'Next 2024', 'rock-2'],
];
const values = [
  [Target, 'Our Mission', 'To make quality education accessible, affordable and effective for every student in Nepal.'],
  [Eye, 'Our Vision', 'To be Nepal’s most trusted and innovative digital learning platform.'],
  [Gem, 'Our Values', 'Quality, integrity, innovation, student success and continuous improvement.'],
  [Handshake, 'Our Promise', 'We are committed to your success with the best content, support and guidance.'],
];
const reviews = [
  ['Sushil K.', 'Class 12', 'Best platform for NEB students! Notes, MCQs and test series are amazing.'],
  ['Ayusha P.', 'Class 11', 'Live classes and doubt support are excellent. Highly recommended!'],
  ['Bibek R.', 'Class 10', 'Nexu Guru helps me every day to improve my learning.'],
  ['Priya Joshi', 'CEE Aspirant', 'The mock tests felt just like the real exam. The explanations are excellent.'],
];

export default function About() {
  const [start, setStart] = useState(0);
  const visible = [0, 1, 2].map((i) => reviews[(start + i) % reviews.length]);
  return (
    <SitePage header={{ active: 'About', showNews: true }} footer={{ columns: ['company', 'centres', 'exams', 'quick', 'products'], about: 'long' }} className="about-page">
      <section className="about-hero" style={{ backgroundImage: `url(${img['hero-about']})` }}>
        <div className="about-hero__inner">
          <h1>About Us</h1>
          <p className="about-hero__sub">Where Practical Learning Meets Creativity</p>
          <p>At Nexu Guru, we believe in enhancing creativity and practical skills. Our E-learning platform offers dynamic programs to inspire and educate future Nepalese students to become professionals.</p>
          <Button variant="purple" pill to="/class-12" className="about-hero__btn">Explore All Notes</Button>
        </div>
        <svg className="page-hero__wave" viewBox="0 0 1440 70" preserveAspectRatio="none" aria-hidden="true"><path d="M0 30 C 360 70, 720 0, 1080 30 S 1440 40, 1440 40 V70 H0 Z" /></svg>
      </section>

      <section className="container story">
        <p className="eyebrow">— The Story —</p>
        <h2 className="section-title">Of Nexu Guru</h2>
        <div className="timeline">
          <img className="timeline__flag" src={img.flag} alt="" />
          {story.map(([lead, rest, date, rock], i) => (
            <div key={i} className={`tl-row ${i % 2 ? 'tl-row--right' : 'tl-row--left'}`}>
              <div className="tl-card"><strong>{lead}</strong> {rest}</div>
              <span className="tl-date">{date}</span>
              <img className="tl-rock" src={img[rock]} alt="" />
            </div>
          ))}
        </div>
      </section>

      <section className="container">
        <div className="who">
          <div className="who__intro">
            <p className="eyebrow eyebrow--left">— About Us —</p>
            <h2>Who We Are</h2>
            <p>Nexu Guru is Nepal’s top online educational platform committed to providing quality education to students across Nepal. We create comprehensive learning experiences to make their education 10x more preparatory for SEE and +2 Exams.</p>
          </div>
          {values.map(([I, t, d]) => (
            <div key={t} className="who__item"><span className="icircle" style={{ width: 58, height: 58 }}><I /></span><h3>{t}</h3><p>{d}</p></div>
          ))}
        </div>
      </section>

      <section className="container reviews">
        <div className="reviews__head">
          <div><h2 className="section-title section-title--left">Students Loves <span aria-hidden="true">❤️</span> Nexu Guru</h2><p>Hear what our students say about their learning experience.</p></div>
          <Button variant="purple-outline" pill iconRight={ArrowRight}>Explore All Reviews</Button>
        </div>
        <div className="reviews__track">
          <button type="button" className="rv-arrow" onClick={() => setStart((s) => (s + reviews.length - 1) % reviews.length)} aria-label="Previous"><ChevronLeft /></button>
          {visible.map(([n, r, t]) => (
            <article key={n} className="review-card">
              <Quote className="review-card__q" />
              <p>{t}</p>
              <div className="review-card__by"><span className="review-card__av">{n[0]}</span><div><strong>{n}</strong><small>{r}</small></div><Stars /></div>
            </article>
          ))}
          <button type="button" className="rv-arrow" onClick={() => setStart((s) => (s + 1) % reviews.length)} aria-label="Next"><ChevronRight /></button>
        </div>
      </section>
    </SitePage>
  );
}
