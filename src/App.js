import React, {useState} from 'react';
// import ToDo from './components/ToDo.js'
// import ToDoContainer from './components/ToDoContainer.js'
import {Header, Grid, Form, Button, List} from 'semantic-ui-react'

// TODO FORM FUNCTIONAL COMPONENT
function ToDoForm ({ addToDo }) {
  const [value, setValue] = useState('');

  const handleSubmit = (evt) => {
    // console.log(addToDo)
    evt.preventDefault();
    if (!value) return;
    addToDo(value);
    setValue('');
  };

  return(
    <Grid centered={true}>
      <Form size='large' onSubmit={handleSubmit}>
        <Form.Field>
          <label>Task</label>
            <input
            placeholder='To Do'
            type='text'
            className='input'
            value={value}
            onChange={e => setValue(e.target.value)}
            />
        </Form.Field>
          <Button type='submit'>Submit</Button>
      </Form>
    </Grid>
  )
}

const ToDo = ({todo}) => {
  return (
        <List as='ol'>
            <List.Item as='li' value='*'>
              <List.Content content={todo.text}>
              </List.Content>
            </List.Item>
        </List>
  );
}

function App() {

  const [toDoArr, setToDoArr] = useState([{text: 'yo'}]);

  const addToDo = (text) => {
    const newToDos = [...toDoArr, {text}];
    setToDoArr(newToDos)
  }

  return (
    <div className="App">
      <Header as='h1' className='header' textAlign='center'>To Do app!</Header>
      <ToDoForm addToDo={addToDo}/>
      {toDoArr.map((todo, index) => (
        <ToDo todo={todo} index={index}/>
      ))}
    </div>
  );
}

export default App;
