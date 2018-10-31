import React from 'react';
import { connect } from 'react-redux';
import BoardCard from './boardCard';
import { Container, Divider, Header } from 'semantic-ui-react'

class BoardContainer extends React.Component {   

    render() {
        const { boards } = this.props     
        if (boards.length === 0) {
            return (
                <Container textAlign='center'>
                    <Header as="h2">You don't appear to have any boards.</Header>
                    <Divider/>
                    <p>
                        Click on the plus symbol above to add a new board.
                    </p>
                </Container>
            )
        } else {
            return (
                <div className='flex-grid'>
                    {boards.map((board, index) => <BoardCard board={board} key={index} />)}
                </div>                                         
            )
        }         
    }
}

const mapStateToProps = (state) => {
    return {
        boards: state.boards
    }
}

export default connect(mapStateToProps)(BoardContainer);