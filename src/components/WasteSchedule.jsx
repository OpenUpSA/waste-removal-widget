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

import {
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText
} from '@material-ui/core';

// const styles = {
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
                // link: {
                //   textDecoration: 'none',
                //   color: 'white',
                // },
  // text: {
  //   color: 'white',
  //   fontSize: '1.7rem',
  // },
  // cardContainer: {
  //   // display: 'flex',
  //   flexDirection: 'column',
  // },
  // cardContainerSm: {
  //   display: 'flex',
  //   flexDirection: 'row',
  //   flexWrap: 'wrap',
  },
  card: {
    marginTop: 16,
    width: 'auto',
  },
  cardSm: {
    marginTop: 16,
    marginRight: 16,
    width: 336,
    '&:last-child': {
      marginRight: 0,
    },

const Container = styled.div`
    display: flex;
    align-items: center;
`;

const ButtonStyled = styled(Button)`
    min-width: 46px;
    width: 46px;
    height: 46px;
    background-color: #46A440;
    color: white;
    margin-right: 16px;
`;

const Text = styled(Typography)`
    color: white;
    font-size: 1.7rem;
`;

const CardHeaderButton = styled(Button)`
    background-color: 'rgba(255, 255, 255, 0.32);
    border-radius: '0 4px 0 0;
    width: 50px;
    min-width: 50px;
    height: 50px;
    margin: 0;
    margin-left: -50px;
`;

const CardHeaderStyled = styled(CardHeader)`
  background-color: #004B4F;
  height: 50px;
  padding: 0;
  & .title {
      font-size: 16px;
      color: white;
      text-align: center;
  }
  & .action {
    margin: 0;
  }
 `;

 const CardContentText = styled(Typography)`
  && {
    color: #004B4F;
    text-align: center;
    }
 `;

 const CardActionsStyled = styled(CardActions)`
    background-color: rgba(0, 0, 0, 0.08);
 `;

 const DialogActionsHeader = styled(DialogActions)`
    background-color: #004B4Fpx;
    height: 50px;
    padding: 0;
    margin: 0;
 `;

 const CardActionsText = styled(Typography)`
    && {
      color: #004B4F;
      text-align: center;
      width: 100%;
      }
 `;

 const DialogTitle = styled.span`
    font-size: 16px;
    color: white;
    text-align: center;
    font-family: "Roboto", "Helvetica","Sans-sserif";
    margin: auto;
 `;

 const DialogContentStyled = styled(DialogContent)`
    padding: 24px;
    text-align: center;
    color: black;
 `;

const CardContainer = styled.div`
  display: flex;
  flex-direction: ${({ width }) => (width > 600 ? 'row' : 'column')};
  flex-wrap: wrap;
`;

const CardStyled = styled(Card)`
  marginTop: 16,
  marginRight: 16,
  width: 336,
`;

class WasteSchedule extends Component {
  state = {
    openHousehold: false,
    openBusiness: false,
    openRecycling: false,
  };

  // Dialog
  handleClickOpenHousehold = () => {
    this.setState({ openHousehold: true });
  };

  handleClickCloseHousehold = () => {
    this.setState({ openHousehold: false });
  };

  handleClickOpenBusiness = () => {
    this.setState({ openBusiness: true });
  };

  handleClickCloseBusiness = () => {
    this.setState({ openBusiness: false });
  };

  handleClickOpenRecycling = () => {
    this.setState({ openRecycling: true });
  };

  handleClickCloseRecycling = () => {
    this.setState({ openRecycling: false });
  };

  render() {
    const { classes, changeView, props, width } = this.props;
    const area = props;
    // TODO: This can be more elegant
    // Get dates for collections
    const Monday = new Date();
    Monday.setDate(Monday.getDate() + ((1 + 7 - Monday.getDay()) % 7));

    const Tuesday = new Date();
    Tuesday.setDate(Tuesday.getDate() + ((2 + 7 - Tuesday.getDay()) % 7));

    const Wednesday = new Date();
    Wednesday.setDate(Wednesday.getDate() + ((3 + 7 - Wednesday.getDay()) % 7));

    const Thursday = new Date();
    Thursday.setDate(Thursday.getDate() + ((4 + 7 - Thursday.getDay()) % 7));

    const Friday = new Date();
    Friday.setDate(Friday.getDate() + ((5 + 7 - Friday.getDay()) % 7));

    // Set day of week per area - Household refuse and Recycling
    let householdDay;

    if (area === 'Bredasdorp (Area 1)' || 'Struisbaai' || 'L\'Agulhas' || 'Waenhuiskrans (Arniston)') {
      householdDay = 'Monday';
    }

    if (area === 'Bredasdorp (Area 2)' || 'Struisbaai Noord' || 'Suiderstrand') {
      householdDay = 'Tuesday';
    }

    if (area === 'Zwelitsha' || 'Klipdale' || 'Protem') {
      householdDay = 'Wednesday';
    }

    if (area === 'Napier') {
      householdDay = 'Thursday';
    }

    // Set date based on day of week
    let collectionDate;
    let businessDate;

    if (householdDay === 'Monday') {
      collectionDate = Monday;
    }

    if (householdDay === 'Tuesday') {
      collectionDate = Tuesday;
    }

    if (householdDay === 'Wednesday') {
      collectionDate = Wednesday;
    }

    if (householdDay === 'Thursday') {
      collectionDate = Thursday;
    }

    // Set next Business collection date
    if (Monday < Wednesday) {
      businessDate = Monday;
    } else if (Monday > Wednesday) {
      businessDate = Wednesday;
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
            Waste collection schedule
          </Text>
        </Container>
        <CardContainer {...{ width }}>
          <CardStyled {...{ width }}>
            <CardHeaderStyled
              classes={{
                title: 'title',
                action: 'action',
              }}
              action={(
                <React.Fragment>
                  <CardHeaderButton
                    onClick={this.handleClickOpenHousehold}
                  >
                    <InfoOutlinedIcon />
                  </CardHeaderButton>
                  <Dialog
                    open={this.state.openHousehold}
                    onClose={this.handleClickCloseHousehold}
                    classes={{
                      paper: 'dialog',
                    }}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogActionsHeader>
                      <DialogTitle>Household refuse</DialogTitle>
                      <CardHeaderButton
                        onClick={this.handleClickCloseHousehold}
                      >
                        <Clear />
                      </CardHeaderButton>
                    </DialogActionsHeader>
                    <DialogContentStyled>
                      <DialogContentText id="alert-dialog-description">
                        Organic food waste as well as garden refuse will be collected if all of
                        the bags fit in your bin. No bags will be taken from the sidewalk.
                        Do not add dangerous household waste (paint, bleach, oil) to your
                        household refuse.
                        Building rubble needs to be taken to a dumping sites or
                        the Bredasdorp Landfill.
                      </DialogContentText>
                    </DialogContentStyled>
                  </Dialog>
                </React.Fragment>
              )}

              title="Household refuse"
            />
            <CardContent>
              <CardContentText>
                {householdDay}
              </CardContentText>
            </CardContent>
            <CardActionsStyled>
              <CardActionsText>
                Next collection:
                {' '}
                {collectionDate.toLocaleDateString('en-ZA', { day: 'numeric', month: 'short', year: 'numeric' })}
              </CardActionsText>
            </CardActionsStyled>
          </CardStyled>
          <CardStyled {...{ width }}>
            <CardHeaderStyled
              classes={{
                title: 'title',
                action: 'action',
              }}
              action={(
                <React.Fragment>
                  <CardHeaderButton
                    onClick={this.handleClickOpenBusiness}
                  >
                    <InfoOutlinedIcon />
                  </CardHeaderButton>
                  <Dialog
                    open={this.state.openBusiness}
                    onClose={this.handleClickCloseBusiness}
                    classes={{
                      paper: 'dialog',
                    }}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogActionsHeader>
                      <DialogTitle>Business refuse</DialogTitle>
                      <CardHeaderButton
                        onClick={this.handleClickCloseBusiness}
                      >
                        <Clear />
                      </CardHeaderButton>
                    </DialogActionsHeader>
                    <DialogContentStyled>
                      <DialogContentText id="alert-dialog-description">
                        Business Waste is collected on
                        <br />
                        Mondays & Wednesdays
                      </DialogContentText>
                    </DialogContentStyled>
                  </Dialog>
                </React.Fragment>
              )}
              title="Business refuse"
            />
            <CardContent>
              <CardContentText>
                Mondays & Wednesdays
              </CardContentText>
            </CardContent>
            <CardActionsStyled>
              <cardActionsText>
                Next collection:
                {' '}
                {businessDate.toLocaleDateString('en-ZA', { day: 'numeric', month: 'short', year: 'numeric' })}
              </cardActionsText>
            </CardActionsStyled>
            <CardStyled>
          <Card className={width > 600 ? classes.cardSm : classes.card}>
            <CardHeaderStyled
              classes={{
                title: 'title',
                action: 'action',
              }}
              action={(
                <React.Fragment>
                  <CardHeaderButton
                    onClick={this.handleClickOpenRecycling}
                  >
                    <InfoOutlinedIcon />
                  </CardHeaderButton>
                  <Dialog
                    open={this.state.openRecycling}
                    onClose={this.handleClickCloseRecycling}
                    classes={{
                      paper: 'dialog',
                    }}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogActionsHeader>
                      <DialogTitle>Recycling</DialogTitle>
                      <CardHeaderButton
                        onClick={this.handleClickCloseRecycling}
                      >
                        <Clear />
                      </CardHeaderButton>
                    </DialogActionsHeader>
                    <DialogContentStyled>
                      <DialogContentText id="alert-dialog-description">
                        Recyclable materials should be placed in a clear bag and will
                        be collected on the same day as household refuse.
                        Paper, tin, glass and plastic can be placed in the recycling bag.
                      </DialogContentText>
                    </DialogContentStyled>
                  </Dialog>
                </React.Fragment>
              )}
              title="Recycling"
            />
            <CardContent>
              <CardContentText>
                {householdDay}
              </CardContentText>
            </CardContent>
            <CardActionsStyled>
              <CardContentText>
                Next collection:
                {' '}
                {collectionDate.toLocaleDateString('en-ZA', { day: 'numeric', month: 'short', year: 'numeric' })}
              </CardContentText>
            </CardActionsStyled>
          </Card>
        </Container>
      </React.Fragment>
    );
  }
}

WasteSchedule.defaultProps = {
  classes: null,
  props: null,
};

WasteSchedule.propTypes = {
  classes: PropTypes.instanceOf(Object),
  changeView: PropTypes.func.isRequired,
  props: PropTypes.string,
  width: PropTypes.number.isRequired,
};

export default withStyles(styles)(WasteSchedule);
