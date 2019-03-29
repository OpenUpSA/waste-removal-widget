import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import Button from '@material-ui/core/Button/Button';
import { ArrowBack, Clear } from '@material-ui/icons';
import Typography from '@material-ui/core/Typography/Typography';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

const styles = {
  // container: {
  //   display: 'flex',
  //   alignItems: 'center',
  // },

  // button: {
  //   minWidth: 46,
  //   width: 46,
  //   height: 46,
  //   backgroundColor: '#46A440',
  //   color: 'white',
  //   marginRight: 16,
  // },

  link: {
    textDecoration: 'none',
    color: 'white',
  },

  // text: {
  //   color: 'white',
  //   fontSize: '1.7rem',
  // },

  // cardContainer: {
  //   display: 'flex',
  //   flexDirection: 'column',
  // },

  // cardContainerSm: {
  //   display: 'flex',
  //   flexDirection: 'row',
  // },

  // card: {
  //   marginTop: 16,
  //   width: 'auto',
  // },

  // cardSm: {
  //   marginTop: 16,
  //   marginRight: 16,
  //   width: '50%',
  //   '&:last-child': {
  //     marginRight: 0,
  //   },
  // },

  // cardHeader: {
  //   backgroundColor: '#004B4F',
  //   height: 50,
  //   padding: 0,
  // },

  // cardHeaderButton: {
  //   backgroundColor: 'rgba(255, 255, 255, 0.32)',
  //   borderRadius: '0 4px 0 0',
  //   width: 50,
  //   height: 50,
  //   margin: 0,
  //   marginLeft: '-50px',
  // },

  // title: {
  //   fontSize: 16,
  //   color: 'white',
  //   textAlign: 'center',
  // },

  // action: {
  //   margin: 0,
  // },

  // cardContentText: {
  //   color: '#004B4F',
  //   textAlign: 'center',
  // },

  cardActions: {
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
  },

  cardActionsText: {
    color: '#004B4F',
    textAlign: 'center',
    width: '100%',
  },

  dialog: {
    minWidth: 360,
    width: 360,
  },

  dialogHeader: {
    backgroundColor: '#004B4F',
    height: 50,
    padding: 0,
    margin: 0,
  },

  dialogTitle: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    fontFamily: '"Roboto", "Helvetica","Sans-sserif"',
    margin: 'auto',
  },

  dialogContent: {
    padding: 24,
    textAlign: 'center',
    color: 'black',
  },

};

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

    .title {
      font-size: 16px;
      color: white;
      text-align: center;
    }

    .action {
      margin: 0;
    }
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
    color: #004B4F;
    text-align: center;
  }
`;
class DumpingSites extends Component {
  state = {
    OpenDumpSite: false,
    OpenLandFill: false,
  };

  // Dialog
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
    // const { state } = this.state;
    // const dumpState = state.OpenDumpSite;
    // const fillState = state.OpenLandFill;

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
                  <Dialog
                    open={this.state.OpenDumpSite}
                    onClose={this.handleClickCloseDumpsite}
                    classes={{
                      paper: classes.dialog,
                    }}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogActions className={classes.dialogHeader}>
                      <span className={classes.dialogTitle}>
                        {dumpsite}
                        {' '}
                        Dump
                      </span>
                      <CardHeaderButton
                        onClick={this.handleClickCloseDumpsite}
                      >
                        <Clear />
                      </CardHeaderButton>
                    </DialogActions>
                    <DialogContent className={classes.dialogContent}>
                      <DialogContentText id="alert-dialog-description">
                        {address}
                        <br />
                        Monday - Friday 08:00-18:00
                        <br />
                        Saturday 09:00-17:00
                      </DialogContentText>
                    </DialogContent>
                  </Dialog>
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
              <Typography className={classes.cardActionsText}>
                {times}
              </Typography>
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
                  <Dialog
                    open={this.state.OpenLandFill}
                    onClose={this.handleClickCloseLandFill}
                    classes={{
                      paper: classes.dialog,
                    }}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogActions className={classes.dialogHeader}>
                      <span className={classes.dialogTitle}>Bredasdorp Waste Facility</span>
                      <CardHeaderButton
                        onClick={this.handleClickCloseLandFill}
                      >
                        <Clear />
                      </CardHeaderButton>
                    </DialogActions>
                    <DialogContent className={classes.dialogContent}>
                      <DialogContentText id="alert-dialog-description">
                        Swellendam Road, Bredasdorp
                        <br />
                        Monday - Friday 08:00-18:00
                        <br />
                        Saturday 09:00-17:00
                      </DialogContentText>
                    </DialogContent>
                  </Dialog>
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
              <Typography className={classes.cardActionsText}>
                {times}
              </Typography>
            </CardActionsStyled>
          </CardStyled>
        </CardContainer>
      </React.Fragment>
    );
  }
}

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

export default withStyles(styles)(DumpingSites);
