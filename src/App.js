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

function ToDo(props) {

  const handleDelete = (evt) => {
    // console.log(props)
    props.deleteToDo(props.todo.id)
  }


  return (
        <List as='ol'>
            <List.Item as='li' value='*' >
              <List.Content content={props.todo.text}>
              </List.Content>
            </List.Item>
            <Button onClick={handleDelete}>Delete</Button>
        </List>
  );
}

// function ToDoContainer(props) {
//   // console.log(props)
//   let toDoArray = props.state.map(toDoObj => (
//
//   ))
//   return (
//     <div>
//     </div>
//   )
// }


function App() {

  const [toDoArr, setToDoArr] = useState([{text: '', id: 0}]);

  // ADDING A TODO
  const addToDo = (text) => {
    let newId = toDoArr.length + 1
    let newToDo = {...toDoArr, text: text, id: newId};
    let modifiedToDoArr = [newToDo, ...toDoArr]
    setToDoArr(modifiedToDoArr)
  }

  // DELETING A TODO
  const deleteToDo = (id) => {
    let filteredArr = toDoArr.filter(toDo => toDo.id !== id)
    setToDoArr(filteredArr)
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
        <ToDo todo={todo} index={index} deleteToDo={deleteToDo} state={toDoArr}/>
      ))}

    </div>
  );
}

export default App;
  // <ToDoContainer deleteTodo={deleteToDo} state={toDoArr}/>
