import React from 'react';
import { InputField } from 'govuk-react';

function PostCodeInput({ name, value, onChange }) {
    return (
        <InputField
            input={{
                name,
                value,
                onChange
            }}
        >
            POSTCODE
        </InputField>
    );
}

export default PostCodeInput;
