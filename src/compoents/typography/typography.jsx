import React from 'react';
import {
  TextH1,
  TextH2,
  TextH3,
  TextH4,
  TextH5,
  TextH6,
  TextP,
  TextSpan,
} from './styled-typography';

export function H1({children, ...props}) {
  return <TextH1 {...props}>{children}</TextH1>;
}

export function H2({children, ...props}) {
  return <TextH2 {...props}>{children}</TextH2>;
}

export function H3({children, ...props}) {
  return <TextH3 {...props}>{children}</TextH3>;
}

export function H4({children, ...props}) {
  return <TextH4 {...props}>{children}</TextH4>;
}

export function H5({children, ...props}) {
  return <TextH5 {...props}>{children}</TextH5>;
}

export function H6({children, ...props}) {
  return <TextH6 {...props}>{children}</TextH6>;
}

export function P({children, ...props}) {
  return <TextP {...props}>{children}</TextP>;
}

export function Span({children, ...props}) {
  return <TextSpan {...props}>{children}</TextSpan>;
}
