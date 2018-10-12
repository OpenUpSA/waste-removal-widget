import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { withStyles } from '@material-ui/core/styles';

import { ArrowBack } from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({

  text: {
    color: 'white',
    fontSize: '1.7rem',
  },

  textSmall: {
    color: 'white',
    fontSize: '1.4rem',
  },

  link: {
    color: 'white',
    textDecoration: 'none',
    '&:hover': {
      color: '#CACACA'
    }
  }

});

class ReportContact extends Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Typography className={classes.text}>
          Contact person
        </Typography>
        <Typography className={classes.textSmall}>
          Mr Walter Linnert<br />
          <a href="mailto:walterl@capeaghulas.gov.za" className={classes.link}>walterl@capeaghulas.gov.za<br /></a>
          <a href="tel: +272842556011" className={classes.link}>028 425 56011<br /></a>
          Dirkie Uys Street, Bredasdorp, 7280
        </Typography>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(ReportContact);