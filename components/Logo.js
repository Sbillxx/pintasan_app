export default function Logo({ size = 32 }) {
  return (
    <svg viewBox="0 0 120 120" width={size} height={size} aria-hidden="true" className="mark">
      <rect width="120" height="120" rx="30" fill="#17171a" />
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M32 88V32H66" stroke="#6E6E73" strokeWidth="5" strokeDasharray="0.1 11" />
        <path d="M32 88L88 32M66 32H88V54" stroke="#FF7A45" strokeWidth="9" />
      </g>
      <circle cx="32" cy="88" r="8" fill="#F6F5F1" />
    </svg>
  );
}
