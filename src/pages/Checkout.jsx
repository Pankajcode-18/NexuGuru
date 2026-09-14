import { useState } from 'react';
import { BookOpenCheck, CalendarDays, CircleCheck, ClipboardCheck, Headset, Languages, LockKeyhole, Mail, MonitorPlay, Phone, ShieldCheck, Tag, UserRound, UsersRound, Video, Landmark } from 'lucide-react';
import SitePage from '../components/layout/SitePage.jsx';
import Breadcrumb from '../components/ui/Breadcrumb.jsx';
import Button from '../components/ui/Button.jsx';
import { toast } from '../components/ui/Toast.jsx';
import img from '../lib/assets.js';

const methods = [
  ['esewa', 'pay-esewa', 'eSewa', 'Pay with eSewa wallet'],
  ['khalti', 'pay-khalti', 'Khalti', 'Pay with Khalti wallet'],
  ['card', 'pay-card', 'Debit / Credit Card', 'Visa, Mastercard accepted'],
  ['ime', 'pay-ime', 'IME Pay', 'Pay with IME Pay wallet'],
];
const catalog = { ioe: { title: 'IOE Full Course 2027', price: 7000, sale: 4999, image: 'course-ioe', shortImage: 'course-ioe-sm', audience: 'For IOE Entrance Aspirants' }, cee: { title: 'CEE Full Course 2027', price: 6500, sale: 4499, image: 'team-2', shortImage: 'team-2', audience: 'For CEE (Medical) Aspirants' }, loksewa: { title: 'Loksewa Full Course 2027', price: 6000, sale: 3999, image: 'team-3', shortImage: 'team-3', audience: 'For Loksewa Aspirants' }, banking: { title: 'Banking Full Course 2027', price: 6000, sale: 3499, image: 'team-4', shortImage: 'team-4', audience: 'For Banking Job Aspirants' } };
const fmt = (n) => `NPR ${n.toLocaleString('en-IN')}`;

