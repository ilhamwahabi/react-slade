import styled from 'styled-components';

const Svg = styled.svg`
  display: inherit;
  stroke: ${props => (props.isStartItem || props.isEndItem ? 'transparent' : 'white')};
  stroke-width: 7;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  margin: 7.5px;
  cursor: ${props => (props.isStartItem || props.isEndItem ? 'initial' : 'pointer')};
  transform: ${props => (props.start ? 'rotate(180deg)' : 'rotate(0)')};

  @media (max-width: 481px) {
    transform: ${props => (props.start ? 'rotate(-90deg)' : 'rotate(90deg)')};
  }
`;

export default Svg;
