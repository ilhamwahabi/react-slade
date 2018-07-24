import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import StyledSlade from './elements/StyledSlade'
import Backdrop from './elements/Backdrop'
import Svg from './elements/Svg'
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
      <Fragment>
        <Backdrop />
        <StyledSlade>
          <Direction start>
            <Svg width="100" height="60">
              <polyline points="80 3, 50 28, 80 53"></polyline>
            </Svg>
          </Direction>
          <Dialog>
          </Dialog>
          <Direction end>
            <Svg width="100" height="60">
              <polyline points="20 3, 50 28, 20 53"></polyline>
            </Svg>
          </Direction>
        </StyledSlade>
      </Fragment>
    )
  }
}

Slade.propTypes = {
  open: PropTypes.bool,
  items: PropTypes.array,
  index: PropTypes.number
}

export default Slade
