import React, {useState, useEffect} from 'react';
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
            <List.Item as='li' value='*' >
              <List.Content content={todo.text}>
              </List.Content>
            </List.Item>
        </List>
  );
}

function App() {

  const [toDoArr, setToDoArr] = useState([{text: 'yo', id: 0}]);

  // ADDING A TODO
  const addToDo = (text) => {
    const newId = toDoArr.length + 1
    const newToDo = {...toDoArr, text: text, id: newId};
    const modifiedToDoArr = [newToDo, ...toDoArr]
    setToDoArr(modifiedToDoArr)
  }

  useEffect(() => {
    // only want to run after the first render
    const data = localStorage.getItem('all-todos')
    // CHECK if you have data, and then pasre the JSON.stringify
    if (data) {
      setToDoArr(JSON.parse(data));
    }
  }, [])

  useEffect(() => {
    console.log(localStorage.setItem('all-todos', JSON.stringify(toDoArr)))
  })

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
