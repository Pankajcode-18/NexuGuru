import { Star } from 'lucide-react';

export const Stars = ({ n = 5 }) => <span className="stars" aria-label={`${n} out of 5 stars`}>{Array.from({ length: n }, (_, i) => <Star key={i} />)}</span>;
