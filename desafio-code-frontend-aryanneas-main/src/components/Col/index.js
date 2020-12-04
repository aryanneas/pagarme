import styled from 'styled-components'

const Col = styled.div`
  display: ${(props) => props.size || 'flex'};
  width: 100%;
`

export default Col
