import React from 'react';
import { InputField } from 'govuk-react';

function NHSnumberInput({ name, value, onChange }) {
    return (
        <InputField
            input={{
                type: 'number',
                name,
                value,
                onChange
            }}
        >
            NHS Number Input
        </InputField>
    );
}

export default NHSnumberInput;
