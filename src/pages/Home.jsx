import {
  ArrowRight,
  Atom,
  Award,
  BookOpen,
  Check,
  ChevronLeft,
  ChevronRight,
  CirclePlay,
  ClipboardList,
  GraduationCap,
  Heart,
  Mountain,
  Play,
  ShoppingBag,
  Smile,
  Tv,
  UsersRound,
} from 'lucide-react';
import { useState } from 'react';
import SitePage from '../components/layout/SitePage.jsx';
import Button from '../components/ui/Button.jsx';
import { Link } from '../lib/router.jsx';
import img from '../lib/assets.js';

const classes = [
  {
    grade: 'Class 12',
    to: '/class-12',
    avatar: 'avatar-sm',
    label: 'Explore',
  },
  {
    grade: 'Class 11',
    to: '/class-12',
    avatar: 'avatar-lg',
    label: 'Explore',
  },
  {
    grade: 'Class 10',
    to: '/class-12',
    avatar: 'class-avatar',
    label: 'Explore',
  },
];

const features = [
  {
    art: 'feat-video',
    tint: 'purple',
    title: 'Interactive Videos',
    text: 'Transform your teaching and learning experience with our interactive video lessons for each topic. It suits time and brings better understanding with visual educational experience.',
  },
  {
    art: 'feat-test',
    tint: 'blue',
    title: 'Testpaper',
    text: "Teachers can effortlessly create custom test papers on any topic, subject or exam. Students can also access a wide selection of testpapers. It's a perfect resource for both creative Testpapers and evaluate them on understanding and entertaining.",
  },
  {
    art: 'feat-chat',
    tint: 'orange',
    title: 'Group Chat',
    text: 'Connect and exchange ideas easily using our group chat system. It creates advancement in group projects, debate discussions or collaborative learning by instantly connecting with 1 click group.',
  },
  {
    art: 'feat-quiz',
    fallback: 'feat-test',
    tint: 'purple',
    title: 'Quizzes & Simulations',
    text: 'Our highly interactive in-lesson and end-of-lesson quizzes help students get critical insights into their perfect. It provide enganging and exciting approach to monitor all students and their lessons via Diagnostic Reports.',
  },
  {
    art: 'feat-class',
    fallback: 'feat-video',
    tint: 'green',
    title: 'Classroom',
    text: 'Conduct hassle-free virtual classes on our Smart Classroom platform. Create, schedule classes and conduct classes with ease.',
  },
  {
    art: 'feat-report',
    fallback: 'feat-test',
    tint: 'blue',
    title: 'Report & Statistics',
    text: 'Maximize student success with our Monthly Report, Test paper assessment, progress tracking scores, and attendance moments to level up learning game and take timely corrective actions.',
  },
];

const counterStats = [
  { num: '96+', label: 'Video Materials', icon: CirclePlay },
  { num: '38+', label: 'Active Teacher', icon: GraduationCap },
  { num: '481K+', label: 'Happy Students', icon: UsersRound },
  { num: '4,340+', label: 'Study Materials', icon: ClipboardList },
];

const lovedStats = [
  { num: '50K+', label: 'Video Materials', icon: Tv },
  { num: '250+', label: 'Active Teacher', icon: GraduationCap },
  { num: '90K+', label: 'Current Users', icon: UsersRound },
  { num: '20K+', label: 'Study Materials', icon: BookOpen },
];

const whyChecklist = [
  'Comprehensive and easy-to-understand content',
  'Experienced and dedicated teachers',
  'Affordable subscription plans',
  'Available on web and mobile app',
  'Regular updates and new content',
  '24/7 Doubt Support',
  'QR Student Card & Exclusive Discounts',
  'Referral Cashback & Rewards',
];

const blogPosts = [
  {
    image: 'blog-home-1',
    fallback: 'blog-1',
    category: 'Exam Tips',
    date: 'May 10, 2024',
    title: 'How to Prepare for Board Exams Effectively',
    text: 'Top strategies and time-management tips to help you score better in your board exams.',
    link: '/blogs',
  },
  {
    image: 'blog-home-2',
    fallback: 'blog-2',
    category: 'Study Tips',
    date: 'May 8, 2024',
    title: 'Smart Study Techniques for Students',
    text: 'Learn effective study methods to improve your memory and understanding.',
    link: '/blogs',
  },
  {
    image: 'blog-home-3',
    fallback: 'blog-3',
    category: 'Career Guidance',
    date: 'May 6, 2024',
    title: 'Top Career Options After Class 12 in Nepal',
    text: 'Explore the best career opportunities available after your +2 in different streams.',
    link: '/blogs',
  },
];

