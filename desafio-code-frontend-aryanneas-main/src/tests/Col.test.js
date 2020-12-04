import React from 'react'
import { render } from '@testing-library/react'

import Col from '../components/Col'

const text = 'Hello World!'

describe('Col component', () => {
  it('should render', () => {
    const { asFragment } = render(<Col />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render children', () => {
    const { getByText } = render(
      <Col>
        <p>{text}</p>
      </Col>
    )

    getByText(text)
  })
})
