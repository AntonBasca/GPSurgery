import React from 'react';
import './App.css';
import { Page, SectionBreak } from 'govuk-react';
import LogInButton from './loginButton';
import RegisterButton from './registerButton';
import GPService from './title';

function App2() {
    return (
        <div className="App">
            <Page>
                <GPService />
                <LogInButton />
                <RegisterButton />
            </Page>
        </div>
    );
}

export default App2;