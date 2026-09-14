import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

/** Select-style dropdown used for sort/filter controls across the app. */
export default function Dropdown({ options, value, onChange, className = '', leading, placeholder, width }) {
  const [open, setOpen] = useState(false);
  const [internal, setInternal] = useState(value ?? (placeholder ? null : options[0]));
  const current = value !== undefined ? value : internal;
  const ref = useRef(null);
  useEffect(() => {
    const close = (e) => { if (!ref.current?.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);
  const pick = (o) => { setInternal(o); onChange?.(o); setOpen(false); };
  return (
    <div ref={ref} className={`dropdown ${open ? 'is-open' : ''} ${className}`} style={width ? { width } : undefined}>
      <button type="button" className="dropdown__trigger" aria-haspopup="listbox" aria-expanded={open} onClick={() => setOpen(!open)}>
        {leading}
        <span className="dropdown__value">{current ?? placeholder}</span>
        <ChevronDown />
      </button>
      {open && (
        <div className="dropdown__menu" role="listbox">
          {options.map((o) => <button key={o} type="button" className={o === current ? 'is-active' : ''} onClick={() => pick(o)}>{o}</button>)}
        </div>
      )}
    </div>
  );
}
