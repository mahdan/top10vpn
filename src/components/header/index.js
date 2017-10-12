import React, { Component } from 'react';
import {Icon} from 'react-fa'
import logo from '../../assets/logo.svg';
import './style.css';

export default class Header extends Component {

  // constructor() {
  //   super();
  //   this.state = {
  //     vpn: [],
  //   };
  // };
  //
  // componentDidMount() {
  //
  //   fetch('https://perfapi.perf-data-api.top10vpn-data.prod.top10vpn.co/sdata/results?src=lon&dest=nyc&tpd=14')
  //   .then(results => {
  //     return results.json();
  //   }).then(data => {
  //     let vpn = data.results.map((item) => {
  //       return(
  //         <div key={item.results}>
  //           <div className="vpn_info">
  //             item.vpn.
  //           </div>
  //           <div className="vpn_info">
  //             download speed
  //           </div>
  //           <div className="vpn_info">
  //             ping time
  //           </div>
  //         </div>
  //       )
  //     })
  //   })
  // }

  render() {
    return (
      <div>
        <header className="header">
          <img src={logo} className="logo" alt="logo" />
          <div className="nav">
            <nav>Menu <Icon fixedWidth name="bars" /></nav>
          </div>
        </header>
      </div>
    );
  };
};
