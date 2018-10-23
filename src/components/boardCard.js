import React from 'react'
import { Card, Icon, Button, Modal, Segment, Input } from 'semantic-ui-react'
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { selectedBoard, deleteBoard } from '../actions/index'
import classNames from 'classnames'

class BoardCard extends React.Component {
    
    constructor() {
        super()
        this.state = {
            isMouseOver: false,
            modalOpen: false,
            titleInput: '',
            boardLinkActive: true
        }
    }

    handleClick = () => {        
        this.props.selectedBoard(this.props.board)        
    }

    mouseEnterCard = () => {
        this.setState({
            isMouseOver: !this.state.isMouseOver
        })
    }

    mouseLeaveCard = () => {
        this.setState({
            isMouseOver: !this.state.isMouseOver
        })
    }

    mouseEnterOptions = () => {
        this.setState({
            boardLinkActive: !this.state.boardLinkActive
        })
    }

    mouseLeaveOptions = () => {
        this.setState({
            boardLinkActive: !this.state.boardLinkActive
        })
    }

    renderOptionsButton = () => {
        return (
            <div className='delete-icon' onMouseEnter={this.mouseEnterOptions} onMouseLeave={this.mouseLeaveOptions}>
                <Button size='mini' icon onClick={this.handleModalOpen} >
                    <Icon size='large' name='ellipsis horizontal'/>                                            
                </Button>
            </div>
        )
    }

    handleModalOpen = () => {
        this.setState({
            modalOpen: true
        })
    }

    handleModalClose = () => {
        this.setState({
            modalOpen: false
        })
    }

    handleDeleteBoard = (e) => {
        e.stopPropagation()
        e.preventDefault()
        // this.props.deleteBoard(this.props.board.id)
    }

    handleInputChange = (e) => {
        this.setState({
            titleInput: e.target.value
        })
    }

    handleSubmit = () => {

    }

    boardLinkActive = () => {
        return this.state.boardLinkActive
    }

    render() {
        const { board } = this.props
        console.log(this.state.boardLinkActive)
        return (
            <div className="col">
                <NavLink to={`board/${board.id}`} isActive={this.boardLinkActive}>
                    <Card fluid raised={true} onClick={this.handleClick} onMouseEnter={this.mouseEnterCard} onMouseLeave={this.mouseLeaveCard}>
                        <Card.Content className="clearfix">
                            {this.state.isMouseOver ? this.renderOptionsButton() : ''}  
                            <Card.Header>{board.title}</Card.Header>
                        </Card.Content>                                              
                    </Card>
                </NavLink>
                <Modal size='tiny' open={this.state.modalOpen} onClose={this.handleModalClose}>
                    <Segment.Group>
                        <Segment textAlign='center'>
                            <h1>Edit Board Title!</h1>
                        </Segment>
                        <Segment textAlign='center'>  
                            <div className='title-input'>
                                <div className='title-column'>
                                    <Input onChange={this.handleInputChange} placeholder='title...'/>                        
                                </div>
                                <div className='title-column'>
                                    <Button primary onClick={this.handleSubmit}>
                                        Submit
                                    </Button>                                                                       
                                </div>
                            </div>                          
                        </Segment>
                    </Segment.Group>
                </Modal>
            </div>        
        )
    }
}

export default connect(null , { selectedBoard, deleteBoard })(BoardCard)