import React, { Component } from 'react';
import {Icon} from 'react-fa'
import './style.css';

export default class Filter extends Component {
  render() {
    return (
      <div className="filter">
        <a className="filter_button">Filter by <Icon name="angle-down" /></a>
        <a className="filter_button">Sort by <Icon name="angle-down" /></a>
      </div>
    );
  };
};
