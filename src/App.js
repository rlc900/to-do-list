import React, {useState} from 'react';
import ToDo from './components/ToDo.js'
import ToDoContainer from './components/ToDoContainer.js'
import {Header} from 'semantic-ui-react'

function App() {

  const [data, setData] = useState('');

  const handleFormSubmit = (input) => {
    console.log(input)
  }

  return (
    <div className="App">
      <Header as='h1' className='header' textAlign='center'>To Do app!</Header>
      <ToDo handleFormSubmit={handleFormSubmit}/>
      <ToDoContainer tasks={data}/>
    </div>
  );
}

export default App;
