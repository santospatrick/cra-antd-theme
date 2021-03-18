import React from 'react';
import { Button, Space, Switch } from 'antd';
import './App.less';

const App = () => (
  <div className="App">
    <Space size={20} direction="vertical">
      <Button type="primary">Button</Button>
      <Switch defaultChecked />
    </Space>
  </div>
);

export default App;