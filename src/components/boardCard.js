import React from 'react'
import { Card, Icon, Button, Dropdown, Modal, Segment, Input } from 'semantic-ui-react'
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { selectedBoard, deleteBoard } from '../actions/index'
import classNames from 'classnames'

class BoardCard extends React.Component {
    
    constructor() {
        super()
        this.state = {                        
            titleInput: '',
            boardLinkActive: false
        }
    }

    handleClick = () => {        
        this.props.selectedBoard(this.props.board)        
    }

    renderBoardOptionsDropDown = () => {
        return <Dropdown className="list-option-column" onClick={(e) => e.preventDefault()} onClose={this.handleDropdownSelection}>
                 <Dropdown.Menu>
                     <Dropdown.Item text='Edit Title' />
                     <Dropdown.Item text='Delete Board' />         
                 </Dropdown.Menu>
             </Dropdown>
     }   

    handleDropdownSelection = () => {
        debugger
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
        return false
    }

    render() {
        const { board } = this.props        
        return (
            <div className="col">
                <NavLink to={`board/${board.id}`} isActive={this.boardLinkActive}>
                    <Card fluid raised={true} onClick={this.handleClick} onMouseEnter={this.mouseEnterCard} onMouseLeave={this.mouseLeaveCard}>
                        <Card.Content className="list-title-row">                            
                            <Card.Header className="list-title-column">{board.title}</Card.Header>                                
                            {this.renderBoardOptionsDropDown()}
                        </Card.Content>                                              
                    </Card>
                </NavLink>                
            </div>        
        )
    }
}

export default connect(null , { selectedBoard, deleteBoard })(BoardCard)