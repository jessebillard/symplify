import React, { Component } from 'react';
import './App.css'
import { getBoards } from './actions/index'
import { connect } from 'react-redux'
import MainMenu from './components/mainMenu';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListContainer from './components/listContainer';
import AboutPage from './components/aboutPage';
import BoardContainer from './components/boardContainer';

class App extends Component {
  

  componentDidMount() {
    this.props.getBoards()
  }

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

const mapStateToProps = (state) => {
  return {
    boards: state.boards,
  }
}

export default connect(mapStateToProps, { getBoards })(App);
