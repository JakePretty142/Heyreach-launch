const PATHS = {
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  down: <path d="M12 5v14M6 13l6 6 6-6" />,
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  send: (
    <>
      <path d="M21 3 10 14" />
      <path d="M21 3l-7 18-4-7-7-4z" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
      <path d="M8 10.5v6M8 7.5v.01M12 16.5v-3.5a2.5 2.5 0 0 1 5 0v3.5M12 10.5v6" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4.5 20.5c0-4 3.4-6.5 7.5-6.5s7.5 2.5 7.5 6.5" />
    </>
  ),
  brief: (
    <>
      <rect x="3.5" y="7" width="17" height="12.5" rx="2" />
      <path d="M8.5 7V5.5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2V7" />
    </>
  ),
  building: (
    <>
      <rect x="4" y="3" width="11" height="18" rx="1.5" />
      <path d="M15 9h4.5a.5.5 0 0 1 .5.5V21" />
      <path d="M8 7h3M8 11h3M8 15h3" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z" />
      <circle cx="12" cy="10" r="2.3" />
    </>
  ),
  grip: (
    <>
      <circle cx="9" cy="7" r="1" />
      <circle cx="15" cy="7" r="1" />
      <circle cx="9" cy="12" r="1" />
      <circle cx="15" cy="12" r="1" />
      <circle cx="9" cy="17" r="1" />
      <circle cx="15" cy="17" r="1" />
    </>
  ),
  chev: <path d="m7 10 5 5 5-5" />,
  key: (
    <>
      <circle cx="8" cy="15" r="4" />
      <path d="m11 12 8-8M16 7l2 2M14 9l2 2" />
    </>
  ),
  x: <path d="M6 6l12 12M18 6 6 18" />,
  plus: <path d="M12 5v14M5 12h14" />,
};

export default function Icon({ name, size = 16, stroke = 1.8, className = "" }) {
  return (
    <svg className={`icon ${className}`} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {PATHS[name]}
    </svg>
  );
}
