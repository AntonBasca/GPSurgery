import React from 'react';
import { InputField } from 'govuk-react';

function NameInput({ name, value, onChange }) {
    return (
        <InputField
            input={{
                name,
                value,
                onChange,
                type: 'text',
                id: name,
                label: { text: 'Name' },
                hint: { text: 'Enter your name' },
                width: 30 // You can pass a number for the width
            }}
        > FORENAME </InputField>
    );
}

export default NameInput;
