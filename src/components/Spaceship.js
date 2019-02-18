// Code The Spaceship Component Here
import React, { Component } from 'react';

export default class Spaceship extends React.component {
  static propTypes = {
    submitSignInRequest: PropTypes.func.isRequired,
  };
  
  Spaceship.defaultProps = {
    colors: ['black', 'red'],
    speed: "Button Text"
  };
  
  render() {
    <div>
      Name: {name}
      Speed: {speed}
      Rockets?: {hasRockets}
      Color: {colors}
    </div>
};