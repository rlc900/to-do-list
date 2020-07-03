import React, {useState} from 'react';
import {Button, Form, Grid} from 'semantic-ui-react'

export default function ToDo(props) {

  const [input, setInput] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.handleFormSubmit('hi')
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
