import React, { Component } from 'react';
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import PaletteFooter from './PaletteFooter';
import styles from './styles/PaletteStyles';
import { withStyles } from '@material-ui/core';

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500, format: 'hex' };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }
  changeLevel(level) {
    this.setState({ level });
  }
  changeFormat(val) {
    this.setState({ format: val });
  }
  render() {
    const { colors, paletteName, emoji, id } = this.props.palette;
    const { classes } = this.props;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map((color) => (
      <ColorBox
        key={color.id}
        colorId={color.id}
        background={color[format]}
        moreUrl={`/palette/${id}/${color.id}`}
        showingFullPalette={true}
        name={color.name}></ColorBox>
    ));
    return (
      <div className={classes.palette}>
        <Navbar
          showLevel={true}
          level={level}
          handleChange={this.changeFormat}
          changeLevel={this.changeLevel}></Navbar>
        <div className={classes.colors}>{colorBoxes}</div>
        <PaletteFooter paletteName={paletteName} emoji={emoji}></PaletteFooter>
      </div>
    );
  }
}
export default withStyles(styles)(Palette);
