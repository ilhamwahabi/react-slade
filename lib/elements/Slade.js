import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Slade extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentIndex: props.index
    }
  }
  
  closeSlade = () => {}
  turnNextSlide = () => {}
  turnPreviousSlade = () => {}

  render() {
    return (
      <div className="slade">
        <div className="slade-item">{ items[0] }</div>
      </div>
    )
  }
}

Slade.propTypes = {
  open: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(PropTypes.instanceOf(Component)).isRequired,
  index: PropTypes.instanceOf.isRequired
}

export default Slade;