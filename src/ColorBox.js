import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { withStyles } from '@material-ui/styles';
import styles from './styles/ColorBoxStyles';

class ColorBox extends Component {
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
    const {
      name,
      background,
      moreUrl,
      showingFullPalette,
      classes,
    } = this.props;
    let className;
    const { copied } = this.state;
    this.state.copied
      ? (className = 'show copy-overlay')
      : (className = 'copy-overlay');

    return (
      <div style={{ background }} className={classes.colorBox}>
        <div
          style={{ background: background }}
          className={`${classes.copyOverlay} ${
            copied && classes.showOverlay
          }`}></div>
        <div
          className={`${classes.copyMessage} ${copied && classes.showMessage}`}>
          <h1>Copied!</h1>
          <p className={classes.copyText}>{this.props.background}</p>
        </div>
        <div>
          <div className={classes.boxContent}>
            <span className={classes.colorName}>{name}</span>
          </div>
          <CopyToClipboard text={background} onCopy={this.handleCopy}>
            <button className={classes.copyButton}>Copy!</button>
          </CopyToClipboard>
        </div>
        {showingFullPalette && (
          <Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
            <span className={classes.seeMore}>MORE</span>
          </Link>
        )}
      </div>
    );
  }
}
export default withStyles(styles)(ColorBox);
