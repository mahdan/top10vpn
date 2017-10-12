import React, { Component } from 'react';
import {Icon} from 'react-fa'
import './style.css';

export default class Search extends Component {
  render() {
    return (
      <div>
        <form className="form">
          <div className="form_field">
            <label className="form_field_select_label">Where are you now?</label>
            <select name="source" className="form_field_select">
              <option value="fra">Frankfurt</option>
              <option value="lon">London</option>
              <option value="nyc">New York</option>
              <option value="sfo">SFO</option>
              <option value="sgp">SGP</option>
              <option value="syd">Sydney</option>
            </select>
          </div>
          <div className="form_field">
            <label className="form_field_select_label">Where do you want to VPN into?</label>
            <select name="destination" className="form_field_select">
              <option value="fra">Frankfurt</option>
              <option value="lon">London</option>
              <option value="nyc">New York</option>
              <option value="sfo">SFO</option>
              <option value="sgp">SGP</option>
              <option value="syd">Sydney</option>
            </select>
          </div>
          <div className="form_field_group">
            <input className="form_field_group_input" type="radio" id="zero" name="selector" />
            <label className="form_field_group_input_label" htmlFor="zero">Right now</label>
            <input className="form_field_group_input" type="radio" id="seven" name="selector" defaultChecked />
            <label className="form_field_group_input_label" htmlFor="seven">Last 7 days</label>
            <input className="form_field_group_input" type="radio" id="thirty" name="selector" />
            <label className="form_field_group_input_label" htmlFor="thirty">Last 30 days</label>
          </div>
          <div className="form_field_submit">
            <a className="form_field_submit_button"><Icon name="angle-down" /> View Results</a>
          </div>
        </form>
      </div>
    );
  };
};
