import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

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
  link: {
    textDecoration: 'none',
    color: 'black',
  },
  bylaws: {
    textDecoration: 'none',
  },
});

const SelectAction = (props) => {
  const { classes } = props;
  return (
    <React.Fragment>
      <Typography className={classes.text}>
          Select an action:
      </Typography>
      <div>
        {/* <Button variant="contained" size="large" className={classes.button}> */}
        {/* <Link to='/report' className={classes.link}> */}
        {/* Report a stolen wheelie bin */}
        {/* </Link> */}
        {/* </Button> */}
        {/* <Button variant="contained" size="large" className={classes.button}> */}
        {/* <Link to='/report' className={classes.link}> */}
        {/* Report a damaged wheelie bin */}
        {/* </Link> */}
        {/* </Button> */}
        <Button variant="contained" size="large" className={classes.button}>
          Report uncollected refuse
        </Button>
        <Button variant="contained" size="large" className={classes.button}>
            View my refuse collection schedule
        </Button>
        <Button variant="contained" size="large" className={classes.button}>
          Find my nearest dumping site
        </Button>
        <a href="https://capeagulhas.openbylaws.org.za/za-wc033/act/by-law/2005/refuse-removal/eng/" target="_blank" rel="noopener noreferrer" className={classes.bylaws}>
          <Button variant="contained" size="large" className={classes.button}>
              View my local refuse by-laws
          </Button>
        </a>
      </div>
    </React.Fragment>
  );
};

SelectAction.defaultProps = {
  classes: null,
};

SelectAction.propTypes = {
  classes: PropTypes.instanceOf(Object),
};

export default withStyles(styles)(SelectAction);
