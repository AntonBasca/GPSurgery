import React from 'react';
import { InputField } from 'govuk-react';

function AddressInput({ name, value, onChange }) {
    return (
        <InputField
            input={{
                name,
                value,
                onChange
            }}
        >
            ADDRESS
        </InputField>
    );
}

export default AddressInput;
