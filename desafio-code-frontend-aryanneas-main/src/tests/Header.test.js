import React from 'react'
import { render } from '@testing-library/react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from '../components/Header'

const title = "Hi! I'm a header title"

describe('Header component', () => {
  it('should render', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Switch>
          <Route>
            <Header title={title} />
          </Route>
        </Switch>
      </BrowserRouter>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
