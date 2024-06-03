import React,{ useState } from 'react'
import UsernameInput from './UsernameInput'
import EmailInput from './EmailInput'
import PasswordInput from './PasswordInput'

const UserRegistrationForm=()=>
    {
        const [username,setUsername]=useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('')
        const [errors,setErrors]=useState('');

        const handleSubmit=(event)=>
            {
                event.preventDefault();

                let fromErrors={};

                if(!username.trim())
                    {
                        fromErrors.username='User Name is Reuried'
                    }

                    const emaillRegExp=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if(!email.trim())
                        {
                            fromErrors.email="Email is required"
                        }
                        else if(!emaillRegExp.test(email))
                            {
                                fromErrors.email='Invalid Email ID Format';
                            }

                            if(!password.trim())
                                {
                                    fromErrors.password='password is required'
                                }
                                else if(password.length<6)
                                    {
                                        fromErrors.password='Password Length Must be at least 6 characters long'
                                    }

                                    if(Object.keys(fromErrors).length>0)
                                        {
                                            setErrors(fromErrors);
                                        }
                                        else{
                                            console.log("Form Submitted :",{username,email,password});

                                            setUsername('');
                                            setEmail('');
                                            setPassword('');
                                            setErrors({});
                                        }
            };
            const btnPosition={
                position: 'relative',
                left: '400px'
            }

            return(
                <div className='"UserRegistrationForm'>
                    <form onSubmit={handleSubmit}>
                     <UsernameInput username={username} setUsername={setUsername} errors={errors.username}/>
                     <br />
                     <EmailInput email={email} setEmail={setEmail} errors={errors.email}/>
                     <br />
                     <PasswordInput password={password} setPassword={setPassword} errors={errors.password}/>
                     <button type="submit" style={btnPosition}>Register</button>
                    </form>

                </div>
            )
    }

    export default UserRegistrationForm;