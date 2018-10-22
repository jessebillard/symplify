import React, { Component } from 'react';
import './App.css'
import MainMenu from './components/mainMenu';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListContainer from './components/listContainer';
import AboutPage from './components/aboutPage';
import BoardContainer from './components/boardContainer';

class App extends Component {

  render() {    
    return (
      <Router>
        <React.Fragment>
          <MainMenu></MainMenu>          
          <Switch>
            <Route path={'/board/:boardId'} component={ListContainer} />
            <Route path='/about' component={AboutPage} />
            <Route path='/' component={BoardContainer} />
          </Switch>
        </React.Fragment>
      </Router>                      
    )
  }
}

export default App;
