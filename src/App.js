import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { ContainerQuery } from 'react-container-query';


const query = {
  'large': {
    minWidth: 600,
  }
};


class App extends Component {
  render() {
    return (
      <ContainerQuery query={query}>
        {query => <Markup query={query} />}
      </ContainerQuery>
    );
  }
}


const Markup = ({ query }) => {
  if (query.large) {
    return (
      <div style={{ background: 'yellow'}}>
        <Button variant="contained" color="primary">Large</Button>
      </div>
    )
  }

  return (
    <div style={{ background: 'orange'}}>
      <Button variant="contained" color="secondary">small</Button>
    </div>
  );
}

export default App;
