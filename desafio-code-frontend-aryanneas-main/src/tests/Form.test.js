import React from 'react'
import { render, waitForElement, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Form from '../components/Form'
import InputForm from '../components/InputForm'

const FORM_NAME = 'test'
const inputs = ['first', 'second']
const initialValues = {}
const handleSubmit = jest.fn()

const submitButtonIsDisabled = async (getByTestId) => {
  const currentButton = await waitForElement(() => getByTestId('test-button'))
  return currentButton.disabled
}

describe('Form component', () => {
  afterEach(cleanup)

  it('should render', () => {
    const { asFragment, getByTestId } = render(
      <Form
        name={FORM_NAME}
        onSubmit={handleSubmit}
        initialValues={initialValues}
        onSubmitLabel={FORM_NAME}
      />
    )
    expect(asFragment()).toMatchSnapshot()

    const submitButton = getByTestId('test-button')
    expect(submitButton.disabled).toBe(false)
  })

  it('should only allow submission if all fields are filled correctly', async () => {
    const { asFragment, getByTestId } = render(
      <Form
        name={FORM_NAME}
        onSubmit={handleSubmit}
        onSubmitLabel={FORM_NAME}
        initialValues={initialValues}
      >
        <InputForm required name="first" label="first input" />
        <InputForm required name="second" label="second input" />
      </Form>
    )

    expect(await submitButtonIsDisabled(getByTestId)).toBe(false)

    inputs.forEach((name) => {
      const input = getByTestId(`${name}-input-field`)
      userEvent.type(input, `hello world ${name}`)
    })
    expect(await submitButtonIsDisabled(getByTestId)).toBe(false)

    expect(asFragment()).toMatchSnapshot()
  })
})
