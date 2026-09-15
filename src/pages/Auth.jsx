import { useState } from 'react';
import { ArrowRight, CircleCheck, Eye, EyeOff, LockKeyhole, Mail, Phone, UserRound, ShieldCheck, BookOpen, GraduationCap } from 'lucide-react';
import Logo from '../components/ui/Logo.jsx';
import Button from '../components/ui/Button.jsx';
import { Apple, FacebookColor, Google } from '../components/icons/Brand.jsx';
import { toast } from '../components/ui/Toast.jsx';
import { Link, navigate } from '../lib/router.jsx';
import img from '../lib/assets.js';

/* ---- Role config ---- */
const ROLES = [
  {
    key: 'student',
    label: 'Student',
    icon: GraduationCap,
    desc: 'I want to learn',
    color: '#43169b',
    bg: '#f5f2fc',
    border: '#c4b2f0',
    redirect: '/profile',
  },
  {
    key: 'teacher',
    label: 'Teacher',
    icon: BookOpen,
    desc: 'I teach content',
    color: '#1e9a4b',
    bg: '#effaf2',
    border: '#a3dbb8',
    redirect: '/admin',
  },
  {
    key: 'admin',
    label: 'Admin',
    icon: ShieldCheck,
    desc: 'I manage the platform',
    color: '#c45b00',
    bg: '#fff5ec',
    border: '#f9c99a',
    redirect: '/admin',
  },
];

