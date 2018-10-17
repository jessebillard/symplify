import React from 'react'
import { Menu, Icon, Modal, Segment, Input, Button, Divider, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class MainMenu extends React.Component {

    constructor() {
        super()
        this.state = {
            modalOpen: false
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
                                    <Input placeholder='title...'/>                        
                                </div>
                                <div className='title-column'>
                                    <Button primary>
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

export default MainMenu