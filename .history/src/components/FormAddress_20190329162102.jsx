import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import { ArrowBack } from '@material-ui/icons';

import {
  Typography,
  Button,
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  OutlinedInput,
  TextField
} from '@material-ui/core';

const styles = theme => ({

  container: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 16,
  },

  button: {
    minWidth: 46,
    width: 46,
    height: 46,
    backgroundColor: '#46A440',
    marginRight: 16,
  },

  link: {
    textDecoration: 'none',
    color: 'white',
  },

  text: {
    color: 'white',
    fontSize: '1.7rem',
  },

  form: {
    maxWidth: 466,
    display: 'flex',
    flexDirection: 'column',
  },

  formControl: {
    margin: 0,
    minWidth: 250,
    width: '100%',
    height: 48,
    backgroundColor: 'white',
    borderRadius: 4,

    '&::placeholder': {
      color: 'rgba(0, 0, 0, 0.6)',
    },
  },

  textField: {
    width: '100%',
    height: 48,
    backgroundColor: 'white',
    borderRadius: 4,
    padding: 0,
    margin: '8px 8px 4px 0px',

    '&::placeholder': {
      color: 'rgba(0, 0, 0, 0.6)',
    },
  },

  helperText: {
    color: 'rgba(255, 255, 255, 0.7)',
    marginTop: 0,
    marginLeft: 15,
  },

  textFieldButton: {
    backgroundColor: '#46A440',
    color: 'white',
    textTransform: 'none',
    height: 48,
    width: '100%',
    marginTop: 8,
    alignSelf: 'flex-end',

    [theme.breakpoints.up('sm')]: {
      width: 118,
    },
  },

  root: {
    '&$disabled': {
      backgroundColor: '#CACACA',
      color: 'rgba(0, 0, 0, 0.38)',
    },
  },

  disabled: {},

});

class FormAddress extends Component {
  // state = {
  //   area: '',
  //   address: '',
  // };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    const { state } = this.state;

    return (
      <React.Fragment>
        <div className={classes.container}>
          <Button variant="contained" className={classes.button}>
            <Link to="/" className={classes.link}>
              <ArrowBack />
            </Link>
          </Button>
          <Typography className={classes.text}>
            Enter your address:
          </Typography>
        </div>
        <form autoComplete="off" className={classes.form}>
          <FormControl variant="outlined" className={classes.formControl}>
            <Select
              value={state.area}
              onChange={this.handleChange}
              displayEmpty
              input={(
                <OutlinedInput
                  labelWidth={this.labelRef ? this.labelRef.offsetWidth : 0}
                  name="area"
                  id="outlined-area"
                />
)}
            >
              <MenuItem value="" disabled>Select your area from the list</MenuItem>
              <MenuItem value="Bredasdorp (Area 1)">Bredasdorp (Area 1)</MenuItem>
              <MenuItem value="Bredasdorp (Area 2)">Bredasdrop (Area 2)</MenuItem>
              <MenuItem value="Klipdale">Klipdale</MenuItem>
              <MenuItem value="L’Agulhas">L’Agulhas</MenuItem>
              <MenuItem value="Napier">Napier</MenuItem>
              <MenuItem value="Protem">Protem</MenuItem>
              <MenuItem value="Struisbaai">Struisbaai</MenuItem>
              <MenuItem value="Struisbaai Noord">Struisbaai Noord</MenuItem>
              <MenuItem value="Suiderstrand">Suiderstrand</MenuItem>
              <MenuItem value="Waenhuiskrans (Arniston)">Waenhuiskrans (Arniston)</MenuItem>
              <MenuItem value="Zwelitsha">Zwelitsha</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="outlined-address"
            className={classes.textField}
            placeholder="Enter your street address"
            margin="normal"
            variant="outlined"
            name="address"
            value={state.value}
            onChange={this.handleChange}
          />
          <FormHelperText className={classes.helperText}>
            Your address will remain strictly confidential
          </FormHelperText>
          <Button
            variant="contained"
            classes={{
              root: classes.root,
              disabled: classes.disabled,
            }}
            className={classes.textFieldButton}
            disabled={!state.area || !state.address}
          >
            Create form
          </Button>
        </form>
      </React.Fragment>
    );
  }
}

FormAddress.defaultProps = {
  classes: null,
};

FormAddress.propTypes = {
  classes: PropTypes.instanceOf(Object),
};

export default withStyles(styles)(FormAddress);
