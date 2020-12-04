import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import BackIcon from '../../assets/img/backIcon.png'

import { HeaderWrapper, Title } from './style'

const Header = ({ title }) => {
  return (
    <nav>
      <HeaderWrapper>
        <Link to="/">
          <img src={BackIcon} alt="voltar" />
        </Link>

        <Title>{title}</Title>
      </HeaderWrapper>
    </nav>
  )
}
Header.propTypes = {
  title: PropTypes.string,
}

export default Header
