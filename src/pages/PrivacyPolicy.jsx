import { Baby, CircleCheck, Cookie, FileText, Link2, Mail, PenLine, Settings, ShieldCheck, UserRound, UsersRound } from 'lucide-react';
import PolicyPage from './PolicyShared.jsx';
import img from '../lib/assets.js';

const sections = [
  { icon: FileText, title: 'Introduction', text: 'Nexu Guru (“we”, “our”, “us”) is committed to protecting your privacy. This policy explains how we collect, use and safeguard your information when you use our website and apps.' },
  { icon: UserRound, title: 'Information We Collect', text: 'We collect information you provide directly such as your name, email address, phone number, class and faculty, along with usage data like pages visited and study progress.' },
  { icon: Settings, title: 'How We Use Your Information', text: 'Your information is used to provide and improve our services, personalise your learning experience, process payments and communicate important updates.' },
  { icon: UsersRound, title: 'Information Sharing', text: 'We do not sell your personal information. We only share data with trusted service providers who help us operate the platform, or when required by law.' },
  { icon: ShieldCheck, title: 'Data Security', text: 'We use industry-standard security measures including encryption and secure servers to protect your personal information from unauthorised access.' },
  { icon: CircleCheck, title: 'Your Rights & Choices', text: 'You can access, update or delete your account information at any time and opt out of promotional communications from your profile settings.' },
  { icon: Cookie, title: 'Cookies & Tracking', text: 'We use cookies to remember your preferences, keep you signed in and understand how our platform is used. You can control cookies through your browser settings.' },
  { icon: Link2, title: 'Third-Party Services', text: 'Our platform may contain links to third-party websites and payment gateways. We are not responsible for the privacy practices of those services.' },
  { icon: Baby, title: 'Children’s Privacy', text: 'Students under 16 should use Nexu Guru with the consent and supervision of a parent or guardian. We do not knowingly collect data without such consent.' },
  { icon: PenLine, title: 'Changes to This Policy', text: 'We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.' },
  { icon: Mail, title: 'Contact Us', text: 'If you have any questions about this Privacy Policy, contact us at contact@nexuguru.com or call +977 9762770136.' },
];

export default function PrivacyPolicy() {
  return (
    <PolicyPage title="Privacy Policy" crumb="Privacy Policy" art={img['hero-privacy']} sections={sections}
      text="Your privacy is important to us. This Privacy Policy explains how Nexu Guru collects, uses and protects your information."
      intro="By using Nexu Guru, you agree to the collection and use of information in accordance with this policy."
      trust={{ title: 'Your Trust Matters', text: 'We are committed to keeping your data safe and secure.', cta: 'Contact Us' }}
      closing="We value your privacy and are committed to protecting your personal information." />
  );
}
