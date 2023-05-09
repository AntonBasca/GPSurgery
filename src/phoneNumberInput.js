import React from 'react';
import { InputField } from 'govuk-react';

function Inputphnnu({ name, value, onChange }) {
    return (
        <InputField
            input={{
                name,
                value,
                onChange
            }}
        >
            PHONE NUMBER
        </InputField>
    );
}

export default Inputphnnu;
