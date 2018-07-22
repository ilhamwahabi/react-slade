import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Slade extends Component {
  render() {
    return (
      <div className="slade">
        <div className="slade-item">{ items[0] }</div>
      </div>
    )
  }
}

Slade.propTypes = {
  items: PropTypes.arrayOf(PropTypes.instanceOf(Component)).isRequired
}

export default Slade;