import { Link } from '../../lib/router.jsx';

/** variant: primary | outline | soft | danger | success | success-outline | orange | orange-outline | purple | purple-outline | yellow */
export default function Button({ variant = 'primary', size, pill, block, spread, to, icon: Icon, iconRight: IconRight, className = '', children, ...rest }) {
  const cls = ['btn', `btn--${variant}`, size && `btn--${size}`, pill && 'btn--pill', block && 'btn--block', spread && 'btn--spread', className].filter(Boolean).join(' ');
  const inner = <>{Icon && <Icon />}{children}{IconRight && <IconRight />}</>;
  if (to !== undefined) return <Link to={to} className={cls} {...rest}>{inner}</Link>;
  return <button type="button" className={cls} {...rest}>{inner}</button>;
}
