import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
//import Alert from 'react-bootstrap/Alert';
import validator from 'validator' ;
import { useParams } from 'react-router-dom';


const User = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [state, setState] = useState('');
  const [number, setNumber] = useState('');
  // const [show, setShow] = useState('');

  const { id } = useParams()

  const onSubmitHandler = (e) => {
    e.preventDefault();
    let users = [], user = {};
    if(!validator.isMobilePhone(number)) {
      alert('Mobile number must be in number format');
    }
    user.id=1;
    user.name = name;
    user.email = email;
    user.password = password;
    user.state = state;
    user.number = number;

    if(JSON.parse(localStorage.getItem('users'))) {
      let taskData = JSON.parse(localStorage.getItem('users'));
      user.id = taskData.length + 1;
      taskData.push(user);
      localStorage.setItem('users', JSON.stringify(taskData));
  } else {
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
  }

    // users.push(user);
    // // let taskData = JSON.parse(localStorage.getItem('text'));
    // localStorage.setItem('users', JSON.stringify(users));
  }
// Edit User
  console.log(id)
  let user = {};

  useEffect(() => {
    let users = JSON.parse(localStorage.getItem('users'));
    if(users && id) {
      user = users.find(user => user.id == id);
      console.log(user)

      if(user) {
        setName(user.name)
        setEmail(user.email)
        setState(user.state)
        setNumber(user.number)
      }
    }
  }, [id, user])

  

  return (
    <div className='container mt-5'>
       <Form onSubmit={onSubmitHandler}>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e)=> setName(e.target.value)}/> 
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=> setEmail(e.target.value)} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)} />
          </Form.Group>
        
          <Form.Select aria-label="Default select example" className='mb-3' value={state} onChange={(e)=> setState(e.target.value)}>
            <option>Select state</option>
            <option value="CG">CG</option>
            <option value="MH">MH</option>
            <option value="DL">DL</option>
          </Form.Select>

          <Form.Group className="mb-3" controlId="formBasicNumber">
            <Form.Label>Contact No.</Form.Label>
            <Form.Control type="text" placeholder="Contact No." value={number} onChange={(e)=> setNumber(e.target.value)} />
            
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Status" />
          </Form.Group>

        <Button variant="primary" type="submit">
          Add User
        </Button>
    </Form>
    </div>
  )
}

export default User