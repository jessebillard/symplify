import React from 'react'
import { Menu, Icon, Modal, Segment, Input, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { createBoard, createList } from '../actions/index'
import { connect } from 'react-redux'

class MainMenu extends React.Component {

    constructor() {
        super()
        this.state = {
            modalOpen: false,
            titleInput: '', 
            activeItem: ''           
        }
    }

    handleInputChange = (e) => {
        this.setState({
            titleInput: e.target.value
        })
    }

    handleSubmit = () => {        
        if (window.location.pathname === '/') {            
            this.props.createBoard(this.state.titleInput)
            this.setState({
                modalOpen: false
            })
        } else {
            this.props.createList(this.state.titleInput)
            this.setState({
                modalOpen: false
            })
        }
    }
    
    handleModalClose = () => {
        this.setState({
            modalOpen: false
        })
    }

    handlePlusSignClick = () => {
        this.setState({
            modalOpen: true
        })
    }

    handleItemClick = (e, {name}) => {
        // the only reason for this method is because the semantic ui menu item will only turn grey on a mouse hover if it has an onClick event and callback passed to it :)
        console.log('woohoo')
    }


    render() {
        return (
            <React.Fragment>
                <Menu fluid widths={3}>
                    <Menu.Item onClick={this.handlePlusSignClick}>
                        <Icon size='big' name='plus' color='blue' />
                    </Menu.Item>
                    <Menu.Item onClick={this.handleItemClick} name='home'>
                        <Link to='/'>
                            <Icon size='big' color='blue' name='home' />
                        </Link>
                    </Menu.Item>                    
                    <Menu.Item onClick={this.handleItemClick} name='about' >
                        <Link to='/about'>
                            <Icon size='big' color='blue' name='question circle' />
                        </Link>
                    </Menu.Item>                                 
                </Menu> 
                <Modal size='tiny' open={this.state.modalOpen} onClose={this.handleModalClose}>
                    <Segment.Group>
                        <Segment textAlign='center'>
                            {window.location.pathname === '/' ? <h1>Give this Board a title!</h1> : <h1>Give this List a title!</h1> }                            
                        </Segment>
                        <Segment textAlign='center'>  
                            <div className='title-input'>
                                <div className='title-column'>
                                    <Input onChange={this.handleInputChange} placeholder='title...'/>                        
                                </div>
                                <div className='title-column'>
                                    <Button color='blue' onClick={this.handleSubmit}>
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

export default connect(null, { createBoard, createList })(MainMenu)