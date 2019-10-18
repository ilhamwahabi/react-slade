import styled from 'styled-components';

const Button = styled.button`
  font-size: 15px;
  color: ${({ color }) => color || '#0091EA'};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: white;
  padding: 15px 20px;
`;

export default Button;
