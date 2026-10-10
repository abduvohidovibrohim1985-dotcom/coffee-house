export default function Logo({ size = 30 }) {
  return (
    <span className="logo">
      <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
        <rect width="64" height="64" rx="16" fill="#d4ae85" />
        <path d="M16 28h26v9a13 13 0 0 1-13 13h0a13 13 0 0 1-13-13z" fill="#17100a" />
        <path d="M42 31h4a5 5 0 0 1 0 10h-4" fill="none" stroke="#17100a" strokeWidth="4" />
        <path d="M24 13c-2 3 2 4 0 8M32 11c-2 3 2 4 0 8" fill="none" stroke="#17100a" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <span className="logo-text">Qahva Uyi</span>
    </span>
  )
}
