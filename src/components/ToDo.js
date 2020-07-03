import React from 'react';
import {Button, Form, Grid} from 'semantic-ui-react'

function ToDo() {

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(evt)
  }

  return (
    <Grid centered={true}>
      <Form size='large' onSubmit={handleSubmit}>
        <Form.Field>
          <label>Task</label>
            <input placeholder='To Do' />
        </Form.Field>
          <Button type='submit'>Submit</Button>
      </Form>
    </Grid>
  )
}

export default ToDo;
