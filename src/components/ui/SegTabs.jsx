export default function SegTabs({ tabs, value, onChange, className = '' }) {
  return (
    <div className={`segtabs ${className}`} role="tablist">
      {tabs.map((t) => (
        <button key={t} type="button" role="tab" aria-selected={t === value} className={t === value ? 'is-active' : ''} onClick={() => onChange(t)}>{t}</button>
      ))}
    </div>
  );
}
