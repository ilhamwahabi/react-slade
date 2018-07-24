import React, { Component } from 'react'
import Slade from '../../lib/Slade'

import Container from '../components/Container'
import Button from '../components/Button';

class Home extends Component {
  state = {
    open: false,
    index: 1
  }

  render() {
    return (
      <Container>
        <Button>Show Dialog</Button>
        <Slade open={this.state.open} index={this.state.index} />
      </Container>
    )
  }
}

export default Home;