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

        Promise.all([
            fetch(`http://localhost:4000/db.php?table=Doctor&email=${email}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }),
            fetch(`http://localhost:4000/db.php?table=Patient&email=${email}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }),
            fetch(`http://localhost:4000/db.php?table=Admin&email=${email}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }),
        ])
            .then((responses) => Promise.all(responses.map((response) => response.json())))
            .then(([doctorData, patientData, adminData]) => {
                const userFound =
                    (doctorData && doctorData.DocPassword && password === doctorData.DocPassword) ||
                    (patientData && patientData.PatientPassword && password === patientData.PatientPassword) ||
                    (adminData && adminData.AdminPassword && password === adminData.AdminPassword);
                if (userFound) {
                    setUser(doctorData || patientData || adminData);
                } else {
                    setError('Invalid email or password');
                }
                console.log('Data received from PHP script:');
                console.log(doctorData, patientData, adminData);
            })
            .catch((error) => {
                setError('Failed to retrieve user data');
                console.log('Failed to retrieve user data from PHP script:');
                console.error(error);
            });
    };


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
