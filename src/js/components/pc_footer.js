import React from 'react';
import 'antd/dist/antd.css';
import {Row, Col} from 'antd';

export default class PCFooter extends React.Component {
  constructor() {
    //调用基类的所有初始化方法
    super();
  };
  render() {
    return (<footer>
      <Row>
        <Col span={2}></Col>
        <Col span={20} class="footer">
          &copy;&nbsp;2016 ReactNews. All Rights Reserved.
        </Col>
        <Col span={2}></Col>
      </Row>
    </footer>)
  }
}
