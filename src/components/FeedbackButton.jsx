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

  buttonLink: {
    textDecoration: 'none',
    margin: '0 0 0 auto',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
      justifySelf: 'flex-end',
    },
  },

  buttonRight: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    color: 'white',
    textTransform: 'none',
    width: '100%',
    padding: 16,
    fontWeight: 600,

  },

  buttonDownload: {
    textTransform: 'none',
    width: '100%',
    marginBottom: 16,
    padding: 16,
    fontWeight: 600,
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
      marginBottom: 0,
    },
  },
});

class SelectAction extends Component {
  render() {
    const { classes } = this.props;

    return (
      <CardActions className={classes.cardActions}>
        <a href="https://goo.gl/forms/hqMugxj4ngNGigGp2" target="_blank" rel="noopener noreferrer" className={classes.buttonLink}>
          <Button variant="contained" className={classes.buttonRight}>
            Provide feedback on this tool
          </Button>
        </a>
      </CardActions>
    );
  }
}

export default withStyles(styles)(SelectAction);
