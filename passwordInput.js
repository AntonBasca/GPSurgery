import React from 'react';
import { InputField } from 'govuk-react';

function PasswordInput(props) {
    const { password, onChange } = props;

    return (
        <>
            <InputField
                input={{
                    type: 'password',
                    name: 'password',
                    value: password,
                    onChange: onChange
                }}
            >
                PASSWORD
            </InputField>
        </>
    );
}

export default PasswordInput;
