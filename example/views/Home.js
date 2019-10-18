import React, { Component, Fragment } from 'react';

import Slade from '../../lib/Slade';

import Basic from '../sections/Basic';
import Image from '../components/Image';

import drastle1 from '../assets/drastle1.png';
import drastle2 from '../assets/drastle2.png';
import drastle3 from '../assets/drastle3.png';

const basicItems = [<Image src={drastle1} />, <Image src={drastle2} />, <Image src={drastle3} />];

class Home extends Component {
  state = {
    open: false,
    index: 0,
    items: basicItems,
    backdrop: undefined,
    arrow: undefined,
  };

  setItems = () => {
    this.setState({ items: basicItems });
  };

  openSlade = () => {
    this.setItems();
    this.setState({ open: true });
  };

  closeSlade = () => {
    this.setState({
      open: false,
      index: 0,
      backdrop: undefined,
      arrow: undefined,
    });
  };

  nextSlade = currentIndex => {
    this.setState({ index: currentIndex + 1 });
  };

  previousSlade = currentIndex => {
    this.setState({ index: currentIndex - 1 });
  };

  render() {
    const { open, items, index, backdrop, arrow } = this.state;

    return (
      <Fragment>
        <Basic openSlade={this.openSlade} />
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
      </Fragment>
    );
  }
}

export default Home;
