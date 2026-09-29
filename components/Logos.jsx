const FLAME =
  "M2043.86 1780.8C1975.82 1791.76 1844.04 1599.86 1854.04 1461.04 1854.03 1318.22 2035.01 1082.53 2099.86 953.867 2196.71 777.168 2124.94 689.037 2135.08 689.042 2167.24 679.04 2220.06 714.518 2286.76 889.851 2353.46 1065.18 2205.25 1136.68 2355.22 1200.68 2434.13 1238.27 2375.35 1073.14 2394.28 1075.73 2491.25 1122.36 2554.5 1362 2546.88 1480.43 2539.27 1598.87 2450.87 1759.25 2348.59 1786.34 2322.34 1805.42 2401.62 1694.54 2375.36 1594.92 2341.1 1473.28 2253.26 1440.75 2223.06 1378.72 2192.86 1316.68 2206.3 1230.28 2194.16 1222.69 2130 1245.13 2037.22 1448.32 2012.18 1541.34 1987.13 1634.36 2027.87 1743.81 2043.86 1780.8Z";

// Warm flame in a circle. `tone` picks colours from CSS variables (see globals.css).
export function Flame({ size = 24, tone = "logo", className = "" }) {
  return (
    <svg className={`flame flame-${tone} ${className}`} width={size} height={size} viewBox="1375 413 1650 1650" aria-hidden="true">
      <circle cx="2200" cy="1238" r="825" className="flame-bg" />
      <path d={FLAME} className="flame-fg" fillRule="evenodd" />
    </svg>
  );
}

export function WarmLogo({ size = 26 }) {
  return (
    <span className="warm-logo">
      <Flame size={size} />
      <span>Warm</span>
    </span>
  );
}

export function HeyReachMark({ height = 20 }) {
  const width = Math.round((height * 404) / 294);
  // eslint-disable-next-line @next/next/no-img-element
  return <img src="/heyreach-mark.png" width={width} height={height} alt="" className="hr-mark" />;
}
