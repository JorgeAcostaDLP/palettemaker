import React, { Component } from 'react';
import 'rc-slider/assets/index.css';
import './Navbar.css';
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { format: 'hex' };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ format: e.target.value });
    this.props.handleChange(e.target.value);
  }
  render() {
    const { level, changeLevel } = this.props;
    const { format } = this.state;
    return (
      <header className='Navbar'>
        <div className='logo'>
          <a href='#'>rectcolorpikr</a>
        </div>
        <div className='slider-container'>
          <span>Brightness Level: {level}</span>
          <div className='slider'>
            <Slider
              step={100}
              defaultValue={level}
              min={100}
              max={900}
              onAfterChange={changeLevel}
            />
          </div>
        </div>
        <div className='select-container'>
          <Select value={format} onChange={this.handleChange}>
            <MenuItem value='hex'>Hex - #ffffff</MenuItem>
            <MenuItem value='rgb'> RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value='rgba'>RGBA - rgba(255,255,255,1) </MenuItem>
          </Select>
        </div>
      </header>
    );
  }
}

export default Navbar;
