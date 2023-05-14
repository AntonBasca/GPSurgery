import React, { useState } from "react";
import { Page, SectionBreak } from "govuk-react";
import EmailInput from "./emailInput";
import PasswordInput from "./passwordInput";
import GPService from "./title";
import RegisterButton from "./registerButton";
import LoginPageButton from "./loginPageButton";

function LoginPatient() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    console.log("handleLogin called");
    fetch(`http://localhost:3000/www/db.php?email=${email}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data && data.PatientPassword && password === data.Password) {
          setUser(data);
        } else {
          setError("Invalid email or password");
          displayError("Invalid email or password");
        }
        console.log("Data received from PHP script:");
        console.log(data);
      })
      .catch((error) => {
        setError("Failed to retrieve user data");
        console.log("Failed to retrieve user data from PHP script:");
        console.error(error);
      });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);
    handleLogin();
  };

  const displayError = (errorMessage) => {
    console.log(errorMessage);
    alert(errorMessage);
  };

  return (
    <>
      <Page>
        <form onSubmit={handleFormSubmit}>
          <GPService />
          <EmailInput value={email} onChange={handleEmailChange} />
          <br />
          <PasswordInput value={password} onChange={handlePasswordChange} />
          <br />
          <LoginPageButton />
        </form>
        <RegisterButton />
        {user && (
          <>
            <SectionBreak />

            {(window.location.href = "/doctor")}
          </>
        )}
      </Page>
    </>
  );
}

export default LoginPatient;
