import React, { Component } from 'react'

class Image extends Component {
  render() {
    return (
      <div className="image-dummy">
        <img 
          style={{ display: 'block', maxWidth: '100%', maxHeight: '100%' }} 
          src={this.props.src} 
          alt="Dummy Example"
        />
      </div>
    )
  }
}

export default Image;