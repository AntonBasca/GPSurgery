import React from 'react';
import { ButtonArrow, Button } from 'govuk-react';

function RegisterButton3() {
    return (
        <Button
            icon={<ButtonArrow />}
            start
        >
            REGISTER WITH NHS NUMBER
        </Button>
    );
}

export default RegisterButton3;
