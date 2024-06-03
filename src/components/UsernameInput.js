import React from 'react'
import './UsernameInput.css';
const UsernameInput = ({username,setUsername,errors}) =>{
    const handleChange=(event)=>{
        setUsername(event.target.value)
    };
    return (
        <div className="UsernameInput">
            <label>Username:</label><br/>
            <input type='text' value={username} onChange={handleChange} /><br/>
            { errors && <span>{errors}</span>}
        </div>
        );
};
export default UsernameInput;