import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Direction from './elements/Direction'
import Dialog from './elements/Dialog'

class Slade extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentIndex: props.index
    }
  }

  static defaultStyles = {
    color: "blue",
    fontSize: "20px"
  }

  render() {
    return (
      <div className="slade" style={Slade.defaultStyles}>
        I'm slade
        <Direction />
        <Dialog />
        <Direction />
      </div>
    )
  }
}

Slade.propTypes = {
  open: PropTypes.bool,
  items: PropTypes.array,
  index: PropTypes.number
}

export default Slade
