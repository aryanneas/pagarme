import React from 'react'

import {
  formatStatus,
  formatDateTime,
  formatCurrency,
} from '../../utils/formatting'

import {
  TransactionWrapper,
  ClientInfo,
  Name,
  TransactionInfo,
  Status,
  Value,
} from './style'

import TransactionContext from '../../pages/TransactionContext'

const TransactionCard = () => {
  return (
    <TransactionContext.Consumer>
      {(value) =>
        value.transactions
          ? value.transactions.map((transaction) => (
              <TransactionWrapper key={transaction.id}>
                <ClientInfo>
                  <Name>{transaction.credit_card_holder_name}</Name>
                  <p>{formatDateTime(transaction.date)}</p>
                </ClientInfo>

                <TransactionInfo>
                  <Status>{formatStatus(transaction.status)}</Status>
                  <Value>{formatCurrency(transaction.amount)}</Value>
                </TransactionInfo>
              </TransactionWrapper>
            ))
          : null
      }
    </TransactionContext.Consumer>
  )
}

export default TransactionCard
