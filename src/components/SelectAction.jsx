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
    // background-color: 'white',
    // text-transform: 'none',
    // margin-top: 16,
    // width: '100%',
    // padding: 16,
    // font-weight: 600,
    margin-right: 0,
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

const ButtonStyled = styled(Button)`
  background-color: white;
  text-transform: none;
  margin-top: 16px;
  width: ${({ width }) => (width > 600 ? 'auto' : '100%')};
  padding: 16px;
  font-weight: 600;
  margin-right: ${({ width }) => (width > 600 ? '16px' : 0 )};
`;


const SelectAction = (props) => {
  const { classes, changeView, width, } = props;

  return (
    <React.Fragment>
      <Text>
        Select an action:
      </Text>
      <div>
        <ButtonStyled {...{ width }}
          variant="contained"
          size="large"
          onClick={() => changeView('report')}
        >
          Report uncollected refuse
        </ButtonStyled>

        <ButtonStyled {...{ width }}
          variant="contained"
          size="large"
          onClick={() => changeView('schedule')}
        >
          View my refuse collection schedule
        </ButtonStyled>
        <ButtonStyled {...{ width }}
          variant="contained"
          size="large"
          onClick={() => changeView('sites')}
        >
          Find my nearest dumping site
        </ButtonStyled>
        <a
          href={BY_LAWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={classes.bylaws}
        >
        <ButtonStyled {...{ width }}
          variant="contained" 
          size="large" 
        >
          View my local refuse by-laws
        </ButtonStyled>
        </a>
      </div>
    </React.Fragment>
  );
};

export default withStyles(styles)(SelectAction);

SelectAction.defaultProps = {
  classes: null,
};

SelectAction.propTypes = {
  classes: PropTypes.instanceOf(Object),
  changeView: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired,
};
