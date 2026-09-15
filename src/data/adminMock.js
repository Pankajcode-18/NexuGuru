/* ── Mock Data for Nexu Guru Admin Dashboard ── */

export const adminStats = [
  { id: 's1', label: 'Total Students', value: '12,840', delta: '+18%', up: true, icon: '🎓', color: 'purple' },
  { id: 's2', label: 'Revenue (PKR)', value: '₨2.4M', delta: '+12%', up: true, icon: '💰', color: 'orange' },
  { id: 's3', label: 'Active Classes', value: '48', delta: '+3', up: true, icon: '📚', color: 'green' },
  { id: 's4', label: 'Total Teachers', value: '26', delta: '+2', up: true, icon: '👨‍🏫', color: 'blue' },
];

export const students = [
  { id: 1, name: 'Ali Hassan', email: 'ali@example.com', class: 'Class 12', status: 'Active', joined: 'Mar 2024', pkg: 'Full Bundle', avatar: 'A', color: 'purple' },
  { id: 2, name: 'Sara Ahmed', email: 'sara@example.com', class: 'Class 11', status: 'Active', joined: 'Jan 2024', pkg: 'Maths Only', avatar: 'S', color: 'orange' },
  { id: 3, name: 'Umar Farooq', email: 'umar@example.com', class: 'Class 10', status: 'Inactive', joined: 'Dec 2023', pkg: 'Free', avatar: 'U', color: 'blue' },
  { id: 4, name: 'Ayesha Khan', email: 'ayesha@example.com', class: 'Class 12', status: 'Active', joined: 'Feb 2024', pkg: 'Full Bundle', avatar: 'A', color: 'green' },
  { id: 5, name: 'Bilal Raza', email: 'bilal@example.com', class: 'Class 11', status: 'Suspended', joined: 'Nov 2023', pkg: 'Science Pack', avatar: 'B', color: 'red' },
  { id: 6, name: 'Hina Malik', email: 'hina@example.com', class: 'Class 10', status: 'Active', joined: 'Apr 2024', pkg: 'Full Bundle', avatar: 'H', color: 'purple' },
  { id: 7, name: 'Zain ul Abdin', email: 'zain@example.com', class: 'Class 12', status: 'Active', joined: 'Jan 2024', pkg: 'Maths Only', avatar: 'Z', color: 'blue' },
];

export const teachers = [
  { id: 1, name: 'Dr. Kamran Ali', subject: 'Physics', classes: ['Class 11', 'Class 12'], status: 'Active', videos: 142, students: 3840, avatar: 'K', color: 'purple' },
  { id: 2, name: 'Ms. Nadia Iqbal', subject: 'Chemistry', classes: ['Class 12'], status: 'Active', videos: 98, students: 2100, avatar: 'N', color: 'green' },
  { id: 3, name: 'Sir Tariq Awan', subject: 'Mathematics', classes: ['Class 10', 'Class 11'], status: 'Active', videos: 210, students: 5200, avatar: 'T', color: 'orange' },
  { id: 4, name: 'Ms. Rida Shah', subject: 'Biology', classes: ['Class 11', 'Class 12'], status: 'Active', videos: 76, students: 1900, avatar: 'R', color: 'blue' },
  { id: 5, name: 'Mr. Fawad Khan', subject: 'English', classes: ['Class 10', 'Class 11', 'Class 12'], status: 'Inactive', videos: 45, students: 800, avatar: 'F', color: 'red' },
];

export const classes = [
  { id: 1, name: 'Class 10', board: 'FBISE', subjects: 8, students: 4200, status: 'Active' },
  { id: 2, name: 'Class 11 (Pre-Medical)', board: 'FBISE', subjects: 5, students: 3800, status: 'Active' },
  { id: 3, name: 'Class 11 (Pre-Engineering)', board: 'FBISE', subjects: 5, students: 2100, status: 'Active' },
  { id: 4, name: 'Class 12 (Pre-Medical)', board: 'FBISE', subjects: 5, students: 3500, status: 'Active' },
  { id: 5, name: 'Class 12 (Pre-Engineering)', board: 'FBISE', subjects: 5, students: 2900, status: 'Active' },
  { id: 6, name: 'Entry Test Prep', board: 'MDCAT/ECAT', subjects: 4, students: 1800, status: 'Active' },
];

