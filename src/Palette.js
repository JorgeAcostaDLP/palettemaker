import React, { Component } from 'react';
import 'rc-slider/assets/index.css';
import './Palette.css';
import ColorBox from './ColorBox';
import Slider, { Range } from 'rc-slider';

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
    const { colors } = this.props.palette;
    const { level } = this.state;
    const colorBoxes = colors[level].map((color) => (
      <ColorBox background={color.hex} name={color.name}></ColorBox>
    ));
    return (
      <div className='Palette'>
        {/*Navbar goes here */}
        <div className='slider'>
          <Slider
            step={100}
            defaultValue={level}
            min={100}
            max={900}
            onAfterChange={this.changeLevel}
          />
        </div>
        <div className='Palette-colors'>{colorBoxes}</div>
        {/*footer*/}
      </div>
    );
  }
}
export default Palette;
