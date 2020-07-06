import React, {useState} from 'react';
// import ToDo from './components/ToDo.js'
// import ToDoContainer from './components/ToDoContainer.js'
import {Header, Grid, Form, Button, List} from 'semantic-ui-react'

function App() {

  const [toDoArr, setToDoArr] = useState([{text: 'yo', date: 0}]);



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



  return (
    <div className="App">
      <Header as='h1' className='header' textAlign='center'>To Do app!</Header>
      <Grid centered={true}>
        <Form size='large'>
          <Form.Field>
            <label>Task</label>
              <input placeholder='To Do'/>
          </Form.Field>
            <Button type='submit'>Submit</Button>
        </Form>
      </Grid>
      {toDoArr.map((todo, index) => (
        <ToDo todo={todo} index={index}/>
      ))}
    </div>
  );
}

export default App;
// addToDo={(input) => {setData(input)}}
