import { formatSubmitPayload } from '../../utils/formatting'

import Notification from '../../components/Notification'
const POST_TRANSACTION_URL = 'http://localhost:3001/transactions'

const submitTransaction = async (
  transaction,
  newTransactionData,
  setNewTransactionData,
  transactions,
  setTransactions
) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formatSubmitPayload(transaction)),
  }
  const response = await fetch(POST_TRANSACTION_URL, requestOptions)
  if (response.status !== 200) Notification.error(response.statusText)
  const data = await response.json()
  if (data) {
    Notification.success('Transação criada com sucesso!')
    setNewTransactionData(data)
    setTransactions(
      Object.values(Object.assign({}, newTransactionData, transactions))
    )
  } else {
    Notification.error(
      'Erro ao tentar criar transação. Por favor, tente novamente!'
    )
  }
}

export default submitTransaction
