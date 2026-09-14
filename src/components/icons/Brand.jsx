/* Brand marks are not in lucide – drawn here as small inline SVGs. */
const S = ({ children, size = 18, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...p}>{children}</svg>
);

export const Facebook = (p) => <S {...p}><path fill="currentColor" d="M13.6 21.5v-8.1h2.8l.4-3.3h-3.2V8c0-.9.3-1.6 1.6-1.6h1.7V3.5c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.4v3.3h2.8v8.1z"/></S>;
export const XLogo = (p) => <S {...p}><path fill="currentColor" d="M17.8 3h3.1l-6.8 7.8L22 21h-6.2l-4.9-6.4L5.3 21H2.2l7.3-8.3L1.8 3h6.4l4.4 5.8zm-1.1 16.2h1.7L7.4 4.7H5.6z"/></S>;
export const Instagram = (p) => <S {...p}><g fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/></g><circle cx="17.4" cy="6.6" r="1.2" fill="currentColor"/></S>;
export const Youtube = (p) => <S {...p}><path fill="currentColor" fillRule="evenodd" d="M22.5 7.2a2.8 2.8 0 0 0-2-2c-1.8-.5-8.5-.5-8.5-.5s-6.7 0-8.5.5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 1 12a29 29 0 0 0 .5 4.8 2.8 2.8 0 0 0 2 2c1.8.5 8.5.5 8.5.5s6.7 0 8.5-.5a2.8 2.8 0 0 0 2-2A29 29 0 0 0 23 12a29 29 0 0 0-.5-4.8zM10 15.2V8.8l5.5 3.2z"/></S>;
export const Linkedin = (p) => <S {...p}><path fill="currentColor" d="M5 3.3a2.1 2.1 0 1 1 0 4.2 2.1 2.1 0 0 1 0-4.2zM3.2 9.2h3.6V21H3.2zm6 0h3.4v1.6h.1c.5-.9 1.7-1.9 3.4-1.9 3.7 0 4.4 2.4 4.4 5.6V21h-3.6v-5.8c0-1.4 0-3.2-2-3.2s-2.2 1.5-2.2 3.1V21H9.2z"/></S>;
export const Telegram = (p) => <S {...p}><path fill="currentColor" d="M21.6 4.2 18.5 19c-.2 1-.9 1.3-1.7.8l-4.8-3.5-2.3 2.2c-.3.3-.5.5-1 .5l.3-4.9 8.9-8c.4-.3-.1-.5-.6-.2L6.3 12.8l-4.7-1.5c-1-.3-1-1 .2-1.5L20.3 2.7c.9-.3 1.6.2 1.3 1.5z"/></S>;
export const Google = (p) => <S {...p}>
  <path fill="#4285F4" d="M22.6 12.3c0-.8-.1-1.5-.2-2.3H12v4.3h5.9a5 5 0 0 1-2.2 3.3v2.8h3.6c2.1-1.9 3.3-4.8 3.3-8.1z"/>
  <path fill="#34A853" d="M12 23c3 0 5.5-1 7.3-2.7l-3.6-2.8c-1 .7-2.2 1.1-3.7 1.1a6.5 6.5 0 0 1-6.1-4.5H2.2v2.9A11 11 0 0 0 12 23z"/>
  <path fill="#FBBC05" d="M5.9 14.1a6.6 6.6 0 0 1 0-4.2V7H2.2a11 11 0 0 0 0 10z"/>
  <path fill="#EA4335" d="M12 5.4c1.6 0 3.1.6 4.3 1.7l3.2-3.2A11 11 0 0 0 2.2 7l3.7 2.9A6.5 6.5 0 0 1 12 5.4z"/></S>;
export const FacebookColor = (p) => <S {...p}><circle cx="12" cy="12" r="11" fill="#1877F2"/><path fill="#fff" d="M13.3 23v-7.8h2.6l.4-3h-3V10.3c0-.9.2-1.5 1.5-1.5h1.6V6.1c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.6v3h2.6V23z"/></S>;
export const Apple = (p) => <S {...p}><path fill="currentColor" d="M16.4 12.7c0-2.6 2.1-3.8 2.2-3.9a4.8 4.8 0 0 0-3.7-2c-1.6-.2-3.1.9-3.9.9-.8 0-2-.9-3.3-.9a5 5 0 0 0-4.2 2.6c-1.8 3.1-.5 7.7 1.3 10.2.8 1.2 1.9 2.6 3.2 2.6 1.3-.1 1.8-.8 3.3-.8s2 .8 3.4.8c1.4 0 2.3-1.3 3.1-2.5a11 11 0 0 0 1.4-2.9s-2.8-1-2.8-4.1zM13.9 5.1c.7-.9 1.2-2 1.1-3.2-1 0-2.3.7-3 1.5-.7.8-1.3 2-1.1 3.1 1.1.1 2.3-.6 3-1.4z"/></S>;
export const GooglePlay = (p) => <S {...p}>
  <path fill="#00C3FF" d="M3.6 2.3 13.4 12l-9.8 9.7a1.3 1.3 0 0 1-.6-1.1V3.4c0-.5.2-.9.6-1.1z"/>
  <path fill="#00E676" d="M16.8 8.6 13.4 12 3.6 2.3c.3-.1.6-.1.9.1z"/>
  <path fill="#FF3D57" d="M16.8 15.4 4.5 21.6c-.3.2-.6.2-.9.1l9.8-9.7z"/>
  <path fill="#FFD400" d="M20.4 10.6c.8.5.8 2.3 0 2.8l-3.6 2-3.4-3.4 3.4-3.4z"/></S>;

export const socialIcons = { facebook: Facebook, x: XLogo, instagram: Instagram, linkedin: Linkedin, youtube: Youtube, telegram: Telegram };
