import Recat from 'react'
import './PasswordInput.css';

const PasswordInput=({password,setPassword,errors})=>
    {
        const handleChange=(event)=>{
            setPassword(event.target.value)
        };
        return (
            <div className='PasswordInput'>
                <label>Password :</label><br />
                <input type='password' value={password} onChange={handleChange} />
                {errors && <span>{errors}</span>}            

            </div>
        )
    };
    export default PasswordInput;