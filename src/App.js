import React from 'react';
import {Box, BoxCol2} from './compoents/backgrounds/backgrounds';
import Button from './compoents/button/button';

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
          <Button secondary block>Register</Button>
        </Box>
      </div>
    </>
  );
}

export default App;
