import { Page } from 'govuk-react';
import NameInput from './nameInput';
import PostCodeInput from './PostCodeInput';
import RegisterTitle from './registerTitle';
import SurnameInput from './surnameInput';
import EmailInput from './emailInput';
import PasswordInput from './passwordInput';
import Inputaoao from './addressInput';
import Inputphnnu from './phoneNumberInput';
import RegisterButton2 from './registerButton2';
import LogInButton from './loginButton';
/* import RegisterButton3 from './registerNHS';*/
import NHSnumberInput from './NHSnumberInput';
import React, { useState } from 'react';


function RegisterPage() {
    const [formData, setFormData] = useState({
        Forename: '',
        Surname: '',
        PostCode: '',
        PatientAddress: '',
        PatientPhone: '',
        PatientEmail: '',
        PatientPassword: '',
        NHSNumber: ''
    });

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const formDataWithGender = {
            ...formData,
            GenderCode: 'M'
        };
        fetch('http://localhost:4000/registerdb.php', {
            method: 'POST',
            body: JSON.stringify(formDataWithGender)
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
    }


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }



    return (
        <>
            <Page>
                <form onSubmit={handleFormSubmit}>
                    <RegisterTitle />
                    <br />
                    <NameInput name="Forename" value={formData.Forename} onChange={handleInputChange} />
                    <br />
                    <SurnameInput name="Surname" value={formData.Surname} onChange={handleInputChange} />
                    <br />
                    <PostCodeInput name="PostCode" value={formData.PostCode} onChange={handleInputChange} />
                    <br />
                    <Inputaoao name="PatientAddress" value={formData.PatientAddress} onChange={handleInputChange} />
                    <br />
                    <Inputphnnu name="PatientPhone" value={formData.PatientPhone} onChange={handleInputChange} />
                    <br />
                    <EmailInput name="PatientEmail" value={formData.PatientEmail} onChange={handleInputChange} />
                    <br />
                    <PasswordInput name="PatientPassword" value={formData.PatientPassword} onChange={handleInputChange} />
                    <br />
                    <NHSnumberInput name="NHSNumber" value={formData.NHSNumber} onChange={handleInputChange} />
                    <br />
                    <RegisterButton2 type="submit" />
                    <br />
                </form>
                <LogInButton />
            </Page>
        </>
    );

}


export default RegisterPage;
