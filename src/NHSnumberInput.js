import React from 'react';
import { InputField } from 'govuk-react';
function NHSnumberInput() {
    return (
        <>

            <InputField
                input={{
                    name: 'NHSnumberInput'
                }}
            >
                NHS Number Input
            </InputField>

        </>
    );
}
export default NHSnumberInput;