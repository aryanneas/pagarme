import styled from 'styled-components'

export const TransactionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f2f2f3;
  padding: 0 5%;
  &:last-child {
    border-bottom: none;
  }
`

export const ClientInfo = styled.div`
  color: #454550;
`

export const Name = styled.p`
  font-weight: bold;
`

export const TransactionInfo = styled.div`
  text-align: right;
`

export const Status = styled.p`
  font-size: 14px;
  color: #72737a;
`
export const Value = styled.p`
  color: #2b2b2b;
  font-weight: bold;
`
