import React, {useState, useEffect} from 'react';
import {Header, Grid, Form, Button, List, Checkbox} from 'semantic-ui-react'
import styles from './page.module.scss'

// TODO FORM FUNCTIONAL COMPONENT
function ToDoForm ({ addToDo }) {
  const [value, setValue] = useState('');

  const handleSubmit = (evt) => {
    // console.log(addToDo)
    console.log(value)
    evt.preventDefault();
    if (!value) return;
    addToDo(value);
    setValue('');
  };

  return(
    <Grid centered={true}>
      <Form className={styles.form} size='large' onSubmit={handleSubmit}>
        <Form.Field>
          <Header className={styles.label}>Task</Header>
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

  const handleDelete = (id) => {
    props.deleteToDo(id)
  }

console.log(props.todo)
  return (
    <Grid className={styles.grid} centered={true}>
        <List as='ol'>
              <List.Content
              className={styles.list}
              content={props.todo.text}
              >
              </List.Content>
            <Button onClick={() => {
              handleDelete(props.todo.id)
            }}>Delete</Button>
            <Checkbox
            checked={props.todo.isCompleted ? true : false}
            onClick={() => { props.completeToDo(props.todo)}}/>
        </List>
    </Grid>
  );
}

function CompleteToDo(props) {
  console.log(props.completedArr)

  const handleDelete = (id) => {
    props.deleteCompletedToDo(id)
  }

  return (
    <div className={styles.completedDiv}>
      <Header as='h1'
      className={styles.header}
      textAlign='center'
      >
      Completed
      </Header>
       {props.completedArr.map((todo) => (
        <Grid className={styles.grid} centered={true}>
            <List as='ol'>
                  <List.Content
                  className={styles.list}
                  content={todo.text}
                  >
                  </List.Content>
                  <Button onClick={() => {
                    handleDelete(todo.id)
                  }}>Delete</Button>
            </List>
        </Grid>
         ))}
    </div>
  )
}

function App() {

  const [toDoArr, setToDoArr] = useState([]);
  const [completedArr, setCompletedArr] = useState([])

  // COMPLETE TODO
  const completeToDo = (toDoObj) => {
    // The purpose of this function is to mak a regular todo a completed do by deleting
    // the prev from the toDoArr and making a post request to add it to the completed todos
    console.log(toDoObj)
    fetch('http://localhost:3000/todos/' + toDoObj.id, {
      method: 'DELETE'
    })
    fetch('http://localhost:3000/completedToDos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(toDoObj)

    })
    .then(r => r.json())
    .then( data => setCompletedArr([...completedArr, data]))
      let newToDos = [...toDoArr]
      setToDoArr(newToDos)
      deleteToDo(toDoObj.id)
      // take what todo was clikced and put in completed array
  }

  // ADDING A TODO
  const addToDo = (text) => {
    // console.log(text)
    let newToDo = {text: text};
    let modifiedToDoArr = [newToDo, ...toDoArr]
    fetch('http://localhost:3000/todos/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(newToDo)
    })
    .then(r => r.json())
    .then((r) => {
      setToDoArr(modifiedToDoArr)
    })
  }

  // DELETING A TODO
  const deleteToDo = (id) => {
    // console.log(id)
    fetch('http://localhost:3000/todos/' + id, {
      method: 'DELETE'
    })
    let filteredArr = toDoArr.filter(toDo => toDo.id !== id)
    setToDoArr(filteredArr)
  }

  // DELETING A COMPLETED TO DO
  const deleteCompletedToDo = (id) => {
    let filteredCompleted = completedArr.filter(completedToDo => completedToDo.id !== id)
    setCompletedArr(filteredCompleted)
  }

  useEffect(() => {

    fetch('http://localhost:3000/todos')
      .then(r => r.json())
      .then(data => setToDoArr(data))

    fetch('http://localhost:3000/completedToDos')
      .then(r => r.json())
      .then(data => {
        console.log(data)
        setCompletedArr(data)})

  }, [])

  return (
    <div className="App">
      <Header as='h1'
      className={styles.header}
      textAlign='center'
      >
      To Do app!
      </Header>
      <ToDoForm addToDo={addToDo}/>
        <div className={styles.app}>
          <Header as='h1'
          className={styles.header}
          textAlign='center'
          >
          Active
          </Header>
         {toDoArr.map((todo, index) => (
            <ToDo
            todo={todo}
            index={index}
            deleteToDo={deleteToDo}
            state={toDoArr}
            completeToDo={completeToDo}
            />
          ))}
      </div>
          <CompleteToDo
          completedArr={completedArr}
          setCompletedArr={setCompletedArr}
          deleteCompletedToDo={deleteCompletedToDo}
          />
        </div>
    );
}

export default App;
