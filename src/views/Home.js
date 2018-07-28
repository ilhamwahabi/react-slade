import React, { Component, Fragment } from 'react'
import Slade from '../../lib/index'

import Basic from '../sections/Basic';
import Customized from '../sections/Customized';
import Image from '../components/Dummy/Image'

const customArrow = 'https://puu.sh/B4aGY/132a4ca991.png'
const bg = 'linear-gradient(to right, #00c6ff, #0072ff)'

const basicItems = [ 
  <Image src={require(`../assets/drastle1.png`)} />,
  <Image src={require(`../assets/drastle2.png`)} />,
  <Image src={require(`../assets/drastle3.png`)} />
]

const customItems = [ 
  <Image src={require(`../assets/drago1.png`)} />,
  <Image src={require(`../assets/drago2.png`)} />,
  <Image src={require(`../assets/drago3.png`)} />
]

class Home extends Component {
  state = {
    open: false,
    index: 0,
    items: basicItems,
    backdrop: undefined,
    arrow: undefined
  }

  setItems = (type, i) => {
    switch (type) {
      case 'basic': return this.setState({ items: basicItems })
      case 'custom': return this.setState({ index: i, items: customItems, backdrop: bg, arrow: customArrow })
      default: return []
    }
  }

  openSlade = (type, i) => { this.setItems(type, i); this.setState({ open: true }) }
  closeSlade = () => { this.setState({ open: false, items: [], index: 0, backdrop: undefined, arrow: undefined }) }
  nextSlade = () => { this.setState({ index: this.state.index + 1 }) }
  previousSlade = () => { this.setState({ index: this.state.index - 1 }) }

  render() {
    return (
      <Fragment>
        <Slade
          open={this.state.open} 
          items={this.state.items} 
          index={this.state.index} 
          closeSlade={this.closeSlade}
          nextSlade={this.nextSlade}
          previousSlade={this.previousSlade}
          backdrop={this.state.backdrop}
          rightArrow={this.state.arrow}
        />
        <Basic openSlade={this.openSlade} />
        <Customized openSlade={this.openSlade} />
      </Fragment>
    )
  }
}

export default Home;