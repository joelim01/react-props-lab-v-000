// Code The Spaceship Component Here
import React, { Component } from 'react';

export default class Spaceship extends React.component {

  Spaceship.defaultProps = {
    colors: "secondary",
    label: "Button Text"
  };
  
  render() {
    <div>
      Name: {name}
      Speed: {speed}
      Rockets?: {hasRockets}
      Color: {colors}
    </div>
};