import React, { Component } from 'react';
import './Palette.css';

export default class Palette extends Component {
  render() {
    return (
      <div className='Palette'>
        {/*Navbar goes here */}
        <div className='Palette-colors'>{/* bunch of color boxes*/}</div>
        {/*footer*/}
      </div>
    );
  }
}