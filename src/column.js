import React from 'react'
import styled from 'styled-components'
import Task from './task'
import { Droppable } from 'react-beautiful-dnd'

const Container = styled.div`
    margin: 8px;
    border 1px solid lightgrey;
    border-radius: 2px;
    width: 25%;
`;
const Title = styled.h3`
    padding: 8px;

`
const TaskList = styled.div`
    padding: 8px;
    transition: background-color 0.5s ease;
    background-color: ${props => (props.isDraggingOver ? 'whitesmoke' : 'white')}
`

class Column extends React.Component {
    render() {
        return (
            <Container>
                <Title>{this.props.column.title}</Title>
                <Droppable droppableId={this.props.column.id}>
                    {(provided, snapshot) => (
                        <TaskList
                            isDraggingOver={snapshot.isDraggingOver}
                            {...provided.droppableProps} 
                            innerRef={provided.innerRef}
                        >
                            {this.props.tasks.map((task, index) => <Task key={task.id} index={index} task={task} />)}
                            {provided.placeholder}
                        </TaskList>
                    )}
                </Droppable>
            </Container>
        )           
    }
}

export default Column