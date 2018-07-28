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

* [Examples](#examples)
* [Installation](#installation)
* [API Documentation](#api-documentation)
* [Usage](#usage)

# Examples

[react-slade examples page](https://manuverio.github.io/react-slade/)

# Installation

To install, you can use [npm](https://www.npmjs.com/package/react-slade) and [yarn](https://yarnpkg.com/en/package/react-slade) :
```shell
$ npm install react-slade
or
$ yarn add react-slade
```

# API Documentation

name | type | description | is required
--- | --- | --- | ---
open | `boolean` | defines the state when the Slade is open or not | `true`
items | `array` | array of Component that will be slide-able | `true`
index | `int` | defines which Component is showed when the open become true | `true`
closeSlade | `function` | close active Slade with change the `open` to false | `true`
nextSlade | `function` | increment current index of Slade | `true`
previousSlade | `function` | decrement current index of Slade | `true`
backdrop | `string` | you can put  `red`, `rgba(0,0,0,0.5)` or `https://example.com/bg.png/` | `false`
rightArrow | `string` | you can put `svg component` (100 x 60) or `https://example.com/arr.png/`, if you change right arrow, all arrow will automatically changed and got rotated | `false` 

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

  nextSlade = () => {
    this.setState({ index: this.state.index + 1 })
  }

  previousSlade = () => {
    this.setState({ index: this.state.index - 1 })
  }

  render() {
    return (
      <Container>
        <Slade 
          items={this.state.items} 
          open={this.state.open} 
          index={this.state.index} 
          closeSlade={this.closeSlade}
          nextSlade={this.nextSlade}
          previousSlade={this.previousSlade} 
        />
        <Button onClick={this.openSlade}>Show Dialog</Button>
      </Container>
    )
  }
}
```

# Current Problem
1. You must put Slade component __above__ all items (look examples above)
2. `backdrop` and `arrow` not support path yet
3. Dont forget define dimension for you passed component items (media query is important too)