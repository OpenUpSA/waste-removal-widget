import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

const styles = theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
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

  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  },

  card: {
    marginTop: 16,
    width: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: 16,
      width: 336,
      '&:last-child': {
        marginRight: 0,
      },
    },
  },

  cardHeader: {
    backgroundColor: '#004B4F',
    height: 50,
    padding: 0,
  },

  cardHeaderButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.32)',
    borderRadius: '0 4px 0 0',
    width: 50,
    minWidth: 50,
    height: 50,
    margin: 0,
    marginLeft: '-50px',
  },

  title: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },

  action: {
    margin: 0,
  },

  cardContentText: {
    color: '#004B4F',
    textAlign: 'center',
  },

  cardActions: {
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
  },

  cardActionsText: {
    color: '#004B4F',
    textAlign: 'center',
    width: '100%',
  },

  dialog: {
    maxWidth: 360,
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
});


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
    const { classes, changeView } = this.props;
    const area = this.props.props.toString();
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
        <div className={classes.container}>
          <Button
            variant="contained"
            className={classes.button}
            onClick={() => changeView('home')}
          >
            <ArrowBack />
          </Button>
          <Typography className={classes.text}>
            {area}
            {' '}
            Waste collection schedule
          </Typography>
        </div>
        <div className={classes.cardContainer}>
          <Card className={classes.card}>
            <CardHeader
              className={classes.cardHeader}
              classes={{
                title: classes.title,
                action: classes.action,
              }}
              action={(
                <React.Fragment>
                  <Button
                    className={classes.cardHeaderButton}
                    onClick={this.handleClickOpenHousehold}
                  >
                    <InfoOutlinedIcon />
                  </Button>
                  <Dialog
                    open={this.state.openHousehold}
                    onClose={this.handleClickCloseHousehold}
                    classes={{
                      paper: classes.dialog,
                    }}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogActions className={classes.dialogHeader}>
                      <span className={classes.dialogTitle}>Household refuse</span>
                      <Button
                        onClick={this.handleClickCloseHousehold}
                        className={classes.cardHeaderButton}
                      >
                        <Clear />
                      </Button>
                    </DialogActions>
                    <DialogContent className={classes.dialogContent}>
                      <DialogContentText id="alert-dialog-description">
                        Sweet lemon drops gummi bears.
                        Chocolate lollipop cheesecake cake candy canes wafer chocolate
                        cake. Pudding marshmallow tiramisu pie.
                      </DialogContentText>
                    </DialogContent>
                  </Dialog>
                </React.Fragment>
              )}

              title="Household refuse"
            />
            <CardContent>
              <Typography className={classes.cardContentText}>
                {householdDay}
              </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
              <Typography className={classes.cardActionsText}>
                Next collection:
                {' '}
                {collectionDate.toLocaleDateString('en-ZA', { day: 'numeric', month: 'short', year: 'numeric' })}
              </Typography>
            </CardActions>
          </Card>
          <Card className={classes.card}>
            <CardHeader
              className={classes.cardHeader}
              classes={{
                title: classes.title,
                action: classes.action,
              }}
              action={(
                <React.Fragment>
                  <Button
                    className={classes.cardHeaderButton}
                    onClick={this.handleClickOpenBusiness}
                  >
                    <InfoOutlinedIcon />
                  </Button>
                  <Dialog
                    open={this.state.openBusiness}
                    onClose={this.handleClickCloseBusiness}
                    classes={{
                      paper: classes.dialog,
                    }}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogActions className={classes.dialogHeader}>
                      <span className={classes.dialogTitle}>Business refuse</span>
                      <Button
                        onClick={this.handleClickCloseBusiness}
                        className={classes.cardHeaderButton}
                      >
                        <Clear />
                      </Button>
                    </DialogActions>
                    <DialogContent className={classes.dialogContent}>
                      <DialogContentText id="alert-dialog-description">
                        Sweet lemon drops gummi bears.
                        Chocolate lollipop cheesecake cake candy canes wafer chocolate
                        cake. Pudding marshmallow tiramisu pie.
                      </DialogContentText>
                    </DialogContent>
                  </Dialog>
                </React.Fragment>
              )}
              title="Business refuse"
            />
            <CardContent>
              <Typography className={classes.cardContentText}>
                Mondays & Wednesdays
              </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
              <Typography className={classes.cardActionsText}>
                Next collection:
                {' '}
                {businessDate.toLocaleDateString('en-ZA', { day: 'numeric', month: 'short', year: 'numeric' })}
              </Typography>
            </CardActions>
          </Card>
          <Card className={classes.card}>
            <CardHeader
              className={classes.cardHeader}
              classes={{
                title: classes.title,
                action: classes.action,
              }}
              action={(
                <React.Fragment>
                  <Button
                    className={classes.cardHeaderButton}
                    onClick={this.handleClickOpenRecycling}
                  >
                    <InfoOutlinedIcon />
                  </Button>
                  <Dialog
                    open={this.state.openRecycling}
                    onClose={this.handleClickCloseRecycling}
                    classes={{
                      paper: classes.dialog,
                    }}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogActions className={classes.dialogHeader}>
                      <span className={classes.dialogTitle}>Recycling</span>
                      <Button
                        onClick={this.handleClickCloseRecycling}
                        className={classes.cardHeaderButton}
                      >
                        <Clear />
                      </Button>
                    </DialogActions>
                    <DialogContent className={classes.dialogContent}>
                      <DialogContentText id="alert-dialog-description">
                        Sweet lemon drops gummi bears.
                        Chocolate lollipop cheesecake cake candy canes wafer chocolate
                        cake. Pudding marshmallow tiramisu pie.
                      </DialogContentText>
                    </DialogContent>
                  </Dialog>
                </React.Fragment>
              )}
              title="Recycling"
            />
            <CardContent>
              <Typography className={classes.cardContentText}>
                {householdDay}
              </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
              <Typography className={classes.cardActionsText}>
                Next collection:
                {' '}
                {collectionDate.toLocaleDateString('en-ZA', { day: 'numeric', month: 'short', year: 'numeric' })}
              </Typography>
            </CardActions>
          </Card>
        </div>
      </React.Fragment>
    );
  }
}

WasteSchedule.defaultProps = {
  classes: null,
  area: null,
};

WasteSchedule.propTypes = {
  classes: PropTypes.instanceOf(Object),
  area: PropTypes.string,
  changeView: PropTypes.func.isRequired,
};

export default withStyles(styles)(WasteSchedule);
