import React from 'react';
import {Box, BoxCol2} from './compoents/backgrounds/backgrounds';
import {ListItem} from './app-components/lists/lists';

function App() {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          height: '100vh',
          width: '60%',
          margin: '0 auto',
        }}
      >
        <Box padding="1rem">
          <ListItem />
          <ListItem />
          <ListItem />
        </Box>
      </div>
    </>
  );
}

export default App;
