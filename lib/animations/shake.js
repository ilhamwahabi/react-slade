import { keyframes } from 'styled-components'

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

export {
  shakeLeft,
  shakeRight
}