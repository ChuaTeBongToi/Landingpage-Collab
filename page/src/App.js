import React from 'react';
import './App.css';
import './index.css'
import myNav from './myNav';
import mySologan from './mySologan';
import myCopyright from './myCopyright';
 
function App() {
  return (
    <div className='root'>
      {myNav()}
      {mySologan()}
      {myCopyright()}
    </div>
  )
}

export default App