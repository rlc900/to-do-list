import React, {useState} from 'react';
import ToDo from './components/ToDo.js'
import ToDoContainer from './components/ToDoContainer.js'
import {Header} from 'semantic-ui-react'

function App() {

  const [state, setData] = useState({todoArr: []});



  return (
    <div className="App">
      <Header as='h1' className='header' textAlign='center'>To Do app!</Header>
      <ToDo addToDo={(input) => {setData(input)}}/>
      <ToDoContainer tasks={state}/>
    </div>
  );
}

export default App;
