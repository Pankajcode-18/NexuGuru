import { useRef, useState } from 'react';
import { ArrowRight, Clock3, CloudUpload, Flag, FileQuestion, Headset, Lightbulb, Link2, LockKeyhole, Mail, MessageCircleQuestion, MessagesSquare, PenLine, Send, UserRound } from 'lucide-react';
import StudyShell from '../components/layout/StudyShell.jsx';
import Dropdown from '../components/ui/Dropdown.jsx';
import Button from '../components/ui/Button.jsx';
import { toast } from '../components/ui/Toast.jsx';
import { Link, navigate } from '../lib/router.jsx';

const MAX = 1000;

export default function ReportIssue() {
  const [form, setForm] = useState({ name: '', email: '', page: '', desc: '', subject: null, via: 'email' });
  const [files, setFiles] = useState([]);
  const [error, setError] = useState('');
  const fileRef = useRef(null);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value.slice(0, k === 'desc' ? MAX : 200) }));

  const submit = () => {
    if (!form.desc.trim()) return setError('Describe the issue so our team can reproduce it.');
    if (!form.email.includes('@')) return setError('Enter a valid email address so we can send you updates.');
    setError('');
    toast('Issue submitted – we’ll email you an update.');
    setForm({ name: '', email: '', page: '', desc: '', subject: null, via: 'email' });
    setFiles([]);
  };
  const addFiles = (list) => setFiles((f) => [...f, ...Array.from(list).map((x) => x.name)]);

  return (
    <StudyShell searchCircle={false} crumbs={[{ label: 'Home', to: '/' }, { label: 'Report an Issue' }]} className="report-shell"
      footer={{ copyright: '© 2024 Nexu Education Pvt. Ltd. All rights reserved.', links: [['Help Center', '/faq'], ['Privacy Policy', '/privacy-policy'], ['Terms & Conditions', '/terms']], className: 'study-footer--tall' }}>
      <div className="study-container">
        <div className="report-grid">
          <main className="report-card">
            <header className="report-card__head">
              <span className="report-card__icon"><Flag /></span>
              <div><h1>Report an Issue</h1><p>Facing a problem? Let us know so we can fix it and improve your experience.</p></div>
            </header>
            <div className="report-form">
              <div className="field"><label className="field__label" htmlFor="ri-name">Your Name</label>
                <div className="input"><UserRound /><input id="ri-name" value={form.name} onChange={set('name')} placeholder="Enter your full name" /></div></div>
              <div className="field"><label className="field__label" htmlFor="ri-email">Email Address</label>
                <div className="input"><Mail /><input id="ri-email" type="email" value={form.email} onChange={set('email')} placeholder="Enter your email address" /></div></div>
              <div className="field"><span className="field__label">Subject</span>
                <Dropdown className="dropdown--field" leading={<Link2 className="dropdown__lead" />} placeholder="Select issue type" value={form.subject} onChange={(v) => setForm((f) => ({ ...f, subject: v }))}
                  options={['Content error in notes', 'Video not playing', 'MCQ / test problem', 'Payment issue', 'Account & login', 'Other']} /></div>
              <div className="field"><label className="field__label" htmlFor="ri-page">Related Page <em>(Optional)</em></label>
                <div className="input"><Link2 /><input id="ri-page" value={form.page} onChange={set('page')} placeholder="e.g. Chapter, Video, Notes, MCQ..." /></div></div>
              <div className="field field--full"><label className="field__label" htmlFor="ri-desc">Describe the Issue <span className="req">*</span></label>
                <div className="input input--area"><PenLine /><textarea id="ri-desc" value={form.desc} onChange={set('desc')} rows={4} placeholder="Please describe the issue in detail. Provide as much information as possible..." /><span className="counter">{form.desc.length} / {MAX}</span></div></div>
              <div className="field field--full"><span className="field__label">Attachments <em>(Optional)</em></span>
                <div className="dropzone" onClick={() => fileRef.current?.click()} onDragOver={(e) => e.preventDefault()} onDrop={(e) => { e.preventDefault(); addFiles(e.dataTransfer.files); }} role="button" tabIndex={0}>
                  <CloudUpload className="dropzone__icon" />
                  <div><p>Drag &amp; drop files here or <b>click to browse</b></p><small>{files.length ? files.join(', ') : 'Supports: PNG, JPG, PDF (Max. 5MB)'}</small></div>
                  <input ref={fileRef} type="file" hidden multiple accept=".png,.jpg,.jpeg,.pdf" onChange={(e) => addFiles(e.target.files)} />
                </div></div>
              <div className="field field--full"><span className="field__label">How should we contact you?</span>
                <div className="radios">
                  {[['email', 'Email (Recommended)'], ['phone', 'Phone']].map(([v, l]) => (
                    <label key={v} className={`radio ${form.via === v ? 'is-on' : ''}`}><input type="radio" name="via" checked={form.via === v} onChange={() => setForm((f) => ({ ...f, via: v }))} /><i />{l}</label>
                  ))}
                </div></div>
              {error && <p className="form-error field--full" role="alert">{error}</p>}
              <div className="report-actions field--full">
                <Button variant="outline" onClick={() => navigate('/')}>Cancel</Button>
                <Button spread iconRight={Send} onClick={submit} className="report-submit"><span />Submit Issue</Button>
              </div>
            </div>
            <div className="safe-note"><span><LockKeyhole /></span><div><strong>Your data is safe with us.</strong><p>We only use the information you provide to help resolve your issue.</p></div></div>
          </main>

          <div className="report-aside">
            <section className="ra-card">
              <div className="ra-card__head"><span className="ra-ico"><Lightbulb /></span><div><h3>Before You Report</h3><p>Please check the following resources. Your issue might already be solved there.</p></div></div>
              <ul className="ra-links">
                <li><Link to="/faq"><FileQuestion /><span><strong>Help Center</strong><small>Find answers to common questions</small></span></Link></li>
                <li><Link to="/faq"><MessageCircleQuestion /><span><strong>FAQs</strong><small>Browse frequently asked questions</small></span></Link></li>
                <li><Link to="/faq"><MessagesSquare /><span><strong>Contact Support</strong><small>Chat with our support team</small></span></Link></li>
              </ul>
            </section>
            <section className="ra-card ra-card--steps">
              <div className="ra-card__head"><span className="ra-ico ra-ico--blue"><Clock3 /></span><h3>What Happens Next?</h3></div>
              <ol className="ra-steps">
                <li><i>1</i><div><strong>We Receive Your Report</strong><small>Our team will review your issue.</small></div></li>
                <li><i>2</i><div><strong>We Investigate</strong><small>We will look into the problem.</small></div></li>
                <li><i>3</i><div><strong>We Get Back to You</strong><small>You will receive an update via email.</small></div></li>
              </ol>
            </section>
            <section className="ra-card ra-card--green">
              <div className="ra-card__head"><span className="ra-ico ra-ico--green"><Headset /></span><div><h3>Need Immediate Help?</h3><p>If your issue is urgent, please contact us directly.</p>
                <Button variant="success-outline" iconRight={ArrowRight} to="/faq" className="ra-green-btn">Contact Support</Button></div></div>
            </section>
          </div>
        </div>
      </div>
    </StudyShell>
  );
}
