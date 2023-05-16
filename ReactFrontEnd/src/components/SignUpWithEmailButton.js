import React from 'react';
import { SocialButton } from 'react-social-login-buttons';

const SignUpWithEmailButton = (props) => {
    return (
        <SocialButton
            {...props}
            style={{ backgroundColor: '#DB4437' }}
            activeStyle={{ backgroundColor: '#C62828' }}
        >
            Sign Up with Email
        </SocialButton>
    );
};

export default SignUpWithEmailButton;
