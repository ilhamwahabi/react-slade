import styled from 'styled-components'

const Backdrop = styled.div`
  position: fixed;
  display: ${props => props.open ? 'block' : 'none'};
  height: 100%;
  width: 100%;
  z-index: 100;
  background: rgba(0, 0, 0, 0.5);
`

export default Backdrop