import { Link } from '../lib/router.jsx';

/* Prototype-only index of every reference screen (not linked from the UI). */
const screens = [
  ['/', 'Home + Study Materials menu'], ['/about', 'About Us'], ['/blogs', 'Blog'], ['/faq', 'FAQ'], ['/privacy-policy', 'Privacy Policy'],
  ['/terms', 'Terms & Conditions'], ['/refund-policy', 'Refund Policy'], ['/entrance', 'Entrance Preparation'], ['/checkout', 'Checkout'],
  ['/class-12', 'Class 12 Important Notes'], ['/notes', 'Handwritten Notes (PDF)'], ['/videos', 'Chapter Videos'], ['/live-mcq', 'Live MCQ'],
  ['/important-questions', 'Important Questions'], ['/sticky-notes', 'Sticky Notes'], ['/chapter-locked', 'Locked Chapter / Plans'],
  ['/report-issue', 'Report an Issue'], ['/profile', 'My Profile'], ['/login', 'Login'], ['/register', 'Register'],
];
export default function ScreenIndex() {
  return (
    <div className="screens">
      <h1>Nexu Guru – Prototype Screens</h1>
      <ol>{screens.map(([to, l]) => <li key={to}><Link to={to}>{l}</Link><code>#{to}</code></li>)}</ol>
    </div>
  );
}
