import React from 'react';
import PropTypes from 'prop-types';

import Container from '../components/Container';
import Button from '../components/Button';
import Card from '../components/Card';
import Row from '../components/Row';
import Title from '../components/Title';

import drago1 from '../assets/drago1.png';
import drago2 from '../assets/drago2.png';
import drago3 from '../assets/drago3.png';

const Customized = ({ openSlade }) => (
  <Container bg="#FF6D00">
    <Row center height="100px">
      <Title>Customized Configuration</Title>
    </Row>
    <Row>
      <Card onClick={() => openSlade('custom', 0)} src={drago1} />
      <Card onClick={() => openSlade('custom', 1)} src={drago2} />
      <Card onClick={() => openSlade('custom', 2)} src={drago3} />
    </Row>
    <Button color="#FF6D00">Click One of Them</Button>
  </Container>
);

Customized.propTypes = {
  openSlade: PropTypes.func.isRequired,
};

export default Customized;
