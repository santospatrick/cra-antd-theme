import React from 'react';
import { Button, Space, Switch } from 'antd';
import './App.less';
import styled, { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

const StyledSquare = styled.div`
  height: 50px;
  width: 50px;
  background-color: ${props => props.theme["@primary-color"]};
`

const App = () => (
  <ThemeProvider theme={theme}>
    <div className="App">
      <Space size={20} direction="vertical">
        <StyledSquare />
        <Button type="primary">Button</Button>
        <Switch defaultChecked />
      </Space>
    </div>
  </ThemeProvider>
);

export default App;