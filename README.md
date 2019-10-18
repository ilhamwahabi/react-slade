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
* [FAQ](#faq)

# Examples

[react-slade examples page](https://manuverio.github.io/react-slade/)

<img src="https://media.giphy.com/media/MX3gs3UOJynShcZFho/giphy.gif">

[you can try live example above here](https://oskm.itb.ac.id/suvenir)

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
backdrop | `string` | predefined color like `red`, rgb/rgba and hsl/hsla like `rgba(0,0,0,0.5)`, or image url like `https://example.com/bg.png/` | `false`
rightArrow | `string` or `svg` | svg component (100 x 60) or image url like `https://example.com/arr.png/`. If you change right arrow, all arrow will automatically changed and got rotated | `false` 

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

# FAQ

Q: I got an error when import from local file, for example `arrow={'./myArrow.svg'}`

A: Ups, sorry this library not supported that feature yet. Feel free to do pull request

Q: Are we still need `media queries` for component that we passed?

A: For best result you must define it by yourself though (i believe in flexibelity)

Q: I think props like `nextSlade` and `previousSlade` is redundant, why not try to remove that item?

A: Again, I believe in flexibelity. You can put your extra feature there. For example you can add confetti when user reach end of slade, or you can disable user to change Slade before doing something, etc