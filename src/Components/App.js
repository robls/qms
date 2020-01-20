import React, { Component } from 'react'
import LinkList from './QuestionList'
import Header from './Header'
import '../styles/App.css'
import { Switch, Route } from 'react-router-dom'
import CreateQuestion from './CreateQuestion'

class App extends Component {
  render() {
    return (
        <div className="body-center">
        <Header/>
        <div className="main">
          <Switch>
            <Route exact path="/" component={LinkList} />
            <Route exact path="/novaQuestao" component={CreateQuestion} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App