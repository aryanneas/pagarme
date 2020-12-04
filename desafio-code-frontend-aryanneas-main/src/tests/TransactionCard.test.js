import React from 'react'
import { render } from '@testing-library/react'

import TransactionContext from '../pages/TransactionContext'
import TransactionCard from '../components/TransactionCard'

const ComponentConsumer = () => (
  <TransactionContext.Consumer>
    {() => <TransactionCard />}
  </TransactionContext.Consumer>
)

describe('TransactionCard page', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<ComponentConsumer />)
    expect(asFragment()).toMatchSnapshot()
  })
})
