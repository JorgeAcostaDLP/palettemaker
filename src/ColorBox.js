import React, { Component } from 'react';
import './ColorBox.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';

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
    const { name, background } = this.props;
    let className;
    this.state.copied
      ? (className = 'show copy-overlay')
      : (className = 'copy-overlay');
    return (
      <div style={{ background: background }} className='ColorBox'>
        <div style={{ background: background }} className={className}></div>
        <div className={`copy-msg ${this.state.copied ? 'show' : null}`}>
          <h1>Copied!</h1>
          <p>{this.props.background}</p>
        </div>
        <div className='copy-container'>
          <div className='box-content'>
            <span>{name}</span>
          </div>
          <CopyToClipboard text={background} onCopy={this.handleCopy}>
            <button className='copy-button'>Copy!</button>
          </CopyToClipboard>
        </div>
        <span className='see-more'>More</span>
      </div>
    );
  }
}
