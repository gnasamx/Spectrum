import React from 'react';
import {BoxContainer} from './styled-backgrounds';
import Button from '../button/button';

export function Box() {
  return (
    <BoxContainer padding="1rem">
      <Button>Button</Button>
    </BoxContainer>
  );
}
