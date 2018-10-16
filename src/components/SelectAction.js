import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const BY_LAWS_URL = 'https://capeagulhas.openbylaws.org.za/za-wc033/act/by-law/2005/refuse-removal/eng/';


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
    const { classes, changeView } = this.props;

    return (
      <React.Fragment>
          <Typography className={classes.text}>
            Select an action:
          </Typography>
          <div>
            <Button 
              variant="contained"  
              size="large" 
              className={classes.button}
              onClick={() => changeView('report')}
            >
              Report uncollected refuse
            </Button>

            {/* <Button 
              variant="contained"
              size="large"
              className={classes.button}
              onClick={() => changeView}
            >
              View my refuse collection schedule
            </Button>

            <Button 
              variant="contained"
              size="large"
              className={classes.button}
              onClick={() => changeView}
            >
              Find my nearest dumping site
            </Button> */}

            <a
              href={BY_LAWS_URL} 
              target="_blank"
              rel="noopener noreferrer"
              className={classes.bylaws}
            >
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