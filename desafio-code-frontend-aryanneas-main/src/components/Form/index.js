import React from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'

import Button from '../../components/Button'

const Form = ({
  children,
  name,
  initialValues,
  validationSchema,
  onSubmit,
  onSubmitLabel,
}) => {
  const submitFunction = async (values, helpers) => {
    const { setSubmitting } = helpers

    await onSubmit(values, helpers)

    setSubmitting(false)
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitFunction}
      validationSchema={validationSchema}
      validateOnMount
    >
      {({ handleSubmit, isValid, isSubmitting }) => (
        <form name={name} onSubmit={handleSubmit}>
          {children}

          <Button
            disabled={!isValid || isSubmitting}
            data-testid={`${name}-submit-button`}
            type="submit"
            name={onSubmitLabel}
          />
        </form>
      )}
    </Formik>
  )
}

Form.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.elementType,
    PropTypes.object,
    PropTypes.array,
    PropTypes.element,
  ]),
  name: PropTypes.string.isRequired,
  initialValues: PropTypes.object.isRequired,
  validationSchema: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  onSubmitLabel: PropTypes.string,
}

export default Form
