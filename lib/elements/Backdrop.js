import styled from 'styled-components';

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: ${({ open }) => (open ? 'block' : 'none')};
  height: 100%;
  width: 100%;
  z-index: 100;
  ${({ backdrop }) => (backdrop.startsWith('http') ? `background: url(${backdrop}) no-repeat center / cover` : `background: ${backdrop}`)};
`;

export default Backdrop;
