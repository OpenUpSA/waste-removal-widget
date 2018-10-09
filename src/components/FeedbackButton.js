import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  cardActions: {
    backgroundColor: '#00696B',
    padding: 24,
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'flex-end',
    },
  },
  buttonRight: {
    backgroundColor:  'rgba(0, 0, 0, 0.3)',
    color: 'white',
    textTransform: 'none',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    }
  }
});

class SelectAction extends Component {
  render() {
    const { classes } = this.props;

    return (
      <CardActions className={classes.cardActions}>
        <Button variant="contained" className={classes.buttonRight}>
          Provide feedback on this tool
        </Button>
      </CardActions>
    );
  }
}

export default withStyles(styles)(SelectAction);