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

class MobileHeader extends React.Component {
  constructor() {
    //调用基类的所有初始化方法
    super();
    //初始化赋值
    this.state = {
      modalVisible: false,
      action: 'login',
      hasLogined: false,
      userNiceName: '',
      userid: 0
    };
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.login = this.login.bind(this);
  };
  login(e){
    this.setState({modalVisible: true});
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

    const userShow = this.state.hasLogined
    ?
    <Link><Icon type="ibbox"></Icon></Link>
    :
    <Icon type="setting" onClick={this.login}></Icon>
    return (<div id="mobileheader">
      <header>
        <img src="./src/images/logo.png" alt="logo"/>
        <span>React News</span>
        {userShow}

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
      </header>
    </div>)
  }
}

export default MobileHeader = Form.create({})(MobileHeader);
