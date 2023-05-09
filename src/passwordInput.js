import React from 'react';
import { InputField } from 'govuk-react';

function PasswordInput({ name, value, onChange }) {
    return (
        <InputField
            input={{
                type: 'password',
                name,
                value,
                onChange
            }}
        >
            PASSWORD
        </InputField>
    );
}

export default PasswordInput;
