import styled from 'styled-components'

import Col from '../../components/Col'

import { sizes } from '../../utils/responsive/index'

export const FormContent = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5%;
  @media screen and (max-width: ${sizes.md}) {
    width: 97%;
    margin-top: 7%;
  }
  @media screen and (max-width: ${sizes.sm}) {
    margin-top: 10%;
  }
`
