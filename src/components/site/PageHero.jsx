import Breadcrumb from '../ui/Breadcrumb.jsx';

/**
 * Hero band for content pages (privacy, terms, FAQ, blog, refund).
 * variant: 'dark' (navy→purple) | 'light' (lavender) | 'photo' (uses `bg`)
 */
export default function PageHero({ variant = 'dark', title, accent, text, crumbs, crumbsTop, art, bg, wave = false, className = '' }) {
  return (
    <section className={`page-hero page-hero--${variant} ${className}`} style={bg ? { backgroundImage: `url(${bg})` } : undefined}>
      <div className="page-hero__inner container">
        <div className="page-hero__copy">
          {crumbsTop && <Breadcrumb items={crumbsTop} homeIcon={false} className="page-hero__crumbs page-hero__crumbs--top" />}
          <h1>{title}{accent && <><br /><span className="page-hero__accent">{accent}</span></>}</h1>
          <span className="page-hero__rule" />
          <p>{text}</p>
          {crumbs && <Breadcrumb items={crumbs} className="page-hero__crumbs" />}
        </div>
      </div>
      {art && <img className="page-hero__art" src={art} alt="" />}
      {wave && <svg className="page-hero__wave" viewBox="0 0 1440 70" preserveAspectRatio="none" aria-hidden="true"><path d="M0 40 C 240 10, 420 70, 720 42 S 1200 0, 1440 30 V70 H0 Z" /></svg>}
    </section>
  );
}
