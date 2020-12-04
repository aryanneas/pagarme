import React, { useState, useContext } from 'react'
import * as Yup from 'yup'

import Header from '../../components/Header'
import Form from '../../components/Form'
import InputForm from '../../components/InputForm'
import Col from '../../components/Col'
import Row from '../../components/Row'
import Notification from '../../components/Notification'

import {
  cpfMask,
  cvvMask,
  expirationDateMask,
  cardNumberMask,
  currencyMask,
  keepOnlyDigits,
} from '../../utils/mask'

import TransactionContext from '../TransactionContext'

import { FormContent } from './style'

import submitTransaction from '../apis/postNewTransactionAPI'

const REGEX_ONLY_LETTERS = /^[a-zA-Z]\D+$/

const NewTransaction = () => {
  const [newTransactionData, setNewTransactionData] = useState({})
  const { transactions, setTransactions } = useContext(TransactionContext)

  const validation = Yup.object().shape({
    name: Yup.string()
      .min(2, 'O campo deve conter 2 ou mais caracteres')
      .required('Campo obrigatório')
      .matches(REGEX_ONLY_LETTERS, 'Só é permitido letras'),
    cpf: Yup.string()
      .min(11, 'O campo deve conter 11 caracteres')
      .required('Campo obrigatório'),
    cardNumber: Yup.string()
      .min(16, 'O campo deve conter 16 caracteres')
      .required('Campo obrigatório'),
    expirationDate: Yup.string().required('Campo obrigatório'),
    cvv: Yup.string().required('Campo obrigatório'),
    transactionValue: Yup.number().required('Campo obrigatório'),
  })

  const initialValues = {
    name: '',
    cpf: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    transactionValue: '',
  }

  return (
    <>
      <Notification />
      <Header title="Nova Transação" />

      <FormContent sm={12}>
        <Form
          name="newTransactionForm"
          initialValues={initialValues}
          validationSchema={validation}
          onSubmit={(values) =>
            submitTransaction(
              values,
              newTransactionData,
              setNewTransactionData,
              transactions,
              setTransactions
            )
          }
          onSubmitLabel="Criar transação"
        >
          <Col sm={10}>
            <InputForm name="name" label="Nome da pessoa compradora" required />
          </Col>
          <Col sm={10}>
            <InputForm name="cpf" label="CPF" required mask={cpfMask} />
          </Col>
          <Col sm={10}>
            <InputForm
              name="cardNumber"
              label="N° do cartão"
              required
              mask={cardNumberMask}
            />
          </Col>
          <Row>
            <Col sm={5} xs={3}>
              <InputForm
                name="expirationDate"
                label="Data de expiração"
                required
                mask={expirationDateMask}
              />
            </Col>
            <Col sm={5} xs={3}>
              <InputForm name="cvv" label="CVV" required mask={cvvMask} />
            </Col>
          </Row>
          <Col sm={10}>
            <InputForm
              name="transactionValue"
              label="Valor da transação"
              required
              mask={currencyMask}
              revertMask={(v) => parseInt(keepOnlyDigits(v), 10) || ''}
            />
          </Col>
        </Form>
      </FormContent>
    </>
  )
}
export default NewTransaction
