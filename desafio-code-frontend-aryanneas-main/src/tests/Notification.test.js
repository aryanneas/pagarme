import React from 'react'
import { render } from '@testing-library/react'

import Notification from '../components/Notification'

describe('Notification component', () => {
  it('should render and consume notifications', async () => {
    const { asFragment } = render(<Notification />)
    expect(asFragment()).toMatchSnapshot()
  })
})
