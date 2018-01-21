import React from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  Redirect,
  NavLink
} from 'react-router-dom';
import {Card} from 'antd';
require('es6-promise').polyfill();
require('isomorphic-fetch');

export default class PcNewsBlock extends React.Component {
  constructor() {
    super();
    this.state = {
      news: ''
    };
  }
  componentWillMount() {
    var request = new Request ('http://v.juhe.cn/toutiao/index?type=top&key=6a9e83c124b6661f02bcefcd3dc1e170',
    {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
      redirect: 'follow',
      headers: new Headers({
          "Origin": 'http://localhost:8080',
          'Content-Type': 'text/plain',
      })
    });
    fetch(request).then(response => response.json())
    .then(responseJson => this.setState({news: responseJson}));
  }
  render() {
    debugger;
    const news = this.state.news;
    const newsList = news.length
      ? news.map((newsItem, index) => (<li key={index}>
        <Link to={'details/${newsItem.uniquekey}'} target="_blank">
          {newsItem.title}
        </Link>
      </li>))
      : '没有加载任何新闻'
    return (<div class="topNewsList">
      <Card>
        <ul>
          {newsList}
        </ul>
      </Card>
    </div>)
  }
}
