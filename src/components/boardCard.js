import React from 'react'
import { Card, Dropdown, Form } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { selectedBoard, deleteBoard, editBoardTitle } from '../actions/index'

class BoardCard extends React.Component {
    
    constructor() {
        super()
        this.state = {                        
            titleInput: '',
            isEditingTitle: false
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

    handleDropdownSelection = (e) => {
        if (e.target.innerText === 'Delete Board') {
            this.props.deleteBoard(this.props.board.id)
        } else if (e.target.innerText === 'Edit Title') {
            this.setState({
                isEditingTitle: true
            })            
        }
    }

    renderTitleInput = () => {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Input placeholder={this.props.board.title} onClick={(e) => e.preventDefault()} onChange={this.handleInputChange} />
            </Form>
        )
    }

    handleSubmit = () => {
        this.props.editBoardTitle(this.state.titleInput, this.props.board.id)
        this.setState({
            isEditingTitle: false
        })
    }

    handleInputChange = (e) => {
        this.setState({
            titleInput: e.target.value
        })
    }

    render() {
        const { board } = this.props        
        return (
            <div className="col">
                <NavLink to={`board/${board.id}`}>
                    <Card fluid raised={true} onClick={this.handleClick} >
                        <Card.Content className="list-title-row">                            
                            <Card.Header className="list-title-column">{this.state.isEditingTitle ? this.renderTitleInput() : board.title}</Card.Header>                                
                            {this.renderBoardOptionsDropDown()}
                        </Card.Content>                                              
                    </Card>
                </NavLink>                
            </div>        
        )
    }
}

export default connect(null , { selectedBoard, deleteBoard, editBoardTitle })(BoardCard)