import React from 'react';
import {ButtonWrapper} from './styled-button';

export default function Button({children, ...props}) {
  return (
    <ButtonWrapper {...props} disabled>
      {children}
    </ButtonWrapper>
  );
}
