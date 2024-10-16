import React, { useState} from 'react';
import axios from 'axios';

const LoginForm = () => {
    const[Username, setUsername] = useState('');
    const[password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

    axios.post('http://localhost:8000/api-token-auth/', {username, password})
     .then(res => {
        localStorage.setItem('tokenA',
        res.data.tokenA);
    })
     .catch(error => {
        console.error("Authentication error",
        error);

        });
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
            type='text'
            value={Username}
            onChange={e => 
            setUsername(e.target.value)}
            placeholder="Username" 
            />
            <input
            type='password'
            value={password}
            onChange={e => 
            setPassword(e.target.value)}
            placeholder='Password'
            />
            <button type='submit'>login</button>
        </form>
    );
};
export default LoginForm;