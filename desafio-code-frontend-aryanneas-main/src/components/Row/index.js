import styled from 'styled-components'

import { sizes } from '../../utils/responsive/index'

const Row = styled.div`
  @media screen and (min-width: ${sizes.md}) {
    display: flex;
  }

  word-break: break-word;
  display: flex;
`

export default Row
