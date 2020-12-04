import React from 'react'
import { Link } from 'react-router-dom'

import Plus from '../../assets/img/plus.png'

import TransactionOverview from '../../components/TransactionOverView'
import TransactionCard from '../../components/TransactionCard'
import Button from '../../components/Button'

import { Icon, TransactionsContent } from './style'

const Home = () => {
  return (
    <>
      <TransactionOverview />
      <TransactionsContent>
        <TransactionCard />
      </TransactionsContent>

      <Link to="/nova-transacao">
        <Button
          name="Criar transação"
          plusIcon={<Icon src={Plus} alt="ícone adicionar" />}
        />
      </Link>
    </>
  )
}

export default Home
