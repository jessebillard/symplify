import React from 'react'
import styled from 'styled-components'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import '@atlaskit/css-reset';
import { connect } from 'react-redux'
import List from './list'
import { reorderedLists, reorderedNotes } from '../actions/index'

const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;  
`

class ListContainer extends React.Component {

    onDragEnd = (result) => {
        const { destination, source, draggableId, type } = result

        // if no destination we return out
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
          const newListOrder = Array.from(this.props.lists)
          const draggedList = this.props.lists.find(list => list.id === draggableId)
          newListOrder.splice(source.index, 1)
          newListOrder.splice(destination.index, 0, draggedList)
          this.props.reorderedLists(newListOrder)
          return;
        }
        
        
        const start = this.props.lists.find(list => list.id === source.droppableId)
        const finish = this.props.lists.find(list => list.id === destination.droppableId) 
        
        if (start === finish) {
            const newNoteOrder = Array.from(start.noteOrder)            
            newNoteOrder.splice(source.index, 1)        
            newNoteOrder.splice(destination.index, 0, draggableId)       
            this.props.reorderedNotes(newNoteOrder, start)
          
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
    }

    noteOrder = (noteOrderArray) => {
        const noteOrder = []                
        noteOrderArray.forEach(noteId => {
            const note = this.props.notes.find(note => note.id === noteId)
            noteOrder.push(note)            
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

export default connect(mapStateToProps, { reorderedLists, reorderedNotes })(ListContainer)