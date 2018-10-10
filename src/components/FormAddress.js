import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";

import { withStyles } from '@material-ui/core/styles';

import { ArrowBack } from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({

  root: {
    '&$disabled': {
      backgroundColor: '#CACACA',
      color: 'rgba(0, 0, 0, 0.38)'
    },
  },

  disabled: {},

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
    color: 'white'
  },

  text: {
    color: 'white',
    fontSize: '1.7rem',
  },

  form: {
    maxWidth: 466,
    display: 'flex',
    flexDirection: 'column'
  },

  formControl: {
    margin: theme.spacing.unit,
    minWidth: 250,
    width: '100%',
    height: 48,
    backgroundColor: 'white',
    borderRadius: 4,
    marginLeft: 0,
  },

  textFieldOuter:{
    display: 'flex',
    alignItems: 'center',
  },

  textField: {
    width: '100%',
    height: 48,
    backgroundColor: 'white',
    borderRadius: 4,
    padding: 0,
    marginRight: 8,
  },

  textFieldButton : {
    backgroundColor: '#46A440',
    color: 'white',
    textTransform: 'none',
    height: 48,
    width: 118,
    marginTop: 8,
    alignSelf: 'flex-end',
  },

  textFieldButtonDisabled: {
    backgroundColor: 'red',
    color: 'white',
  },

});

class FormAddress extends Component {
  state = {
    area: '',
    name: 'hai',
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <div className={classes.container}>
          {/*Back button - return to home screen*/}
          <Button variant="contained" className={classes.button}>
            <Link to='/' className={classes.link}>
              <ArrowBack />
            </Link>
          </Button>
          <Typography className={classes.text}>
            Enter your address:
          </Typography>
        </div>
        <form autoComplete="off" className={classes.form}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel
                ref={ref => {
                  this.labelRef = ReactDOM.findDOMNode(ref);
                }}
                htmlFor="outlined-area"
              >
                Select your area from the list
              </InputLabel>
              <Select
                value={this.state.area}
                onChange={this.handleChange}
                input={
                  <OutlinedInput
                  labelWidth={this.labelRef ? this.labelRef.offsetWidth : 0}
                  name="area"
                  id="outlined-area"
                  />
                }
              >
                <MenuItem value={'Bredasdorp (Area 1)'}>Bredasdorp (Area 1)</MenuItem>
                <MenuItem value={'Struisbaai'}>Struisbaai</MenuItem>
                <MenuItem value={'L’Agulhas'}>L’Agulhas</MenuItem>
                <MenuItem value={'Waenhuiskrans (Arniston)'}>Waenhuiskrans (Arniston)</MenuItem>
                <MenuItem value={'Bredasdrop (Area 2)'}>Bredasdrop (Area 2)</MenuItem>
                <MenuItem value={'Struisbaai Noord'}>Struisbaai Noord</MenuItem>
                <MenuItem value={'Suiderstrand'}>Suiderstrand</MenuItem>
                <MenuItem value={'Zwelitsha'}>Zwelitsha</MenuItem>
                <MenuItem value={'Klipdale'}>Klipdale</MenuItem>
                <MenuItem value={'Protem'}>Protem</MenuItem>
                <MenuItem value={'Napier'}>Napier</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="outlined-bare"
              className={classes.textField}
              placeholder="Enter your street address"
              margin="normal"
              variant="outlined"
            />
            <Button variant="contained"
                    classes={{
                      root: classes.root,
                      disabled: classes.disabled
                    }}
                    className={classes.textFieldButton}
                    disabled
            >
              Create form
            </Button>
        </form>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(FormAddress);