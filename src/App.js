import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import myNav from './myNav';
import Sologan from './mySologan';
import myCopyright from './myCopyright';
import background from './Login - Step 1 edited.jpg'
import { render } from '@testing-library/react';
import './index.css'

export default function App() {
  return (
    <div>
      <img src={background} id='background'></img>
      {myNav()}
      {Sologan()}
      {myCopyright()}
    </div>
  )
}
