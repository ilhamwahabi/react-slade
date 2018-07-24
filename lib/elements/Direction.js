import styled, { keyframes } from 'styled-components'

const shakeLeft = keyframes`
  0% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(15px);
  }

  100% {
    transform: translateX(0);
  }
`

const shakeRight = keyframes`
  0% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(-15px);
  }

  100% {
    transform: translateX(0);
  }
`

const Direction = styled.div`
  max-width: 20%;
  max-height: 20%;
  animation: ${props => props.start ? shakeRight : shakeLeft} 1s ease-out infinite;
`

export default Direction;