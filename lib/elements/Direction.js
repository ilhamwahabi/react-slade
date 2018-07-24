import styled from 'styled-components'
import { shakeLeft, shakeRight } from '../animations/shake'

const Direction = styled.div`
  display: inherit;
  max-width: 20%;
  max-height: 20%;
  animation: ${props => props.start ? shakeRight.toString() : shakeLeft.toString()} 1s ease-out infinite;
`

export default Direction;