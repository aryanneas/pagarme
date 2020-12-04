import React from 'react'

import Header from '../../components/Header'

import Page404 from '../../assets/img/404.svg'

import { Wrapper, H1 } from './style'

const NotFound = () => {
  return (
    <>
      <Header title="Voltar" />
      <Wrapper>
        <img src={Page404} alt="Página não encontrada" />
        <H1>Ooops! Página não encontrada</H1>
      </Wrapper>
    </>
  )
}
export default NotFound
