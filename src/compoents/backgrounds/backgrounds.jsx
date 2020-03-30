import React from 'react';
import {BoxContainer, BoxTwoColumns, FlexBox} from './styled-backgrounds';

export function Box({children, ...props}) {
  return <BoxContainer {...props}>{children}</BoxContainer>;
}

export function BoxCol2({children, ...props}) {
  return <BoxTwoColumns {...props}>{children}</BoxTwoColumns>;
}

export function Flex({children, ...props}) {
  return <FlexBox {...props}>{children}</FlexBox>;
}
