import { ArrowRight, LockKeyhole, ShieldCheck } from 'lucide-react';
import SitePage from '../components/layout/SitePage.jsx';
import PageHero from '../components/site/PageHero.jsx';
import { InfoBanner, OnThisPage, PolicyList } from '../components/site/PolicySections.jsx';
import Button from '../components/ui/Button.jsx';

/** Layout shared by Privacy Policy and Terms & Conditions. */
export default function PolicyPage({ title, text, crumb, art, sections, intro, trust, closing }) {
  return (
    <SitePage header={{ showNews: true }} footer={{ columns: ['company', 'centres', 'quick', 'products'] }} className="policy-page">
      <PageHero variant="dark" title={title} text={text} art={art} crumbs={[{ label: 'Home', to: '/' }, { label: crumb }]} />
      <div className="container policy-layout">
        <aside className="policy-side">
          <OnThisPage sections={sections} />
          <div className="trust-card">
            <span className="trust-card__icon"><ShieldCheck /></span>
            <h3>{trust.title}</h3>
            <p>{trust.text}</p>
            <Button variant="purple" iconRight={ArrowRight} to="/report-issue">{trust.cta}</Button>
          </div>
        </aside>
        <div className="policy-content">
          <InfoBanner>{intro}</InfoBanner>
          <p className="policy-updated">Last Updated: May 10, 2024</p>
          <PolicyList sections={sections} />
          <div className="policy-closing">
            <span className="policy-closing__icon"><LockKeyhole /></span>
            <p>{closing}</p>
            <Button variant="purple" pill to="/report-issue">Contact Us</Button>
          </div>
        </div>
      </div>
    </SitePage>
  );
}
