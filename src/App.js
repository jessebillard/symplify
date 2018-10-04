import React, { Component } from 'react';
import '@atlaskit/css-reset';
import initialData from './initial-data';
import Column from './column.js'
import { DragDropContext } from 'react-beautiful-dnd'

class App extends Component {
  state = initialData

  onDragEnd = (result) => {
    // todo : reorder our columns
  }

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd} >
        {this.state.columnOrder.map(columnId => {
          const column = this.state.columns[columnId]
          const tasks = column.taskIds.map(taskId => this.state.tasks[taskId])
          return <Column key={column.id} column={column} tasks={tasks} />
        })}
      </DragDropContext>      
    );
  }
}

export default App;
