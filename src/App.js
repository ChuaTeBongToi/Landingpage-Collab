import React from 'react';
import ReactDOM from 'react-dom';
import myNav from './myNav';
import mySologan from './mySologan';
import myCopyright from './myCopyright';

export default function App() {
  return (
    <div>
      {myNav()}
      {mySologan()}
      {myCopyright()}
    </div>
  )
}