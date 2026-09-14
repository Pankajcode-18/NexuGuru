import { useState } from 'react';
import { ArrowRight, CircleCheck, Eye, EyeOff, LockKeyhole, Mail, Phone, UserRound } from 'lucide-react';
import Logo from '../components/ui/Logo.jsx';
import Button from '../components/ui/Button.jsx';
import { Apple, FacebookColor, Google } from '../components/icons/Brand.jsx';
import { toast } from '../components/ui/Toast.jsx';
import { Link, navigate } from '../lib/router.jsx';
import img from '../lib/assets.js';

function Password({ value, onChange, placeholder, id }) {
  const [show, setShow] = useState(false);
  return (
    <div className="input"><LockKeyhole /><input id={id} type={show ? 'text' : 'password'} value={value} onChange={onChange} placeholder={placeholder} />
      <button type="button" className="input__action" onClick={() => setShow(!show)} aria-label={show ? 'Hide password' : 'Show password'}>{show ? <EyeOff /> : <Eye />}</button></div>
  );
}
const strength = (p) => [/.{8,}/, /[A-Z]/, /\d/, /[^A-Za-z0-9]/].filter((r) => r.test(p)).length;
const Socials = () => (
  <div className="auth-social">
    {[[Google, 'Google'], [FacebookColor, 'Facebook'], [Apple, 'Apple']].map(([I, n]) => <button key={n} type="button" onClick={() => toast(`${n} sign-in – available in the full app`)}><I size={20} />{n}</button>)}
  </div>
);

function AuthFrame({ mode, children }) {
  const login = mode === 'login';
  return (
    <div className="auth">
      <header className="auth__top">
        <Logo variant="g" />
        <p>{login ? 'Don’t have an account?' : 'Already have an account?'} <Button variant="outline" to={login ? '/register' : '/login'}>{login ? 'Register Now' : 'Login'}</Button></p>
      </header>
      <main className="auth__card">
        <div className="auth__form">{children}</div>
        <div className="auth__art">
          <img src={img[login ? 'auth-login' : 'auth-register']} alt="" />
          <h2>{login ? 'Smart Learning Starts Here' : 'Why Join Nexu Guru?'}</h2>
          <ul>{(login ? ['Quality Study Materials', 'Live MCQ & Tests', 'Track Your Progress', 'Save & Revisit'] : ['Expert Content', 'Exam Focused', 'Learn Anytime', 'Safe & Secure']).map((t) => <li key={t}><CircleCheck />{t}</li>)}</ul>
        </div>
      </main>
      <footer className="auth__foot">© 2024 Nexu Education Private Limited. All Rights Reserved. <span><Link to="/terms">Terms &amp; Conditions</Link> | <Link to="/privacy-policy">Privacy Policy</Link></span></footer>
    </div>
  );
}

export function Login() {
  const [f, setF] = useState({ id: 'arjun.sharma@nexuguru.com', pw: 'Nexu@1234', remember: true });
  const [err, setErr] = useState('');
  const submit = (e) => { e.preventDefault(); if (!f.id || !f.pw) return setErr('Enter your email/phone and password.'); navigate('/profile'); };
  return (
    <AuthFrame mode="login">
      <form onSubmit={submit}>
        <h1>Welcome Back!</h1>
        <p className="auth__sub">Login to continue your learning journey.</p>
        <p className="auth__demo">Demo account is ready. Click Login to view the sample profile.</p>
        <div className="field"><label className="field__label" htmlFor="lg-id">Email or Phone Number</label><div className="input"><Mail /><input id="lg-id" value={f.id} onChange={(e) => setF({ ...f, id: e.target.value })} placeholder="Enter your email or phone number" /></div></div>
        <div className="field"><label className="field__label" htmlFor="lg-pw">Password</label><Password id="lg-pw" value={f.pw} onChange={(e) => setF({ ...f, pw: e.target.value })} placeholder="Enter your password" /></div>
        <div className="auth__row"><label className="check"><input type="checkbox" checked={f.remember} onChange={(e) => setF({ ...f, remember: e.target.checked })} /><i />Remember me</label><a href="#" onClick={(e) => { e.preventDefault(); toast('Password reset link sent to your email'); }}>Forgot Password?</a></div>
        {err && <p className="form-error">{err}</p>}
        <Button block size="lg" iconRight={ArrowRight} type="submit" className="auth__submit">Login</Button>
        <p className="auth__or"><span>or continue with</span></p>
        <Socials />
        <p className="auth__switch">Don’t have an account? <Link to="/register">Register Now</Link></p>
      </form>
    </AuthFrame>
  );
}

export function Register() {
  const [f, setF] = useState({ name: '', username: '', email: '', phone: '', pw: '', pw2: '', agree: false });
  const [err, setErr] = useState('');
  const s = strength(f.pw);
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    if (!f.name || !f.username || !f.email.includes('@')) return setErr('Enter your name, username, and a valid email.');
    if (s < 3) return setErr('Use at least 8 characters with a number and an uppercase letter.');
    if (f.pw !== f.pw2) return setErr('Passwords do not match.');
    if (!f.agree) return setErr('Please accept the Terms & Conditions.');
    toast('Account created!'); navigate('/profile');
  };
  return (
    <AuthFrame mode="register">
      <form onSubmit={submit}>
        <h1>Create Your Account</h1>
        <p className="auth__sub">Join thousands of students learning smarter every day.</p>
        <div className="auth__grid">
          <div className="field"><label className="field__label" htmlFor="rg-name">Full Name</label><div className="input"><UserRound /><input id="rg-name" value={f.name} onChange={set('name')} placeholder="Enter your full name" /></div></div>
          <div className="field"><label className="field__label" htmlFor="rg-username">Username</label><div className="input"><UserRound /><input id="rg-username" value={f.username} onChange={set('username')} placeholder="Choose a username" /></div></div>
        </div>
        <div className="field"><label className="field__label" htmlFor="rg-email">Email Address</label><div className="input"><Mail /><input id="rg-email" value={f.email} onChange={set('email')} placeholder="Enter your email address" /></div></div>
        <div className="field"><label className="field__label" htmlFor="rg-phone">Phone Number</label><div className="input"><Phone /><span className="prefix">+977</span><input id="rg-phone" value={f.phone} onChange={set('phone')} placeholder="98XXXXXXXX" /></div></div>
        <div className="auth__grid">
          <div className="field"><label className="field__label" htmlFor="rg-pw">Password</label><Password id="rg-pw" value={f.pw} onChange={set('pw')} placeholder="Create password" /></div>
          <div className="field"><label className="field__label" htmlFor="rg-pw2">Confirm Password</label><Password id="rg-pw2" value={f.pw2} onChange={set('pw2')} placeholder="Confirm password" /></div>
        </div>
        <div className="pw-meter"><div>{[0, 1, 2, 3].map((i) => <i key={i} className={i < s ? `on-${s}` : ''} />)}</div><span>{['Too weak', 'Weak', 'Fair', 'Good', 'Strong'][s]}</span></div>
        <label className="check"><input type="checkbox" checked={f.agree} onChange={(e) => setF({ ...f, agree: e.target.checked })} /><i />I agree to the&nbsp;<Link to="/terms">Terms &amp; Conditions</Link>&nbsp;and&nbsp;<Link to="/privacy-policy">Privacy Policy</Link></label>
        {err && <p className="form-error">{err}</p>}
        <Button block size="lg" iconRight={ArrowRight} type="submit" className="auth__submit">Create Account</Button>
        <p className="auth__or"><span>or sign up with</span></p>
        <Socials />
      </form>
    </AuthFrame>
  );
}
