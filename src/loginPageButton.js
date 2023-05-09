import React from 'react';
import { ButtonArrow, Button } from 'govuk-react';
import { Link } from 'react-router-dom';

function LoginPageButton() {
    return (
            <Button type="submit" icon={<ButtonArrow />} start>
                LOGIN
            </Button>
    );
}

export default LoginPageButton;
