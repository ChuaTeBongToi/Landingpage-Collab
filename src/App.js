import React from 'react';
import ReactDOM from 'react-dom';
import myNav from './myNav';
import mySologan from './mySologan';
import myCopyright from './myCopyright';
import background from './Login - Step 1 edited.jpg'
import { render } from '@testing-library/react';

export default function App({num}) {
  return(
    <div>
      <h1 id='text'>Bạn đã lãng phí {num}s để xem cái xamlol này</h1>
    </div>
  )
}