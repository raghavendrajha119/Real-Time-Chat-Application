import React, { useState } from 'react';
import axios from 'axios';
import './stylesheets/signin.css'

export const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        password2: '',
        bio: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/register/', formData);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="formbox">
            <form className="form-signin" name="formbox" onSubmit={handleSubmit}>
                <img className="mb-4" src="" alt="img" width="72" height="72" />
                <h1 className="h3 mb-3 font-weight-normal">Sign Up</h1>
                <label htmlFor="inputText" className="sr-only">Username</label>
                <input
                    type="text"
                    id="inputText"
                    className="form-control"
                    placeholder="Username"
                    name="username"
                    value={formData.username}
                    required
                    autoFocus
                    onChange={handleChange} // Use handleChange for all input fields
                />

                <label htmlFor="inputEmail" className="sr-only">Email</label>
                <input
                    type="email"
                    id="inputEmail"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    required
                    autoFocus
                    onChange={handleChange} // Use handleChange for all input fields
                />

                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input
                    type="password"
                    id="inputPassword"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    required
                    onChange={handleChange} // Use handleChange for all input fields
                />

                <label htmlFor="inputPassword2" className="sr-only">Confirm Password</label>
                <input
                    type="password"
                    id="inputPassword2"
                    className="form-control"
                    placeholder="Confirm Password"
                    name="password2"
                    value={formData.password2}
                    required
                    onChange={handleChange} // Use handleChange for all input fields
                />

                <label htmlFor="inputBio" className="sr-only">Bio</label>
                <textarea
                    className="form-control"
                    id="inputBio"
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    placeholder='Bio'
                    rows="3"
                ></textarea>

                <button className="btn btn-lg btn-primary btn-block my-3" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default RegistrationForm;
