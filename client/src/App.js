import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react'
import Filters from './Filters';
import Chart from './Chart';
//import Client from './Client';


class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          dataSet: [],
          query: ''
      };
  }

  citySearch = (itemIndex) => {

  }

  render() {

    return (
      <div className='App'>
        <Container text>
          <Header as='h2'>D3js in React</Header>
          <Filters />
        </Container>
        <Container text>
          <Chart />
        </Container>
      </div>
    );
  }
}

export default App;
