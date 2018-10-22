import React from 'react'
import { Menu, Icon, Modal, Segment, Input, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { createBoard } from '../actions/index'
import { connect } from 'react-redux'

class MainMenu extends React.Component {

    constructor() {
        super()
        this.state = {
            modalOpen: false,
            titleInput: '',            
        }
    }

    handleInputChange = (e) => {
        this.setState({
            titleInput: e.target.value
        })
    }

    handleSubmit = () => {
        // makes a new board or list depending on what URL user is on
        // use window.location.pathname to tell if on home/board page or lists page        
        if (window.location.pathname === '/') {            
            this.props.createBoard(this.state.titleInput)
            this.setState({
                modalOpen: false
            })
        }
    }

    handleClick = () => {
        this.setState({
            modalOpen: true
        })
    }

    handleModalClose = () => {
        this.setState({
            modalOpen: false
        })
    }

    render() {
        return (
            <React.Fragment>
                <Menu fluid widths={3}>
                    <Menu.Item>
                        <Icon onClick={this.handleClick} size='big' name='plus' />
                    </Menu.Item>
                    <Menu.Item >
                        <Link to='/'>
                            <Icon size='big' name='home' />
                        </Link>
                    </Menu.Item>                    
                    <Menu.Item>
                        <Link to='/about'>
                            <Icon size='big' name='question circle' />
                        </Link>
                    </Menu.Item>                                 
                </Menu> 
                <Modal size='tiny' open={this.state.modalOpen} onClose={this.handleModalClose}>
                    <Segment.Group>
                        <Segment textAlign='center'>
                            <h1>Give this Board a title!</h1>
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
            </React.Fragment>
        )
    }
}

export default connect(null, { createBoard })(MainMenu)