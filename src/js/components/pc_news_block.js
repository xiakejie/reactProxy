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
    var res
     = "/group/v1/deal/topic/discount/city/1?ci=1&client=iphone&movieBundleVersion=100&msid=48E2B810-805D-4821-9CDD-D5C9E01BC98A2015-06-17-14-50363&userid=10086&utm_campaign=AgroupBgroupD100Fab_chunceshishuju__a__a___b1junglehomepagecatesort__b__leftflow___ab_gxhceshi__nostrategy__leftflow___ab_gxhceshi0202__b__a___ab_pindaochangsha__a__leftflow___ab_xinkeceshi__b__leftflow___ab_gxtest__gd__leftflow___ab_gxh_82__nostrategy__leftflow___ab_pindaoshenyang__a__leftflow___i_group_5_2_deallist_poitype__d__d___ab_b_food_57_purepoilist_extinfo__a__a___ab_trip_yidizhoubianyou__b__leftflow___ab_i_group_5_3_poidetaildeallist__a__b___ab_waimaizhanshi__b__b1___a20141120nanning__m1__leftflow___ab_pindaoquxincelue__a__leftflow___ab_i_group_5_5_onsite__b__b___ab_i_group_5_6_searchkuang__a__leftflow&utm_content=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&utm_medium=iphone&utm_source=AppStore&utm_term=5.7&uuid=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&version_name=5.7"+(new Date()).getTime().toString();
    var request = new Request (res,
    {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
      redirect: 'follow',
      headers: new Headers({
        'Content-Type': 'text/plain',
      })
    });
    fetch(request).then(response =>response.json())
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
