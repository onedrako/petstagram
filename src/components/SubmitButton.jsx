import React from 'react'
import { Button } from './styles/StyledSubmitButton'

const SubmitButton = ({ children, onClick, disabled }) => {
  return (
    <Button onClick={onClick} disabled={disabled}>
      {children}
    </Button>
  )
}

export { SubmitButton }
