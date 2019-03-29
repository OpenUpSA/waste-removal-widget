import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ArrowBack } from '@material-ui/icons';

import {
  Typography,
  Button,
  FormControl,
  MenuItem,
  Select,
  OutlinedInput
} from '@material-ui/core';


const Container = styled.div`
  display: 'flex';
  alignItems: 'center';
  marginBottom: 16;
`;

const ButtonStyled = styled(Button)`
  && {
    minWidth: 46;
    width: 46;
    height: 46;
    backgroundColor: '#46A440';
    color: 'white';
    marginRight: 16;
  }
`;

const Text = styled(Typography)`
  && {
    color: 'white';
    fontSize: '1.7rem';
  }
`;

const Form = styled.form`
  maxWidth: 466;
`;

const FormControlStyled = styled(FormControl)`
  && {
    margin: 0;
    minWidth: 250;
    width: '100%';
    height: 48;
    backgroundColor: 'white';
    borderRadius: 4;

    &::placeholder: {
      color: rgba(0, 0, 0, 0.6);
    }
  }
`;

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
        this.props.changeView('areaSchedules', [this.state.props]);
      }
      if (this.state.view === 'sites') {
        this.props.changeView('areaSites', [this.state.props]);
      }
    });
  };

  render() {
    const { classes, changeView, props } = this.props;

    return (
      <React.Fragment>
        <Container>
          <ButtonStyled
            variant="contained"
            onClick={() => changeView('home')}
          >
            <ArrowBack />
          </ButtonStyled>
          <Text>
              Select your area:
          </Text>
        </Container>
        <Form autoComplete="off">
          <FormControlStyled variant="outlined">
            <Select
              className={classes.select}
              value={props}
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
          </FormControlStyled>
        </Form>
      </React.Fragment>
    );
  }
}

export default BasicLocation;

BasicLocation.defaultProps = {
  classes: null,
  props: '',
};

BasicLocation.propTypes = {
  classes: PropTypes.instanceOf(Object),
  changeView: PropTypes.func.isRequired,
  view: PropTypes.string.isRequired,
  props: PropTypes.string,
};