import { useState, useContext } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import { auth, createUserFromAuth } from '../../utils/firebase/firebase.util';
import { UserContext } from '../../contexts/user.context';

import './sign-up.styles.scss';



const SignUp = () => {

    const { setCurrentUser } = useContext(UserContext);

    const dafaultFormFields = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    const [ formFields, setFormFields ] = useState(dafaultFormFields);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name] : value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(formFields.confirmPassword !== formFields.password){
            alert('Passwords do not match');
            return;
        }
        try {
            const {user} = await createUserWithEmailAndPassword(auth, formFields.email, formFields.password);
            console.log(user);
            setCurrentUser(user)
            const { displayName } = formFields;
            createUserFromAuth(user, { displayName });
            setFormFields(dafaultFormFields);

        } catch(error){
            console.log(error);
        }
    }

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Display Name' type='text' required onChange={ handleChange} name='displayName' value={formFields.displayName}  />
                <FormInput label='Email' type='email' required onChange={handleChange} name='email' value={formFields.email}  />
                <FormInput label='Password' type='password' required onChange={handleChange} name='password' value={formFields.password}  />
                <FormInput label='Confirm Password' type='password' required onChange={handleChange} name='confirmPassword' value={formFields.confirmPassword}  />
                <Button type='submit'>Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUp;