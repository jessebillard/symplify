import React from 'react';
import { connect } from 'react-redux';
import { getLists } from '../actions/index'
import BoardCard from './boardCard';

class BoardContainer extends React.Component {
    
    componentDidMount() {
        this.props.getLists()
    }

    render() {
        const { boards } = this.props              
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

export default connect(mapStateToProps, { getLists })(BoardContainer);