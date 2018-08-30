import React, { Component, Fragment } from 'react';
import Slade from '../../lib/Slade';

import Basic from '../sections/Basic';
import Customized from '../sections/Customized';
import Image from '../components/Dummy/Image';

import drastle1 from '../assets/drastle1.png';
import drastle2 from '../assets/drastle2.png';
import drastle3 from '../assets/drastle3.png';
import drago1 from '../assets/drago1.png';
import drago2 from '../assets/drago2.png';
import drago3 from '../assets/drago3.png';

const bg = 'linear-gradient(to right, #00c6ff, #0072ff)';
const customArrow = 'https://puu.sh/B4aGY/132a4ca991.png';

const basicItems = [
  <Image src={drastle1} />,
  <Image src={drastle2} />,
  <Image src={drastle3} />,
];

const customItems = [
  <Image src={drago1} />,
  <Image src={drago2} />,
  <Image src={drago3} />,
];

class Home extends Component {
  state = {
    open: false,
    index: 0,
    items: basicItems,
    backdrop: undefined,
    arrow: undefined,
  }

  setItems = (type, i) => {
    switch (type) {
      case 'basic': return this.setState({ items: basicItems });
      case 'custom': return this.setState({
        index: i, items: customItems, backdrop: bg, arrow: customArrow,
      });
      default: return [];
    }
  }

  openSlade = (type, i) => { this.setItems(type, i); this.setState({ open: true }); }

  closeSlade = () => {
    this.setState({
      open: false, items: [], index: 0, backdrop: undefined, arrow: undefined,
    });
  }

  nextSlade = (currentIndex) => { this.setState({ index: currentIndex + 1 }); }

  previousSlade = (currentIndex) => { this.setState({ index: currentIndex - 1 }); }

  render() {
    const {
      open, items, index, backdrop, arrow,
    } = this.state;

    return (
      <Fragment>
        <Slade
          open={open}
          items={items}
          index={index}
          closeSlade={this.closeSlade}
          nextSlade={() => this.nextSlade(index)}
          previousSlade={() => this.previousSlade(index)}
          backdrop={backdrop}
          rightArrow={arrow}
        />
        <Basic openSlade={this.openSlade} />
        <Customized openSlade={this.openSlade} />
      </Fragment>
    );
  }
}

export default Home;
