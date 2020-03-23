import React from 'react';
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P,
  Span,
} from './compoents/typography/typography';

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
        <H1 />
        <H2 />
        <H3 />
        <H4 />
        <H5 />
        <H6 />
        <P />
        <Span />
      </div>
    </>
  );
}

export default App;
