import React, {useState} from 'react';
import { Link } from 'react-router-dom';
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
        <div className='form pane-form'>
            <div className="side-by-side">
                <div className="cta-title">
                    <h2 className='heading heading-3'>Sign in</h2>
                </div>
                <div className="linkbox">
                    <p className='body'> Or <span className='link-text'><Link to='/signup'>Sign up</Link></span></p>
                </div>
                
            </div>

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