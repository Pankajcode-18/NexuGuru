/* ─────────────────────────────────────────────────────────────────
   botReplies.js  –  keyword-to-reply map for Nexu Guru chatbot
   Edit answers here without touching any UI file.
───────────────────────────────────────────────────────────────── */

export const QUICK_CHIPS = [
  'Find notes',
  'Class 12 courses',
  'Live MCQ schedule',
  'Payment help',
  'Talk to a teacher',
];

export const WELCOME_MSG =
  "Hi! 👋 I'm **Nexu Guru Assistant**. How can I help you today?";

/* Each rule:
   keywords – array of lowercase substrings to match
   text      – reply text (markdown **bold** is rendered)
   link      – optional { label, to } CTA button
   chips     – whether to show quick chips after the reply
*/
export const REPLY_RULES = [
  {
    keywords: ['hi', 'hello', 'hey', 'namaste', 'assalam', 'salam'],
    text: "Hello! 😊 Great to see you here. I'm here to help you with notes, videos, MCQs, pricing, and more.",
    chips: true,
  },
  {
    keywords: ['thank', 'thanks', 'shukriya', 'shukria'],
    text: "Happy to help! 🙌 Is there anything else I can assist you with?",
    chips: true,
  },
  {
    keywords: ['note', 'pdf', 'handwritten', 'chapter note'],
    text: "Notes are available **chapter-wise** for Class 10, 11 & 12. Tap below to browse all subjects.",
    link: { label: '📄 Browse Notes', to: '/notes' },
    chips: true,
  },
  {
    keywords: ['video', 'lecture', 'watch', 'lesson'],
    text: "We have **high-quality video lectures** taught by top teachers. New videos are added every week!",
    link: { label: '🎥 Watch Videos', to: '/videos' },
    chips: true,
  },
  {
    keywords: ['mcq', 'test', 'quiz', 'practice'],
    text: "Try our **Live MCQ** sessions and chapter-wise practice sets with instant results and explanations.",
    link: { label: '❓ Go to Live MCQ', to: '/live-mcq' },
    chips: true,
  },
  {
    keywords: ['class 12', 'class12', '12th', 'intermediate', 'fsc', 'f.sc'],
    text: "**Class 12** covers Physics, Chemistry, Maths, Biology, English and more — fully exam-focused content.",
    link: { label: '📚 Explore Class 12', to: '/class-12' },
    chips: true,
  },
  {
    keywords: ['class 11', 'class11', '11th', 'first year'],
    text: "**Class 11** subjects include Physics, Chemistry, Biology, Maths, and English — all chapter-wise.",
    link: { label: '📚 Explore Class 11', to: '/class-12' },
    chips: true,
  },
  {
    keywords: ['class 10', 'class10', '10th', 'matric', 'matriculation'],
    text: "**Class 10** (Matric) includes all core subjects with notes, videos, MCQs and past papers.",
    link: { label: '📚 Explore Class 10', to: '/class-12' },
    chips: true,
  },
  {
    keywords: ['entrance', 'mdcat', 'ecat', 'ioe', 'cee', 'entry test'],
    text: "Our **Entrance Test Prep** package covers MDCAT, ECAT and more with full-length mocks and important questions.",
    link: { label: '🎯 Entrance Preparation', to: '/entrance' },
    chips: true,
  },
  {
    keywords: ['price', 'fee', 'cost', 'plan', 'subscription', 'package', 'paid', 'how much'],
    text: "We offer three flexible plans:\n• **1 Month** – ₨199\n• **6 Months** – ₨699\n• **1 Year** – ₨999\n\nAll plans include unlimited access to notes, videos & MCQs.",
    link: { label: '💳 View Plans', to: '/store' },
    chips: true,
  },
  {
    keywords: ['payment', 'esewa', 'khalti', 'jazzcash', 'easypaisa', 'refund', 'pay'],
    text: "We accept **JazzCash, EasyPaisa, Bank Card** and more. If you're unsatisfied, we offer a **7-day refund** window.",
    link: { label: '↩️ Refund Policy', to: '/refund-policy' },
    chips: true,
  },
  {
    keywords: ['login', 'password', 'forgot', 'reset', 'account', 'sign in', 'signin'],
    text: "To reset your password, click **Forgot Password** on the login page and follow the email link. It takes under a minute!",
    link: { label: '🔐 Go to Login', to: '/login' },
    chips: true,
  },
  {
    keywords: ['teacher', 'doubt', 'help', 'support', 'contact', 'talk', 'human', 'staff'],
    text: "Our team is here for you! 📞 **+92 321 1234567**\nYou can also report an issue and a teacher will respond within 24 hrs.",
    link: { label: '🚨 Report an Issue', to: '/report-issue' },
    chips: true,
  },
  {
    keywords: ['blog', 'article', 'news', 'update'],
    text: "Check out our latest **blogs and study tips** written by expert teachers!",
    link: { label: '✍️ Read Blogs', to: '/blogs' },
    chips: true,
  },
  {
    keywords: ['register', 'sign up', 'signup', 'join', 'create account'],
    text: "Creating an account is **free and takes 30 seconds**. Jump in and start exploring!",
    link: { label: '✨ Register Now', to: '/register' },
    chips: true,
  },
  {
    keywords: ['sticky', 'sticky note', 'quick note'],
    text: "**Sticky Notes** are bite-sized key-point cards per chapter — perfect for last-minute revision!",
    link: { label: '🗒️ Sticky Notes', to: '/sticky-notes' },
    chips: true,
  },
  {
    keywords: ['important question', 'imp question', 'guess paper', 'key question'],
    text: "Our **Important Questions** are curated by teachers from past board papers — high-frequency, exam-focused.",
    link: { label: '⭐ Important Questions', to: '/important-questions' },
    chips: true,
  },
  {
    keywords: ['past paper', 'old paper', 'previous paper', 'board paper'],
    text: "We have **past board papers** going back multiple years with solutions for all major boards.",
    link: { label: '🗂️ Past Papers', to: '/notes' },
    chips: true,
  },
];

export const FALLBACK_REPLY = {
  text: "I'm not sure about that one 🤔 but our support team will know! Reach us at **contact@nexuguru.com**.",
  link: { label: '📬 Contact Support', to: '/contact' },
  chips: true,
};

/* Quick chip → keyword mapper */
export const CHIP_MAP = {
  'Find notes': 'note',
  'Class 12 courses': 'class 12',
  'Live MCQ schedule': 'mcq',
  'Payment help': 'payment',
  'Talk to a teacher': 'teacher',
};

export function getBotReply(userText) {
  const lower = userText.toLowerCase();
  for (const rule of REPLY_RULES) {
    if (rule.keywords.some((kw) => lower.includes(kw))) return rule;
  }
  return FALLBACK_REPLY;
}
