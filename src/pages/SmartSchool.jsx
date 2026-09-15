import { useRef, useState } from 'react';
import {
  ArrowRight, BadgeCheck, BookOpenCheck, Building2, CalendarCheck, ChartColumnBig, ChevronDown, ChevronLeft,
  ChevronRight, ChevronUp, CircleCheck, ClipboardCheck, Clock3, Download, GraduationCap, Mail, MapPin,
  MonitorPlay, Phone, School, Smartphone, UserRound, UsersRound,
} from 'lucide-react';
import SitePage from '../components/layout/SitePage.jsx';
import Button from '../components/ui/Button.jsx';
import Breadcrumb from '../components/ui/Breadcrumb.jsx';
import { toast } from '../components/ui/Toast.jsx';
import img from '../lib/assets.js';

const stats = [
  [School, '120+', 'Schools'],
  [UsersRound, '3,500+', 'Teachers'],
  [GraduationCap, '85,000+', 'Students'],
  [MapPin, '12', 'Districts'],
];

const features = [
  [MonitorPlay, 'Digital Classroom', 'Run live classes, share slides and record lessons your students can rewatch anytime.'],
  [BookOpenCheck, 'Ready Study Materials', 'Give your teachers instant access to Nexu Guru notes, videos and question banks.'],
  [ClipboardCheck, 'Online Tests & MCQ', 'Create tests in minutes, auto-grade them and publish results the same day.'],
  [CalendarCheck, 'Attendance & Timetable', 'Digital attendance, class routines and substitute management in one place.'],
  [ChartColumnBig, 'Progress Reports', 'Subject-wise performance tracking with printable report cards for every student.'],
  [Smartphone, 'Parent App', 'Keep parents updated with attendance, results, fees and school notices.'],
];

const roles = [
  { id: 'teachers', icon: UserRound, label: 'For Teachers', items: ['Create classes and assign homework', 'Set tests and auto-grade them', 'Track student progress subject-wise', 'Reuse ready-made Nexu Guru content'] },
  { id: 'students', icon: GraduationCap, label: 'For Students', items: ['Join live classes from any device', 'Read notes and watch lessons again', 'Take tests and see results instantly', 'Ask doubts and get expert answers'] },
  { id: 'parents', icon: UsersRound, label: 'For Parents', items: ['Attendance alerts on mobile', 'Exam results as soon as published', 'Fee reminders and receipts', 'School notices and announcements'] },
  { id: 'admin', icon: Building2, label: 'For Administration', items: ['Student and teacher records', 'Teacher and class management', 'Fee tracking and collection reports', 'School-wide performance reports'] },
];

const previews = [
  ['Dashboard', 'ss-dashboard'],
  ['Live Class', 'ss-live-class'],
  ['Reports', 'ss-reports'],
];

const steps = [
  ['Book a Demo', 'We show you the platform and answer your questions.'],
  ['Setup Your School', 'We add your classes, teachers and students for you.'],
  ['Train Your Teachers', 'Free onboarding session so everyone starts confidently.'],
  ['Go Live', 'Your school is running digitally, with support whenever you need it.'],
];

const plans = [
  { name: 'Starter', price: 'Rs. 300', per: '/ student / year', cap: 'Up to 300 students', cta: 'Get Started', features: ['Digital classroom', 'Study materials', 'Online tests', 'Email support'] },
  { name: 'Standard', price: 'Rs. 500', per: '/ student / year', cap: 'Up to 1000 students', cta: 'Get Started', popular: true, features: ['Everything in Starter', 'Attendance & timetable', 'Progress reports', 'Parent app', 'Priority support'] },
  { name: 'Custom', price: 'Let’s talk', per: '', cap: 'Unlimited students', cta: 'Contact Sales', features: ['Everything in Standard', 'Custom branding', 'Dedicated account manager', 'On-site training', 'API access'] },
];

const schools = ['Shree Janata Sec. School', 'Himalaya Model School', 'Everest Academy', 'Bhanu Higher Sec. School', 'Sunrise Boarding School', 'Kailash Vidya Mandir', 'Nava Jyoti Academy', 'Siddhartha English School'];

const testimonials = [
  ['Our teachers were running online classes within a week. The training made all the difference.', 'Ramesh Adhikari', 'Principal, Shree Janata Secondary School, Dhangadhi'],
  ['Parents finally get results and attendance on their phone. The complaints have stopped.', 'Sarita Bhandari', 'Vice Principal, Himalaya Model School, Butwal'],
  ['We saved weeks of work on exams alone. Tests are created and graded automatically now.', 'Deepak Thapa', 'Academic Head, Everest Academy, Kathmandu'],
];

