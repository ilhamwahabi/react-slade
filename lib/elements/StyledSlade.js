import styled from 'styled-components'
import { fadeIn, fadeOut } from '../animations/fade'

const StyledSlade = styled.main`
  position: fixed;
  height: 100%;
  width: 100%;
  color: black;
  font-size: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: ${props => props.open ? 200 : -1};
  opacity: ${props => props.open ? 1 : 0};
  animation: ${props => props.open ? fadeIn : fadeOut} .2s ease-out 1;

  @media (max-width: 481px) {
    flex-direction: column;
  }
`
  
export default StyledSlade
  // display: ${props => props.open ? 'flex' : 'none'};