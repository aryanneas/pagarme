import React, { useState, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import NewTransaction from './pages/NewTransaction'
import NotFound from './pages/NotFound'
import TransactionContext from './pages/TransactionContext'

import getAllTransactions from './pages/apis/getTransactionsAPI'

const App = () => {
  const [transactions, setTransactions] = useState(null)
  const value = { transactions, setTransactions }

  useEffect(() => {
    getAllTransactions(setTransactions)
  }, [])

  return (
    <TransactionContext.Provider value={value}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/nova-transacao" component={NewTransaction} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </TransactionContext.Provider>
  )
}

export default App
