import React from 'react'
import { render } from '@testing-library/react'

import Row from '../components/Row'

const text = 'Hello World!'

describe('Row component', () => {
  it('should render', () => {
    const { asFragment } = render(<Row />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render children correctly', () => {
    const { getByText } = render(
      <Row>
        <p>{text}</p>
      </Row>
    )

    getByText(text)
  })
})
