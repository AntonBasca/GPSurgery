import React from "react";
import { Page, SectionBreak } from "govuk-react";
import GPService from "./title";
import { useState } from "react";
import "./App.css";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";

function BookAppointment() {
  const [regId, setRegId] = useState("");
  const [nhs, setNhs] = useState("");
  const [date, setDate] = useState(new Date());

  const onChangeDate = (event) => {
    setDate(event.target.value);
  };
  const onChangeRegId = (event) => {
    setRegId(event.target.value);
  };
  const onChangeNHS = (event) => {
    setNhs(event.target.value);
  };

  const handleSubmit = () => {
    console.log(date);
    fetch(`http://localhost:3000/db.php?email=holgan@gmail.com`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          // setUser(data);
        } else {
          // setError("Invalid email or password");
          //   displayError("Invalid email or password");
        }
        console.log("Data received from PHP script:");
        console.log(data);
      })
      .catch((error) => {
        //   setError("Failed to retrieve user data");
        console.log("Failed to retrieve user data from PHP script:");
        console.error(error);
      });
  };

  return (
    <>
      <Page>
        <GPService />
        <h1>Book Appointment</h1>

        <div className="container">
          <div>
            <DateTimePicker onChange={setDate} value={date} />
          </div>

          <div className="input">
            Doct RegID :{" "}
            <input type="text" onChange={onChangeRegId} value={regId}></input>
          </div>
          <div className="input">
            NHS Number :{" "}
            <input type="text" onChange={onChangeNHS} value={nhs}></input>
          </div>

          <button onClick={handleSubmit}>book</button>
        </div>
      </Page>
    </>
  );
}

export default BookAppointment;
