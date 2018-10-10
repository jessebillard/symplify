import React from 'react'
import styled from 'styled-components'
import Note from './note'
import { Button, Icon, Modal, Input, Segment } from 'semantic-ui-react'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';

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
            modalOpen: false
        }
    }

    onAddNoteClick = () => {
        this.setState({
            modalOpen: true
        })
    }

    handleModalClose = () => {
        this.setState({
            modalOpen: false
        })
    }

    handleDescriptionChange = (html) => {
        console.log(html)
    }

    render() {
        return (
            <div>
                <Draggable draggableId={this.props.column.id} index={this.props.index}>
                    {(provided) => (
                        <Container
                            {...provided.draggableProps}
                            innerRef={provided.innerRef}
                        >
                            <Title {...provided.dragHandleProps}>{this.props.column.title}</Title>
                            <Droppable droppableId={this.props.column.id} type='task'>
                                {(provided, snapshot) => (
                                    <NoteList
                                        isDraggingOver={snapshot.isDraggingOver}
                                        {...provided.droppableProps} 
                                        innerRef={provided.innerRef}
                                    >
                                        {this.props.tasks.map((task, index) => <Note key={task.id} index={index} task={task} />)}
                                        {provided.placeholder}
                                    </NoteList>
                                )}
                            </Droppable>
                            <div>
                                <Button onClick={this.onAddNoteClick} compact fluid icon labelPosition='left'>
                                    <Icon name='plus'/>
                                    Add Note...
                                </Button>
                            </div>
                        </Container>
                    )}
                </Draggable>
                <Modal size='small' open={this.state.modalOpen} onClose={this.handleModalClose}>
                    <Segment.Group horizontal>
                        <Segment textAlign='center'>
                            <h2>Add Title</h2>
                        </Segment>
                        <Segment textAlign='center'>
                            <Input />
                        </Segment>
                    </Segment.Group>
                    <Segment.Group>
                        <Segment>
                            <h2>Add Description</h2>
                        </Segment>
                        <Segment>
                            <div className="editor-div">
                                <ReactQuill 
                                    theme='snow'
                                    onChange={this.handleDescriptionChange}                        
                                    
                                    // value={this.props.selectedNoteContent}
                                    // modules={modules}
                                    // formats={formats}
                                    bounds={'.editor-div'}
                                    placeholder='Enter text here...'
                                />

                            </div>
                        </Segment>
                    </Segment.Group>
                    
                </Modal>
            </div>
        )           
    }
}

export default List