import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const CardActionsStyled = styled(CardActions)`
  && {
    display: flex;
    flex-direction: ${({ width }) => (width > 600 ? 'row' : 'column')};
    background-color: #00696B;
    padding: ${({ width }) => (width > 600 ? '36px 48px 53px 48px' : '18px 24px 25px 24px')};
    justify-content: ${({ width }) => (width > 600 ? 'space-between' : 'center')};
  }
`;

const Link = styled.a`
  text-decoration: none;
  margin: ${({ width }) => (width > 600 ? '0 0 0 auto' : 0)};
  width: ${({ width }) => (width > 600 ? 'auto' : '100%')};
  justify-self: flex-end;
`;

const ButtonStyled = styled(Button)`
  && {
    background-color: rgba(0, 0, 0, 0.3);
    color: white;
    text-transform: none;
    width: 100%;
    padding: 16px;
    font-weight: 600px;
  }
`;

const FeedbackButton = (props) => {
  const { width } = props;

  return (
    <CardActionsStyled {...{ width }}>
      <Link {...{ width }}
        href="https://goo.gl/forms/hqMugxj4ngNGigGp2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ButtonStyled variant="contained">
          Provide feedback on this tool
        </ButtonStyled>
      </Link>
    </CardActionsStyled>
  );
};

export default FeedbackButton;

FeedbackButton.defaultProps = {
  classes: null,
};

FeedbackButton.propTypes = {
  classes: PropTypes.instanceOf(Object),
  width: PropTypes.number.isRequired,
};
