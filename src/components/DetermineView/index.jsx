import React, { Component } from 'react';


class DetermineView extends Component {
  constructor(...props) {
    super(...props);

    this.state = {
      view: 'home',
      props: [],
    };

    this.events = {
      changeView: this.changeView.bind(this),
    };
  }

  changeView(view, props) {
    this.setState({ view, props });
  }

  render() {
    const { viewsList } = this.props;
    const { view, props } = this.state;
    const { changeView } = this.events;
    const ViewComponent = viewsList[view];
    const passedProps = {
      ...props, changeView, view, props,
    };
    return <ViewComponent {...passedProps} />;
  }
}


export default DetermineView;
