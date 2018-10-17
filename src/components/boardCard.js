import React from 'react'

const BoardCard = ({board}) => {
    
    return (
        <div className="col">
            {board.title}
        </div>        
    )
}

export default BoardCard