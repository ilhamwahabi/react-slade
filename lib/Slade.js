// Eksternal Import
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

// Internal Import
import StyledSlade from './elements/StyledSlade';
import Backdrop from './elements/Backdrop';
import Svg from './elements/Svg';
import Image from './elements/Image';
import Arrow from './elements/Arrow';
import Dialog from './elements/Dialog';

const urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/ig;

class Slade extends Component {
  isStartItem = index => index === 0

  isEndItem = (index, items) => index + 1 === items.length

  previousSlade = (previousSlade, index) => { if (!this.isStartItem(index)) previousSlade(); }

  nextSlade = (nextSlade, index, items) => { if (!this.isEndItem(index, items)) nextSlade(); }

  renderStartArrow = (rightArrow, index) => (
    typeof rightArrow === 'string' && urlRegex.test(rightArrow)
      ? <Image isStartItem={this.isStartItem(index)} start={1} src={rightArrow} alt="arrow" />
      : (
        <Svg isStartItem={this.isStartItem(index)} start={1} width="100" height="60">
          { rightArrow }
        </Svg>
      )
  )

  renderEndArrow = (rightArrow, index, items) => (
    typeof rightArrow === 'string' && urlRegex.test(rightArrow)
      ? <Image isEndItem={this.isEndItem(index, items)} src={rightArrow} alt="arrow" />
      : (
        <Svg isEndItem={this.isEndItem(index, items)} width="100" height="60">
          { rightArrow }
        </Svg>
      )
  )

  render() {
    const {
      open, closeSlade, items, index, backdrop, rightArrow, previousSlade, nextSlade,
    } = this.props;

    return (
      <Fragment>
        <Backdrop backdrop={backdrop} open={open} />
        <StyledSlade onClick={closeSlade} open={open}>
          <Arrow
            start={1}
            onClick={(e) => { e.stopPropagation(); this.previousSlade(previousSlade, index); }}
          >
            { this.renderStartArrow(rightArrow, index) }
          </Arrow>
          <Dialog onClick={e => e.stopPropagation()}>
            { items[index] }
          </Dialog>
          <Arrow
            end={1}
            onClick={(e) => { e.stopPropagation(); this.nextSlade(nextSlade, index, items); }}
          >
            { this.renderEndArrow(rightArrow, index, items) }
          </Arrow>
        </StyledSlade>
      </Fragment>
    );
  }
}

Slade.defaultProps = {
  backdrop: 'rgba(0, 0, 0, 0.5)',
  rightArrow: <polyline points="20 5, 50 30, 20 55" />,
};

Slade.propTypes = {
  open: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(PropTypes.element).isRequired,
  index: PropTypes.number.isRequired,

  backdrop: PropTypes.string,
  rightArrow: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),

  closeSlade: PropTypes.func.isRequired,
  nextSlade: PropTypes.func.isRequired,
  previousSlade: PropTypes.func.isRequired,
};

export default Slade;
