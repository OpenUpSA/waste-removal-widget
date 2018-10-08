import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';


import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
  text: {
    color:'white'
  },
  button: {
    backgroundColor:  'white',
    textTransform: 'none',
    marginRight: 16,
    marginTop: 16
  },
  cardActions: {
    backgroundColor: '#00696B',
    justifyContent: 'flex-end',
    paddingBottom: 40,
    paddingRight: 40
  },
  buttonRight: {
    backgroundColor:  'white',
    textTransform: 'none'
  }
};

class SelectAction extends Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>

          <Typography className={classes.text}>
            Then select an action:
          </Typography>
          <div>
            <Button variant="contained" className={classes.button}>
              Report a stolen wheelie bin
            </Button>
            <Button variant="contained" className={classes.button}>
              Report a damaged wheelie bin
            </Button>
            <Button variant="contained" className={classes.button}>
              Report uncollected refuse
            </Button>
            <Button variant="contained" className={classes.button}>
              View my refuse collection schedule
            </Button>
            <Button variant="contained" className={classes.button}>
              Find my nearest dumping site
            </Button>
            <Button variant="contained" className={classes.button}>
              View my local refuse by-laws
            </Button>
          </div>

        <CardActions className={classes.cardActions}>
          <Button variant="contained" className={classes.buttonRight}>
            Did you find this tool useful?
          </Button>
        </CardActions>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(SelectAction);