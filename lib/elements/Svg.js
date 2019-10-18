import styled from 'styled-components';

const Svg = styled.svg`
  display: inherit;
  stroke: ${({ isEdge }) => (isEdge ? 'transparent' : 'white')};
  stroke-width: 7;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  margin: 7.5px;
  cursor: ${({ isEdge }) => (isEdge ? 'initial' : 'pointer')};
  transform: ${({ start }) => (start ? 'rotate(180deg)' : 'rotate(0)')};

  @media (max-width: 481px) {
    transform: ${({ start }) => (start ? 'rotate(-90deg)' : 'rotate(90deg)')};
  }
`;

export default Svg;
