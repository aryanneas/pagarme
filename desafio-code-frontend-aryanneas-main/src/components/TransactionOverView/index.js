import React from 'react'
import { TransactionOverviewWrapper, TextBlack, TextGreen } from './style'

import { totalAmount } from '../../utils/formatting'

import TransactionContext from '../../pages/TransactionContext'

const TransactionOverview = () => {
  return (
    <TransactionContext.Consumer>
      {(value) =>
        value.transactions ? (
          <TransactionOverviewWrapper>
            <TextBlack>Número de transações</TextBlack>
            <TextGreen>{value.transactions.length}</TextGreen>

            <TextBlack>Valor total</TextBlack>
            <TextGreen>{totalAmount(value)}</TextGreen>
          </TransactionOverviewWrapper>
        ) : null
      }
    </TransactionContext.Consumer>
  )
}

export default TransactionOverview
