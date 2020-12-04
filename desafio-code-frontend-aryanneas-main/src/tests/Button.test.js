import React from 'react'
import { render } from '@testing-library/react'

import Button from '../components/Button'

const Title = 'button title'

describe('Button component', () => {
  it('should render', () => {
    const { asFragment } = render(<Button name={Title} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render the title that is passed', () => {
    const { getByText } = render(<Button name={Title} />)
    getByText(Title)
  })
})