const brandsList = [
  {
    id: 'b1',
    name: 'NEXU',
    sub: 'EDUCATION',
    iconType: 'g',
  },
  {
    id: 'b2',
    name: 'Quality',
    sub: 'Education Academy',
    iconType: 'award',
  },
  {
    id: 'b3',
    name: 'NEXU',
    sub: 'THINKLAB',
    iconType: 'atom',
  },
  {
    id: 'b4',
    name: 'Himalayan',
    sub: 'Education',
    iconType: 'mountain',
  },
  {
    id: 'b5',
    name: 'NEXU',
    sub: 'STORE',
    iconType: 'store',
  },
  {
    id: 'b6',
    name: 'COCO',
    sub: 'SATHI',
    iconType: 'coco',
  },
];

const studentReviews = [
  {
    id: 'r1',
    stars: 5,
    text: 'Best platform for NEB students! Notes, MCQs and test series are amazing.',
    author: 'Sushil K.',
    grade: 'Class 12',
  },
  {
    id: 'r2',
    stars: 5,
    text: 'Live classes and doubt support are excellent. Highly recommended!',
    author: 'Aayusha P.',
    grade: 'Class 11',
  },
  {
    id: 'r3',
    stars: 5,
    text: 'Nexu Guru helps me everyday to improve my learning.',
    author: 'Bibek R.',
    grade: 'Class 10',
  },
];

