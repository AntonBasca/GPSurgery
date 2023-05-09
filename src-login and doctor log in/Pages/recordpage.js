import React, { useState, useEffect } from 'react';
import { Page, Table, H2, Button, SectionBreak, Link } from 'govuk-react';
import $ from 'jquery';
import { useParams, useLocation } from 'react-router-dom';

const RecordPage = () => {
    const location = useLocation();
    const id = new URLSearchParams(location.search).get('id');

    const [patient, setPatient] = useState({
        forename: '',
        surname: '',
        dob: '',
        address: '',
        postcode: '',
        phone: '',
    });

    const [doseNo, setDoseNo] = useState(null);

    useEffect(() => {
        // Fetch patient details from the database
        const url = `http://localhost:4000/www/select-patient-nhs.php?id=${id}`;
        console.log('fetching patient data from:', url);
        $.getJSON(url, function (data) {
            console.log('patient data:', data);
            setPatient({
                forename: data[0].Forename,
                surname: data[0].Surname,
                dob: data[0].PersonDOB,
                address: data[0].PatientAddress,
                postcode: data[0].Postcode,
                phone: data[0].PatientPhone,
            });
        }).fail(function (error) {
            console.log('error:', error);
        });

        // Fetch dose number from the database
        const urlDose = `http://localhost:4000/www/select-vaccine-nhs.php?id=${id}`;
        console.log('fetching dose number from:', urlDose);
        $.getJSON(urlDose, function (data) {
            console.log('dose number:', data);
            setDoseNo(data[0].DoseNo);
        }).fail(function (error) {
            console.log('error:', error);
        });
    }, [id]);

    const handleDoseNoChange = () => {
        const newDoseNo = prompt('Enter the new dose number:', doseNo);
        if (newDoseNo !== null && newDoseNo !== doseNo) {
            const url = `http://localhost:4000/www/update-doseno.php`;
            const data = {
                id: id,
                doseNo: newDoseNo,
            };
            $.ajax({
                url: url,
                type: 'PUT',
                data: data,
                success: function (result) {
                    console.log('update success:', result);
                    setDoseNo(newDoseNo);
                },
                error: function (xhr, status, error) {
                    console.log('update error:', error);
                },
            });
        }
    };

    if (!patient) {
        return <div>Loading...</div>;
    }

    return (
        <Page>
            <H2>
                {patient.forename} {patient.surname}
            </H2>
            <SectionBreak level="LARGE" visible />
            <Table caption="PATIENT DETAILS">
                <Table.Row>
                    <Table.CellHeader>FIRST NAME</Table.CellHeader>
                    <Table.Cell>{patient.forename}</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.CellHeader>SECOND NAME</Table.CellHeader>
                    <Table.Cell>{patient.surname}</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.CellHeader>DATE OF BIRTH</Table.CellHeader>
                    <Table.Cell>{patient.dob}</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.CellHeader>PHONE NUMBER</Table.CellHeader>
                    <Table.Cell>{patient.phone}</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.CellHeader>ADDRESS</Table.CellHeader>
                    <Table.Cell>{patient.address}</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.CellHeader>POSTCODE</Table.CellHeader>
                    <Table.Cell>{patient.postcode}</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.CellHeader>VACCINE DOSE NO</Table.CellHeader>
                    <Table.Cell>{doseNo} <Link href="#" onClick={handleDoseNoChange}>CHANGE</Link>   </Table.Cell>
                    
                </Table.Row>
            </Table>
            <a href="/doctor">
                <Button start>GO BACK</Button>
            </a>
            <br></br>
            <a href="/">
                <Button start>LOG OUT</Button>
            </a>
        </Page>
    );
};

export default RecordPage;