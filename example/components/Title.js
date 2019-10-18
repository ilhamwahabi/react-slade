import styled from 'styled-components';

const Title = styled.p`
  font-size: 30px;
  font-family: Arial, sans-serif;
  color: ${({ color }) => color || 'white'};
`;

export default Title;
