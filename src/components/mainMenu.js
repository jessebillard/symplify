import React from 'react'
import { Menu } from 'semantic-ui-react'

class MainMenu extends React.Component {

    constructor() {
        super()
        this.state = {
            activeItem: ''
        }
    }

    handleClick = (e) => {
        this.setState({
            activeItem: e.target.name
        })
    }

    render() {
        return (
            <Menu fluid widths={3}>
                <Menu.Item name='New List' active={this.state.activeItem === 'New List'} onClick={this.handleClick} />
                <Menu.Item name='Home' active={this.state.activeItem === 'Home'} onClick={this.handleClick} />
                <Menu.Item name='IDK YET' active={this.state.activeItem === 'IDK YET'} onClick={this.handleClick} />
            </Menu> 
        )
    }
}

export default MainMenu