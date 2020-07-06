import React from 'react';
import {Button, Form, Grid, List} from 'semantic-ui-react'

export default function ToDo(props) {

  // const [todo, setToDo] = useState({todo: '', date: ''})


  const handleSubmit = (evt) => {
    // evt.preventDefault();
    // props.addToDo(todo)
    // setToDo({todo: '', date: ''})
    // console.log('props from app', props, 'todo state', data)
  }



  return (
    <>
      <Grid centered={true}>
        <Form size='large' onSubmit={handleSubmit}>
          <Form.Field>
            <label>Task</label>
              <input placeholder='To Do'/>
          </Form.Field>
            <Button type='submit'>Submit</Button>
        </Form>
      </Grid>
        <List as='ol'>
            <List.Item as='li' value='*'>
              <List.Content>
              </List.Content>
            </List.Item>
        </List>
    </>
  )
}
