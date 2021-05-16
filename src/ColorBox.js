import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    opacity: this.props.opacity
  }

  render() {
      return (
        <div className="color-box" style={{opacity: this.state.opacity/*replace null with the value*/}}>
          {this.props.opacity >= 0.2 ? <ColorBox opacity={this.props.opacity - 0.1} /> : null}
        </div> 
    
      )}
    }

