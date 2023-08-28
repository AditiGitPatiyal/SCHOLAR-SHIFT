import "./Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import React, { useState,useContext } from "react";
import UserContext from "../userContext";

const Login = () => {
  const navigate= useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const {user,setUser} =useContext(UserContext);


  const handleSubmit = async(event) => {
    event.preventDefault();
    let data = {
      "email": email,
      "password": password
    };
    try {
        const response = await fetch('http://scholarshiftapi.divasdoor.com/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          const responseData = await response.json();
          const token = responseData.token;
          console.log(responseData);
          localStorage.setItem('token', token);
          setUser(responseData.data);


          // Redirect to dashboard based on user type
          if (responseData.data.user_type === 1) {
              navigate('/job-seeker');
          } else if (responseData.data.user_type === 2) {
              navigate('/job-creator');
          }
        } 

    } catch (error) {
        console.error('Error:', error);
    }
    
    setEmail('');
    setPassword('');
  };
  return (
    <>
      <div className="container">
        <div className="login-box my-5 mx-auto text-white px-5 py-3 rounded">
          <h2 className="text-center">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="d-flex justify-content-between">
              <Link to="/signup" className="link">
                <p>Sign up</p>
              </Link>
              <p>Forget Password?</p>
            </div>
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;



