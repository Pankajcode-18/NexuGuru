import { CircleAlert, CirclePlay, ClipboardCheck, Crown, Download, FileText, Headset, Mail, Phone, Wallet, BadgeCheck } from 'lucide-react';
import SitePage from '../components/layout/SitePage.jsx';
import PageHero from '../components/site/PageHero.jsx';
import { InfoBanner, PolicyList } from '../components/site/PolicySections.jsx';
import Button from '../components/ui/Button.jsx';
import img from '../lib/assets.js';
import { contact } from '../data/site.js';

const sections = [
  { icon: BadgeCheck, title: 'General Policy', text: 'All purchases made on Nexu Guru are non-refundable unless otherwise stated in this policy. By purchasing any product or service, you agree to this Refund Policy.' },
  { icon: Crown, title: 'Premium Subscription', text: 'Premium subscription fees are non-refundable. Once a subscription is activated, the amount paid will not be refunded for any reason, including partial usage or change of mind.' },
  { icon: CirclePlay, title: 'Live Classes & Recorded Courses', text: 'Fees paid for live classes, recorded courses or batch enrollment are non-refundable under all circumstances once the course has started or access has been provided.' },
  { icon: Download, title: 'Digital Products (Notes, eBooks, Downloads)', text: 'All digital products such as notes, PDF files, eBooks and downloadable content are non-refundable after purchase or download.' },
  { icon: FileText, title: 'Test Series & Mock Tests', text: 'Fees paid for test series, mock tests or any exam preparation packages are non-refundable once the test or series has been activated or accessed.' },
  { icon: Wallet, title: 'Payment Issues', text: 'If a payment was deducted from your account but the order was not successful, please contact our support team. We will verify and resolve the issue as soon as possible.' },
  { icon: CircleAlert, title: 'Special Cases', text: 'Refunds will only be considered in exceptional cases such as a technical error, duplicate payment or unauthorized transaction. Each case will be reviewed individually.' },
  { icon: Mail, title: 'How to Request a Refund (If Applicable)', text: 'If you believe you are eligible for a refund under our policy, please contact us within 7 days of the transaction with your order details and reason for the refund request.' },
];

export default function RefundPolicy() {
  return (
    <SitePage header={{ showNews: true }} className="policy-page refund-page">
      <PageHero variant="light" title="Refund Policy" art={img['hero-refund']} wave
        crumbsTop={[{ label: 'Home', to: '/' }, { label: 'Refund Policy' }]}
        text="We want you to be completely satisfied with your learning experience. Please read our refund policy carefully." />
      <div className="container refund-body">
        <InfoBanner aside="Last Updated: May 10, 2024">This Refund Policy applies to all paid services, subscriptions and purchases made on the Nexu Guru website, mobile applications and related services.</InfoBanner>
        <PolicyList sections={sections} boxed />
        <div className="notes-box">
          <span className="notes-box__icon"><CircleAlert /></span>
          <div>
            <h3>Important Notes</h3>
            <ul>
              <li>Refunds, if approved, will be processed within 7–10 working days to the original payment method.</li>
              <li>Nexu Guru reserves the right to modify this refund policy at any time without prior notice.</li>
              <li>This policy is governed by the laws of Nepal.</li>
            </ul>
          </div>
          <ClipboardCheck className="notes-box__deco" />
        </div>
        <div className="help-band">
          <span className="help-band__icon"><Headset /></span>
          <div className="help-band__text"><h3>Need Help?</h3><p>Our support team is here to help you with any refund related queries.</p></div>
          <div className="help-band__contact">
            <a href={`mailto:${contact.email}`}><Mail /> {contact.email}</a>
            <a href={`tel:${contact.phone}`}><Phone /> {contact.phone}</a>
          </div>
          <Button variant="purple" pill to="/report-issue">Contact Us</Button>
        </div>
      </div>
    </SitePage>
  );
}
