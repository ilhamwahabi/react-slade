import styled from 'styled-components'
import { fadeIn, fadeOut } from '../animations/fade'

const StyledSlade = styled.main`
  position: fixed;
  height: 100%;
  width: 100%;
  color: black;
  font-size: 15px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  display: flex;
  z-index: ${props => props.open ? 200 : -1};
  opacity: ${props => props.open ? 1 : 0};
  animation: ${props => props.open ? fadeIn : fadeOut} .2s ease-out 1;  
`
  
export default StyledSlade
  // display: ${props => props.open ? 'flex' : 'none'};