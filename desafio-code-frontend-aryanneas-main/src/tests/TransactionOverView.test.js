import React from 'react'
import { render } from '@testing-library/react'

import Transactionsontext from '../pages/TransactionContext'
import TransactionOverview from '../components/TransactionOverView'

const TRANSACTIONS = [
  {
    amount: 10000,
    buyer_document: '12345678912',
    credit_card_cvv: '123',
    credit_card_expiration_date: '0121',
    credit_card_holder_name: 'JOAO S SAURO',
    credit_card_number: '4111111111111111',
    date: '2020-11-10T19:43:56.451Z',
    id: 1,
    status: 'paid',
  },
]

const ComponentProvider = () => (
  <Transactionsontext.Provider
    value={{
      transactions: TRANSACTIONS,
      setTransactions: () => {},
    }}
  >
    <TransactionOverview />
  </Transactionsontext.Provider>
)

describe('TransactionOverView page', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<ComponentProvider />)
    expect(asFragment()).toMatchSnapshot()
  })
})
