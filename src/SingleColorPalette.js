import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.getColorShades(this.props.palette, this.props.colorId);
  }
  getColorShades(palette, id) {
    let colors = palette.colors;
    let shades = [];
    for (let number in colors) {
      shades.push(
        colors[number].filter((color) => color.name.toLowerCase().includes(id))
      );
    }
    return shades.slice(1);
  }
  render() {
    const colorBoxes = this._shades.map((color) => (
      <ColorBox
        key={color[0].id}
        name={color[0].name}
        background={color[0].hex}
        showLink={false}></ColorBox>
    ));

    return (
      <div className='Palette'>
        <h1>Single Color Palette</h1>
        <div className='Palette-colors'>{colorBoxes}</div>
      </div>
    );
  }
}
export default SingleColorPalette;
