import React from 'react';
import PropTypes from 'prop-types';

import Container from '../components/Container';
import Button from '../components/Button';
import Row from '../components/Row';
import Title from '../components/Title';

const Basic = ({ openSlade }) => (
  <Container>
    <Row center>
      <Title>Default Configuration</Title>
    </Row>
    <Button onClick={() => openSlade('basic')}>Show Dragon Slade</Button>
  </Container>
);

Basic.propTypes = {
  openSlade: PropTypes.func.isRequired,
};

export default Basic;
