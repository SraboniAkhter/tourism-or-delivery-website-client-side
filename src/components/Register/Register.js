import React, { useState } from 'react';
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const [name,setName] = useState([]);
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');
    const {signInUsingGoogle , createIdWithEmailAndPassword} = useAuth();


    // form submission

    const handleRegistration = e => {
             e.preventDefault();

    }

    // name email password holding on input.
    const handleNameChange = e => {
         setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
         setPassword(e.target.value);
    }
    // form submit button
    const handleCreateUser = () => {
        createIdWithEmailAndPassword(email, password,name)
        // console.log(email, password,name)
        setError("");
    }

    return (
        <div className="mx-5 mt-5">
            {/* login with form */}
  <form onSubmit={handleRegistration}>
     <h3 className="text-warning">Please Register Here</h3>
    <div className="form-group row">
    <label htmlFor="inputName3" className="col-sm-2 col-form-label">Name</label>
    <div className="col-sm-10">
      <input onBlur={handleNameChange} type="name" className="form-control" id="inputName3" required placeholder="name"/>
    </div>
  </div>
  <br />
  <div className="form-group row">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required placeholder="e-mail"/>
    </div>
  </div>
  <br />
  <div className="form-group row">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" required placeholder="password"/>
    </div>
  </div>
  <br />
  <div className="form-group row">
    <div className="col-sm-10">
        <div className="row mb-3 text-danger">{error}</div>
        <br />
      <Link to="/login">
      <button onClick={handleCreateUser} type="submit" className="btn btn-warning text-white">Register</button>
        </Link>
    </div>
  </div>
</form>
          {/* login with google*/}
            <div>------------or-----------</div>
             <button onClick={signInUsingGoogle} className="btn btn-warning text-white"><FontAwesomeIcon className="icon me-2 text-white" icon={faGoogle} />SignIn with Google</button>
             <br />
             <Link className="text-info" to="/login">Already Register?</Link>
             <br /> <br /> <br />
        </div>
    );
};

export default Register;