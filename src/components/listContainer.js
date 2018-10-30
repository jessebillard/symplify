import React from 'react'
import styled from 'styled-components'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import '@atlaskit/css-reset';
import { connect } from 'react-redux'
import List from './list'

const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;  
`

class ListContainer extends React.Component {

    onDragEnd = (result) => {
    //     const { destination, source, draggableId, type } = result
    
        // if no desination we return out
        // if (!destination) {
        //   return
        // }
    
        // if location of the destination and source id's are the same, we return out
    //     if (
    //       destination.droppableId === source.droppableId &&
    //       destination.index === source.index
    //     ) {
    //       return 
    //     }
    
    
    //     if (type === 'column') {
    //       const newColumnOrder = Array.from(this.state.columnOrder)
    //       newColumnOrder.splice(source.index, 1)
    //       newColumnOrder.splice(destination.index, 0, draggableId)
    //       this.setState({
    //         ...this.state,
    //         columnOrder: newColumnOrder
    //       })
    //       return;
    //     }
        
        
    //     const start = this.state.columns[source.droppableId]
    //     const finish = this.state.columns[destination.droppableId] 
        
    //     if (start === finish) {
    //       const newTaskIds = Array.from(start.taskIds)
        
    //       newTaskIds.splice(source.index, 1)
        
    //       newTaskIds.splice(destination.index, 0, draggableId)
          
    //       const newColumn = {
    //         ...start,
    //         taskIds: newTaskIds
    //       }
      
    //       this.setState({
    //         ...this.state,
    //         columns: {
    //           ...this.state.columns,
    //           [newColumn.id]: newColumn
    //         }
    //       })
    //     } else {
    //       const startTaskIds = Array.from(start.taskIds)
    //       startTaskIds.splice(source.index, 1)
    //       const newStart = {
    //         ...start,
    //         taskIds: startTaskIds
    //       }
      
    //       const finishTaskIds = Array.from(finish.taskIds)
    //       finishTaskIds.splice(destination.index, 0, draggableId)
    //       const newFinish = {
    //         ...finish,
    //         taskIds: finishTaskIds
    //       }
      
    //       this.setState({
    //         ...this.state,
    //         columns: {
    //           ...this.state.columns,
    //           [newStart.id]: newStart,
    //           [newFinish.id]: newFinish
    //         }
    //       })
    //     }
    }

    noteOrder = (noteOrderArray) => {
        const noteOrder = []                
        noteOrderArray.forEach(noteId => {
            const note = this.props.notes.find(note => note.id === noteId)
            noteOrder.push(note)
            debugger
        })
        return noteOrder
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
                        {this.props.lists.map((list, index) => { 
                            const notes = this.noteOrder(list.noteOrder)                                               
                            return <List key={list.id} list={list} index={index} notes={notes} />
                        })}
                        {provided.placeholder}
                    </Container>            
                    )}
                </Droppable>
            </DragDropContext>
        )
    }
}

const mapStateToProps = (state) => {     
    return {
        selectedBoard: state.selectedBoard,
        lists: state.selectedListsOrder,
        notes: state.selectedNotes
    }
}

export default connect(mapStateToProps)(ListContainer)