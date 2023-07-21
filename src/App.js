import React from 'react';
import ReactDOM from 'react-dom';
import myNav from './myNav';
import mySologan from './mySologan';
import myCopyright from './myCopyright';
import background from './Login - Step 1 edited.jpg'
import { render } from '@testing-library/react';

export default function App({num}) {
  if (num % 2 == 0) {
    return(
      <h1>Chẵn nha</h1>
    )
  }
  else {
    return(
      <h1>Lẻ nhé</h1>
    )
  }
}