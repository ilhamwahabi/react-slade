// Eksternal Import
import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

// Internal Import
import StyledSlade from './elements/StyledSlade'
import Backdrop from './elements/Backdrop'
import Svg from './elements/Svg'
import Image from './elements/Image'
import Arrow from './elements/Arrow'
import Dialog from './elements/Dialog'

const defaultArrow = <polyline points="20 5, 50 30, 20 55" />

class Slade extends Component {
  isStartItem = () => this.props.index === 0
  isEndItem = () => this.props.index + 1 === this.props.items.length 

  previousSlade = () => { if (!this.isStartItem()) this.props.previousSlade() }
  nextSlade = () => { if (!this.isEndItem()) this.props.nextSlade() }

  _renderStartArrow = () => (
    this.props.rightArrow ?
    this.props.rightArrow.startsWith('http') ? 
      <Image isStartItem={this.isStartItem()} start={1} src={ this.props.rightArrow } alt="arrow" /> :
      <Svg isStartItem={this.isStartItem()} start={1} width="100" height="60"> { this.props.rightArrow } </Svg> :
    <Svg isStartItem={this.isStartItem()} start={1} width="100" height="60"> { defaultArrow } </Svg>
  )

  _renderEndArrow = () => (
    this.props.rightArrow ? 
    this.props.rightArrow.startsWith('http') ? 
      <Image isEndItem={this.isEndItem()} src={ this.props.rightArrow } alt="arrow" /> :
      <Svg isEndItem={this.isEndItem()} width="100" height="60"> { this.props.rightArrow } </Svg> :
    <Svg isEndItem={this.isEndItem()} width="100" height="60"> { defaultArrow } </Svg>
  )

  render() {
    const { open, closeSlade, items, index, backdrop } = this.props
    return (
      <Fragment>
        <Backdrop backdrop={backdrop} open={open} />
        <StyledSlade onClick={closeSlade}  open={open}>
          <Arrow start={1} onClick={e => { e.stopPropagation(); this.previousSlade()}}>
            { this._renderStartArrow() }
          </Arrow>
          <Dialog onClick={e => e.stopPropagation()}>
            { items[index] }
          </Dialog>
          <Arrow end={1} onClick={e => { e.stopPropagation(); this.nextSlade()}}>
            { this._renderEndArrow() }
          </Arrow>
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
  rightArrow: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]),

  closeSlade: PropTypes.func.isRequired,
  nextSlade: PropTypes.func.isRequired,
  previousSlade: PropTypes.func.isRequired
}

export default Slade
