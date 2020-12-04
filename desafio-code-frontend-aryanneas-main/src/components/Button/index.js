import React from 'react'
import PropTypes from 'prop-types'

import { CustomButton, PlusIcon } from './style'

const Button = ({ name, plusIcon, disabled }) => {
  return (
    <CustomButton disabled={disabled} data-testid={`${name}-button`}>
      {plusIcon ? <PlusIcon>{plusIcon}</PlusIcon> : null}
      {name}
    </CustomButton>
  )
}

Button.propTypes = {
  name: PropTypes.string,
  plusIcon: PropTypes.node,
}

export default Button
