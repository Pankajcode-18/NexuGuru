import { useState } from 'react';
import { Download, EllipsisVertical, Menu, Minus, PanelLeft, Plus, Printer, RotateCw, Scan } from 'lucide-react';
import StudyShell from '../components/layout/StudyShell.jsx';
import ChapterSidebar from '../components/study/ChapterSidebar.jsx';
import StudyBottom from '../components/study/StudyBottom.jsx';
import { NeedHelp, QuickActions, StudyProgress } from '../components/study/AsideWidgets.jsx';
import Button from '../components/ui/Button.jsx';
import { toast } from '../components/ui/Toast.jsx';
import img from '../lib/assets.js';

const TOTAL = 18;
const thumbs = ['pdf-t1', 'pdf-t2', 'pdf-t3', 'pdf-t2', 'pdf-t3', 'pdf-t2'];

/** Lightweight PDF viewer mock – toolbar, thumbnails rail and zoomable page. */
function PdfViewer() {
  const [page, setPage] = useState(1);
  const [zoom, setZoom] = useState(100);
  const [rotation, setRotation] = useState(0);
  const [rail, setRail] = useState(true);
  return (
    <div className="pdf">
      <div className="pdf__bar">
        <div className="pdf__group">
          <button type="button" aria-label="Menu"><Menu /></button>
          <button type="button" aria-label="Toggle thumbnails" onClick={() => setRail(!rail)} className={rail ? 'is-on' : ''}><PanelLeft /></button>
        </div>
        <div className="pdf__group pdf__center">
          <input className="pdf__page" value={page} aria-label="Page" onChange={(e) => { const v = parseInt(e.target.value, 10); if (v >= 1 && v <= TOTAL) setPage(v); }} />
          <span className="pdf__total">/ {TOTAL}</span>
          <i className="pdf__sep" />
          <button type="button" aria-label="Zoom out" onClick={() => setZoom((z) => Math.max(50, z - 10))}><Minus /></button>
          <span className="pdf__zoom">{zoom}%</span>
          <button type="button" aria-label="Zoom in" onClick={() => setZoom((z) => Math.min(200, z + 10))}><Plus /></button>
          <i className="pdf__sep" />
          <button type="button" aria-label="Fit page" onClick={() => setZoom(100)}><Scan /></button>
          <button type="button" aria-label="Rotate" onClick={() => setRotation((r) => (r + 90) % 360)}><RotateCw /></button>
        </div>
        <div className="pdf__group">
          <button type="button" aria-label="Download" onClick={() => toast('Downloading PDF…')}><Download /></button>
          <button type="button" aria-label="Print" onClick={() => window.print()}><Printer /></button>
          <button type="button" aria-label="More"><EllipsisVertical /></button>
        </div>
      </div>
      <div className="pdf__body">
        {rail && (
          <div className="pdf__rail">
            {thumbs.map((t, i) => (
              <button type="button" key={i} className={`pdf__thumb ${page === i + 1 ? 'is-active' : ''}`} onClick={() => setPage(i + 1)}>
                <img src={img[t]} alt={`Page ${i + 1}`} /><span>{i + 1}</span>
              </button>
            ))}
          </div>
        )}
        <div className="pdf__stage">
          <div className="pdf__sheet" style={{ transform: `scale(${zoom / 100}) rotate(${rotation}deg)` }}>
            <img src={img['pdf-page']} alt={`Handwritten notes page ${page}`} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HandwrittenNotes() {
  return (
    <StudyShell logo="g" searchCircle={false} crumbs={[{ label: 'Home', to: '/' }, { label: 'Class 12', to: '/class-12' }, { label: 'Science', to: '/class-12' }, { label: 'Physics', to: '/class-12' }, { label: 'Current Electricity', to: '/notes' }, { label: 'Notes', to: '/notes' }, { label: 'Handwritten Notes (PDF)' }]} className="notes-shell">
      <div className="study-container">
        <div className="study-grid study-grid--notes">
          <ChapterSidebar section="notes" sub="handwritten" currentStyle="text" />
          <main className="study-main pdf-page">
            <div className="pdf-page__head">
              <h1 className="study-title">Current Electricity – Handwritten Notes (PDF)</h1>
              <Button variant="outline" icon={Download} onClick={() => toast('Downloading PDF…')}>Download PDF</Button>
            </div>
            <PdfViewer />
            <section className="typed-notes">
              <div className="typed-notes__head"><h2>Typed Notes</h2><Button variant="outline" size="sm">View Full Notes</Button></div>
              <h3>1. Electric Current</h3>
              <p>The rate of flow of electric charge through a conductor is called electric current.</p>
              <div className="typed-notes__formula">I = q / t</div>
              <p>Where,</p>
              <ul><li>I = &nbsp;Current (Ampere)</li><li>q = &nbsp;Charge (Coulomb)</li><li>t = Time (Second)</li></ul>
            </section>
          </main>
          <div className="study-aside aside--roomy">
            <QuickActions boxed items={[{ icon: 'download', label: 'Download PDF' }, { icon: 'bookmark', label: 'Bookmark' }, { icon: 'share', label: 'Share' }, { icon: 'print', label: 'Print', action: () => window.print() }, { icon: 'flag', label: 'Report an Issue', to: '/report-issue' }]} />
            <StudyProgress />
            <NeedHelp />
          </div>
        </div>
        <StudyBottom />
      </div>
    </StudyShell>
  );
}
