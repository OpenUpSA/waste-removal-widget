import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  cardActions: {
    display: 'flex',
    flexFlow: 'column',
    backgroundColor: '#00696B',
    padding: '18px 24px 25px 24px',
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      flexFlow: 'row',
      justifyContent: 'space-between',
      padding: '36px 48px 53px 48px',
    },
  },
  buttonRight: {
    backgroundColor:  'rgba(0, 0, 0, 0.3)',
    color: 'white',
    textTransform: 'none',
    width: '100%',
    padding: 16,
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    }
  },
  buttonDownload: {
    textTransform: 'none',
    width: '100%',
    marginBottom: 16,
    padding: 16,
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
      marginBottom: 0,
    }
  }
});

class SelectAction extends Component {
  render() {
    const { classes } = this.props;

    return (
      <CardActions className={classes.cardActions}>
        {/*Should only be visible on collection schedule screen*/}
        <Button variant='contained' className={classes.buttonDownload}>
          Download this collection schedule
        </Button>
        <Button variant="contained" className={classes.buttonRight}>
          Provide feedback on this tool
        </Button>
      </CardActions>
    );
  }
}

export default withStyles(styles)(SelectAction);