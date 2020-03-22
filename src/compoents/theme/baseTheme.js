import {decideTheme} from './utils';

export const applyPropertyStyle = (property, appearance, state = 'default') => {
  const propertyStyle = baseTheme[property];
  const appearanceStyle = propertyStyle[appearance];
  return appearanceStyle[state];
};

const primary = decideTheme();

export const baseTheme = {
  background: {
    primary: {
      default: primary['60'],
      hover: primary['70'],
    },
    // secondary: {
    //   default: colors.w10,
    //   hover: colors.w10,
    // },
    // outline: {
    //   default: colors.w10,
    //   hover: colors.p150,
    // },
  },
  border: {
    primary: {
      default: primary['60'],
      hover: primary['70'],
    },
    // secondary: {
    //   default: colors.w75,
    //   hover: colors.w50,
    // },
    // outline: {
    //   default: colors.p50,
    //   hover: colors.p200,
    // },
  },
  color: {
    primary: {
      default: '#FFFFFF',
      hover: '#FFFFFF',
    },
    // secondary: {
    //   default: colors.b50,
    //   hover: colors.b50,
    // },
    // outline: {
    //   default: colors.p50,
    //   hover: colors.p50,
    // },
  },
  // boxShadow: {
  //   primary: {
  //     active: `${colors.w10} 0px 0px 0px 2px, ${colors.p75} 0px 0px 0px 4px`,
  //   },
  //   secondary: {
  //     active: `${colors.w10} 0px 0px 0px 2px, ${colors.b75} 0px 0px 0px 4px`,
  //   },
  //   outline: {
  //     active: `${colors.w10} 0px 0px 0px 2px, ${colors.p100} 0px 0px 0px 4px`,
  //   },
  // },
};
