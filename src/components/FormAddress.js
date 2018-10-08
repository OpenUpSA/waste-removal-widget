import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  container: {
    display: 'flex',
    alignItems: 'center'
  },

  button: {
    minWidth: 46,
    width: 46,
    height: 46,
    backgroundColor: '#46A440',
    color: 'white',
    marginRight: 16,
  },

  text: {
    color: 'white'
  },

});

class FormAddress extends Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <div className={classes.container}>
          <Button variant="contained" className={classes.button}>
            <Icon>arrow_back</Icon>
          </Button>
          <Typography className={classes.text}>
            Enter your address:
          </Typography>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(FormAddress);