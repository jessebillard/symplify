import React from 'react'
import styled from 'styled-components'
import Note from './note'
import { Button, Icon, Modal, Dropdown, Form } from 'semantic-ui-react'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import NoteEditor from './noteEditor';
import { selectedList, deleteList, editListTitle } from '../actions/index'
import { connect } from 'react-redux'

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    background-color: white;
    border-radius: 4px;    
    display: flex;
    width: 200px;
    flex-direction: column;
`;
const Title = styled.h3`
    padding: 8px;

`
const NoteList = styled.div`
    padding: 8px;
    transition: background-color 0.5s ease;
    background-color: ${props => (props.isDraggingOver ? 'whitesmoke' : 'white')}
    flex-grow: 1;
    min-height: 100px;
`

class List extends React.Component {

    constructor() {
        super()
        this.state = {
            modalOpen: false,
            isEditingTitle: false,
            newTitle: ''         
        }
    }

    onAddNoteClick = () => {
        this.setState({
            modalOpen: true
        })
        this.props.selectedList(this.props.list.id)
    }

    handleModalClose = () => {
        this.setState({
            modalOpen: false
        })
    }
    
    renderOptionsDropDown = () => {
       return <Dropdown onClose={this.handleDropdownSelection}>
                <Dropdown.Menu>
                    <Dropdown.Item text='Edit Title' />
                    <Dropdown.Item text='Delete List' />         
                </Dropdown.Menu>
            </Dropdown>
    }

    handleDropdownSelection = (e) => {                
        if (e) {
            if (e.target.innerText === 'Delete List') {             
                this.props.deleteList(this.props.list.id)
            } else if (e.target.innerText === 'Edit Title') {
                this.setState({
                    isEditingTitle: true
                })
            }
        }
    }

    renderTitleEditInput = () => {
        return <Form onSubmit={this.handleNewTitleSubmit}>
                 <Form.Input placeholder={this.props.list.title} onChange={this.handleTitleEdit}/>
               </Form>
    }

    handleTitleEdit = (e) => {
        this.setState({
            newTitle: e.target.value
        })
        this.props.selectedList(this.props.list.id)
    }

    handleNewTitleSubmit = () => {               
        this.props.editListTitle(this.state.newTitle)       
        this.setState({
            isEditingTitle: false
        })
    }

    render() {               
        return (
            <div>
                <Draggable draggableId={this.props.list.id} index={this.props.index}>
                    {(provided) => (
                        <Container
                            {...provided.draggableProps}
                            innerRef={provided.innerRef}
                        >   
                            <div className='list-title-row'>
                                <Title className='list-title-column' {...provided.dragHandleProps}>{this.state.isEditingTitle ? this.renderTitleEditInput() : this.props.list.title}</Title>
                                <div style={{margin: '5px'}}>
                                    {this.state.isEditingTitle ? '' : this.renderOptionsDropDown()}
                                </div>
                            </div>
                            <Droppable droppableId={this.props.list.id} type='note'>
                                {(provided, snapshot) => (
                                    <NoteList
                                        isDraggingOver={snapshot.isDraggingOver}
                                        {...provided.droppableProps} 
                                        innerRef={provided.innerRef}
                                    >
                                        {this.props.notes.length > 0 ? this.props.notes.map((note, index) => <Note key={note.id} index={index} note={note} />) : ''}
                                        {provided.placeholder}
                                    </NoteList>
                                )}
                            </Droppable>
                            <div>
                                <Button basic onClick={this.onAddNoteClick} compact fluid icon labelPosition='left'>
                                    <Icon name='plus'/>
                                    Add Note...
                                </Button>
                            </div>
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

export default connect(null, { selectedList, deleteList, editListTitle })(List)