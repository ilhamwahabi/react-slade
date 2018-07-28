import styled from 'styled-components'

const Row = styled.div`
  height: ${props => props.height ? props.height : '250px'};
  width: 75%;
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.center ? 'center' : 'space-between'};
  align-items: center;
  margin-bottom: 25px;
  text-align: center;

  @media (max-width: 721px) {
    flex-direction: column;
  }

  @media (max-width: 481px) {
    height: ${props => props.center ? 'initial' : '400px'};
    margin-bottom: ${props => props.center ? '0' : '25px'};
  }
`

export default Row;