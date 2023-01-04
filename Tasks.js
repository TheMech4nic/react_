import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';

const Tasks = () => {
    const tasks = JSON.parse(localStorage.getItem('text'));

    return (
        <div className='container mt-5'>
            <Table striped bordered >
                <thead>
                <tr>
                    <th>id</th>
                    <th>Task</th>
                </tr>
                </thead>
                <tbody>
                    {tasks && tasks.map(task => (
                        <tr key={task.id}>
                            <td>{task.id}</td>
                            <td>{task.text}</td>
                        </tr>
                    ))}
                </tbody>
        </Table>
        </div>
    )
}

export default Tasks