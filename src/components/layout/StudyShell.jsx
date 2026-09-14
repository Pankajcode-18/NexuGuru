import StudyHeader from './StudyHeader.jsx';
import StudyFooter from './StudyFooter.jsx';
import Breadcrumb from '../ui/Breadcrumb.jsx';

/** Header + breadcrumb band + page body + slim footer. */
export default function StudyShell({ crumbs, logo, searchCircle, footer, children, className = '' }) {
  return (
    <div className={`study-page ${className}`}>
      <StudyHeader logo={logo} searchCircle={searchCircle} />
      {crumbs && (
        <div className="crumb-band"><div className="study-container"><Breadcrumb items={crumbs} /></div></div>
      )}
      <div className="study-body">{children}</div>
      <StudyFooter {...footer} />
    </div>
  );
}