const faqs = [
  ['How long does setup take?', 'Most schools are fully set up within 5 to 7 working days. We import your class list, teachers and students for you, so your team does not have to enter data manually.'],
  ['Do our teachers need technical training?', 'No prior experience is needed. Every school gets a free onboarding session, and we stay available for follow-up questions during the first term.'],
  ['Can we use it if our internet is slow?', 'Yes. Notes and recorded lessons can be downloaded for offline use, and the live class quality adjusts automatically to the available bandwidth.'],
  ['Is Nexu Guru study material included?', 'Yes. Every Smart School plan includes our complete library of notes, videos and question banks for Class 10, 11 and 12, at no extra cost.'],
  ['Can parents access it on mobile?', 'Parents get a free app for Android and iOS showing attendance, results, fees and school notices for each of their children.'],
  ['How is payment handled?', 'Schools are billed once a year per enrolled student. You can pay by bank transfer, cheque or digital wallet, and we issue a VAT invoice for your records.'],
];

const districts = ['Kailali', 'Kanchanpur', 'Kathmandu', 'Lalitpur', 'Bhaktapur', 'Rupandehi', 'Kaski', 'Chitwan', 'Morang', 'Sunsari', 'Banke', 'Dang', 'Other'];

const EMPTY = { school: '', name: '', role: '', email: '', phone: '', district: '', size: '', date: '', message: '' };

