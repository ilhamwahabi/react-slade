import React, { Component } from 'react'
import styled from 'styled-components'

const Img = styled.img`
  height: 500px;
  @media (max-width: 481px) {
    height: 300px;
  }
  @media (max-width: 361px) {
    height: 250px;
  }
`

class Image extends Component {
  render() {
    return (
      <div className="image-dummy">
        <Img src={this.props.src} alt="Dummy Example" />
      </div>
    )
  }
}

export default Image;