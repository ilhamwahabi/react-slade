import React, { Component, Fragment } from 'react'



import Image from '../components/Dummy/Image'
import Basic from '../sections/Basic';

class Home extends Component {
  state = {
    open: false,
    index: 0,
    items: [ 
      <Image src={require(`../assets/drastle1.png`)} />,
      <Image src={require(`../assets/drastle2.png`)} />,
      <Image src={require(`../assets/drastle3.png`)} />
    ]
  }

  openSlade = () => { this.setState({ open: true }) }
  closeSlade = () => { this.setState({ open: false }) }
  nextSlade = () => { this.setState({ index: this.state.index + 1 }) }
  previousSlade = () => { this.setState({ index: this.state.index - 1 }) }

  render() {
    return (
      <Fragment>
        <Basic 
          open={this.state.open} index={this.state.index} items={this.state.items} 
          openSlade={this.openSlade} closeSlade={this.closeSlade}
          nextSlade={this.nextSlade} previousSlade={this.previousSlade}  
        />
      </Fragment>
    )
  }
}

export default Home;