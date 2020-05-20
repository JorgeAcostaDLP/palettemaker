import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import styles from './styles/NewPaletteFormStyles';

class NewPaletteForm extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <h1 className={classes.test}>Hola</h1>
      </div>
    );
  }
}

export default withStyles(styles)(NewPaletteForm);
