import { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import { auth, createUserFromAuth } from '../../utils/firebase/firebase.util';

import './sign-up.styles.scss';



const SignUp = () => {

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
        //check if user already exsits.
        //If yes, display an alert 
        const {user} = await createUserWithEmailAndPassword(auth, formFields.email, formFields.password);
        console.log(user);
        const { displayName } = formFields;
        const userRef = createUserFromAuth(user, { displayName });

        console.log('User is -', userRef)

        



        //If no, add the user to database

        setFormFields(dafaultFormFields);
        console.log(formFields);
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
                <Button type='submit'>Sign Up</Button>`1`
            </form>
        </div>
    )
}

export default SignUp;