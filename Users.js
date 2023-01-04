import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { render } from '@testing-library/react';



const Users = () => {
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')));
    
    console.log(users)
    const deleteUser = (id) => {
        const temp_user = users.filter(user => user.id !== id);
        console.log(users)
        localStorage.setItem('users', JSON.stringify(temp_user));
        setUsers(temp_user);
    }
    useEffect(()=>{

    },[users]);
     
    
    
    
    
  return (
    <div>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>User id</th>
          <th> Name</th>
          <th>E-mail</th>
          <th>State</th>
          <th>Contact No.</th>
          <th>Update</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
      {users.map(user => (
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.state}</td>
                <td>{user.number}</td>
                <td><NavLink to={`/edituser/${user.id}`}><Button variant="secondary" type='button'>Edit</Button></NavLink></td>
                <td><Button variant="secondary" type='button' onClick={() => deleteUser(user.id)}>Delete</Button></td>
                
            </tr>
        ))}
      </tbody>
    </Table>
    </div>
  )
}

export default Users