import { useEffect, useState } from 'react';

/* Tiny global toast used to acknowledge mock actions (no backend yet). */
let push = () => {};
export const toast = (msg) => push(msg);

export default function ToastHost() {
  const [msg, setMsg] = useState(null);
  useEffect(() => {
    let t;
    push = (m) => { setMsg(m); clearTimeout(t); t = setTimeout(() => setMsg(null), 2200); };
    return () => clearTimeout(t);
  }, []);
  return msg ? <div className="toast" role="status">{msg}</div> : null;
}
