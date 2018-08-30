import styled from 'styled-components';

const Card = styled.img`
  width: 200px;
  cursor: pointer;

  @media (max-width: 721px) {
    width: 150px;
  }

  @media (max-width: 481px) {
    width: 100px;
  }
`;

export default Card;
