import React, { Component } from 'react';
import SelectAction from './components/SelectAction';

import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

const styles = theme => ({
  card: {
    maxWidth: 1140,
  },

  cardHeader: {
    backgroundColor: '#004B4F',
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
          <SelectAction />
      </Card>
    );
  }
}

export default withStyles(styles)(App);