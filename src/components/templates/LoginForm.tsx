import React, {useState, useEffect} from 'react';
import { Redirect } from 'react-router';
import { TextField } from '../inputs/TextField';

const LoginForm: React.FC = () => {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState<ErrObj>({});

const user = {
    email,
    password
}
interface ErrObj {
    emailError?: string;
    passwordError?: string;
}
const validate = () => {

    const errors: ErrObj = {emailError: '', passwordError: ''};
    if (email.trim() === '') {
        errors.emailError = 'Email address is required'
    }
    if (password.trim() === '') {
        errors.passwordError = 'Password is required'
    }
    return errors;
    
}
const handleSubmit = (e: any) => {
    e.preventDefault();
    const errors = validate();
    setError(errors)
    if (errors.emailError !== '' || errors.passwordError !== '') {
        return; 
        // console.log(`${errors} this was called`)
    }
    // console.log(user);
};

    return (
        <div className='form'>
            <h2>Sign in</h2>
            <form onSubmit={handleSubmit}>
                <TextField 
                    name='email'
                    valueType='email'
                    valuePlaceholder='me@example.com'
                    valueLabel='Email address'
                    onChange={(e: any)=> setEmail(e.target.value)}
                    value={email}
                    className='med-textbox'
                    error={error.emailError}
                />
                <TextField 
                    name='password'
                    valueType='password'
                    valueLabel='Password'
                    onChange={(e: any)=> setPassword(e.target.value)}
                    value={password}
                    className='med-textbox'
                    error={error.passwordError}
                />
                
               <input type="submit" value="Sign in" className='btn btn-primary btn-form' />
            </form>    


        </div>


    )
};
export { LoginForm};