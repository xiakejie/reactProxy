import React from 'react';
import {Row, Col, Tabs, Carousel} from 'antd';
const TabPane = Tabs.TabPane;
import PcNewsBlock from './pc_news_block';

export default class PCNewsContainer extends React.Component {
  render(){
    const settings = {
      dots : true,
      easing : 'linear',
      autoplay : true
    }
    return(
      <Row>
        <Col span={2}></Col>
        <Col span={20} class="container">
          <div class="leftContainer">
            <div class="carousel">
              <Carousel {...settings}>
                <div><img src="./src/images/carousel_1.jpg" /></div>
                <div><img src="./src/images/carousel_2.jpg"  /></div>
                <div><img src="./src/images/carousel_3.jpg"  /></div>
                <div><img src="./src/images/carousel_4.jpg"  /></div>
              </Carousel>
            </div>
          </div>
          <Tabs class="tab_news">
            <TabPane tab="新闻" key="1">
              <PcNewsBlock count={2} type="top" width="100%" bordered="false" />
            </TabPane>
          </Tabs>
        </Col>
        <Col span={2}></Col>
      </Row>
    )
  }
}
