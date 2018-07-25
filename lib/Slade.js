// Eksternal Import
import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

// Internal Import
import StyledSlade from './elements/StyledSlade'
import Backdrop from './elements/Backdrop'
import Svg from './elements/Svg'
import Direction from './elements/Direction'
import Dialog from './elements/Dialog'

class Slade extends Component {
  isStartItem = () => this.props.index === 0
  isEndItem = () => this.props.index + 1 === this.props.items.length 

  previousSlade = () => {
    if (!this.isStartItem()) {
      this.props.previousSlade();
    }
  }

  nextSlade = () => {
    if (!this.isEndItem()) {
      this.props.nextSlade();
    }
  }

  render() {
    return (
      <Fragment>
        <Backdrop backdrop={this.props.backdrop} open={this.props.open} />
        <StyledSlade onClick={this.props.closeSlade}  open={this.props.open}>
          <Direction start={1} onClick={e => { e.stopPropagation(); this.previousSlade()}}>
            <Svg isStartItem={this.isStartItem()} start={1} width="100" height="60">
              <polyline points="20 5, 50 30, 20 55"></polyline>
            </Svg>
          </Direction>
          <Dialog onClick={e => e.stopPropagation()}>
            { this.props.items[this.props.index] }
          </Dialog>
          <Direction end={1} onClick={e => { e.stopPropagation(); this.nextSlade()}}>
            <Svg isEndItem={this.isEndItem()} end={1} width="100" height="60">
              <polyline points="20 5, 50 30, 20 55"></polyline>
            </Svg>
          </Direction>
        </StyledSlade>
      </Fragment>
    )
  }
} 

Slade.defaultProps = {
  backdrop: 'rgba(0, 0, 0, 0.5)'
}

Slade.propTypes = {
  open: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  backdrop: PropTypes.string,

  closeSlade: PropTypes.func.isRequired,
  nextSlade: PropTypes.func.isRequired,
  previousSlade: PropTypes.func.isRequired
}

export default Slade
