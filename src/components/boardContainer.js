import React from 'react';
import { connect } from 'react-redux';
import { selectedBoard } from '../actions/index'
import BoardCard from './boardCard';

class BoardContainer extends React.Component {
    
    render() {
        const { boards } = this.props
        // console.log(boards)        
        return (
            <div className='flex-grid'>
                {boards.map((board, index) => <BoardCard board={board} key={index} />)}
            </div>                                         
        )
    }
}

const mapStateToProps = (state) => {
    return {
        boards: state.boards
    }
}

export default connect(mapStateToProps, { selectedBoard })(BoardContainer);