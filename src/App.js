import React from 'react';
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
          width: '30%',
          margin: '0 auto',
        }}
      >
        <div style={{margin: '1rem', width: '100%'}}>
          <Button primary block>
            New message
          </Button>
        </div>
        <div style={{margin: '1rem', width: '100%'}}>
          <Button secondary block>
            New message
          </Button>
        </div>
        <div style={{margin: '1rem', width: '100%'}}>
          <Button outline block>
            New message
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;
