import React, { Component } from 'react';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import styles from './styles/NavBarStyles';
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { format: 'hex', open: false };
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }
  handleFormatChange(e) {
    this.setState({ format: e.target.value, open: true });
    this.props.handleChange(e.target.value);
  }
  closeSnackbar() {
    this.setState({ open: false });
  }
  render() {
    const { level, changeLevel, showLevel, classes } = this.props;
    const { format } = this.state;
    return (
      <header className={classes.Navbar}>
        <div className={classes.logo}>
          <Link to='/'>rectcolorpikr</Link>
        </div>
        {showLevel && (
          <div>
            <span>Luminance: {level}</span>
            <div className={classes.slider}>
              <Slider
                step={100}
                defaultValue={level}
                min={100}
                max={900}
                onAfterChange={changeLevel}
              />
            </div>
          </div>
        )}

        <div className={classes.selectContainer}>
          <Select value={format} onChange={this.handleFormatChange}>
            <MenuItem value='hex'>Hex - #ffffff</MenuItem>
            <MenuItem value='rgb'> RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value='rgba'>RGBA - rgba(255,255,255,1) </MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          open={this.state.open}
          autoHideDuration={2000}
          message={
            <span id='message-id'>
              Format Changed to {this.state.format.toUpperCase()}
            </span>
          }
          ContentProps={{ 'aria-describedby': 'message-id' }}
          onClose={this.closeSnackbar}
          action={[
            <IconButton
              onClick={this.closeSnackbar}
              key='close'
              aria-label='close'
              color='inherit'>
              <CloseIcon></CloseIcon>
            </IconButton>,
          ]}></Snackbar>
      </header>
    );
  }
}

export default withStyles(styles)(Navbar);
