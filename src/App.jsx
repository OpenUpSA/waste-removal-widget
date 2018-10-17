import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent/CardContent';
import PropTypes from 'prop-types';

import Measure from 'react-measure';
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

const styles = () => ({
  card: {
    maxWidth: 1140,
  },

  cardHeader: {
    backgroundColor: '#004B4F',
    padding: '12px 24px 16px 24px',
  },

  cardHeaderSm: {
    backgroundColor: '#004B4F',
    padding: '24px 48px 33px 48px',
  },

  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '2rem',
  },

  titleSm: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '2.6rem',
  },

  subheader: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: '1rem',
  },

  subheaderSm: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: '1.5rem',
  },

  content: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },

  cardContent: {
    backgroundColor: '#00696B',
    padding: '20px 24px 18px 24px',
  },

  cardContentSm: {
    backgroundColor: '#00696B',
    padding: '43px 48px 36px 48px',
  },
});


const Markup = (props) => {
  const { classes, municipality, width } = props;

  return (
    <Card className={classes.card}>
      <CardHeader
        className={width > 600 ? classes.cardHeaderSm : classes.cardHeader}
        classes={{
          title: width > 600 ? classes.titleSm : classes.title,
          subheader: width > 600 ? classes.subheaderSm : classes.subheader,
          content: width > 600 ? classes.content : {},
        }}
        title="Waste removal assistant"
        subheader={`${municipality} Municipality`}
      />
      <CardContent className={width > 600 ? classes.cardContentSm : classes.cardContent}>
        <DetermineView viewsList={VIEWS_LIST} areaList={AREA_LIST} default="home" {...{ width }} />
      </CardContent>
      <FeedbackButton {...{ width }} />
    </Card>
  );
};


class App extends Component {
  constructor(...props) {
    super(...props);

    this.state = {
      width: null,
    };

    this.events = {
      updateWidth: this.updateWidth.bind(this),
    };
  }

  updateWidth(width) {
    return this.setState({ width });
  }

  render() {
    const { updateWidth } = this.events;
    const { width } = this.state;

    return (
      <Measure onResize={({ entry }) => updateWidth(entry.width)}>
        {
          ({ measureRef }) => (
            <div ref={measureRef}>
              {width && <Markup {...{ ...this.props, width }} />}
            </div>
          )
        }
      </Measure>
    );
  }
}


Markup.defaultProps = {
  classes: null,
  municipality: null,
};

Markup.propTypes = {
  classes: PropTypes.instanceOf(Object),
  municipality: PropTypes.string,
  width: PropTypes.number.isRequired,
};

export default withStyles(styles)(App);
