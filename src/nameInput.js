import React from 'react';
import { InputField } from 'govuk-react';
function NameInput() {
    return (
        <>

            <InputField
                input={{
                    name: 'nameInput'
                }}
            >
                NAME
            </InputField>

        </>
    );
}
export default NameInput;