import React, { useState } from 'react';
import axios from 'axios';
import { FacebookLoginButton, GoogleLoginButton } from 'react-social-login-buttons';
import SignUpWithEmailButton from './SignUpWithEmailButton';

const Register = () => {
    const [showInputs, setShowInputs] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');

    const handleEmailSignup = () => {
        createUser(email, fullName, 'email');
    };

    const handleFacebookSignup = (response) => {
        console.log(response);
        createUser(response.email, response.name, 'facebook');
    };

    const handleGoogleSignup = (response) => {
        console.log(response);
        createUser(response.profileObj.email, response.profileObj.name, 'google');
    };

    const createUser = (email, fullName, source) => {
        axios
            .post('/api/users', { email, fullName, source })
            .then((response) => {
                console.log('User created:', response.data);
                // handle success case here
            })
            .catch((error) => {
                console.log('Error creating user:', error);
                // handle error case here
            });
    };

    return (
        <div>
            <h2>Register</h2>
            {!showInputs && (
                <>
                    <SignUpWithEmailButton onClick={() => setShowInputs(true)} />
                    <FacebookLoginButton onClick={handleFacebookSignup} />
                    <GoogleLoginButton onClick={handleGoogleSignup} />
                </>
            )}
            {showInputs && (
                <>
                    <label>
                        Full Name:
                        <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                    </label>
                    <label>
                        Email:
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <label>
                        Password:
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <button onClick={handleEmailSignup}>Sign up with Email</button>
                </>
            )}
        </div>
    );
};

export default Register;
