import React, { Component } from 'react';
import '@atlaskit/css-reset';
import initialData from './initial-data';
import Column from './column.js'
import styled from 'styled-components'
import { DragDropContext } from 'react-beautiful-dnd'

const Container = styled.div`
  display: flex;
  justify-content: center;  
`

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

    
    const start = this.state.columns[source.droppableId]
    const finish = this.state.columns[destination.droppableId] 
    
    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds)
    
      newTaskIds.splice(source.index, 1)
    
      newTaskIds.splice(destination.index, 0, draggableId)
      
      const newColumn = {
        ...start,
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
    
    // moving one list to another
    const startTaskIds = Array.from(start.taskIds)
    startTaskIds.splice(source.index, 1)
    const newStart = {
      ...start,
      taskIds: startTaskIds
    }

    const finishTaskIds = Array.from(finish.taskIds)
    finishTaskIds.splice(destination.index, 0, draggableId)
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds
    }

    this.setState({
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    })


  }

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd} >
        <Container>
          {this.state.columnOrder.map(columnId => {
            const column = this.state.columns[columnId]
            const tasks = column.taskIds.map(taskId => this.state.tasks[taskId])
            return <Column key={column.id} column={column} tasks={tasks} />
          })}
        </Container>
      </DragDropContext>      
    );
  }
}

export default App;
