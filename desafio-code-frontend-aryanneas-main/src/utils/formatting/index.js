import moment from 'moment'
const DATE_TIME_FORMAT = 'DD/MM/YYYY HH:mm'

export const formatDateTime = (dateTimeMoment) => {
  return moment(dateTimeMoment).format(DATE_TIME_FORMAT)
}

export const formatStatus = (status) =>
  status === 'paid' ? 'Paga' : 'Recusada'

export const totalAmount = (amount) => {
  const result = amount.transactions.reduce(
    (accumulatedTotal, transaction) =>
      accumulatedTotal + parseFloat(transaction.amount) * 100,
    0
  )
  return formatCurrency(result)
}

export const formatSubmitPayload = (transaction) => ({
  buyer_document: transaction.cpf,
  credit_card_holder_name: transaction.name,
  credit_card_number: transaction.cardNumber,
  credit_card_expiration_date: transaction.expirationDate,
  credit_card_cvv: transaction.cvv,
  amount: transaction.transactionValue,
})

export const formatCurrency = (amount) =>
  formatFloatToCurrency(convertIntegerUnitsInValue(Number(amount)))

export const formatFloatToCurrency = (value) => {
  const isNegative = value < 0
  if (isNegative) value = value * -1
  const formattedValue = value
    .toFixed(2)
    .split('.')
    .map((part) => part.split(/(?=(?:...)*$)/).join('.'))
    .join(',')
  return `R$ ${isNegative ? '-' : ''}${formattedValue}`
}

export const convertIntegerUnitsInValue = (value) => {
  return parseFloat(value) / 100
}