export default function Checkout() {
  const selected = catalog[new URLSearchParams(window.location.hash.split('?')[1] || '').get('course')] || catalog.ioe;
  const [tab, setTab] = useState('online');
  const [method, setMethod] = useState('esewa');
  const [code, setCode] = useState('');
  const [coupon, setCoupon] = useState(null);
  const [acct, setAcct] = useState({ name: 'Aarav Sharma', email: 'aarav.sharma@gmail.com', phone: '98XXXXXXXX' });
  const couponOff = coupon ? Math.round(selected.sale * 0.1) : 0;
  const total = selected.sale - couponOff;
  const apply = () => { if (code.trim().toUpperCase() === 'NEXU10') { setCoupon('NEXU10'); toast('Coupon applied – 10% off'); } else { setCoupon(null); toast('Invalid coupon code (try NEXU10)'); } };
  const pay = () => { if (!acct.name || !acct.email.includes('@')) return toast('Please complete your account information'); toast(`Redirecting to ${tab === 'online' ? methods.find((m) => m[0] === method)[2] : 'bank transfer'}…`); };

  return (
    <SitePage header={{ showNews: true }} footer={{ enotes: true, appleFirst: true, bullet: 'chevron' }} className="checkout-page">
      <div className="checkout-top">
        <div className="container">
          <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Entrance Preparation', to: '/entrance' }, { label: selected.title, to: '/entrance' }, { label: 'Checkout' }]} />
          <div className="checkout-title">
            <div><h1>Complete Your Purchase</h1><p>You’re just one step away from starting your preparation journey.</p></div>
            <span className="secure-badge"><ShieldCheck /> 100% Secure Checkout</span>
          </div>
        </div>
      </div>
      <div className="container checkout-grid">
        <div className="checkout-main">
          <section className="co-card">
            <h2>Course Details</h2>
            <div className="co-course">
              <img src={img['course-ioe']} alt="" />
              <div>
                <span className="badge badge--purple">POPULAR</span>
                <h3>{selected.title}</h3>
                <ul>
                  <li><Languages /> Nepali | English</li>
                  <li><UsersRound /> {selected.audience}</li>
                  <li><CalendarDays /> Starts on 1 May, 2026 – Ends on 31 Dec, 2026</li>
                  <li><MonitorPlay /> Live & Recorded Classes, Mock Tests, Study Materials</li>
                </ul>
              </div>
            </div>
          </section>
          <section className="co-card">
            <h2>Account Information</h2>
            <div className="co-fields">
              <label className="field"><span className="field__label">Full Name</span><div className="input"><UserRound /><input value={acct.name} onChange={(e) => setAcct({ ...acct, name: e.target.value })} /></div></label>
              <label className="field"><span className="field__label">Email Address</span><div className="input"><Mail /><input value={acct.email} onChange={(e) => setAcct({ ...acct, email: e.target.value })} /></div></label>
              <label className="field"><span className="field__label">Phone Number</span><div className="input"><Phone /><input value={acct.phone} onChange={(e) => setAcct({ ...acct, phone: e.target.value })} /></div></label>
            </div>
          </section>
          <section className="co-card">
            <h2>2. Select Payment Method</h2>
            <div className="co-tabs">
              <button type="button" className={tab === 'online' ? 'is-active' : ''} onClick={() => setTab('online')}>Online Payment</button>
              <button type="button" className={tab === 'bank' ? 'is-active' : ''} onClick={() => setTab('bank')}>Bank Transfer</button>
            </div>
            {tab === 'online' ? (
              <div className="pay-list" role="radiogroup">
                {methods.map(([id, logo, name, desc]) => (
                  <button key={id} type="button" role="radio" aria-checked={method === id} className={`pay-opt ${method === id ? 'is-on' : ''}`} onClick={() => setMethod(id)}>
                    <i className="pay-opt__radio" /><img src={img[logo]} alt="" /><span><strong>{name}</strong><small>{desc}</small></span><em className="badge badge--green">Instant</em>
                  </button>
                ))}
              </div>
            ) : (
              <div className="bank-box"><Landmark /><div><strong>Nexu Education Pvt. Ltd.</strong><p>Bank details and a reference code will be sent to your email after you confirm the order.</p></div></div>
            )}
            <p className="co-secure"><LockKeyhole /> Your payment information is encrypted and secure.</p>
            <h2 className="co-sub">3. Apply Coupon <em>(Optional)</em></h2>
            <div className="coupon">
              <div className="input"><Tag /><input value={code} onChange={(e) => setCode(e.target.value)} placeholder="Enter coupon code" /></div>
              <Button variant="purple-outline" onClick={apply}>Apply</Button>
            </div>
            {coupon && <p className="coupon-ok"><CircleCheck /> Coupon {coupon} applied. You save {fmt(couponOff)}.</p>}
          </section>
        </div>

        <aside className="checkout-side">
          <section className="co-card summary">
            <h2>Order Summary</h2>
            <div className="summary__item"><img src={img[selected.shortImage]} alt="" /><div><strong>{selected.title}</strong><small>Nepali | English</small></div></div>
            <dl>
              <div><dt>Course Price</dt><dd>{fmt(selected.price)}</dd></div>
              <div><dt>Discount</dt><dd className="c-green">- {fmt(selected.price - selected.sale)}</dd></div>
              {coupon && <div><dt>Coupon ({coupon})</dt><dd className="c-green">- {fmt(couponOff)}</dd></div>}
              <div className="total"><dt>Total Amount</dt><dd>{fmt(total)}</dd></div>
            </dl>
            <p className="save-banner">You save {fmt(selected.price - total)} on this course!</p>
            <div className="great"><img src={img.gift} alt="" /><div><strong>Great Choice!</strong><small>You’re getting premium features at the best price.</small></div></div>
            <Button variant="purple" block size="lg" icon={LockKeyhole} onClick={pay}>Pay Now {fmt(total)}</Button>
            <p className="co-secure co-secure--center"><ShieldCheck /> Safe & Secure Payment</p>
          </section>
          <section className="co-card why-learn">
            <h2>Why Learn with Nexu Guru?</h2>
            <ul>{['Expert teachers with years of experience', 'Live & recorded classes', 'Unlimited mock tests', 'Complete study materials', 'Doubt support anytime'].map((t) => <li key={t}><CircleCheck />{t}</li>)}</ul>
          </section>
          <section className="money-back"><img src={img['badge-7days']} alt="" /><div><strong>7 Days Money Back Guarantee</strong><small>Not satisfied? Get a full refund within 7 days.</small></div></section>
        </aside>
      </div>
      <div className="container co-strip">
        {[[Video, 'Live Classes', 'Interactive live sessions'], [ClipboardCheck, 'Mock Tests', 'Real exam experience'], [BookOpenCheck, 'Study Materials', 'Notes & practice sets'], [Headset, 'Doubt Support', 'Quick expert help']].map(([I, t, d]) => (
          <div key={t}><span className="icircle" style={{ width: 48, height: 48 }}><I /></span><div><strong>{t}</strong><small>{d}</small></div></div>
        ))}
      </div>
    </SitePage>
  );
}

