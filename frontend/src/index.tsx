import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import App2 from './APP2'
import reportWebVitals from './reportWebVitals'
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };



  render() {
    const { collapsed } = this.state;
    return (
      <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed}>
          
          <div className="logo" />
          
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            
              <Menu.Item key="1" icon={<PieChartOutlined />}>
              <Link to="/">  
                發起下午茶
              </Link>  
              </Menu.Item>
            
            
              <Menu.Item key="2" icon={<DesktopOutlined />}>
                <Link to="/page1">
                已發起的下午茶
                </Link>
              </Menu.Item>
            
            
              <Menu.Item key="9" icon={<FileOutlined />}>
                <Link to="/page2">
                查詢下午茶狀態
                </Link>
              </Menu.Item>
            
          </Menu>
        </Sider>
        <Layout className="site-layout">

          <Header className="site-layout-background"  style={{ padding: 0 }} >
          <p>下午茶系統</p>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Switch>
            <Route exact path="/">
              <App />
            </Route>
            <Route path="/page1">
            <App2 />
            </Route>
           <Route path="/page2">
            
            </Route>

            

            </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
      </Router>
    );
  }
}

ReactDOM.render(<SiderDemo />, document.getElementById('root'));
//<App />
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
