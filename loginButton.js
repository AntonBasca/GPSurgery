import React from 'react';
import { ButtonArrow, Button } from 'govuk-react';
import { Link } from 'react-router-dom';

function LogInButton() {
    return (
        <Link to="LoginPage">
            <Button type="submit" icon={<ButtonArrow />} start>
                LOGIN
            </Button>
        </Link>
    );
}

export default LogInButton;
