import styled from 'styled-components';

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: ${props => (props.open ? 'block' : 'none')};
  height: 100%;
  width: 100%;
  z-index: 100;
  ${props => (props.backdrop.startsWith('http') ? `background: url(${props.backdrop}) no-repeat center / cover` : `background: ${props.backdrop}`)};
`;

export default Backdrop;
