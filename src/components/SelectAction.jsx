import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  Typography,
  Button
} from '@material-ui/core';

const BY_LAWS_URL = 'https://capeagulhas.openbylaws.org.za/za-wc033/act/by-law/2005/refuse-removal/eng/';

const Text = styled(Typography)`
    color: white;
    font-size: 1.7rem;
`;

const ButtonStyled = styled(Button)`
  &&& {
  background-color: white;
  text-transform: none;
  margin-top: 16px;
  width: ${({ width }) => (width > 600 ? 'auto' : '100%')};
  padding: 16px;
  font-weight: 600;
  margin-right: ${({ width }) => (width > 600 ? '16px' : 0 )};
  }
`;

const ByLawsLink = styled.a`
  &&& {
    text-decoration: none;
  }
`;

const SelectAction = (props) => {
  const { changeView, width, } = props;

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
        <ByLawsLink
          href={BY_LAWS_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
        <ButtonStyled {...{ width }}
          variant="contained" 
          size="large" 
        >
          View my local refuse by-laws
        </ButtonStyled>
        </ByLawsLink>
      </div>
    </React.Fragment>
  );
};

export default SelectAction;

SelectAction.defaultProps = {
  classes: null,
};

SelectAction.propTypes = {
  classes: PropTypes.instanceOf(Object),
  changeView: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired,
};
