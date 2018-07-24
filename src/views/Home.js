import React, { Component } from 'react'
import Slade from '../../lib/Slade'

import Container from '../components/Container'
import Button from '../components/Button';

class Home extends Component {
  state = {
    open: false,
    index: 1
  }

  openSlade = () => {
    this.setState({ open: true })
  }

  closeSlade = () => {
    this.setState({ open: false })
  }

  render() {
    return (
      <Container>
        <Button onClick={this.openSlade}>Show Dialog</Button>
        <Slade open={this.state.open} index={this.state.index} closeSlade={this.closeSlade} />
      </Container>
    )
  }
}

export default Home;