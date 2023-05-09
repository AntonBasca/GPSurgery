import React from 'react';
import { Button } from 'govuk-react';

function LogOutButton() {
    return (
        <>
            <a href="/">
            <Button start >
                LOG OUT
                </Button>
            </a>
        </>
    );
}
export default LogOutButton;