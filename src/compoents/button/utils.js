export function decideAppearance(primary, secondary, outline) {
  if (primary) return 'primary';

  if (secondary) return 'secondary';

  if (outline) return 'outline';

  return 'primary';
}
