import React, { Component } from 'react';
import Navbar from './Navbar';
import './Palette.css';
import ColorBox from './ColorBox';

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
        <Navbar level={level} changeLevel={this.changeLevel}></Navbar>
        <div className='Palette-colors'>{colorBoxes}</div>
        {/*footer*/}
      </div>
    );
  }
}
export default Palette;
