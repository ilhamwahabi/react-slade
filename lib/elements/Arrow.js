import styled from 'styled-components';
import {
  shakeLeft, shakeRight, shakeUp, shakeDown,
} from '../animations/shake';

const Arrow = styled.div`
  display: inherit;
  max-width: 20%;
  max-height: 20%;
  animation-name: ${props => (props.start ? shakeLeft : shakeRight)};
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-iteration-count: infinite;

  @media (max-width: 481px) {
    animation-name: ${props => (props.start ? shakeUp : shakeDown)};
  }
`;

export default Arrow;
