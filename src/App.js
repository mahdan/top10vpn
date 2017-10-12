import React, { Component } from 'react';
import Header from './components/header/index';
import Search from './components/search/index';
import Results from './components/results/index';
import Filter from './components/filter/index';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <main className="container">
          <h1 className="h1">VPN Speed Test</h1>
          <Search />
          <Results />
        </main>
        <Filter />
      </div>
    );
  };
};
