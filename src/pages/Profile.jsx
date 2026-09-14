import { useEffect, useState } from 'react';
import { ArrowRight, Award, Bell, BookMarked, BookOpen, CalendarDays, ChartNoAxesCombined, CircleHelp, ClipboardList, Clock3, Crown, Download, Flame, GraduationCap, House, LayoutDashboard, LogOut, Mail, MapPin, Menu, Moon, Pencil, Phone, PlayCircle, Radio, Search, Settings, Sun, Trophy, UserRound, ChevronDown } from 'lucide-react';
import Logo from '../components/ui/Logo.jsx';
import Button from '../components/ui/Button.jsx';
import Progress from '../components/ui/Progress.jsx';
import StudyFooter from '../components/layout/StudyFooter.jsx';
import { toast } from '../components/ui/Toast.jsx';
import { Link, navigate } from '../lib/router.jsx';
import img from '../lib/assets.js';

const nav = [
  [LayoutDashboard, 'Dashboard', '/profile'], [BookOpen, 'My Classes', '/class-12'], [ClipboardList, 'Notes', '/notes'], [CircleHelp, 'Important Q&A', '/important-questions'],
  [Trophy, 'MCQ & Tests', '/live-mcq'], [BookMarked, 'Sticky Notes', '/sticky-notes'], [BookMarked, 'Past Questions', '/important-questions'], [ClipboardList, 'Tests', '/live-mcq'],
  [Download, 'Downloads', '/notes'], [BookMarked, 'Bookmarks', '/sticky-notes'], [ChartNoAxesCombined, 'My Progress', '/profile'], [Award, 'Payment & Plan', '/chapter-locked'],
  [Award, 'Refer & Earn', '/profile'], [CircleHelp, 'Help Center', '/faq'], [UserRound, 'My Profile', '/profile'], [Settings, 'Settings', '/profile'],
];
const personal = [['Full Name', 'Arjun Sharma'], ['Date of Birth', '12 May 2006'], ['Gender', 'Male'], ['Address', 'Koteshwor, Kathmandu, Nepal'], ['Email Address', 'arjun.sharma@nexuguru.com'], ['Phone Number', '+977 984-1234567'], ['Guardian Name', 'Ramesh Sharma'], ['Guardian Phone', '+977 981-654321']];
const academic = [['Roll Number', '1202078'], ['Class', '12'], ['Stream', 'Science'], ['Section', 'B'], ['School / College', 'Nexu Higher Secondary School'], ['Board', 'NEB'], ['Session', '2081/2082'], ['Admission No.', 'NHS/2081/0456']];
const badges = [['badge-1', 'First Test'], ['badge-2', 'Note Master'], ['badge-3', 'MCQ Champ'], ['badge-4', 'Study Streak 7'], ['badge-5', 'Top Performer']];
const stats = [[BookOpen, '28', 'Chapters Studied', 'indigo'], [ClipboardList, '15', 'Tests Attempted', 'green'], [Trophy, '78%', 'Avg. Score', 'amber'], [Clock3, '48h', 'Study Time', 'red']];

