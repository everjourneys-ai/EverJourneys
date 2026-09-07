// Fixed icon set, §1.3 — line-weight ~1.5px, ink stroke by default. 24x24 viewBox.
const wrap = (inner: string) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;

export const icons = {
  compassRose: wrap(
    '<circle cx="12" cy="12" r="9"/><path d="M12 5 L14 12 L12 19 L10 12 Z" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none"/>'
  ),
  flagPin: wrap(
    '<path d="M6 21V4"/><path d="M6 4h11l-3 4 3 4H6"/>'
  ),
  mountain: wrap(
    '<path d="M3 19l6-10 4 6 2-3 6 7Z"/><circle cx="8" cy="6" r="1.5"/>'
  ),
  search: wrap(
    '<circle cx="10.5" cy="10.5" r="6.5"/><path d="M20 20l-4.8-4.8"/>'
  ),
  crosshair: wrap(
    '<circle cx="12" cy="12" r="8"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/><circle cx="12" cy="12" r="2" fill="currentColor" stroke="none"/>'
  ),
  person: wrap(
    '<circle cx="12" cy="7" r="3.5"/><path d="M4.5 20c1.5-4 4-6 7.5-6s6 2 7.5 6"/>'
  ),
  growthArrow: wrap(
    '<path d="M4 19h16"/><rect x="6" y="12" width="3" height="7"/><rect x="11" y="8" width="3" height="11"/><rect x="16" y="4" width="3" height="15"/>'
  ),
  stackedLayers: wrap(
    '<path d="M12 3l9 5-9 5-9-5 9-5Z"/><path d="M3 13l9 5 9-5"/>'
  ),
  loopArrow: wrap(
    '<path d="M20 12a8 8 0 1 1-3-6.2"/><path d="M20 3v4h-4"/>'
  ),
  overlappingSquares: wrap(
    '<rect x="4" y="4" width="12" height="12" rx="1"/><rect x="9" y="9" width="12" height="12" rx="1"/>'
  ),
} as const;

export type IconName = keyof typeof icons;
