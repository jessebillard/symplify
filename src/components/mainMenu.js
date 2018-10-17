import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class MainMenu extends React.Component {

    constructor() {
        super()
        this.state = {
            
        }
    }

    render() {
        return (
            <Menu fluid widths={3}>
                <Menu.Item>
                    <Icon size='big' name='plus' />
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
        )
    }
}

export default MainMenu