import styled from 'styled-components'
import { sizes } from '../../utils/responsive'

export const CustomButton = styled.button`
  width: 90%;
  justify-content: center;
  position: absolute;
  bottom: 5%;
  left: 5%;
  right: 5%;
  background-color: #3f2787;
  color: #fff;
  border: 1px solid #3f2787;
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 8px;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: opacity 0.3s;
  &:hover,
  &:focus {
    opacity: 0.96;
  }
  &:disabled {
    background-color: #a0a0a0;
    border-color: #a0a0a0;
    cursor: not-allowed;
  }
  @media (min-width: ${sizes.md}) {
    width: 30%;
    margin: auto;
  }
  @media (min-width: ${sizes.lg}) {
    width: 20%;
    margin: auto;
  }
`

export const PlusIcon = styled.div`
  display: flex;
  padding-right: 10px;
`
