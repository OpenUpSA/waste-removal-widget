import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';


import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  cardContent: {
    backgroundColor: '#00696B',
    padding: 24,
  },
  text: {
    color:'white'
  },
  button: {
    backgroundColor:  'white',
    textTransform: 'none',
    marginTop: 16,
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
    },
    [theme.breakpoints.up('sm')]: {
      marginRight: 16,
      width: 'auto',
    }
  },
  cardActions: {
    backgroundColor: '#00696B',
    [theme.breakpoints.down('sm')]: {
      padding: 24,
      justifyContent: 'center',
    },
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'flex-end',
    },
    [theme.breakpoints.up('lg')]: {
      padding: 40,
    },
  },
  buttonRight: {
    backgroundColor:  'rgba(0, 0, 0, 0.3)',
    color: 'white',
    textTransform: 'none'
  }
});

class SelectAction extends Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CardContent className={classes.cardContent}>
          <Typography className={classes.text}>
            Then select an action:
          </Typography>
          <div>
            <Button variant="contained" size="large" className={classes.button}>
              Report a stolen wheelie bin
            </Button>
            <Button variant="contained" size="large" className={classes.button}>
              Report a damaged wheelie bin
            </Button>
            <Button variant="contained"  size="large" className={classes.button}>
              Report uncollected refuse
            </Button>
            <Button variant="contained" size="large" className={classes.button}>
              View my refuse collection schedule
            </Button>
            <Button variant="contained" size="large" className={classes.button}>
              Find my nearest dumping site
            </Button>
            <Button variant="contained" size="large" className={classes.button}>
              View my local refuse by-laws
            </Button>
          </div>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button variant="contained" size="large" className={classes.buttonRight}>
            Provide feedback on this tool
          </Button>
        </CardActions>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(SelectAction);