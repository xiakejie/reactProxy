import React from 'react';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import {Tabs} from 'antd';

const TabPane = Tabs.TabPane;
export default class MobileIndex extends React.Component {
  render(){
    return(
      <div>
        <MobileHeader />
          <Tabs defaultActiveKey="1">
            <TabPane tab="头条" key="1"></TabPane>
            <TabPane tab="社会" key="2"></TabPane>
            <TabPane tab="科技" key="3"></TabPane>
            <TabPane tab="体育" key="4"></TabPane>
            <TabPane tab="金融" key="5"></TabPane>
          </Tabs>
        <MobileFooter />
      </div>
    )
  }
}
