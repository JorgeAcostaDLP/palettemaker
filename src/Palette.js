import React, { Component } from 'react';
import './Palette.css';
import ColorBox from './ColorBox';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500 };
    this.changeLevel = this.changeLevel.bind(this);
  }
  changeLevel(level) {
    this.setState({ level });
  }
  render() {
    const colorBoxes = this.props.palette.colors[
      this.state.level
    ].map((color) => (
      <ColorBox background={color.hex} name={color.name}></ColorBox>
    ));
    return (
      <div className='Palette'>
        {/*Navbar goes here */}
        <Slider
          defaultValue={this.state.level}
          min={100}
          max={900}
          onAfterChange={this.changeLevel}
          step={100}
        />
        <div className='Palette-colors'>{colorBoxes}</div>
        {/*footer*/}
      </div>
    );
  }
}
export default Palette;
