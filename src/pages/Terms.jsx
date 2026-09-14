import { Ban, BookOpenText, CircleCheck, CreditCard, FileText, Gavel, Mail, PenLine, RefreshCcw, Scale, ShieldAlert, UserRound, CircleX } from 'lucide-react';
import PolicyPage from './PolicyShared.jsx';
import img from '../lib/assets.js';
import { Link } from '../lib/router.jsx';

const sections = [
  { icon: FileText, title: 'Acceptance of Terms', text: 'By accessing or using Nexu Guru, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use our services.' },
  { icon: UserRound, title: 'User Accounts', text: 'You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.' },
  { icon: BookOpenText, title: 'Use of Content', text: 'All notes, videos, MCQs and study materials are for personal, non-commercial educational use only. Redistribution or resale is strictly prohibited.' },
  { icon: CreditCard, title: 'Payments & Subscriptions', text: 'Paid courses and subscriptions must be purchased through our approved payment methods. Prices are listed in NPR and may change without prior notice.' },
  { icon: RefreshCcw, title: 'Refund Policy', text: <>Refunds are provided as per our <Link to="/refund-policy" className="inline-link">Refund Policy</Link>. Please review it before making any purchase.</> },
  { icon: Ban, title: 'Prohibited Activities', text: 'You may not copy, share accounts, attempt to hack, disrupt the platform or upload harmful content while using Nexu Guru.' },
  { icon: Scale, title: 'Intellectual Property', text: 'All content, logos and trademarks on Nexu Guru are the property of Nexu Education Private Limited and are protected by applicable laws.' },
  { icon: ShieldAlert, title: 'Limitation of Liability', text: 'Nexu Guru is not liable for any indirect or consequential damages arising from the use or inability to use our services.' },
  { icon: CircleX, title: 'Termination', text: 'We may suspend or terminate your account if you violate these terms, without prior notice and without refund.' },
  { icon: CircleCheck, title: 'Third-Party Links', text: 'Our platform may include links to third-party websites. We are not responsible for their content or practices.' },
  { icon: PenLine, title: 'Changes to Terms', text: 'We may revise these Terms & Conditions at any time. Continued use of the platform means you accept the updated terms.' },
  { icon: Gavel, title: 'Governing Law', text: 'These terms are governed by the laws of Nepal. Any disputes shall be subject to the jurisdiction of the courts of Nepal.' },
  { icon: Mail, title: 'Contact Information', text: 'For any questions regarding these terms, contact us at contact@nexuguru.com or call +977 9762770136.' },
];

export default function Terms() {
  return (
    <PolicyPage title="Terms & Conditions" crumb="Terms & Conditions" art={img['hero-terms']} sections={sections}
      text="Please read these terms and conditions carefully before using Nexu Guru’s website and services."
      intro="These Terms & Conditions govern your use of Nexu Guru’s website, apps and services."
      trust={{ title: 'Important', text: 'By using our platform, you agree to comply with these terms.', cta: 'Have Questions? Contact Us' }}
      closing="Thank you for choosing Nexu Guru. Happy Learning!" />
  );
}
