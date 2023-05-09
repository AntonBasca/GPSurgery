import React from 'react';
import { ButtonArrow, Button } from 'govuk-react';

function RegisterButton2(props) {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Send a POST request to the server with the form data
        fetch('http://localhost/register.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(props.formData)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                // Display success message to the user
                alert('Registration successful!');
            })
            .catch(error => {
                console.error(error);
                // Display error message to the user
                alert('Registration failed!');
            });
    };

    return (
        <Button
            type="submit"
            icon={<ButtonArrow />}
            start
            onClick={handleSubmit}
        >
            REGISTER
        </Button>
    );
}

export default RegisterButton2;
