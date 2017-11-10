import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Layout from './containers/Layout'
import Home from './containers/Home'
import EventPage from './containers/EventPage'
import ScrollToTop from './components/ScrollToTop'
import './App.sass';

class App extends Component {
  render() {
    return (<BrowserRouter>
      <ScrollToTop>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/event' component={EventPage}/>
          </Switch>
        </Layout>
      </ScrollToTop>
    </BrowserRouter>);

  }
}

export default App;
