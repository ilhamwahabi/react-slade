import React, { Component } from 'react'
import Slade from '../../lib/Slade'

import Container from '../components/Container'
import Button from '../components/Button';

import Image from '../components/Dummy/Image'

class Home extends Component {
  state = {
    open: false,
    index: 0,
    items: [ 
      <Image src={"https://orig00.deviantart.net/ffb7/f/2009/339/5/0/nova_prime_lv8___tf_yugioh_by_tenakan.jpg"} />,
      <Image src={"https://orig00.deviantart.net/de19/f/2012/008/5/b/tiber_septim_yu_gi_oh_card_by_aruon-d4lquqg.png"} />,
      <Image src={"https://orig00.deviantart.net/f4ef/f/2009/176/8/e/yugioh_card____final_showhand_by_blasteg.jpg"} />
    ]
  }

  openSlade = () => { this.setState({ open: true }) }
  closeSlade = () => { this.setState({ open: false }) }
  nextSlade = () => { this.setState({ index: this.state.index + 1 }) }
  previousSlade = () => { this.setState({ index: this.state.index - 1 }) }

  render() {
    return (
      <Container>
        <Button onClick={this.openSlade}>Show Basic Slade</Button>
        <Slade 
          items={this.state.items} 
          open={this.state.open} 
          index={this.state.index} 
          closeSlade={this.closeSlade}
          nextSlade={this.nextSlade}
          previousSlade={this.previousSlade}
        />
      </Container>
    )
  }
}

export default Home;