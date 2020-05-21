import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
  root: {
    width: '20%',
    height: '25%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-4px',
  },
};
function DraggableColorBox(props) {
  const { classes } = props;
  console.log(props);
  return (
    <div className={classes.root} style={{ backgroundColor: props.color }}>
      {props.name}
    </div>
  );
}
export default withStyles(styles)(DraggableColorBox);