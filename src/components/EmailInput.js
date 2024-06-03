import React from 'react'
import './EmailInput.css';

const EmailInput=({email,setEmail,errors})=>
    {
        const handleChange= (event) =>
            {
                setEmail(event.target.value);
            };

     return(
        <div className='EmailInput'>
            <label>Email:</label><br/>
            <input type="email" value={email} onChange={handleChange} /><br/>
            { errors && <span>{errors}</span>}
        </div>
     );
    };
    export default EmailInput;