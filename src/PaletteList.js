import React, { Component } from 'react';

import MiniPalette from './MiniPalette';

class PaletteList extends Component {
  render() {
    const miniPalettes = this.props.colors.map((palette) => (
      <MiniPalette {...palette}></MiniPalette>
    ));
    return (
      <div>
        {' '}
        <h1>REKTCOLORS!</h1>
        {miniPalettes}
      </div>
    );
  }
}

export default PaletteList;
