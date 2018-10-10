import React, { Component } from 'react';

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

  text: {
    color: 'white'
  },

  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row'
    }
  },

  card: {
    marginTop: 16,
    width: 'auto',
    [theme.breakpoints.up('sm')]:{
      marginRight: 16,
      width: '50%',
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


class DumpingSites extends Component {

  render(){
    const { classes } = this.props;

    return (
      <React.Fragment>
        <div className={classes.container}>
          {/*Back button - return to home screen*/}
          <Button variant="contained" className={classes.button}>
            <ArrowBack />
          </Button>
          <Typography className={classes.text}>
            {/*Bredasdorp to be replaced with selected town/area name*/}
            Bredasdorp nearest dumping sites
          </Typography>
        </div>
        <div className={classes.cardContainer}>
          <Card className={classes.card}>
            {/*Title to be updated dynamically*/}
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
                        title='Main Road, Struisbaai'
            >
            </CardHeader>
            <CardContent>
              <Typography className={classes.cardContentText}>
                {/*Content to be loaded dynamically*/}
                Struisbaai Dump
              </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
              <Typography className={classes.cardActionsText}>
                {/*Date to be loaded dynamically*/}
                Open today from 08h00 - 18h00
              </Typography>
            </CardActions>
          </Card>
          <Card className={classes.card}>
            {/*Title to be updated dynamically*/}
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
                        title='Limeworks Road, Bredasdorp'
            >
            </CardHeader>
            <CardContent>
              <Typography className={classes.cardContentText}>
                {/*Content to be loaded dynamically*/}
                Bredasdorp Waste Facility
              </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
              <Typography className={classes.cardActionsText}>
                {/*Date to be loaded dynamically*/}
                Closed today
              </Typography>
            </CardActions>
          </Card>
        </div>
      </React.Fragment>
    )
  };
};

export default withStyles(styles)(DumpingSites);