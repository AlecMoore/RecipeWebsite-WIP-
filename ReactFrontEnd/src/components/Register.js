import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import axios from 'axios';

const Register = () => {
    const [showInputs, setShowInputs] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');

    const handleEmailSignup = () => {
        createUser(email, fullName, 'email');
    };

    const handleFacebookSignup = (response) => {
        // handle Facebook signup logic here
        console.log(response);
        createUser(response.email, response.name, 'facebook');
    };

    const handleGoogleSignup = (response) => {
        // handle Google signup logic here
        console.log(response);
        createUser(response.profileObj.email, response.profileObj.name, 'google');
    };

    const createUser = (email, fullName, source) => {
        axios.post('/api/users', { email, fullName, source })
            .then(response => {
                console.log('User created:', response.data);
                // handle success case here
            })
            .catch(error => {
                console.log('Error creating user:', error);
                // handle error case here
            });
    };

    return (
        <div>
            <h2>Register</h2>
            {!showInputs && (
                <>
                    <button onClick={() => setShowInputs(true)}>Sign up with Email</button>
                    <FacebookLogin
                        appId="test"
                        autoLoad={false}
                        fields="name,email,picture"
                        callback={handleFacebookSignup}
                    />
                    <GoogleLogin
                        clientId="test"
                        buttonText="Sign up with Google"
                        onSuccess={handleGoogleSignup}
                        onFailure={(error) => console.log(error)}
                        cookiePolicy={'single_host_origin'}
                    />
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
