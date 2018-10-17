import React, { Component } from 'react';


class DetermineView extends Component {
  constructor(...props) {
    super(...props);

    this.state = {
      view: 'home',
      props: {},
    };

    this.events = {
      changeView: this.changeView.bind(this),
    };
  }

  changeView(view, props) {
    this.setState({ view, props });
  }

  render() {
    const { viewsList, width } = this.props;
    const { view, props } = this.state;
    const { changeView, updateWidth } = this.events;
    const ViewComponent = viewsList[view];
    const passedProps = {
      ...props, changeView, updateWidth, view, props, width,
    };
    return <ViewComponent {...passedProps} />;
  }
}


export default DetermineView;
