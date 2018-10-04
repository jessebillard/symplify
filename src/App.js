import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import initialData from './initial-data';


class App extends Component {
  state = initialData
  render() {
    return (
      <div className="App">
        {this.state.columnOrder.map(columnId => {
          const column = this.state.columns[columnId]
          const tasks = column.taskIds.map(taskId => this.state.tasks[taskId])
          return <Column key={column.id} column={column} tasks={tasks} />
        })}
      </div>
    );
  }
}

export default App;
