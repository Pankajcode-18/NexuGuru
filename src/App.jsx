import { useRoute } from './lib/router.jsx';
import ToastHost from './components/ui/Toast.jsx';
import ChatWidget from './components/chatbot/ChatWidget.jsx';
import * as P from './pages/index.js';

/* Route table – one entry per reference screen */
export const routes = {
  '/': P.Home,
  '/about': P.About,
  '/blogs': P.Blog,
  '/news': P.NewsUpdates,
  '/store': P.Store,
  '/faq': P.FAQ,
  '/contact': P.Contact,
  '/privacy-policy': P.PrivacyPolicy,
  '/terms': P.Terms,
  '/refund-policy': P.RefundPolicy,
  '/entrance': P.Entrance,
  '/checkout': P.Checkout,
  '/class-12': P.ClassNotes,
  '/notes': P.HandwrittenNotes,
  '/videos': P.ChapterVideos,
  '/live-mcq': P.LiveMCQ,
  '/important-questions': P.ImportantQuestions,
  '/sticky-notes': P.StickyNotes,
  '/chapter-locked': P.ChapterLocked,
  '/report-issue': P.ReportIssue,
  '/profile': P.Profile,
  '/login': P.Login,
  '/register': P.Register,
  '/screens': P.ScreenIndex,
  '/admin': P.AdminDashboard,
  '/smart-school': P.SmartSchool,
};

export default function App() {
  const path = useRoute();
  const Page = routes[path.split('?')[0]] ?? P.Home;
  /* Hide chatbot on the admin dashboard */
  const showChat = !path.startsWith('/admin');
  return (
    <>
      <Page />
      <ToastHost />
      {showChat && <ChatWidget />}
    </>
  );
}

