import React from 'react';
import { Button, Space, Switch } from 'antd';
import './App.less';
import styled from 'styled-components';

const StyledSquare = styled.div`
  height: 50px;
  width: 50px;
  background-color: @primary-color;
`

const App = () => (
  <div className="App">
    <Space size={20} direction="vertical">
      <StyledSquare />
      <Button type="primary">Button</Button>
      <Switch defaultChecked />
    </Space>
  </div>
);

export default App;