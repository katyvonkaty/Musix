import React from "react";
import { Button, Checkbox, Form } from 'semantic-ui-react'

const FormExampleForm = () => (
  <div className="ui container">
  <Form action="/register" method="POST">
  <h1> Register </h1>
    <Form.Field>
      <label for="email">Email </label>
      <input type="email" class="form-control" name="username" placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <label for="password">Password</label>
      <input type="password" class="form-control" name="password" placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button type='submit'>Register</Button>
  </Form>
  </div>
)

export default FormExampleForm
