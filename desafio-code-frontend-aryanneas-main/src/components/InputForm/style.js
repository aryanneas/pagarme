import styled from 'styled-components'
import MaskedInput from 'react-text-mask'

export const Input = styled.input`
  font-size: 18px;
  padding: 0 0 0 10px;
  border: 1px solid ${(props) => (props.error ? 'red' : '#8B8B92')};
  border-radius: 6px;
  width: 100%;
  height: 48px;
  margin: 10px 0;
  color: #595a63;
  &:focus {
    border: 1px solid ${(props) => (props.error ? 'red' : '#8B8B92')};
  }
`

export const Label = styled.span`
  position: relative;
  background: #fff;
  left: 20px;
  color: #8b8b92;
  top: 20px;
`

export const MaskInput = styled(MaskedInput)`
  font-size: 18px;
  padding: 0 0 0 10px;
  margin: 10px 0;
  border: 1px solid ${(props) => (props.error ? 'red' : '#8B8B92')};
  border-radius: 6px;
  width: 100%;
  height: 40px;
  &:focus {
    &::placeholder {
      color: transparent;
    }
    border: 1px solid ${(props) => (props.error ? 'red' : '#8B8B92')};
  }
`

export const InputContainer = styled.div`
  width: 100%;
  padding: 0 10px;
`

export const ErrorContainer = styled.p`
  padding: 0;
  margin: 0;
  color: #ff4040;
  font-size: 16px;
  width: 100%;
`
