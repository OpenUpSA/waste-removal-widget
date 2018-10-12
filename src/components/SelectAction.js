import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  text: {
    color:'white',
    fontSize: '1.7rem',
  },
  button: {
    backgroundColor:  'white',
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
    }
  },
  link: {
    textDecoration: 'none',
    color: 'black'
  },
  bylaws: {
    textDecoration: 'none'
  }
});

class SelectAction extends Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
          <Typography className={classes.text}>
            Select an action:
          </Typography>
          <div>
            {/*<Button variant="contained" size="large" className={classes.button}>*/}
              {/*<Link to='/report' className={classes.link}>*/}
                {/*Report a stolen wheelie bin*/}
              {/*</Link>*/}
            {/*</Button>*/}
            {/*<Button variant="contained" size="large" className={classes.button}>*/}
              {/*<Link to='/report' className={classes.link}>*/}
                {/*Report a damaged wheelie bin*/}
              {/*</Link>*/}
            {/*</Button>*/}
            <Button variant="contained"  size="large" className={classes.button}>
              <Link to='/report' className={classes.link}>
                Report uncollected refuse
              </Link>
            </Button>
            <Button variant="contained" size="large" className={classes.button}>
              <Link to='/view/schedule' className={classes.link}>
                View my refuse collection schedule
              </Link>
            </Button>
            <Button variant="contained" size="large" className={classes.button}>
              <Link to='/view/sites' className={classes.link}>
                Find my nearest dumping site
              </Link>
            </Button>
            <a href="https://capeagulhas.openbylaws.org.za/za-wc033/act/by-law/2005/refuse-removal/eng/" target="_blank" className={classes.bylaws}>
              <Button variant="contained" size="large" className={classes.button}>
                View my local refuse by-laws
              </Button>
            </a>
          </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(SelectAction);

// TODO: loop through buttons and create; link to next screens