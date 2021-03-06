import React from 'react'
import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'

const Container = styled.div`
    border: 1px solid lightgrey;
    border-radius: 4px;
    padding: 8px;
    margin-bottom: 8px;
    transition: background-color 0.5s ease;
    background-color: ${props => (props.isDragging ? '#D6EFF3': 'white')};
`

class Task extends React.Component {
    render() {
        return (
            <Draggable draggableId={this.props.task.id} index={this.props.index}>
                {(provided, snapshot) => (
                    <Container
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        innerRef={provided.innerRef}
                        isDragging={snapshot.isDragging}
                        onClick={() => alert('clicked bb')}
                    >
                        {this.props.task.content}            
                    </Container>
                )}
            </Draggable>
        )
    }
}

export default Task