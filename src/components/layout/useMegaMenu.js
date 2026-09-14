import { useEffect, useRef, useState } from 'react';

/* Open on hover (with a small close delay) or click; closes on Escape / outside click. */
export default function useMegaMenu() {
  const [open, setOpen] = useState(false);
  const timer = useRef();
  const openedAt = useRef(0);
  const root = useRef(null);
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    const onDown = (e) => { if (!root.current?.contains(e.target)) setOpen(false); };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onDown);
    return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('mousedown', onDown); };
  }, []);
  const hover = {
    onMouseEnter: () => { clearTimeout(timer.current); setOpen((o) => { if (!o) openedAt.current = Date.now(); return true; }); },
    onMouseLeave: () => { timer.current = setTimeout(() => setOpen(false), 180); },
  };
  return { open, setOpen, hover, root, // a click right after hover-open should not immediately close the menu
    toggle: () => setOpen((o) => { if (o && Date.now() - openedAt.current < 400) return true; if (!o) openedAt.current = Date.now(); return !o; }), close: () => setOpen(false) };
}
