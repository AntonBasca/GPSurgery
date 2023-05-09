import { Page } from 'govuk-react';
import React from 'react';
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


function RegisterPage() {
    return (
        <>
            <Page>
                <RegisterTitle></RegisterTitle>
                <br></br>
                <NameInput></NameInput>
                <br></br>
                <SurnameInput></SurnameInput>
                <br></br>
                <PostCodeInput></PostCodeInput>
                <br></br>
                <Inputaoao></Inputaoao>
                <br></br>
                <Inputphnnu></Inputphnnu>
                <br></br>
                <EmailInput></EmailInput>
                <br></br>
                <PasswordInput></PasswordInput>
                <br></br>
                <NHSnumberInput></NHSnumberInput>
                <br></br>
                <RegisterButton2></RegisterButton2>
                <br></br>
                <LogInButton></LogInButton>
                <br></br>
                {/*<RegisterButton3></RegisterButton3>
                <br></br>*/}

            </Page>
        </>
    );

}


export default RegisterPage;