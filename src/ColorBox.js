import React, { Component } from 'react';
import './ColorBox.css';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import chroma from 'chroma-js';

export default class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.handleCopy = this.handleCopy.bind(this);
  }
  handleCopy() {
    this.setState({ copied: true });
    setTimeout(() => {
      this.setState({ copied: false });
    }, 1500);
  }
  render() {
    const { name, background, moreUrl, showLink } = this.props;
    let className;
    this.state.copied
      ? (className = 'show copy-overlay')
      : (className = 'copy-overlay');
    const isDarkColor = chroma(background).luminance() <= 0.08;
    const isLightColor = chroma(background).luminance() >= 0.7;
    return (
      <div style={{ background: background }} className='ColorBox'>
        <div style={{ background: background }} className={className}></div>
        <div className={`copy-msg ${this.state.copied ? 'show' : null}`}>
          <h1>Copied!</h1>
          <p className={isLightColor && 'dark-text'}>{this.props.background}</p>
        </div>
        <div className='copy-container'>
          <div className='box-content'>
            <span className={isDarkColor && 'light-text'}>{name}</span>
          </div>
          <CopyToClipboard text={background} onCopy={this.handleCopy}>
            <button className={`copy-button  ${isLightColor && 'dark-text'}`}>
              Copy!
            </button>
          </CopyToClipboard>
        </div>
        {showLink && (
          <Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
            <span className={`see-more  ${isLightColor && 'dark-text'}`}>
              MORE
            </span>
          </Link>
        )}
      </div>
    );
  }
}
