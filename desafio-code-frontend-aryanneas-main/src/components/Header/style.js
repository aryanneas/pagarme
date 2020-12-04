import styled from 'styled-components'
import { sizes } from '../../utils/responsive'

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 2%;
  background-color: #f2f2f3;

  @media (max-width: ${sizes.md}) {
    padding: 5%;
  }
`

export const Title = styled.p`
  color: #1d1647;
  font-size: 16px;
  margin: auto;
`
