import React, { useState } from "react";
import axios from "axios";
import './stylesheets/signin.css'
export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submit = async (e) => {
    e.preventDefault();

    try {
      const user = { username, password };

      const response = await axios.post(
        'http://localhost:8000/token/',
        user,
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );

      const { data } = response;
      localStorage.clear();
      localStorage.setItem('access_token', data.access);
      localStorage.setItem('refresh_token', data.refresh);
      axios.defaults.headers.common['Authorization'] = `Bearer ${data.access}`;
      window.location.href = '/';
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (

    <div className="formbox">
      <form className="form-signin" onSubmit={submit}>
        <img className="mb-4" src="" alt="img" width="72" height="72"/>
          <h1 className="h3 mb-3 font-weight-normal">Sign In</h1>
          <label htmlFor="inputText" className="sr-only">Username</label>
          <input type="text" id="inputText" className="form-control" placeholder="Username" value={username} required autoFocus onChange={e => setUsername(e.target.value)}/>
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input type="password" id="inputPassword" className="form-control" placeholder="Password" value={password} required onChange={e => setPassword(e.target.value)}/> 
              <button className="btn btn-lg btn-primary btn-block" type="submit">Submit</button>
      </form>
    </div>
          );
}

