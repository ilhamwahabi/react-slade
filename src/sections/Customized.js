import React from 'react'
import Container from '../components/Container'
import Button from '../components/Button'
import Card from '../components/Card';
import Row from '../components/Row';
import Title from '../components/Title';

const Customized = ({ openSlade }) => (
  <Container bg={"#FF6D00"}>
    <Row center height="100px">
      <Title>Customized Configuration</Title>
    </Row>
    <Row>
      <Card onClick={() => openSlade('custom', 0)} src={require("../assets/drago1.png")} />  
      <Card onClick={() => openSlade('custom', 1)} src={require("../assets/drago2.png")} />  
      <Card onClick={() => openSlade('custom', 2)} src={require("../assets/drago3.png")} />  
    </Row>
    <Button color="#FF6D00">Click One of Them</Button>
  </Container>
)

export default Customized