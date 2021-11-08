import React from 'react'
import { useInputValue } from '../hooks/useInputValue'
import { Form, Input, Button, Title } from './styles/styledForm'

const UserForm = ({ onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <>
      <Title>{title}</Title>
      <Form onSubmit={handleSubmit}>
        <Input placeholder='email' {...email} />
        <Input type='password' placeholder='password' {...password} />
        <Button>{title}</Button>
      </Form>
    </>
  )
}

export { UserForm }
