import React, { Component } from 'react';
import 'rc-slider/assets/index.css';
import './Navbar.css';
import Slider from 'rc-slider';

class Navbar extends Component {
  render() {
    const { level, changeLevel } = this.props;
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
      </header>
    );
  }
}

export default Navbar;
