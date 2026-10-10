const paths = {
  search: <><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /></>,
  cart: <><path d="M3 4h2l2.2 11h10.6L20 7H6" /><circle cx="9" cy="19" r="1.4" /><circle cx="17" cy="19" r="1.4" /></>,
  arrow: <path d="M4 12h15M13 6l6 6-6 6" />,
  back: <path d="M20 12H5M11 6l-6 6 6 6" />,
  close: <path d="M5 5l14 14M19 5L5 19" />,
  wifi: <><path d="M3 9a14 14 0 0 1 18 0M6 13a9 9 0 0 1 12 0M9.5 16.5a4 4 0 0 1 5 0" /><circle cx="12" cy="20" r=".6" /></>,
  leaf: <><path d="M5 19c0-9 5-14 15-14 0 10-5 15-14 15" /><path d="M5 19c3-5 6-8 10-10" /></>,
  bag: <><path d="M5 8h14l-1 12H6z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" /></>,
  music: <><path d="M9 18V6l10-2v12" /><circle cx="7" cy="18" r="2.2" /><circle cx="17" cy="16" r="2.2" /></>,
  instagram: <><rect x="4" y="4" width="16" height="16" rx="5" /><circle cx="12" cy="12" r="3.6" /><circle cx="17" cy="7" r=".6" /></>,
  telegram: <path d="M21 4L3 11l5 2 2 6 3-4 5 4z" />,
  facebook: <path d="M14 21v-8h3l.5-3.5H14V7.6c0-1 .4-1.6 1.7-1.6H18V3a22 22 0 0 0-2.7-.2C12.6 2.8 10.5 4.4 10.5 7.3V9.5H7.5V13h3v8z" />,
  youtube: <><rect x="3" y="6" width="18" height="12" rx="4" /><path d="M10.5 9.5v5l4-2.5z" /></>,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21c1-4 4-6 8-6s7 2 8 6" /></>,
  up: <path d="M12 20V5M6 11l6-6 6 6" />,
}

export default function Icon({ name, size = 22, className = '' }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

export function Stars({ n = 5 }) {
  return (
    <span className="stars" role="img" aria-label={`${n} yulduz`}>
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2l3 6.6 7.2.8-5.4 4.9 1.5 7.1L12 17.7 5.7 21.4l1.5-7.1L1.8 9.4 9 8.6z" />
        </svg>
      ))}
    </span>
  )
}
