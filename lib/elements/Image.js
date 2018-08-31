import styled from 'styled-components';

const Image = styled.img`
  max-height: 60px;
  display: block;
  visibility: ${({ isEdge }) => (isEdge ? 'hidden' : 'visible')};
  cursor: pointer;
  margin: 15px;
  transform: ${({ start }) => (start ? 'rotate(180deg)' : 'rotate(0)')};

  @media (max-width: 481px) {
    transform: ${({ start }) => (start ? 'rotate(-90deg)' : 'rotate(90deg)')};
  }
`;

export default Image;
