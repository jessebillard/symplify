import React, { Component } from 'react';
import '@atlaskit/css-reset';
import initialData from './initial-data';
import Column from './column.js'
import { DragDropContext } from 'react-beautiful-dnd'

class App extends Component {
  state = initialData

  onDragEnd = (result) => {
    const { destination, source, draggableId} = result

    // if no desination we return out
    if (!destination) {
      return
    }

    // if location of the destination and source id's are the same, we return out
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return 
    }

    // grab our column from state
    const column = this.state.columns[source.droppableId]
    // make a copy array of this columns tasks order
    const newTaskIds = Array.from(column.taskIds)
    // remove the source position
    newTaskIds.splice(source.index, 1)
    // at destination position, insert the new item
    newTaskIds.splice(destination.index, 0, draggableId)

    const newColumn = {
      ...column,
      taskIds: newTaskIds
    }

    this.setState({
      ...this.state,
      columns: {
        ...this.state.columns,
        [newColumn.id]: newColumn
      }
    })

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
