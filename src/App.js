// @flow

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Box from './box.component';

type Props = {};

type State = {
  list: string[]
};

class App extends Component<Props, State> {
  state = {
    list: []
  };

  loadItemstoList(list: string[]) {
    let newList = list;

    newList.push('uno');
    newList.push('223');

    return newList;
  }

  componentDidMount() {
    const list = this.loadItemstoList(this.state.list);

    this.setState({list: list});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div className="list-container">
          {this.state.list.length > 0 && this.state.list.map((item, i) => <h2 className={'list-item'} key={i}>{item}</h2>)}
        </div>

        <Box/>
      </div>
    );
  }
}

export default App;
