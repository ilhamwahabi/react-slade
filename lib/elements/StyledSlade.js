import styled from 'styled-components';
import { fadeIn, fadeOut } from '../animations/fade';

const StyledSlade = styled.main`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  color: black;
  font-size: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: ${({ open }) => (open ? 200 : -1)};
  opacity: ${({ open }) => (open ? 1 : 0)};
  animation-name: ${({ open }) => (open ? fadeIn : fadeOut)};
  animation-duration: 0.3s;
  animation-timing-function: ease-out;
  animation-iteration-count: 1;

  @media (max-width: 481px) {
    flex-direction: column;
  }
`;

export default StyledSlade;
