export const contact = { phone: '+977 9762770136', email: 'contact@nexuguru.com' };
export const socials = ['facebook', 'x', 'instagram', 'linkedin', 'youtube', 'telegram'];

export const mainNav = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Study Materials', mega: true },
  { label: 'Smart School', to: null },
  { label: 'Blogs', to: '/blogs' },
  { label: 'News & Updates', to: '/news', optional: true },
  { label: 'Nexu Store', to: '/store' },
];

export const footerColumns = {
  company: { title: 'Company', links: [['About Us', '/about'], ['Contact Us', '/contact'], ['Blogs', '/blogs'], ['Careers'], ['Media Kit']] },
  centres: { title: 'NEXU Centres', links: [['Attariya'], ['Dhangadhi'], ['Kathmandu'], ['Butwal'], ['Pokhara']] },
  exams: { title: 'Popular Exams', links: [['SEE'], ['+2 (NEB)', '/class-12'], ['IOE', '/entrance'], ['CMAT', '/entrance'], ['CEE', '/entrance']] },
  connect: { title: 'Connect With Us', links: [['Mail Us', 'mailto:contact@nexuguru.com'], ['Talk to A Counsellor', '/contact']] },
  quick: { title: 'Quick Links', links: [['Study Materials', '/class-12'], ['Smart School'], ['Nexu Store', '/store'], ['FAQs', '/faq'], ['Doubt Support', '/report-issue']] },
  products: { title: 'Our Products', links: [['NEN Offline App'], ['Nexu Guru App'], ['Nexu Books']] },
};

export const footerAbout = {
  short: 'Nexu Guru is an e-learning platform committed to providing quality education to students across Nepal. Learn without limits.',
  long: 'We understand that every student has different needs and capabilities, which is why we create such a wonderful and unique curriculum that is the best fit for every student.',
};

/* Mega menu (Study Materials) */
export const megaMenu = {
  categories: [
    { id: 'c11', title: 'Class 11', desc: 'Science, Management, Computer Engineering', icon: 'book', to: '/class-12' },
    { id: 'c12', title: 'Class 12', desc: 'Science, Management, Computer Engineering', icon: 'book', to: '/class-12' },
    { id: 'ent', title: 'Entrance Preparation', desc: 'IOE, CEE & Other Entrance Exams', icon: 'target', to: '/entrance' },
  ],
  groups: [
    { title: 'Class 11', cols: 3, items: [
      { icon: 'flask', title: 'Science', desc: 'Physics, Chemistry, Biology, Math & Computer Science', to: '/class-12' },
      { icon: 'briefcase', title: 'Management', desc: 'Account, Economics, Business Studies & Mathematics', to: '/class-12' },
      { icon: 'monitor', title: 'Computer Engineering', desc: 'Engineering Mathematics, Physics, Programming & More', to: '/class-12' },
    ] },
    { title: 'Class 12', cols: 3, items: [
      { icon: 'flask', title: 'Science', desc: 'Physics, Chemistry, Biology, Math & Computer Science', to: '/class-12' },
      { icon: 'briefcase', title: 'Management', desc: 'Account, Economics, Business Studies & Mathematics', to: '/class-12' },
      { icon: 'monitor', title: 'Computer Engineering', desc: 'Engineering Mathematics, Physics, Programming & More', to: '/class-12' },
    ] },
    { title: 'Entrance Preparation', cols: 4, items: [
      { icon: 'landmark', title: 'IOE', desc: 'Engineering Entrance Preparation', to: '/entrance' },
      { icon: 'cap', title: 'CEE', desc: 'Common Entrance Examination Preparation', to: '/entrance' },
      { icon: 'file', title: 'Model Papers', desc: 'Full length model papers with solutions', to: '/entrance' },
      { icon: 'file', title: 'Previous Papers', desc: 'Previous year questions with solutions', to: '/entrance' },
    ] },
  ],
};
