import React from 'react';
import { InputField } from 'govuk-react';
function PostCodeInput() {
    return (
        <>

            <InputField
                input={{
                    name: 'PostCodeInput'
                }}
            >
                POSTCODE
            </InputField>

        </>
    );
}
export default PostCodeInput;