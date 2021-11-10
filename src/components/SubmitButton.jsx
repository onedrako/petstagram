import React from 'react'
import { Button } from './styles/StyledSubmitButton'
import PropTypes from 'prop-types'

const SubmitButton = ({ children, onClick, disabled }) => {
  return (
    <Button onClick={onClick} disabled={disabled}>
      {children}
    </Button>
  )
}

SubmitButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
}

export { SubmitButton }
