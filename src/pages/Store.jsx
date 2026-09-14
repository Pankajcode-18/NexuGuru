import { ArrowRight, BookOpen, PackageCheck, ShieldCheck } from 'lucide-react';
import SitePage from '../components/layout/SitePage.jsx';
import PageHero from '../components/site/PageHero.jsx';
import Breadcrumb from '../components/ui/Breadcrumb.jsx';
import Button from '../components/ui/Button.jsx';
import { toast } from '../components/ui/Toast.jsx';
import img from '../lib/assets.js';

const products = [
  { image: 'explore-books', name: 'Class 12 Complete Notes', type: 'Digital study pack', description: 'Clear chapter notes and revision material for your board preparation.', price: 'NPR 499', oldPrice: 'NPR 799' },
  { image: 'pdf-page', name: 'Exam Revision Workbook', type: 'Practice workbook', description: 'Targeted questions, model tests, and space to work through your answers.', price: 'NPR 349', oldPrice: 'NPR 549' },
  { image: 'course-ioe', name: 'IOE Entrance Toolkit', type: 'Entrance preparation', description: 'A focused collection of formulas, practice sets, and preparation guides.', price: 'NPR 699', oldPrice: 'NPR 999' },
];

export default function Store() {
  return (
    <SitePage header={{ active: 'Nexu Store', showNews: true }} footer={{ columns: ['company', 'centres', 'exams', 'quick', 'products'], about: 'long' }} className="store-page">
      <PageHero variant="light" title="Nexu Store" text="Simple, practical resources to help you study with more focus and confidence." />
      <div className="container">
        <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Nexu Store' }]} className="store-crumbs" />
        <section className="store-intro"><div><p className="eyebrow eyebrow--left">STUDY BETTER</p><h2>Resources made for your next milestone</h2></div><p>Sample products are shown below while our full store catalogue is being prepared.</p></section>
        <div className="store-grid">
          {products.map((product) => (
            <article key={product.name} className="store-card">
              <div className="store-card__image"><img src={img[product.image]} alt="" /><span>NEW</span></div>
              <div className="store-card__body"><small>{product.type}</small><h3>{product.name}</h3><p>{product.description}</p><div className="store-card__price"><strong>{product.price}</strong><s>{product.oldPrice}</s></div><Button variant="purple" block iconRight={ArrowRight} onClick={() => toast(`${product.name} will be available soon.`)}>View details</Button></div>
            </article>
          ))}
        </div>
        <section className="store-benefits"><div><PackageCheck /><strong>Useful resources</strong><span>Made for real study sessions</span></div><div><BookOpen /><strong>Learn at your pace</strong><span>Digital and printable options</span></div><div><ShieldCheck /><strong>Student-first support</strong><span>Help when you need it</span></div></section>
      </div>
    </SitePage>
  );
}