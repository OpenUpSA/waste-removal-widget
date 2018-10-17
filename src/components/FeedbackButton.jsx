import React, { Component } from 'react';
import { ContainerQuery } from 'react-container-query';

import { withStyles } from '@material-ui/core/styles';

import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const query = {
  large: {
    minWidth: 601,
  },
};

const styles = {
  cardActions: {
    display: 'flex',
    flexFlow: 'column',
    backgroundColor: '#00696B',
    padding: '18px 24px 25px 24px',
    justifyContent: 'center',
  },
  cardActionsLarge: {
    display: 'flex',
    flexFlow: 'row',
    backgroundColor: '#00696B',
    padding: '36px 48px 53px 48px',
    justifyContent: 'space-between',
  },
  buttonLink: {
    textDecoration: 'none',
    margin: '0 0 0 auto',
  },
  buttonRight: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    color: 'white',
    textTransform: 'none',
    width: '100%',
    padding: 16,
    fontWeight: 600,
  },
  buttonDownload: {
    textTransform: 'none',
    width: '100%',
    marginBottom: 16,
    padding: 16,
    fontWeight: 600,
  },
};

class FeedbackButton extends Component {
  render() {
    return (
      <ContainerQuery query={query} classes={styles}>
        {query => <Markup query={query} classes={styles} />}
      </ContainerQuery>
    );
  }
}

const Markup = (props) => {
  const { classes, query } = props;
  console.log(props);

  if (query.large) {
    return (
      <CardActions className={classes.cardActionsLarge}>
        {/* <Router> */}
        {/* <Route exact path='/view/schedule' */}
        {/* render={()=> */}
        {/* <Button variant='contained' className={classes.buttonDownload}> */}
        {/* Download this collection schedule */}
        {/* </Button> */}
        {/* }> */}
        {/* </Route> */}
        {/* </Router> */}
        <a
          href="https://goo.gl/forms/hqMugxj4ngNGigGp2"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.buttonLink}
        >
          <Button variant="contained" className={classes.buttonRight}>
            Provide feedback on this tool
          </Button>
        </a>
      </CardActions>
    );
  }
  return (
    <CardActions className={classes.cardActions}>
      {/* <Router> */}
      {/* <Route exact path='/view/schedule' */}
      {/* render={()=> */}
      {/* <Button variant='contained' className={classes.buttonDownload}> */}
      {/* Download this collection schedule */}
      {/* </Button> */}
      {/* }> */}
      {/* </Route> */}
      {/* </Router> */}
      <a
        href="https://goo.gl/forms/hqMugxj4ngNGigGp2"
        target="_blank"
        rel="noopener noreferrer"
        className={classes.buttonLink}
      >
        <Button variant="contained" className={classes.buttonRight}>
          Provide feedback on this tool
        </Button>
      </a>
    </CardActions>
  );
};

Markup.defaultProps = {
  classes: null,
  query: null,
};

Markup.propTypes = {
  classes: PropTypes.instanceOf(Object),
  query: PropTypes.instanceOf(Object),
};

export default withStyles(styles)(FeedbackButton);
