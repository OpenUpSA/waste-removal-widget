import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const ButtonStyled = styled(Button)`
  && {
    min-width: 46px;
    width: 46px;
    height: 46px;
    background-color: #46A440;
    margin-right: 16px;
  }
`;

const LinkStyled = styled(Link)`
  && {
    text-decoration: none;
    color: white;
  }
`;

const Text = styled(Typography)`
  && {
    color: white;
    font-size: 1.7rem;
  }
`;

const Form = styled.form`
  max-width: 466px;
  display: flex;
  flex-direction: column;
`;

const FormControlStyled = styled(FormControl)`
  && {
    margin: 0;
    min-width: 250px;
    width: 100%;
    height: 48px;
    background-color: white;
    border-radius: 4px;

    &::placeholder: {
      color: rgba(0, 0, 0, 0.6);
    }
  }
`;

const TextFieldStyled = styled(TextField)`
  && {
    width: 100%;
    height: 48px;
    background-color: white;
    border-radius: 4px;
    padding: 0;
    margin: 8px 8px 4px 0px;

    &::placeholder: {
      color: rgba(0, 0, 0, 0.6);
    }
  }
`;

const FormHelperTextStyled = styled(FormHelperText)`
  color: rgba(255, 255, 255, 0.7);
  margin-top: 0;
  margin-left: 15px;
`;

const TextFieldButton = styled(Button)`
  && {
    background-color: #46A440;
    color: white;
    text-transform: none;
    height: 48px;
    width: 100%;
    margin-top: 8px;
    align-self: flex-end;

    @media screen and (min-width: 600px) {
      width: 118px;
    }
  }

  & .disabled {
    background-color: #CACACA;
    color: rgba(0, 0, 0, 0.38);
  }
`;

class FormAddress extends Component {

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { state } = this.state;

    return (
      <React.Fragment>
        <Container>
          <ButtonStyled variant="contained">
            <LinkStyled to="/">
              <ArrowBack />
            </LinkStyled>
          </ButtonStyled>
          <Text>
            Enter your address:
          </Text>
        </Container>
        <Form autoComplete="off">
          <FormControlStyled variant="outlined">
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
          </FormControlStyled>
          <TextFieldStyled
            id="outlined-address"
            placeholder="Enter your street address"
            margin="normal"
            variant="outlined"
            name="address"
            value={state.value}
            onChange={this.handleChange}
          />
          <FormHelperTextStyled>
            Your address will remain strictly confidential
          </FormHelperTextStyled>
          <TextFieldButton
            variant="contained"
            classes={{
              disabled: 'disabled',
            }}
            disabled={!state.area || !state.address}
          >
            Create form
          </TextFieldButton>
        </Form>
      </React.Fragment>
    );
  }
}

export default FormAddress;

FormAddress.defaultProps = {
  classes: null,
};

FormAddress.propTypes = {
  classes: PropTypes.instanceOf(Object),
};