export default function SmartSchool() {
  const [role, setRole] = useState('teachers');
  const [preview, setPreview] = useState(0);
  const [faq, setFaq] = useState(0);
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const formRef = useRef(null);
  const logoRef = useRef(null);

  const set = (k) => (e) => { setForm((f) => ({ ...f, [k]: e.target.value })); setErrors((x) => ({ ...x, [k]: undefined })); };
  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const slideLogos = (dir) => logoRef.current?.scrollBy({ left: dir * 320, behavior: 'smooth' });

  const submit = (e) => {
    e.preventDefault();
    const next = {};
    if (!form.school.trim()) next.school = 'Enter your school name.';
    if (!form.name.trim()) next.name = 'Enter your name.';
    if (!form.role) next.role = 'Select your designation.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email address.';
    if (!/^\d{10}$/.test(form.phone.replace(/\s/g, ''))) next.phone = 'Enter a 10-digit phone number.';
    if (!form.district) next.district = 'Select your district.';
    if (!form.size) next.size = 'Select the number of students.';
    setErrors(next);
    if (Object.keys(next).length) return;
    setSent(true);
    toast('Demo request sent — our team will contact you soon.');
  };

  const roleData = roles.find((r) => r.id === role);

  return (
    <SitePage header={{ active: 'Smart School', showNews: true }} footer={{ enotes: true, bullet: 'chevron' }} className="ss-page">
      {/* Hero */}
      <section className="ss-hero">
        <div className="container ss-hero__inner">
          <div className="ss-hero__copy">
            <span className="ss-chip">For Schools &amp; Colleges</span>
            <h1>Smart School<br /><span>by Nexu Guru</span></h1>
            <p>Bring your entire school online. Digital classrooms, ready-made study materials, online tests, attendance and parent updates — all in one simple platform built for schools in Nepal.</p>
            <div className="ss-hero__btns">
              <Button variant="yellow" size="lg" onClick={scrollToForm}>Book a Free Demo</Button>
              <Button variant="outline" size="lg" icon={Download} className="ss-hero__ghost" onClick={() => toast('Brochure download starting…')}>Download Brochure</Button>
            </div>
            <p className="ss-hero__trust"><BadgeCheck /> Trusted by 120+ schools across Nepal</p>
            <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Smart School' }]} className="page-hero__crumbs" />
          </div>
          <img className="ss-hero__art" src={img['ss-hero'] ?? img['class12-hero']} alt="" />
        </div>
      </section>

      <div className="container">
        {/* Trust strip */}
        <div className="ss-stats">
          {stats.map(([I, n, l]) => <div key={l}><I /><strong>{n}</strong><small>{l}</small></div>)}
        </div>

        {/* Features */}
        <h2 className="section-title sec-gap">Everything Your School Needs</h2>
        <p className="ss-sub">One platform for teachers, students, parents and administration.</p>
        <div className="ss-features">
          {features.map(([I, t, d]) => (
            <article key={t} className="ss-feature">
              <span className="icircle" style={{ width: 54, height: 54 }}><I /></span>
              <h3>{t}</h3><p>{d}</p>
            </article>
          ))}
        </div>

        {/* Roles */}
        <h2 className="section-title sec-gap">Built for Everyone in Your School</h2>
        <div className="ss-roles">
          <div className="ss-roles__tabs" role="tablist">
            {roles.map((r) => {
              const I = r.icon;
              return (
                <button key={r.id} type="button" role="tab" aria-selected={role === r.id} className={role === r.id ? 'is-active' : ''} onClick={() => setRole(r.id)}>
                  <I />{r.label}
                </button>
              );
            })}
          </div>
          <div className="ss-roles__panel">
            <div>
              <h3>{roleData.label}</h3>
              <ul>{roleData.items.map((t) => <li key={t}><CircleCheck />{t}</li>)}</ul>
            </div>
            <img src={img[`ss-role-${role}`] ?? img['feat-test']} alt="" />
          </div>
        </div>

        {/* Dashboard preview */}
        <section className="ss-preview sec-gap">
          <div className="ss-preview__copy">
            <h2>See It in Action</h2>
            <p>A clean, simple interface your teachers will understand on day one — no long manuals, no complicated setup.</p>
            <Button variant="purple" pill iconRight={ArrowRight} onClick={scrollToForm}>Book a Free Demo</Button>
          </div>
          <div className="ss-preview__media">
            <div className="ss-browser">
              <span className="ss-browser__bar"><i /><i /><i /></span>
              <img src={img[previews[preview][1]] ?? img['feat-video']} alt={previews[preview][0]} />
            </div>
            <div className="ss-thumbs">
              {previews.map(([label, key], i) => (
                <button key={label} type="button" className={i === preview ? 'is-active' : ''} onClick={() => setPreview(i)}>
                  <img src={img[key] ?? img['feat-video']} alt="" /><span>{label}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <h2 className="section-title sec-gap">How It Works</h2>
        <div className="ss-steps">
          {steps.map(([t, d], i) => (
            <div key={t} className="ss-step"><span className="ss-step__num">{i + 1}</span><strong>{t}</strong><p>{d}</p></div>
          ))}
        </div>

        {/* Pricing */}
        <h2 className="section-title sec-gap">Simple Pricing for Every School</h2>
        <p className="ss-sub">Pay per student, per year. No hidden charges.</p>
        <div className="ss-plans">
          {plans.map((p) => (
            <article key={p.name} className={`ss-plan ${p.popular ? 'is-popular' : ''}`}>
              {p.popular && <span className="plan__flag">Most Popular</span>}
              <h3>{p.name}</h3>
              <p className="ss-plan__price">{p.price}<em>{p.per}</em></p>
              <p className="ss-plan__cap">{p.cap}</p>
              <ul>{p.features.map((f) => <li key={f}><CircleCheck />{f}</li>)}</ul>
              <Button variant={p.popular ? 'purple' : 'purple-outline'} block onClick={scrollToForm}>{p.cta}</Button>
            </article>
          ))}
        </div>
        <p className="ss-plans__note">All plans include free setup and teacher training.</p>
        <p className="ss-plans__vat">Prices exclude VAT.</p>

        {/* Schools */}
        <h2 className="section-title sec-gap">Schools That Trust Us</h2>
        <div className="ss-logos">
          <button type="button" className="rv-arrow" onClick={() => slideLogos(-1)} aria-label="Previous"><ChevronLeft /></button>
          <div className="ss-logos__track" ref={logoRef}>
            {schools.map((s) => <div key={s} className="ss-logo"><School /><span>{s}</span></div>)}
          </div>
          <button type="button" className="rv-arrow" onClick={() => slideLogos(1)} aria-label="Next"><ChevronRight /></button>
        </div>

        {/* Testimonials */}
        <div className="ss-quotes sec-gap">
          {testimonials.map(([q, n, r]) => (
            <article key={n} className="review-card">
              <p>“{q}”</p>
              <div className="review-card__by"><span className="review-card__av">{n[0]}</span><div><strong>{n}</strong><small>{r}</small></div></div>
            </article>
          ))}
        </div>

        {/* FAQ */}
        <h2 className="section-title sec-gap">Frequently Asked Questions</h2>
        <div className="faq-acc ss-faq">
          {faqs.map(([q, a], i) => {
            const open = faq === i;
            return (
              <div key={q} className={`faq-item ${open ? 'is-open' : ''}`}>
                <button type="button" aria-expanded={open} onClick={() => setFaq(open ? null : i)}><span>{q}</span>{open ? <ChevronUp /> : <ChevronDown />}</button>
                {open && <p>{a}</p>}
              </div>
            );
          })}
        </div>
      </div>

      {/* Demo form */}
      <section className="ss-demo" ref={formRef} id="demo">
        <div className="container ss-demo__inner">
          <div className="ss-demo__copy">
            <h2>Book a Free Demo</h2>
            <p>Tell us about your school and our team will contact you within 24 hours to schedule a walkthrough.</p>
            <ul>
              <li><Phone /> +977 9762770136</li>
              <li><Mail /> contact@nexuguru.com</li>
              <li><Clock3 /> Mon–Fri, 9am–6pm</li>
            </ul>
          </div>
          <div className="ss-demo__card">
            {sent ? (
              <div className="ss-done">
                <span><CircleCheck /></span>
                <h3>Thank you!</h3>
                <p>Our team will contact you within 24 hours to schedule your demo.</p>
                <Button variant="purple-outline" to="/">Back to Home</Button>
              </div>
            ) : (
              <form onSubmit={submit} noValidate>
                <div className="ss-form">
                  <label className="field"><span className="field__label">School Name <span className="req">*</span></span>
                    <div className="input"><School /><input value={form.school} onChange={set('school')} placeholder="Enter your school name" /></div>
                    {errors.school && <em className="ss-err">{errors.school}</em>}</label>
                  <label className="field"><span className="field__label">Your Name <span className="req">*</span></span>
                    <div className="input"><UserRound /><input value={form.name} onChange={set('name')} placeholder="Enter your full name" /></div>
                    {errors.name && <em className="ss-err">{errors.name}</em>}</label>
                  <label className="field"><span className="field__label">Designation <span className="req">*</span></span>
                    <div className="input"><select value={form.role} onChange={set('role')}><option value="">Select designation</option>{['Principal', 'Vice Principal', 'Academic Head', 'Administrator', 'Teacher', 'Other'].map((o) => <option key={o}>{o}</option>)}</select></div>
                    {errors.role && <em className="ss-err">{errors.role}</em>}</label>
                  <label className="field"><span className="field__label">Email <span className="req">*</span></span>
                    <div className="input"><Mail /><input type="email" value={form.email} onChange={set('email')} placeholder="school@example.com" /></div>
                    {errors.email && <em className="ss-err">{errors.email}</em>}</label>
                  <label className="field"><span className="field__label">Phone <span className="req">*</span></span>
                    <div className="input"><Phone /><span className="prefix">+977</span><input value={form.phone} onChange={set('phone')} placeholder="98XXXXXXXX" /></div>
                    {errors.phone && <em className="ss-err">{errors.phone}</em>}</label>
                  <label className="field"><span className="field__label">District <span className="req">*</span></span>
                    <div className="input"><select value={form.district} onChange={set('district')}><option value="">Select district</option>{districts.map((d) => <option key={d}>{d}</option>)}</select></div>
                    {errors.district && <em className="ss-err">{errors.district}</em>}</label>
                  <label className="field"><span className="field__label">Number of Students <span className="req">*</span></span>
                    <div className="input"><select value={form.size} onChange={set('size')}><option value="">Select range</option>{['Under 300', '300–1000', '1000–3000', 'Over 3000'].map((o) => <option key={o}>{o}</option>)}</select></div>
                    {errors.size && <em className="ss-err">{errors.size}</em>}</label>
                  <label className="field"><span className="field__label">Preferred Demo Date</span>
                    <div className="input"><input type="date" value={form.date} onChange={set('date')} /></div></label>
                  <label className="field field--full"><span className="field__label">Message <em>(Optional)</em></span>
                    <div className="input input--area"><textarea rows={3} value={form.message} onChange={set('message')} placeholder="Anything you would like us to know before the demo?" /></div></label>
                </div>
                <Button variant="purple" block size="lg" type="submit" iconRight={ArrowRight} className="ss-submit">Request Demo</Button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <div className="container">
        <div className="cta-band ss-cta">
          <div>
            <h3>Ready to Take Your School Digital?</h3>
            <p>Join 120+ schools already teaching, testing and reporting on Smart School.</p>
          </div>
          <div className="ss-cta__btns">
            <Button variant="yellow" pill size="lg" onClick={scrollToForm}>Book a Free Demo</Button>
            <Button variant="outline" pill size="lg" to="/report-issue" className="ss-hero__ghost">Talk to Sales</Button>
          </div>
        </div>
      </div>
    </SitePage>
  );
}
