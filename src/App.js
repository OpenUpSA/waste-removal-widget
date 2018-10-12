import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SelectAction from './components/SelectAction';
import ReportContact from './components/ReportContact';
import BasicLocation from './components/BasicLocation';
import WasteSchedule from './components/WasteSchedule';
import DumpingSites from './components/DumpingSites';
import FeedbackButton from './components/FeedbackButton';

import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from "@material-ui/core/CardContent/CardContent";

const styles = theme => ({
  card: {
    maxWidth: 1140,
  },

  cardHeader: {
    backgroundColor: '#004B4F',
    padding: '12px 24px 16px 24px',
    [theme.breakpoints.up('sm')]: {
      padding: '24px 48px 33px 48px',
    }
  },

  title: {
    color:'white',
    fontWeight: 'bold',
    fontSize: '2rem',
    [theme.breakpoints.up('sm')]: {
      fontSize: '2.6rem',
    }
  },

  subheader: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: '1rem',
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.5rem',
    }
  },

  content:{
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  },

  cardContent: {
    backgroundColor: '#00696B',
    padding: '20px 24px 18px 24px',
    [theme.breakpoints.up('sm')]: {
      padding: '43px 48px 36px 48px',
    }
  },
});

class App extends Component {
  render() {
    const { classes, municipality } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          className={classes.cardHeader}
          classes={{
            title: classes.title,
            subheader: classes.subheader,
            content: classes.content,
          }}
          title='Waste removal assistant'
          subheader={`${municipality} Municipality`}
          />
        <CardContent className={classes.cardContent}>
            <Router>
              <Switch>
                <Route exact path='/' component={SelectAction} />
                <Route exact path='/report' component={ReportContact} />
                <Route exact path='/view/schedule' component={BasicLocation} />
                <Route exact path='/view/sites' component={BasicLocation} />
                <Route exact path='/view/schedule/:area' component={WasteSchedule} />
                <Route exact path='/view/sites/:area' component={DumpingSites} />
              </Switch>
            </Router>
        </CardContent>
        <FeedbackButton/>
      </Card>
    );
  }
}

export default withStyles(styles)(App);