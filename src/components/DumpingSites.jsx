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
import Dialog from '@material-ui/core/Dialog/Dialog';
import DialogActions from '@material-ui/core/DialogActions/DialogActions';
import DialogContent from '@material-ui/core/DialogContent/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText/DialogContentText';

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
    },
  },

  card: {
    marginTop: 16,
    width: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: 16,
      width: '50%',
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


class DumpingSites extends Component {
  state = {
    openHousehold: false,
  };

  // Dialog
  handleClickOpenHousehold = () => {
    this.setState({ openHousehold: true });
  };

  handleClickCloseHousehold = () => {
    this.setState({ openHousehold: false });
  };

  render() {
    const { classes, changeView } = this.props;
    const area = this.props.props.toString();

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
            nearest dumping sites
          </Typography>
        </div>
        <div className={classes.cardContainer}>
          <Card className={classes.card}>
            {/* Title to be updated dynamically */}
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
                      <span className={classes.dialogTitle}>Struisbaai Dump</span>
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
              title="Main Road, Struisbaai"
            />
            <CardContent>
              <Typography className={classes.cardContentText}>
                {/* Content to be loaded dynamically */}
                Struisbaai Dump
              </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
              <Typography className={classes.cardActionsText}>
                {/* Date to be loaded dynamically */}
                Open today from 08h00 - 18h00
              </Typography>
            </CardActions>
          </Card>
          <Card className={classes.card}>
            {/* Title to be updated dynamically */}
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
                      <span className={classes.dialogTitle}>Bredasdorp Waste Facility</span>
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
              title="Limeworks Road, Bredasdorp"
            />
            <CardContent>
              <Typography className={classes.cardContentText}>
                {/* Content to be loaded dynamically */}
                Bredasdorp Waste Facility
              </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
              <Typography className={classes.cardActionsText}>
                {/* Date to be loaded dynamically */}
                Closed today
              </Typography>
            </CardActions>
          </Card>
        </div>
      </React.Fragment>
    );
  }
}

DumpingSites.defaultProps = {
  classes: null,
  area: null,
};

DumpingSites.propTypes = {
  classes: PropTypes.instanceOf(Object),
  area: PropTypes.string,
  changeView: PropTypes.func.isRequired,
};

export default withStyles(styles)(DumpingSites);
