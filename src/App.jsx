import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Measure from 'react-measure';

import FeedbackButton from './components/FeedbackButton';
import DetermineView from './components/DetermineView';
import SelectAction from './components/SelectAction';
import ReportContact from './components/ReportContact';
import BasicLocation from './components/BasicLocation';
import WasteSchedule from './components/WasteSchedule';
import DumpingSites from './components/DumpingSites';

import {
  Card,
  CardHeader,
  CardContent
} from '@material-ui/core';


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

const CardStyled = styled(Card)`
  && {
    max-width: 1140px;
  }
`;

const CardHeaderStyled = styled(CardHeader)`
  && {
    background-color: #004B4F;
    padding: 24px 48px 33px 48px;
    padding: ${({ width }) => (width > 600 ? '24px 48px 33px 48px' : '12px 24px 16px 24px')};
  }

  & .title {
    color: white;
    font-weight: bold;
    font-size: 2.6rem;
    font-size: ${({ width }) => (width > 600 ? '2.6rem' : '2rem')};
  }

  & .subheader {
    color: rgba(255, 255, 255, 0.5);
    font-size: ${({ width }) => (width > 600 ? '1.5rem' : '1rem')};
  }

  & .content {
    display: flex;
    display: ${({ width }) => (width > 600 ? 'flex' : null)};
    justify-content: ${({ width }) => (width > 600 ? 'space-between' : null)};
    align-items: ${({ width }) => (width > 600 ? 'center' : null)};
    flex-wrap: ${({ width }) => (width > 600 ? 'wrap' : null)};
  }
`;

const CardContentStyled = styled(CardContent)`
  && {
    background-color: #00696B;
    padding: 43px 48px 36px 48px;
    padding: ${({ width }) => (width > 600 ? '43px 48px 36px 48px' : '20px 24px 18px 24px')};
  }
`;


const Markup = (props) => {
  const { municipality, width } = props;

  return (
    <CardStyled>
      <CardHeaderStyled {...{ width }}
        classes={{
          title: 'title',
          subheader: 'subheader',
          content: 'content',
        }}
        title="Waste removal assistant"
        subheader={`${municipality} Municipality`}
      />
      <CardContentStyled {...{ width }}>
        <DetermineView viewsList={VIEWS_LIST} areaList={AREA_LIST} default="home" {...{ width }} />
      </CardContentStyled>
      <FeedbackButton {...{ width }} />
    </CardStyled>
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
      <Measure onResize={({ entry }) => !!entry && !!entry.width && updateWidth(entry.width)}>
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

export default App;
