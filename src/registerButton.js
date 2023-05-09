import React from 'react';
import { ButtonArrow, Button } from 'govuk-react';

function RegisterButton() {
    return (
        <a href="RegisterPage">
            <Button
                icon={<ButtonArrow />}
                start
            >
                REGISTER
            </Button>
        </a>
    );
}

export default RegisterButton;
