import React, { Component } from 'react';
import '@atlaskit/css-reset';
import initialData from './initial-data';
import List from './components/list.js'
import styled from 'styled-components'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { getBoards } from './actions/index'
import { connect } from 'react-redux'

const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;  
`

class App extends Component {
  state = initialData

  componentDidMount() {
    this.props.getBoards()
  }

  onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result

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


    if (type === 'column') {
      const newColumnOrder = Array.from(this.state.columnOrder)
      newColumnOrder.splice(source.index, 1)
      newColumnOrder.splice(destination.index, 0, draggableId)
      this.setState({
        ...this.state,
        columnOrder: newColumnOrder
      })
      return;
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
    } else {
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
    
    // moving one list to another
    


  }

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd} >
        <Droppable droppableId='all-columns' direction='horizontal' type='column'>
          {(provided) => (
            <Container
              {...provided.droppableProps}
              innerRef={provided.innerRef}
            >
              {this.state.columnOrder.map((columnId, index) => {
                const column = this.state.columns[columnId]
                const tasks = column.taskIds.map(taskId => this.state.tasks[taskId])
                return <List key={column.id} column={column} index={index} tasks={tasks} />
              })}
              {provided.placeholder}
            </Container>            
          )}
        </Droppable>
      </DragDropContext>      
    );
  }
}

export default connect(null, { getBoards })(App);
