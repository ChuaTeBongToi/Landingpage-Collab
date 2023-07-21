import React from 'react';
import ReactDOM from 'react-dom';
import myNav from './myNav';
import mySologan from './mySologan';
import myCopyright from './myCopyright';
import background from './Login - Step 1.png'

export default function App() {
  return (
    <div>
      <img id='background' src={background}></img>
      {myNav()}
      {mySologan()}
      {myCopyright()}
    </div>
  )
}