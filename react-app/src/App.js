import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux'
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import deDE from 'antd/lib/locale-provider/de_DE';
import ruRU from 'antd/lib/locale-provider/ru_RU';
import Layout from './containers/Layout'
import Home from './containers/Home'
import EventPage from './containers/EventPage'
import ScrollToTop from './components/ScrollToTop'
import './App.sass';

class App extends Component {
  render() {
    return (
      <LocaleProvider locale={ruRU}>
      <BrowserRouter>
      <ScrollToTop>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/event:id' component={EventPage}/>
          </Switch>
        </Layout>
      </ScrollToTop>
    </BrowserRouter>
      </LocaleProvider>
  );

  }
}

export default App;
