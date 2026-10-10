// Ichimlik rasmlari SVG ko'rinishida (haqiqiy rasm o'rniga)
export default function DrinkArt({ art = {}, bg = 'dark', steam = true }) {
  const { liquid = '#3d2010', heart, crema, swirl, small } = art
  const s = small ? 0.82 : 1
  return (
    <svg viewBox="0 0 200 200" className="drink" role="img" aria-label="Qahva ichimligi">
      <defs>
        <radialGradient id={`g-${bg}`} cx="50%" cy="45%" r="70%">
          <stop offset="0" stopColor={bg === 'dark' ? '#4a3220' : '#e9d8b8'} />
          <stop offset="1" stopColor={bg === 'dark' ? '#150d07' : '#cdb48c'} />
        </radialGradient>
      </defs>
      <rect width="200" height="200" fill={`url(#g-${bg})`} />
      {steam && (
        <g fill="none" stroke="#f1e3ce" strokeWidth="3" strokeLinecap="round" opacity=".5" className="steam-s">
          <path d="M86 70c-6 8 6 12 0 22" />
          <path d="M104 62c-6 8 6 12 0 22" />
          <path d="M122 70c-6 8 6 12 0 22" />
        </g>
      )}
      <ellipse cx="100" cy="158" rx="74" ry="14" fill="#000" opacity=".25" />
      <ellipse cx="100" cy="150" rx="70" ry="13" fill="#e8dcc4" />
      <ellipse cx="100" cy="148" rx="52" ry="8" fill="#d6c7a8" />
      <g transform={`translate(${100 - 100 * s} ${150 - 150 * s}) scale(${s})`}>
        <path d="M146 108h7a14 14 0 0 1 0 28h-14" fill="none" stroke="#fff8ee" strokeWidth="8" />
        <path d="M52 100h96v14a48 38 0 0 1-96 0z" fill="#fff8ee" />
        <path d="M60 116c2 18 16 30 40 30" fill="none" stroke="#e4d2b8" strokeWidth="4" strokeLinecap="round" opacity=".8" />
        <ellipse cx="100" cy="100" rx="48" ry="11" fill="#fff8ee" />
        <ellipse cx="100" cy="100" rx="42" ry="8.5" fill={liquid} />
        {crema && <ellipse cx="100" cy="99" rx="34" ry="5.5" fill="#a9703a" opacity=".85" />}
        {heart && (
          <path d="M100 106c-9-5-14-8-14-12 0-3 2.5-4.5 5-4.5 3 0 7 2 9 5 2-3 6-5 9-5 2.5 0 5 1.500 5 4.500 0 4-5 7-14 12z" fill="#fff1d9" transform="scale(.9) translate(11 9)" opacity=".95" />
        )}
        {swirl && <path d="M70 100c10-6 20 6 30 0s20 6 30 0" fill="none" stroke="#e9cfa6" strokeWidth="2.500" strokeLinecap="round" />}
      </g>
    </svg>
  )
}