export const subjects = [
  { id: 1, name: 'Physics', class: 'Class 12', teacher: 'Dr. Kamran Ali', chapters: 14, status: 'Active', icon: '⚛️' },
  { id: 2, name: 'Chemistry', class: 'Class 12', teacher: 'Ms. Nadia Iqbal', chapters: 12, status: 'Active', icon: '🧪' },
  { id: 3, name: 'Mathematics', class: 'Class 12', teacher: 'Sir Tariq Awan', chapters: 16, status: 'Active', icon: '📐' },
  { id: 4, name: 'Biology', class: 'Class 11', teacher: 'Ms. Rida Shah', chapters: 11, status: 'Active', icon: '🧬' },
  { id: 5, name: 'English', class: 'Class 10', teacher: 'Mr. Fawad Khan', chapters: 8, status: 'Inactive', icon: '📝' },
  { id: 6, name: 'Pakistan Studies', class: 'Class 10', teacher: 'TBA', chapters: 6, status: 'Draft', icon: '🌍' },
];

export const chapters = [
  { id: 1, title: 'Motion and Force', subject: 'Physics', class: 'Class 12', notes: 4, videos: 8, mcqs: 40, status: 'Published', locked: false },
  { id: 2, title: 'Work, Energy & Power', subject: 'Physics', class: 'Class 12', notes: 3, videos: 6, mcqs: 35, status: 'Published', locked: false },
  { id: 3, title: 'Waves & Oscillations', subject: 'Physics', class: 'Class 12', notes: 2, videos: 5, mcqs: 30, status: 'Draft', locked: true },
  { id: 4, title: 'Thermodynamics', subject: 'Chemistry', class: 'Class 12', notes: 5, videos: 10, mcqs: 50, status: 'Published', locked: false },
  { id: 5, title: 'Organic Chemistry', subject: 'Chemistry', class: 'Class 12', notes: 6, videos: 12, mcqs: 60, status: 'Published', locked: true },
];

export const videos = [
  { id: 1, title: 'Introduction to Motion', chapter: 'Motion and Force', subject: 'Physics', teacher: 'Dr. Kamran', duration: '28:14', views: 4200, status: 'Published', thumb: '🎥' },
  { id: 2, title: 'Newton\'s Laws Explained', chapter: 'Motion and Force', subject: 'Physics', teacher: 'Dr. Kamran', duration: '35:00', views: 3800, status: 'Published', thumb: '🎥' },
  { id: 3, title: 'Organic Reactions Overview', chapter: 'Organic Chemistry', subject: 'Chemistry', teacher: 'Ms. Nadia', duration: '42:08', views: 2100, status: 'Draft', thumb: '🎥' },
  { id: 4, title: 'Calculus Fundamentals', chapter: 'Integration', subject: 'Mathematics', teacher: 'Sir Tariq', duration: '55:20', views: 5600, status: 'Published', thumb: '🎥' },
];

export const notes = [
  { id: 1, title: 'Chapter 1 – Motion Notes', chapter: 'Motion and Force', subject: 'Physics', type: 'Handwritten', pages: 12, downloads: 1840, status: 'Published' },
  { id: 2, title: 'Organic Chemistry Summary', chapter: 'Organic Chemistry', subject: 'Chemistry', type: 'Typed', pages: 8, downloads: 2200, status: 'Published' },
  { id: 3, title: 'Integration Formula Sheet', chapter: 'Integration', subject: 'Mathematics', type: 'Handwritten', pages: 6, downloads: 3100, status: 'Draft' },
  { id: 4, title: 'Cell Biology Key Points', chapter: 'Cell Biology', subject: 'Biology', type: 'Typed', pages: 10, downloads: 900, status: 'Published' },
];

export const stickyNotes = [
  { id: 1, title: 'Important Equations', content: 'Remember F=ma, v=u+at, v²=u²+2as', color: '#ffd166', chapter: 'Motion', subject: 'Physics' },
  { id: 2, title: 'Naming Rules', content: 'IUPAC naming: suffix -ane, -ene, -yne for alkanes, alkenes, alkynes', color: '#06d6a0', chapter: 'Organic Chemistry', subject: 'Chemistry' },
  { id: 3, title: 'Maths Tip', content: 'When integrating, always add +C for indefinite integrals', color: '#a8dadc', chapter: 'Integration', subject: 'Mathematics' },
];

