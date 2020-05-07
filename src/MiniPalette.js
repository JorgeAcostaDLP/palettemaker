import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
  main: {
    backgroundColor: 'purple',
    border: '3px solid teal',
    color: 'white',
    '& h1': {
      color: 'blue',
    },
  },
  secondary: { backgroundColor: 'pink' },
};

function MiniPalette(props) {
  const { classes } = props;
  console.log(classes);
  return (
    <div className={classes.main}>
      <h1 className={classes.secondary}>MINI!</h1>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
