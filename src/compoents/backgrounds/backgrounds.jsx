import React from 'react';
import {BoxContainer, BoxTwoColumns} from './styled-backgrounds';

export function Box({children, ...props}) {
  return <BoxContainer {...props}>{children}</BoxContainer>;
}

export function BoxCol2({children, ...props}) {
  return <BoxTwoColumns {...props}>{children}</BoxTwoColumns>;
}
