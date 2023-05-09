import React from 'react';
import { Table, Button, H2, SectionBreak } from 'govuk-react';
import { useState, useEffect } from "react";
import $ from "jquery";

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const AppTable = () => {
    const [vaccinename, setVacName] = useState({});
    const [doseno, setDoseNo] = useState({});
    const [patients, setPatients] = useState([]);
    const [appointments, setAppointments] = useState([]);
    const [fullname, setFullName] = useState('');

    const doctorId = 1;

    useEffect(() => {
        // Fetch user details from the database
        $.getJSON("http://localhost:4000/www/select-patient.php", function (data) {
            setPatients(data);
        }).fail(function (error) {
            console.log(error);
        });
    }, []);

    useEffect(() => {
        // Fetch user details from the database
        $.getJSON(`http://localhost:4000/www/select-doctor-id.php?id=${doctorId}`, function (data) {
            setFullName(data[0].DocFullName);
        })
            .fail(function (error) {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        // Fetch vaccine data for each patient
        patients.forEach(patient => {
            const nhsNumber = patient.NHSNumber;
            $.getJSON(`http://localhost:4000/www/select-vaccine-nhs.php?id=${nhsNumber}`, function (data) {
                setVacName(vaccinename => ({ ...vaccinename, [nhsNumber]: data[0].DisplayName }));
                setDoseNo(doseno => ({ ...doseno, [nhsNumber]: data[0].DoseNo }));
            }).fail(function (error) {
                console.log(error);
            });
        })
    }, [patients]);


    useEffect(() => {
        // Fetch appointments data for each patient
        patients.forEach(patient => {
            const nhsNumber = patient.NHSNumber;
            $.getJSON(`http://localhost:4000/www/select-appointment-nhs.php?id=${nhsNumber}`, function (data) {
                setAppointments(appointments => [...appointments, { nhsNumber: nhsNumber, appointments: data }]);
            }).fail(function (error) {
                console.log(error);
            });
        })
    }, [patients]);

    return (
        <>
            <H2>{fullname}</H2>
            <SectionBreak level="LARGE" visible />
            {patients.map((patient) => {
                const {
                    Forename,
                    Surname,
                    NHSNumber,
                } = patient;
                const patientAppointments = appointments.find(appointmentsObj => appointmentsObj.nhsNumber === NHSNumber)?.appointments || [];

                return (
                    <div key={NHSNumber}>
                        <Table className="govuk-table" caption={Forename + " " + Surname}>
                            {patientAppointments.map(appointment => (
                                <Table.Row key={appointment.AppointmentNo}>
                                    <Table.CellHeader> No {appointment.AppointmentNo} |</Table.CellHeader>
                                    <Table.Cell>
                                        {"Date : " +
                                            appointment.AppointmentDate +
                                            " | " +
                                            "Hour : " +
                                            appointment.AppointmentHour +
                                            " | " +
                                            "Brand : " + vaccinename[patient.NHSNumber] + " | Dose : " + doseno[patient.NHSNumber]
                                        }
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table>
                        <a href={`record-page?id=${NHSNumber}`}>
                            <Button start>MEDICAL RECORD</Button>
                        </a>
                    </div>
                );
            })}
        </>
    );
};

export default AppTable;

