import React from 'react';
import { InputField } from 'govuk-react';
function SurnameInput() {
    return (
        <>

            <InputField
                input={{
                    name: 'surnameInput'
                }}
            >
                SURNAME
            </InputField>

        </>
    );
}
export default SurnameInput;