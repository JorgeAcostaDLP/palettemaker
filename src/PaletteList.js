import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/styles';
import styles from './styles/PaletteListStyles';

class PaletteList extends Component {
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }
  render() {

    const { colors, classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>REKTCOLORS!</h1>
            <Link to='/palette/new'>Create New Palette</Link>
          </nav>
          <div className={classes.palettes}>
            {colors.map((palette) => (
              <MiniPalette
                {...palette}
                handleClick={() => this.goToPalette(palette.id)}
                key={palette.id}></MiniPalette>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
