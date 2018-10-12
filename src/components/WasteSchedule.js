import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import Button from "@material-ui/core/Button/Button";
import {ArrowBack} from "@material-ui/icons";
import Typography from "@material-ui/core/Typography/Typography";
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

const styles = theme => ({
  container: {
    display: 'flex',
    alignItems: 'center'
  },

  button: {
    minWidth: 46,
    width: 46,
    height: 46,
    backgroundColor: '#46A440',
    color: 'white',
    marginRight: 16,
  },

  link: {
    textDecoration: 'none',
    color: 'white'
  },

  text: {
    color: 'white',
    fontSize: '1.7rem',
  },

  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      flexWrap: 'wrap'
    }
  },

  card: {
    marginTop: 16,
    width: 'auto',
    [theme.breakpoints.up('sm')]:{
      marginRight: 16,
      width: 336,
      '&:last-child': {
        marginRight: 0,
      }
    }
  },

  cardHeader: {
    backgroundColor: '#004B4F',
    height: 50,
    padding: 0
  },

  cardHeaderButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.32)',
    borderRadius: '0 4px 0 0',
    width: 50,
    height: 50
  },

  title: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center'
  },

  action: {
    margin: 0
  },

  cardContentText: {
    color:'#004B4F',
    textAlign: 'center'
  },

  cardActions: {
    backgroundColor: 'rgba(0, 0, 0, 0.08)'
  },

  cardActionsText: {
    color:'#004B4F',
    textAlign: 'center',
    width: '100%'
  }
});


class WasteSchedule extends Component {

  render(){
    const { classes } = this.props;
    const area = this.props.location.state.area;

    // Get dates for collections
    const Monday = new Date();
    Monday.setDate(Monday.getDate() + (1 + 7 - Monday.getDay()) % 7);

    const Tuesday = new Date();
    Tuesday.setDate(Tuesday.getDate() + (2 + 7 - Tuesday.getDay()) % 7);

    const Wednesday = new Date();
    Wednesday.setDate(Wednesday.getDate() + (3 + 7 - Wednesday.getDay()) % 7);

    const Thursday = new Date();
    Thursday.setDate(Thursday.getDate() + (4 + 7 - Thursday.getDay()) % 7);

    const Friday = new Date();
    Friday.setDate(Friday.getDate() + (5 + 7 - Friday.getDay()) % 7);

    // Set day of week per area - Household refuse and Recycling
    let householdDay;

    if ( area === `Bredasdorp (Area 1)` || `Struisbaai` || `L'Agulhas` || `Waenhuiskrans (Arniston)` ) {
      householdDay = 'Monday';
    }

    if ( area === `Bredasdorp (Area 2)` || `Struisbaai Noord` || `Suiderstrand` ) {
      householdDay = 'Tuesday';
    }

    if ( area === `Napier` ) {
      householdDay = 'Thursday';
    }

    // Set date based on day of week
    let collectionDate;

    if ( householdDay === 'Monday' ) {
      collectionDate = Monday;
    }

    if ( householdDay === 'Tuesday' ) {
      collectionDate = Tuesday;
    }

    if ( householdDay === 'Wednesday' ) {
      collectionDate = Wednesday;
    }

    if ( householdDay === 'Thursday' ) {
      collectionDate = Thursday;
    }

    return (
      <React.Fragment>
        <div className={classes.container}>
          <Button variant="contained" className={classes.button}>
            <Link to='/' className={classes.link}>
              <ArrowBack />
            </Link>
          </Button>
          <Typography className={classes.text}>
            { area } Waste collection schedule
          </Typography>
        </div>
        <div className={classes.cardContainer}>
          <Card className={classes.card}>
            <CardHeader className={classes.cardHeader}
                        classes={{
                          title: classes.title,
                          action: classes.action,
                        }}
                        action={
                          <Button className={classes.cardHeaderButton}>
                            <InfoOutlinedIcon />
                          </Button>
                        }
                        title='Household refuse'
            >
            </CardHeader>
            <CardContent>
              <Typography className={classes.cardContentText}>
                { householdDay }
              </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
              <Typography className={classes.cardActionsText}>
                Next collection: { collectionDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) }
              </Typography>
            </CardActions>
          </Card>
          <Card className={classes.card}>
            <CardHeader className={classes.cardHeader}
                        classes={{
                          title: classes.title,
                          action: classes.action,
                        }}
                        action={
                          <Button className={classes.cardHeaderButton}>
                            <InfoOutlinedIcon />
                          </Button>
                        }
                        title='Business refuse'
            >
            </CardHeader>
            <CardContent>
              <Typography className={classes.cardContentText}>
                {/*Content to be loaded dynamically*/}
                Mondays & Wednesdays
              </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
              <Typography className={classes.cardActionsText}>
                {/*Date to be loaded dynamically*/}
                Next collection: 30 Nov 2018
              </Typography>
            </CardActions>
          </Card>
          <Card className={classes.card}>
            <CardHeader className={classes.cardHeader}
                        classes={{
                          title: classes.title,
                          action: classes.action,
                        }}
                        action={
                          <Button className={classes.cardHeaderButton}>
                            <InfoOutlinedIcon />
                          </Button>
                        }
                        title='Recycling'
            >
            </CardHeader>
            <CardContent>
              <Typography className={classes.cardContentText}>
                { householdDay }
              </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
              <Typography className={classes.cardActionsText}>
                Next collection: { collectionDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) }
              </Typography>
            </CardActions>
          </Card>
        </div>
      </React.Fragment>
    )
  };
};

export default withStyles(styles)(WasteSchedule);