import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';

class PaletteList extends Component {
  render() {
    const miniPalettes = this.props.colors.map((palette) => (
      <li>
        <Link to={`palette/${palette.id}`}> {palette.paletteName}</Link>
      </li>
    ));
    return (
      <div>
        <MiniPalette></MiniPalette>
        {miniPalettes}
      </div>
    );
  }
}

export default PaletteList;
