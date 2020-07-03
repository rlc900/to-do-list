import React from 'react';
import ToDo from './components/ToDo.js'
import {Header} from 'semantic-ui-react'

function App() {
  return (
    <div className="App">
      <Header as='h1' className='header' textAlign='center'>To Do app!</Header>
      <ToDo/>
    </div>
  );
}

export default App;
