import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import {
  Typography,
  Button
} from '@material-ui/core';

const BY_LAWS_URL = 'https://capeagulhas.openbylaws.org.za/za-wc033/act/by-law/2005/refuse-removal/eng/';


// const styles = {
//   text: {
//     color: 'white',
//     fontSize: '1.7rem',
//   },
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

const Text = styled(Typography)`
    color: white;
    font-size: 1.7rem;
`;

const SelectAction = (props) => {
  const { classes, changeView, width, } = props;

  return (
    <React.Fragment>
      <Text>
        Select an action:
      </Text>
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
