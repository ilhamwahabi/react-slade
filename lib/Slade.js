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

  render() {
    return (
      <div className="slade">
        <Direction />
        <Dialog />
        <Direction />
      </div>
    )
  }
}

Slade.propTypes = {
  open: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.instanceOf(Component)),
  index: PropTypes.instanceOf
}

export default Slade
