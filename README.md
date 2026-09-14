# Nexu Guru – Phase 1 Frontend Prototype

React 18 + Vite 5, plain CSS with design tokens, lucide icons, Poppins (bundled). Mock data only – no backend.

## Run
```bash
npm install
npm run dev            # http://localhost:5173
npm run build          # production build in dist/
npm run build:single   # one self-contained dist/index.html
```

## Screens (hash routes)
| Route | Reference screen |
|---|---|
| `#/` | Home + Study Materials mega menu (hover/click) |
| `#/about` · `#/blogs` · `#/faq` | About Us · Blog · FAQ |
| `#/privacy-policy` · `#/terms` · `#/refund-policy` | Policy pages |
| `#/entrance` · `#/checkout` · `#/class-12` | Entrance, Checkout, Class 12 Important Notes |
| `#/notes` · `#/videos` · `#/live-mcq` | Handwritten notes (PDF viewer), Chapter videos, Live MCQ |
| `#/important-questions` · `#/sticky-notes` · `#/chapter-locked` | Important Q&A, Sticky notes, Locked chapter + plans |
| `#/report-issue` · `#/profile` · `#/login` · `#/register` | Report issue, Dashboard profile, Auth |
| `#/screens` | Prototype-only index of all screens (not linked in the UI) |

## Structure
```
src/
  components/
    ui/        Button, Dropdown, SegTabs, Progress, Breadcrumb, Logo, Toast
    layout/    TopBar, SiteHeader, MegaMenu, SiteFooter, StudyHeader, StudyFooter, StudyShell, SitePage
    study/     ChapterSidebar, AsideWidgets (QuickActions, StudyProgress, NeedHelp), StudyBottom
    site/      PageHero, PolicySections (OnThisPage, InfoBanner, PolicyList), Reviews
    icons/     Brand.jsx (social / store / Google / Apple marks)
  pages/       one file per screen
  data/        site.js (nav, footer, mega menu, contact), chapters.js
  styles/      tokens.css → base → ui → layouts → page groups
  assets/      images cropped from the reference screenshots
```
Two colour systems live in `styles/tokens.css`: `--indigo` for learning pages and `--purple` for marketing pages.

## Notes for Phase 2
- **Images** in `src/assets/` were cropped from the screenshots so the prototype matches them; replace with original artwork using the same file names.
- Interactive demo behaviour: mega menu, dropdown filters, search, tabs, accordions, MCQ answering/palette/timer, PDF zoom/rotate/page/thumbnail toggle, plan and payment selection, coupon (`NEXU10`), form validation, password visibility/strength, sidebar collapse and dark toggle on the profile page. Actions that need a server show a small toast.
- Router is a minimal hash router (`src/lib/router.jsx`) – swap for react-router when the backend is added.
- Where a screenshot hid content (e.g. the home hero behind the open mega menu), the smallest reasonable completion was used.
