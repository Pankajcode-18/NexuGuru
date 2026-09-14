import SiteHeader from './SiteHeader.jsx';
import SiteFooter from './SiteFooter.jsx';

/** Marketing page frame: top bar + header, page content, large footer. */
export default function SitePage({ header = {}, footer = {}, children, className = '' }) {
  return (
    <div className={`site-page ${className}`}>
      <SiteHeader {...header} />
      <main>{children}</main>
      <SiteFooter {...footer} />
    </div>
  );
}
