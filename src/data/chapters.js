/* Class 12 Physics – mock syllabus used by the chapter sidebar */
export const chapters = [
  'Electric Charges and Fields', 'Electrostatic Potential', 'Current Electricity', 'Moving Charges and Magnetism',
  'Magnetism and Matter', 'Electromagnetic Induction', 'Alternating Current', 'Electromagnetic Waves',
];

/* Resource sections inside a chapter. `icon` keys map to the sidebar icon set. */
export const chapterSections = [
  { id: 'notes', label: 'Notes', icon: 'notes', subIcon: 'chevron', items: [
    { id: 'handwritten', label: 'Handwritten & Typed', to: '/notes' },
    { id: 'ppt', label: 'PPT Slides (For Teacher)', to: '/notes' },
    { id: 'videos', label: 'Videos', to: '/videos', icon: 'play' },
  ] },
  { id: 'mcq', label: 'MCQ', icon: 'mcq', subIcon: 'play', items: [
    { id: 'live', label: 'Live MCQ', to: '/live-mcq' },
    { id: 'chapterwise', label: 'Chapterwise MCQ', to: '/live-mcq' },
    { id: 'previous', label: 'Previous Year MCQ', to: '/live-mcq' },
  ] },
  { id: 'iq', label: 'Important Questions', icon: 'iq', subIcon: 'arrow', items: [
    { id: 'very-short', label: 'Very Short (5)', to: '/important-questions' },
    { id: 'short', label: 'Short (10)', to: '/important-questions' },
    { id: 'long', label: 'Long (15)', to: '/important-questions' },
  ] },
  { id: 'sticky', label: 'Sticky Notes', icon: 'sticky', subIcon: 'arrow', items: [
    { id: 'all', label: 'All Sticky Notes', to: '/sticky-notes' },
    { id: 'formula', label: 'Formula Notes', to: '/sticky-notes' },
    { id: 'concept', label: 'Concept Notes', to: '/sticky-notes' },
    { id: 'diagram', label: 'Diagram Notes', to: '/sticky-notes' },
  ] },
];

export const moreSubjects = ['Physics', 'Chemistry', 'Biology', 'Mathematics', 'English', 'Computer Science'];

export const extraContent = [
  { icon: 'papers', title: 'Past Question Papers', desc: 'Previous year papers with solutions' },
  { icon: 'model', title: 'Model Question Papers', desc: 'Practice with model papers' },
  { icon: 'lab', title: 'Lab Practical', desc: 'Practical manuals & viva questions' },
];
