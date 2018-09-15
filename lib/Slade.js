import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import StyledSlade from './elements/StyledSlade';
import Backdrop from './elements/Backdrop';
import Svg from './elements/Svg';
import Image from './elements/Image';
import Arrow from './elements/Arrow';
import Dialog from './elements/Dialog';

class Slade extends Component {
  isStartItem = index => index === 0

  isEndItem = (index, items) => index + 1 === items.length

  previousSlade = (previousSlade, index) => { if (!this.isStartItem(index)) previousSlade(); }

  nextSlade = (nextSlade, index, items) => { if (!this.isEndItem(index, items)) nextSlade(); }

  isEdge = (index, items, start) => (
    (this.isStartItem(index) && start === 1) || (this.isEndItem(index, items) && start === 0)
  )

  renderArrow = (rightArrow, index, items, start) => (
    typeof rightArrow === 'string'
      ? (
        <Image
          isEdge={this.isEdge(index, items, start)}
          start={start}
          src={rightArrow}
          alt="arrow"
        />
      )
      : (
        <Svg
          isEdge={this.isEdge(index, items, start)}
          start={start}
          width="100"
          height="60"
        >
          { rightArrow }
        </Svg>
      )
  )

  render() {
    const {
      open, items, index, backdrop, rightArrow, closeSlade, previousSlade, nextSlade,
    } = this.props;

    return (
      <Fragment>
        <Backdrop backdrop={backdrop} open={open} />
        <StyledSlade onClick={closeSlade} open={open}>
          <Arrow
            start={1}
            onClick={(e) => { e.stopPropagation(); this.previousSlade(previousSlade, index); }}
          >
            { this.renderArrow(rightArrow, index, items, 1) }
          </Arrow>
          <Dialog onClick={e => e.stopPropagation()}>
            { items[index] }
          </Dialog>
          <Arrow
            end={1}
            onClick={(e) => { e.stopPropagation(); this.nextSlade(nextSlade, index, items); }}
          >
            { this.renderArrow(rightArrow, index, items, 0) }
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
