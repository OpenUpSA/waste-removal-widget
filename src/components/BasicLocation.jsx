import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

import { ArrowBack } from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import PropTypes from 'prop-types';

const styles = {
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
    color: 'white',
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
};

class BasicLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: props.view,
      props: props.props,
    };
  }

  handleChange = (event) => {
    this.setState({
      props: event.target.value,
    }, () => {
      if (this.state.view === 'schedule') {
        this.props.changeView('areaSchedules');
      }
      if (this.state.view === 'sites') {
        this.props.changeView('areaSites');
      }
    });
  };

  render() {
    const { classes, changeView } = this.props;
    const { value } = this.state;

    return (
      <React.Fragment>
        <div className={classes.container}>
          <Button
            variant="contained"
            className={classes.button}
            onClick={() => changeView('home')}
          >
            <ArrowBack />
          </Button>
          <Typography className={classes.text}>
              Select your area:
          </Typography>
        </div>
        <form autoComplete="off" className={classes.form}>
          <FormControl variant="outlined" className={classes.formControl}>
            <Select
              className={classes.select}
              value={this.state.props}
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
              { /* TODO: Render MenuItem dynamically */ }
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
        </form>
      </React.Fragment>
    );
  }
}

BasicLocation.defaultProps = {
  classes: null,
  view: '',
  props: '',
};

BasicLocation.propTypes = {
  classes: PropTypes.instanceOf(Object),
  changeView: PropTypes.func.isRequired,
  view: PropTypes.string,
  props: PropTypes.string,
};

export default withStyles(styles)(BasicLocation);
