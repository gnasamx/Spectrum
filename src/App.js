import React from 'react';
import {Box} from './compoents/backgrounds/backgrounds';

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
          width: '30%',
          margin: '0 auto',
        }}
      >
        <Box />
      </div>
    </>
  );
}

export default App;
