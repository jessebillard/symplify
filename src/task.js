import React from 'react'

class Task extends React.Component {
    render() {
        return (
            <div>
                {this.props.task.content}
            </div>
        )
    }
}

export default Task