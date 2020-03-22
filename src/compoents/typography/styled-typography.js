import styled, {css} from 'styled-components';
import {gray} from '../theme/colors';

const TextPaddingDirections = css`
  padding-top: ${({pt}) => pt || '0rem'};
  padding-bottom: ${({pb}) => pb || '0rem'};
  padding-left: ${({pl}) => pl || '0rem'};
  padding-right: ${({pr}) => pr || '0rem'};
`;

const TextMarginDirections = css`
  margin-top: ${({mt}) => mt || '0rem'};
  margin-bottom: ${({mb}) => mb || '0rem'};
  margin-left: ${({ml}) => ml || '0rem'};
  margin-right: ${({mr}) => mr || '0rem'};
`;

const TextMargin = css`
  margin: ${({margin}) => margin && margin};
`;
const TextPadding = css`
  padding: ${({padding}) => padding && padding};
`;

export const TextH1 = styled.h1`
  font-size: ${({fontSize}) => fontSize || '3.5rem'};
  font-weight: ${({fontStyle}) => fontStyle || 'bold'};
  line-height: ${({lineHeight}) => lineHeight || '1.3'};
  color: ${({color}) => color || gray['90']};
  ${TextMargin}
  ${TextPadding}
  ${TextMarginDirections}
  ${TextPaddingDirections}
`;

export const TextH2 = styled.h2`
  font-size: ${({fontSize}) => fontSize || '3rem'};
  font-weight: ${({fontStyle}) => fontStyle || 'bold'};
  line-height: ${({lineHeight}) => lineHeight || '1.2'};
  color: ${({color}) => color || gray['90']};
  ${TextMargin}
  ${TextPadding}
  ${TextMarginDirections}
  ${TextPaddingDirections}
`;

export const TextH3 = styled.h3`
  font-size: ${({fontSize}) => fontSize || '2.5rem'};
  font-weight: ${({fontStyle}) => fontStyle || 'bold'};
  line-height: ${({lineHeight}) => lineHeight || '1.2'};
  color: ${({color}) => color || gray['90']};
  ${TextMargin}
  ${TextPadding}
  ${TextMarginDirections}
  ${TextPaddingDirections}
`;

export const TextH4 = styled.h4`
  font-size: ${({fontSize}) => fontSize || '2rem'};
  font-weight: ${({fontStyle}) => fontStyle || 'bold'};
  line-height: ${({lineHeight}) => lineHeight || '1.2'};
  color: ${({color}) => color || gray['90']};
  ${TextMargin}
  ${TextPadding}
  ${TextMarginDirections}
  ${TextPaddingDirections}
`;

export const TextH5 = styled.h5`
  font-size: ${({fontSize}) => fontSize || '1.5rem'};
  font-weight: ${({fontStyle}) => fontStyle || 'bold'};
  line-height: ${({lineHeight}) => lineHeight || '1.2'};
  color: ${({color}) => color || gray['90']};
  ${TextMargin}
  ${TextPadding}
  ${TextMarginDirections}
  ${TextPaddingDirections}
`;

export const TextH6 = styled.h6`
  font-size: ${({fontSize}) => fontSize || '1rem'};
  font-weight: ${({fontStyle}) => fontStyle || 'bold'};
  line-height: ${({lineHeight}) => lineHeight || '1.2'};
  color: ${({color}) => color || gray['90']};
  ${TextMargin}
  ${TextPadding}
  ${TextMarginDirections}
  ${TextPaddingDirections}
`;
