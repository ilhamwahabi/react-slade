# react-slade

<div align="center">
  <p>
    Slideable react dialog of iterable component.  
  </p>
  <a href="https://www.manuver.io/lib/react-slade">
    <img alt="react-slade" src="https://puu.sh/B2SKS/e665783b42.png" height="150px" />
  </a>
</div>

[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)

## Table of Contents

* [Installation](#installation)
* [API Documentation](#api-documentation)
* [Usage](#usage)

# Installation

To install, you can use [npm](https://www.npmjs.com/package/react-slade):
```shell
$ npm install react-slade
```

# API Documentation

name | type | description 
--- | --- | --- | 
open | `boolean` | defines the state when the Slade is open or not 
items | `array` | array of Component that will be slide-able 
index | `int` | defines which Component is showed when the open become true
closeSlade | `function` | close active Slade with change the `open` to false
nextSlade | `function` | increment current index of Slade
previousSlade | `function` | decrement current index of Slade

# Usage

This is example of basic usage

```jsx
import React, { Component } from 'react'
import Slade from 'react-slade'

import Container from '../components/Container'
import Button from '../components/Button';

import Image from '../components/Dummy/Image'

class Home extends Component {
  state = {
    open: false,
    index: 0,
    items: [ 
      <Image src= "url1" />,
      <Image src= "url2" />,
      <Image src= "url3" />
    ]
  }

  openSlade = () => {
    this.setState({ open: true })
  }

  closeSlade = () => {
    this.setState({ open: false })
  }

  nextItem = () => {
    if (this.state.index + 1 !== this.state.items.length) {
      this.setState({ index: this.state.index + 1 })
    }
  }

  previousItem = () => {
    if (this.state.index !== 0) {
      this.setState({ index: this.state.index - 1 })
    }
  }

  render() {
    return (
      <Container>
        <Button onClick={this.openSlade}>Show Dialog</Button>
        <Slade 
          items={this.state.items} 
          open={this.state.open} 
          index={this.state.index} 
          closeSlade={this.closeSlade}
          nextItem={this.nextItem}
          previousItem={this.previousItem} 
        />
      </Container>
    )
  }
}
```