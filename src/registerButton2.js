import React from 'react';
import { ButtonArrow, Button } from 'govuk-react';

function RegisterButton2() {
    return (
            <Button
                icon={<ButtonArrow />}
                start
            >
                REGISTER
            </Button>
    );
}

export default RegisterButton2;
