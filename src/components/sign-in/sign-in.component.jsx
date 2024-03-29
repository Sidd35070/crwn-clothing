import { useState } from "react";


import { signInwithGoogle, auth } from "../../utils/firebase/firebase.util"
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { signInWithEmailAndPassword } from "firebase/auth";



import './sign-in.styles.scss';

const SignIn = () => {

    const dafaultFormFields = {
        email: '',
        password: ''
    }

    const [ formFields, setFormFields ] = useState(dafaultFormFields);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name] : value})
    }

    const handleSignInwithGoogle = async () => {
        await signInwithGoogle();
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const { email, password } = formFields;
        try {
            await signInWithEmailAndPassword(auth, email, password);

        } catch (error) {
            switch(error.code){
                case 'auth/wrong-password':
                    alert('Wrong Username or Password');
                    break;
                case 'auth/user-not-found':
                    alert('User not found');
                    break;
                default:
                    console.log('Error signing in the user - ', error.message);
            }   
        }
        setFormFields(dafaultFormFields);
    }


    return(
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password.</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Email' type='email' required onChange={handleChange} name='email' value={formFields.email}  />
                <FormInput label='Password' type='password' required onChange={handleChange} name='password' value={formFields.password}  />
                <div className="buttons-container">
                    <Button type='submit' >Sign In</Button>
                    <Button type='button' buttonType='google' onClick={handleSignInwithGoogle} >Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}

export default SignIn;