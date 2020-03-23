import React from 'react';
import {Box, BoxCol2} from './compoents/backgrounds/backgrounds';
import Button from './compoents/button/button';
import {H5, P} from './compoents/typography/typography';

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
          <H5 mb="1rem">No notifications...yet</H5>
          <P mb="2rem">
            Looks like you’re new around here! When you start receiving
            notifications about conversations on Spectrum, they'll show up here.
          </P>
          <BoxCol2>
            <Button secondary block>
              Contact us
            </Button>
            <Button block>Go home</Button>
          </BoxCol2>
        </Box>
      </div>
    </>
  );
}

export default App;
