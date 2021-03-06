import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';


const BY_LAWS_URL = 'https://capeagulhas.openbylaws.org.za/za-wc033/act/by-law/2005/refuse-removal/eng/';


const styles = {
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
    marginRight: 0,
  },
  buttonSm: {
    backgroundColor: 'white',
    textTransform: 'none',
    marginTop: 16,
    width: 'auto',
    padding: 16,
    fontWeight: 600,
    marginRight: 16,
  },
  link: {
    textDecoration: 'none',
    color: 'black',
  },
  bylaws: {
    textDecoration: 'none',
  },
};

const SelectAction = (props) => {
  const { classes, changeView, width, } = props;

  return (
    <React.Fragment>
      <Typography className={classes.text}>
        Select an action:
      </Typography>
      <div>
        <Button
          variant="contained"
          size="large"
          className={width > 600 ? classes.buttonSm : classes.button}
          onClick={() => changeView('report')}
        >
          Report uncollected refuse
        </Button>

        <Button
          variant="contained"
          size="large"
          className={width > 600 ? classes.buttonSm : classes.button}
          onClick={() => changeView('schedule')}
        >
          View my refuse collection schedule
        </Button>
        <Button
          variant="contained"
          size="large"
          className={width > 600 ? classes.buttonSm : classes.button}
          onClick={() => changeView('sites')}
        >
          Find my nearest dumping site
        </Button>

        <a
          href={BY_LAWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={classes.bylaws}
        >
          <Button variant="contained" size="large" className={width > 600 ? classes.buttonSm : classes.button}>
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
  changeView: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired,
};

export default withStyles(styles)(SelectAction);
