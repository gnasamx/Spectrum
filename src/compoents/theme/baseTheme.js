import * as colors from './colors';

export const applyPropertyStyle = (property, appearance, state = 'default') => {
  const propertyStyle = baseTheme[property];
  const appearanceStyle = propertyStyle[appearance];
  return appearanceStyle[state];
};

export const baseTheme = {
  background: {
    primary: {
      default: colors.p50,
      hover: colors.p200,
    },
    secondary: {
      default: colors.w10,
      hover: colors.w10,
    },
    outline: {
      default: colors.w10,
      hover: colors.p150,
    },
  },
  border: {
    primary: {
      default: colors.p200,
      hover: colors.p300,
    },
    secondary: {
      default: colors.w75,
      hover: colors.w50,
    },
    outline: {
      default: colors.p50,
      hover: colors.p200,
    },
  },
  color: {
    primary: {
      default: colors.w10,
      hover: colors.w10,
    },
    secondary: {
      default: colors.b50,
      hover: colors.b50,
    },
    outline: {
      default: colors.p50,
      hover: colors.p50,
    },
  },
  boxShadow: {
    primary: {
      active: `${colors.w10} 0px 0px 0px 2px, ${colors.p75} 0px 0px 0px 4px`,
    },
    secondary: {
      active: `${colors.w10} 0px 0px 0px 2px, ${colors.b75} 0px 0px 0px 4px`,
    },
    outline: {
      active: `${colors.w10} 0px 0px 0px 2px, ${colors.p100} 0px 0px 0px 4px`,
    },
  },
};
