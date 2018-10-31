import React from 'react'
import { Input, Button, Segment, Divider, Icon, Grid } from 'semantic-ui-react'
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
            titleInputError: false
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
        if (!this.state.title) {
           this.setState({
               titleInputError: true,
               title: '* Title is required *'
           }) 
           return
        } else {
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
    }

    revertInputError = () => {
        this.setState({
            titleInputError: false,
            title: this.props.selectedNote ? this.props.selectedNote.title : ''
        })
    }

    render() {
        // console.log(this.props.selectedNote)
        return (
            <div>
                <Segment.Group horizontal>
                    <Segment textAlign='center'>
                        {this.props.selectedNote ? <h2 style={{paddingTop: '3px'}}>Edit Title</h2> : <h2 style={{paddingTop: '3px'}}>Add Title</h2>}
                    </Segment>
                    <Segment style={{width: '140px'}} textAlign='center'>                        
                        <Input error={this.state.titleInputError} onClick={this.revertInputError} onChange={this.handleTitleChange} value={this.state.title} />
                    </Segment>
                </Segment.Group>
                <Segment.Group horizontal>
                    <Segment textAlign='center'>
                        <h2 style={{paddingTop: '3px'}}>Status</h2>
                    </Segment>
                    <Segment style={{width: '112px'}} textAlign='center'>
                        <Grid columns='2'>
                            <Grid.Row>
                                <Grid.Column style={{width: '109px'}}>
                                    <Icon style={{paddingLeft: '80px'}} name='ban' size='big' color='yellow'/>
                                </Grid.Column>
                                <Grid.Column>
                                    <h2>Incomplete</h2> 
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                </Segment.Group>
                <Segment.Group>
                    <Segment> 
                        {this.props.selectedNote ? <h2 style={{marginLeft: '75px', marginBottom: '12px'}}>Edit Description</h2> : <h2 style={{marginLeft: '69px', marginBottom: '11px'}}>Add Description</h2>}                       
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
                    <Segment style={{marginTop: '44px'}}>
                        <Button.Group fluid>
                            <Button color="blue" onClick={this.handleSubmit} content="submit" />
                            <Button color='green' onClick={this.handleMarkComplete} content='mark complete'/>
                            <Button color='red' content='delete note' />
                        </Button.Group>
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