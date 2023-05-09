import React from 'react';
import { InputField } from 'govuk-react';

function EmailInput({ name, value, onChange }) {
    return (
        <InputField
            input={{
                type: 'email',
                name: name,
                value: value,
                onChange: onChange
            }}
        >
            EMAIL
        </InputField>
    );
}

export default EmailInput;
