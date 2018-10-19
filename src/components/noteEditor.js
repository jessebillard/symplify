import React from 'react'
import { Input, Button, Segment } from 'semantic-ui-react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import 'react-quill/dist/quill.bubble.css'
import debounce from 'lodash/debounce'
import { createNote } from '../actions/index'
import { connect } from 'react-redux'

class NoteEditor extends React.Component {
    constructor() {
        super()
        this.state = {
            title: '',
            description: ''
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
        this.props.handleModalClose()
        // create a dispatch method that will send the info to the backend
        // this needs to have an id of the column sent as well to persist to backend
        const noteData = {
            title: this.state.title,
            description: this.state.description,
            listId: this.props.selectedListId
        }
        this.props.createNote(noteData)
    }

    render() {
        return (
            <div>
                <Segment.Group horizontal>
                    <Segment textAlign='center'>
                        <h2>Add Title</h2>
                    </Segment>
                    <Segment textAlign='center'>
                        <Input onChange={this.handleTitleChange} />
                    </Segment>
                </Segment.Group>
                <Segment.Group>
                    <Segment>
                        <h2>Add Description</h2>
                    </Segment>
                    <Segment>                        
                        <ReactQuill 
                            theme='snow'
                            onChange={this.handleDescriptionChange.bind(this)}                        
                            
                            // value={this.props.selectedNoteContent}
                            // modules={modules}
                            // formats={formats}
                            bounds={'.app'}
                            style={{height: '200px', borderRadius: '5px'}}
                            placeholder='Enter text here...'
                        />                        
                    </Segment>
                    <Segment>
                        <Button color="green" onClick={this.handleSubmit} content="Add Note" />
                    </Segment>
                </Segment.Group> 
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedListId: state.selectedListId
    }
}

export default connect(mapStateToProps, { createNote })(NoteEditor)