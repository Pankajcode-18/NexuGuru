import { useEffect, useState } from 'react';

/* Minimal hash router – keeps the prototype dependency-free and lets the
   single-file build work from file:// or a preview frame. Swap for
   react-router when the real app is wired up. */
const read = () => window.location.hash.replace(/^#/, '') || '/';

export function useRoute() {
  const [path, setPath] = useState(read);
  useEffect(() => {
    const onChange = () => { setPath(read()); window.scrollTo(0, 0); };
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  return path;
}

export const navigate = (to) => { window.location.hash = to; };

export function Link({ to, children, onClick, ...rest }) {
  if (!to) return <a href="#" onClick={(e) => { e.preventDefault(); onClick?.(e); }} {...rest}>{children}</a>;
  return <a href={`#${to}`} onClick={onClick} {...rest}>{children}</a>;
}

export const scrollToId = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