/* ---- Password field ---- */
function Password({ value, onChange, placeholder, id }) {
  const [show, setShow] = useState(false);
  return (
    <div className="input">
      <LockKeyhole />
      <input
        id={id}
        type={show ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <button
        type="button"
        className="input__action"
        onClick={() => setShow(!show)}
        aria-label={show ? 'Hide password' : 'Show password'}
      >
        {show ? <EyeOff /> : <Eye />}
      </button>
    </div>
  );
}

const strength = (p) =>
  [/.{8,}/, /[A-Z]/, /\d/, /[^A-Za-z0-9]/].filter((r) => r.test(p)).length;

function Socials() {
  const providers = [
    [Google, 'Google'],
    [FacebookColor, 'Facebook'],
    [Apple, 'Apple'],
  ];
  return (
    <div className="auth-social">
      {providers.map(([Icon, name]) => (
        <button
          key={name}
          type="button"
          onClick={() => toast(name + ' sign-in is available in the full app')}
        >
          <Icon size={20} />
          {name}
        </button>
      ))}
    </div>
  );
}

/* ---- Role Selector ---- */
function RoleSelector({ selected, onChange }) {
  return (
    <div className="auth-role-wrap">
      <div className="auth-role-label">Select your role</div>
      <div className="auth-role-row">
        {ROLES.map((r) => {
          const Icon = r.icon;
          const active = selected === r.key;
          return (
            <button
              key={r.key}
              type="button"
              className={'auth-role-btn' + (active ? ' active' : '')}
              style={
                active
                  ? { '--role-color': r.color, '--role-bg': r.bg, '--role-border': r.border }
                  : {}
              }
              onClick={() => onChange(r.key)}
            >
              <span
                className="auth-role-icon"
                style={active ? { background: r.bg, color: r.color } : {}}
              >
                <Icon size={18} />
              </span>
              <span className="auth-role-text">
                <strong>{r.label}</strong>
                <small>{r.desc}</small>
              </span>
              {active && <span className="auth-role-check">&#10003;</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ---- Auth frame shell ---- */
function AuthFrame({ mode, children }) {
  const isLogin = mode === 'login';
  const loginFeatures = [
    'Quality Study Materials',
    'Live MCQ & Tests',
    'Track Your Progress',
    'Save & Revisit',
  ];
  const registerFeatures = [
    'Expert Content',
    'Exam Focused',
    'Learn Anytime',
    'Safe & Secure',
  ];
  return (
    <div className="auth">
      <header className="auth__top">
        <Logo variant="g" />
        <p>
          {isLogin ? 'No account yet?' : 'Already have an account?'}{' '}
          <Button variant="outline" to={isLogin ? '/register' : '/login'}>
            {isLogin ? 'Register Now' : 'Login'}
          </Button>
        </p>
      </header>

      <main className="auth__card">
        <div className="auth__form">{children}</div>
        <div className="auth__art">
          <img src={img[isLogin ? 'auth-login' : 'auth-register']} alt="" />
          <h2>{isLogin ? 'Smart Learning Starts Here' : 'Why Join Nexu Guru?'}</h2>
          <ul>
            {(isLogin ? loginFeatures : registerFeatures).map((t) => (
              <li key={t}>
                <CircleCheck />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </main>

      <footer className="auth__foot">
        <span>{'© 2024 Nexu Education Private Limited. All Rights Reserved.'}</span>
        <span>
          <Link to="/terms">{'Terms & Conditions'}</Link>
          {' | '}
          <Link to="/privacy-policy">Privacy Policy</Link>
        </span>
      </footer>
    </div>
  );
}

/* ================================================================
   LOGIN
================================================================ */
export function Login() {
  const [role, setRole] = useState('student');
  const [f, setF] = useState({
    id: 'arjun.sharma@nexuguru.com',
    pw: 'Nexu@1234',
    remember: true,
  });
  const [err, setErr] = useState('');

  const activeRole = ROLES.find((r) => r.key === role);

  const demoHints = {
    student: 'Demo: Click Login to view the student profile.',
    teacher: 'Demo: Click Login to access the Teacher Dashboard.',
    admin: 'Demo: Click Login to access the Admin Dashboard.',
  };

  const submit = (e) => {
    e.preventDefault();
    if (!f.id || !f.pw) {
      setErr('Enter your email/phone and password.');
      return;
    }
    toast('Logged in as ' + activeRole.label + '! Redirecting...');
    setTimeout(() => navigate(activeRole.redirect), 600);
  };

  return (
    <AuthFrame mode="login">
      <form onSubmit={submit}>
        <h1>Welcome Back!</h1>
        <p className="auth__sub">Login to continue your learning journey.</p>

        <RoleSelector selected={role} onChange={(r) => { setRole(r); setErr(''); }} />

        <p className="auth__demo">{demoHints[role]}</p>

        <div className="field">
          <label className="field__label" htmlFor="lg-id">
            Email or Phone Number
          </label>
          <div className="input">
            <Mail />
            <input
              id="lg-id"
              value={f.id}
              onChange={(e) => setF({ ...f, id: e.target.value })}
              placeholder="Enter your email or phone number"
            />
          </div>
        </div>

        <div className="field">
          <label className="field__label" htmlFor="lg-pw">
            Password
          </label>
          <Password
            id="lg-pw"
            value={f.pw}
            onChange={(e) => setF({ ...f, pw: e.target.value })}
            placeholder="Enter your password"
          />
        </div>

        <div className="auth__row">
          <label className="check">
            <input
              type="checkbox"
              checked={f.remember}
              onChange={(e) => setF({ ...f, remember: e.target.checked })}
            />
            <i />
            Remember me
          </label>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              toast('Password reset link sent to your email');
            }}
          >
            Forgot Password?
          </a>
        </div>

        {err && <p className="form-error">{err}</p>}

        <Button
          block
          size="lg"
          iconRight={ArrowRight}
          type="submit"
          className="auth__submit"
          style={{ '--btn-bg': activeRole.color }}
        >
          {'Login as ' + activeRole.label}
        </Button>

        <p className="auth__or"><span>or continue with</span></p>
        <Socials />
        <p className="auth__switch">
          {'No account? '}
          <Link to="/register">Register Now</Link>
        </p>
      </form>
    </AuthFrame>
  );
}

/* ================================================================
   REGISTER
================================================================ */
export function Register() {
  const [role, setRole] = useState('student');
  const [f, setF] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    pw: '',
    pw2: '',
    agree: false,
  });
  const [err, setErr] = useState('');
  const s = strength(f.pw);
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const activeRole = ROLES.find((r) => r.key === role);

  const submit = (e) => {
    e.preventDefault();
    if (!f.name || !f.username || !f.email.includes('@')) {
      setErr('Enter your name, username, and a valid email.');
      return;
    }
    if (s < 3) {
      setErr('Use at least 8 characters with a number and an uppercase letter.');
      return;
    }
    if (f.pw !== f.pw2) {
      setErr('Passwords do not match.');
      return;
    }
    if (!f.agree) {
      setErr('Please accept the Terms & Conditions.');
      return;
    }
    toast(activeRole.label + ' account created! Redirecting...');
    setTimeout(() => navigate(activeRole.redirect), 600);
  };

  const strengthLabels = ['Too weak', 'Weak', 'Fair', 'Good', 'Strong'];

  return (
    <AuthFrame mode="register">
      <form onSubmit={submit}>
        <h1>Create Your Account</h1>
        <p className="auth__sub">Join thousands of learners on Nexu Guru.</p>

        <RoleSelector selected={role} onChange={(r) => { setRole(r); setErr(''); }} />

        <div className="auth__grid">
          <div className="field">
            <label className="field__label" htmlFor="rg-name">Full Name</label>
            <div className="input">
              <UserRound />
              <input id="rg-name" value={f.name} onChange={set('name')} placeholder="Enter your full name" />
            </div>
          </div>
          <div className="field">
            <label className="field__label" htmlFor="rg-username">Username</label>
            <div className="input">
              <UserRound />
              <input id="rg-username" value={f.username} onChange={set('username')} placeholder="Choose a username" />
            </div>
          </div>
        </div>

        <div className="field">
          <label className="field__label" htmlFor="rg-email">Email Address</label>
          <div className="input">
            <Mail />
            <input id="rg-email" value={f.email} onChange={set('email')} placeholder="Enter your email address" />
          </div>
        </div>

        <div className="field">
          <label className="field__label" htmlFor="rg-phone">Phone Number</label>
          <div className="input">
            <Phone />
            <span className="prefix">+92</span>
            <input id="rg-phone" value={f.phone} onChange={set('phone')} placeholder="3XX XXXXXXX" />
          </div>
        </div>

        <div className="auth__grid">
          <div className="field">
            <label className="field__label" htmlFor="rg-pw">Password</label>
            <Password id="rg-pw" value={f.pw} onChange={set('pw')} placeholder="Create password" />
          </div>
          <div className="field">
            <label className="field__label" htmlFor="rg-pw2">Confirm Password</label>
            <Password id="rg-pw2" value={f.pw2} onChange={set('pw2')} placeholder="Confirm password" />
          </div>
        </div>

        <div className="pw-meter">
          <div>{[0, 1, 2, 3].map((i) => <i key={i} className={i < s ? 'on-' + s : ''} />)}</div>
          <span>{strengthLabels[s]}</span>
        </div>

        <label className="check">
          <input
            type="checkbox"
            checked={f.agree}
            onChange={(e) => setF({ ...f, agree: e.target.checked })}
          />
          <i />
          {'I agree to the '}
          <Link to="/terms">Terms &amp; Conditions</Link>
          {' and '}
          <Link to="/privacy-policy">Privacy Policy</Link>
        </label>

        {err && <p className="form-error">{err}</p>}

        <Button block size="lg" iconRight={ArrowRight} type="submit" className="auth__submit">
          {'Register as ' + activeRole.label}
        </Button>

        <p className="auth__or"><span>or sign up with</span></p>
        <Socials />
      </form>
    </AuthFrame>
  );
}
