import React from 'react';
import { Page, SectionBreak } from 'govuk-react';
import EmailInput from './emailInput';
import PasswordInput from './passwordInput';
import GPService from './title';
import RegisterButton from './registerButton';
import { useState } from 'react';
import LoginPageButton from './loginPageButton';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email, password);

        fetch(`http://localhost:4000/db.php?email=${email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                if (data && data.PatientPassword && password === data.PatientPassword) {
                    setUser(data);
                } else {
                    setError('Invalid email or password');
                }
                console.log('Data received from PHP script:');
                console.log(data);
            })
            .catch((error) => {
                setError('Failed to retrieve user data');
                console.log('Failed to retrieve user data from PHP script:');
                console.error(error);
            });
    };

    console.log({ email });

    return (
        <>
            <Page>
                <form onSubmit={handleSubmit}>
                    <GPService />
                    <EmailInput value={email} onChange={handleEmailChange} />
                    <br />
                    <PasswordInput value={password} onChange={handlePasswordChange} />
                    <br />
                    <LoginPageButton />
                </form>
                <RegisterButton />
                {user && (
                    <>
                        <SectionBreak />
                        <p>Welcome!</p>
                    </>
                )}
                {error && (
                    <>
                        <SectionBreak />
                        <p>{error}</p>
                    </>
                )}
            </Page>
        </>
    );
}

export default LoginPage;
