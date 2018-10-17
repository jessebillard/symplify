import React from 'react'
import { Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { selectedBoard } from '../actions/index'

class BoardCard extends React.Component {
    
    handleClick = () => {
        this.props.selectedBoard(this.props.board)
    }

    render() {
        const { board } = this.props
        return (
            <div className="col">
                <Link to={`board/${board.id}`}>
                    <Card fluid raised={true} onClick={this.handleClick}>
                        <Card.Content>
                            <Card.Header>{board.title}</Card.Header>
                        </Card.Content>
                    </Card>
                </Link>
            </div>        
        )
    }
}

export default connect(null , { selectedBoard })(BoardCard)