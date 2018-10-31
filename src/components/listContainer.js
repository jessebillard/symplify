import React from 'react'
import styled from 'styled-components'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import '@atlaskit/css-reset';
import { connect } from 'react-redux'
import List from './list'
import { reorderedLists, reorderedNotes } from '../actions/index'
import { Header, Divider, Container } from 'semantic-ui-react'

const ListContainerDiv = styled.div`
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
            const startNoteOrder = Array.from(start.noteOrder)
            startNoteOrder.splice(source.index, 1)                      
            const finishNoteOrder = Array.from(finish.noteOrder)
            finishNoteOrder.splice(destination.index, 0, draggableId)                  
            this.props.reorderedNotes(startNoteOrder, start, finish, finishNoteOrder, draggableId)
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
        if (this.props.lists.length === 0) {
            return (
                <Container textAlign='center'>
                    <Header as="h2">You don't appear to have any lists.</Header>
                    <Divider/>
                    <p>
                        Click on the plus symbol above to add a new list.
                    </p>
                </Container>
            )
        } else {
            return (            
                <DragDropContext onDragEnd={this.onDragEnd} >
                    <Droppable droppableId='all-columns' direction='horizontal' type='column'>
                        {(provided) => (
                        <ListContainerDiv
                            {...provided.droppableProps}
                            innerRef={provided.innerRef}
                        >
                            {this.props.lists.map((list, index) => {                                                                          
                                const notes = this.noteOrder(list.noteOrder) 
                                return <List key={list.id} list={list} index={index} notes={notes} />
                            })}
                            {provided.placeholder}
                        </ListContainerDiv>            
                        )}
                    </Droppable>
                </DragDropContext>
            )            
        }                    
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