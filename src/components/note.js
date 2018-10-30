import React from 'react'
import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'
import { Button, Modal } from 'semantic-ui-react'
import NoteEditor from './noteEditor'
import { connect } from 'react-redux'
import { selectNote, deselectNote } from '../actions'

const Container = styled.div`
    border: 1px solid lightgrey;
    border-radius: 4px;
    padding: 8px;
    margin-bottom: 8px;
    transition: background-color 0.5s ease;
    background-color: ${props => (props.isDragging ? '#D6EFF3': 'white')};
`

class Note extends React.Component {

    state = {
        modalOpen: false
    }

    handleSelectedNote = () => {
        this.props.selectNote(this.props.note)
        this.setState({
            modalOpen: true
        })
    }

    handleModalClose = () => {
        this.props.deselectNote()
        this.setState({
            modalOpen: false
        })
    }

    render() {
        return (
            <div>
                <Draggable draggableId={this.props.note.id} index={this.props.index}>
                    {(provided, snapshot) => (
                        <Container
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            innerRef={provided.innerRef}
                            isDragging={snapshot.isDragging}
                            onClick={this.handleSelectedNote}
                        >
                            {this.props.note.title}            
                        </Container>
                    )}
                </Draggable>
                <Modal size='small' open={this.state.modalOpen} onClose={this.handleModalClose}>
                    <NoteEditor handleModalClose={this.handleModalClose} />                                       
                </Modal>
            </div>
        )
    }
}


export default connect(null, { selectNote, deselectNote })(Note)