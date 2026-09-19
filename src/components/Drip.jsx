const DRIP_LENGTHS = [30, 52, 22, 60, 38, 26, 56, 34, 64, 28, 46, 24, 58, 36, 50, 30, 42, 26];

export default function Drip() {
  return (
    <svg
      className="drip"
      viewBox="0 0 1000 90"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="0" y="0" width="1000" height="26" />
      {DRIP_LENGTHS.map((len, i) => (
        <rect key={i} x={12 + i * 54} y="12" width="22" height={len} rx="11" />
      ))}
    </svg>
  );
}
