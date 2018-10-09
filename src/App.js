import React, { Component } from 'react';
import SelectAction from './components/SelectAction';
import FormAddress from './components/FormAddress';
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
  },

  cardContent: {
    backgroundColor: '#00696B',
    padding: 24,
  },

  title: {
    color:'white',
  },

  subheader: {
    color: 'rgba(255, 255, 255, 0.5)'
  },

  content:{
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
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
          {/*<SelectAction />*/}
          <FormAddress/>
        </CardContent>
        <FeedbackButton/>
      </Card>
    );
  }
}

export default withStyles(styles)(App);