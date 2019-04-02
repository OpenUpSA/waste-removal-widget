import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const styles = {
  cardActions: {
    display: 'flex',
    flexFlow: 'column',
    backgroundColor: '#00696B',
    padding: '18px 24px 25px 24px',
    justifyContent: 'center',
  },
  cardActionsSm: {
    display: 'flex',
    flexFlow: 'row',
    backgroundColor: '#00696B',
    padding: '36px 48px 53px 48px',
    justifyContent: 'space-between',
  },
  buttonLink: {
    textDecoration: 'none',
    margin: 0,
    width: '100%',
  },
  buttonLinkSm: {
    textDecoration: 'none',
    margin: '0 0 0 auto',
    width: 'auto',
    justifySelf: 'flex-end',
  },
  buttonRight: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    color: 'white',
    textTransform: 'none',
    width: '100%',
    padding: 16,
    fontWeight: 600,
  }
};

const FeedbackButton = (props) => {
  const { classes, width } = props;

  return (
    <CardActions className={width > 600 ? classes.cardActionsSm : classes.cardActions}>
      <a
        href="https://goo.gl/forms/hqMugxj4ngNGigGp2"
        target="_blank"
        rel="noopener noreferrer"
        className={width > 600 ? classes.buttonLinkSm : classes.buttonLink}
      >
        <Button variant="contained" className={classes.buttonRight}>
          Provide feedback on this tool
        </Button>
      </a>
    </CardActions>
  );
};

FeedbackButton.defaultProps = {
  classes: null,
};

FeedbackButton.propTypes = {
  classes: PropTypes.instanceOf(Object),
  width: PropTypes.number.isRequired,
};

export default withStyles(styles)(FeedbackButton);
