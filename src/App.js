import React, { useState } from 'react';
import myNav from './myNav';
import Sologan from './mySologan';
import myCopyright from './myCopyright';
import background from './Login - Step 1 edited.png'
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
