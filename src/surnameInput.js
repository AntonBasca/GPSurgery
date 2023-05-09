import React from 'react';
import { InputField } from 'govuk-react';

function SurnameInput({ name, value, onChange }) {
    return (
        <InputField
            input={{
                name,
                value,
                onChange,
            }}
        >
            SURNAME
        </InputField>
    );
}

export default SurnameInput;
