import React from 'react';
import { Menu, Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { selectedBoard } from '../actions/index'

class HomePage extends React.Component {
    
    render() {
        return (
            <div>
                boards will grid here
            </div>
        )
    }
}

export default connect(null, { selectedBoard })(HomePage);