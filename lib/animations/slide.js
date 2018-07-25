import { keyframes } from 'styled-components'

const slideDown = keyframes`
  from {
    transform: translateY(-10px);
  }

  to {
    transform: translateY(0px);
  }
`

const slideUp = keyframes`
  from {
    transform: translateY(10px);
  }

  to {
    transform: translateY(0px);
  }
`

export { slideDown, slideUp }