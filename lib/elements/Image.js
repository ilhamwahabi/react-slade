import styled from 'styled-components'

const Image = styled.img`
  height: 60px;
  display: block;
  visibility: ${props => props.isStartItem || props.isEndItem ? 'hidden' : 'visible'};
  cursor: pointer;
  transform: ${props => props.start ? 'scaleX(-1)' : 'scale(1)'};

  @media (max-width: 481px) {
    transform: ${props => props.start ? 'rotate(-90deg)' : 'rotate(90deg)' };
  }
`

export default Image