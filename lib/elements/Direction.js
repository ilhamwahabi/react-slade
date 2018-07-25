import styled from 'styled-components'
import { shakeLeft, shakeRight, shakeUp, shakeDown } from '../animations/shake'

const Direction = styled.div`
  display: inherit;
  max-width: 20%;
  max-height: 20%;
  animation: ${props => props.start ? shakeLeft : shakeRight} 1s ease-out infinite;

  @media (max-width: 481px) {
    animation: ${props => props.start ? shakeUp : shakeDown} 1s ease-out infinite;
  }
`

export default Direction;