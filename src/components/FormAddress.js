import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';


import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({

});

class FormAddress extends Component {
  render() {
    const { classes } = this.props;

    return (
      <CardContent className={classes.cardContent}>

      </CardContent>
    );
  }
}

export default withStyles(styles)(FormAddress);