import {
  pink,
  purple,
  orange,
  red,
  teal,
  blue,
  indigo,
  green,
  grey,
} from '../theme/new-colors';

export function decideAppearance(primary, secondary, outline) {
  if (primary) return 'primary';

  if (secondary) return 'secondary';

  if (outline) return 'outline';

  return 'primary';
}

export function decideTheme() {
  const primaryColor = 'purple';
  switch (primaryColor) {
    case 'pink':
      return pink;
    case 'red':
      return red;
    case 'orange':
      return orange;
    case 'green':
      return green;
    case 'teal':
      return teal;
    case 'blue':
      return blue;
    case 'indigo':
      return indigo;
    case 'purple':
      return purple;
    case 'grey':
      return grey;
    default:
      console.log("Primary color is required, current primary color 'Purple'!");
      return purple;
  }
}
