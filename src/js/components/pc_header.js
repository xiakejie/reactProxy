import React from 'react';
import 'antd/dist/antd.css';
import {Row, Col} from 'antd';
import {
  Menu,
  Icon,
  Tabs,
  message,
  Form,
  Input,
  Button,
  CheckBox,
  Modal
} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

class PCHeader extends React.Component {
  constructor() {
    //调用基类的所有初始化方法
    super();
    //初始化赋值
    this.state = {
      current: 'top',
      modalVisible: false,
      action: 'login',
      hasLogined: false,
      userNiceName: '',
      userid: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };
  handleClick(e) {
    console.log('click ', e);
    this.setState({current: e.key});
    if (e.key == "register") {
      this.setState({current: e.key});
      this.setState({modalVisible: true});
    } else {
      this.setState({current: e.key});
    }
  }
  handleOk(e) {
    console.log(e);
    this.setState({modalVisible: false});
  }
  handleCancel(e) {
    console.log(e);
    this.setState({modalVisible: false});
  }
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
    this.setState({modalVisible: false});
  }
  render() {

    const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;

    // Only show error after a field is touched.
    const userNameError = isFieldTouched('userName') && getFieldError('userName');
    const passwordError = isFieldTouched('password') && getFieldError('password');
    const confirmpassError = isFieldTouched('confirmpass') && getFieldError('confirmpass');
    //let {getFieldProps} = this.props.form;
    const userShow = this.state.hasLogined
      ? <Menu.Item key="logout" class="register">
          <Button type="primary" htmlType="button">{this.state.userNiceName}</Button>
          &nbsp;&nbsp;
          <Link target="_blank">
            <Button type="dashed" htmlType="button">个人中心</Button>
            &nbsp;&nbsp;
            <Button type="ghost" htmlType="button">退出</Button>
          </Link>
        </Menu.Item>
      : <Menu.Item key="register" class="register">
        <Icon type="appstore"/>注册/登录
      </Menu.Item>
    return (<header>
      <Row>
        <Col span={2}></Col>
        <Col span={4}>
          <a href="/" class="logo">
            <img src="./src/images/logo.png" alt="logo"/>
            <span>React News</span>
          </a>
        </Col>
        <Col span={16}>
          <Menu mode="horizontal" onClick={this.handleClick} selectedKeys={[this.state.current]}>
            <Menu.Item key="top">
              <Icon type="appstore"/>头条
            </Menu.Item>
            <Menu.Item key="shehui">
              <Icon type="appstore"/>社会
            </Menu.Item>
            <Menu.Item key="guonei">
              <Icon type="appstore"/>国内
            </Menu.Item>
            <Menu.Item key="guoji">
              <Icon type="appstore"/>国际
            </Menu.Item>
            <Menu.Item key="yule">
              <Icon type="appstore"/>娱乐
            </Menu.Item>
            <Menu.Item key="tiyu">
              <Icon type="appstore"/>体育
            </Menu.Item>
            <Menu.Item key="keji">
              <Icon type="appstore"/>科技
            </Menu.Item>
            <Menu.Item key="shishang">
              <Icon type="appstore"/>时尚
            </Menu.Item>
            {userShow}
          </Menu>

          <Modal title="用户中心" visible={this.state.modalVisible} onOk={this.handleOk} onCancel={this.handleCancel} wrapClassName="vertical-center-modal">
            <Tabs type="card">
              <TabPane tab="注册" key="2">
                <Form layout="horizontal" onSubmit={this.handleSubmit}>
                  <FormItem label="账户" validateStatus={userNameError
                      ? 'error'
                      : ''} help={userNameError || ''}>
                    {
                      getFieldDecorator('username', {
                        rules: [
                          {
                            required: true,
                            message: 'Username is required!'
                          }
                        ]
                      })(<Input placeholder="请输入您的账号"/>)
                    }
                  </FormItem>
                  <FormItem label="密码" validateStatus={passwordError
                      ? 'error'
                      : ''} help={passwordError || ''}>
                    {
                      getFieldDecorator('password', {
                        rules: [
                          {
                            required: true,
                            message: 'Username is required!'
                          }
                        ]
                      })(<Input placeholder="请输入您的密码"/>)
                    }
                  </FormItem>
                  <FormItem label="确认密码" validateStatus={confirmpassError
                      ? 'error'
                      : ''} help={confirmpassError || ''}>
                    {
                      getFieldDecorator('confirmpass', {
                        rules: [
                          {
                            required: true,
                            message: 'Username is required!'
                          }
                        ]
                      })(<Input placeholder="请确认输入您的密码"/>)
                    }
                  </FormItem>
                  <Button type="primary" htmlType="submit">注册</Button>
                </Form>
              </TabPane>
            </Tabs>
          </Modal>
        </Col>
        <Col span={2}></Col>
      </Row>
    </header>)
  }
}

export default PCHeader = Form.create({})(PCHeader);
