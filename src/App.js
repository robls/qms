import React, { Component } from 'react';
import List from './pages/List';
import UpdateQuestion from './pages/UpdateQuestion';
import Header from './Components/Header';
import { Switch, Route } from 'react-router-dom';
import CreateQuestion from './pages/CreateQuestion';

import GlobalStyle from './styles/global';

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path="/" component={List} />
          <Route exact path="/createQuestion" component={CreateQuestion} />
          <Route exact path="/updateQuestion" component={UpdateQuestion} />
        </Switch>
      </>
    )
  }
}

export default App
