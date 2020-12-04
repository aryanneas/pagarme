import React from 'react'
import PropTypes from 'prop-types'
import { useField } from 'formik'

import {
  Label,
  InputContainer,
  MaskInput,
  Input,
  ErrorContainer,
} from './style'

const InputForm = ({
  name,
  label,
  type,
  mask,
  required,
  revertMask,
  handleChange,
  ...props
}) => {
  const [
    { onChange, onBlur, ...input },
    { touched, error },
    { setValue },
  ] = useField(name)

  const onFieldChange = (e) => {
    onChange(e)
    if (handleChange) handleChange(e)
    if (mask && revertMask) setValue(revertMask(e.target.value))
  }

  const onFieldBlur = (e) => {
    onBlur(e)
    if (mask && revertMask) setValue(revertMask(e.target.value))
  }

  const InputFormLabel = ({ label, id }) => (
    <Label className="control-label" htmlFor={id}>
      {`${label}`}
    </Label>
  )

  return (
    <InputContainer>
      {label && <InputFormLabel label={label} id={name} />}

      {mask ? (
        <MaskInput
          mask={mask}
          guide={false}
          id={name}
          type={type}
          error={touched && error ? error : undefined}
          onChange={onFieldChange}
          onBlur={onFieldBlur}
          {...input}
          {...props}
          data-testid={`${name}-input-field`}
        />
      ) : (
        <Input
          id={name}
          type={type}
          error={touched && error ? error : undefined}
          onChange={onFieldChange}
          onBlur={onFieldBlur}
          {...input}
          {...props}
          data-testid={`${name}-input-field`}
        />
      )}
      {touched && <ErrorContainer>{error}</ErrorContainer>}
    </InputContainer>
  )
}

InputForm.defaultProps = {
  type: 'text',
}

InputForm.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  mask: PropTypes.oneOfType([PropTypes.array, PropTypes.func]),
  revertMask: PropTypes.func,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func,
}

export default InputForm
