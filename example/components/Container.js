import styled from 'styled-components';

const Container = styled.main`
  min-height: 100vh;
  width: 100%;
  background-color: ${({ bg }) => bg || '#0091EA'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Container;
