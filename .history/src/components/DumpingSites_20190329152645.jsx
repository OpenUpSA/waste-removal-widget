import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ArrowBack, Clear } from '@material-ui/icons';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from '@material-ui/core';


const Container = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonStyled = styled(Button)`
  && {
    min-width: 46px;
    width: 46px;
    height: 46px;
    background-color: #46A440;
    color: white;
    margin-right: 16px;
  }
`;

const Text = styled(Typography)`
  && {
    color: white;
    font-size: 1.7rem;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: ${({ width }) => (width > 800 ? 'row' : 'column')};
`;

const CardStyled = styled(Card)`
  && {
    margin-top: 16px;
    margin-right: ${({ width }) => (width > 800 ? '16px' : null)};
    width: ${({ width }) => (width > 800 ? '50%' : 'auto')};

    '&:last-child': {
      margin-right: ${({ width }) => (width > 800 ? 0 : null)};
    }
  }
`;

const CardHeaderStyled = styled(CardHeader)`
  && {
    background-color: #004B4F;
    height: 50px;
    padding: 0;
  }

  & .title {
      font-size: 16px;
      color: white;
      text-align: center;
    }

  & .action {
      margin: 0;
    }
`;

const CardHeaderButton = styled(Button)`
  && {
    background-color: rgba(255, 255, 255, 0.32);
    border-radius: 0 4px 0 0;
    width: 50px;
    height: 50px;
    margin: 0;
    margin-left: -50px;
  }
`;

const CardContentText = styled(Typography)`
  && {
    color: #004B4F;
    text-align: center;
  }
`;

const CardActionsStyled = styled(CardActions)`
  && {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;

const CardActionsText = styled(Typography)`
  && {
    color: #004B4F;
    text-align: center;
    width: 100%;
  }
`;

const DialogStyled = styled(Dialog)`
  & .dialog {
    min-width: 360px;
    width: 360px;
  }
`;

const DialogHeader = styled(DialogActions)`
  && {
    background-color: #004B4F;
    height: 50px;
    padding: 0px;
    margin: 0px;
  }
`;

const DialogTitle = styled.span`
  font-size: 16px;
  color: white;
  text-align: center;
  font-family: Roboto, "Helvetica", sans-serif;
  margin: auto;
`;

const DialogContentStyled = styled(DialogContent)`
  && {
    padding: 24px;
    text-align: center;
    color: black;
  }
`;
class DumpingSites extends Component {
  state = {
    OpenDumpSite: false,
    OpenLandFill: false,
  };

  handleClickOpenDumpsite = () => {
    this.setState({ OpenDumpSite: true });
  };

  handleClickCloseDumpsite = () => {
    this.setState({ OpenDumpSite: false });
  };

  handleClickOpenLandFill = () => {
    this.setState({ OpenLandFill: true });
  };

  handleClickCloseLandFill = () => {
    this.setState({ OpenLandFill: false });
  };

  render() {
    const {
      classes, changeView, props, width,
    } = this.props;
    const area = props.toString();

    // Set nearest dumping site
    let dumpsite;
    let address;

    if (area === 'Napier' || 'Klipdale' || 'Protem' || 'Zwelitsha' || 'Bredasdorp (Area 1)' || 'Bredasdorp (Area 2)') {
      dumpsite = 'Napier';
      address = 'Station Road, Napier';
    }
    if (area === 'Struisbaai' || 'Struisbaai Noord' || 'L\'Agulhas' || 'Suiderstrand') {
      dumpsite = 'Struisbaai';
      address = 'Main Road, Struisbaai';
    }
    if (area === 'Waenhuiskrans (Arniston)') {
      dumpsite = 'Waenhuiskrans (Arniston)';
      address = 'Main Road, Waenhuiskrans';
    }

    // Set times
    const today = new Date();
    let times;

    if (today.getDay === 6) {
      times = 'Open today from 09:00 - 17:00';
    } else if (today.getDay === 0) {
      times = 'Closed today';
    } else {
      times = 'Open today from 08:00 - 18:00';
    }

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
            {area}
            {' '}
            nearest dumping sites
          </Text>
        </Container>
        <CardContainer {...{ width }}>
          <CardStyled {...{ width }} className={width > 800 ? classes.cardSm : classes.card}>
            <CardHeaderStyled
              classes={{
                title: 'title',
                action: 'action',
              }}
              action={(
                <React.Fragment>
                  <CardHeaderButton
                    onClick={this.handleClickOpenDumpsite}
                  >
                    <InfoOutlinedIcon />
                  </CardHeaderButton>
                  <DialogStyled
                    open={this.state.OpenDumpSite}
                    onClose={this.handleClickCloseDumpsite}
                    classes={{
                      paper: 'dialog',
                    }}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogHeader>
                      <DialogTitle>
                        {dumpsite}
                        {' '}
                        Dump
                      </DialogTitle>
                      <CardHeaderButton
                        onClick={this.handleClickCloseDumpsite}
                      >
                        <Clear />
                      </CardHeaderButton>
                    </DialogHeader>
                    <DialogContentStyled>
                      <DialogContentText id="alert-dialog-description">
                        {address}
                        <br />
                        Monday - Friday 08:00-18:00
                        <br />
                        Saturday 09:00-17:00
                      </DialogContentText>
                    </DialogContentStyled>
                  </DialogStyled>
                </React.Fragment>
              )}
              title={address}
            />
            <CardContent>
              <CardContentText>
                {dumpsite}
                {' '}
                Dump
              </CardContentText>
            </CardContent>
            <CardActionsStyled>
              <CardActionsText>
                {times}
              </CardActionsText>
            </CardActionsStyled>
          </CardStyled>
          <CardStyled {...{ width }} className={width > 800 ? classes.cardSm : classes.card}>
            <CardHeaderStyled
              classes={{
                title: 'title',
                action: 'action',
              }}
              action={(
                <React.Fragment>
                  <CardHeaderButton
                    onClick={this.handleClickOpenLandFill}
                  >
                    <InfoOutlinedIcon />
                  </CardHeaderButton>
                  <DialogStyled
                    open={this.state.OpenLandFill}
                    onClose={this.handleClickCloseLandFill}
                    classes={{
                      paper: 'dialog',
                    }}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogHeader>
                      <DialogTitle>Bredasdorp Waste Facility</DialogTitle>
                      <CardHeaderButton
                        onClick={this.handleClickCloseLandFill}
                      >
                        <Clear />
                      </CardHeaderButton>
                    </DialogHeader>
                    <DialogContentStyled>
                      <DialogContentText id="alert-dialog-description">
                        Swellendam Road, Bredasdorp
                        <br />
                        Monday - Friday 08:00-18:00
                        <br />
                        Saturday 09:00-17:00
                      </DialogContentText>
                    </DialogContentStyled>
                  </DialogStyled>
                </React.Fragment>
              )}
              title="Swellendam Road, Bredasdorp"
            />
            <CardContent>
              <CardContentText>
                Bredasdorp Waste Facility
              </CardContentText>
            </CardContent>
            <CardActionsStyled>
              <CardActionsText>
                {times}
              </CardActionsText>
            </CardActionsStyled>
          </CardStyled>
        </CardContainer>
      </React.Fragment>
    );
  }
}

export default DumpingSites;

DumpingSites.defaultProps = {
  classes: null,
  props: null,
};

DumpingSites.propTypes = {
  classes: PropTypes.instanceOf(Object),
  changeView: PropTypes.func.isRequired,
  props: PropTypes.instanceOf(Array),
  width: PropTypes.number.isRequired,
};
