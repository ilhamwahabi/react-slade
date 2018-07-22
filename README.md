# react-slade

Slideable react dialog of iterable component.

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

name | type | description | default
--- | --- | --- | ---
open | boolean | defines the state when the Slade is open or not | false
items | array | array of Component that will be slide-able | [ ]
index | int | defines which Component is showed when the open become true | 1

# Usage

This is example of basic usage

```jsx
import React, { Component } from 'react'
import Slade from 'react-slade'

import ComponentA from './A'
import ComponentB from './B'
import ComponentC from './C'

class MyComponentExtends extends Component {
  state = {
    items: [
      ComponentA,
      ComponentB,
      ComponentC
    ],
    open: false
  }

  toggleButton = () => {
    this.setState((prevState) => return { open: !prevState.open })
  }

  render() {
    <main>
      <button onClick={toggleButton}>Toggle Slade</button>
      <Slade 
        open={this.state.open}
        items={this.state.items}
        index={1}
      />
    </main>
  }
}
```