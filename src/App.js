import React, { Component } from 'react';
import SelectAction from './components/SelectAction';
import FormAddress from './components/FormAddress';
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

  cardContent: {
    backgroundColor: '#00696B',
    padding: 24,
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
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;

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
          subheader='Cape Agulhas Municipality'
          />
        <CardContent className={classes.cardContent}>
          <SelectAction />
          {/*<FormAddress/>*/}
          {/*<BasicLocation/>*/}
          {/*<WasteSchedule/>*/}
          {/*<DumpingSites />*/}
        </CardContent>
        <FeedbackButton/>
      </Card>
    );
  }
}

export default withStyles(styles)(App);