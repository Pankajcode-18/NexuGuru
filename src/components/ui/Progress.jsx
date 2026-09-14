export default function Progress({ value, className = '', style }) {
  return <div className={`progress ${className}`} style={style} role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100}><span style={{ width: `${value}%` }} /></div>;
}
