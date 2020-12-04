import React from 'react'
import { render } from '@testing-library/react'

import Form from '../components/Form'
import InputForm from '../components/InputForm'

const initialValue = { value: '' }

describe('InputFormLabel component', () => {
  it('should render', () => {
    const { asFragment, getByLabelText } = render(
      <Form
        name="Test"
        initialValues={initialValue}
        onSubmit={() => console.log('hi!')}
        onSubmitLabel="Finish form"
      >
        <InputForm label="name" name="name here" />
      </Form>
    )

    expect(asFragment()).toMatchSnapshot()
    expect(getByLabelText('name').value).toBe('')
  })

  it('should render with an initial value, if provided', () => {
    const { asFragment, getByLabelText } = render(
      <Form
        name="Test"
        initialValues={initialValue}
        onSubmit={() => console.log('hi!')}
        onSubmitLabel="Finish form"
      >
        <InputForm label="name" name="name here" initialValue="Hello" />
      </Form>
    )

    expect(asFragment()).toMatchSnapshot()
    expect(getByLabelText('name').value).toBe('Hello')
  })
})
