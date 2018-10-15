import React from 'react';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

import { ArrowBack } from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const styles = ({

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
    color: 'white',
  },

  text: {
    color: 'white',
    fontSize: '1.7rem',
  },

  textSmall: {
    color: 'white',
    fontSize: '1.4rem',
  },

  ref: {
    color: 'white',
    textDecoration: 'none',
    '&:hover': {
      color: '#CACACA',
    },
  },

});

const ReportContact = (props) => {
  const { classes } = props;
  return (
    <React.Fragment>
      <div className={classes.container}>
        <Button variant="contained" className={classes.button}>
          <Link to="/" className={classes.link}>
            <ArrowBack />
          </Link>
        </Button>
        <Typography className={classes.text}>
          Contact person:
        </Typography>
      </div>
      <Typography className={classes.textSmall}>
        Mr Walter Linnert
        <br />
        <a href="mailto:walterl@capeaghulas.gov.za" className={classes.ref}>
          walterl@capeaghulas.gov.za
          <br />
        </a>
        <a href="tel: +272842556011" className={classes.ref}>
          028 425 56011
          <br />
        </a>
        Dirkie Uys Street, Bredasdorp, 7280
      </Typography>
    </React.Fragment>
  );
};

ReportContact.defaultProps = {
  classes: null,
};

ReportContact.propTypes = {
  classes: PropTypes.instanceOf(Object),
};

export default withStyles(styles)(ReportContact);
