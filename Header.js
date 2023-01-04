import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="container-fluid">
        <header className="p-3 bg-dark">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                    LOGO
                </Link>

                <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><Link to="/" className="nav-link active" aria-current="page">Home</Link></li>
                    <li><Link to="/addtask" className="nav-link">Add Task</Link></li>
                    <li><Link to="/adduser" className="nav-link">Add User</Link></li>
                    <li><Link to="/users" className="nav-link">User List</Link></li>
                </ul>
                

                <div className="text-end">
                    <button type="button" className="btn btn-outline-light me-2">Login</button>
                    <button type="button" className="btn btn-warning">Sign-up</button>
                </div>
                </div>
            </div>
        </header>
  </div>
  )
}

export default Header