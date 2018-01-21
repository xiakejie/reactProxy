import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import {BrowserRouter, Route, Link, Switch, Redirect ,NavLink} from 'react-router-dom';
import MediaQuery from 'react-responsive';
import PCIndex from './components/pc_index';
import MobileIndex from './components/mobile_index';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <MediaQuery query="(min-device-width: 1224px)">
          <PCIndex />
        </MediaQuery>
        <MediaQuery query="(max-device-width: 1224px)">
          <MobileIndex />
        </MediaQuery>
      </div>
    )
  };
};

ReactDOM.render(<App/>, document.getElementById('mainContainer'));
