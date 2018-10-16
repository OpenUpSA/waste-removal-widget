import React, { Component } from 'react';

import SelectAction from './SelectAction';
import ReportContact from './ReportContact';
import BasicLocation from './BasicLocation';
import WasteSchedule from './WasteSchedule';
import DumpingSites from './DumpingSites';


const viewsList = {
  'home': SelectAction,
  'report': ReportContact,
  'schedule': BasicLocation,
  'sites': BasicLocation,
  'areaSchedules': WasteSchedule,
  'areaSites': DumpingSites,
}


class DetermineView extends Component {
  constructor(...props) {
    super(...props);

    this.state = {
      view: 'home',
      props: {},
    }

    this.events = {
      changeView: this.changeView.bind(this),
    }
  }

  changeView(view, props) {
    this.setState({ view })
  }
  
  render() {
    const { view, props } = this.state;
    const { changeView } = this.events;
    const ViewComponent = viewsList[view];
    const passedProps = { ...props, changeView };
    return <ViewComponent {...passedProps} />
  }
}


export default DetermineView;