export const mcqSets = [
  { id: 1, title: 'Physics Chapter 1 Live MCQ', chapter: 'Motion', subject: 'Physics', questions: 30, duration: '20 min', participants: 342, status: 'Active', date: '2024-03-15' },
  { id: 2, title: 'Chemistry Organic MCQ', chapter: 'Organic Chemistry', subject: 'Chemistry', questions: 25, duration: '15 min', participants: 210, status: 'Ended', date: '2024-03-10' },
  { id: 3, title: 'Mathematics Integration Quiz', chapter: 'Integration', subject: 'Mathematics', questions: 20, duration: '25 min', participants: 0, status: 'Scheduled', date: '2024-03-20' },
];

export const importantQuestions = [
  { id: 1, question: 'Derive the equations of motion from first principles.', chapter: 'Motion', subject: 'Physics', marks: 10, year: '2023', frequency: 'High' },
  { id: 2, question: 'Explain the mechanism of SN1 and SN2 reactions.', chapter: 'Organic Chemistry', subject: 'Chemistry', marks: 8, year: '2023', frequency: 'High' },
  { id: 3, question: 'Evaluate ∫x²eˣ dx using integration by parts.', chapter: 'Integration', subject: 'Mathematics', marks: 5, year: '2022', frequency: 'Medium' },
];

export const pastPapers = [
  { id: 1, title: 'Physics Annual 2023', class: 'Class 12', board: 'FBISE', year: 2023, downloads: 4200, type: 'Annual', status: 'Published' },
  { id: 2, title: 'Chemistry Supply 2023', class: 'Class 12', board: 'FBISE', year: 2023, downloads: 1800, type: 'Supplementary', status: 'Published' },
  { id: 3, title: 'Mathematics Annual 2022', class: 'Class 11', board: 'FBISE', year: 2022, downloads: 3600, type: 'Annual', status: 'Published' },
  { id: 4, title: 'Biology Annual 2023', class: 'Class 11', board: 'Punjab', year: 2023, downloads: 2100, type: 'Annual', status: 'Draft' },
];

export const packages = [
  { id: 1, name: 'Full Bundle – Class 12', price: 2999, originalPrice: 4999, subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'English'], students: 1840, status: 'Active', featured: true },
  { id: 2, name: 'Science Pack – Class 12', price: 1999, originalPrice: 3499, subjects: ['Physics', 'Chemistry', 'Biology'], students: 940, status: 'Active', featured: false },
  { id: 3, name: 'Maths Only – Class 11', price: 999, originalPrice: 1499, subjects: ['Mathematics'], students: 620, status: 'Active', featured: false },
  { id: 4, name: 'Entry Test Bundle', price: 3499, originalPrice: 5999, subjects: ['Physics', 'Chemistry', 'Biology', 'English'], students: 420, status: 'Draft', featured: false },
];

export const coupons = [
  { id: 1, code: 'SAVE30', type: 'Percent', value: 30, minOrder: 1000, uses: 142, maxUses: 500, expiry: '2024-05-01', status: 'Active' },
  { id: 2, code: 'FLAT500', type: 'Fixed', value: 500, minOrder: 2000, uses: 68, maxUses: 200, expiry: '2024-04-15', status: 'Active' },
  { id: 3, code: 'WELCOME20', type: 'Percent', value: 20, minOrder: 0, uses: 890, maxUses: 1000, expiry: '2024-06-30', status: 'Active' },
  { id: 4, code: 'SUMMER50', type: 'Percent', value: 50, minOrder: 1500, uses: 200, maxUses: 200, expiry: '2024-03-01', status: 'Expired' },
];

export const payments = [
  { id: 1, student: 'Ali Hassan', pkg: 'Full Bundle – Class 12', amount: 2099, method: 'JazzCash', date: '2024-03-14', status: 'Paid', txId: 'JC-882341' },
  { id: 2, student: 'Sara Ahmed', pkg: 'Maths Only – Class 11', amount: 699, method: 'EasyPaisa', date: '2024-03-13', status: 'Paid', txId: 'EP-442190' },
  { id: 3, student: 'Bilal Raza', pkg: 'Full Bundle – Class 12', amount: 2999, method: 'Card', date: '2024-03-13', status: 'Pending', txId: 'CD-118823' },
  { id: 4, student: 'Hina Malik', pkg: 'Science Pack – Class 12', amount: 1399, method: 'JazzCash', date: '2024-03-12', status: 'Paid', txId: 'JC-774556' },
  { id: 5, student: 'Zain ul Abdin', pkg: 'Maths Only – Class 11', amount: 999, method: 'EasyPaisa', date: '2024-03-11', status: 'Failed', txId: 'EP-221048' },
];

