import React from 'react';
import { InputField } from 'govuk-react';

function EmailInput(props) {
    const { value, onChange } = props;

    return (
        <InputField
            input={{
                type: 'email',
                name: 'emailLogin',
                value: value,
                onChange: onChange
            }}
        >
            EMAIL
        </InputField>
    );
}

export default EmailInput;
