import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent/CardContent';
import PropTypes from 'prop-types';

import FeedbackButton from './components/FeedbackButton';
import DetermineView from './components/DetermineView';
import SelectAction from './components/SelectAction';
import ReportContact from './components/ReportContact';
import BasicLocation from './components/BasicLocation';
import WasteSchedule from './components/WasteSchedule';
import DumpingSites from './components/DumpingSites';


const VIEWS_LIST = {
  home: SelectAction,
  report: ReportContact,
  schedule: BasicLocation,
  sites: BasicLocation,
  areaSchedules: WasteSchedule,
  areaSites: DumpingSites,
};

const AREA_LIST = [
  { value: 'Bredasdorp (Area 1)', text: 'Bredasdorp (Area 1)' },
  { value: 'Bredasdorp (Area 2)', text: 'Bredasdorp (Area 2)' },
  { value: 'Klipdale', text: 'Klipdale' },
  { value: 'L’Agulhas', text: 'L’Agulhas' },
  { value: 'Napier', text: 'Napier' },
  { value: 'Protem', text: 'Protem' },
  { value: 'Struisbaai', text: 'Struisbaai' },
  { value: 'Struisbaai Noord', text: 'Struisbaai Noord' },
  { value: 'Suiderstrand', text: 'Suiderstrand' },
  { value: 'Waenhuiskrans (Arniston)', text: 'Waenhuiskrans (Arniston)' },
  { value: 'Zwelitsha', text: 'Zwelitsha' },
];

const styles = theme => ({
  card: {
    maxWidth: 1140,
  },

  cardHeader: {
    backgroundColor: '#004B4F',
    padding: '12px 24px 16px 24px',
    [theme.breakpoints.up('sm')]: {
      padding: '24px 48px 33px 48px',
    },
  },

  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '2rem',
    [theme.breakpoints.up('sm')]: {
      fontSize: '2.6rem',
    },
  },

  subheader: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: '1rem',
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.5rem',
    },
  },

  content: {
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
    },
  },

  cardContent: {
    backgroundColor: '#00696B',
    padding: '20px 24px 18px 24px',
    [theme.breakpoints.up('sm')]: {
      padding: '43px 48px 36px 48px',
    },
  },
});

const App = (props) => {
  const { classes, municipality } = props;

  return (
    <Card className={classes.card}>
      <CardHeader
        className={classes.cardHeader}
        classes={{
          title: classes.title,
          subheader: classes.subheader,
          content: classes.content,
        }}
        title="Waste removal assistant"
        subheader={`${municipality} Municipality`}
      />
      <CardContent className={classes.cardContent}>
        <DetermineView viewsList={VIEWS_LIST} areaList={AREA_LIST} default="home" />
      </CardContent>
      <FeedbackButton />
    </Card>
  );
};

App.defaultProps = {
  classes: null,
  municipality: null,
};

App.propTypes = {
  classes: PropTypes.instanceOf(Object),
  municipality: PropTypes.string,
};

export default withStyles(styles)(App);
