import React, {useState} from 'react';
import {Button, Form, Grid} from 'semantic-ui-react'

export default function ToDo(props) {

  const [data, setData] = useState({newToDo: {todo: '', key: ''}})


  const handleSubmit = (evt) => {
    evt.preventDefault();
    // props.addToDo()
    // setInput('')
    console.log('props from app', props, 'todo state', data)
  }

  return (
    <Grid centered={true}>
      <Form size='large' onSubmit={handleSubmit}>
        <Form.Field>
          <label>Task</label>
            <input placeholder='To Do'/>
        </Form.Field>
          <Button type='submit'>Submit</Button>
      </Form>
    </Grid>
  )
}