export default function Home() {
  const [brandIndex, setBrandIndex] = useState(0);
  const [reviewIndex, setReviewIndex] = useState(0);

  const prevBrand = () => {
    setBrandIndex((prev) => (prev > 0 ? prev - 1 : brandsList.length - 1));
  };
  const nextBrand = () => {
    setBrandIndex((prev) => (prev < brandsList.length - 1 ? prev + 1 : 0));
  };

  const prevReview = () => {
    setReviewIndex((prev) => (prev > 0 ? prev - 1 : studentReviews.length - 1));
  };
  const nextReview = () => {
    setReviewIndex((prev) => (prev < studentReviews.length - 1 ? prev + 1 : 0));
  };

  return (
    <SitePage header={{ active: 'Home', showNews: true }} footer={{ columns: ['company', 'centres', 'exams', 'connect', 'quick', 'products'] }} className="home-page">
      {/* 1. HERO SECTION */}
      <section className="home-hero">
        <div className="container home-hero__inner">
          <div className="home-hero__copy">
            <span className="home-hero__badge">The Most |</span>
            <h1 className="home-hero__title">
              Learning <span>Platform</span>
            </h1>
            <p className="home-hero__desc">
              Nexu Guru is a E-learning platform for the teacher and students to explore and enhance their skills and creativity in the filed of practical learning. Nexu Guru believes in enhancing the creativity of young kids in the near future.
            </p>

            {/* 3 Class Cards */}
            <div className="home-classes-row">
              {classes.map((c) => (
                <Link key={c.grade} to={c.to} className="home-class-card">
                  <div className="home-class-card__avatar">
                    <img src={img[c.avatar] || img['avatar-sm']} alt={c.grade} />
                  </div>
                  <div className="home-class-card__info">
                    <strong>{c.grade}</strong>
                    <span>{c.label} &rsaquo;</span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Full width Entrance button */}
            <Link to="/entrance" className="home-hero__entrance-btn">
              Entrance Preparation &rarr;
            </Link>
          </div>

          {/* Right Column: Interactive Phone Chat Mockup */}
          <div className="home-hero__visual">
            <div className="home-decor-ruler-left" aria-hidden="true" />
            <img className="home-decor-triangle" src={img['home-ruler']} alt="" aria-hidden="true" />
            <img className="home-decor-cap" src={img['home-cap']} alt="" aria-hidden="true" />

            <div className="home-phone-mockup">
              <div className="home-phone__speaker" />
              <div className="home-phone__header">
                <img src={img['logo1'] || img['logo']} alt="Nexu Guru" className="home-phone__logo" />
              </div>
              <div className="home-phone__chat">
                {/* Message 1 (Yellow) */}
                <div className="chat-bubble chat-bubble--yellow">
                  <div className="chat-bubble__avatar">
                    <img src={img['avatar-sm']} alt="Bipana" />
                  </div>
                  <div className="chat-bubble__content">
                    <span className="chat-bubble__name">Student Bipana</span>
                    <p>Hello Sir! I need Notes.</p>
                  </div>
                </div>

                {/* Message 2 (Purple) */}
                <div className="chat-bubble chat-bubble--purple">
                  <div className="chat-bubble__content chat-bubble__content--right">
                    <span className="chat-bubble__name">Anil Sir</span>
                    <p>Hello Bipana!<br />Which Notes do you want?</p>
                  </div>
                  <div className="chat-bubble__avatar">
                    <img src={img['avatar-lg']} alt="Anil Sir" />
                  </div>
                </div>

                {/* Message 3 (Yellow) */}
                <div className="chat-bubble chat-bubble--yellow">
                  <div className="chat-bubble__avatar">
                    <img src={img['class-avatar']} alt="Aasha" />
                  </div>
                  <div className="chat-bubble__content">
                    <span className="chat-bubble__name">Student Aasha</span>
                    <p>Class 12 Science Faculty Notes.</p>
                  </div>
                </div>
              </div>

              <button type="button" className="home-phone__cta">
                Continue Chat
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FUN WAY OF LEARNING (6 CARDS) */}
      <section className="container home-fun">
        <h2 className="home-section-title">Fun way of learning!</h2>
        <div className="home-fun__grid">
          {features.map((f) => (
            <article key={f.title} className="home-fun__card">
              <div className={`home-fun__icon-wrap home-fun__icon-wrap--${f.tint}`}>
                <img
                  src={img[f.art] || img[f.fallback] || img['feat-video']}
                  alt={f.title}
                />
              </div>
              <div className="home-fun__content">
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 3. SOLID PURPLE COUNTER STATS BANNER */}
      <section className="container home-counter-banner">
        <div className="home-counter-banner__inner">
          {counterStats.map((st) => {
            const Icon = st.icon;
            return (
              <div key={st.label} className="home-counter-item">
                <div className="home-counter-item__icon">
                  <Icon size={28} />
                </div>
                <div className="home-counter-item__data">
                  <strong>{st.num}</strong>
                  <span>{st.label}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. MOST LOVED EDUCATIONAL PLATFORM */}
      <section className="container home-loved-section">
        <h2 className="home-section-title">Most Loved Educational Platform</h2>
        <div className="home-loved-pill">
          {lovedStats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="home-loved-item">
                <div className={`home-loved-item__icon home-loved-item__icon--${idx}`}>
                  <Icon size={24} />
                </div>
                <strong>{item.num}</strong>
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. WHY NEXU GURU ? */}
      <section className="container home-why-section">
        <div className="home-why-card">
          <div className="home-why-card__left">
            <h2>Why Nexu Guru ?</h2>
            <ul className="home-why-list">
              {whyChecklist.map((item) => (
                <li key={item}>
                  <span className="home-why-check">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="home-why-card__right">
            <div className="home-why-photo-wrap">
              <img
                src={img['why-students'] || img['team-1']}
                alt="Nexu Guru Students"
                className="home-why-photo"
              />
              <div className="home-why-play-btn" aria-hidden="true">
                <Play size={22} fill="#fff" />
              </div>
              <div className="home-why-overlay">
                <div className="home-why-overlay__text">
                  <strong>Progressive<br />Learning Journey</strong>
                  <p>Enriching students through continuous improvement.</p>
                </div>
                <Link to="/class-12" className="home-why-start-btn">
                  Start Learning &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. OUR BLOGS & NEWS */}
      <section className="container home-blogs-section">
        <div className="home-section-header">
          <div>
            <h2>Our Blogs &amp; News</h2>
            <p>Comprehensive Notes for School and College Students</p>
          </div>
          <Link to="/blogs" className="home-pill-outline-btn">
            Explore All Blogs
          </Link>
        </div>

        <div className="home-blogs-grid">
          {blogPosts.map((post) => (
            <article key={post.title} className="home-blog-card">
              <div className="home-blog-card__image-wrap">
                <img
                  src={img[post.image] || img[post.fallback] || img['blog-1']}
                  alt={post.title}
                />
              </div>
              <div className="home-blog-card__body">
                <div className="home-blog-card__meta">
                  <span className="home-blog-card__tag">{post.category}</span>
                  <span className="home-blog-card__date">{post.date}</span>
                </div>
                <h3 className="home-blog-card__title">{post.title}</h3>
                <p className="home-blog-card__text">{post.text}</p>
                <Link to={post.link} className="home-blog-card__link">
                  Read More &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 7. DISCOVER OUR BRANDS */}
      <section className="container home-brands-section">
        <div className="home-center-header">
          <h2>Discover Our Brands</h2>
          <p>A Showcase of Quality and Innovation</p>
        </div>

        <div className="home-brands-slider-wrap">
          <button type="button" className="home-slider-arrow" onClick={prevBrand} aria-label="Previous brand">
            <ChevronLeft size={20} />
          </button>
          <div className="home-brands-track">
            {brandsList.map((brand) => (
              <div key={brand.id} className="home-brand-card">
                <div className="home-brand-card__icon">
                  {brand.iconType === 'g' && (
                    <img src={img['logo1'] || img['logo']} alt="" style={{ height: 26, width: 'auto' }} />
                  )}
                  {brand.iconType === 'award' && <Award size={26} color="#e5a93b" />}
                  {brand.iconType === 'atom' && <Atom size={26} color="#6524d6" />}
                  {brand.iconType === 'mountain' && <Mountain size={26} color="#462bb8" />}
                  {brand.iconType === 'store' && <ShoppingBag size={26} color="#27106d" />}
                  {brand.iconType === 'coco' && <Smile size={26} color="#6a2ed6" />}
                </div>
                <div className="home-brand-card__text">
                  <strong>{brand.name}</strong>
                  <span>{brand.sub}</span>
                </div>
              </div>
            ))}
          </div>
          <button type="button" className="home-slider-arrow" onClick={nextBrand} aria-label="Next brand">
            <ChevronRight size={20} />
          </button>
        </div>
      </section>

      {/* 8. KNOW ABOUT NEXU GURU */}
      <section className="container home-about-section">
        <div className="home-about-card">
          <div className="home-about-col">
            <h2 className="home-about-heading">Know about Nexu Guru</h2>
            <p className="home-about-p">
              Nexu Guru is a Nepal's top online ed-tech platform that provides students with comprehensive learning experiences to make their education 10x more preparatory for SEE and +2 Exams.
            </p>

            <h3 className="home-about-heading">We Stand Out because</h3>
            <p className="home-about-p">
              We account holistic private students with immersive online experience by the students and personal mentors. Nexu Guru is ensure with learning experience comprehensively and accessible for students of all stages of schooling. We believe in empowering every student's success with attention and a good career in engineering and medical field earlier.
            </p>
          </div>

          <div className="home-about-col">
            <h2 className="home-about-heading">What Makes Us Different</h2>
            <p className="home-about-p">
              Nexu platform services designed to comprehensively learning to enhance our students, where they get all what they get in learning experience with study materials, smart classroom, AI doubt support, exam preparation, regular Test, MCQs and more. Here we supervise every mentor.
            </p>

            <h3 className="home-about-heading">Our Key Focus Areas</h3>
            <p className="home-about-p">
              Nexu focuses main focus is to make the learning experience as everywhere can access to for all students, anywhere in world a period of a platform for all kinds of aspirants.
            </p>
          </div>

          <div className="home-about-portrait">
            <img
              src={img['about-student'] || img['avatar-lg']}
              alt="Nexu Guru student"
            />
          </div>
        </div>
      </section>

      {/* 9. STUDENTS LOVES ❤️ NEXU GURU */}
      <section className="container home-reviews-section">
        <div className="home-section-header">
          <div>
            <h2 className="home-reviews-title">
              Students Loves <Heart size={18} fill="#e12558" color="#e12558" className="heart-icon" /> Nexu Guru
            </h2>
            <p>Comprehensive Notes for School and College Students</p>
          </div>
          <Link to="/about" className="home-pill-outline-btn">
            Explore All Reviews
          </Link>
        </div>

        <div className="home-reviews-slider-wrap">
          <button type="button" className="home-slider-arrow" onClick={prevReview} aria-label="Previous review">
            <ChevronLeft size={20} />
          </button>
          <div className="home-reviews-track">
            {studentReviews.map((rv) => (
              <article key={rv.id} className="home-review-card">
                <div className="home-review-card__stars">
                  {'★'.repeat(rv.stars)}
                </div>
                <p className="home-review-card__text">{rv.text}</p>
                <span className="home-review-card__author">
                  — {rv.author}, {rv.grade}
                </span>
              </article>
            ))}
          </div>
          <button type="button" className="home-slider-arrow" onClick={nextReview} aria-label="Next review">
            <ChevronRight size={20} />
          </button>
        </div>
      </section>
    </SitePage>
  );
}
