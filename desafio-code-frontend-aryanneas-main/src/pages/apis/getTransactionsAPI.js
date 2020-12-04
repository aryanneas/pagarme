import Notification from '../../components/Notification'

const GET_TRANSACTION_URL = 'http://localhost:3001/transactions/'

const getAllTransactions = async (setTransactions) => {
  const fetched = await fetch(GET_TRANSACTION_URL)
  if (fetched.status !== 200) Notification.error(fetched.statusText)
  const response = await fetched.json()
  if (response) setTransactions(response)
  else
    Notification.error(
      'Erro ao carregar as transações. Por favor, recarregue a página!'
    )
}

export default getAllTransactions
