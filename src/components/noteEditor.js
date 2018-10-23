import React from 'react'
import { Input, Button, Segment } from 'semantic-ui-react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import 'react-quill/dist/quill.bubble.css'
import debounce from 'lodash/debounce'
import { createNote, deselectNote, editNote } from '../actions/index'
import { connect } from 'react-redux'

class NoteEditor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: props.selectedNote ? props.selectedNote.title : '',
            description: props.selectedNote ? props.selectedNote.description : '',  
            // editTitle: props.selectedNote.title                      
        }
    }

    

    handleTitleChange = (e) => {         
        this.setState({
            title: e.target.value
        })        
    }

    handleDescriptionChange = debounce((html) => {
        const descriptionInput = html
        this.setState({
            description: descriptionInput
        })
    }, 500)

    handleSubmit = () => {        
        if (this.props.selectedNote) {
            this.props.editNote(this.state, this.props.selectedNote.id)
        } else {
            const noteData = {
                title: this.state.title,
                description: this.state.description,
                listId: this.props.selectedListId
            }
            this.props.createNote(noteData)
        }     
        this.props.handleModalClose()
        this.props.deselectNote()
    }

    render() {
        console.log(this.props.selectedNote)
        return (
            <div>
                <Segment.Group horizontal>
                    <Segment textAlign='center'>
                        {this.props.selectedNote ? <h2>Edit Title</h2> : <h2>Add Title</h2>}
                    </Segment>
                    <Segment textAlign='center'>
                        <Input onChange={this.handleTitleChange} value={this.state.title} />
                    </Segment>
                </Segment.Group>
                <Segment.Group>
                    <Segment>
                        {this.props.selectedNote ? <h2>Edit Description</h2> : <h2>Add Description</h2>}
                    </Segment>
                    <Segment>                        
                        <ReactQuill 
                            theme='snow'
                            onChange={this.handleDescriptionChange.bind(this)}                                                    
                            value={this.state.description}
                            // modules={modules}
                            // formats={formats}
                            bounds={'.app'}
                            style={{height: '200px', borderRadius: '5px'}}
                            placeholder='Enter text here...'
                        />                        
                    </Segment>
                    <Segment>
                        <Button color="green" onClick={this.handleSubmit} content="submit" />
                    </Segment>
                </Segment.Group> 
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedListId: state.selectedListId,
        selectedNote: state.selectedNote
    }
}

export default connect(mapStateToProps, { createNote, deselectNote, editNote })(NoteEditor)