export default function Profile() {
  const [collapsed, setCollapsed] = useState(false);
  const [dark, setDark] = useState(false);
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className={`app ${collapsed ? 'is-collapsed' : ''} ${dark ? 'is-dark' : ''}`}>
      <aside className="app-side">
        <div className="app-side__logo"><Logo variant="g" /></div>
        <nav>{nav.map(([I, l, to]) => <Link key={l} to={to} className={`app-side__item ${l === 'My Profile' ? 'is-active' : ''}`}><I />{!collapsed && <span>{l}</span>}</Link>)}</nav>
        {!collapsed && <section className="app-side__upgrade"><Crown /><strong>Upgrade to Pro</strong><p>Unlock all chapters, notes, videos, tests and more.</p><Button variant="purple" block iconRight={ArrowRight} to="/chapter-locked">Upgrade Now</Button></section>}
        <button type="button" className="app-side__item app-side__logout" onClick={() => navigate('/login')}><LogOut />{!collapsed && <span>Logout</span>}</button>
      </aside>
      <div className="app-main">
        <header className="app-top">
          <button type="button" className="app-top__menu" onClick={() => setCollapsed(!collapsed)} aria-label="Toggle sidebar"><Menu /></button>
          <label className="app-top__search"><Search /><input placeholder="Search notes, videos, MCQs..." /></label>
          <Button variant="yellow" size="sm" icon={Crown} to="/chapter-locked" className="app-top__pro">Go Pro</Button>
          <button type="button" className="app-top__icon" aria-label="Notifications" onClick={() => toast('3 new notifications')}><Bell /><em>3</em></button>
          <button type="button" className="app-top__icon" aria-label="Dark mode" onClick={() => setDark(!dark)}>{dark ? <Sun /> : <Moon />}</button>
          <div className="app-top__user"><img src={img['avatar-sm']} alt="" /><span><strong>Arjun Sharma</strong><small>Class 12 · Science</small></span><ChevronDown /></div>
        </header>
        <div className="app-crumb"><House /> <Link to="/">Home</Link> <span>/</span> <b>My Profile</b></div>
        <div className="app-head"><h1>My Profile</h1><p>Manage your personal information and account details.</p></div>
        <div className="app-content">
          <div className="app-col">
            <section className="pf-card">
              <img className="pf-card__deco" src={img['profile-deco']} alt="" />
              <img className="pf-card__avatar" src={img['avatar-lg']} alt="" />
              <div className="pf-card__info">
                <h1>Arjun Sharma <span className="badge badge--purple">Student</span><span className="badge badge--green">Active</span></h1>
                <p className="pf-card__role"><GraduationCap /> Class 12 · Science</p>
                <ul><li><GraduationCap /> Class 12 - Science</li><li><MapPin /> Nexu Higher Secondary School, Kathmandu</li><li><Mail /> arjun.sharma@nexuguru.com</li><li><Phone /> +977 984-1234567</li><li><CalendarDays /> Joined on 15 Jan 2024</li></ul>
              </div>
              <Button variant="outline" size="sm" icon={Pencil} className="pf-card__edit" onClick={() => toast('Profile editing – available in the full app')}>Edit Profile</Button>
            </section>
            <div className="pf-two">
              <section className="pf-box"><h2><UserRound /> Personal Information</h2><dl>{personal.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl></section>
              <section className="pf-box"><h2><GraduationCap /> Academic Information</h2><dl>{academic.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl></section>
            </div>
            <section className="pf-box">
              <h2><Award /> Achievements &amp; Badges <a href="#" onClick={(e) => e.preventDefault()}>View All</a></h2>
              <div className="pf-badges">{badges.map(([b, l]) => <div key={l}><img src={img[b]} alt="" /><span>{l}</span></div>)}</div>
            </section>
          </div>
          <div className="app-col app-col--side">
            <section className="pf-box pf-id">
              <h2>Student ID &amp; QR</h2>
              <img src={img.qr} alt="Student QR code" />
              <p>Student ID: <b>NXU1202078</b></p>
              <div className="pf-id__btns"><Button variant="outline" size="sm" icon={Download} onClick={() => toast('Downloading ID card…')}>Download ID Card</Button></div>
            </section>
            <section className="pf-box pf-plan">
              <h2>Subscription Plan</h2>
              <div className="pf-plan__row"><Crown /><div><strong>Nexu Guru Pro</strong><small>Valid till 15 May 2025</small></div><span className="badge badge--green">Active</span></div>
              <Button block to="/chapter-locked">Manage Subscription <ArrowRight /></Button>
            </section>
            <section className="pf-box">
              <h2>Learning Statistics</h2>
              <div className="pf-stats">{stats.map(([I, v, l, c]) => <div key={l} className={`pf-stat pf-stat--${c}`}><I /><strong>{v}</strong><small>{l}</small></div>)}</div>
            </section>
          </div>
        </div>
        <StudyFooter links={[['Help Center', '/faq'], ['Privacy Policy', '/privacy-policy'], ['Terms & Conditions', '/terms']]} />
      </div>
    </div>
  );
}