export const blogs = [
  { id: 1, title: 'How to Study Physics Effectively', author: 'Dr. Kamran Ali', category: 'Study Tips', date: '2024-03-10', views: 4200, status: 'Published' },
  { id: 2, title: 'Top 10 MDCAT Preparation Tips', author: 'Admin', category: 'Entrance Test', date: '2024-03-05', views: 8100, status: 'Published' },
  { id: 3, title: 'Understanding Organic Chemistry Basics', author: 'Ms. Nadia Iqbal', category: 'Chemistry', date: '2024-02-28', views: 3400, status: 'Draft' },
];

export const reviews = [
  { id: 1, student: 'Ali Hassan', rating: 5, text: 'Best platform for FSc preparation! The video quality is excellent.', date: '2024-03-14', status: 'Approved', subject: 'Physics' },
  { id: 2, student: 'Sara Ahmed', rating: 4, text: 'Very helpful notes and practice questions. Highly recommended.', date: '2024-03-12', status: 'Approved', subject: 'Chemistry' },
  { id: 3, student: 'Unknown', rating: 1, text: 'Spam review content here...', date: '2024-03-11', status: 'Pending', subject: 'General' },
  { id: 4, student: 'Hina Malik', rating: 5, text: 'Sir Tariq\'s math videos saved my exams. Absolutely brilliant!', date: '2024-03-10', status: 'Approved', subject: 'Mathematics' },
];

export const reportedIssues = [
  { id: 1, student: 'Bilal Raza', type: 'Video not loading', description: 'Physics chapter 2 video is not loading on mobile', date: '2024-03-13', status: 'Open', priority: 'High' },
  { id: 2, student: 'Ali Hassan', type: 'Payment issue', description: 'Payment deducted but subscription not activated', date: '2024-03-12', status: 'In Progress', priority: 'Critical' },
  { id: 3, student: 'Ayesha Khan', type: 'Wrong answer in MCQ', description: 'MCQ #14 in Physics Ch1 has incorrect answer key', date: '2024-03-10', status: 'Resolved', priority: 'Medium' },
  { id: 4, student: 'Umar Farooq', type: 'Note download failing', description: 'Chemistry notes PDF gives 404 error', date: '2024-03-09', status: 'Open', priority: 'Low' },
];

export const recentActivity = [
  { id: 1, text: 'Ali Hassan enrolled in Full Bundle – Class 12', time: '5 min ago', dot: 'green' },
  { id: 2, text: 'Dr. Kamran uploaded a new video in Motion chapter', time: '22 min ago', dot: 'purple' },
  { id: 3, text: 'Sara Ahmed reported a payment issue', time: '1 hr ago', dot: 'orange' },
  { id: 4, text: 'Coupon SAVE30 used 5 times today', time: '2 hr ago', dot: 'blue' },
  { id: 5, text: 'Ms. Nadia Iqbal added 3 new MCQs to Chemistry', time: '3 hr ago', dot: 'purple' },
  { id: 6, text: 'New review submitted by Hina Malik (⭐⭐⭐⭐⭐)', time: '4 hr ago', dot: 'green' },
];

export const revenueData = [38, 52, 45, 70, 65, 80, 92, 78, 88, 95, 72, 100];
export const revenueMonths = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'];

export const siteSettings = {
  siteName: 'Nexu Guru',
  tagline: 'Learn Smart, Score High',
  contactEmail: 'info@nexuguru.com',
  contactPhone: '+92 321 1234567',
  address: 'Islamabad, Pakistan',
  primaryColor: '#43169b',
  accentColor: '#ff6b35',
  maintenanceMode: false,
  allowRegistration: true,
  enableReviews: true,
};

export const homepageContent = {
  heroTitle: 'Learn from Pakistan\'s Best Teachers',
  heroSubtitle: 'FSc, Matric & Entry Test preparation with top-quality video lectures, notes & MCQs',
  heroCTA: 'Start Learning Free',
  statsStudents: '12,840+',
  statsVideos: '500+',
  statsTeachers: '26+',
};
