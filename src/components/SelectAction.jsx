import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { ArrowBack } from '@material-ui/icons';

const styles = theme => ({
  text: {
    color: 'white',
    fontSize: '1.7rem',
  },
  button: {
    backgroundColor: 'white',
    textTransform: 'none',
    marginTop: 16,
    width: '100%',
    padding: 16,
    fontWeight: 600,
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
    },
    [theme.breakpoints.up('sm')]: {
      marginRight: 16,
      width: 'auto',
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 16,
  },
  backButton: {
    minWidth: 46,
    width: 46,
    height: 46,
    backgroundColor: '#46A440',
    color: 'white',
    marginRight: 16,
  },
  bylaws: {
    textDecoration: 'none',
  },
});

class SelectAction extends Component {
  state = {
    view: '',
    heading: 'Select an action:',
  };

  handleClick = (event) => {
    this.setState({
      view: event.target.value,
      heading: event.target.heading,
    });
  };

  backClick = () => {
    this.setState({
      view: '',
    });
  };

  render() {
    const { classes } = this.props;
    const { stateContent } = this.state;

    return (
      <React.Fragment>
        <div className={classes.container}>
          {stateContent.view.length > 0 && (
            <Button variant="contained" className={classes.backButton} onClick={this.backClick}><ArrowBack /></Button>
          )
          }
          <Typography className={classes.text}>
            {stateContent.heading}
          </Typography>
        </div>
        <div>
          <Button
            variant="contained"
            size="large"
            className={classes.button}
            name="view"
            value="ReportContact"
            heading="This is a test"
            onClick={this.handleClick}
          >
            Report uncollected refuse
          </Button>
          <Button
            variant="contained"
            size="large"
            className={classes.button}
            name="view"
            value="WasteSchedule"
            onClick={this.handleClick}
          >
            View my refuse collection schedule
          </Button>
          <Button
            variant="contained"
            size="large"
            className={classes.button}
            name="view"
            value="DumpingSites"
            onClick={this.handleClick}
          >
            Find my nearest dumping site
          </Button>
          <a
            href="https://capeagulhas.openbylaws.org.za/za-wc033/act/by-law/2005/refuse-removal/eng/"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.bylaws}
          >
            <Button
              variant="contained"
              size="large"
              className={classes.button}
            >
              View my local refuse by-laws
            </Button>
          </a>
        </div>
      </React.Fragment>
    );
  }
}

SelectAction.defaultProps = {
  classes: null,
};

SelectAction.propTypes = {
  classes: PropTypes.instanceOf(Object),
};

export default withStyles(styles)(SelectAction);
