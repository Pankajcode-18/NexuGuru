import { ChevronDown, Clock3, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import SitePage from '../components/layout/SitePage.jsx';
import PageHero from '../components/site/PageHero.jsx';
import Breadcrumb from '../components/ui/Breadcrumb.jsx';
import Button from '../components/ui/Button.jsx';
import { toast } from '../components/ui/Toast.jsx';
import img from '../lib/assets.js';

const contactCards = [[Phone, 'Call Us', '+977 9762770136', 'Sun – Fri: 7:00 AM – 8:00 PM'], [Mail, 'Email Us', 'contact@nexuguru.com', 'We reply within 24 hours'], [MapPin, 'Visit Us', 'Attariya, Dhangadhi', 'By appointment only'], [Clock3, 'Support Hours', 'Sun – Fri: 7:00 AM – 8:00 PM', 'Saturday: 9:00 AM – 5:00 PM']];
const quickAnswers = ['How can I get help with my account?', 'Do you have offline support centers?', 'How long does it take to get a response?', 'How can I become a partner with Nexu Guru?', 'Can I provide suggestions or feedback?', 'Is there a contact number for urgent queries?'];

export default function Contact() {
  const [sent, setSent] = useState(false);
  return <SitePage header={{ active: 'Contact Us', showNews: true }} footer={{ columns: ['company', 'centres', 'exams', 'quick', 'products'], about: 'long' }} className="contact-page">
    <PageHero variant="dark" bg={img['hero-about']} title="Contact Us" text="We'd love to hear from you! Have a question, suggestion, or need support? Our team is here to help." />
    <div className="container"><Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Contact Us' }]} className="contact-crumbs" />
      <div className="contact-cards">{contactCards.map(([Icon, title, value, note]) => <article key={title}><span><Icon /></span><div><h3>{title}</h3><strong>{value}</strong><small>{note}</small></div></article>)}</div>
      <div className="contact-grid"><form className="contact-form" onSubmit={(e) => { e.preventDefault(); setSent(true); toast('Thanks! We will get back to you soon.'); }}><h2>Send Us a Message</h2><p>Fill out the form below and our team will get back to you as soon as possible.</p><div className="contact-fields"><input required placeholder="Your Name" /><input required type="email" placeholder="Your Email" /><input placeholder="Subject" /><textarea required placeholder="Your Message" /></div><Button type="submit" iconRight={Send}>{sent ? 'Message Sent' : 'Send Message'}</Button></form><div className="contact-map"><iframe title="Nexu Guru office location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111881.22561365883!2d80.4991393949702!3d28.80048128475436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a191573b4e00db%3A0x4b86058d676dd6c6!2sAttariya%2C%20Sudurpashchim%20Province%2010900%2C%20Nepal!5e0!3m2!1sen!2skr!4v1789145675963!5m2!1sen!2skr" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div></div>
      <section className="contact-faq"><p className="eyebrow">Frequently Asked Questions</p><h2>Quick Answers</h2><div className="contact-faq__grid">{quickAnswers.map((question) => <button key={question} type="button" onClick={() => toast('Please visit our FAQ page for the full answer.')}>{question}<ChevronDown /></button>)}</div><p className="contact-faq__help">Still have questions? Check our FAQ page or write to us directly. <Button variant="purple-outline" size="sm" to="/faq">Visit FAQ Page</Button></p></section>
    </div>
  </SitePage>;
}