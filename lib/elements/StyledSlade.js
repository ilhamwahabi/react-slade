import styled from 'styled-components'

const StyledSlade = styled.main`
  position: fixed;
  display: ${props => props.open ? 'flex' : 'none'};
  height: 100%;
  width: 100%;
  z-index: 200;
  color: black;
  font-size: 15px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export default StyledSlade