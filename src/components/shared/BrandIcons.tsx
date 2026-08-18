interface IconProps { size?: number; className?: string; }
export function GithubMark({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="1" y="1" width="22" height="22" rx="6" stroke="currentColor" strokeWidth="1.4"/>
      <text x="12" y="15.5" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="9" fontWeight="600" fill="currentColor">GH</text>
    </svg>
  );
}
export function LinkedinMark({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="1" y="1" width="22" height="22" rx="6" stroke="currentColor" strokeWidth="1.4"/>
      <text x="12" y="15.5" textAnchor="middle" fontFamily="JetBrains Mono,monospace" fontSize="9" fontWeight="600" fill="currentColor">in</text>
    </svg>
  );
}
