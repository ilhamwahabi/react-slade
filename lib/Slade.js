// Eksternal Import
import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

// Internal Import
import StyledSlade from './elements/StyledSlade'
import Backdrop from './elements/Backdrop'
import Svg from './elements/Svg'
import Direction from './elements/Direction'
import Dialog from './elements/Dialog'

const Slade = ({ open, items, index, closeSlade, nextSlade, previousSlade }) => (
  <Fragment>
    <Backdrop open={open} />
    <StyledSlade onClick={closeSlade}  open={open}>
      <Direction start={1} onClick={e => { e.stopPropagation(); previousSlade(); }}>
        <Svg start={1} width="100" height="60">
          <polyline points="20 5, 50 30, 20 55"></polyline>
        </Svg>
      </Direction>
      <Dialog onClick={e => e.stopPropagation()}>
        { items[index] }
      </Dialog>
      <Direction end={1} onClick={e => { e.stopPropagation(); nextSlade(); }}>
        <Svg end={1} width="100" height="60">
          <polyline points="20 5, 50 30, 20 55"></polyline>
        </Svg>
      </Direction>
    </StyledSlade>
  </Fragment>
)
  
Slade.propTypes = {
  open: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,

  closeSlade: PropTypes.func.isRequired,
  nextSlade: PropTypes.func.isRequired,
  previousSlade: PropTypes.func.isRequired
}

export default Slade
