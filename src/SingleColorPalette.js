import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import './Palette.css';

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.getColorShades(this.props.palette, this.props.colorId);
    this.state = { format: 'hex' };
    this.changeFormat = this.changeFormat.bind(this);
  }
  changeFormat(val) {
    this.setState({ format: val });
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
    const { format } = this.state;
    const { paletteName, emoji } = this.props.palette;
    const colorBoxes = this._shades.map((color) => (
      <ColorBox
        key={color[0].name}
        name={color[0].name}
        background={color[0][format]}
        showLink={false}></ColorBox>
    ));

    return (
      <div className='Palette'>
        <Navbar showLevel={false} handleChange={this.changeFormat}></Navbar>
        <div className='Palette-colors'>{colorBoxes}</div>
        <PaletteFooter paletteName={paletteName} emoji={emoji}></PaletteFooter>
      </div>
    );
  }
}
export default SingleColorPalette;
