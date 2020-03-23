import React from 'react';
import {
  ListItemRow,
  ListItemChannelContent,
  ListItemChannelLabel,
  ListItemAction,
} from './styled-lists';
import Button from '../../compoents/button/button';

export function ListItem() {
  return (
    <ListItemRow>
      <ListItemChannelContent>
        <ListItemChannelLabel># Support</ListItemChannelLabel>
      </ListItemChannelContent>
      <ListItemAction>
        <Button outline small>Join</Button>
      </ListItemAction>
    </ListItemRow>
  );
}
